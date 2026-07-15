import { Resend } from "resend";

interface SendEmailProps {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo = "contact@rsnestates.com",
}: SendEmailProps) {
  const apiKey =
    process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured."
    );
  }

  const resend = new Resend(apiKey);

  const { data, error } =
    await resend.emails.send({
      from:
        "RSN Estates <contact@rsnestates.com>",
      replyTo,
      to,
      subject,
      html,
    });

  if (error) {
    console.error("Resend Error:", error);
    throw error;
  }

  return data;
}