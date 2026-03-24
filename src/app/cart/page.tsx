"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPriceFromEuros } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  async function handleCheckout() {
    setIsCheckingOut(true);
    setCheckoutError(null);

    try {
      const res = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            slug: item.product.slug,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Er ging iets mis bij het afrekenen");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Geen checkout URL ontvangen");
      }
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Er ging iets mis"
      );
      setIsCheckingOut(false);
    }
  }

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-24 px-8 max-w-screen-md mx-auto min-h-screen flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-border text-6xl mb-6" data-icon="shopping_bag">
          shopping_bag
        </span>
        <h1 className="text-2xl font-headline font-bold text-on-surface mb-3 uppercase tracking-tighter">
          Je winkelmand is leeg
        </h1>
        <p className="text-on-surface-variant mb-8 font-body">
          Ontdek onze padel uitrusting en begin met spelen.
        </p>
        <Link href="/shop" className="bg-primary hover:bg-primary-container text-on-primary font-headline font-bold py-4 px-8 rounded-full transition-colors uppercase tracking-widest text-sm">
          Bekijk Collectie
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-md mx-auto min-h-screen">
      <div className="bg-inverse-surface rounded-2xl shadow-2xl flex flex-col border border-border/30 overflow-hidden">
        {/* Header */}
        <div className="p-8 flex items-center justify-between border-b border-border/50">
          <div className="flex items-center gap-4">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-white uppercase">Je Winkelmand</h2>
            <span className="font-label bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-[10px] tracking-widest font-bold">
              {totalItems} ITEMS
            </span>
          </div>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-6 group">
              <div className="w-24 h-24 bg-surface-container-highest rounded-xl overflow-hidden shrink-0 relative">
                <Image
                  src={item.product.primaryImage}
                  alt={item.product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <Link href={`/products/${item.product.slug}`} className="font-headline font-bold text-white leading-tight uppercase text-sm tracking-wide hover:text-primary transition-colors">
                      {item.product.name}
                    </Link>
                    <span className="text-white font-headline font-bold pl-2">
                      {formatPriceFromEuros(item.product.basePriceIncVat * item.quantity)}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs font-body tracking-tight">
                    {item.product.category}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center bg-surface-container-highest rounded-full px-3 py-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">remove</span>
                    </button>
                    <span className="font-label text-white w-8 text-center text-xs font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-on-surface-variant hover:text-error transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Checkout */}
        <div className="p-8 bg-surface-container-low backdrop-blur-md space-y-6 border-t border-border/50">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-body text-sm">Subtotaal</span>
              <span className="text-on-surface font-body text-sm font-semibold">
                {formatPriceFromEuros(subtotal)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-body text-sm">Verzending</span>
              <span className="text-on-surface-variant font-body text-sm">Berekend bij stap 2</span>
            </div>
            <div className="pt-4 flex justify-between items-end border-t border-border/30">
              <div>
                <span className="block font-headline text-lg font-bold text-on-surface tracking-tight uppercase">Totaal</span>
                <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Inclusief BTW</span>
              </div>
              <span className="font-headline text-3xl font-extrabold text-primary">
                {formatPriceFromEuros(subtotal)}
              </span>
            </div>
          </div>
          
          {checkoutError && (
            <p className="text-sm text-error bg-error/10 rounded-lg px-4 py-3 font-medium">
              {checkoutError}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full bg-primary text-on-primary font-headline font-bold py-6 rounded-full hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest disabled:opacity-70 disabled:hover:scale-100"
          >
            {isCheckingOut ? (
              <>
                Bezig met laden...
                <span className="material-symbols-outlined animate-spin shadow-none">progress_activity</span>
              </>
            ) : (
              <>
                Afrekenen
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-4 opacity-40">
            <span className="material-symbols-outlined text-2xl">credit_card</span>
            <span className="material-symbols-outlined text-2xl">account_balance</span>
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
        </div>
      </div>
    </main>
  );
}
