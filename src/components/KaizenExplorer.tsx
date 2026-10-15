"use client";

import { useState } from "react";
import { kaizen } from "@/content/site";

export function KaizenExplorer() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
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
            className="flex h-full min-h-[26rem] flex-col justify-end p-8 sm:p-12"
          >
            <span
              aria-hidden
              className="animate-hero-in text-crimson-gradient pointer-events-none absolute -right-2 -top-8 select-none font-serif text-[13rem] leading-none opacity-25 sm:-right-4 sm:-top-10 sm:text-[22rem] sm:opacity-90"
            >
              {item.letter}
            </span>
            <div className="animate-hero-in relative">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">
                Principle {String(i + 1).padStart(2, "0")} / 06
              </p>
              <h3 className="mt-4 font-serif text-5xl text-ivory sm:text-6xl">{item.word}</h3>
              <p className="mt-4 font-serif text-2xl italic leading-snug text-crimson-light">{item.line}</p>
              <p className="mt-6 max-w-lg leading-relaxed text-mist">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="KAIZEN principles" aria-orientation="vertical" className="flex flex-col">
        {kaizen.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.letter}
              id={`kaizen-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`kaizen-panel-${i}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
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
                  className={`block text-[0.7rem] font-semibold uppercase tracking-[0.3em] transition-colors ${
                    selected ? "text-ivory" : "text-mist"
                  }`}
                >
                  {item.word}
                </span>
                <span className="mt-1 hidden text-sm text-mist/80 sm:block">{item.line}</span>
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
