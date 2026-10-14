import type { Metadata } from "next";
import { Container, Label } from "@/components/ui";
import { inquiryTopics, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book Mike Barefoot to speak at your event, or start a coaching conversation.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  const requested = typeof topic === "string" ? topic.toLowerCase() : "";
  const defaultTopic = inquiryTopics.find((t) => t.toLowerCase() === requested) ?? "Speaking";

  return (
    <section className="relative overflow-hidden bg-obsidian pt-20">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(214,31,44,0.12),transparent_50%)]" />
      <Container className="relative grid gap-20 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 lg:py-32">
        <div className="animate-hero-in">
          <Label>Contact</Label>
          <h1 className="mt-8 font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl">
            Let&apos;s talk about <span className="italic text-crimson-light">your next 12 months.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mist">
            Booking a keynote, exploring coaching, or inviting Mike on your podcast? Share a few details and he&apos;ll
            get back to you.
          </p>

          <dl className="mt-16 space-y-8 border-t border-ash pt-10">
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
          </dl>
        </div>

        <div className="animate-hero-in border border-ash bg-coal/80 p-8 [animation-delay:150ms] sm:p-12">
          <ContactForm defaultTopic={defaultTopic} />
        </div>
      </Container>
    </section>
  );
}
