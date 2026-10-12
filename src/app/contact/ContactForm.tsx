"use client";

import { useActionState } from "react";
import { inquiryTopics, type InquiryTopic } from "@/content/site";
import { sendInquiry, type InquiryState } from "./actions";

const field =
  "mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-stone-light focus:border-ink";
const label = "font-display text-sm font-semibold uppercase tracking-[0.2em]";

export function ContactForm({ defaultTopic }: { defaultTopic: InquiryTopic }) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });

  if (state.status === "success") {
    return (
      <div role="status" className="border-l-2 border-seal bg-white p-8">
        <p className="font-display text-3xl font-bold uppercase">Message received.</p>
        <p className="mt-3 text-stone">Thanks for reaching out — Mike will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-6 sm:grid-cols-2">
      <div className="hidden" aria-hidden>
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className={label}>Name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>Email *</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className={label}>Organization</span>
        <input name="organization" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className={label}>I&apos;m interested in</span>
        <select name="topic" defaultValue={defaultTopic} className={field}>
          {inquiryTopics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Event date (if applicable)</span>
        <input name="eventDate" type="text" placeholder="e.g. March 2027" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Message *</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell Mike about your audience, your goals and what you'd like to change over the next 12 months."
          className={field}
        />
      </label>

      <div className="flex flex-col items-start gap-4 sm:col-span-2">
        {state.status === "error" && (
          <p role="alert" className="text-sm font-medium text-seal">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="bg-seal px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-seal-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
