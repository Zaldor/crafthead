/**
 * Decap CMS OAuth entrypoint.
 *
 * Route: GET /api/cms-oauth/auth
 *
 * This redirects the user to GitHub's OAuth authorize endpoint.
 *
 * Env vars required in Cloudflare Pages:
 * - GITHUB_CLIENT_ID
 */

export async function onRequest({ request, env }) {
  const url = new URL(request.url);

  // Decap passes `site_id` and `origin` query params when using an OAuth proxy.
  // We'll preserve whatever it sends and also include it in state.
  const origin = url.searchParams.get('origin') || '';
  const siteId = url.searchParams.get('site_id') || '';

  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('Missing env.GITHUB_CLIENT_ID', { status: 500 });
  }

  // The callback must match the GitHub OAuth App callback URL.
  const callbackUrl = new URL('/api/cms-oauth/callback', url.origin);

  // Basic CSRF state. In a perfect world we would sign/verify this.
  // For Decap CMS popup flow, this is usually considered sufficient.
  const state = btoa(
    JSON.stringify({
      origin,
      siteId,
      ts: Date.now(),
      nonce: crypto.randomUUID(),
    }),
  );

  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', callbackUrl.toString());
  // `repo` scope is needed to write commits/PRs when using the GitHub backend.
  authUrl.searchParams.set('scope', 'repo');
  authUrl.searchParams.set('state', state);

  return Response.redirect(authUrl.toString(), 302);
}

