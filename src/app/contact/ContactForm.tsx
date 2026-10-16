"use client";

import { useActionState, useState } from "react";
import { audienceSizes, eventFormats, inquiryTopics, site, type InquiryTopic } from "@/content/site";
import { sendInquiry, type InquiryState } from "./actions";

const field =
  "mt-3 w-full border-0 border-b border-smoke bg-ivory/[0.04] px-4 py-3 text-lg text-ivory transition-colors placeholder:text-mist/70 hover:bg-ivory/[0.06] focus:border-crimson-light focus:bg-ivory/[0.06] focus-visible:outline-offset-0 [&>option]:bg-coal";
const label = "text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-mist";

export function ContactForm({ defaultTopic }: { defaultTopic: InquiryTopic }) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });
  const v = state.values ?? {};
  const [topic, setTopic] = useState<string>(v.topic || defaultTopic);
  const isSpeaking = topic === "Speaking";

  return (
    // Remount after each failed attempt so the restored values are applied as defaults.
    <form key={state.values ? JSON.stringify(state.values) : "new"} action={action} className="grid gap-x-10 gap-y-7 sm:grid-cols-2 sm:gap-y-10">
      <div className="hidden" aria-hidden>
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className={label}>Name *</span>
        <input name="name" required autoComplete="name" defaultValue={v.name} className={field} />
      </label>
      <label className="block">
        <span className={label}>Email *</span>
        <input name="email" type="email" required autoComplete="email" defaultValue={v.email} className={field} />
      </label>
      <label className="block">
        <span className={label}>Organization</span>
        <input name="organization" autoComplete="organization" defaultValue={v.organization} className={field} />
      </label>
      <label className="block">
        <span className={label}>I&apos;m interested in</span>
        <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
          {inquiryTopics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      {isSpeaking && (
        <>
          <label className="block">
            <span className={label}>Event date</span>
            <input name="eventDate" placeholder="e.g. March 2027" defaultValue={v.eventDate} className={field} />
          </label>
          <label className="block">
            <span className={label}>Format</span>
            <select name="format" defaultValue={v.format ?? ""} className={field}>
              <option value="">Select…</option>
              {eventFormats.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={label}>Audience size</span>
            <select name="audienceSize" defaultValue={v.audienceSize ?? ""} className={field}>
              <option value="">Select…</option>
              {audienceSizes.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={label}>Event location</span>
            <input name="location" placeholder="City, or virtual" defaultValue={v.location} className={field} />
          </label>
        </>
      )}

      <label className="block sm:col-span-2">
        <span className={label}>Anything else Mike should know?</span>
        <textarea
          name="message"
          rows={4}
          defaultValue={v.message}
          placeholder={
            isSpeaking
              ? "Your audience, the theme of the event, and what you'd like people to walk away with."
              : "Where you are today, and where you'd like to be in 12 months."
          }
          className={field}
        />
      </label>

      <div className="flex flex-col items-start gap-4 sm:col-span-2">
        {state.status === "error" && (
          <p role="alert" className="text-sm font-medium text-crimson-light">
            {state.message}
            {site.email && (
              <>
                {" "}
                You can also email{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </>
            )}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="bg-crimson px-9 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-crimson-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : isSpeaking ? "Check Mike's availability" : "Send message"}
        </button>
        <p className="text-sm text-mist">Takes about a minute. Only name and email are required.</p>
      </div>
    </form>
  );
}
