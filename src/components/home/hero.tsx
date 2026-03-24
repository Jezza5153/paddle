import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Truck, RotateCcw } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "KVK-bedrijf" },
  { icon: CreditCard, label: "Veilig betalen" },
  { icon: Truck, label: "Snelle levering" },
  { icon: RotateCcw, label: "14 dagen retour" },
];

export function Hero() {
  return (
    <section className="section-padding bg-white">
      <div className="page-width">
        <div className="content-width text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-text-primary">
            Alles om snel te starten met pickleball.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-8">
            Slimme bundles en accessoires voor beginners. Geen gedoe. Gewoon
            spelen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop">
              <Button size="lg">Bekijk de kits</Button>
            </Link>
            <Link href="#hoe-het-werkt">
              <Button variant="secondary" size="lg">
                Hoe het werkt
              </Button>
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <item.icon className="h-4 w-4 text-brand-green" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
