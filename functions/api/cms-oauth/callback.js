/**
 * Decap CMS OAuth callback.
 *
 * Route: GET /api/cms-oauth/callback
 *
 * Exchanges the GitHub `code` for an access token, then posts it back to the
 * Decap CMS window that opened the popup.
 *
 * Env vars required in Cloudflare Pages:
 * - GITHUB_CLIENT_ID
 * - GITHUB_CLIENT_SECRET
 */

function html(body) {
  return new Response(`<!doctype html><meta charset="utf-8">${body}`, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      // Avoid caching tokens.
      'cache-control': 'no-store',
    },
  });
}

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const stateRaw = url.searchParams.get('state');

  if (error) {
    return html(`<p>OAuth error: ${error}</p>`);
  }
  if (!code) {
    return html('<p>Missing OAuth code.</p>');
  }

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new Response('Missing GITHUB_CLIENT_ID/GITHUB_CLIENT_SECRET', { status: 500 });
  }

  // Decode state if present (used only to recover origin for postMessage).
  let origin = url.origin;
  try {
    if (stateRaw) {
      const decoded = JSON.parse(atob(stateRaw));
      if (decoded?.origin) origin = decoded.origin;
    }
  } catch {
    // ignore
  }

  // Exchange code for token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      'user-agent': 'decap-cms-oauth-proxy',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  if (!tokenRes.ok) {
    const text = await tokenRes.text();
    return html(`<p>Token exchange failed.</p><pre>${text}</pre>`);
  }

  const tokenJson = await tokenRes.json();
  const token = tokenJson.access_token;
  if (!token) {
    return html(`<p>Missing access_token in response.</p><pre>${JSON.stringify(tokenJson, null, 2)}</pre>`);
  }

  // Decap CMS listens for a postMessage from the popup.
  // There are a few historical message formats across Netlify/Decap;
  // sending multiple improves compatibility.
  const payload = {
    token,
    provider: 'github',
  };

  const script = `
    (function () {
      var origin = ${JSON.stringify(origin)};
      var payload = ${JSON.stringify(payload)};

      function post(msg) {
        try {
          window.opener && window.opener.postMessage(msg, origin);
        } catch (e) {
          // ignore
        }
      }

      // Common formats used by Netlify/Decap auth flows
      post('authorization:github:success:' + payload.token);
      post({ type: 'authorization:github:success', token: payload.token, provider: 'github' });
      post({ token: payload.token, provider: 'github' });

      window.close();
    })();
  `;

  return html(`<script>${script}</script><p>Authorised. You may close this window.</p>`);
}

