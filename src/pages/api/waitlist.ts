import type { APIRoute } from 'astro';
import { getResend, FROM_EMAIL, AUDIENCE_IDS, waitlistConfirmEmail } from '@/lib/resend';

export const prerender = false;

const PRODUCT_TITLES: Record<string, string> = {
  '7-scenes-first-explorations': '7 Beginner D/s Scenes: First Explorations',
  '7-scenes-deep-game':   '7 Intermediate D/s Scenes: The Deep Game',
  '7-scenes-the-edge':    '7 Advanced D/s Scenes: The Edge',
  'brat-playbook':        'The Brat Dynamics Playbook',
  'verbal-arsenal':       'The Verbal Arsenal',
  'negotiation-workbook': 'The Kink Conversation Workbook',
  'erotic-tales':         '10 Erotic Tales for Couples',
  'bundle':               'The D/s Mastery Collection',
};

export const POST: APIRoute = async ({ request }) => {
  let email: string;
  let product_slug: string;

  try {
    const body = await request.json() as { email?: unknown; product_slug?: unknown };
    if (typeof body.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return Response.json({ ok: false, error: 'Valid email required.' }, { status: 400 });
    }
    if (typeof body.product_slug !== 'string' || !PRODUCT_TITLES[body.product_slug]) {
      return Response.json({ ok: false, error: 'Unknown product.' }, { status: 400 });
    }
    email = body.email.toLowerCase().trim();
    product_slug = body.product_slug;
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const productTitle = PRODUCT_TITLES[product_slug]!;

  try {
    const resend = getResend();

    // Add to waitlist audience with product tag
    if (AUDIENCE_IDS.waitlist) {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_IDS.waitlist,
        unsubscribed: false,
      });
    }

    // Send waitlist confirmation
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `You're on the list for ${productTitle}`,
      html: waitlistConfirmEmail(productTitle),
    });

    if (error) {
      console.error('Resend waitlist error:', error);
      return Response.json({ ok: false, error: 'Failed to send confirmation. Please try again.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Waitlist error:', err);
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
};
