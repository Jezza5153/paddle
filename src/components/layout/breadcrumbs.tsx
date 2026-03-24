"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabels: Record<string, string> = {
  shop: "Winkel",
  products: "Producten",
  cart: "Winkelmand",
  contact: "Contact",
  verzending: "Verzending",
  retouren: "Retouren",
  privacy: "Privacy",
  "algemene-voorwaarden": "Voorwaarden",
  success: "Bestelling Geplaatst",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label =
      pathLabels[segment] ||
      segment
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
    crumbs.push({ label, href: currentPath });
  }

  return (
    <nav aria-label="Breadcrumb" className="pt-24 px-8 max-w-screen-2xl mx-auto">
      <ol className="flex items-center gap-2 text-sm font-body" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => (
          <li
            key={crumb.href}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && (
              <span className="text-zinc-600 text-xs">/</span>
            )}
            {i < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="text-zinc-500 hover:text-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            ) : (
              <span className="text-zinc-300 font-medium" itemProp="name">
                {crumb.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: crumbs.map((crumb, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: crumb.label,
              item: `https://paddleforge.nl${crumb.href}`,
            })),
          }),
        }}
      />
    </nav>
  );
}
