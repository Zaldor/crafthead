/**
 * @fileoverview Contact form handler sending emails via Resend.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY;
const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hello@crafthead.studio';

const resend = resendApiKey ? new Resend(resendApiKey) : undefined;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { name, email, company, timeline, message } = payload ?? {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!resend) {
      console.warn('Resend API key missing. Contact form submission logged but not sent.');
      console.info({ name, email, company, timeline, message });

      return new Response(JSON.stringify({ success: true, notice: 'Email service not configured.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { error } = await resend.emails.send({
      from: 'Crafthead Contact <contact@crafthead.studio>',
      to: contactEmail,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
