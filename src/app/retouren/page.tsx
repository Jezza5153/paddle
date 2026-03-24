import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Retouren | PaddleForge",
  description: "Retourbeleid van PaddleForge. 14 dagen bedenktijd.",
};

export default function RetourenPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <div className="flex items-center gap-3 mb-8">
            <RotateCcw className="h-6 w-6 text-brand-green" />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              Retouren
            </h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-7">
            <p>
              Toch niet wat je zocht? Geen probleem. Je hebt <strong>14 dagen</strong> om je retour aan te melden, gerekend vanaf de dag van ontvangst.
            </p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Voorwaarden</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Het product moet ongebruikt zijn</li>
              <li>Het product moet in de originele verpakking zitten</li>
              <li>Meld je retour binnen 14 dagen na ontvangst aan via e-mail</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Hoe werkt het?</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Stuur een e-mail naar <a href="mailto:info@paddleforge.nl" className="text-brand-green hover:underline">info@paddleforge.nl</a> met je bestelnummer</li>
              <li>We sturen je de retourinstructies</li>
              <li>Stuur het product terug</li>
              <li>Na ontvangst en controle wordt het bedrag teruggestort</li>
            </ol>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Terugbetaling</h2>
            <p>
              Na ontvangst en controle van de retour storten we het aankoopbedrag binnen 5 werkdagen terug via dezelfde betaalmethode.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Vragen? Mail ons op{" "}
              <a href="mailto:info@paddleforge.nl" className="text-brand-green hover:underline">
                info@paddleforge.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
