import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { navPrincipal } from "@/content/nav";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import MobileNav from "@/components/layout/MobileNav";

/** Header sticky: nume + nav + telefon vizibil + CTA „Programează-te" permanent. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-antracit/95 backdrop-blur supports-[backdrop-filter]:bg-antracit/80 border-b border-antracit-600">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:h-24 sm:gap-4 sm:px-6">
        {/* Marcă */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-grigorescu-full.png"
            alt={site.nume}
            width={2538}
            height={1420}
            priority
            className="h-12 w-auto rounded-md bg-white p-1 sm:h-20"
          />
        </Link>

        {/* Navigație (desktop lat) */}
        <nav
          aria-label="Navigație principală"
          className="hidden items-center gap-6 xl:flex"
        >
          {navPrincipal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-bold text-ink-invert transition-colors hover:text-accent-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Telefon + CTA + meniu */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {/* Numărul e vizibil pe orice lățime (cerința proprietarului). Pe mobil
              butonul e compact: fără etichetă, doar receptor + număr. */}
          <CallButton
            sursa="header"
            tone="dark"
            size="sm"
            eticheta={null}
            className="font-extrabold! max-sm:h-10 max-sm:gap-1.5 max-sm:px-2.5 max-sm:text-[0.8125rem]"
          />
          <BookingButton campaign="header" size="sm" className="font-extrabold! max-sm:hidden">
            Programează-te
          </BookingButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
