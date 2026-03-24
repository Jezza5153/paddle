import { Hero } from "@/components/home/hero";
import { BeginnerGuide } from "@/components/home/beginner-guide";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyBuyHere } from "@/components/home/why-buy-here";
import { FinalCta } from "@/components/home/final-cta";
import { products } from "@/data/products";

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
