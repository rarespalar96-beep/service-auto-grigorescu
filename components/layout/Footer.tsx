import Link from "next/link";
import { site, adresaCompleta, adresaTbd } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import { navPrincipal, navLegal } from "@/content/nav";
import { directionsUrl, externalLinkAttrs } from "@/lib/links";
import PhoneLink from "@/components/cta/PhoneLink";
import Placeholder from "@/components/ui/Placeholder";

/**
 * Footer cu NAP (Name-Address-Phone) IDENTIC cu Google Business Profile —
 * critic pentru SEO local. + program, linkuri, hartă, social.
 */
export default function Footer() {
  return (
    <footer className="bg-antracit text-muted-invert">
      <div className="gauge-rule" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        {/* NAP */}
        <div className="md:col-span-2">
          <p className="font-display text-xl font-semibold uppercase tracking-wide text-ink-invert">
            {site.nume}
          </p>
          <p className="mt-1 text-sm">{site.slogan}</p>

          <address className="mt-4 not-italic text-sm leading-relaxed">
            {adresaTbd() ? (
              <Placeholder label="Adresă completă" />
            ) : (
              <>
                {adresaCompleta()}
                <br />
                {site.contact.codPostal} {site.contact.oras}, {site.contact.tara}
              </>
            )}
          </address>

          <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm">
            <PhoneLink sursa="footer" className="font-semibold text-ink-invert hover:text-accent" />
            <span className="text-antracit-600">·</span>
            {isTbd(site.contact.email) ? (
              <Placeholder label="Email" />
            ) : (
              <a href={`mailto:${site.contact.email}`} className="hover:text-accent">
                {site.contact.email}
              </a>
            )}
          </p>

          {directionsUrl() ? (
            <a
              href={directionsUrl()!}
              {...externalLinkAttrs}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:underline"
            >
              Vezi indicații pe Google Maps →
            </a>
          ) : (
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-invert">
              Indicații Google Maps <Placeholder label="după coordonate" />
            </p>
          )}

          {site.social.facebook && (
            <a
              href={site.social.facebook}
              {...externalLinkAttrs}
              aria-label="Pagina de Facebook Service Auto Grigorescu"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-invert transition-colors hover:text-accent-light"
            >
              <FacebookIcon /> Facebook
            </a>
          )}
        </div>

        {/* Linkuri */}
        <nav aria-label="Pagini" className="text-sm">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-invert">
            Pagini
          </p>
          <ul className="mt-3 space-y-2">
            {navPrincipal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Program */}
        <div className="text-sm">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-invert">
            Program
          </p>
          <ul className="mt-3 space-y-1.5">
            {site.program.map((z) => (
              <li key={z.zi} className="flex items-center justify-between gap-4">
                <span>{z.zi}</span>
                {isTbd(z.ore) ? (
                  <Placeholder label="ore" />
                ) : (
                  <span className={z.ore === "Închis" ? "text-muted-invert" : "text-ink-invert"}>
                    {z.ore}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subsol legal */}
      <div className="border-t border-antracit-600">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.nume}. Toate drepturile rezervate.
          </p>
          <nav aria-label="Legal" className="flex gap-4">
            {navLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}
