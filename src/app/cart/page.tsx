"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { formatPriceFromEuros } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag, Shield, Truck, RotateCcw, Loader2 } from "lucide-react";

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
      <div className="section-padding">
        <div className="page-width">
          <div className="content-width text-center py-20">
            <ShoppingBag className="h-16 w-16 text-border mx-auto mb-6" />
            <h1 className="text-2xl font-semibold text-text-primary mb-3">
              Je winkelmand is leeg
            </h1>
            <p className="text-text-secondary mb-8">
              Bekijk onze kits en vind iets moois.
            </p>
            <Link href="/shop">
              <Button size="lg">Bekijk de kits</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="page-width">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-10">
          Winkelmand ({totalItems})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-surface rounded-2xl border border-border p-4 shadow-sm"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <Image
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-sm font-semibold text-text-primary hover:text-brand-green transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.product.category}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 text-muted-foreground hover:text-error transition-colors"
                      aria-label="Verwijder"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2.5 py-1.5 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 py-1.5 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2.5 py-1.5 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">
                      {formatPriceFromEuros(
                        item.product.basePriceIncVat * item.quantity
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm sticky top-28">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Overzicht
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotaal</span>
                  <span className="font-medium text-text-primary">
                    {formatPriceFromEuros(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Verzending</span>
                  <span className="text-xs">Berekend bij checkout</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold text-text-primary">Totaal</span>
                  <span className="font-semibold text-text-primary text-lg">
                    {formatPriceFromEuros(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Incl. BTW
                </p>
              </div>

              {checkoutError && (
                <p className="mt-3 text-sm text-error bg-error/10 rounded-lg px-3 py-2">
                  {checkoutError}
                </p>
              )}

              <Button
                className="w-full mt-6"
                size="lg"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Bezig met laden...
                  </>
                ) : (
                  "Afrekenen"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Je wordt doorgestuurd naar een veilige betaalpagina
              </p>

              {/* Mini trust block */}
              <div className="mt-6 pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-brand-green" />
                  <span>Veilig betalen met iDEAL, kaart of Apple Pay</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-3.5 w-3.5 text-brand-green" />
                  <span>Duidelijke levering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <RotateCcw className="h-3.5 w-3.5 text-brand-green" />
                  <span>14 dagen retourrecht</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


