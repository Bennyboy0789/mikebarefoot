"use client";

import { useRef, useState } from "react";

/** Self-hosted highlight reel: poster with a large play button, then native controls with captions. */
export function ReelPlayer({ src, captions, poster, title }: { src: string; captions: string; poster: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-coal">
      <video
        ref={ref}
        poster={poster}
        controls={started}
        preload="none"
        playsInline
        onPlay={() => setStarted(true)}
        className="h-full w-full"
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src={captions} srcLang="en" label="English" default />
      </video>
      {!started && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent"
        >
          <span className="grid h-24 w-24 place-items-center rounded-full bg-crimson shadow-[0_0_60px_rgba(214,31,44,0.45)] transition-transform duration-500 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-ivory" aria-hidden>
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-left sm:p-8">
            <span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">
                Highlight reel
              </span>
              <span className="mt-2 block font-serif text-2xl text-ivory sm:text-3xl">{title}</span>
            </span>
            <span className="text-sm text-mist">72 sec · captions</span>
          </span>
          <span className="sr-only">Play the highlight reel</span>
        </button>
      )}
    </div>
  );
}
