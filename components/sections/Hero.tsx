import Image from "next/image";
import { site, aniExperienta } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import { recenzii } from "@/content/recenzii";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import Stars from "@/components/ui/Stars";
import Placeholder from "@/components/ui/Placeholder";

export default function Hero() {
  const aniExp = aniExperienta();
  const zona = isTbd(site.zona) ? <Placeholder label="localitate" /> : site.zona;
  // Testimonial real pus în evidență (nu o medie agregată — vezi recenzii.ts).
  const featured = recenzii[0];

  return (
    <section className="relative overflow-hidden bg-blueprint text-ink-invert">
      {/* Fotografia reală a service-ului — blurată, ca fundal atmosferic */}
      <Image
        src="/hero/service-fundal.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="pointer-events-none scale-110 object-cover opacity-40 blur-[6px]"
      />
      {/* Voal întunecat — garantează contrast AA pe textul alb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-antracit via-antracit/90 to-antracit/60"
      />
      {/* Lumină de fundal accent (decorativă, subtilă) */}
      <div className="accent-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Coloana stânga — mesaj + CTA */}
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-1.5 font-display text-sm font-semibold uppercase tracking-widest text-accent-light">
            Autorizat RAR ·{" "}
            {aniExp !== null ? `${aniExp} ani experiență` : <Placeholder label="ani experiență" />} ·{" "}
            {zona}
          </p>

          <h1 className="mt-4 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">
            {site.slogan}
            <br />
            <span className="text-accent">în {zona}.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-invert">
            Diagnoză onestă, lucrări cu garanție și prețuri corecte. Te programezi
            online în câteva secunde — restul îl rezolvăm noi.
          </p>

          <div
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "80ms" }}
          >
            <BookingButton campaign="home-hero">Programează-te online</BookingButton>
            <CallButton sursa="home-hero" tone="dark" />
          </div>

          <p className="mt-4 text-xs text-muted-invert">
            Programările se fac pe platforma noastră online. Fără cont, fără așteptare la telefon.
          </p>
        </div>

        {/* Coloana dreapta — panou „diagnoză" cu social proof */}
        <aside
          className="reveal min-w-0 rounded-xl border border-antracit-600 bg-gradient-to-b from-antracit-700/80 to-antracit-800/80 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur"
          style={{ animationDelay: "160ms" }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-invert">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Recenzii reale, pe Google
            </span>
            <Stars rating={featured.rating} emptyClass="text-white/15" />
          </div>
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-invert">
            “{featured.text}”
          </p>
          <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-invert">
            {featured.nume}
          </p>

          <div className="my-5 gauge-rule h-2.5" aria-hidden />

          <ul className="space-y-3 text-sm">
            <Fapt label="Autorizat RAR" valoare="Da" />
            <Fapt
              label="Experiență"
              valoare={aniExp !== null ? `${aniExp} ani` : <Placeholder label="ani" />}
            />
            <Fapt label="Garanție lucrări" valoare="În funcție de serviciu" />
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Fapt({ label, valoare }: { label: string; valoare: React.ReactNode }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="text-muted-invert">{label}</span>
      <span className="font-display font-semibold uppercase tracking-wide text-ink-invert">
        {valoare}
      </span>
    </li>
  );
}

