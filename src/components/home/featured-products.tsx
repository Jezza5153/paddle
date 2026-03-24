import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/data/products";
import { formatPriceFromEuros } from "@/lib/utils";

export function FeaturedProducts() {
  const products = getAllProducts();

  return (
    <section className="section-padding">
      <div className="page-width">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Onze starter kits
          </h2>
          <p className="mt-3 text-text-secondary">
            Drie samengestelde sets. Alles wat je nodig hebt, niets wat je niet
            nodig hebt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-medium px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-green transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-semibold text-text-primary">
                    {formatPriceFromEuros(product.basePriceIncVat)}
                  </span>
                  <Button size="sm" variant="secondary" className="pointer-events-none">
                    Bekijk
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
