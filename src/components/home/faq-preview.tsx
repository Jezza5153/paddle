import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat is padel?",
    answer:
      "Padel is een populaire sport die elementen van tennis en squash combineert. Het wordt gespeeld op een kleiner veld met een racket zonder snaren (paddle) en een bal die lijkt op een tennisbal. Het is makkelijk te leren en geschikt voor alle leeftijden.",
  },
  {
    question: "Hoe snel wordt mijn bestelling geleverd?",
    answer:
      "Bij elk product tonen we een realistische levertijd. De meeste producten worden binnen 5-10 werkdagen geleverd binnen Nederland.",
  },
  {
    question: "Kan ik retourneren?",
    answer:
      "Ja, je hebt 14 dagen om je retour aan te melden. Producten moeten ongebruikt en in originele verpakking teruggestuurd worden.",
  },
  {
    question: "Welke betaalmethoden accepteren jullie?",
    answer:
      "We accepteren iDEAL, Wero, creditcard (Visa/Mastercard), Apple Pay en Google Pay. Alle betalingen worden veilig verwerkt via Stripe.",
  },
  {
    question: "Zijn jullie een Nederlands bedrijf?",
    answer:
      "Ja, PaddleForge is een KVK-geregistreerd bedrijf in Nederland. We focussen specifiek op de Nederlandse markt.",
  },
];

export function FaqPreview() {
  return (
    <section id="faq" className="section-padding">
      <div className="page-width">
        <div className="content-width">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              Veelgestelde vragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
