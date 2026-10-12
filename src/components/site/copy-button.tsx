"use client";

import { useState } from "react";

export function CopyButton({
  value,
  label = "copy",
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      aria-label={`copy ${value}`}
      className={`pixel-corner-sm cursor-pointer bg-[#FF5C1A] px-4 py-2 font-mono text-xs font-bold tracking-wider text-[#0B0A08] uppercase transition-colors hover:bg-[#FFC53D] active:translate-y-px ${copied ? "!bg-[#3DDC84]" : ""} ${className}`}
    >
      {copied ? "copied!" : label}
    </button>
  );
}
