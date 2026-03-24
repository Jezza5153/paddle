"use client";

import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";

export default function ShopPage() {
  const [sort, setSort] = useState("recommended");

  const products = useMemo(() => {
    const all = getAllProducts();
    switch (sort) {
      case "price-asc":
        return [...all].sort((a, b) => a.basePriceIncVat - b.basePriceIncVat);
      case "price-desc":
        return [...all].sort((a, b) => b.basePriceIncVat - a.basePriceIncVat);
      default:
        return all;
    }
  }, [sort]);

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto min-h-screen">
      {/* Page Header */}
      <header className="mb-16 md:mb-24 relative">
        <h1 className="font-headline text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white/5 absolute -top-12 -left-4 pointer-events-none select-none">
          KINETIC
        </h1>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              Engineered Gear
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white max-w-2xl uppercase">
              EQUIPMENT VOOR DE <span className="text-primary italic">ELITE.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold text-sm tracking-widest hover:scale-105 transition-transform active:scale-95">
              NIEUWE COLLECTIE
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
        {/* Sidebar Filters */}
        <aside className="space-y-12">
          <section>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Categorie</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-sm border-2 border-zinc-700 group-hover:border-primary transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                </div>
                <input defaultChecked className="hidden" type="checkbox" />
                <span className="text-zinc-100 font-medium group-hover:text-white transition-colors">Padel Rackets</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-sm border-2 border-zinc-700 group-hover:border-primary transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                </div>
                <input className="hidden" type="checkbox" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">Sets</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-sm border-2 border-zinc-700 group-hover:border-primary transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                </div>
                <input className="hidden" type="checkbox" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">Kleding</span>
              </label>
            </div>
          </section>
          
          <section>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Prijs</h3>
            <div className="space-y-4">
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
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">Join the movement. Upgrade je spel met de nieuwste Kinetic Precision tech.</p>
            <button className="text-primary font-label text-xs tracking-widest uppercase flex items-center gap-2 group">
              Schrijf in voor drops
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24">
          {products.map((product, index) => (
            <div key={product.id} className={index % 2 === 1 ? "lg:mt-24" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
