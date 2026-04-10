import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/data/products";
import { formatPriceFromEuros } from "@/lib/utils";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.paddleforge.nl";

export const metadata: Metadata = {
  title: "WK 2026 Padel Uitrusting | Speel mee met Oranje | PaddleForge",
  description:
    "Maak je klaar voor het WK Padel 2026 en het WK Voetbal! Koop padel rackets, sets en accessoires bij PaddleForge. De snelst groeiende sport van Nederland — begin nu met spelen.",
  keywords: [
    "WK padel 2026",
    "padel WK",
    "padel racket kopen",
    "padel uitrusting Nederland",
    "oranje padel",
    "WK voetbal 2026",
    "padel beginnen",
    "padel set kopen",
    "padel Nederland",
    "pickleball kopen",
    "padel accessoires",
    "Premier Padel Rotterdam",
    "padel sport Nederland",
    "padel starter kit",
    "carbon padel racket",
  ],
  openGraph: {
    title: "WK 2026 Padel Uitrusting | PaddleForge",
    description:
      "Het WK Padel komt eraan! Bereid je voor met professionele padel uitrusting van PaddleForge. Veilig betalen met iDEAL.",
    locale: "nl_NL",
    type: "website",
    images: ["/images/products/carbon-paddle-set.jpg"],
  },
};

