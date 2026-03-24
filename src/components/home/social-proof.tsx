import { Star } from "lucide-react";

const reviews = [
  {
    name: "Martijn D.",
    location: "Utrecht",
    rating: 5,
    text: "Eindelijk een duidelijke set zonder poespas. In 10 minuten hadden we een veld op de oprit.",
  },
  {
    name: "Sophie v.d. B.",
    location: "Amsterdam",
    rating: 5,
    text: "De overgrips voelen echt goed. En fijn dat je gewoon met iDEAL kunt betalen.",
  },
  {
    name: "Thomas K.",
    location: "Den Haag",
    rating: 4,
    text: "Mijn paddle ziet er na weken spelen nog steeds als nieuw uit dankzij de edge guard. Aanrader.",
  },
];

export function SocialProof() {
  return (
    <section className="section-padding bg-white">
      <div className="page-width">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
            Wat spelers zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl border border-border p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${
                      j < review.rating
                        ? "text-warning fill-warning"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-6 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
