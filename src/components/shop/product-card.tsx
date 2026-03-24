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
        <div className="aspect-[4/5] bg-zinc-900 overflow-hidden relative rounded-xl mb-6">
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase">
                {product.badge}
              </span>
            )}
          </div>
          <button 
            type="button" 
            className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
          >
            <span className="material-symbols-outlined text-zinc-950">add_shopping_cart</span>
          </button>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline text-2xl font-bold text-zinc-100 tracking-tight mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-zinc-500 font-medium font-body text-sm line-clamp-1">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-headline text-xl font-bold text-primary pl-4 shrink-0">
            {formatPriceFromEuros(product.basePriceIncVat)}
          </span>
        </div>
      </Link>
    </article>
  );
}
