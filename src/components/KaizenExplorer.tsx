"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { kaizen } from "@/content/site";

export function KaizenExplorer() {
  return (
    <>
      <KaizenAccordion />
      <KaizenTabs />
    </>
  );
}

/** Phones: one principle open at a time, its text directly under the letter that was tapped.
 * Native <details name> makes the group exclusive without JS. */
function KaizenAccordion() {
  return (
    <div className="border-t border-ash lg:hidden">
      {kaizen.map((item, i) => (
        <details key={item.letter} name="kaizen" open={i === 0} className="group border-b border-ash open:border-crimson/60">
          <summary className="flex cursor-pointer list-none items-center gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="w-12 font-serif text-5xl leading-none text-ivory/25 transition-colors group-open:text-crimson-light">
              {item.letter}
            </span>
            <span className="flex-1">
              <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-mist group-open:text-ivory">
                {item.word}
              </span>
              <span className="mt-1 block text-sm text-mist/80">{item.line}</span>
            </span>
            <span aria-hidden className="font-serif text-3xl leading-none text-crimson-light transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-6 pl-[4.5rem] leading-relaxed text-mist">{item.body}</p>
        </details>
      ))}
    </div>
  );
}

/** Desktop: tabs beside a large panel. Click or arrow keys switch principles. */
function KaizenTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent) => {
    const last = kaizen.length - 1;
    const next = { ArrowDown: active + 1, ArrowUp: active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const i = (next + kaizen.length) % kaizen.length;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <div className="hidden gap-20 lg:grid lg:grid-cols-[1.15fr_1fr]">
      {/* Panels: all six are server-rendered so crawlers see every principle; inactive ones are hidden.
          A CSS animation restarts when an element leaves display:none, so each reveal still animates. */}
      <div className="relative min-h-[26rem] overflow-hidden border border-ash bg-coal">
        {kaizen.map((item, i) => (
          <div
            key={item.letter}
            id={`kaizen-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`kaizen-tab-${i}`}
            hidden={i !== active}
            className="flex h-full min-h-[26rem] flex-col justify-end p-12"
          >
            <span
              aria-hidden
              className="animate-hero-in text-crimson-gradient pointer-events-none absolute -right-4 -top-10 select-none font-serif text-[22rem] leading-none opacity-90"
            >
              {item.letter}
            </span>
            <div className="animate-hero-in relative">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light">
                Principle {String(i + 1).padStart(2, "0")} / 06
              </p>
              <h3 className="mt-4 font-serif text-6xl text-ivory">{item.word}</h3>
              <p className="mt-4 font-serif text-2xl italic leading-snug text-crimson-light">{item.line}</p>
              <p className="mt-6 max-w-lg leading-relaxed text-mist">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div role="tablist" aria-label="KAIZEN principles" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col">
        {kaizen.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.letter}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`kaizen-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`kaizen-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-6 border-b py-5 text-left transition-colors duration-300 first:border-t ${
                selected ? "border-crimson/60" : "border-ash hover:border-ash"
              }`}
            >
              <span
                className={`w-12 font-serif text-5xl leading-none transition-colors duration-300 ${
                  selected ? "text-crimson-light" : "text-ivory/25 group-hover:text-ivory/60"
                }`}
              >
                {item.letter}
              </span>
              <span className="flex-1">
                <span
                  className={`block text-[0.75rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                    selected ? "text-ivory" : "text-mist"
                  }`}
                >
                  {item.word}
                </span>
                <span className="mt-1 block text-sm text-mist/80">{item.line}</span>
              </span>
              <span
                aria-hidden
                className={`h-px bg-crimson transition-all duration-500 ${selected ? "w-10" : "w-0"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
