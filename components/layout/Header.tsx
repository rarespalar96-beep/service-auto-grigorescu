import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import { navPrincipal } from "@/content/nav";
import BookingButton from "@/components/cta/BookingButton";
import PhoneLink from "@/components/cta/PhoneLink";
import Placeholder from "@/components/ui/Placeholder";

/** Header sticky: nume + nav + telefon vizibil + CTA „Programează-te" permanent. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-antracit/95 backdrop-blur supports-[backdrop-filter]:bg-antracit/80 border-b border-antracit-600">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6">
        {/* Marcă */}
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src="/logo-grigorescu-full.png"
            alt={site.nume}
            width={2538}
            height={1420}
            priority
            className="h-16 w-auto rounded-md bg-white p-1 sm:h-20"
          />
        </Link>

        {/* Navigație (desktop) */}
        <nav
          aria-label="Navigație principală"
          className="hidden items-center gap-6 lg:flex"
        >
          {navPrincipal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-ink-invert/85 transition-colors hover:text-accent-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Telefon + CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <PhoneLink
            sursa="header"
            className="hidden items-center gap-2 font-display text-base font-semibold text-ink-invert hover:text-accent sm:inline-flex"
          >
            <PhoneIcon />
            {isTbd(site.contact.telefonAfisat) ? (
              <Placeholder label="Telefon" />
            ) : (
              site.contact.telefonAfisat
            )}
          </PhoneLink>
          <BookingButton campaign="header" className="px-4 py-2 text-sm" />
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
