import Link from "next/link";
import BookingButton from "@/components/cta/BookingButton";
import PhoneLink from "@/components/cta/PhoneLink";

export default function NotFound() {
  return (
    <section className="bg-blueprint text-ink-invert">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-display text-7xl font-bold text-accent sm:text-8xl">404</p>
        <div className="mt-5 gauge-rule gauge-rule-accent h-2.5 w-40" aria-hidden />
        <h1 className="mt-6 text-3xl font-bold uppercase sm:text-4xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mt-4 max-w-md text-muted-invert">
          Se pare că ai ajuns pe un drum închis. Pagina căutată nu există sau a fost
          mutată. Hai înapoi pe traseu.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-antracit-600 px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink-invert transition-colors hover:border-accent hover:text-accent"
          >
            Mergi pe pagina principală
          </Link>
          <Link
            href="/servicii"
            className="inline-flex items-center justify-center rounded-md border border-antracit-600 px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink-invert transition-colors hover:border-accent hover:text-accent"
          >
            Vezi serviciile
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <BookingButton campaign="404">Programează-te online</BookingButton>
          <PhoneLink
            sursa="404"
            className="font-display text-base font-semibold uppercase tracking-wide text-ink-invert hover:text-accent"
          >
            sau sună-ne
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
