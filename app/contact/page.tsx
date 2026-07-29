import type { Metadata } from "next";
import { site, adresaCompleta, adresaTbd } from "@/content/site";
import { isTbd, orTbd } from "@/content/_placeholder";
import { directionsUrl, externalLinkAttrs } from "@/lib/links";
import PageHeader from "@/components/ui/PageHeader";
import CallButton from "@/components/cta/CallButton";
import BookingButton from "@/components/cta/BookingButton";
import LazyMap from "@/components/integrations/LazyMap";
import Placeholder from "@/components/ui/Placeholder";
import ProgramDepartamente from "@/components/sections/ProgramDepartamente";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Adresă, program și telefon ${site.nume} în ${orTbd(site.zona, "localitate")}. Sună-ne sau ` +
    `programează-te online — fără formulare, fără așteptare.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        titlu="Contact"
        subtitlu="Ne găsești ușor. Sună-ne pentru orice întrebare sau programează-te direct online."
      />

      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          {/* Detalii contact */}
          <div>
            <dl className="space-y-6">
              <Bloc termen="Telefon">
                <CallButton sursa="pagina-contact" tone="light" size="lg" />
                <p className="mt-2 text-sm text-muted">Click-to-call de pe telefon.</p>
              </Bloc>

              <Bloc termen="Email">
                {isTbd(site.contact.email) ? (
                  <Placeholder label="Email" />
                ) : (
                  <a href={`mailto:${site.contact.email}`} className="text-ink hover:text-accent">
                    {site.contact.email}
                  </a>
                )}
              </Bloc>

              <Bloc termen="Adresă">
                {adresaTbd() ? (
                  <Placeholder label="Adresă completă" />
                ) : (
                  <>
                    <p className="text-ink">{adresaCompleta()}</p>
                    <p className="text-muted">
                      {site.contact.codPostal} {site.contact.oras}
                    </p>
                  </>
                )}
                {directionsUrl() && (
                  <a
                    href={directionsUrl()!}
                    {...externalLinkAttrs}
                    className="mt-1 inline-flex items-center gap-1 font-medium text-accent hover:underline"
                  >
                    Vezi indicații pe Google Maps →
                  </a>
                )}
              </Bloc>

              <Bloc termen="Program">
                <div className="text-ink">
                  <ProgramDepartamente tone="light" />
                </div>
              </Bloc>
            </dl>

            <div className="mt-8">
              <BookingButton campaign="pagina-contact" tone="light">Programează-te online</BookingButton>
            </div>
            <p className="mt-3 text-sm text-muted">
              Nu folosim formular de contact — telefonul și programarea online acoperă tot.
            </p>
          </div>

          {/* Hartă mare */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <LazyMap className="min-h-[420px]" />
          </div>
        </div>
      </section>
    </>
  );
}

function Bloc({ termen, children }: { termen: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-display text-xs font-semibold uppercase tracking-widest text-ink">
        {termen}
      </dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}
