import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Galerie — fotografii reale ale service-ului (fațadă + locație).
 * Imagini în `public/galerie/`, optimizate cu `next/image` (lazy, sub fold).
 */
const poze = [
  {
    src: "/galerie/service-1.jpg",
    alt: "Fațada Service Auto Grigorescu pe Bulevardul Nicolae Grigorescu, cu boxele de mecanică, tinichigerie, vopsitorie și stația ITP",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/galerie/service-4.jpg",
    alt: "Intrarea la stația ITP autorizată RAR, pe lateralul clădirii dinspre strada Prevederii",
  },
  {
    src: "/galerie/service-2.jpg",
    alt: "Service Auto Grigorescu — boxe deschise cu mașini pe elevator",
  },
  {
    src: "/galerie/service-3.jpg",
    alt: "Halele service-ului: mecanică, geometrie 3D, service roți și spălătorie auto",
    span: "md:col-span-2",
  },
  {
    src: "/galerie/service-5.jpg",
    alt: "Service Auto Grigorescu — vedere din stradă, stație ITP și spălătorie auto",
  },
];

export default function Gallery() {
  return (
    <section className="bg-antracit text-ink-invert">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Atelierul nostru"
          title="Vino la noi pe Grigorescu"
          subtitle="Service auto complet, stație ITP autorizată RAR și spălătorie — toate la aceeași adresă, pe Bulevardul Nicolae Grigorescu 46–48."
          tone="dark"
        />

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4">
          {poze.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-lg border border-antracit-600 ${p.span ?? ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
