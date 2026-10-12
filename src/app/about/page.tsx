import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, MediaBar, PageHero, StatsGrid } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { story } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "From Campbell basketball camp to the keynote stage: Mike Barefoot's path through NC State, a 27-year staffing career, founding his own firm, and 37 years of martial arts.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mike"
        title={
          <>
            Life&apos;s not linear.
            <br />
            <span className="text-seal">Discipline is.</span>
          </>
        }
        intro="Entrepreneur, martial artist and strategist, Mike Barefoot has spent his life mastering two seemingly different worlds — and discovered they share the exact same playbook for elite success."
      />

      <section className="bg-paper">
        <Container className="grid gap-16 py-24 lg:grid-cols-[1fr_20rem]">
          <ol className="relative space-y-14 border-l border-ink/15 pl-8 sm:pl-12">
            {story.map((chapter, i) => (
              <li key={chapter.heading} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[calc(2rem+0.4rem)] top-1.5 h-3 w-3 bg-seal sm:-left-[calc(3rem+0.4rem)]"
                />
                <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-stone">
                  Chapter {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-none sm:text-4xl">
                  {chapter.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">{chapter.body}</p>
              </li>
            ))}
          </ol>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Image
              src="/images/campbell-keynote.jpg"
              alt="Mike Barefoot on stage at Campbell University"
              width={404}
              height={720}
              className="aspect-[3/4] w-full object-cover object-[50%_40%]"
            />
            {/* TODO(mike): replace with a professional headshot */}
            <blockquote className="mt-8 border-l-2 border-seal pl-5">
              <p className="font-display text-2xl font-semibold uppercase leading-tight">
                &ldquo;I want the relationship more than I want the money.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-stone">— Mike Barefoot</footer>
            </blockquote>
          </aside>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-24">
          <SectionHeading dark eyebrow="By the numbers" title="Built over decades." />
          <div className="mt-12">
            <StatsGrid />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-deep">
        <Container className="py-8">
          <MediaBar />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
