"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

/**
 * Banner cookie minimal (GDPR). Apare până la o alegere; se așază deasupra barei
 * mobile fixe. „Acceptă" activează GA4 (vezi Analytics); „Refuză" îl ține oprit.
 */
export default function CookieBanner() {
  const [vizibil, setVizibil] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVizibil(true);
  }, []);

  if (!vizibil) return null;

  const alege = (val: "accepted" | "rejected") => {
    setConsent(val);
    setVizibil(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Setări cookie"
      className="fixed inset-x-0 bottom-14 z-[60] border-t border-antracit-600 bg-antracit text-ink-invert lg:bottom-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-invert">
          Folosim cookie-uri pentru a înțelege cum e folosit site-ul și a îmbunătăți
          experiența. Vezi{" "}
          <Link href="/politica-de-confidentialitate" className="text-accent-light underline">
            politica de confidențialitate
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => alege("rejected")}
            className="rounded-md border border-antracit-600 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-invert transition-colors hover:border-accent"
          >
            Refuză
          </button>
          <button
            type="button"
            onClick={() => alege("accepted")}
            className="rounded-md bg-accent px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent-600"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
}
