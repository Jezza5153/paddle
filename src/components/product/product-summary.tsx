"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPriceFromEuros } from "@/lib/utils";
import type { ProductData } from "@/data/products";

interface ProductSummaryProps {
  product: ProductData;
}

export function ProductSummary({ product }: ProductSummaryProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="sticky top-32">
      <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-none uppercase text-on-surface">
        {product.name}
      </h1>
      
      <div className="flex items-center gap-4 mb-8">
        <span className="text-3xl font-headline font-medium text-on-surface">
          {formatPriceFromEuros(product.basePriceIncVat)}
        </span>
        <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-full text-xs font-label tracking-widest uppercase">
          Op voorraad
        </span>
      </div>

      <p className="text-on-surface-variant leading-relaxed mb-10 max-w-md">
        {product.description}
      </p>

      {/* CTA Section */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center border border-outline-variant/30 rounded-full overflow-hidden w-full max-w-[200px] mb-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 hover:bg-surface-container-highest transition-colors flex-1"
            aria-label="Verminder"
          >
            <span className="material-symbols-outlined text-sm">remove</span>
          </button>
          <span className="px-4 py-3 text-sm font-medium text-center flex-1 text-white">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 hover:bg-surface-container-highest transition-colors flex-1"
            aria-label="Verhoog"
          >
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        
        <button 
          onClick={handleAdd}
          className="w-full bg-primary text-on-primary font-headline font-bold py-6 rounded-full text-lg uppercase tracking-widest hover:scale-[1.02] hover:bg-primary-container active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
        >
          {added ? (
            <>
              Toegevoegd!
              <span className="material-symbols-outlined shrink-0" data-icon="check_circle">check_circle</span>
            </>
          ) : (
            <>
              Bestel nu
              <span className="material-symbols-outlined shrink-0" data-icon="arrow_forward">arrow_forward</span>
            </>
          )}
        </button>
        
        <div className="flex justify-center gap-8 py-4">
          <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant">
            <span className="material-symbols-outlined text-sm shrink-0" data-icon="local_shipping">local_shipping</span>
            {product.shippingEstimateMinDays}-{product.shippingEstimateMaxDays} Dagen Levering
          </div>
          <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant">
            <span className="material-symbols-outlined text-sm shrink-0" data-icon="history">history</span>
            {product.returnWindowDays} Dagen Retour
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-2 border-t border-outline-variant/30 pt-8">
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer py-4 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span className="font-label uppercase tracking-widest text-sm font-bold">Kenmerken</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0" data-icon="expand_more">expand_more</span>
          </summary>
          <div className="pb-6 pt-2 text-sm text-on-surface-variant space-y-3">
            {product.bulletPoints.map((point, index) => (
              <div key={index} className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span>{point}</span>
              </div>
            ))}
          </div>
        </details>
        
        <details className="group border-t border-outline-variant/10">
          <summary className="flex justify-between items-center cursor-pointer py-4 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span className="font-label uppercase tracking-widest text-sm font-bold">Verzending</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0" data-icon="expand_more">expand_more</span>
          </summary>
          <div className="pb-6 pt-2 text-sm text-on-surface-variant leading-relaxed">
            De meeste producten worden verzonden binnen de EU met een levertijd van {product.shippingEstimateMinDays}-{product.shippingEstimateMaxDays} werkdagen. Wij maken gebruik van premium koeriersdiensten om de veiligheid van uw PaddleForge apparatuur te waarborgen. U heeft recht op {product.returnWindowDays} dagen retour.
          </div>
        </details>

        {product.faq && product.faq.length > 0 && (
          <details className="group border-t border-outline-variant/10">
            <summary className="flex justify-between items-center cursor-pointer py-4 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
              <span className="font-label uppercase tracking-widest text-sm font-bold">FAQ's</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0" data-icon="expand_more">expand_more</span>
            </summary>
            <div className="pb-6 pt-2 text-sm text-on-surface-variant space-y-4">
              {product.faq.map((item, index) => (
                <div key={index}>
                  <p className="font-bold text-on-background mb-1">{item.question}</p>
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
