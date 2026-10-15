"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Phone-only booking bar that slides up once the visitor scrolls past the hero. Hidden on the contact flow. */
export function MobileBookingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contact")) return null;

  const coaching = pathname.startsWith("/coaching");
  const primary = coaching
    ? { href: "/contact?topic=coaching", label: "Talk with Mike" }
    : { href: "/contact?topic=speaking", label: "Check availability" };
  const secondary = coaching
    ? { href: "/contact?topic=speaking", label: "Speaking" }
    : { href: "/contact?topic=coaching", label: "Coaching" };

  return (
    <>
      {/* Keeps the footer's last lines clear of the bar. */}
      <div aria-hidden className="h-20 md:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ash bg-obsidian/90 px-4 pt-3 backdrop-blur-md transition-transform duration-500 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden ${
          visible ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="flex gap-3">
          <Link
            href={primary.href}
            tabIndex={visible ? 0 : -1}
            className="flex-1 bg-crimson py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ivory"
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            tabIndex={visible ? 0 : -1}
            className="border border-ivory/25 px-5 py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ivory"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </>
  );
}
