import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over PaddleForge | Nederlandse Padel & Lifestyle Webshop",
  description:
    "PaddleForge is een Nederlandse webshop gespecialiseerd in padel uitrusting, seizoensproducten en feestaccessoires. Lees ons verhaal en waarom duizenden Nederlanders bij ons bestellen.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over PaddleForge | Onze Missie",
    description:
      "Wij maken padel en seizoensproducten toegankelijk voor heel Nederland. Veilig betalen met iDEAL, 14 dagen retourneren.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function OverOnsPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-xl mx-auto min-h-screen">
      {/* Hero */}
      <header className="mb-20 text-center">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
          Over Ons
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase text-on-surface">
          Padel Voor <span className="text-primary italic">Iedereen</span>
        </h1>
        <p className="mt-8 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          PaddleForge is een Nederlandse webshop opgericht om padel en seizoensproducten
          toegankelijk te maken voor iedereen. Geen dure merk-toeslagen, gewoon goede
          spullen tegen een eerlijke prijs.
        </p>
      </header>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <article className="space-y-6">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase text-on-surface">
            Ons Verhaal
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>
              PaddleForge is ontstaan vanuit een simpele observatie: padel groeit
              explosief in Nederland, maar de meeste rackets en accessoires zijn
              óf onbetaalbaar duur, óf van bedenkelijke kwaliteit.
            </p>
            <p>
              Wij selecteren producten direct bij gespecialiseerde fabrikanten,
              testen ze op kwaliteit, en bieden ze aan zonder de tussenhandel.
              Dat betekent: betere prijzen voor jou, en producten waar wij zelf
              achter staan.
            </p>
            <p>
              Naast padel verkopen we ook seizoensproducten — van Koningsdag
              accessoires tot Moederdag cadeaus en zomerartikelen — alles wat
              Nederlanders nodig hebben om het seizoen te vieren.
            </p>
          </div>
        </article>
        <article className="space-y-6">
          <h2 className="font-headline text-3xl font-black tracking-tighter uppercase text-on-surface">
            Onze Beloftes
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">verified</span>
              <div>
                <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight text-sm mb-1">
                  Veilig Betalen
                </h3>
                <p className="text-on-surface-variant text-sm">
                  iDEAL, creditcard, Apple Pay en Google Pay via Stripe.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">undo</span>
              <div>
                <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight text-sm mb-1">
                  14 Dagen Retour
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Niet tevreden? Stuur het terug binnen 14 dagen, conform Nederlandse wet.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">support_agent</span>
              <div>
                <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight text-sm mb-1">
                  Nederlandse Klantenservice
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Vragen? Mail ons op info@paddleforge.nl en we reageren binnen 24 uur.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">local_shipping</span>
              <div>
                <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight text-sm mb-1">
                  Levering in Nederland
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Snelle levering door heel Nederland. Track & trace via e-mail.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </section>

      {/* Company Details */}
      <section className="bg-surface-container-low rounded-2xl p-10 border border-border/30 mb-24">
        <h2 className="font-headline text-2xl font-black tracking-tighter uppercase mb-8 text-on-surface">
          Bedrijfsgegevens
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              Handelsnaam
            </dt>
            <dd className="text-on-surface font-body">PaddleForge</dd>
          </div>
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              Website
            </dt>
            <dd className="text-on-surface font-body">www.paddleforge.nl</dd>
          </div>
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              E-mail
            </dt>
            <dd>
              <a href="mailto:info@paddleforge.nl" className="text-primary hover:underline">
                info@paddleforge.nl
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              Land
            </dt>
            <dd className="text-on-surface font-body">Nederland</dd>
          </div>
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              KvK-nummer
            </dt>
            <dd className="text-on-surface-variant font-body italic">In registratie</dd>
          </div>
          <div>
            <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              BTW-nummer
            </dt>
            <dd className="text-on-surface-variant font-body italic">In aanvraag</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 text-on-surface">
          Klaar om te <span className="text-primary">Beginnen?</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
          Bekijk onze collectie padel uitrusting, seizoensproducten en cadeaus.
        </p>
        <Link
          href="/shop"
          className="bg-primary text-on-primary font-headline font-bold py-5 px-12 rounded-full uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-3"
        >
          Bekijk Shop
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </main>
  );
}
