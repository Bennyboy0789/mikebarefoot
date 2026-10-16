"use client";

import { useRef, useState } from "react";

/** Self-hosted reel: poster with a large play button, then native controls. Captions are offered, not forced on,
 * because the reel already shows every spoken line on screen. */
export function ReelPlayer({ src, captions, poster, title, meta }: { src: string; captions: string; poster: string; title: string; meta: string }) {
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
        <track kind="captions" src={captions} srcLang="en" label="English" />
      </video>
      {!started && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-crimson shadow-[0_0_60px_rgba(214,31,44,0.45)] transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-ivory sm:h-8 sm:w-8" aria-hidden>
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-left sm:p-8">
            <span>
              <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light">
                Speaker reel
              </span>
              {/* On phones the player is too short for the title and the play button together. */}
              <span className="mt-2 hidden font-serif text-3xl text-ivory sm:block">{title}</span>
            </span>
            <span className="text-xs text-mist sm:text-sm">{meta}</span>
          </span>
          <span className="sr-only">Play the speaker reel</span>
        </button>
      )}
    </div>
  );
}
