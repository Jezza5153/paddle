import { Search, ShoppingBag, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Kies je kit",
    description:
      "Bekijk onze sets en kies wat bij jou past. Of je nu een veld wilt markeren of je paddle wilt beschermen.",
  },
  {
    icon: ShoppingBag,
    step: "2",
    title: "Bestel en betaal veilig",
    description:
      "Betaal met iDEAL, kaart of Apple Pay. We regelen de rest.",
  },
  {
    icon: PlayCircle,
    step: "3",
    title: "Spelen maar",
    description:
      "Je bestelling wordt snel geleverd. Uitpakken en direct op het veld.",
  },
];

export function BeginnerGuide() {
  return (
    <section id="hoe-het-werkt" className="section-padding">
      <div className="page-width">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Hoe het werkt
          </h2>
          <p className="mt-3 text-text-secondary">
            In drie stappen klaar om te spelen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white text-xl font-semibold mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
