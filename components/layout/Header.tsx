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
            className="h-14 w-auto rounded-md bg-white p-1 sm:h-20"
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
              className="text-base font-medium text-ink-invert/85 transition-colors hover:text-accent-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Telefon + CTA + meniu */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Numărul întreg de la sm în sus; sub sm îl acoperă bara fixă de jos
              și meniul (nu încape lângă logo + CTA + hamburger). */}
          <span className="hidden sm:inline-flex">
            <CallButton sursa="header" tone="dark" size="sm" eticheta={null} />
          </span>
          <BookingButton campaign="header" size="sm" className="max-sm:px-3">
            <span className="sm:hidden">Programare</span>
            <span className="hidden sm:inline">Programează-te</span>
          </BookingButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
