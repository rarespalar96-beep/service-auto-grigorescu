import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { orTbd } from "@/content/_placeholder";
import { servicii, getServiciu } from "@/content/servicii";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ServiceCard from "@/components/ui/ServiceCard";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { serviceLd, faqLd, breadcrumbLd } from "@/lib/jsonld";

type Params = { slug: string };

/** Pre-generează toate paginile de serviciu la build (static). */
export function generateStaticParams(): Params[] {
  return servicii.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiciu(slug);
  if (!s) return {};
  const zonaMeta = orTbd(site.zona, "localitate");
  return {
    title: `${s.nume} ${zonaMeta}`,
    description: `${s.sumar} ${s.nume} la ${site.nume}, service autorizat RAR în ${zonaMeta}.`,
    alternates: { canonical: `/servicii/${s.slug}` },
  };
}

export default async function ServiciuPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const s = getServiciu(slug);
  if (!s) notFound();

  const campaign = `servicii-${s.slug}`;
  const programare = { cat: s.programareCat };
  const altele = servicii.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceLd(s)} />
      <JsonLd data={faqLd(s.faq)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: "/" },
          { name: "Servicii", url: "/servicii" },
          { name: s.nume, url: `/servicii/${s.slug}` },
        ])}
      />

      {/* Antet */}
      <section className="bg-blueprint text-ink-invert">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-invert">
            <Link href="/" className="hover:text-accent">Acasă</Link>
            <span className="mx-2" aria-hidden>/</span>
            <Link href="/servicii" className="hover:text-accent">Servicii</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-ink-invert">{s.nume}</span>
          </nav>

          <div className="heading-frame heading-frame-invert mt-6 max-w-3xl px-6 py-6 sm:px-8 sm:py-7">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-lg border border-accent/25 bg-accent/10 text-accent ring-1 ring-inset ring-white/5">
                <ServiceIcon name={s.icon} size={32} />
              </span>
              <h1 className="text-4xl font-bold uppercase sm:text-5xl">{s.nume}</h1>
            </div>
            <p className="mt-4 text-lg text-muted-invert">{s.intro}</p>
          </div>
        </div>
      </section>

      {/* Conținut + card programare */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_340px]">
          {/* Coloana principală */}
          <div>
            {s.includeMesaj ? (
              <>
                <h2 className="text-2xl font-bold uppercase text-ink">Cum procedăm</h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
                  {s.includeMesaj}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BookingButton campaign={campaign} target={programare} tone="light">Programează o diagnoză</BookingButton>
                  <CallButton sursa={campaign} tone="light" />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold uppercase text-ink">Ce include</h2>
                <ul className="mt-6 space-y-3">
                  {s.include.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">
              Întrebări frecvente
            </h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {s.faq.map((f, i) => (
                <details key={i} className="group py-2">
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

          {/* Card programare (sticky pe desktop) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-6 shadow-card">
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted">Preț</dt>
                  <dd className="text-right font-display font-semibold text-ink">
                    la telefon / la service
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
                  <dt className="text-sm text-muted">Durată</dt>
                  <dd className="font-display font-semibold text-ink">
                    {s.durataOrientativa}
                  </dd>
                </div>
              </dl>

              <BookingButton campaign={campaign} target={programare} tone="light" className="mt-6 w-full">
                Programează-te
              </BookingButton>
              <CallButton sursa={campaign} tone="light" className="mt-3 w-full" />

              <p className="mt-4 text-xs text-muted">
                Cel mai bine ne suni să afli prețul, sau ți-l spunem când ajungi la
                service — înainte de orice lucrare. Programarea se face online.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Alte servicii */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold uppercase text-ink">Alte servicii</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {altele.map((x) => (
              <li key={x.slug}>
                <ServiceCard serviciu={x} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand campaign={`${campaign}-jos`} bookingTarget={programare} titlu={`Programează ${s.nume.toLowerCase()}`} />
    </>
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
