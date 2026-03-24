import type { Metadata } from "next";
import { Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Verzending | PaddleForge",
  description: "Informatie over verzending en levertijden bij PaddleForge.",
};

export default function VerzendingPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <div className="flex items-center gap-3 mb-8">
            <Truck className="h-6 w-6 text-brand-green" />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              Verzending
            </h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-7">
            <p>
              Bij PaddleForge vinden we het belangrijk dat je precies weet waar je aan toe bent. Daarom tonen we bij elk product een realistische levertijd.
            </p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Levertijd</h2>
            <p>
              De levertijd verschilt per product en staat duidelijk vermeld op elke productpagina. De meeste producten worden binnen <strong>5 tot 10 werkdagen</strong> geleverd.
            </p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Verzendkosten</h2>
            <p>
              Verzendkosten worden berekend bij het afrekenen op basis van je adres en de inhoud van je bestelling.
            </p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Track & trace</h2>
            <p>
              Zodra je bestelling is verzonden, ontvang je een e-mail met een track & trace code waarmee je je pakket kunt volgen.
            </p>

            <h2 className="text-lg font-semibold text-text-primary mt-8">Bezorggebied</h2>
            <p>
              We verzenden momenteel binnen Europa, met focus op Nederland.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Vragen over verzending? Mail ons op{" "}
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
