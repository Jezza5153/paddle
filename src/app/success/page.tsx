import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bestelling bevestigd | CourtStart NL",
  robots: "noindex",
};

export default function SuccessPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width text-center">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Bedankt voor je bestelling!
          </h1>

          <p className="mt-4 text-text-secondary text-lg">
            Je betaling is ontvangen. We gaan direct voor je aan de slag.
          </p>

          {/* What happens next */}
          <div className="mt-12 bg-surface rounded-2xl border border-border p-8 text-left">
            <h2 className="text-lg font-semibold text-text-primary mb-6">
              Wat gebeurt er hierna?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Bevestigingsmail
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Je ontvangt een e-mail met je bestelgegevens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Package className="h-4 w-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Verwerking en verzending
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Je bestelling wordt verwerkt en zo snel mogelijk verzonden. Je ontvangt een track & trace code zodra het pakket onderweg is.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-4 w-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Spelen maar!
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Uitpakken en direct het veld op.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <p className="mt-8 text-sm text-text-secondary">
            Vragen over je bestelling? Mail ons op{" "}
            <a
              href="mailto:info@courtstart.nl"
              className="text-brand-green hover:underline"
            >
              info@courtstart.nl
            </a>
          </p>

          <div className="mt-8">
            <Link href="/shop">
              <Button variant="secondary">Verder winkelen</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
