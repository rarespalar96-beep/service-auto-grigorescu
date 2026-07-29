import { site, adresaCompleta, adresaTbd } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import { directionsUrl, externalLinkAttrs } from "@/lib/links";
import PhoneLink from "@/components/cta/PhoneLink";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import LazyMap from "@/components/integrations/LazyMap";
import Placeholder from "@/components/ui/Placeholder";
import ProgramDepartamente from "@/components/sections/ProgramDepartamente";

/**
 * Contact + program + hartă.
 * NOTĂ: embed-ul Google Maps lazy-loaded se integrează în Faza 3 (înlocuiește
 * `MapPlaceholder`). Butonul „Vezi indicații" funcționează deja.
 */
export default function ContactMap() {
  return (
    <section id="contact" className="bg-antracit text-ink-invert">
      <div className="gauge-rule" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
        {/* Info */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-light">
            Ne găsești ușor
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase sm:text-4xl">
            Vino la noi sau programează-te
          </h2>

          <dl className="mt-8 space-y-5 text-sm">
            <Rand termen="Adresă">
              {adresaTbd() ? (
                <Placeholder label="Adresă completă" />
              ) : (
                <>
                  <p>{adresaCompleta()}</p>
                  <p className="text-muted-invert">
                    {site.contact.codPostal} {site.contact.oras}
                  </p>
                </>
              )}
              {directionsUrl() && (
                <a
                  href={directionsUrl()!}
                  {...externalLinkAttrs}
                  className="mt-1 inline-flex items-center gap-1 font-medium text-accent-light hover:underline"
                >
                  Vezi indicații pe Google Maps →
                </a>
              )}
            </Rand>

            <Rand termen="Telefon">
              <PhoneLink sursa="contact" className="text-ink-invert hover:text-accent" />
            </Rand>

            <Rand termen="Email">
              {isTbd(site.contact.email) ? (
                <Placeholder label="Email" />
              ) : (
                <a href={`mailto:${site.contact.email}`} className="hover:text-accent">
                  {site.contact.email}
                </a>
              )}
            </Rand>

            <Rand termen="Program">
              <ProgramDepartamente tone="dark" />
            </Rand>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookingButton campaign="home-contact">Programează-te online</BookingButton>
            <CallButton sursa="home-contact" tone="dark" />
          </div>
        </div>

        {/* Hartă Google Maps, lazy-loaded */}
        <LazyMap />
      </div>
    </section>
  );
}

function Rand({ termen, children }: { termen: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-4">
      <dt className="font-display text-xs font-semibold uppercase tracking-widest text-muted-invert">
        {termen}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