export default function WK2026Page() {
  const products = getAllProducts();
  const topPicks = products.slice(0, 6);

  const events = [
    {
      name: "FIP Bronze Houten",
      date: "30 mrt – 5 apr 2026",
      location: "Houten, Nederland",
      icon: "emoji_events",
    },
    {
      name: "WK Senioren Padel",
      date: "14 – 20 sep 2026",
      location: "Nederland",
      icon: "military_tech",
    },
    {
      name: "Premier Padel Rotterdam",
      date: "28 sep – 4 okt 2026",
      location: "Rotterdam",
      icon: "stadium",
    },
    {
      name: "FIP World Cup Padel",
      date: "1 – 7 nov 2026",
      location: "TBA",
      icon: "public",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-8 max-w-screen-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-label tracking-widest uppercase mb-8">
          <span className="material-symbols-outlined text-sm">sports_tennis</span>
          WK PADEL 2026 · WK VOETBAL 2026
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6 text-on-surface">
          Nederland Speelt.
          <br />
          <span className="text-primary">Jij Ook?</span>
        </h1>

        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          2026 wordt <strong>hét sportjaar</strong> voor Nederland. Het{" "}
          <strong>WK Voetbal</strong> brengt Oranje-koorts en het{" "}
          <strong>WK Padel</strong> zet de snelst groeiende sport van Europa in de
          spotlight. Of je nu voor het eerst een racket oppakt of je uitrusting
          wilt upgraden — bij PaddleForge ben je er klaar voor.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="bg-primary text-on-primary font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3"
          >
            Bekijk Collectie
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <a
            href="#evenementen"
            className="border border-outline-variant/30 text-on-surface font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-colors inline-flex items-center gap-3"
          >
            Evenementen 2026
            <span className="material-symbols-outlined">expand_more</span>
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-inverse-surface py-10 px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-headline text-3xl font-black text-inverse-on-surface">500K+</span>
            <p className="text-inverse-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Padel spelers in NL
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-inverse-on-surface">#1</span>
            <p className="text-inverse-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Snelst groeiende sport
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-inverse-on-surface">4</span>
            <p className="text-inverse-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              WK Events in 2026
            </p>
          </div>
          <div>
            <span className="font-headline text-3xl font-black text-inverse-on-surface">€9</span>
            <p className="text-inverse-on-surface-variant text-xs font-label tracking-widest uppercase mt-1">
              Starten vanaf
            </p>
          </div>
        </div>
      </section>

      {/* Why Padel + Oranje Section */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-6 text-on-surface">
              Waarom Padel
              <br />
              <span className="text-primary">Explodeert in 2026</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Net als voetbal is padel een <strong>teamsport</strong> die je met
                vrienden speelt. Met het WK Voetbal op komst groeit de
                sportmentaliteit in heel Nederland — en padel profiteert mee.
              </p>
              <p>
                De sport is <strong>makkelijk te leren</strong>, sociaal en
                toegankelijk. Je hebt alleen een racket en een paar ballen nodig
                om te beginnen. Steeds meer sportverenigingen, parken en
                recreatiegebieden leggen padelbanen aan.
              </p>
              <p>
                Met <strong>Premier Padel in Rotterdam</strong> en het{" "}
                <strong>WK Padel</strong> in november wordt 2026 het jaar dat
                padel definitief doorbreekt in Nederland.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-3">groups</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wider">Sociaal</span>
              <p className="text-xs text-on-surface-variant mt-1">Altijd met z&apos;n vieren</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-3">speed</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wider">Snel te leren</span>
              <p className="text-xs text-on-surface-variant mt-1">Binnen 30 min speelbaar</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-3">fitness_center</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wider">Gezond</span>
              <p className="text-xs text-on-surface-variant mt-1">Cardio + coördinatie</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-3">payments</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wider">Betaalbaar</span>
              <p className="text-xs text-on-surface-variant mt-1">Start vanaf €9</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section id="evenementen" className="py-24 px-8 bg-surface-container-low scroll-mt-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-4 text-on-surface text-center">
            Padel Evenementen <span className="text-primary">2026</span>
          </h2>
          <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
            De grootste padel events komen naar Nederland. Bereid je voor met de juiste uitrusting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.name}
                className="bg-inverse-surface border border-border/30 rounded-xl p-8 hover:border-primary/50 transition-colors group"
              >
                <span className="material-symbols-outlined text-3xl text-primary-dim mb-4 block group-hover:scale-110 transition-transform">
                  {event.icon}
                </span>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-inverse-on-surface mb-2">
                  {event.name}
                </h3>
                <p className="text-inverse-on-surface-variant text-sm mb-1">{event.date}</p>
                <p className="text-primary-dim text-xs font-label tracking-widest uppercase">
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Picks */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mb-4 text-on-surface text-center">
          WK <span className="text-primary">Favorieten</span>
        </h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
          Onze meest populaire producten om je WK-klaar te maken.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPicks.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-surface-container-low rounded-xl overflow-hidden hover:ring-1 hover:ring-primary/50 transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                <p className="text-on-surface-variant text-sm mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>
                <span className="font-headline text-xl font-bold text-primary">
                  {formatPriceFromEuros(product.basePriceIncVat)}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="bg-primary text-on-primary font-headline font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3"
          >
            Bekijk Alle Producten
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-md mx-auto">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-10 text-on-surface text-center">
            Veelgestelde <span className="text-primary">Vragen</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Wat is padel en waarom is het zo populair in Nederland?",
                a: "Padel is een racket sport die elementen combineert van tennis en squash. Je speelt altijd in duo's op een afgesloten baan met glazen wanden. Het is de snelst groeiende sport in Nederland met meer dan 500.000 actieve spelers.",
              },
              {
                q: "Wat heb ik nodig om te beginnen met padel?",
                a: "Je hebt een padel racket en padel ballen nodig. Bij PaddleForge kun je een complete starter set kopen vanaf €19. Een draagbaar net is handig als je buiten wilt spelen.",
              },
              {
                q: "Wanneer is het WK Padel 2026?",
                a: "De FIP World Cup Padel 2026 vindt plaats van 1 tot en met 7 november 2026. Daarnaast komt Premier Padel naar Rotterdam (28 sep – 4 okt 2026) en wordt het WK Senioren in Nederland georganiseerd.",
              },
              {
                q: "Is padel geschikt voor beginners?",
                a: "Absoluut! Padel is makkelijker te leren dan tennis. De kleinere baan en de glazen wanden zorgen ervoor dat rally's langer duren. De meeste beginners kunnen binnen 30 minuten een leuk potje spelen.",
              },
              {
                q: "Kan ik padel spelen tijdens het WK Voetbal?",
                a: "Zeker! Padel is dé sport om te combineren met het WK Voetbal. Speel een potje padel voor of na de wedstrijd van Oranje. Steeds meer sportcafés en padelhallen combineren live voetbal met padel faciliteiten.",
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-inverse-surface rounded-xl border border-border/30">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:text-primary-dim transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-headline font-bold text-sm uppercase tracking-wide text-inverse-on-surface pr-4">
                    {faq.q}
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0 text-inverse-on-surface-variant">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-inverse-on-surface-variant leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-screen-md mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-on-surface">
            Klaar voor het <span className="text-primary">WK?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Bestel vandaag nog je padel uitrusting en wees er klaar voor als het WK begint.
            Veilig betalen met iDEAL, kaart, Apple Pay en Google Pay.
          </p>
          <Link
            href="/shop"
            className="bg-primary text-on-primary font-headline font-bold py-6 px-12 rounded-full uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3 text-lg"
          >
            Shop Nu
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
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
                name: "Wat is padel en waarom is het zo populair in Nederland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Padel is een racket sport die elementen combineert van tennis en squash. Je speelt altijd in duo's op een afgesloten baan met glazen wanden. Het is de snelst groeiende sport in Nederland met meer dan 500.000 actieve spelers.",
                },
              },
              {
                "@type": "Question",
                name: "Wat heb ik nodig om te beginnen met padel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Je hebt een padel racket en padel ballen nodig. Bij PaddleForge kun je een complete starter set kopen vanaf €19. Een draagbaar net is handig als je buiten wilt spelen.",
                },
              },
              {
                "@type": "Question",
                name: "Wanneer is het WK Padel 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De FIP World Cup Padel 2026 vindt plaats van 1 tot en met 7 november 2026. Daarnaast komt Premier Padel naar Rotterdam (28 sep – 4 okt 2026) en wordt het WK Senioren in Nederland georganiseerd.",
                },
              },
              {
                "@type": "Question",
                name: "Is padel geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut! Padel is makkelijker te leren dan tennis. De kleinere baan en de glazen wanden zorgen ervoor dat rally's langer duren. De meeste beginners kunnen binnen 30 minuten een leuk potje spelen.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik padel spelen tijdens het WK Voetbal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zeker! Padel is dé sport om te combineren met het WK Voetbal. Speel een potje padel voor of na de wedstrijd van Oranje. Steeds meer sportcafés en padelhallen combineren live voetbal met padel faciliteiten.",
                },
              },
            ],
          }),
        }}
      />

      {/* Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Premier Padel Rotterdam 2026",
              startDate: "2026-09-28",
              endDate: "2026-10-04",
              location: {
                "@type": "Place",
                name: "Rotterdam",
                address: { "@type": "PostalAddress", addressCountry: "NL" },
              },
              description: "Premier Padel P2 toernooi in Rotterdam, Nederland.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "FIP World Cup Padel 2026",
              startDate: "2026-11-01",
              endDate: "2026-11-07",
              description: "Wereldkampioenschap Padel 2026 — FIP World Cup voor nationale teams.",
            },
          ]),
        }}
      />
    </>
  );
}
