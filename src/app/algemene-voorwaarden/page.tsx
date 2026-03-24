import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | PaddleForge",
  description: "Algemene voorwaarden van PaddleForge.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-brand-green" />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              Algemene Voorwaarden
            </h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-7">
            <p><em>Laatst bijgewerkt: maart 2026</em></p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 1 — Definities</h2>
            <p>In deze voorwaarden wordt verstaan onder:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>PaddleForge</strong>: de ondernemer, gevestigd in Nederland</li>
              <li><strong>Klant</strong>: de natuurlijke persoon die een overeenkomst aangaat met PaddleForge</li>
              <li><strong>Bestelling</strong>: een door de klant geplaatste order via de webshop</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 2 — Toepasselijkheid</h2>
            <p>Deze voorwaarden zijn van toepassing op alle bestellingen via paddleforge.nl.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 3 — Prijzen</h2>
            <p>Alle prijzen zijn in euro&apos;s en inclusief BTW. Verzendkosten worden apart berekend bij het afrekenen.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 4 — Betaling</h2>
            <p>Betaling vindt plaats via Stripe met iDEAL, Wero, creditcard, Apple Pay of Google Pay. De bestelling wordt pas verwerkt na ontvangst van betaling.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 5 — Levering</h2>
            <p>De levertijd staat vermeld bij elk product. PaddleForge streeft ernaar binnen de aangegeven termijn te leveren, maar kan niet aansprakelijk worden gesteld voor vertragingen door de vervoerder.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 6 — Herroepingsrecht</h2>
            <p>De klant heeft 14 dagen bedenktijd na ontvangst van het product. Producten moeten ongebruikt en in originele verpakking worden geretourneerd. Zie onze <a href="/retouren" className="text-brand-green hover:underline">retourpagina</a> voor de procedure.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 7 — Aansprakelijkheid</h2>
            <p>PaddleForge is niet aansprakelijk voor schade die voortvloeit uit het gebruik van de producten, tenzij er sprake is van opzet of grove nalatigheid.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 8 — Klachten</h2>
            <p>Klachten kunnen worden ingediend via <a href="mailto:info@paddleforge.nl" className="text-brand-green hover:underline">info@paddleforge.nl</a>. We streven ernaar binnen 5 werkdagen te reageren.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Artikel 9 — Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
