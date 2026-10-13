import type { Metadata } from "next";
import { CtaBand, FeaturedIn, FramedImage, PageHero, QuoteBand, StatsGrid } from "@/components/sections";
import { Container, Label, SectionHeading } from "@/components/ui";
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
        label="About Mike"
        title={
          <>
            Life isn&apos;t linear. <span className="italic text-brass-light">Discipline is.</span>
          </>
        }
        intro="Entrepreneur, martial artist and strategist — Mike Barefoot has spent his life mastering two seemingly different worlds, only to discover they share the exact same playbook for elite success."
        image="/images/mike-stage-portrait.jpg"
        imageAlt="Mike Barefoot on stage"
      />

      <section className="bg-obsidian">
        <Container className="grid gap-20 py-28 lg:grid-cols-[1fr_22rem] lg:gap-24 lg:py-40">
          <div>
            <SectionHeading index="01" label="The story" title="Six chapters." />
            <ol className="mt-16">
              {story.map((chapter, i) => (
                <li
                  key={chapter.heading}
                  data-reveal
                  className="grid gap-4 border-t border-ash py-12 sm:grid-cols-[7rem_1fr] sm:gap-10"
                >
                  <span className="text-brass-gradient font-serif text-6xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight text-ivory sm:text-4xl">{chapter.heading}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-mist">{chapter.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <FramedImage
              src="/images/mike-stage-closeup.jpg"
              alt="Mike Barefoot speaking at Campbell University"
              width={520}
              height={760}
              caption="Campbell University · 2026"
            />
            {/* TODO(mike): replace with a professional portrait */}
            <div className="mt-12 border-l border-brass/60 pl-6">
              <Label>In his words</Label>
              <p className="mt-5 font-serif text-2xl italic leading-snug text-ivory">
                &ldquo;I always like to say I have a master&apos;s degree in business. I like to think I have a PhD in
                the school of hard knocks.&rdquo;
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <FeaturedIn />

      <section className="bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="02"
            label="By the numbers"
            title={
              <>
                Built over <span className="italic text-brass-light">decades.</span>
              </>
            }
          />
          <div className="mt-16">
            <StatsGrid />
          </div>
        </Container>
      </section>

      <QuoteBand
        quote="It's good to work hard, but it's better to work smarter."
        cite="Mike Barefoot"
        context="on micro actions"
      />

      <CtaBand />
    </>
  );
}
