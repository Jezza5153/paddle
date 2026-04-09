import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/lib/cart-context";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Padel accessoires kopen in Nederland | PaddleForge",
  description:
    "Shop slimme padel accessoires en starter kits in Nederland. Veilig betalen met iDEAL | Wero, kaart, Apple Pay en Google Pay.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.paddleforge.nl"),
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
    },
  },
  openGraph: {
    title: "PaddleForge — Padel Gear",
    description:
      "Shop slimme padel accessoires en starter kits in Nederland. Veilig betalen met iDEAL, kaart, Apple Pay en Google Pay.",
    locale: "nl_NL",
    type: "website",
    images: ["/images/products/carbon-paddle-set.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PaddleForge — Padel Gear",
    description: "Shop slimme padel accessoires en starter kits in Nederland.",
    images: ["/images/products/carbon-paddle-set.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${manrope.variable} h-full`}>
      <head>
        <meta name="geo.region" content="NL" />
        <meta name="geo.placename" content="Nederland" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D2XX2WMTVT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-D2XX2WMTVT');`,
          }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased overflow-x-hidden min-h-full flex flex-col">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <Breadcrumbs />
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
              name: "PaddleForge",
              url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.paddleforge.nl",
              description:
                "Slimme padel accessoires en starter kits in Nederland.",
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
