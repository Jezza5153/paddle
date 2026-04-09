import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getMoederdagProducts } from "@/data/products";
import { formatPriceFromEuros } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Moederdag Cadeau 2026 | Unieke Cadeaus voor Mama | PaddleForge",
  description:
    "Op zoek naar een origineel moederdag cadeau? Ontdek unieke cadeaus: projectie kettingen, jade roller sets, eeuwige rozen en meer. Veilig betalen met iDEAL.",
  keywords: [
    "moederdag cadeau",
    "moederdag cadeau 2026",
    "cadeau voor mama",
    "origineel moederdag cadeau",
    "moederdag ketting",
    "jade roller cadeau",
    "eeuwige roos",
    "wellness cadeau moederdag",
    "cadeau idee moeder",
    "moederdag geschenk",
    "moederdag inspiratie",
    "cadeau vrouw ontspanning",
  ],
  openGraph: {
    title: "Moederdag Cadeau 2026 | PaddleForge",
    description:
      "Unieke moederdag cadeaus: projectie kettingen, jade roller sets, eeuwige rozen en meer.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function MoederdagPage() {
  const moederdagProducts = getMoederdagProducts();

  const giftIdeas = [
    { icon: "favorite", label: "Sieraden", desc: "Persoonlijk en emotioneel" },
    { icon: "spa", label: "Wellness", desc: "Ontspanning voor mama" },
    { icon: "local_florist", label: "Eeuwige Roos", desc: "Gaat jaren mee" },
    { icon: "self_improvement", label: "Self-care", desc: "Me-time voor mama" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-8 max-w-screen-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-pink-500/15 text-pink-400 px-4 py-2 rounded-full text-xs font-label tracking-widest uppercase mb-8">
          <span className="material-symbols-outlined text-sm">favorite</span>
          11 MEI 2026 · MOEDERDAG
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6 text-on-surface">
          Voor de Liefste
          <br />
          <span className="text-pink-400">Mama.</span>
        </h1>

        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Zoek je een <strong>origineel moederdag cadeau</strong>? Geen bloemen die
          verwelken of bonbons die opraken. Geef mama iets bijzonders dat ze elke
          dag kan gebruiken en waarderen. Van een ketting die &quot;ik hou van je&quot;
          fluistert tot een wellness set voor ultieme ontspanning.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#cadeaus"
            className="bg-pink-500 text-white font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3"
          >
            Bekijk Cadeaus
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

      {/* Gift Categories */}
      <section className="bg-pink-500/5 py-10 px-8 border-y border-pink-500/20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {giftIdeas.map((idea) => (
            <div key={idea.label}>
              <span className="material-symbols-outlined text-3xl text-pink-400">{idea.icon}</span>
              <p className="font-headline font-bold text-sm uppercase tracking-wider mt-2">{idea.label}</p>
              <p className="text-on-surface-variant text-xs mt-1">{idea.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section id="cadeaus" className="py-24 px-8 max-w-screen-xl mx-auto scroll-mt-24">
        <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-4 text-on-surface text-center">
          Moederdag <span className="text-pink-400">Cadeaus</span>
        </h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
          Cadeaus die mama echt blij maken. Van persoonlijk tot wellness.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moederdagProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-surface-container-low rounded-xl overflow-hidden hover:ring-1 hover:ring-pink-500/50 transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-label tracking-widest uppercase">
                  Moederdag
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
                  <span className="font-headline text-xl font-bold text-pink-400">
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

      {/* Why PaddleForge */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-10 text-on-surface text-center">
            Waarom bij <span className="text-pink-400">PaddleForge?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-pink-400 mb-4 block">cardboard_box</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">Mooi Verpakt</h3>
              <p className="text-on-surface-variant text-sm">Veel producten worden geleverd in een geschenkdoos. Direct cadeau-klaar.</p>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-pink-400 mb-4 block">verified</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">Veilig Betalen</h3>
              <p className="text-on-surface-variant text-sm">iDEAL, creditcard, Apple Pay en Google Pay. 100% veilig.</p>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl text-pink-400 mb-4 block">undo</span>
              <h3 className="font-headline font-bold uppercase tracking-wide text-sm mb-2">14 Dagen Retour</h3>
              <p className="text-on-surface-variant text-sm">Niet het perfecte cadeau? Retourneer het binnen 14 dagen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-pink-500/10 to-transparent">
        <div className="max-w-screen-md mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-on-surface">
            Maak Mama <span className="text-pink-400">Blij.</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Moederdag is 11 mei 2026. Bestel op tijd zodat het cadeau er is.
            Veilig betalen met iDEAL.
          </p>
          <a
            href="#cadeaus"
            className="bg-pink-500 text-white font-headline font-bold py-6 px-12 rounded-full uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3 text-lg"
          >
            Bekijk Cadeaus
            <span className="material-symbols-outlined">favorite</span>
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
                name: "Wanneer is Moederdag 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moederdag 2026 valt op zondag 11 mei.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is een origineel moederdag cadeau?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een projectie ketting die 'ik hou van je' in 100 talen laat zien, een jade roller en gua sha set voor ontspanning, of een eeuwige roos die jaren meegaat. Persoonlijk en bijzonder.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik nog op tijd bestellen voor Moederdag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bestel uiterlijk 2 weken voor Moederdag (voor 27 april) om zeker te zijn van levering. Levertijd is 7-14 werkdagen.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
