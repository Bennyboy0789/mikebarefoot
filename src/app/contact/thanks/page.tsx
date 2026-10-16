import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Label } from "@/components/ui";
import { featuredTestimonial } from "@/content/site";

// Dedicated URL so every completed inquiry shows up as a page view in analytics.
export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default async function ThanksPage({ searchParams }: PageProps<"/contact/thanks">) {
  const { topic } = await searchParams;
  const speaking = topic === "speaking";

  return (
    <section className="relative overflow-hidden bg-obsidian pt-20">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,31,44,0.16),transparent_55%)]" />
      <Container className="relative py-24 lg:py-32">
        <div className="animate-hero-in max-w-3xl">
          <Label>Message received</Label>
          <h1 className="mt-8 font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl">
            Thank you. <span className="italic text-crimson-light">Mike will be in touch.</span>
          </h1>
          {/* TODO(mike): add a typical response time once he confirms one. */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
            {speaking
              ? "Your event details are on their way to Mike. He'll reply by email to learn more about your audience and what you'd like them to walk away with."
              : "Your message is on its way to Mike, and he'll reply by email."}
          </p>
        </div>

        <ol className="mt-20 grid gap-px border border-ash bg-ash md:grid-cols-3">
          {[
            { step: "01", title: "Message sent", body: "Your note and details went straight to Mike." },
            {
              step: "02",
              title: "Mike replies",
              body: speaking ? "He'll follow up by email about your date, audience and goals." : "He'll follow up by email.",
            },
            {
              step: "03",
              title: speaking ? "Shape the session" : "Start the conversation",
              body: speaking
                ? "Together you'll choose the topic and format that fit your event."
                : "Talk through where you are and where you want to be in 12 months.",
            },
          ].map((s) => (
            <li key={s.step} className="bg-obsidian p-8 sm:p-10">
              <span className="text-crimson-gradient font-serif text-5xl leading-none">{s.step}</span>
              <h2 className="mt-6 font-serif text-3xl text-ivory">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-mist">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <figure className="max-w-2xl border-l border-crimson pl-8">
            <blockquote className="font-serif text-3xl italic leading-snug text-ivory">
              &ldquo;{featuredTestimonial.pull}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-mist">
              {featuredTestimonial.name}, {featuredTestimonial.institution}
            </figcaption>
          </figure>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/speaking">While you wait: watch the keynote</ButtonLink>
            <Link
              href="/"
              className="inline-flex items-center px-2 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-mist hover:text-ivory"
            >
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
