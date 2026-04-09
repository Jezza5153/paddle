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

  // ═════════════════════════════════════════════════════════════
  // KONINGSDAG / WK 2026 — Orange themed products
  // ═════════════════════════════════════════════════════════════
  {
    id: "seasonal_oranje_zonnebril",
    slug: "oranje-feestbril-koningsdag",
    name: "Oranje Feestbril Koningsdag",
    shortDescription:
      "Oranje partybril voor Koningsdag en WK 2026. Laat zien dat je oranje bent!",
    description:
      "De ultieme Koningsdag accessoire. Deze oranje feestbril maakt je outfit compleet op King's Day, bij het WK voetbal of elk ander oranjefeest. Lichtgewicht, comfortabel en een absolute eyecatcher op de vrijmarkt.",
    status: "active",
    basePriceIncVat: 9.95,
    compareAtPriceIncVat: 14.95,
    primaryImage: "/images/products/oranje-feestbril.jpg",
    galleryImages: ["/images/products/oranje-feestbril.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x oranje feestbril"],
    bulletPoints: [
      "Felle oranje kleur — valt op in elke menigte",
      "Lichtgewicht en comfortabel",
      "Perfect voor Koningsdag, WK 2026 en festivals",
      "UV-bescherming",
    ],
    faq: [
      { question: "Past deze bril op elk gezicht?", answer: "Ja, de bril heeft een universele pasvorm die op de meeste gezichten past." },
      { question: "Kan ik deze ook bij het WK gebruiken?", answer: "Absoluut! Oranje is oranje — perfect voor Koningsdag én het WK voetbal 2026." },
    ],
  },
  {
    id: "seasonal_oranje_bucket_hat",
    slug: "oranje-bucket-hat",
    name: "Oranje Bucket Hat",
    shortDescription:
      "Trendy oranje bucket hat voor Koningsdag en zomerfestivals.",
    description:
      "Ga stijlvol in het oranje met deze trendy bucket hat. Perfect voor Koningsdag, het WK voetbal en zomerfestivals. Gemaakt van licht katoen, comfortabel de hele dag.",
    status: "active",
    basePriceIncVat: 14.95,
    compareAtPriceIncVat: 19.95,
    primaryImage: "/images/products/oranje-bucket-hat.jpg",
    galleryImages: ["/images/products/oranje-bucket-hat.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x oranje bucket hat"],
    bulletPoints: [
      "100% katoen — ademend en comfortabel",
      "Trendy bucket hat model",
      "Zonbescherming voor buiten",
      "Oranje — klaar voor Koningsdag en WK",
    ],
    faq: [
      { question: "Welke maat is het?", answer: "One size fits most. De hat past comfortabel op de meeste hoofdmaten (56-60cm)." },
    ],
  },
  {
    id: "seasonal_oranje_schmink",
    slug: "oranje-schmink-set",
    name: "Oranje Schmink Set",
    shortDescription:
      "Schmink sticks in oranje, rood, wit en blauw. Veilig voor de huid.",
    description:
      "Schmink je gezicht in de kleuren van Nederland! Deze set bevat schminksticks in oranje plus rood-wit-blauw voor de Nederlandse vlag. Veilig op de huid, makkelijk af te wassen. Ideaal voor kinderen en volwassenen op Koningsdag of bij WK wedstrijden.",
    status: "active",
    basePriceIncVat: 9.95,
    compareAtPriceIncVat: null,
    primaryImage: "/images/products/oranje-schmink-set.jpg",
    galleryImages: ["/images/products/oranje-schmink-set.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["4x schmink sticks (oranje, rood, wit, blauw)"],
    bulletPoints: [
      "Veilig voor de huid — niet-toxisch",
      "Makkelijk af te wassen met water",
      "4 kleuren: oranje + rood, wit, blauw",
      "Geschikt voor kinderen en volwassenen",
    ],
    faq: [
      { question: "Is het veilig voor kinderen?", answer: "Ja, de schmink is dermatologisch getest en veilig voor kinderen vanaf 3 jaar." },
    ],
  },
  {
    id: "seasonal_oranje_led_ketting",
    slug: "oranje-led-ketting",
    name: "Oranje LED Ketting",
    shortDescription:
      "Lichtgevende oranje ketting voor feesten. Batterij inbegrepen.",
    description:
      "Val op bij elk oranjefeest met deze lichtgevende LED ketting. De heldere oranje LED's zorgen voor een feestelijke look, vooral 's avonds op de vrijmarkt of bij een WK viewing party. Batterij inbegrepen, direct klaar voor gebruik.",
    status: "active",
    basePriceIncVat: 12.95,
    compareAtPriceIncVat: 17.95,
    primaryImage: "/images/products/oranje-led-ketting.jpg",
    galleryImages: ["/images/products/oranje-led-ketting.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x oranje LED ketting", "Batterij inbegrepen"],
    bulletPoints: [
      "Heldere oranje LED verlichting",
      "Batterij inbegrepen — direct klaar",
      "Lichtgewicht en comfortabel",
      "Perfect voor avondfeesten en viewing parties",
    ],
    faq: [
      { question: "Hoe lang gaat de batterij mee?", answer: "De batterij gaat circa 8-10 uur mee bij continu gebruik." },
    ],
  },
  {
    id: "seasonal_oranje_vlag",
    slug: "nederland-vlag-groot",
    name: "Nederlandse Vlag (150x90cm)",
    shortDescription:
      "Grote Nederlandse vlag voor Koningsdag, WK en nationale feestdagen.",
    description:
      "Hang de Nederlandse driekleur uit! Deze grote vlag (150x90cm) is perfect voor Koningsdag, het WK voetbal, Bevrijdingsdag en elke andere gelegenheid om je Nederlandse trots te tonen. Stevige kwaliteit met ophangringen.",
    status: "active",
    basePriceIncVat: 14.95,
    compareAtPriceIncVat: 19.95,
    primaryImage: "/images/products/nederland-vlag.jpg",
    galleryImages: ["/images/products/nederland-vlag.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x Nederlandse vlag 150x90cm", "2x ophangringen"],
    bulletPoints: [
      "150 x 90 cm — goed zichtbaar",
      "Stevige polyester kwaliteit",
      "Ophangringen inbegrepen",
      "Geschikt voor binnen en buiten",
    ],
    faq: [
      { question: "Kan deze vlag buiten hangen?", answer: "Ja, de vlag is gemaakt van weerbestendig polyester en geschikt voor buitengebruik." },
    ],
  },
  {
    id: "seasonal_oranje_tshirt",
    slug: "oranje-t-shirt-koningsdag",
    name: "Oranje T-Shirt",
    shortDescription:
      "Basis oranje T-shirt voor Koningsdag en het WK. Unisex, comfortabel.",
    description:
      "Het oranje shirt dat iedereen nodig heeft. Of het nu Koningsdag is, het WK voetbal of gewoon een zonnige dag in het park — dit comfortabele oranje T-shirt is de basis van elke oranje outfit. Unisex model, verkrijgbaar in S t/m XXL.",
    status: "active",
    basePriceIncVat: 14.95,
    compareAtPriceIncVat: 19.95,
    primaryImage: "/images/products/oranje-tshirt.jpg",
    galleryImages: ["/images/products/oranje-tshirt.jpg"],
    brand: "PaddleForge",
    category: "Koningsdag",
    badge: "Koningsdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x oranje T-shirt"],
    bulletPoints: [
      "100% katoen — comfortabel de hele dag",
      "Unisex model S t/m XXL",
      "Felle oranje kleur",
      "Perfect als basis voor Koningsdag outfit",
    ],
    faq: [
      { question: "Welke maten zijn beschikbaar?", answer: "S, M, L, XL en XXL. Unisex pasvorm." },
      { question: "Valt het groot of klein?", answer: "Het shirt valt normaal. Bij twijfel een maat groter bestellen." },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // MOEDERDAG — Cadeaus voor mama
  // ═════════════════════════════════════════════════════════════
  {
    id: "seasonal_projectie_ketting",
    slug: "projectie-ketting-ik-hou-van-je",
    name: "Projectie Ketting \"Ik Hou Van Je\"",
    shortDescription:
      "Ketting die \"I love you\" in 100 talen projecteert. Perfect moederdag cadeau.",
    description:
      "Verras mama met deze unieke ketting die \"I love you\" in 100 verschillende talen projecteert wanneer je de hanger tegen het licht houdt. Een persoonlijk en emotioneel cadeau dat ze elke dag kan dragen. Geleverd in een mooie geschenkdoos.",
    status: "active",
    basePriceIncVat: 24.95,
    compareAtPriceIncVat: 34.95,
    primaryImage: "/images/products/projectie-ketting.jpg",
    galleryImages: ["/images/products/projectie-ketting.jpg"],
    brand: "PaddleForge",
    category: "Moederdag",
    badge: "Moederdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x projectie ketting", "Geschenkdoos"],
    bulletPoints: [
      "Projecteert \"I love you\" in 100 talen",
      "Inclusief elegante geschenkdoos",
      "Verstelbare ketting lengte",
      "Hypoallergeen materiaal",
    ],
    faq: [
      { question: "Hoe werkt de projectie?", answer: "Houd de hanger dicht bij een lichtbron of zaklamp. De boodschap wordt op een oppervlak geprojecteerd." },
      { question: "Is het echt goud?", answer: "De ketting is verguld (gold plated) en hypoallergeen. Geschikt voor dagelijks gebruik." },
    ],
  },
  {
    id: "seasonal_jade_roller",
    slug: "jade-roller-gua-sha-set",
    name: "Jade Roller & Gua Sha Set",
    shortDescription:
      "Gezichtsmassage set van echte jade. Luxe cadeau voor haar.",
    description:
      "Geef mama de gift van ontspanning met deze jade roller en gua sha set. Echte jade steen die de bloedsomloop stimuleert, zwelling vermindert en de huid een gezonde glow geeft. Een luxe self-care ritueel dat elke dag een beetje spa-gevoel brengt.",
    status: "active",
    basePriceIncVat: 19.95,
    compareAtPriceIncVat: 29.95,
    primaryImage: "/images/products/jade-roller-set.jpg",
    galleryImages: ["/images/products/jade-roller-set.jpg"],
    brand: "PaddleForge",
    category: "Moederdag",
    badge: "Moederdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x jade roller", "1x gua sha steen", "Opbergzakje"],
    bulletPoints: [
      "Echte jade steen — koelend en kalmerend",
      "Vermindert zwelling en wallen",
      "Stimuleert bloedsomloop",
      "Luxe geschenk met opbergzakje",
    ],
    faq: [
      { question: "Is het echte jade?", answer: "Ja, beide stukken zijn gemaakt van echte jade steen." },
      { question: "Hoe gebruik je een gua sha?", answer: "Breng serum of olie aan op het gezicht en schuif de gua sha met zachte druk langs de kaaklijnen en jukbeenderen." },
    ],
  },
  {
    id: "seasonal_eeuwige_roos",
    slug: "eeuwige-roos-glazen-stolp",
    name: "Eeuwige Roos in Glazen Stolp",
    shortDescription:
      "Geconserveerde roos in glazen stolp met LED verlichting. Gaat jaren mee.",
    description:
      "Mooier dan verse bloemen en gaat jaren mee. Deze geconserveerde roos in een elegante glazen stolp met LED verlichting is het perfecte romantische cadeau. Geen water nodig, geen verwelkte blaadjes — alleen een prachtige roos die je kamer siert.",
    status: "active",
    basePriceIncVat: 29.95,
    compareAtPriceIncVat: 44.95,
    primaryImage: "/images/products/eeuwige-roos.jpg",
    galleryImages: ["/images/products/eeuwige-roos.jpg"],
    brand: "PaddleForge",
    category: "Moederdag",
    badge: "Moederdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x geconserveerde roos", "Glazen stolp", "LED verlichting (batterij inbegrepen)"],
    bulletPoints: [
      "Echte roos — geconserveerd om jaren mee te gaan",
      "Elegante glazen stolp",
      "Sfeervolle LED verlichting",
      "Geen onderhoud nodig",
    ],
    faq: [
      { question: "Hoe lang gaat de roos mee?", answer: "Bij normaal gebruik 2-3 jaar. Houd de roos uit direct zonlicht voor de langste levensduur." },
      { question: "Welke kleur is de roos?", answer: "De roos is rood — de klassieke kleur voor liefde en waardering." },
    ],
  },
  {
    id: "seasonal_nekmassage",
    slug: "draagbaar-nekmassage-apparaat",
    name: "Draagbaar Nekmassage Apparaat",
    shortDescription:
      "Elektrisch nekmassage apparaat met warmtefunctie. Ontspanning cadeau.",
    description:
      "Geef mama de ontspanning die ze verdient met dit draagbare nekmassage apparaat. Met shiatsu-achtige kneedmassage en warmtefunctie voor diepe spierontspanning. Oplaadbaar via USB, te gebruiken thuis, op kantoor of onderweg.",
    status: "active",
    basePriceIncVat: 39.95,
    compareAtPriceIncVat: 59.95,
    primaryImage: "/images/products/nekmassage-apparaat.jpg",
    galleryImages: ["/images/products/nekmassage-apparaat.jpg"],
    brand: "PaddleForge",
    category: "Moederdag",
    badge: "Moederdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x nekmassage apparaat", "USB oplaadkabel"],
    bulletPoints: [
      "Shiatsu kneedmassage — diepe ontspanning",
      "Warmtefunctie voor extra comfort",
      "Oplaadbaar via USB — draagbaar",
      "3 intensiteitsniveaus",
    ],
    faq: [
      { question: "Hoe lang gaat de batterij mee?", answer: "Eén volle lading biedt circa 60-90 minuten massage." },
      { question: "Is het ook geschikt voor de schouders?", answer: "Ja, het apparaat kan gebruikt worden voor nek, schouders en de onderrug." },
    ],
  },
  {
    id: "seasonal_makeup_spiegel",
    slug: "led-makeup-spiegel",
    name: "LED Make-up Spiegel",
    shortDescription:
      "Make-up spiegel met verstelbare LED verlichting. Draaibaar, oplaadbaar.",
    description:
      "Een must-have voor elke make-up routine. Deze LED spiegel met verstelbare helderheid en 3 kleurtemperaturen zorgt altijd voor perfecte verlichting. 360 graden draaibaar, oplaadbaar via USB en compact genoeg voor op reis.",
    status: "active",
    basePriceIncVat: 24.95,
    compareAtPriceIncVat: 34.95,
    primaryImage: "/images/products/led-makeup-spiegel.jpg",
    galleryImages: ["/images/products/led-makeup-spiegel.jpg"],
    brand: "PaddleForge",
    category: "Moederdag",
    badge: "Moederdag",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x LED make-up spiegel", "USB oplaadkabel"],
    bulletPoints: [
      "Verstelbare LED helderheid",
      "3 kleurtemperaturen (warm, neutraal, koel)",
      "360 graden draaibaar",
      "Oplaadbaar via USB",
    ],
    faq: [
      { question: "Heeft het een vergroting?", answer: "Ja, één zijde is normaal en de andere heeft 5x vergroting." },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // ZOMER 2026 — Outdoor & festival producten
  // ═════════════════════════════════════════════════════════════
  {
    id: "seasonal_nekventilator",
    slug: "draagbare-nekventilator",
    name: "Draagbare Nekventilator",
    shortDescription:
      "USB oplaadbare nekventilator. 5 snelheden, stil, perfect voor zomer.",
    description:
      "Blijf koel tijdens warme zomerdagen met deze draagbare nekventilator. Hangt comfortabel om je nek en blaast een verkoelende bries. USB oplaadbaar, 5 snelheden en fluisterstil. Ideaal voor festivals, de trein, sport of een dag op het strand.",
    status: "active",
    basePriceIncVat: 24.95,
    compareAtPriceIncVat: 34.95,
    primaryImage: "/images/products/nekventilator.jpg",
    galleryImages: ["/images/products/nekventilator.jpg"],
    brand: "PaddleForge",
    category: "Zomer",
    badge: "Zomer Hit",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x nekventilator", "USB-C oplaadkabel"],
    bulletPoints: [
      "5 snelheidsstanden",
      "USB-C oplaadbaar — 6 uur speeltijd",
      "Fluisterstil ontwerp",
      "Slechts 260 gram — de hele dag comfortabel",
    ],
    faq: [
      { question: "Hoe lang gaat de batterij mee?", answer: "Op de laagste stand circa 6 uur, op de hoogste stand circa 2 uur." },
      { question: "Is het zwaar om de hele dag te dragen?", answer: "Nee, de ventilator weegt maar 260 gram — lichter dan een telefoon." },
    ],
  },
  {
    id: "seasonal_solar_tuinverlichting",
    slug: "solar-tuinverlichting-led",
    name: "Solar Tuinverlichting LED Snoer",
    shortDescription:
      "10 meter solar LED snoerverlichting voor tuin en terras. Warm wit.",
    description:
      "Creëer een magische sfeer op je terras met deze solar LED snoerverlichting. 10 meter met 100 warm-witte LED lampjes die automatisch aangaan bij schemering. Geen stroom nodig — het zonnepaneel laadt overdag op. Weerbestendig voor de hele zomer buiten.",
    status: "active",
    basePriceIncVat: 19.95,
    compareAtPriceIncVat: 29.95,
    primaryImage: "/images/products/solar-tuinverlichting.jpg",
    galleryImages: ["/images/products/solar-tuinverlichting.jpg"],
    brand: "PaddleForge",
    category: "Zomer",
    badge: "Zomer Hit",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x LED snoer (10 meter, 100 LED's)", "Zonnepaneel met grondpin"],
    bulletPoints: [
      "10 meter lang — 100 warm-witte LED's",
      "Solar: geen stroom nodig",
      "Automatisch aan bij schemering",
      "Weerbestendig (IP65)",
    ],
    faq: [
      { question: "Gaan ze vanzelf aan?", answer: "Ja, de lampjes gaan automatisch aan zodra het donker wordt en uit bij daglicht." },
      { question: "Hoe lang branden ze 's nachts?", answer: "Na een volle dag zon branden ze 8-10 uur." },
    ],
  },
  {
    id: "seasonal_draagbare_blender",
    slug: "draagbare-smoothie-blender",
    name: "Draagbare Smoothie Blender",
    shortDescription:
      "Draagbare USB blender voor smoothies onderweg. 400ml, oplaadbaar.",
    description:
      "Maak overal verse smoothies met deze draagbare blender. 400ml capaciteit, USB-C oplaadbaar en krachtig genoeg voor ijs, fruit en groenten. Neem hem mee naar het strand, het park of de sportschool voor een verse smoothie wanneer je maar wilt.",
    status: "active",
    basePriceIncVat: 29.95,
    compareAtPriceIncVat: 39.95,
    primaryImage: "/images/products/draagbare-blender.jpg",
    galleryImages: ["/images/products/draagbare-blender.jpg"],
    brand: "PaddleForge",
    category: "Zomer",
    badge: "Zomer Hit",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x draagbare blender", "USB-C oplaadkabel"],
    bulletPoints: [
      "400ml capaciteit — perfect voor één smoothie",
      "USB-C oplaadbaar — 15+ smoothies per lading",
      "Krachtig genoeg voor ijs en bevroren fruit",
      "BPA-vrij en makkelijk schoon te maken",
    ],
    faq: [
      { question: "Kan het ijs vermalen?", answer: "Ja, de blender kan kleine ijsblokjes en bevroren fruit zonder problemen verwerken." },
      { question: "Lekt het in mijn tas?", answer: "Nee, het deksel sluit stevig af. Ontworpen om mee te nemen." },
    ],
  },
  {
    id: "seasonal_elektrisch_waterpistool",
    slug: "elektrisch-waterpistool",
    name: "Elektrisch Waterpistool",
    shortDescription:
      "Oplaadbaar elektrisch waterpistool. 10 meter bereik, groot reservoir.",
    description:
      "Het ultieme zomerspeelgoed voor kinderen én volwassenen. Dit elektrische waterpistool schiet water tot 10 meter ver met één druk op de knop — geen pompen meer nodig. Groot reservoir van 500ml en oplaadbaar via USB. De watergevechten worden nooit meer hetzelfde.",
    status: "active",
    basePriceIncVat: 29.95,
    compareAtPriceIncVat: 44.95,
    primaryImage: "/images/products/elektrisch-waterpistool.jpg",
    galleryImages: ["/images/products/elektrisch-waterpistool.jpg"],
    brand: "PaddleForge",
    category: "Zomer",
    badge: "Zomer Hit",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x elektrisch waterpistool", "USB oplaadkabel"],
    bulletPoints: [
      "Elektrisch — geen pompen nodig",
      "10 meter bereik",
      "500ml reservoir",
      "USB oplaadbaar — 30 minuten speeltijd",
    ],
    faq: [
      { question: "Vanaf welke leeftijd?", answer: "Geschikt voor kinderen vanaf 6 jaar (onder toezicht) en volwassenen." },
      { question: "Is het waterdicht?", answer: "De motor en batterij zijn waterdicht (IPX5), maar niet onderdompelen." },
    ],
  },
  {
    id: "seasonal_camping_lamp",
    slug: "oplaadbare-camping-lamp",
    name: "Oplaadbare Camping Lamp",
    shortDescription:
      "LED camping lantaarn met 3 standen. Oplaadbaar, compact, weerbestendig.",
    description:
      "De perfecte metgezel voor camping, tuinfeesten en stroomuitval. Deze compacte LED lantaarn biedt 3 lichtstanden (warm, helder, SOS), is USB-C oplaadbaar en volledig weerbestendig. Hang hem op aan de ingebouwde haak of zet hem neer — overal licht waar je het nodig hebt.",
    status: "active",
    basePriceIncVat: 19.95,
    compareAtPriceIncVat: 29.95,
    primaryImage: "/images/products/camping-lamp.jpg",
    galleryImages: ["/images/products/camping-lamp.jpg"],
    brand: "PaddleForge",
    category: "Zomer",
    badge: "Zomer Hit",
    shippingEstimateMinDays: 7,
    shippingEstimateMaxDays: 14,
    returnWindowDays: 14,
    contents: ["1x LED camping lamp", "USB-C oplaadkabel", "Ophanghaak"],
    bulletPoints: [
      "3 lichtstanden: warm, helder, SOS",
      "USB-C oplaadbaar — 12 uur brandtijd",
      "Weerbestendig (IP65)",
      "Compact en lichtgewicht (180g)",
    ],
    faq: [
      { question: "Kan ik hem ophangen in de tent?", answer: "Ja, er zit een ingebouwde ophanghaak aan de onderkant." },
      { question: "Hoe helder is hij?", answer: "Op de hoogste stand 300 lumen — genoeg om een tent of picknickplek te verlichten." },
    ],
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): ProductData[] {
  return products.filter((p) => p.status === "active");
}

export function getProductsByCategory(category: string): ProductData[] {
  return products.filter((p) => p.status === "active" && p.category === category);
}

export function getKoningsdagProducts(): ProductData[] {
  return getProductsByCategory("Koningsdag");
}

export function getMoederdagProducts(): ProductData[] {
  return getProductsByCategory("Moederdag");
}

export function getZomerProducts(): ProductData[] {
  return getProductsByCategory("Zomer");
}
