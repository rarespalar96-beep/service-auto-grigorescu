"use client";

import { useEffect } from "react";
import Link from "next/link";
import PhoneLink from "@/components/cta/PhoneLink";

/**
 * Stare de eroare globală (în română). Client component, conform cerinței Next.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // În producție, aici s-ar putea raporta eroarea către un serviciu de logging.
    console.error(error);
  }, [error]);

  return (
    <section className="bg-blueprint text-ink-invert">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <div className="heading-frame heading-frame-invert max-w-md px-6 py-6 text-center sm:px-8 sm:py-7">
          <h1 className="text-3xl font-bold uppercase sm:text-4xl">
            Ceva n-a mers cum trebuie
          </h1>
          <p className="mt-3 text-muted-invert">
            A apărut o eroare neașteptată. Încearcă din nou sau, dacă problema persistă,
            sună-ne și te ajutăm imediat.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-accent-ink transition hover:bg-accent-600 active:translate-y-px"
          >
            Încearcă din nou
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-antracit-600 px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink-invert transition-colors hover:border-accent hover:text-accent"
          >
            Pagina principală
          </Link>
          <PhoneLink
            sursa="error"
            className="font-display text-base font-semibold uppercase tracking-wide text-ink-invert hover:text-accent"
          >
            Sună-ne
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
