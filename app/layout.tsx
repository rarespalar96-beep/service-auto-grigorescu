import type { Metadata } from "next";
import { Saira_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { orTbd } from "@/content/_placeholder";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import Analytics from "@/components/analytics/Analytics";
import CookieBanner from "@/components/legal/CookieBanner";
import JsonLd from "@/components/seo/JsonLd";
import { autoRepairLd } from "@/lib/jsonld";

// Display condensat/tehnic. „latin-ext" = diacritice RO corecte (ș ț ă î â).
const display = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Corp lizibil, umanist.
const body = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zonaMeta = orTbd(site.zona, "localitate");
// Varianta descriptivă (nume + slogan + oraș) rămâne pentru OpenGraph: la partajare
// nu concurează cu nimic, iar contextul ajută. Titlul din tab e doar numele, mai jos.
const titluMeta = `${site.nume} — ${site.slogan} în ${zonaMeta}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Homepage-ul primește exact numele, fără sufix. Nu e nevoie de `absolute`:
    // `template` se aplică doar segmentelor COPIL, nu segmentului unde e definit.
    default: site.nume,
    template: `%s · ${site.nume}`,
  },
  description: site.descriere,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.nume,
    title: titluMeta,
    description: site.descriere,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={autoRepairLd()} />
        <Header />
        {/* pb pe mobil = înălțimea barei fixe (h-14) ca să nu acopere conținutul */}
        <main className="flex-1 pb-14 xl:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
