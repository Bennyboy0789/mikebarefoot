"use server";

import { track } from "@vercel/analytics/server";
import { redirect } from "next/navigation";

// On error, the submitted values come back so the form can be restored (React resets forms after an action).
export type InquiryState = { status: "idle" | "error"; message?: string; values?: Record<string, string> };

const clean = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Sends inquiries through Resend's HTTP API. Configure in Vercel:
//   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (a verified sender)
// TODO(mike): confirm where inquiries should go (email, CRM, calendar booking).
export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot: real visitors never see or fill this field. Bots get the normal thank-you page.
  if (clean(formData.get("company_website"))) redirect("/contact/thanks");

  const name = clean(formData.get("name"), 100);
  const email = clean(formData.get("email"), 200);
  const organization = clean(formData.get("organization"), 150);
  const topic = clean(formData.get("topic"), 50);
  const eventDate = clean(formData.get("eventDate"), 50);
  const format = clean(formData.get("format"), 50);
  const audienceSize = clean(formData.get("audienceSize"), 50);
  const location = clean(formData.get("location"), 150);
  const message = clean(formData.get("message"), 5000);
  const values = { name, email, organization, topic, eventDate, format, audienceSize, location, message };

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please include your name and a valid email.", values };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return { status: "error", message: "The contact form isn't connected yet. Please try again soon.", values };
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organization", organization],
    ["Topic", topic],
    ["Event date", eventDate],
    ["Format", format],
    ["Audience size", audienceSize],
    ["Location", location],
  ];
  const html = `
    <table>${rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v)}</td></tr>`)
      .join("")}</table>
    ${message ? `<p style="white-space:pre-wrap">${escape(message)}</p>` : ""}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `${topic || "Website"} inquiry from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return { status: "error", message: "Something went wrong sending your message. Please try again.", values };
  }

  // Custom events need a Vercel Pro plan; the thank-you page view is the plan-independent conversion signal.
  await track("Inquiry", { topic: topic || "Unknown" }).catch(() => {});
  redirect(`/contact/thanks?topic=${encodeURIComponent(topic.toLowerCase())}`);
}
