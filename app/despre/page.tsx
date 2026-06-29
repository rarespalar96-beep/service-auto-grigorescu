import type { Metadata } from "next";
import { site } from "@/content/site";
import { isTbd, orTbd } from "@/content/_placeholder";
import { despre } from "@/content/despre";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Placeholder from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    `Povestea, echipa și dotările ${site.nume} — service auto autorizat RAR în ` +
    `${orTbd(site.zona, "localitate")}. Diagnoză corectă, lucrări cu garanție, prețuri transparente.`,
  alternates: { canonical: "/despre" },
};

export default function DesprePage() {
  return (
    <>
      <PageHeader
        titlu="Despre noi"
        subtitlu={`Cine suntem și de ce ne aleg șoferii din ${orTbd(site.zona, "localitatea ta")}.`}
      />

      {/* Poveste + statistici */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-5">
              {despre.poveste.map((p, i) => (
                <p key={i} className="text-lg text-ink">{p}</p>
              ))}
            </div>
            <ul className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {despre.statistici.map((s) => (
                <li
                  key={s.eticheta}
                  className="rounded-xl border border-line bg-surface p-5 text-center shadow-card lg:text-left"
                >
                  <span className="block font-display text-3xl font-bold text-accent">
                    {isTbd(s.valoare) ? <Placeholder label="cifră" /> : s.valoare}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{s.eticheta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dotări + autorizații */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-ink">Dotări</h2>
            <ul className="mt-6 space-y-3">
              {despre.dotari.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink">
                  <Dot /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase text-ink">Autorizații</h2>
            <ul className="mt-6 space-y-3">
              {despre.autorizatii.map((a) => (
                <li key={a} className="flex items-start gap-3 text-ink">
                  <Dot /> {a}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold uppercase tracking-wide text-ink">
              Garanție la lucrări
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              {site.garantii.map((g) => (
                <div key={g.serviciu} className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">{g.serviciu}</dt>
                  <dd className="font-display font-semibold uppercase tracking-wide text-ink">
                    {g.durata}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted">
              Garanția diferă în funcție de tipul lucrării. Detalii primești la
              recepția mașinii.
            </p>
          </div>
        </div>
      </section>

      <CtaBand campaign="despre" />
    </>
  );
}

function Dot() {
  return <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />;
}
