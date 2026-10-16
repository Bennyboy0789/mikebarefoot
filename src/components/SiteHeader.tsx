"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid h-10 w-10 place-items-center border border-crimson/70 font-serif text-lg italic text-crimson-light ${className}`}
    >
      MB
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-ash/70 bg-obsidian/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <Monogram />
          <span className="leading-none">
            <span className="block font-serif text-2xl text-ivory">{site.name}</span>
            <span className="mt-1 block text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-mist">
              {site.role}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="relative py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-mist transition-colors hover:text-ivory aria-[current=page]:text-ivory aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-px aria-[current=page]:after:bg-crimson"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-crimson/70 px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light transition-colors hover:bg-crimson hover:text-ivory"
          >
            Book Mike
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-5rem)] border-t border-ash/70 md:hidden">
          <ul className="flex flex-col px-5 pt-6">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ash/70">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block py-5 font-serif text-4xl text-ivory aria-[current=page]:text-crimson-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-crimson py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory"
            >
              Book Mike
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
