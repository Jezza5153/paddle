import { PackageCheck, Truck, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: PackageCheck,
    title: "Geen rommel",
    description:
      "Geen pakketjes met 50 losse items die je niet nodig hebt. Wij stellen slimme sets samen met precies de juiste spullen.",
  },
  {
    icon: Truck,
    title: "Duidelijke levering",
    description:
      "Bij elk product zie je een realistische levertijd. Geen vage beloftes of verborgen vertragingen.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig afrekenen in Nederland",
    description:
      "Betaal met iDEAL, Wero, creditcard, Apple Pay of Google Pay. KVK-geregistreerd en 14 dagen retourrecht.",
  },
];

export function WhyBuyHere() {
  return (
    <section className="section-padding bg-white">
      <div className="page-width">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Waarom bij CourtStart kopen?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/10 mb-4">
                <reason.icon className="h-6 w-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-text-secondary leading-6">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
