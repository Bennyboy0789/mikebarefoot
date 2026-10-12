import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-stone-light">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.12em] text-paper">{site.name}</p>
          <p className="mt-1 font-display text-sm uppercase tracking-[0.2em] text-seal">{site.role}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Martial arts discipline. Boardroom strategy. One playbook for elite performance.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.social.youtube} className="transition-colors hover:text-paper" rel="noopener" target="_blank">
                YouTube
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
                  {site.email}
                </a>
              </li>
            )}
            <li>{site.location}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-ink-line">
        <Container className="py-6 text-xs">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
