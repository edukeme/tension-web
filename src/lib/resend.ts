import { Resend } from 'resend';

export function getResend(): Resend {
  const key = import.meta.env.RESEND_API_KEY;
  if (!key) throw new Error('Missing RESEND_API_KEY');
  return new Resend(key);
}

export const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL ?? 'Mr. D <hello@tension.app>';

export const AUDIENCE_IDS = {
  checklist: import.meta.env.RESEND_AUDIENCE_CHECKLIST ?? '',
  waitlist:  import.meta.env.RESEND_AUDIENCE_WAITLIST  ?? '',
} as const;

// Minimal HTML email for the checklist delivery
export function checklistDeliveryEmail(downloadUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Georgia,serif;background:#FAF6F0;margin:0;padding:0;">
<div style="max-width:560px;margin:0 auto;padding:48px 32px;">
  <p style="font-size:20px;font-weight:600;color:#1A1410;margin:0 0 8px;">Your checklist is here.</p>
  <p style="font-size:15px;color:#6B5C50;margin:0 0 32px;">Thanks for downloading the Couples Kink Discovery Checklist. Pour two drinks, find a comfortable spot, and go through it together — not separately.</p>
  <a href="${downloadUrl}" style="display:inline-block;background:#6B1E2E;color:#F5EDE0;padding:14px 28px;border-radius:6px;font-size:15px;font-weight:600;text-decoration:none;">Download your checklist →</a>
  <hr style="border:none;border-top:1px solid #DDD0BC;margin:40px 0;">
  <p style="font-size:13px;color:#9B8C82;">A couple of things before you start: find somewhere neutral — not the bedroom. Give yourselves 30-45 minutes. The conversations that happen around the list are the whole point.</p>
  <p style="font-size:13px;color:#9B8C82;margin-top:24px;">— Mr. D</p>
  <p style="font-size:11px;color:#C4AF96;margin-top:40px;">Tension · <a href="https://tension.app" style="color:#C4AF96;">tension.app</a> · You're receiving this because you requested the free checklist.</p>
</div>
</body>
</html>`;
}

// Waitlist confirmation email
export function waitlistConfirmEmail(productTitle: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Georgia,serif;background:#FAF6F0;margin:0;padding:0;">
<div style="max-width:560px;margin:0 auto;padding:48px 32px;">
  <p style="font-size:20px;font-weight:600;color:#1A1410;margin:0 0 8px;">You're on the list.</p>
  <p style="font-size:15px;color:#6B5C50;margin:0 0 24px;">You'll be the first to know when <strong>${productTitle}</strong> launches — along with the early-bird price before it goes up.</p>
  <p style="font-size:15px;color:#6B5C50;margin:0 0 32px;">If you haven't already, the free Couples Kink Discovery Checklist is a good place to start while you wait.</p>
  <a href="https://tension.app/free-checklist" style="display:inline-block;background:#6B1E2E;color:#F5EDE0;padding:14px 28px;border-radius:6px;font-size:15px;font-weight:600;text-decoration:none;">Get the free checklist →</a>
  <hr style="border:none;border-top:1px solid #DDD0BC;margin:40px 0;">
  <p style="font-size:13px;color:#9B8C82;">— Mr. D</p>
  <p style="font-size:11px;color:#C4AF96;margin-top:40px;">Tension · <a href="https://tension.app" style="color:#C4AF96;">tension.app</a></p>
</div>
</body>
</html>`;
}
