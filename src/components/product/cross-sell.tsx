import Link from "next/link";
import Image from "next/image";
import { formatPriceFromEuros } from "@/lib/utils";
import type { ProductData } from "@/data/products";
import { getAllProducts } from "@/data/products";

interface CrossSellProps {
  currentSlug: string;
}

export function CrossSell({ currentSlug }: CrossSellProps) {
  const otherProducts = getAllProducts().filter((p) => p.slug !== currentSlug);

  if (otherProducts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        Past goed bij
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {otherProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group flex gap-4 bg-surface rounded-2xl border border-border p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0">
              <Image
                src={product.primaryImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-text-primary group-hover:text-brand-green transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-text-secondary mt-1 line-clamp-1">
                {product.shortDescription}
              </p>
              <span className="text-sm font-semibold text-text-primary mt-2">
                {formatPriceFromEuros(product.basePriceIncVat)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
