import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
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
        eyebrow="Coaching"
        title={
          <>
            One micro action.
            <br />
            <span className="text-seal">Every day.</span>
          </>
        }
        intro={coaching.intro}
      />

      <section className="bg-paper">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Mike's role"
            title="In your corner"
            intro="Mike's pledge is simple: reach out to one person every day and be an encourager, an advisor and a cheerleader. That's the posture he brings to coaching."
          />
          <ol className="mt-12 grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
            {coaching.roles.map((r, i) => (
              <li key={r.title} className="bg-paper p-8">
                <span className="font-display text-5xl font-bold text-seal">0{i + 1}</span>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{r.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-24">
          <SectionHeading dark eyebrow="Who it's for" title="Where Mike can help" />
          <ul className="mt-12 grid gap-px bg-ink-line md:grid-cols-3">
            {coaching.focusAreas.map((f) => (
              <li key={f.title} className="bg-ink p-8">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-light">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper-deep">
        <Container className="grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Getting started"
            title="It starts with a conversation."
            intro="Tell Mike where you are and where you want to be in 12 months. Together you'll find the micro action you're willing to take even on your worst day — and build from there."
          />
          <div className="flex flex-col items-start gap-6 border-l-2 border-seal pl-8">
            <p className="font-display text-3xl font-semibold uppercase leading-tight">
              &ldquo;I want to hear about your challenges. I want to hear about your stories. More importantly, I want
              to hear about your victories.&rdquo;
            </p>
            <ButtonLink href="/contact?topic=coaching">Talk with Mike</ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Prefer to bring Mike to your team?"
        body="The KAIZEN keynote gives every person in the room a micro action to commit to for the next 12 months."
      />
    </>
  );
}
