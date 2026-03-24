import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyBuyHere } from "@/components/home/why-buy-here";
import { BeginnerGuide } from "@/components/home/beginner-guide";
import { SocialProof } from "@/components/home/social-proof";
import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyBuyHere />
      <BeginnerGuide />
      <SocialProof />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
