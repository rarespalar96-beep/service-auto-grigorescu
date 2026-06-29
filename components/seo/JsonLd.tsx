/**
 * Injectează un bloc JSON-LD (Schema.org). Server component.
 * `data` e un obiect deja construit (vezi `lib/jsonld`).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Conținut controlat de noi (nu input de utilizator) → sigur de injectat.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
