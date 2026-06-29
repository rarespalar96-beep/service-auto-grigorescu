import type { Metadata } from "next";
import { site } from "@/content/site";
import { isTbd, orTbd } from "@/content/_placeholder";
import { itp } from "@/content/itp";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import BookingButton from "@/components/cta/BookingButton";
import PhoneLink from "@/components/cta/PhoneLink";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "ITP — Inspecție Tehnică Periodică",
  description:
    `${itp.sumar} ${site.nume}, service autorizat RAR în ` +
    `${orTbd(site.zona, "localitate")}.`,
  alternates: { canonical: "/itp" },
};

export default function ItpPage() {
  const { intro, verificam, pasi, acte, acces, faq } = itp;
  const campaign = "itp";

  return (
    <>
      <JsonLd data={faqLd(faq)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: "/" },
          { name: "ITP", url: "/itp" },
        ])}
      />

      <PageHeader
        titlu="ITP"
        subtitlu="Inspecția Tehnică Periodică, rapid și corect — iar dacă apare o neconformitate, o reparăm pe loc."
      />

      {/* Intro + card contact (sticky pe desktop) */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <p className="max-w-2xl text-lg text-ink">{intro}</p>

            {/* Pașii procesului */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">Cum decurge</h2>
            <ol className="mt-8 space-y-px overflow-hidden rounded-lg border border-line bg-surface">
              {pasi.map((pas, i) => (
                <li key={pas.titlu} className="flex gap-4 border-b border-line p-5 last:border-b-0">
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-antracit font-display text-base font-bold text-accent-light"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                      {pas.titlu}
                    </h3>
                    <p className="mt-1 text-muted">{pas.descriere}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Ce verificăm */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">Ce verificăm</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {verificam.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Listă orientativă — inspecția acoperă toate punctele obligatorii conform
              reglementărilor RAR în vigoare.
            </p>

            {/* Acte necesare */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">
              Ce acte îți trebuie
            </h2>
            <ul className="mt-6 space-y-3">
              {acte.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-ink">{doc}</span>
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">
              Întrebări frecvente
            </h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {faq.map((f) => (
                <details key={f.intrebare} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold uppercase tracking-wide text-ink">
                    {f.intrebare}
                    <span
                      aria-hidden
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line text-muted transition-all group-open:rotate-45 group-open:border-accent group-open:text-accent"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-muted">{f.raspuns}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Card contact (sticky pe desktop) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-6 shadow-card">
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted">Preț ITP</dt>
                  <dd className="text-right font-display font-semibold text-ink">
                    la telefon / la service
                  </dd>
                </div>
              </dl>

              <BookingButton campaign={campaign} className="mt-6 w-full">
                Programează ITP-ul
              </BookingButton>
              <PhoneLink
                sursa={campaign}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-line px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent"
              >
                Sună:{" "}
                {isTbd(site.contact.telefonAfisat) ? (
                  <Placeholder label="Telefon" />
                ) : (
                  site.contact.telefonAfisat
                )}
              </PhoneLink>

              <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">Adresă</dt>
                  <dd className="text-right font-medium text-ink">
                    {isTbd(site.contact.adresa) ? (
                      <Placeholder label="adresă" />
                    ) : (
                      site.contact.adresa
                    )}
                  </dd>
                </div>
              </dl>

              {acces && (
                <div className="mt-5 flex gap-3 rounded-md border-l-2 border-accent bg-antracit/[0.03] p-4">
                  <PinIcon />
                  <p className="text-sm font-medium text-ink">{acces}</p>
                </div>
              )}

              <p className="mt-4 text-xs text-muted">
                Cel mai bine ne suni să afli prețul ITP, sau ți-l spunem când ajungi la
                service. Cu programare eviți timpii de așteptare, iar dacă apare o
                neconformitate o reparăm pe loc — suntem și service complet.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        campaign={`${campaign}-jos`}
        titlu="Îți expiră ITP-ul?"
        subtitlu="Programează inspecția online sau sună-ne — te luăm la ora stabilită."
      />
    </>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12l5 5 9-11" />
      </svg>
    </span>
  );
}
