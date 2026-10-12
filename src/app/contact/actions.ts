"use server";

export type InquiryState = { status: "idle" | "success" | "error"; message?: string };

const clean = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Sends inquiries through Resend's HTTP API. Configure in Vercel:
//   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (a verified sender)
// TODO(mike): confirm where inquiries should go (email, CRM, calendar booking).
export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (clean(formData.get("company_website"))) return { status: "success" };

  const name = clean(formData.get("name"), 100);
  const email = clean(formData.get("email"), 200);
  const organization = clean(formData.get("organization"), 150);
  const topic = clean(formData.get("topic"), 50);
  const eventDate = clean(formData.get("eventDate"), 50);
  const message = clean(formData.get("message"), 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please include your name, a valid email and a message." };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return { status: "error", message: "The contact form isn't connected yet. Please try again soon." };
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organization", organization],
    ["Topic", topic],
    ["Event date", eventDate],
  ];
  const html = `
    <table>${rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v)}</td></tr>`)
      .join("")}</table>
    <p style="white-space:pre-wrap">${escape(message)}</p>`;

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
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }
  return { status: "success" };
}
