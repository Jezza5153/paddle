import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductSummary } from "@/components/product/product-summary";
import { ProductTabs } from "@/components/product/product-tabs";
import { CrossSell } from "@/components/product/cross-sell";
import { Shield, Truck, RotateCcw } from "lucide-react";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Allow dynamic rendering for product pages so new products work immediately
export const dynamicParams = true;
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} | CourtStart NL`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | CourtStart NL`,
      description: product.shortDescription,
      images: [product.primaryImage],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/shop`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="section-padding">
        <div className="page-width">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <a href="/" className="hover:text-text-primary transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-text-primary transition-colors">Shop</a>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{product.name}</span>
          </nav>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery images={product.galleryImages} alt={product.name} />
            <ProductSummary product={product} />
          </div>

          {/* Tabs */}
          <div className="mt-16 max-w-2xl">
            <ProductTabs product={product} />
          </div>

          {/* Cross-sell */}
          <CrossSell currentSlug={product.slug} />

          {/* Final reassurance */}
          <div className="mt-16 bg-surface rounded-2xl border border-border p-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Waarom CourtStart?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-brand-green mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Veilig betalen</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    iDEAL, Wero, kaart, Apple Pay en Google Pay
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-brand-green mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Duidelijke levering</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Realistische levertijd bij elk product
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-brand-green mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">14 dagen retour</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Niet tevreden? Stuur het terug
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
