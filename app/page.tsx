import { faqHome } from "@/content/faq";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/jsonld";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ReviewHighlight from "@/components/sections/ReviewHighlight";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DauneBanner from "@/components/sections/DauneBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import Faq from "@/components/sections/Faq";
import ContactMap from "@/components/sections/ContactMap";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(faqHome)} />
      <Hero />
      <TrustBar />
      <ReviewHighlight />
      <ServicesGrid />
      <DauneBanner />
      <HowItWorks />
      <Reviews />
      <Gallery />
      <Faq />
      <ContactMap />
    </>
  );
}
