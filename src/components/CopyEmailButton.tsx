"use client";

import { useEffect, useState } from "react";

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <span aria-live="polite">{copied ? "copied ✓" : "copy email"}</span>
    </button>
  );
}
