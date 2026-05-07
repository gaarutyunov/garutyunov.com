"use client";

import { useState } from "react";

type Props = {
  command: string;
  href?: string;
};

export function CodeSnippet({ command, href }: Props) {
  const [copied, setCopied] = useState(false);

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center justify-between gap-4 rounded-md bg-card/80 px-4 py-3 font-mono text-sm hover:bg-card-hover transition-colors group"
      >
        <span className="truncate flex items-center">
          <span className="text-muted mr-2">$</span>
          <span className="text-foreground">{command}</span>
        </span>
        <span className="text-muted group-hover:text-foreground transition-colors shrink-0" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </a>
    );
  }

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-card/80 px-4 py-3 font-mono text-sm">
      <span className="truncate flex items-center">
        <span className="text-muted mr-2">$</span>
        <span className="text-foreground">{command}</span>
      </span>
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy to clipboard"
        className="text-muted hover:text-foreground transition-colors shrink-0"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
