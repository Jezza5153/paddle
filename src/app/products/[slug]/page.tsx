import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductSummary } from "@/components/product/product-summary";
import Image from "next/image";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

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
    title: `${product.name} | PaddleForge`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | PaddleForge`,
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

      <div className="pt-32 pb-24 max-w-screen-2xl mx-auto px-8 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <ProductGallery images={product.galleryImages} alt={product.name} badge={product.badge} />
          </div>
          <div className="lg:col-span-5">
            <ProductSummary product={product} />
          </div>
        </div>

        {/* Featured Section (Bento Style) */}
        <div className="mt-32">
          <h2 className="font-headline text-3xl font-black mb-12 uppercase tracking-tighter">
            Engineered for <span className="text-primary italic">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-12 rounded-xl flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWcrUr-9OBtFGpx147rt7u-T2jnZMwAL-xG4euZDdO7m9DzEl0jAm0vJg1JshreBnMfjm3uZVCkWR-CTizFWKhQXVRzPiDNprkRkvTINBkrpiIvEojobeVMin9_CXDH13pa1fqQRvn_naBIh11OUw1O49BTTPSIrLR7F8wn_fCDupW-j27CZMUkPdrOLjAYrHPWDOiZxvaFxQcRoCGwOICFmy_yC9qL1NNHint57VHiF-KejmRA19acpYv1XEvlMG8VgCwp4-hB1k"
                alt="Dynamic action shot"
                fill
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10 text-on-surface">
                <h3 className="font-headline text-4xl font-bold mb-4 tracking-tighter leading-none uppercase">Vibratie Reductie</h3>
                <p className="max-w-sm">Ons interne vloeistof-balans systeem dempt schadelijke trillingen direct bij impact voor optimaal comfort tijdens het padellen.</p>
              </div>
            </div>
            <div className="bg-primary p-10 rounded-xl flex flex-col justify-between text-on-primary">
              <span className="material-symbols-outlined text-5xl" data-icon="bolt">bolt</span>
              <div>
                <h3 className="font-headline text-2xl font-black mb-2 leading-tight uppercase">Maximale Kracht</h3>
                <p className="text-on-primary/80 text-sm">De versterkte carbon-laag genereert 15% meer balsnelheid dan standaard padel rackets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: `https://paddleforge.nl${product.primaryImage}`,
            brand: { "@type": "Brand", name: product.brand },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: product.basePriceIncVat,
              availability: "https://schema.org/InStock",
              url: `https://paddleforge.nl/products/${product.slug}`,
              seller: { "@type": "Organization", name: "PaddleForge" },
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      {product.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: product.faq.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
