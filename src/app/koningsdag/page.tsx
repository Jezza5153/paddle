import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getKoningsdagProducts, getAllProducts } from "@/data/products";
import { formatPriceFromEuros } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Koningsdag 2026 | Oranje Accessoires & Kleding | PaddleForge",
  description:
    "Maak je klaar voor Koningsdag 2026! Oranje feestbrillen, bucket hats, schmink, vlaggen en meer. Bestel nu en vier King's Day in stijl. Veilig betalen met iDEAL.",
  keywords: [
    "koningsdag 2026",
    "koningsdag accessoires",
    "oranje kleding kopen",
    "koningsdag feestartikelen",
    "oranje zonnebril",
    "oranje bucket hat",
    "koningsdag schmink",
    "oranje t-shirt",
    "koningsdag verkleedkleren",
    "oranje feestbril",
    "nederland vlag kopen",
    "koningsdag cadeau",
  ],
  openGraph: {
    title: "Koningsdag 2026 | Oranje Accessoires | PaddleForge",
    description:
      "Oranje feestbrillen, bucket hats, schmink en meer voor Koningsdag 2026. Bestel nu!",
    locale: "nl_NL",
    type: "website",
  },
};

export default function KoningsdagPage() {
  const koningsdagProducts = getKoningsdagProducts();
  const padelProducts = getAllProducts().filter((p) => p.category !== "Koningsdag" && p.category !== "Moederdag" && p.category !== "Zomer").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-8 max-w-screen-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/15 text-orange-400 px-4 py-2 rounded-full text-xs font-label tracking-widest uppercase mb-8">
          <span className="material-symbols-outlined text-sm">celebration</span>
          27 APRIL 2026 · KONINGSDAG
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6 text-on-surface">
          Lang Leve de
          <br />
          <span className="text-orange-400">Koning!</span>
        </h1>

        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Maak je klaar voor <strong>Koningsdag 2026</strong>. Of je nu naar de
          vrijmarkt gaat, een straatfeest organiseert of gewoon lekker oranje
          wilt zijn — wij hebben alles wat je nodig hebt. Van feestbrillen tot
          schmink, van bucket hats tot de Nederlandse vlag.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#producten"
            className="bg-orange-500 text-white font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3"
          >
            Shop Oranje
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <Link
            href="/shop"
            className="border border-outline-variant/30 text-on-surface font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-colors inline-flex items-center gap-3"
          >
            Alle Producten
          </Link>
        </div>
      </section>

      {/* Countdown Stats */}
      <section className="bg-orange-500/10 py-10 px-8 border-y border-orange-500/20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-headline text-3xl font-black text-orange-400">27 Apr</span>
            <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Koningsdag 2026
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-orange-400">17M+</span>
            <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Nederlanders in oranje
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-orange-400">Dokkum</span>
            <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Officieel bezoek 2026
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-orange-400">&euro;9,95</span>
            <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Oranje items vanaf
            </p>
          </div>
        </div>
      </section>

      {/* Koningsdag Products */}
      <section id="producten" className="py-24 px-8 max-w-screen-xl mx-auto scroll-mt-24">
        <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-4 text-on-surface text-center">
          Oranje <span className="text-orange-400">Must-Haves</span>
        </h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
          Alles wat je nodig hebt voor het grootste straatfeest van Nederland.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koningsdagProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-surface-container-low rounded-xl overflow-hidden hover:ring-1 hover:ring-orange-500/50 transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-label tracking-widest uppercase">
                  Koningsdag
                </span>
                {product.compareAtPriceIncVat && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-[10px] font-bold">
                    -{Math.round((1 - product.basePriceIncVat / product.compareAtPriceIncVat) * 100)}%
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold uppercase tracking-tight text-on-surface mb-1">
                  {product.name}
                </h3>
                <p className="text-on-surface-variant text-sm mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-headline text-xl font-bold text-orange-400">
                    {formatPriceFromEuros(product.basePriceIncVat)}
                  </span>
                  {product.compareAtPriceIncVat && (
                    <span className="text-zinc-600 text-sm line-through">
                      {formatPriceFromEuros(product.compareAtPriceIncVat)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why PaddleForge for Koningsdag */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-10 text-on-surface text-center">
            Waarom Bestellen bij <span className="text-orange-400">PaddleForge?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-orange-400 mb-4 block">verified</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">Veilig Betalen</h3>
              <p className="text-on-surface-variant text-sm">iDEAL, creditcard, Apple Pay en Google Pay. 100% veilig.</p>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-orange-400 mb-4 block">undo</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">14 Dagen Retour</h3>
              <p className="text-on-surface-variant text-sm">Niet tevreden? Stuur het terug binnen 14 dagen.</p>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-orange-400 mb-4 block">support_agent</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">Nederlandse Klantenservice</h3>
              <p className="text-on-surface-variant text-sm">Vragen? Wij helpen je graag in het Nederlands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Also check out padel */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-4 text-on-surface text-center">
          Ook leuk voor <span className="text-primary">Koningsdag:</span> Padel!
        </h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
          Padel is dé sport van Nederland. Speel een potje in het park op Koningsdag!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {padelProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-surface-container-low rounded-xl overflow-hidden hover:ring-1 hover:ring-primary/50 transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-label tracking-widest uppercase">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold uppercase tracking-tight text-on-surface mb-1">
                  {product.name}
                </h3>
                <span className="font-headline text-xl font-bold text-primary">
                  {formatPriceFromEuros(product.basePriceIncVat)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-orange-500/10 to-transparent">
        <div className="max-w-screen-md mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-on-surface">
            Klaar voor <span className="text-orange-400">Koningsdag?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Bestel vandaag nog je oranje outfit en accessoires.
            Veilig betalen met iDEAL.
          </p>
          <a
            href="#producten"
            className="bg-orange-500 text-white font-headline font-bold py-6 px-12 rounded-full uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3 text-lg"
          >
            Shop Oranje
            <span className="material-symbols-outlined">celebration</span>
          </a>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wanneer is Koningsdag 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Koningsdag 2026 valt op maandag 27 april. Het officiële bezoek vindt plaats in Dokkum.",
                },
              },
              {
                "@type": "Question",
                name: "Wat trek je aan met Koningsdag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oranje! De nationale kleur van Nederland. Denk aan oranje T-shirts, bucket hats, feestbrillen, schmink en accessoires. Bij PaddleForge vind je alles wat je nodig hebt.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik nog op tijd bestellen voor Koningsdag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bestel uiterlijk 2 weken voor Koningsdag om zeker te zijn van levering. Levertijd is 7-14 werkdagen.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
