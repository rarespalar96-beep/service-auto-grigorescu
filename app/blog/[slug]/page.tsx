import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articole, getArticol, type Bloc } from "@/content/blog";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { blogPostingLd, breadcrumbLd } from "@/lib/jsonld";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articole.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticol(slug);
  if (!a) return {};
  return {
    title: a.titlu,
    description: a.descriere,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.titlu,
      description: a.descriere,
      publishedTime: a.data,
    },
  };
}

function dataRo(iso: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default async function ArticolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const a = getArticol(slug);
  if (!a) notFound();

  return (
    <>
      <JsonLd data={blogPostingLd(a)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: a.titlu, url: `/blog/${a.slug}` },
        ])}
      />

      <PageHeader titlu={a.titlu} parinte={{ label: "Blog", href: "/blog" }} />

      <article className="bg-bg">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
            {dataRo(a.data)} · {a.minuteCitire} min citire · {a.autor}
          </p>

          <div className="mt-8 space-y-5">
            {a.corp.map((bloc, i) => (
              <Block key={i} bloc={bloc} />
            ))}
          </div>
        </div>
      </article>

      <CtaBand
        campaign={`blog-${a.slug}`}
        titlu="Mașina ta are nevoie de o verificare?"
        subtitlu="Programează-te online și lasă diagnoza pe noi."
      />
    </>
  );
}

function Block({ bloc }: { bloc: Bloc }) {
  if (bloc.tip === "h2") {
    return <h2 className="pt-4 text-2xl font-bold uppercase text-ink">{bloc.text}</h2>;
  }
  if (bloc.tip === "ul") {
    return (
      <ul className="space-y-2 pl-1">
        {bloc.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-ink">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-lg leading-relaxed text-ink">{bloc.text}</p>;
}
