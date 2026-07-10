import { ENV } from '../../../config/env';

interface MagicLinkEmailInput {
  name: string;
  siteUrl: string;
  magicLink: string;
  issueCount: number;
}

/**
 * Branded magic-link email — table-based HTML so it renders in every client.
 * Brand tokens: cream #F7F6F3 bg, white card, #1A1A1A text, #E8C547 CTA.
 */
export function renderMagicLinkEmail(input: MagicLinkEmailInput): {
  subject: string;
  html: string;
  text: string;
} {
  const { name, siteUrl, magicLink, issueCount } = input;
  const logoUrl = `${ENV.CLIENT_URL}/images/zonet/logo-black.png`;
  const issueLine =
    issueCount > 0
      ? `We found <strong>${issueCount} issue${issueCount === 1 ? '' : 's'}</strong> on <strong>${siteUrl}</strong> that could be costing you customers.`
      : `Your full audit of <strong>${siteUrl}</strong> is ready.`;

  const subject =
    issueCount > 0
      ? `Your website audit is ready — ${issueCount} issue${issueCount === 1 ? '' : 's'} found`
      : 'Your website audit is ready';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F7F6F3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F6F3;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:0 0 24px 0;">
              <a href="${ENV.CLIENT_URL}" target="_blank" style="text-decoration:none;">
                <img src="${logoUrl}" alt="ZonetTech" width="140" style="display:block;border:0;max-width:140px;height:auto;" />
              </a>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#FFFFFF;border:1px solid #E6E4DF;border-radius:16px;padding:40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.3;color:#1A1A1A;font-weight:bold;padding-bottom:16px;">
                    Your full audit report is ready
                  </td>
                </tr>
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#686B6B;padding-bottom:8px;">
                    Hi ${name},
                  </td>
                </tr>
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#686B6B;padding-bottom:24px;">
                    ${issueLine} Open your secure report to see every finding — and what each one means for your business.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <a href="${magicLink}" target="_blank"
                      style="display:inline-block;background-color:#E8C547;color:#1A1A1A;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;text-decoration:none;padding:14px 32px;border-radius:9999px;">
                      Open my full report
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#686B6B;border-top:1px solid #E6E4DF;padding-top:24px;">
                    This link is personal to you and expires in 24 hours. If the button doesn't work, copy this address into your browser:<br />
                    <a href="${magicLink}" style="color:#686BAB;word-break:break-all;">${magicLink}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 8px 0 8px;">
              <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#686B6B;margin:0;">
                ZonetTech — AI-powered development agency<br />
                You received this email because you requested a website audit at
                <a href="${ENV.CLIENT_URL}" style="color:#686BAB;">${ENV.CLIENT_URL.replace(/^https?:\/\//, '')}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `Hi ${name},`,
    '',
    issueCount > 0
      ? `We found ${issueCount} issue${issueCount === 1 ? '' : 's'} on ${siteUrl} that could be costing you customers.`
      : `Your full audit of ${siteUrl} is ready.`,
    '',
    'Open your full report (link expires in 24 hours):',
    magicLink,
    '',
    '— ZonetTech',
  ].join('\n');

  return { subject, html, text };
}
