"use client";

import { useRef, useState } from "react";

/** Vertical clip with a poster and play button, then native controls. Captions are burned into the video. */
export function ClipPlayer({
  src,
  poster,
  label,
  title,
  meta,
}: {
  src: string;
  poster: string;
  label: string;
  title: string;
  meta: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-coal">
      <video
        ref={ref}
        poster={poster}
        controls={started}
        preload="none"
        playsInline
        onPlay={() => setStarted(true)}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          className="group absolute inset-0 h-full w-full text-left"
        >
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-crimson shadow-[0_0_50px_rgba(214,31,44,0.45)] transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-ivory" aria-hidden>
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-6">
            <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light">{label}</span>
            <span className="mt-2 block font-serif text-2xl leading-tight text-ivory">{title}</span>
            <span className="mt-2 block text-xs text-mist">{meta}</span>
          </span>
          <span className="sr-only">
            Play video: {label}, {title}
          </span>
        </button>
      )}
    </div>
  );
}
