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
}

const ALL: Audience[] = ["exchange", "degree", "doctoral"];

export const ARRIVAL_FACTS: Record<string, Fact> = {
  officeAddress: {
    id: "officeAddress",
    claim:
      "The ESN Åbo Akademi office is in Geologicum, Tuomiokirkontori 1, 20500 Turku, on the second floor, opposite the cathedral and next to Gripen. The main door needs the grey Åbo Akademi key.",
    source: "https://esnabo.org/our-office",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
  },
  officeHours: {
    id: "officeHours",
    claim: "ESN Åbo Akademi office opening hours.",
    source: null,
    checked: null,
    expires: null,
    audiences: ALL,
    status: "owner-confirm",
  },
  esncardPrice: {
    id: "esncardPrice",
    claim: "Price of the ESNcard from ESN Åbo Akademi.",
    source: null,
    checked: null,
    expires: null,
    audiences: ALL,
    status: "owner-confirm",
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
  },
  orientationAutumn2026: {
    id: "orientationAutumn2026",
    claim:
      "Åbo Akademi orientation week for autumn 2026 runs 24 to 28 August 2026. Attendance is compulsory.",
    source:
      "https://www.abo.fi/en/study/study-abroad/exchange-students/information-for-accepted-exchange-students/before-the-exchange/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    status: "verified",
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
  },
};

export function getFact(id: string): Fact {
  const fact = ARRIVAL_FACTS[id];
  if (!fact) {
    throw new Error(
      `Unknown fact id "${id}". Add it to content/arrival-facts.ts with a source.`,
    );
  }
  return fact;
}
