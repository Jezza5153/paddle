import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pickleball accessoires kopen in Nederland | CourtStart NL",
  description:
    "Shop slimme pickleball accessoires en starter kits in Nederland. Veilig betalen met iDEAL | Wero, kaart, Apple Pay en Google Pay.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Pickleball accessoires kopen in Nederland | CourtStart NL",
    description:
      "Shop slimme pickleball accessoires en starter kits in Nederland. Veilig betalen met iDEAL | Wero, kaart, Apple Pay en Google Pay.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CourtStart NL",
              url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
              description:
                "Slimme pickleball accessoires en starter kits in Nederland.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NL",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
