// Arrival fact register. Every published claim on /arriving lives here with
// its provenance. Page components read this file and never hardcode a fact.
//
// Re-verify every August and December, six weeks before each intake.
// See docs/superpowers/specs/2026-08-01-esn-aa-arrival-content-design.md

export type FactStatus = "verified" | "owner-confirm";
export type Audience = "exchange" | "degree" | "doctoral";

export interface Fact {
  id: string;
  claim: string;
  /** Exact source URL. Required when status is "verified". */
  source: string | null;
  /** ISO date the claim was last checked against its source. */
  checked: string | null;
  /** ISO date after which the claim must not be published unchecked. */
  expires: string | null;
  audiences: Audience[];
  status: FactStatus;
  /** Who re-verifies this in August and December. A role, not a person, so it survives board turnover. */
  owner: string;
  /** How fast this rots. "high" means re-check it every intake without fail. */
  volatility: "low" | "medium" | "high";
  /** Which published surfaces use this fact. Keeps dead register entries visible. */
  usedIn: string[];
}

const ALL: Audience[] = ["exchange", "degree", "doctoral"];

export const ARRIVAL_FACTS: Record<string, Fact> = {
  officeAddress: {
    id: "officeAddress",
    claim:
      "The ESN Åbo Akademi office is in Geologicum, Tuomiokirkontori 1, 20500 Turku, on the second floor, opposite the cathedral and next to Gripen. The main door needs the grey Åbo Akademi key.",
    source: "owner-confirmed:2026-08-01",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving"],
  },
  officeHours: {
    id: "officeHours",
    claim: "ESN Åbo Akademi office opening hours.",
    source: null,
    checked: null,
    expires: null,
    audiences: ALL,
    status: "owner-confirm",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  esncardPrice: {
    id: "esncardPrice",
    claim: "Price of the ESNcard from ESN Åbo Akademi.",
    source: null,
    checked: null,
    expires: null,
    audiences: ALL,
    status: "owner-confirm",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  dnaSim: {
    id: "dnaSim",
    claim:
      "ESN Åbo Akademi hands out free DNA prepaid SIM cards at the office. Ask at the desk what the SIM includes and what data costs.",
    source: "owner-confirmed:2026-08-01",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  arrivalAutumn2026: {
    id: "arrivalAutumn2026",
    claim:
      "For autumn 2026 the official Arrival Day is 24 August 2026. The obligatory orientation week runs 25 to 28 August 2026. Classes begin 31 August 2026.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/before-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  arrivalSpring2027: {
    id: "arrivalSpring2027",
    claim:
      "For spring 2027 the official Arrival Day is 4 January 2027. The obligatory orientation week runs 5 to 7 January 2027, with no programme on 6 January because it is a public holiday in Finland. Classes begin 8 January 2027.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/before-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  foliStudentCard: {
    id: "foliStudentCard",
    claim:
      "The Föli student travel-card discount requires full-time study leading to a qualification or degree lasting at least one academic year (minimum nine months), a home or temporary address in the Föli region, and age 20 or over. Students studying abroad are excluded, so a one-semester exchange student does not qualify. An ESNcard is accepted as proof of student status but does not create eligibility. The student discount never applies to single tickets.",
    source: "https://www.foli.fi/en/tickets/travel-cards/students",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  foliCardCost: {
    id: "foliCardCost",
    claim:
      "A personal loadable Föli travel card costs 5.20 euro. Check the current single-ticket price on the Föli site before travelling.",
    source: "https://www.foli.fi/en/tickets",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  healthExchange: {
    id: "healthExchange",
    claim:
      "Exchange students do not pay the Kela healthcare fee and cannot use FSHS. Use public health services with a European Health Insurance Card. The Åbo number is +358 2 266 1130, Monday to Friday 8 to 15.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["exchange"],
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  healthDegree: {
    id: "healthDegree",
    claim:
      "Degree students pay the Kela student healthcare fee of 35.35 euro per term (70.70 euro per year in 2026) and use FSHS. Students with social security cover in another EU or EEA country, Switzerland, Great Britain or Northern Ireland do not pay it but may still use FSHS with an EHIC or GHIC.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["degree"],
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  healthDoctoral: {
    id: "healthDoctoral",
    claim:
      "Students completing a licentiate or doctoral degree do not pay the Kela healthcare fee and cannot use FSHS.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["doctoral"],
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  emergency: {
    id: "emergency",
    claim:
      "Call 112 in an emergency. Install the official 112 Suomi app, which sends your location to the Emergency Response Centre automatically. The non-urgent medical helpline is 116 117.",
    source: "https://112.fi/en/112-suomi-application",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving"],
  },
  startingPackage: {
    id: "startingPackage",
    claim:
      "The starting package store is at Rehtorinpellonkatu 4B, in the basement, run jointly by TYY, ÅAS, Novium and TUAS. It contains a pillow, a blanket, curtains and kitchen utensils in a roughly 30 litre box. Bed linen, pillowcases and duvet covers are not included. Pay the student union fee and the starting package fee first; part of the package fee is refunded on return.",
    source: "https://www.tyy.fi/en/starting-package-storage",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  tysApplication: {
    id: "tysApplication",
    claim:
      "TYS housing applications open three months before the rental period, on 1 May and 1 October. Apply as soon as they open. Contact info@tys.fi or +358 2 2750200. Confirm your rental period and key collection directly with TYS.",
    source: "https://tys.fi/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  tysKeyLocker: {
    id: "tysKeyLocker",
    claim:
      "TYS operates a 24 hour key pickup locker at Inspehtorinkatu 12A for arrivals outside office hours. Arrange it with TYS in advance, confirm the deadline for requesting it, and check that your key works before the office closes.",
    source: "https://tys.fi/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving"],
  },
  tavasthem: {
    id: "tavasthem",
    claim:
      "Tavasthem, the student union's own student housing in central Turku (Åbo), signs all leases for a minimum period of 12 months.",
    source:
      "https://studentkaren.fi/en/students/residences/tavasthem-student-housing/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["degree", "doctoral"],
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  livingCosts: {
    id: "livingCosts",
    claim:
      "Åbo Akademi estimates living costs of 670 to 965 euro per month. This is the university's own published estimate, not an ESN Åbo Akademi calculation.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/before-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving"],
  },
  banking: {
    id: "banking",
    claim:
      "Åbo Akademi advises exchange students staying one semester not to open a Finnish bank account, because it takes weeks and needs a personal identity code. Wise or Revolut are suggested instead.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/before-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["exchange"],
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: [],
  },
  studentUnion: {
    id: "studentUnion",
    claim:
      "Åbo Akademis Studentkår (ÅAS) is at Kåren, Tavastgatan 22, 20500 Åbo, phone 02 215 4650. Degree students are members automatically under Finnish law. Exchange students join by paying the fee, which gives a Finnish student card through the Frank App and access to student lunch and travel discounts.",
    source: "https://studentkaren.fi/en/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving"],
  },
  campusSport: {
    id: "campusSport",
    claim:
      "CampusSport covers Åbo Akademi students and gives access to gyms, group classes and ball games. Check the current fee on the CampusSport site before paying.",
    source: "https://www.campussport.fi/en/prices/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: [],
  },
  library: {
    id: "library",
    claim:
      "The Åbo Akademi library in Turku (Åbo) is in Arken, Fabriksgatan 2. Course books moved to the new Astra building at Porthansgatan 3 at the start of 2026. Check current opening hours on the library site.",
    source: "https://www.abo.fi/en/library/contact/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: [],
  },
  exchangeContact: {
    id: "exchangeContact",
    claim:
      "Åbo Akademi's International Affairs Coordinators answer at exchange@abo.fi. Course registration and certificates go through Peppi. Campus WiFi is Eduroam, using your ÅAU credentials issued at orientation.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/during-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving"],
  },
  mealSubsidy: {
    id: "mealSubsidy",
    claim:
      "From 1 January 2026 the Kela meal subsidy is 2.80 euro per meal, so a subsidised student lunch costs at most 3.10 euro. Special lunches cost 4.50 to 5.90 euro. You get one subsidised meal per day by showing a digital student card from Frank, Kide.app, Slice or Tuudo, a physical SYL or SAMOK card, or a Kela meal subsidy card issued by your institution if you have no student card. Digital ISIC cards and postgraduate cards are not accepted.",
    source: "https://www.kela.fi/meal-subsidy",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["exchange", "degree"],
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["survival-guide", "arriving"],
  },
  mealSubsidyDoctoral: {
    id: "mealSubsidyDoctoral",
    claim:
      "Students completing a licentiate or doctoral degree are not entitled to the Kela meal subsidy, and postgraduate student cards are not accepted for it.",
    source: "https://www.kela.fi/meal-subsidy",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["doctoral"],
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["survival-guide", "arriving"],
  },
  daylight: {
    id: "daylight",
    claim:
      "December in Turku (Åbo) averages 5.9 hours of daylight. On the shortest day, 21 December 2026, there are 5 hours and 50 minutes. The latest sunrise is 09:35 and the earliest sunset is 15:22. The longest day of the year has 19 hours and 10 minutes, which is 13 hours 20 minutes more than the shortest.",
    source: "https://www.timeanddate.com/sun/finland/turku",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  reflector: {
    id: "reflector",
    claim:
      "Finnish road traffic law requires pedestrians to use a reflector in the dark, although no penalty is applied for not using one. A driver on low beams sees a pedestrian without a reflector at about 50 metres, and one wearing a reflector at about 350 metres. Reflectors cost a couple of euro and are sold in most supermarkets.",
    source: "https://www.liikenneturva.fi/en/road-safety/reflector/",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  vaskiLibrary: {
    id: "vaskiLibrary",
    claim:
      "A personal Vaski library card is free from any Vaski library in the Turku (Åbo) region. Bring photo identification. The card covers borrowing, events, customer computers and printing across the whole network.",
    source: "https://vaski.finna.fi/Content/asiakkaana?lng=en-gb",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  nyyti: {
    id: "nyyti",
    claim:
      "Nyyti ry supports students' mental health and offers material and groups in English, including a one to one loneliness service run with HelsinkiMissio that gives five sessions with a professional, nationwide and remote.",
    source: "https://www.nyyti.fi/en/",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  internationalHouse: {
    id: "internationalHouse",
    claim:
      "International House Turku brings together counselling and guidance for international newcomers in the Turku (Åbo) region. It is the right place for problems that are outside what ESN or your university can help with.",
    source: "https://www.turku.fi/en/integration-services",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  languageCentre: {
    id: "languageCentre",
    claim:
      "The Åbo Akademi Language Centre teaches Swedish at levels 1 to 4 and Finnish at levels 1 to 2. Exchange students, researchers and other international students can take these courses. Check current fees and available places with the Language Centre directly.",
    source: "https://www.abo.fi/en/language-centre/courses-and-language-tests/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["survival-guide"],
  },
  alcohol: {
    id: "alcohol",
    claim:
      "Grocery shops and kiosks sell fermented drinks up to 8 percent, raised from 5.5 percent by a 2024 reform. Ready to drink mixes and long drinks stay capped at 5.5 percent. Anything stronger comes only from Alko, the state monopoly. There are time restrictions on when alcohol can be sold, and the rules changed again in 2026, so check the current position rather than relying on a printed time.",
    source: "https://yle.fi/a/74-20232920",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["survival-guide"],
  },
};

/**
 * Reads a fact of any status, including one still awaiting owner confirmation.
 *
 * The FactNote and FactSource components in components/ui/fact-note.tsx are
 * the only places that render a fact's claim from this call, and they do so
 * safely by showing a fallback and never the claim for an unconfirmed fact.
 * components/ui/audience-table.tsx also calls this directly, but only to
 * confirm each factId still exists in the register; it discards the return
 * value rather than rendering it. Anywhere else that wants to render a claim
 * must use getFact, which refuses unconfirmed facts outright.
 */
export function readFactUnchecked(id: string): Fact {
  const fact = ARRIVAL_FACTS[id];
  if (!fact) {
    throw new Error(
      `Unknown fact id "${id}". Add it to content/arrival-facts.ts with a source.`,
    );
  }
  return fact;
}

/**
 * Reads a fact that is safe to publish as-is. Throws for a fact still awaiting
 * owner confirmation, so `{getFact("x").claim}` cannot put an unconfirmed
 * value on the page. The build fails loudly rather than publishing a guess.
 */
export function getFact(id: string): Fact {
  const fact = readFactUnchecked(id);
  if (fact.status === "owner-confirm") {
    throw new Error(
      `Fact "${id}" is awaiting owner confirmation and must not be published. ` +
        `Render it with <FactNote id="${id}" fallback="..." /> instead of getFact("${id}").`,
    );
  }
  return fact;
}

/** Serialises the register so scripts/check-facts.mjs can validate the real data. */
export function factsAsJson(): string {
  return JSON.stringify(ARRIVAL_FACTS, null, 2);
}
