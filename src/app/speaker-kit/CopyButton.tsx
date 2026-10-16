"use client";

import { useState } from "react";

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions, insecure context); the text is still selectable on the page.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="border border-ivory/25 px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:border-crimson hover:text-crimson-light"
    >
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
