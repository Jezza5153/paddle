import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | CourtStart NL",
  description: "Neem contact op met CourtStart NL.",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-6">
            Contact
          </h1>

          <p className="text-text-secondary leading-7 mb-10">
            Heb je een vraag over je bestelling, onze producten of iets anders? We helpen je graag.
          </p>

          <div className="space-y-6">
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-text-primary">E-mail</h2>
                <p className="text-sm text-text-secondary mt-1">
                  Stuur ons een e-mail en we reageren binnen 1-2 werkdagen.
                </p>
                <a
                  href="mailto:info@courtstart.nl"
                  className="inline-block mt-3"
                >
                  <Button variant="secondary" size="sm">
                    info@courtstart.nl
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-text-primary">Bedrijfsgegevens</h2>
                <div className="text-sm text-text-secondary mt-1 space-y-1">
                  <p>CourtStart NL</p>
                  <p>KVK-geregistreerd in Nederland</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Wij streven ernaar binnen 1-2 werkdagen te reageren op alle berichten.
          </p>
        </div>
      </div>
    </div>
  );
}
