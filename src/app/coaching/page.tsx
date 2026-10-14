import type { Metadata } from "next";
import { CtaBand, FramedImage, PageHero } from "@/components/sections";
import { ButtonLink, Container, Label, SectionHeading } from "@/components/ui";
import { coaching } from "@/content/site";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Leadership and career coaching with Mike Barefoot — built on the KAIZEN principle of continuous improvement and 27 years of helping people make their biggest decisions.",
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        label="Coaching"
        title={
          <>
            One micro action. <span className="italic text-crimson-light">Every day.</span>
          </>
        }
        intro={coaching.intro}
        image="/images/mike-closeup.jpg"
        imageAlt="Mike Barefoot"
      />

      {/* Roles */}
      <section className="bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="01"
            label="Mike's role"
            title={
              <>
                In your <span className="italic text-crimson-light">corner.</span>
              </>
            }
            intro="Mike's pledge is simple: reach out to one person every day and be an encourager, an advisor and a cheerleader. That's the posture he brings to coaching."
          />
          <ol data-reveal className="mt-16 grid gap-px border border-ash bg-ash md:grid-cols-3">
            {coaching.roles.map((r, i) => (
              <li key={r.title} className="bg-obsidian p-10">
                <span className="text-crimson-gradient font-serif text-7xl leading-none">0{i + 1}</span>
                <h3 className="mt-8 font-serif text-4xl text-ivory">{r.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{r.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="border-t border-ash bg-coal">
        <Container className="grid gap-20 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-40">
          <FramedImage
            src="/images/mike-wide.jpg"
            alt="Mike Barefoot speaking"
            width={864}
            height={1080}
            className="mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:self-start"
          />
          <div>
            <SectionHeading index="02" label="Who it's for" title="Where Mike can help." />
            <ul className="mt-14 border-t border-ash">
              {coaching.focusAreas.map((f) => (
                <li key={f.title} data-reveal className="border-b border-ash py-10">
                  <h3 className="font-serif text-4xl text-ivory">{f.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Getting started */}
      <section className="relative overflow-hidden border-t border-ash bg-obsidian">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(214,31,44,0.14),transparent_55%)]" />
        <Container className="relative grid gap-16 py-28 lg:grid-cols-2 lg:items-center lg:gap-24 lg:py-36">
          <SectionHeading
            index="03"
            label="Getting started"
            title="It starts with a conversation."
            intro="Tell Mike where you are and where you want to be in 12 months. Together you'll find the micro action you're willing to take even on your worst day — and build from there."
          />
          <figure data-reveal className="border-l border-crimson pl-8">
            <blockquote className="font-serif text-3xl italic leading-snug text-ivory sm:text-4xl">
              &ldquo;I want to hear about your challenges. I want to hear about your stories. More importantly, I want
              to hear about your victories.&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <Label>Mike Barefoot</Label>
            </figcaption>
            <ButtonLink href="/contact?topic=coaching" className="mt-10">
              Talk with Mike
            </ButtonLink>
          </figure>
        </Container>
      </section>

      <CtaBand
        title={
          <>
            Prefer to bring Mike <span className="italic text-crimson-light">to your team?</span>
          </>
        }
        body="The KAIZEN keynote gives every person in the room a micro action to commit to for the next 12 months."
      />
    </>
  );
}
