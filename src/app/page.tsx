import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { BeginnerGuide } from "@/components/home/beginner-guide";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyBuyHere } from "@/components/home/why-buy-here";
import { FinalCta } from "@/components/home/final-cta";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Padel Rackets & Accessoires Kopen | Gratis Verzending | PaddleForge",
  description:
    "Padel rackets, starter sets en accessoires kopen bij PaddleForge.nl. Veilig betalen met iDEAL, creditcard of Apple Pay. 14 dagen retourneren.",
  keywords: [
    "padel racket kopen",
    "padel set",
    "padel accessoires",
    "padel nederland",
    "padel beginners set",
    "pickleball set kopen",
    "padel uitrusting",
    "PaddleForge",
  ],
  openGraph: {
    title: "PaddleForge — Padel Rackets & Accessoires voor Nederland",
    description:
      "Padel rackets, complete sets en accessoires. Veilig betalen met iDEAL. 14 dagen retourneren.",
    locale: "nl_NL",
    type: "website",
    url: "/",
    images: ["/images/products/carbon-paddle-set.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

function StatsBar() {
  return (
    <section className="bg-inverse-surface py-10 px-8 border-y border-outline-variant/10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="font-headline text-3xl font-black text-primary">876K+</span>
          <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
            Padel spelers in NL
          </p>
        </div>
        <div>
          <span className="font-headline text-3xl font-black text-primary">+40%</span>
          <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
            Groei per jaar
          </p>
        </div>
        <div>
          <span className="font-headline text-3xl font-black text-primary">€9,95</span>
          <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
            Starten vanaf
          </p>
        </div>
        <div>
          <span className="font-headline text-3xl font-black text-primary">14 dagen</span>
          <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
            Retourgarantie
          </p>
        </div>
      </div>
    </section>
  );
}

function SeasonalHighlights() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-12 text-center">
          Nu bij <span className="text-primary">PaddleForge</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/koningsdag" className="group bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-xl p-8 hover:from-orange-500/30 transition-all border border-orange-500/20">
            <span className="material-symbols-outlined text-4xl text-orange-400 mb-4 block group-hover:scale-110 transition-transform">celebration</span>
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-2">Koningsdag</h3>
            <p className="text-on-surface-variant text-sm">Oranje accessoires, feestbrillen, schmink en meer voor 27 april.</p>
            <span className="text-orange-400 font-label text-xs tracking-widest uppercase mt-4 block">Bekijk collectie &rarr;</span>
          </a>
          <a href="/moederdag" className="group bg-gradient-to-br from-pink-500/20 to-pink-600/5 rounded-xl p-8 hover:from-pink-500/30 transition-all border border-pink-500/20">
            <span className="material-symbols-outlined text-4xl text-pink-400 mb-4 block group-hover:scale-110 transition-transform">favorite</span>
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-2">Moederdag</h3>
            <p className="text-on-surface-variant text-sm">Unieke cadeaus voor mama: kettingen, jade rollers, eeuwige rozen.</p>
            <span className="text-pink-400 font-label text-xs tracking-widest uppercase mt-4 block">Bekijk cadeaus &rarr;</span>
          </a>
          <a href="/wk-2026" className="group bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 hover:from-primary/30 transition-all border border-primary/20">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform">sports_soccer</span>
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-2">WK 2026</h3>
            <p className="text-on-surface-variant text-sm">Padel uitrusting en oranje fan gear voor het WK Voetbal.</p>
            <span className="text-primary font-label text-xs tracking-widest uppercase mt-4 block">Bekijk WK gear &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  const faqs = [
    {
      q: "Wat is PaddleForge?",
      a: "PaddleForge is een Nederlandse webshop gespecialiseerd in padel uitrusting, seizoensproducten en cadeaus. Wij verkopen padel rackets, accessoires, Koningsdag artikelen, moederdag cadeaus en zomerproducten. Veilig betalen met iDEAL, creditcard, Apple Pay of Google Pay.",
    },
    {
      q: "Hoe snel wordt mijn bestelling geleverd?",
      a: "De meeste producten worden binnen 7-14 werkdagen geleverd in Nederland. Sommige producten (zoals het draagbare net) worden vanuit een Europees magazijn verzonden en zijn er binnen 3-7 dagen. Je ontvangt altijd een track & trace code.",
    },
    {
      q: "Kan ik betalen met iDEAL?",
      a: "Ja, PaddleForge ondersteunt iDEAL als betaalmethode. Daarnaast kun je ook betalen met Visa, Mastercard, Apple Pay en Google Pay. Alle betalingen verlopen veilig via Stripe.",
    },
    {
      q: "Wat is het retourbeleid?",
      a: "Je kunt elk product binnen 14 dagen na ontvangst retourneren. Het product moet in originele staat en verpakking zijn. Neem contact op via onze contactpagina om een retour aan te melden.",
    },
    {
      q: "Welke padel racket is het beste voor beginners?",
      a: "Voor beginners raden we de Starter Paddle (€19) of de Carbon Paddle Set (€39) aan. De Starter Paddle is perfect als instap, terwijl de Carbon Paddle Set alles bevat voor twee spelers: 2 rackets en 4 ballen.",
    },
  ];

  return (
    <>
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-md mx-auto">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-10 text-on-surface text-center">
            Veelgestelde <span className="text-primary">Vragen</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-inverse-surface rounded-xl border border-border/30">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-headline font-bold text-sm uppercase tracking-wide text-white pr-4">
                    {faq.q}
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0 text-on-surface-variant">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Hero />
      <StatsBar />
      <SeasonalHighlights />
      <BeginnerGuide />
      <FeaturedProducts products={products} />
      <WhyBuyHere />
      <HomeFaq />
      <FinalCta />
    </div>
  );
}
