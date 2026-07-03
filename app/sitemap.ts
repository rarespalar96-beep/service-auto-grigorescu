import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { servicii } from "@/content/servicii";
import { articole } from "@/content/blog";

// Necesar cu `output: export` — generat static la build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const pagini: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/servicii", priority: 0.9 },
    { path: "/despre", priority: 0.7 },
    { path: "/constatare-daune", priority: 0.8 },
    { path: "/itp", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
    { path: "/politica-de-confidentialitate", priority: 0.2 },
    { path: "/termeni", priority: 0.2 },
  ];

  const statice: MetadataRoute.Sitemap = pagini.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.priority,
  }));

  const serviciiEntries: MetadataRoute.Sitemap = servicii.map((s) => ({
    url: `${base}/servicii/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = articole.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.data),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...statice, ...serviciiEntries, ...blogEntries];
}
