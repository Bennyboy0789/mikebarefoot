import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
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
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span className="text-seal">your next 12 months.</span>
          </>
        }
        intro="Booking a keynote, exploring coaching, or inviting Mike on your podcast? Share a few details and he'll get back to you."
      />

      <section className="bg-paper">
        <Container className="grid gap-16 py-24 lg:grid-cols-[1fr_18rem]">
          <ContactForm defaultTopic={defaultTopic} />

          <aside className="space-y-8 text-stone">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink">Based in</p>
              <p className="mt-2">{site.location}</p>
            </div>
            {site.email && (
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink">Email</p>
                <a href={`mailto:${site.email}`} className="mt-2 block hover:text-ink">
                  {site.email}
                </a>
              </div>
            )}
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink">Watch</p>
              <a href={site.social.youtube} target="_blank" rel="noopener" className="mt-2 block hover:text-ink">
                YouTube — @MikeBarefootspeaks
              </a>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
