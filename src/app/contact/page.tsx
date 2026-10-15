import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { schema } from "@/lib/schema";
import Image from "next/image";
import { Container, HeadingEyebrow } from "@/components/ui";
import { featuredTestimonial, inquiryTopics, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Book Mike Barefoot | Speaking & Coaching Inquiries" },
  description:
    "Check Mike Barefoot's availability for your keynote, workshop or panel, or start a coaching conversation. Only your name and email are required.",
  // ?topic= variants all consolidate here.
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  const requested = typeof topic === "string" ? topic.toLowerCase() : "";
  const defaultTopic = inquiryTopics.find((t) => t.toLowerCase() === requested) ?? "Speaking";

  return (
    <section className="relative overflow-hidden bg-obsidian pt-20">
      <JsonLd data={schema.contact} />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(214,31,44,0.12),transparent_50%)]" />
      <Container className="relative grid gap-20 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 lg:py-32">
        <div className="animate-hero-in">
          <h1>
            <HeadingEyebrow>Book Mike Barefoot · Speaking &amp; coaching</HeadingEyebrow>
            <span className="mt-8 block font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl">
              Let&apos;s talk about <span className="italic text-crimson-light">your next 12 months.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mist">
            Booking a keynote, exploring coaching, or inviting Mike on your podcast? Share a few details and he&apos;ll
            get back to you.
          </p>

          {/* A face beside the form: visitors know who they're writing to. */}
          <div className="mt-12 flex items-center gap-5">
            <Image
              src="/images/mike-office.jpg"
              alt=""
              width={160}
              height={200}
              className="h-20 w-20 rounded-full object-cover object-[50%_35%] ring-1 ring-crimson/60 ring-offset-4 ring-offset-obsidian"
            />
            <div>
              <p className="font-serif text-2xl text-ivory">{site.name}</p>
              <p className="mt-1 text-sm text-mist">Founder, {site.company}</p>
            </div>
          </div>

          <ol className="mt-10 space-y-5">
            {[
              "Share a few details. Only name and email are required.",
              "Mike replies by email.",
              "Together you shape the session or coaching plan around your goals.",
            ].map((step, i) => (
              <li key={step} className="flex gap-5 text-ivory/85">
                <span className="font-serif text-2xl leading-none text-crimson-light">0{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <figure className="mt-12 border-l border-crimson pl-6">
            <blockquote className="font-serif text-2xl italic leading-snug text-ivory">
              &ldquo;{featuredTestimonial.pull}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-mist">
              {featuredTestimonial.name}, {featuredTestimonial.org}, {featuredTestimonial.institution}
            </figcaption>
          </figure>

          <dl className="mt-12 space-y-8 border-t border-ash pt-10">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-crimson-light">Based in</dt>
              <dd className="mt-2 font-serif text-2xl text-ivory">{site.location}</dd>
            </div>
            {site.email && (
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-crimson-light">Email</dt>
                <dd className="mt-2 font-serif text-2xl text-ivory">
                  <a href={`mailto:${site.email}`} className="hover:text-crimson-light">
                    {site.email}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-crimson-light">Watch</dt>
              <dd className="mt-2 font-serif text-2xl text-ivory">
                <a href={site.social.youtube} target="_blank" rel="noopener" className="hover:text-crimson-light">
                  @MikeBarefootspeaks
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-crimson-light">Connect</dt>
              <dd className="mt-2 font-serif text-2xl text-ivory">
                <a href={site.social.linkedin} target="_blank" rel="noopener" className="hover:text-crimson-light">
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-hero-in border border-ash bg-coal/80 p-8 [animation-delay:150ms] sm:p-12">
          <ContactForm defaultTopic={defaultTopic} />
        </div>
      </Container>
    </section>
  );
}
