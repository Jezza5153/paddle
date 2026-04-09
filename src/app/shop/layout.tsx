import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Padel, Koningsdag & Zomer Producten | PaddleForge",
  description:
    "Bekijk alle producten bij PaddleForge: padel rackets, Koningsdag accessoires, moederdag cadeaus en zomer must-haves. Veilig betalen met iDEAL. 14 dagen retourneren.",
  keywords: [
    "padel racket kopen",
    "padel accessoires",
    "koningsdag accessoires kopen",
    "moederdag cadeau",
    "zomer producten",
    "oranje kleding kopen",
    "padel set kopen nederland",
  ],
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
