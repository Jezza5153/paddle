"use client";

import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";

const categories = [
  { key: "all", label: "Alles" },
  { key: "Koningsdag", label: "Koningsdag", color: "text-orange-400" },
  { key: "Moederdag", label: "Moederdag", color: "text-pink-400" },
  { key: "Zomer", label: "Zomer", color: "text-sky-400" },
  { key: "padel", label: "Padel & Sport" },
];

export default function ShopPage() {
  const [sort, setSort] = useState("recommended");
  const [category, setCategory] = useState("all");

  const products = useMemo(() => {
    let all = getAllProducts();

    if (category === "padel") {
      all = all.filter((p) => !["Koningsdag", "Moederdag", "Zomer"].includes(p.category));
    } else if (category !== "all") {
      all = all.filter((p) => p.category === category);
    }

    switch (sort) {
      case "price-asc":
        return [...all].sort((a, b) => a.basePriceIncVat - b.basePriceIncVat);
      case "price-desc":
        return [...all].sort((a, b) => b.basePriceIncVat - a.basePriceIncVat);
      default:
        return all;
    }
  }, [sort, category]);

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto min-h-screen">
      {/* Page Header */}
      <header className="mb-16 md:mb-24 relative">
        <h1 className="font-headline text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white/5 absolute -top-12 -left-4 pointer-events-none select-none">
          SHOP
        </h1>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              {products.length} producten
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white max-w-2xl uppercase">
              ALLES VOOR <span className="text-primary italic">JOU.</span>
            </h2>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
        {/* Sidebar Filters */}
        <aside className="space-y-12">
          <section>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Categorie</h3>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setCategory(cat.key)}
                  className={`w-full text-left py-2 px-3 rounded-lg flex justify-between items-center transition-colors ${
                    category === cat.key
                      ? `bg-surface-container-highest ${cat.color || "text-zinc-100"}`
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-surface-container"
                  }`}
                >
                  <span className="font-medium">{cat.label}</span>
                  {category === cat.key && (
                    <span className="material-symbols-outlined text-sm">check</span>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Sorteren</h3>
            <div className="space-y-4">
              <button
                onClick={() => setSort("recommended")}
                className={`w-full text-left py-2 border-b border-zinc-800 flex justify-between items-center group transition-colors ${sort === "recommended" ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`}
              >
                <span>Aanbevolen</span>
                <span className="material-symbols-outlined text-sm">recommend</span>
              </button>
              <button
                onClick={() => setSort("price-asc")}
                className={`w-full text-left py-2 border-b border-zinc-800 flex justify-between items-center group transition-colors ${sort === "price-asc" ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`}
              >
                <span>Prijs: Laag - Hoog</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
              <button
                onClick={() => setSort("price-desc")}
                className={`w-full text-left py-2 border-b border-zinc-800 flex justify-between items-center group transition-colors ${sort === "price-desc" ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`}
              >
                <span>Prijs: Hoog - Laag</span>
                <span className="material-symbols-outlined text-sm">south_east</span>
              </button>
            </div>
          </section>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">Veilig betalen met iDEAL, creditcard, Apple Pay en Google Pay. 14 dagen retourneren.</p>
            <div className="flex items-center gap-3 text-primary font-label text-xs tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">verified</span>
              Veilig winkelen
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
