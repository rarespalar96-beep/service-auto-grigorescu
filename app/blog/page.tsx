import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { articole } from "@/content/blog";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    `Sfaturi practice despre întreținerea mașinii de la ${site.nume}: revizii, ` +
    `distribuție, frâne și costuri reale. Ghiduri pentru șoferii din ${site.zona}.`,
  alternates: { canonical: "/blog" },
};

function dataRo(iso: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        titlu="Blog"
        subtitlu="Sfaturi clare despre întreținerea mașinii, fără limbaj tehnic complicat."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <ul className="space-y-4">
            {articole.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group block rounded-lg border border-line bg-surface p-6 transition-all hover:border-accent hover:shadow-lg"
                >
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
                    {dataRo(a.data)} · {a.minuteCitire} min citire
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold uppercase text-ink transition-colors group-hover:text-accent">
                    {a.titlu}
                  </h2>
                  <p className="mt-2 text-muted">{a.descriere}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
                    Citește
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
