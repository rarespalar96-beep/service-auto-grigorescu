import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { isTbd, orTbd } from "@/content/_placeholder";
import { servicii } from "@/content/servicii";
import ServiceCard from "@/components/ui/ServiceCard";
import CtaBand from "@/components/sections/CtaBand";
import Placeholder from "@/components/ui/Placeholder";

const zonaMeta = orTbd(site.zona, "localitate");

export const metadata: Metadata = {
  title: `Servicii auto în ${zonaMeta}`,
  description:
    `Servicii complete la ${site.nume}: mecanică, tinichigerie și vopsitorie, ` +
    `service roți, geometrie, climatizare și spălătorie. Service autorizat RAR în ${zonaMeta}.`,
  alternates: { canonical: "/servicii" },
};

export default function ServiciiPage() {
  return (
    <>
      {/* Antet pagină */}
      <section className="bg-blueprint text-ink-invert">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-invert">
            <Link href="/" className="hover:text-accent">Acasă</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-ink-invert">Servicii</span>
          </nav>
          <h1 className="mt-4 flex flex-wrap items-center gap-x-2 text-4xl font-bold uppercase sm:text-5xl">
            Servicii auto în{" "}
            {isTbd(site.zona) ? <Placeholder label="localitate" /> : site.zona}
          </h1>
          <div className="mt-5 gauge-rule gauge-rule-accent h-2.5 max-w-xs" aria-hidden />
          <p className="mt-5 max-w-2xl text-lg text-muted-invert">
            Tot ce are nevoie mașina ta, sub același acoperiș — cu diagnoză înainte de
            orice intervenție și piese cu garanție. Lucrăm multimarcă, practic orice
            mașină, mai puțin cele full electric.
          </p>
        </div>
      </section>

      {/* Grid servicii cu preț + durată */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicii.map((s) => (
              <li key={s.slug}>
                <ServiceCard serviciu={s} showMeta />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Nu afișăm prețuri fixe — fiecare lucrare diferă în funcție de mașină și de
            ce e nevoie. Cel mai bine ne suni să afli prețul, sau ți-l spunem când ajungi
            la service, înainte de orice intervenție.
          </p>
        </div>
      </section>

      <CtaBand campaign="servicii-index" />
    </>
  );
}
