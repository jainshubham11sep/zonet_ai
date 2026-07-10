import { ENV } from '../../config/env';
import { createSmtpTransport } from './smtp.transport';

export interface MailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Transport abstraction — the rest of the app only ever calls sendMail().
 * Default transport is SMTP (works with any provider: Gmail, Zoho, SES,
 * Brevo, Mailgun…). Swap providers by changing .env only, or plug a
 * completely different transport (API-based, queue-based) via setMailTransport().
 */
export interface MailTransport {
  send(message: MailMessage & { from: string }): Promise<void>;
}

let transport: MailTransport | null = null;

export function setMailTransport(custom: MailTransport): void {
  transport = custom;
}

export async function sendMail(message: MailMessage): Promise<void> {
  if (!transport) transport = createSmtpTransport();
  await transport.send({ ...message, from: ENV.MAIL_FROM });
}
