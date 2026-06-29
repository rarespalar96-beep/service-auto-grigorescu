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
          subtitle="De la mecanică și tinichigerie la geometrie, climatizare și spălătorie — totul sub același acoperiș, cu garanție."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicii.map((s) => (
            <li key={s.slug}>
              <ServiceCard serviciu={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
