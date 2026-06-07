import type { APIRoute } from 'astro';
import { getResend, FROM_EMAIL, AUDIENCE_IDS, checklistDeliveryEmail } from '@/lib/resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let email: string;
  try {
    const body = await request.json() as { email?: unknown };
    if (typeof body.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return Response.json({ ok: false, error: 'Valid email required.' }, { status: 400 });
    }
    email = body.email.toLowerCase().trim();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  try {
    const resend = getResend();

    // Add to Resend Audience (idempotent — duplicate contacts are silently accepted)
    if (AUDIENCE_IDS.checklist) {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_IDS.checklist,
        unsubscribed: false,
      });
    }

    // Send checklist delivery email immediately
    const downloadUrl = `${import.meta.env.SITE ?? 'https://tension.app'}/downloads/tension-checklist.pdf`;
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Your checklist is here (+ one thing to know before you start)',
      html: checklistDeliveryEmail(downloadUrl),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ ok: false, error: 'Failed to send email. Please try again.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
};
