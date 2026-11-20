import Image from "next/image";
import { site, aniExperienta } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";
import ConstatareButton from "@/components/cta/ConstatareButton";
import Placeholder from "@/components/ui/Placeholder";

/**
 * Hero homepage: mesaj + CTA în stânga, caseta „Daune RCA" în dreapta (placă albă
 * cu logo-urile asigurătorilor parteneri + buton roșu care sună la service).
 * Pe desktop caseta e mai lată (0.8fr/1.2fr), iar coloanele se aliniază jos, ca
 * butonul „Constatare daune" să stea pe aceeași linie cu butoanele din stânga
 * (stânga are `lg:pb-10` = padding-ul de jos al casetei).
 *
 * `data-ascunde-bara`: cât timp hero-ul e pe ecran, bara fixă de jos de pe mobil
 * stă ascunsă (altfel acoperă caseta de daune). Vezi `MobileCTABar`.
 */
export default function Hero() {
  const aniExp = aniExperienta();
  const zona = isTbd(site.zona) ? <Placeholder label="localitate" /> : site.zona;

  return (
    <section data-ascunde-bara className="relative overflow-hidden bg-blueprint text-ink-invert">
      {/* Fotografia reală a service-ului, blurată, ca fundal atmosferic */}
      <Image
        src="/hero/service-fundal.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="pointer-events-none scale-110 object-cover opacity-40 blur-[6px]"
      />
      {/* Voal întunecat: garantează contrast AA pe textul alb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-antracit via-antracit/90 to-antracit/60"
      />
      <div className="accent-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14 lg:py-24">
        {/* Stânga: mesaj + CTA */}
        <div className="min-w-0 lg:pb-10">
          <p className="flex flex-wrap items-center gap-x-1.5 font-display text-sm font-extrabold uppercase tracking-widest text-accent-light">
            Autorizat RAR ·{" "}
            {aniExp !== null ? `${aniExp} ani experiență` : <Placeholder label="ani experiență" />} ·{" "}
            {zona}
          </p>

          <h1 className="mt-4 text-[2.75rem] font-extrabold uppercase sm:text-6xl lg:text-[3.5rem]">
            {site.slogan}
            <br />
            <span className="text-accent">în {zona}.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg font-semibold text-ink-invert">
            Diagnoză profesionistă, lucrări cu garanție și prețuri corecte. Te programezi la
            numărul de telefon sau online în câteva secunde, iar restul îl rezolvăm noi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
            <BookingButton campaign="home-hero">Programează-te online</BookingButton>
            <CallButton sursa="home-hero" tone="dark" />
          </div>
        </div>

        {/* Dreapta: caseta Daune RCA */}
        <aside className="reveal min-w-0 overflow-hidden rounded-2xl bg-surface text-ink shadow-2xl ring-1 ring-black/5">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line px-5 py-4 sm:px-10 sm:py-5">
            <span className="inline-flex items-center gap-2 font-display text-base font-extrabold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Daune RCA
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
              Asigurători parteneri
            </span>
          </div>

          <div className="px-2 py-3 sm:px-8 sm:py-6">
            <Image
              src="/asiguratori/asiguratori-parteneri.webp"
              alt="Asigurători parteneri: Asirom, Axeria, Grawe, Hellas Direct, Omniasig, Groupama, Allianz Țiriac"
              width={660}
              height={230}
              priority
              sizes="(min-width: 1024px) 680px, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="border-t border-line px-5 pb-7 pt-6 sm:px-10 sm:pb-10 sm:pt-8">
            <p className="font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl lg:text-5xl">
              Ai avut un accident?
            </p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-ink">
              Deschidem dosarul de daună RCA direct la noi în service, la oricare dintre
              asigurătorii parteneri.
            </p>
            <ConstatareButton sursa="home-hero-daune" className="mt-6 w-full sm:w-auto" />
          </div>
        </aside>
      </div>
    </section>
  );
}
