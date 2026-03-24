"use client";

import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { SortBar } from "@/components/shop/sort-bar";
import type { Metadata } from "next";

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
    <div className="section-padding">
      <div className="page-width">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Shop
          </h1>
          <p className="mt-2 text-text-secondary">
            Onze samengestelde kits voor pickleball beginners.
          </p>
        </div>

        <SortBar value={sort} onChange={setSort} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
