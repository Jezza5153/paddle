import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProductData } from "@/data/products";

interface ProductTabsProps {
  product: ProductData;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="contents">
        <AccordionTrigger className="text-text-primary font-semibold">
          Wat zit erin
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {product.contents.map((item, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-green mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping">
        <AccordionTrigger className="text-text-primary font-semibold">
          Verzending
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 text-sm text-text-secondary">
            <p>
              Verzending binnen Europa. Levertijd voor dit product:{" "}
              <strong className="text-text-primary">
                {product.shippingEstimateMinDays}-{product.shippingEstimateMaxDays} werkdagen
              </strong>
              .
            </p>
            <p>Levertijd verschilt per product. We tonen altijd een realistische indicatie.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="returns">
        <AccordionTrigger className="text-text-primary font-semibold">
          Retouren
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 text-sm text-text-secondary">
            <p>
              Toch niet wat je zocht? Je hebt{" "}
              <strong className="text-text-primary">{product.returnWindowDays} dagen</strong>{" "}
              om je retour aan te melden.
            </p>
            <p>
              Producten moeten ongebruikt en in originele verpakking teruggestuurd worden.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq">
        <AccordionTrigger className="text-text-primary font-semibold">
          Veelgestelde vragen
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            {product.faq.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-text-primary mb-1">
                  {item.question}
                </p>
                <p className="text-sm text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
