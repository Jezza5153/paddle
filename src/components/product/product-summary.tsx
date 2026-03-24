"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPriceFromEuros } from "@/lib/utils";
import { Check, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
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
    <div>
      {/* Category */}
      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
        {product.name}
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-3xl font-semibold text-text-primary">
          {formatPriceFromEuros(product.basePriceIncVat)}
        </span>
        {product.compareAtPriceIncVat && (
          <span className="text-lg text-muted-foreground line-through">
            {formatPriceFromEuros(product.compareAtPriceIncVat)}
          </span>
        )}
        <span className="text-sm text-muted-foreground">incl. BTW</span>
      </div>

      {/* Short description */}
      <p className="mt-4 text-text-secondary leading-7">
        {product.shortDescription}
      </p>

      {/* Bullet points */}
      <ul className="mt-6 space-y-2">
        {product.bulletPoints.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Quantity + Add to cart */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex items-center border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-3 hover:bg-gray-50 transition-colors"
            aria-label="Verminder"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-3 text-sm font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-3 hover:bg-gray-50 transition-colors"
            aria-label="Verhoog"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <Button onClick={handleAdd} size="lg" className="flex-1">
          {added ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Toegevoegd!
            </>
          ) : (
            "In winkelmand"
          )}
        </Button>
      </div>

      {/* Trust notes */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5 text-brand-green" />
          <span>Veilig betalen</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="h-3.5 w-3.5 text-brand-green" />
          <span>Levertijd {product.shippingEstimateMinDays}-{product.shippingEstimateMaxDays} werkdagen</span>
        </div>
        <div className="flex items-center gap-1.5">
          <RotateCcw className="h-3.5 w-3.5 text-brand-green" />
          <span>{product.returnWindowDays} dagen retour</span>
        </div>
      </div>
    </div>
  );
}
