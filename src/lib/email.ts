import type { ContactInput } from "@/lib/contact-schema";

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Contact email service is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: input.subject || `Portfolio contact from ${input.name}`,
      text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
    }),
  });

  if (!response.ok) {
    throw new Error("Email provider rejected the message.");
  }
}
