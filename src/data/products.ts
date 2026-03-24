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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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
    brand: "PaddleForge",
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

  // ─────────────────────────────────────────────────────────────
  // CJ DROPSHIPPING — AUTO-IMPORTED PRODUCTS (25% margin)
  // ─────────────────────────────────────────────────────────────
  {
    id: "cj_padel_ball_01",
    slug: "professional-padel-training-ball",
    name: "Professionele Padel Trainingsbal (3-pack)",
    shortDescription: "Duurzame padel ballen met hoge stuit. Ideaal voor training en wedstrijd.",
    description: "Professionele padel ballen met hoge stuit en duurzame constructie. Perfect voor zowel training als wedstrijd. Geleverd in een handige koker van 3 stuks.",
    status: "active",
    basePriceIncVat: 9.95,
    compareAtPriceIncVat: 14.95,
    primaryImage: "/images/products/professional-padel-high-bounce-durable-training-ball-match-ball-green-can-2511.jpg",
    galleryImages: ["/images/products/professional-padel-high-bounce-durable-training-ball-match-ball-green-can-2511.jpg"],
    brand: "PaddleForge",
    category: "Ballen",
    badge: "Nieuw",
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["3x professionele padel ballen", "Bewaarkoker"],
    bulletPoints: ["Hoge stuit voor consistente rally's", "Duurzaam materiaal", "Geschikt voor alle ondergronden"],
    faq: [{ question: "Zijn deze ballen geschikt voor buiten?", answer: "Ja, deze ballen zijn ontworpen voor zowel binnen- als buitengebruik." }],
    cjProductId: "2511210812301612000",
    cjVariantId: "CJYD2612585",
    cjSku: "CJYD2612585",
    cjCostUsd: 2.99,
  },
  {
    id: "cj_carbon_racket_01",
    slug: "amasport-carbon-padel-racket",
    name: "AMASPORT Carbon Padel Racket",
    shortDescription: "Carbon fiber padel racket met clapper-technologie voor maximale kracht.",
    description: "Het AMASPORT Carbon Padel Racket combineert een carbon fiber frame met innovatieve clapper-technologie. Biedt uitstekende controle en kracht voor gevorderde spelers.",
    status: "active",
    basePriceIncVat: 149.95,
    compareAtPriceIncVat: 199.95,
    primaryImage: "/images/products/amasport-new-padel-clapper-carbon-fiber-tennis-racket-2508.jpg",
    galleryImages: ["/images/products/amasport-new-padel-clapper-carbon-fiber-tennis-racket-2508.jpg"],
    brand: "AMASPORT",
    category: "Premium Paddles",
    badge: "Premium",
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x AMASPORT carbon fiber padel racket", "Beschermhoes"],
    bulletPoints: ["Carbon fiber frame", "Clapper-technologie voor extra kracht", "Professioneel niveau racket"],
    faq: [{ question: "Voor welk niveau is dit racket?", answer: "Dit racket is ideaal voor gevorderde en competitieve spelers." }],
    cjProductId: "2508040843491609100",
    cjVariantId: "CJYD2447199",
    cjSku: "CJYD2447199",
    cjCostUsd: 118.09,
  },
  // [REMOVED] 4 table tennis products (padel-racket-tas-eva, pro-padel-racket-case, pro-racket-set-carbon, draagbaar-net-standaard)
  {
    id: "cj_cage_racket_01",
    slug: "cage-style-padel-racket",
    name: "Cage-Style Padel Racket",
    shortDescription: "Cage-stijl padel racket voor kinderen en volwassenen.",
    description: "Cage-stijl padel racket geschikt voor zowel kinderen als volwassenen. Lichtgewicht ontwerp met goede controle, perfect voor recreatief spel en beginners.",
    status: "active",
    basePriceIncVat: 24.95,
    compareAtPriceIncVat: 34.95,
    primaryImage: "/images/products/cage-style-tennis-racket-for-children-and-adults-paddle-type-2603.jpg",
    galleryImages: ["/images/products/cage-style-tennis-racket-for-children-and-adults-paddle-type-2603.jpg"],
    brand: "PaddleForge",
    category: "Paddles",
    badge: "Familie",
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x cage-style padel racket"],
    bulletPoints: ["Geschikt voor kinderen en volwassenen", "Lichtgewicht", "Goede controle voor beginners"],
    faq: [{ question: "Vanaf welke leeftijd?", answer: "Dit racket is geschikt vanaf circa 8 jaar." }],
    cjProductId: "2603030257411620800",
    cjVariantId: "CJYD2772655",
    cjSku: "CJYD2772655",
    cjCostUsd: 7.96,
  },
  {
    id: "cj_sport_skort_01",
    slug: "padel-sport-skort",
    name: "Padel Sport Skort",
    shortDescription: "Sportief padel rokje met ingebouwde shorts. Anti-exposure ontwerp.",
    description: "Comfortabel padel sport skort met ingebouwde shorts voor maximale bewegingsvrijheid. Lichtgewicht en ademend materiaal, perfect voor op de baan.",
    status: "active",
    basePriceIncVat: 19.95,
    compareAtPriceIncVat: 29.95,
    primaryImage: "/images/products/yoga-set-tennis-skirt-anti-exposure-fake-two-piece-running-skort-2603.jpg",
    galleryImages: ["/images/products/yoga-set-tennis-skirt-anti-exposure-fake-two-piece-running-skort-2603.jpg"],
    brand: "PaddleForge",
    category: "Kleding",
    badge: "Nieuw",
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x padel sport skort"],
    bulletPoints: ["Ingebouwde shorts", "Ademend materiaal", "Maximale bewegingsvrijheid"],
    faq: [{ question: "Welke maten zijn beschikbaar?", answer: "Beschikbaar in S t/m XL." }],
    cjProductId: "2603020606191608200",
    cjVariantId: "CJYD2771867",
    cjSku: "CJYD2771867",
    cjCostUsd: 7.46,
  },
  {
    id: "cj_elbow_brace_01",
    slug: "padel-elleboog-brace",
    name: "Padel Elleboog Brace",
    shortDescription: "Compressie brace speciaal voor padel- en tenniselleboog.",
    description: "Professionele compressie brace ontworpen om de pijn van padel- en tenniselleboog te verlichten. Geeft ondersteuning tijdens het spelen en bevordert herstel.",
    status: "active",
    basePriceIncVat: 9.95,
    compareAtPriceIncVat: 14.95,
    primaryImage: "/images/products/badminton-compression-brace-specifically-for-tennis-elbow-2602.jpg",
    galleryImages: ["/images/products/badminton-compression-brace-specifically-for-tennis-elbow-2602.jpg"],
    brand: "PaddleForge",
    category: "Paddle Accessoires",
    badge: null,
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x compressie elleboog brace"],
    bulletPoints: ["Speciaal voor tenniselleboog", "Compressie-ondersteuning", "Draagbaar onder en over kleding"],
    faq: [{ question: "Kan ik hiermee spelen?", answer: "Ja, de brace is ontworpen om tijdens het padellen te dragen." }],
    cjProductId: "2602270632301633500",
    cjVariantId: "CJYD2769222",
    cjSku: "CJYD2769222",
    cjCostUsd: 2.10,
  },
  {
    id: "cj_sport_dress_01",
    slug: "padel-sport-jurk",
    name: "Padel Sport Jurk",
    shortDescription: "Stijlvolle padel jurk met rits en geplooide rok. Campus-stijl.",
    description: "Sportieve padel jurk met kleurblok-design, ritssluiting en geplooide rok. Comfortabel en stijlvol voor op en naast de baan.",
    status: "active",
    basePriceIncVat: 24.95,
    compareAtPriceIncVat: 39.95,
    primaryImage: "/images/products/american-style-campus-inspired-color-blocked-zippered-pleated-tennis-dress-for-women-2036.jpg",
    galleryImages: ["/images/products/american-style-campus-inspired-color-blocked-zippered-pleated-tennis-dress-for-women-2036.jpg"],
    brand: "PaddleForge",
    category: "Kleding",
    badge: "Nieuw",
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x padel sport jurk"],
    bulletPoints: ["Ritssluiting", "Geplooide rok", "Ademend materiaal", "Stijlvol kleurblok-design"],
    faq: [{ question: "Is dit ook geschikt als casual kleding?", answer: "Absoluut, het design is stijlvol genoeg voor dagelijks gebruik." }],
    cjProductId: "2036327916758671362",
    cjVariantId: "CJLY2801783",
    cjSku: "CJLY2801783",
    cjCostUsd: 4.07,
  },
  {
    id: "cj_checkered_skirt_01",
    slug: "padel-sport-rok-geruit",
    name: "Padel Sport Rok (Geruit)",
    shortDescription: "Sportieve korte rok met geruit patroon en contrastkleur.",
    description: "Trendy korte sportrok met geruit patroon aan de achterkant en contrastkleuren. Lichtgewicht en comfortabel voor padel en andere racketsporten.",
    status: "active",
    basePriceIncVat: 14.95,
    compareAtPriceIncVat: 19.95,
    primaryImage: "/images/products/tennis-girl-style-checkered-back-contrast-color-sports-short-skirt-2034.jpg",
    galleryImages: ["/images/products/tennis-girl-style-checkered-back-contrast-color-sports-short-skirt-2034.jpg"],
    brand: "PaddleForge",
    category: "Kleding",
    badge: null,
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x sport rok"],
    bulletPoints: ["Geruit design", "Contrastkleuren", "Lichtgewicht materiaal"],
    faq: [{ question: "Heeft deze rok ingebouwde shorts?", answer: "Ja, er zit een ingebouwde korte broek in voor comfort en bescherming." }],
    cjProductId: "2034114064978210817",
    cjVariantId: "CJLY2791641",
    cjSku: "CJLY2791641",
    cjCostUsd: 3.00,
  },
  {
    id: "cj_yoga_skirt_01",
    slug: "padel-yoga-skort-pocket",
    name: "Padel Yoga Skort met Zakken",
    shortDescription: "Veelzijdig sport skort met zakken. Anti-exposure, fake two-piece.",
    description: "Veelzijdig padel en yoga skort met handige zakken. Anti-exposure ontwerp met ingebouwde shorts. Perfect voor padel, yoga en andere sporten.",
    status: "active",
    basePriceIncVat: 19.95,
    compareAtPriceIncVat: 27.95,
    primaryImage: "/images/products/pocket-tennis-women-s-fake-two-piece-anti-exposure-yoga-skirt-2602.jpg",
    galleryImages: ["/images/products/pocket-tennis-women-s-fake-two-piece-anti-exposure-yoga-skirt-2602.jpg"],
    brand: "PaddleForge",
    category: "Kleding",
    badge: null,
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    contents: ["1x sport skort met zakken"],
    bulletPoints: ["Handige opbergzakken", "Anti-exposure ontwerp", "Geschikt voor meerdere sporten"],
    faq: [{ question: "Passen hier telefoon en sleutels in?", answer: "Ja, de zakken zijn groot genoeg voor een telefoon en sleutels." }],
    cjProductId: "2602260135131634300",
    cjVariantId: "CJDK2767615",
    cjSku: "CJDK2767615",
    cjCostUsd: 6.97,
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): ProductData[] {
  return products.filter((p) => p.status === "active");
}
