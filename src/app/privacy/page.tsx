import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacybeleid | CourtStart NL",
  description: "Privacybeleid van CourtStart NL.",
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-6 w-6 text-brand-green" />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              Privacybeleid
            </h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-7">
            <p><em>Laatst bijgewerkt: maart 2026</em></p>

            <p>CourtStart NL respecteert de privacy van alle gebruikers van de website en zorgt ervoor dat persoonlijke informatie vertrouwelijk wordt behandeld.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Welke gegevens verzamelen we?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Naam en e-mailadres bij bestellingen</li>
              <li>Verzendadres voor levering</li>
              <li>Betalingsgegevens (verwerkt via Stripe, wij slaan geen kaartgegevens op)</li>
              <li>Bestelgeschiedenis</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Waarvoor gebruiken we je gegevens?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Het verwerken en verzenden van je bestelling</li>
              <li>Communicatie over je bestelling (bevestiging, tracking)</li>
              <li>Verbetering van onze dienstverlening</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Delen met derden</h2>
            <p>We delen je gegevens alleen met partijen die nodig zijn voor de verwerking van je bestelling:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stripe (betalingsverwerking)</li>
              <li>Verzenddienst (levering)</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Beveiliging</h2>
            <p>We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen ongeoorloofde toegang of verlies.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Je rechten</h2>
            <p>Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via <a href="mailto:info@courtstart.nl" className="text-brand-green hover:underline">info@courtstart.nl</a>.</p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Cookies</h2>
            <p>We gebruiken alleen functionele cookies die nodig zijn voor het functioneren van de webshop (zoals je winkelmand). We gebruiken geen tracking cookies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
