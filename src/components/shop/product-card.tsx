import Link from "next/link";
import Image from "next/image";
import { formatPriceFromEuros } from "@/lib/utils";
import type { ProductData } from "@/data/products";

interface ProductCardProps {
  product: ProductData;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square bg-white overflow-hidden relative rounded-2xl mb-4">
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label text-[10px] font-bold tracking-widest uppercase">
                {product.badge}
              </span>
            )}
          </div>
          {product.compareAtPriceIncVat && (
            <div className="absolute top-4 right-4">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-[10px] font-bold">
                -{Math.round((1 - product.basePriceIncVat / product.compareAtPriceIncVat) * 100)}%
              </span>
            </div>
          )}
        </div>
        <div className="px-1">
          <h3 className="font-headline text-lg font-bold text-zinc-100 tracking-tight mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-zinc-500 font-body text-sm line-clamp-1 mb-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-headline text-lg font-bold text-primary">
              {formatPriceFromEuros(product.basePriceIncVat)}
            </span>
            {product.compareAtPriceIncVat && (
              <span className="text-zinc-600 text-sm line-through">
                {formatPriceFromEuros(product.compareAtPriceIncVat)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
