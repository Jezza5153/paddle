import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { BeginnerGuide } from "@/components/home/beginner-guide";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyBuyHere } from "@/components/home/why-buy-here";
import { FinalCta } from "@/components/home/final-cta";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Padel Rackets & Accessoires Kopen | Gratis Verzending | PaddleForge",
  description:
    "Padel rackets, starter sets en accessoires kopen bij PaddleForge.nl. Veilig betalen met iDEAL, creditcard of Apple Pay. 14 dagen retourneren.",
  keywords: [
    "padel racket kopen",
    "padel set",
    "padel accessoires",
    "padel nederland",
    "padel beginners set",
    "pickleball set kopen",
    "padel uitrusting",
    "PaddleForge",
  ],
  openGraph: {
    title: "PaddleForge — Padel Rackets & Accessoires voor Nederland",
    description:
      "Padel rackets, complete sets en accessoires. Veilig betalen met iDEAL. 14 dagen retourneren.",
    locale: "nl_NL",
    type: "website",
    url: "/",
    images: ["/images/products/carbon-paddle-set.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Use products directly from the data file assuming it exports an array of products
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Hero />
      <BeginnerGuide />
      <FeaturedProducts products={products} />
      <WhyBuyHere />
      <FinalCta />
    </div>
  );
}
