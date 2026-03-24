import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="section-padding bg-white">
      <div className="page-width">
        <div className="content-width text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Klaar om te starten?
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-7">
            Bekijk onze kits en bestel vandaag nog. Veilig betalen, duidelijke
            levering, en 14 dagen retourrecht.
          </p>
          <div className="mt-8">
            <Link href="/shop">
              <Button size="lg">Bekijk de kits</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
