import Link from "next/link";

/**
 * Bandă de evidențiere „Punct de Constatare Daune" — pe homepage, imediat după
 * grila de servicii. Text scurt + buton care duce la pagina `/constatare-daune`.
 * Bandă închisă (antracit) cu accent-glow, ca să iasă în evidență între secțiunile
 * deschise din jur.
 */
export default function DauneBanner() {
  return (
    <section className="relative overflow-hidden bg-blueprint text-ink-invert">
      <div className="accent-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-accent-light">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent/[0.12] text-accent-light ring-1 ring-accent/20">
              <ShieldIcon />
            </span>
            Daune auto RCA
          </p>

          <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
            Punct de Constatare Daune
          </h2>

          <div className="mt-5 gauge-rule gauge-rule-accent h-2.5 max-w-sm" aria-hidden />

          <p className="mt-5 max-w-xl text-lg text-muted-invert">
            Ai avut un accident? Preluăm partea complicată: deschiderea dosarului de
            daună, constatarea cu asigurătorul și reparația prin asigurare — cu mașină
            la schimb pe durata lucrării.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/constatare-daune"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wide text-accent-ink shadow-sm transition hover:bg-accent-600 active:translate-y-px"
          >
            Vezi cum te ajutăm <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
