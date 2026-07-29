import type { Metadata } from "next";
import { site } from "@/content/site";
import { isTbd, orTbd } from "@/content/_placeholder";
import { constatareDaune } from "@/content/constatareDaune";
import type { DauneIcon } from "@/content/constatareDaune";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Constatare daune auto (RCA)",
  description:
    `${constatareDaune.sumar} ${site.nume}, service autorizat RAR în ` +
    `${orTbd(site.zona, "localitate")}.`,
  alternates: { canonical: "/constatare-daune" },
};

export default function ConstatareDaunePage() {
  const { intro, pasi, acoperim, faq } = constatareDaune;
  const campaign = "constatare-daune";

  return (
    <>
      <JsonLd data={faqLd(faq)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: "/" },
          { name: "Constatare daune", url: "/constatare-daune" },
        ])}
      />

      <PageHeader
        titlu="Constatare daune"
        subtitlu="Dosar de daună RCA, constatare cu asigurătorul și reparație prin asigurare. Îți dăm mașină la schimb pe toată durata reparației — tu nu rămâi pe jos."
      />

      {/* Intro + card contact (sticky pe desktop) */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <p className="max-w-2xl text-lg text-ink">{intro}</p>

            {/* Pașii procesului */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">Cum decurge</h2>
            <ol className="mt-8 space-y-px overflow-hidden rounded-xl border border-line bg-surface shadow-card">
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

            {/* Tipuri de daune acoperite */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">Ce acoperim</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {acoperim.map((tip) => (
                <li
                  key={tip.nume}
                  className="group rounded-xl border border-line bg-surface p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/[0.08] text-accent ring-1 ring-accent/15">
                    <DauneIconSvg name={tip.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-ink">
                    {tip.nume}
                  </h3>
                  <p className="mt-1 text-muted">{tip.descriere}</p>
                </li>
              ))}
            </ul>

            {/* Documente necesare — diferă de la caz la caz */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">
              Ce documente îți trebuie
            </h2>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-line bg-surface p-5">
              <CheckIcon />
              <p className="text-ink">
                Actele necesare diferă de la caz la caz. După discuția telefonică îți
                spunem exact ce documente să ai la tine, ca să nu pierzi timp cu drumuri
                în plus.
              </p>
            </div>

            {/* Asigurători */}
            <h2 className="mt-12 text-2xl font-bold uppercase text-ink">
              Asigurători
            </h2>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-5 shadow-card">
              <CheckIcon />
              <p className="text-ink">
                Lucrăm cu toate companiile de asigurări. Indiferent de unde ai RCA-ul, te
                ajutăm cu dosarul de daună — de la constatare până la reparație.
              </p>
            </div>

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
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                Ai o daună?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Scrie-ne sau sună-ne și îți spunem exact ce ai de făcut. Te ajutăm cu
                tot dosarul, de la constatare la reparație.
              </p>

              <BookingButton campaign={campaign} tone="light" className="mt-6 w-full">
                Programează constatarea
              </BookingButton>
              <CallButton sursa={campaign} tone="light" className="mt-3 w-full" />

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

              <p className="mt-4 text-xs text-muted">
                Reparația se acoperă din polița de asigurare, conform devizului aprobat.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        campaign={`${campaign}-jos`}
        titlu="Ai avut un accident?"
        subtitlu="Programează constatarea online sau sună-ne — restul rezolvăm noi."
      />
    </>
  );
}

/* Iconițe linie proprii paginii (stroke = currentColor, aceeași grosime ca ServiceIcon). */
function DauneIconSvg({ name }: { name: DauneIcon }) {
  const paths: Record<DauneIcon, React.ReactNode> = {
    shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
    clipboard: (
      <>
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 10h6M9 14h6" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M16 14h2" />
      </>
    ),
    handshake: <path d="M3 12l4-4 5 4 2-2 4 3 3-2M7 8l3 3M12 14l2 2M9 16l2 2" />,
    car: (
      <>
        <path d="M4 13l1.8-5A2 2 0 0 1 7.7 6.5h8.6a2 2 0 0 1 1.9 1.5L20 13" />
        <path d="M2.5 13h19v3.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V13z" />
        <circle cx="7.5" cy="17.5" r="1.6" />
        <circle cx="16.5" cy="17.5" r="1.6" />
      </>
    ),
  };
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
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
