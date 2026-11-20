import Link from "next/link";
import { servicii } from "@/content/servicii";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";

/** Grid de servicii — fiecare card duce la pagina dedicată (Faza 2). */
export default function ServicesGrid() {
  return (
    <section id="servicii" className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Ce facem"
          title="Servicii complete pentru mașina ta"
          subtitle="De la mecanică, tinichigerie și geometrie la climatizare, spălătorie și ITP, plus birou de piese auto. Totul sub același acoperiș, cu garanție."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicii.map((s) => (
            <li key={s.slug}>
              <ServiceCard serviciu={s} />
            </li>
          ))}

          {/* Stație ITP — pagină dedicată proprie (nu e în lista `servicii`). */}
          <li>
            <ExtraCard
              href="/itp"
              titlu="ITP"
              sumar="Stație ITP autorizată RAR pentru autoturisme, cu verificare GPL și GNC. Rapid și corect."
              cta="Vezi ITP"
              icon={<ItpIcon />}
            />
          </li>

          {/* Birou piese auto — comanzi piesele de la noi, nu trebuie să vii cu ele. */}
          <li>
            <ExtraCard
              href="/contact"
              titlu="Birou piese auto"
              sumar="Comanzi piesele direct de la noi, nu trebuie să vii cu ele. Le găsim și le aducem pentru reparație."
              cta="Întreabă-ne"
              icon={<PieseIcon />}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

/** Card în același stil ca `ServiceCard`, dar cu destinație și iconiță proprii. */
function ExtraCard({
  href,
  titlu,
  sumar,
  cta,
  icon,
}: {
  href: string;
  titlu: string;
  sumar: string;
  cta: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
      />
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/[0.08] text-accent ring-1 ring-accent/15 transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-ink group-hover:ring-accent">
        {icon}
      </span>
      <h3 className="mt-4 text-xl font-semibold uppercase text-ink">{titlu}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{sumar}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
        {cta}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}

/* Iconițe linie proprii (stroke = currentColor, aceeași grosime ca ServiceIcon). */
function ItpIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* scut cu bifă — verificare autorizată */}
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PieseIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* pinion — piese auto */}
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </svg>
  );
}
