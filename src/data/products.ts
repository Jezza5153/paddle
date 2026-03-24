export interface ProductData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  status: "draft" | "active" | "archived";
  basePriceIncVat: number;
  compareAtPriceIncVat: number | null;
  primaryImage: string;
  galleryImages: string[];
  brand: string;
  category: string;
  badge: string | null;
  shippingEstimateMinDays: number;
  shippingEstimateMaxDays: number;
  returnWindowDays: number;
  contents: string[];
  bulletPoints: string[];
  faq: { question: string; answer: string }[];
  // CJ Dropshipping mapping
  cjProductId?: string;
  cjVariantId?: string;
  cjSku?: string;
  cjCostUsd?: number;
}

export const products: ProductData[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. CARBON FIBER PADDLE SET (2 paddles + 4 balls)
  //    CJ cost: $9.62 → Sell: €39 → ~75% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_paddle_set",
    slug: "carbon-paddle-set",
    name: "Carbon Paddle Set",
    shortDescription:
      "Complete set: 2 carbon fiber paddles en 4 ballen. Direct klaar om te spelen.",
    description:
      "Start direct met pickleball met deze complete set. Twee carbon fiber paddles met honinggraatcore voor kracht en controle, plus vier outdoor ballen. Alles wat je nodig hebt in één pakket — uitpakken en spelen.",
    status: "active",
    basePriceIncVat: 39,
    compareAtPriceIncVat: 59,
    primaryImage: "/images/products/carbon-paddle-set.jpg",
    galleryImages: [
      "/images/products/carbon-paddle-set.jpg",
      "/images/products/carbon-paddle-set-2.jpg",
      "/images/products/carbon-paddle-set-3.jpg",
    ],
    brand: "CourtStart",
    category: "Paddle Sets",
    badge: "Bestseller",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: [
      "2x carbon fiber pickleball paddles",
      "4x outdoor pickleballs",
      "Draagtas",
    ],
    bulletPoints: [
      "Carbon fiber oppervlak voor spin en controle",
      "Honinggraatcore — lichtgewicht maar krachtig",
      "Complete set voor 2 spelers",
      "Geschikt voor beginners en gevorderden",
    ],
    faq: [
      {
        question: "Hoe zwaar zijn de paddles?",
        answer:
          "Elke paddle weegt ongeveer 230-250 gram, een comfortabel middengewicht voor beginners.",
      },
      {
        question: "Zijn de ballen geschikt voor buiten?",
        answer:
          "Ja, de meegeleverde ballen zijn outdoor ballen met 40 gaten, geschikt voor harde ondergronden.",
      },
      {
        question: "Kan ik de grip vervangen?",
        answer:
          "Ja, de paddles hebben een standaard grip die je kunt vervangen met een overgrip of nieuwe basisgrip.",
      },
    ],
    cjProductId: "2603200143061633900",
    cjVariantId: "2603200143061634400",
    cjSku: "CJYD279536701AZ",
    cjCostUsd: 9.62,
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SINGLE PADDLE + 2 BALLS (instapper)
  //    CJ cost: $4.36 → Sell: €19 → ~80% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_starter_paddle",
    slug: "starter-paddle",
    name: "Starter Paddle",
    shortDescription:
      "Eén carbon fiber paddle en 2 ballen. De perfecte instap.",
    description:
      "Wil je pickleball proberen zonder direct een groot bedrag uit te geven? Deze starter paddle met carbon fiber oppervlak en twee ballen is de perfecte instap. Lichtgewicht, comfortabele grip en een eerlijk prijsje.",
    status: "active",
    basePriceIncVat: 19,
    compareAtPriceIncVat: null,
    primaryImage: "/images/products/starter-paddle.jpg",
    galleryImages: [
      "/images/products/starter-paddle.jpg",
      "/images/products/starter-paddle-2.jpg",
    ],
    // starter-paddle.jpg = single paddle technical diagram
    // starter-paddle-2.jpg = carrying bag detail
    brand: "CourtStart",
    category: "Paddles",
    badge: "Instapper",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: [
      "1x carbon fiber pickleball paddle",
      "2x outdoor pickleballs",
    ],
    bulletPoints: [
      "Carbon fiber oppervlak",
      "Lichtgewicht — ideaal voor beginners",
      "Inclusief 2 ballen",
      "Scherpe prijs voor je eerste paddle",
    ],
    faq: [
      {
        question: "Is dit een goede paddle voor beginners?",
        answer:
          "Absoluut. De paddle heeft een groot sweet spot en comfortabele grip, perfect om de techniek te leren.",
      },
      {
        question: "Wat is het verschil met de Carbon Paddle Set?",
        answer:
          "De set bevat 2 paddles en 4 ballen — ideaal als je met z'n tweeën wilt spelen. De Starter Paddle is voor als je al een speelpartner met eigen paddle hebt.",
      },
    ],
    cjProductId: "2603200143061633900",
    cjVariantId: "2603200143061636800",
    cjSku: "CJYD279536708HS",
    cjCostUsd: 4.36,
  },

  // ─────────────────────────────────────────────────────────────
  // 3. PORTABLE PICKLEBALL NET (ships from DE → fast NL delivery)
  //    CJ cost: $34.93 → Sell: €79 → ~55% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_portable_net",
    slug: "draagbaar-net",
    name: "Draagbaar Pickleball Net",
    shortDescription:
      "3 meter breed, opvouwbaar, met draagtas. Overal een veld neerzetten.",
    description:
      "Zet overal je eigen pickleballveld neer met dit draagbare net. 3 meter breed, in hoogte verstelbaar en in een paar minuten opgezet. Het stevige frame maakt het geschikt voor park, oprit of strand. Inclusief draagtas.",
    status: "active",
    basePriceIncVat: 79,
    compareAtPriceIncVat: 99,
    primaryImage: "/images/products/draagbaar-net.jpg",
    galleryImages: [
      "/images/products/draagbaar-net.jpg",
      "/images/products/draagbaar-net-2.jpg",
      "/images/products/draagbaar-net-3.jpg",
    ],
    brand: "CourtStart",
    category: "Nets & Velden",
    badge: "Populair",
    shippingEstimateMinDays: 3,
    shippingEstimateMaxDays: 7,
    returnWindowDays: 14,
    contents: [
      "Opvouwbaar net (3 meter breed)",
      "Verstelbare poten",
      "Stevige draagtas",
    ],
    bulletPoints: [
      "In 5 minuten opgezet",
      "Verstelbaar in hoogte",
      "Verzending vanuit Duitsland — snelle levering",
      "Geschikt voor pickleball, badminton en tennis",
    ],
    faq: [
      {
        question: "Hoe lang duurt het om op te zetten?",
        answer:
          "Gemiddeld 3-5 minuten. Het frame klikt in elkaar zonder gereedschap.",
      },
      {
        question: "Op welke ondergrond werkt het?",
        answer:
          "Op elke vlakke ondergrond: gras, asfalt, beton, zand. Overal speelbaar.",
      },
      {
        question: "Waarom is de levering sneller bij dit product?",
        answer:
          "Dit product wordt verzonden vanuit een Europees magazijn (Duitsland), waardoor de levertijd korter is.",
      },
    ],
    cjProductId: "2003787550997196801",
    cjVariantId: "2003787551102054401",
    cjSku: "CJFU26836110001",
    cjCostUsd: 34.93,
  },

  // ─────────────────────────────────────────────────────────────
  // 4. EDGE GUARD PROTECTORS (3-pack, upsell)
  //    CJ cost: $1.74 → Sell: €9 → ~85% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_edge_guards",
    slug: "edge-guards",
    name: "Edge Guard 3-Pack",
    shortDescription:
      "Bescherm de rand van je paddle. 3 edge guards in één pakket.",
    description:
      "Voorkom schade aan je paddle met deze zelfklevende edge guards. De rand is het kwetsbaarste deel van je paddle — één klap tegen de grond kan al een deuk veroorzaken. Deze set van 3 beschermt je investering.",
    status: "active",
    basePriceIncVat: 9,
    compareAtPriceIncVat: null,
    primaryImage: "/images/products/edge-guards.jpg",
    galleryImages: [
      "/images/products/edge-guards.jpg",
      "/images/products/edge-guards-2.jpg",
    ],
    brand: "CourtStart",
    category: "Paddle Accessoires",
    badge: null,
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: [
      "3x zelfklevende edge guards",
      "Geschikt voor alle standaard paddles",
    ],
    bulletPoints: [
      "Bescherm de rand tegen stoten en krassen",
      "Zelfklevend — binnen 2 minuten aangebracht",
      "Past op alle standaard paddles",
      "Set van 3 voor langdurige bescherming",
    ],
    faq: [
      {
        question: "Past dit op mijn paddle?",
        answer:
          "Ja, de edge guards passen op alle standaard pickleball paddles (tot 43 cm lang).",
      },
      {
        question: "Hoe lang gaat een edge guard mee?",
        answer:
          "Bij regelmatig gebruik 2-3 maanden. Daarna vervang je hem eenvoudig door een nieuwe.",
      },
    ],
    cjProductId: "2601190927111633600",
    cjVariantId: "2601190927111634000",
    cjSku: "CJYD279533501AZ",
    cjCostUsd: 1.74,
  },

  // ─────────────────────────────────────────────────────────────
  // 5. PREMIUM CARBON FIBER PADDLE (higher-end single)
  //    CJ cost: $23.22 → Sell: €59 → ~60% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_pro_paddle",
    slug: "pro-paddle",
    name: "Pro Carbon Paddle",
    shortDescription:
      "Premium T700 carbon fiber paddle. Voor spelers die het serieus nemen.",
    description:
      "Stap over op een serieuze paddle. De Pro Carbon Paddle is gemaakt met T700 carbon fiber en EPP foam core voor maximale controle, spin en comfort. Lichter dan een doorsnee paddle, met een professioneel gevoel dat je meteen merkt. Voor spelers die meer willen dan een instapmodel.",
    status: "active",
    basePriceIncVat: 59,
    compareAtPriceIncVat: 79,
    primaryImage: "/images/products/pro-paddle.jpg",
    galleryImages: [
      "/images/products/pro-paddle.jpg",
      "/images/products/pro-paddle-2.jpg",
    ],
    brand: "CourtStart",
    category: "Premium Paddles",
    badge: "Premium",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: [
      "1x T700 carbon fiber pickleball paddle",
      "Paddle cover",
    ],
    bulletPoints: [
      "T700 carbon fiber — topkwaliteit materiaal",
      "EPP foam core voor comfort en controle",
      "235 gram — ultra lichtgewicht",
      "Inclusief beschermhoes",
    ],
    faq: [
      {
        question: "Wat maakt deze paddle beter dan de Starter?",
        answer:
          "T700 carbon is een hogere kwaliteit dan standaard carbon fiber. Gecombineerd met de EPP foam core geeft dit meer spin, betere demping en een professioneler gevoel.",
      },
      {
        question: "Is dit een goede keuze voor gevorderden?",
        answer:
          "Ja. Deze paddle is ontworpen voor spelers die hun spel willen verbeteren met betere materialen en meer controle.",
      },
      {
        question: "Waarom is deze duurder?",
        answer:
          "Je betaalt voor T700 carbon fiber (topkwaliteit) en EPP foam core — materialen die je bij merken als Selkirk en JOOLA in paddles van €100+ vindt.",
      },
    ],
    cjProductId: "2601220727341610700",
    cjVariantId: "2601220727341611100",
    cjSku: "CJYD273910301AZ",
    cjCostUsd: 23.22,
  },



  // ─────────────────────────────────────────────────────────────
  // 7. PICKLEBALL T-SHIRT
  //    CJ cost: $2.46 → Sell: €19 → ~87% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_tshirt",
    slug: "pickleball-tshirt",
    name: "Pickleball T-Shirt",
    shortDescription:
      "Comfortabel sport-T-shirt met pickleball design. Luchtig materiaal.",
    description:
      "Laat zien dat je een pickleballer bent met dit comfortabele T-shirt. Luchtig materiaal dat goed ademt tijdens het spelen. Moderne print die ook buiten het veld goed staat.",
    status: "active",
    basePriceIncVat: 19,
    compareAtPriceIncVat: null,
    primaryImage: "/images/products/pickleball-tshirt.jpg",
    galleryImages: [
      "/images/products/pickleball-tshirt.jpg",
      "/images/products/pickleball-tshirt-2.jpg",
    ],
    brand: "CourtStart",
    category: "Kleding",
    badge: "Nieuw",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x pickleball T-shirt"],
    bulletPoints: [
      "Ademend materiaal — perfect voor sport",
      "Stijlvol pickleball design",
      "Verkrijgbaar in meerdere maten",
      "Machine wasbaar",
    ],
    faq: [
      {
        question: "Welke maten zijn beschikbaar?",
        answer:
          "Het shirt is beschikbaar in S t/m XXL. Check de maattabel op de productpagina.",
      },
      {
        question: "Is het materiaal geschikt voor sporten?",
        answer:
          "Ja, het shirt is gemaakt van licht, ademend materiaal dat vocht snel afvoert.",
      },
    ],
    cjProductId: "2601190932291637900",
    cjVariantId: "2601190932291638300",
    cjSku: "CJYH273507801AZ",
    cjCostUsd: 2.46,
  },

  // ─────────────────────────────────────────────────────────────
  // 8. PICKLEBALL CAP
  //    CJ cost: $14.00 → Sell: €29 → ~50% margin
  // ─────────────────────────────────────────────────────────────
  {
    id: "prod_cap",
    slug: "pickleball-cap",
    name: "Pickleball Cap",
    shortDescription:
      "Geborduurde pickleball pet. Verstelbaar, gewassen katoen.",
    description:
      "Bescherm je tegen de zon met deze stijlvolle pickleball cap. Gemaakt van gewassen katoen voor een relaxte look, met een geborduurde pickleball afwerking. Verstelbaar voor elke hoofdmaat.",
    status: "active",
    basePriceIncVat: 29,
    compareAtPriceIncVat: null,
    primaryImage: "/images/products/pickleball-cap.jpg",
    galleryImages: [
      "/images/products/pickleball-cap.jpg",
      "/images/products/pickleball-cap-2.jpg",
    ],
    brand: "CourtStart",
    category: "Kleding",
    badge: null,
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x geborduurde pickleball cap"],
    bulletPoints: [
      "Gewassen katoen — comfortabel en stijlvol",
      "Geborduurde pickleball afwerking",
      "Verstelbare sluiting",
      "Zonbescherming tijdens het spelen",
    ],
    faq: [
      {
        question: "Past de pet op elk hoofd?",
        answer:
          "Ja, de pet heeft een verstelbare sluiting aan de achterkant en past op de meeste hoofdmaten.",
      },
    ],
    cjProductId: "2003770664737681410",
    cjVariantId: "2003770664905453570",
    cjSku: "",
    cjCostUsd: 14.0,
  },


];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): ProductData[] {
  return products.filter((p) => p.status === "active");
}
