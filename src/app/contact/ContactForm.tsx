"use client";

import { useActionState } from "react";
import { inquiryTopics, type InquiryTopic } from "@/content/site";
import { sendInquiry, type InquiryState } from "./actions";

const field =
  "mt-3 w-full border-0 border-b border-ash bg-transparent px-0 py-3 text-lg text-ivory outline-none transition-colors placeholder:text-mist/50 focus:border-brass focus-visible:outline-none [&>option]:bg-coal";
const label = "text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-mist";

export function ContactForm({ defaultTopic }: { defaultTopic: InquiryTopic }) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });

  if (state.status === "success") {
    return (
      <div role="status" className="border border-brass/40 bg-coal p-10">
        <p className="font-serif text-4xl text-ivory">
          Message <span className="italic text-brass-light">received.</span>
        </p>
        <p className="mt-4 text-mist">Thanks for reaching out — Mike will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
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
          <p role="alert" className="text-sm font-medium text-brass-light">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="bg-brass px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-obsidian transition-colors hover:bg-brass-light disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
