// Arrival fact register. Every published claim on /arriving and in the
// survival guide lives here with its provenance. Page components read this
// file and never hardcode a fact. `usedIn` names the surfaces that render
// each entry, so a claim nothing uses stays visible instead of rotting.
//
// Re-verify every August and December, six weeks before each intake.
// See docs/superpowers/specs/2026-08-01-esn-aa-arrival-content-design.md

export type FactStatus = "verified" | "owner-confirm";
export type Audience = "exchange" | "degree" | "doctoral";

/**
 * Whether a claim holds for any student in Turku (Åbo), or only at Åbo
 * Akademi. The guide is written for every student in the city, so a claim
 * that is true only at one institution has to say so on the page rather
 * than leave a reader at another one to find out the hard way.
 *
 * "abo-akademi" covers two things that look different but behave the same
 * way for a reader: facts about Åbo Akademi University (its term dates, its
 * library, its student system) and facts about ESN Åbo Akademi itself (our
 * office, our ESNcard, our SIM cards). Both are marked, and the guide's
 * opening note explains what the marker means.
 *
 * Do NOT mark a fact "abo-akademi" just because we found it on abo.fi or
 * because the claim names Åbo Akademi. `livingCosts` is Åbo Akademi's own
 * published estimate and `banking` is Åbo Akademi's own advice, but both
 * describe something that holds for anyone arriving in Finland, and both
 * already carry that attribution in the claim itself. The test is who the
 * claim is TRUE for, not who published it.
 */
export type Institution = "all" | "abo-akademi";

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
  /** Who the claim is true for: any student in the city, or only at Åbo Akademi. */
  institution: Institution;
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
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving", "survival-guide"],
  },
  officeHours: {
    id: "officeHours",
    claim: "ESN Åbo Akademi office opening hours.",
    source: null,
    checked: null,
    expires: null,
    audiences: ALL,
    institution: "abo-akademi",
    status: "owner-confirm",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  // The DNA SIM is deliberately NOT described here. This entry used to read
  // "A free DNA prepaid SIM card is included", an unqualified "free" that
  // also contradicted `dnaSim` below, where the same offer carries the
  // qualification to ask at the desk what it includes and what data costs.
  // One statement, qualified, in one place. Both surfaces that render this
  // fact render `dnaSim` alongside it, so nothing is lost by the removal.
  esncardPrice: {
    id: "esncardPrice",
    claim:
      "The ESNcard costs 10 euro and is valid for 12 months. Collect it at the ESN Åbo Akademi office. Register it at esncard.org and search Finland to see every partner deal.",
    source: "owner-confirmed:2026-08-01",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  dnaSim: {
    id: "dnaSim",
    claim:
      "ESN Åbo Akademi hands out free DNA prepaid SIM cards at the office. Ask at the desk what the SIM includes and what data costs.",
    source: "owner-confirmed:2026-08-01",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
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
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
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
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  // 🔴 Read this before you restore a flat "exchange students are not
  // eligible" to the claim below. That sentence was here, and it over-read
  // the source.
  //
  // Föli's exclusion list ends with the bare line "Students studying
  // abroad." An earlier version of this claim repeated it and then drew a
  // conclusion the page does not draw: "so a one-semester exchange student
  // does not qualify." In a Finnish transit authority's eligibility list,
  // read next to the criterion directly above it ("The student studies at
  // ... an institute of higher education located in Finland"), that line
  // most plausibly means people enrolled at an institution ABROAD. An
  // incoming exchange student is enrolled at an institution in Finland.
  // The positive criterion is stated below instead of the ambiguous
  // negative, because in a guide read by incoming students the negative
  // invites exactly the misreading it caused here.
  //
  // Two further things on the page cut against a flat denial:
  //   - the nine-month test is met by a full academic year, and Föli's own
  //     worked example of an academic year is "September to May", which is
  //     what a full-year exchange runs.
  //   - "Student discount is also granted if ... Partial degree students
  //     (on a full-time basis and the total duration of your studies is at
  //     least one academic year (9 months))" is a separate route that does
  //     not require the studies to lead to a degree at the Finnish
  //     institution at all.
  // So the honest answer is that it depends on the length and kind of the
  // studies, and the actionable instruction is to ask Föli first.
  //
  // The postgraduate exclusion, by contrast, IS explicit and must not be
  // softened: "The student card will not be granted to: Post-graduate
  // students of universities and other institutes of higher education,
  // such as licentiate or doctorate students." Keep the Licentiate in
  // Medicine exception with it; the page states that in the same sentence.
  foliStudentCard: {
    id: "foliStudentCard",
    claim:
      "The Föli student travel-card discount requires full-time study at an educational institution in Finland, studies that under normal circumstances lead to a qualification or degree, an estimated total duration of at least one academic year of at least nine months (Föli's own example is September to May), a home or temporary address in the Föli region, and age 20 or over. Föli also grants the discount to partial-degree students on those same full-time, nine-month terms. Whether an exchange student meets all of this depends on how long and what kind of studies you are doing, and a single semester in particular may not, so check your own case with Föli before you buy a card or queue at a service point. Licentiate and doctorate students are excluded, apart from students of a Licentiate in Medicine. An ESNcard is accepted as proof of student status but does not create eligibility. The student discount never applies to single tickets.",
    source: "https://www.foli.fi/en/tickets/travel-cards/students",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  foliCardCost: {
    id: "foliCardCost",
    claim:
      "A personal loadable Föli travel card costs 5.20 euro. Check the current single-ticket price on the Föli site before travelling.",
    source: "https://www.foli.fi/en/tickets",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  healthExchange: {
    id: "healthExchange",
    claim:
      "Exchange students do not pay the Kela healthcare fee and cannot use FSHS. Use public health services with a European Health Insurance Card. The Åbo number is +358 2 266 1130, Monday to Friday 8 to 15.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["exchange"],
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  healthDegree: {
    id: "healthDegree",
    claim:
      "Degree students pay the Kela student healthcare fee of 35.35 euro per term (70.70 euro per year in 2026) and use FSHS. Students with social security cover in another EU or EEA country, Switzerland, Great Britain or Northern Ireland do not pay it but may still use FSHS with an EHIC or GHIC.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["degree"],
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  healthDoctoral: {
    id: "healthDoctoral",
    claim:
      "Students completing a licentiate or doctoral degree do not pay the Kela healthcare fee and cannot use FSHS.",
    source: "https://www.kela.fi/student-healthcare-fee-higher-education",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["doctoral"],
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  emergency: {
    id: "emergency",
    claim:
      "Call 112 in an emergency. Install the official 112 Suomi app, which sends your location to the Emergency Response Centre automatically. The non-urgent medical helpline is 116 117.",
    source: "https://112.fi/en/112-suomi-application",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving", "survival-guide"],
  },
  startingPackage: {
    id: "startingPackage",
    claim:
      "The starting package store is at Rehtorinpellonkatu 4B, in the basement, run jointly by TYY, ÅAS, Novium and TUAS. It contains a pillow, a blanket, curtains and kitchen utensils in a roughly 30 litre box. Bed linen, pillowcases and duvet covers are not included. Pay the student union fee and the starting package fee first; part of the package fee is refunded on return.",
    source: "https://www.tyy.fi/en/starting-package-storage",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  tysApplication: {
    id: "tysApplication",
    claim:
      "TYS housing applications open three months before the rental period, on 1 May and 1 October. Apply as soon as they open. Contact info@tys.fi or +358 2 2750200. Confirm your rental period and key collection directly with TYS.",
    source: "https://tys.fi/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  tysKeyLocker: {
    id: "tysKeyLocker",
    claim:
      "TYS operates a 24 hour key pickup locker at Inspehtorinkatu 12A for arrivals outside office hours. Arrange it with TYS in advance, confirm the deadline for requesting it, and check that your key works before the office closes.",
    source: "https://tys.fi/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving", "survival-guide"],
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
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
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
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
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
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  // 🔴 Read this before you touch the claim below in a re-verification.
  //
  // ÅAS publishes member benefits as a flat, unconditional list. The
  // membership page says the student card gets you "subsidised student
  // lunches, cheaper train and bus tickets etc.", and the membership-benefits
  // page lists "Trains, buses, local transport" with no eligibility rules
  // attached at all. That list is NOT safe to repeat, because three separate
  // register entries contradict it by audience:
  //   - foliStudentCard: the Föli LOCAL travel card excludes a one-semester
  //     exchange student (nine-month, degree-leading requirement).
  //   - mealSubsidyDoctoral: the Kela meal subsidy excludes doctoral and
  //     licentiate students.
  //   - the same ÅAS membership page says postgraduate members get discounts
  //     "but not on buses", so even ÅAS's own list branches.
  // An earlier version of this claim ended "...and access to student lunch
  // and travel discounts", which inherited that defect and contradicted the
  // audience table four pages earlier in the printed guide.
  //
  // So the claim stops at what membership gives everyone who has it, the
  // student card, and sends the reader to the audience table for the rest.
  // Do NOT re-add "travel discounts", "local transport" or "student lunch"
  // here just because the source page still lists them unconditionally.
  //
  // Source moved off the ÅAS homepage to the membership page, which is the
  // page that actually carries the benefits list, the compulsory-by-law
  // sentence, the three-month rule for exchange students, the voluntary
  // postgraduate route, and, in its footer, the address and phone number.
  studentUnion: {
    id: "studentUnion",
    claim:
      "Åbo Akademis Studentkår (ÅAS) is at Kåren, Tavastgatan 22, 20500 Åbo, phone 02 215 4650. Membership is compulsory by law for degree students, so they belong automatically. Exchange students studying in Finland for three months or more can join by paying the fee, and postgraduate students can join voluntarily. Membership is what gets you a Finnish student card, through the Frank App or another student card app. ÅAS lists further member discounts, but not every one of them is open to every kind of student, so check the table at the top of this page before you count on one.",
    source: "https://studentkaren.fi/en/students/membership/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  // Widened from "CampusSport covers Åbo Akademi students", which was true
  // but read as though it were an Åbo Akademi service. The cited page names
  // all four institutions in one sentence, so a guide written for every
  // student in the city can say so. Do not narrow it back: the four are what
  // the source says, and it says nothing about any other institution.
  campusSport: {
    id: "campusSport",
    claim:
      "CampusSport is shared by the University of Turku, Turku University of Applied Sciences, Åbo Akademi University and Novia University of Applied Sciences, and gives their degree, exchange and open studies students access to gyms, group classes and ball games. Postgraduate students pay the staff price. Check the current fee on the CampusSport site before paying.",
    source: "https://www.campussport.fi/en/prices/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["survival-guide"],
  },
  // Each address is given in both languages because the cited page gives only
  // the Finnish forms (Tehtaankatu 2, Porthaninkatu 3) while the buildings are
  // known on campus by their Swedish ones. The Swedish forms are abo.fi's own,
  // from the news item "The new Astra building in Turku also houses course
  // books" (30 January 2026):
  // https://www.abo.fi/en/news/the-new-astra-building-in-turku-also-houses-course-books/
  //
  // Do NOT re-add a date for the move to Astra. This claim used to say the
  // books moved "at the start of 2026", which the cited page does not support:
  // it says only that the course books are in Astra, with no date and no
  // mention of a move. A re-verifier following the link could not confirm it.
  // The reader needs to know where the books are now, not when they moved.
  library: {
    id: "library",
    claim:
      "The Åbo Akademi library in Turku (Åbo) is in Arken, Fabriksgatan 2, which is Tehtaankatu 2 in Finnish. Course books are in the Astra building at Porthansgatan 3, Porthaninkatu 3 in Finnish, where lending is self-service. Check current opening hours on the library site.",
    source: "https://www.abo.fi/en/library/contact/",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
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
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["arriving", "survival-guide"],
  },
  mealSubsidy: {
    id: "mealSubsidy",
    claim:
      "From 1 January 2026 the Kela meal subsidy is 2.80 euro per meal, so a subsidised student lunch costs at most 3.10 euro. Special lunches cost 4.50 to 5.90 euro. You get one subsidised meal per day by showing a digital student card from Frank, Kide.app, Slice or Tuudo, a physical SYL or SAMOK card, or a Kela meal subsidy card issued by your institution if you have no student card. Digital ISIC cards and postgraduate cards are not accepted.",
    source: "https://www.kela.fi/meal-subsidy",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["exchange", "degree"],
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["arriving", "survival-guide"],
  },
  mealSubsidyDoctoral: {
    id: "mealSubsidyDoctoral",
    claim:
      "Students completing a licentiate or doctoral degree are not entitled to the Kela meal subsidy, and postgraduate student cards are not accepted for it.",
    source: "https://www.kela.fi/meal-subsidy",
    checked: "2026-08-01",
    expires: "2026-12-15",
    audiences: ["doctoral"],
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "medium",
    usedIn: ["arriving", "survival-guide"],
  },
  daylight: {
    id: "daylight",
    claim:
      "December in Turku (Åbo) averages 5.9 hours of daylight. On the shortest day, 21 December 2026, there are 5 hours and 50 minutes. The latest sunrise is 09:35 and the earliest sunset is 15:22. The longest day of the year has 19 hours and 10 minutes, which is 13 hours 20 minutes more than the shortest.",
    source: "https://www.timeanddate.com/sun/finland/turku",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    institution: "all",
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
    institution: "all",
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
    institution: "all",
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
    institution: "all",
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
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  languageOfInstruction: {
    id: "languageOfInstruction",
    claim:
      "Åbo Akademi describes itself as the Swedish-language multidisciplinary academic university in Finland. Which language a given course, service or form actually runs in varies, so check the language of instruction for your own programme and ask your department what it handles in English.",
    source: "https://www.abo.fi/en/about-abo-akademi-university/",
    checked: "2026-08-01",
    expires: "2027-06-01",
    audiences: ALL,
    institution: "abo-akademi",
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
    institution: "abo-akademi",
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
    institution: "all",
    status: "verified",
    owner: "board",
    volatility: "high",
    usedIn: ["survival-guide"],
  },
  // The two entries below exist because a draft of the guide put Wappen on
  // 1 May. The student celebration is the evening before. Sources that name
  // both days next to each other make this easy to collapse, so the date and
  // the day-after distinction are pinned here rather than left to prose.
  //
  // wappen cites the shared ÅAS explainer, deliberately. It is an evergreen
  // page rather than a dated announcement, and it is the one page that
  // carries the 30 April versus 1 May distinction and both of the chair's
  // lines. The category archive rotates its contents, so it is not citable.
  // Do not swap this source for a year's announcement post.
  //
  // lillaWappen cites a different, more specific ÅAS page:
  // https://studentkaren.fi/en/labour-day/little-walpurgis/
  // That page is what supports the "cap is put away until Wappen" clause,
  // but 🔴 READ ITS WORDING CAREFULLY BEFORE RE-VERIFYING. It says the
  // students "put the hat away until the next May". WAPPEN IS 30 APRIL. In
  // that sentence "the next May" means the next May Day period, the festival,
  // NOT the day the cap goes back on: the cap goes on at Vårdberget on the
  // evening of 30 April, which is May Eve. Do not "correct" either claim to
  // 1 May, or to "May", on the strength of that sentence. That collapse is
  // exactly the error this project has already made three times.
  //
  // The 30 April versus 1 May distinction is carried by the other ÅAS page,
  // the one cited on `wappen` above:
  // https://studentkaren.fi/en/labour-day/a-few-have-asked-and-some-wonder-what-do-you-do-on-may-day-in-abo/
  // which states it in as many words ("In Swedish, Vappen usually refers to
  // 30 April and May Day usually refers to the 1st of May").
  //
  // Both ÅAS pages are needed to check these two facts. Do not merge them
  // onto one source.
  //
  // Do not pin a calendar date on Lilla Wappen. ÅAS describes it both as the
  // last day of September and as the last Saturday, which coincided in 2023
  // and in few other years. "The end of September" is the only durable form.
  wappen: {
    id: "wappen",
    claim:
      "Wappen falls on 30 April, May Eve, and not on 1 May. In Swedish, Vappen usually means 30 April and May Day usually means 1 May, which is where the confusion comes from. Students gather at Vårdberget in Turku (Åbo), called Vartiovuorenmäki in Finnish, where the choirs Brahe Djäknar and Florakören sing and the chair of Åbo Akademis Studentkår tells students that spring is here and to put their caps on. The student cap is worn from that day until Lilla Wappen. Check the year's start time with ÅAS.",
    source:
      "https://studentkaren.fi/en/labour-day/a-few-have-asked-and-some-wonder-what-do-you-do-on-may-day-in-abo/",
    checked: "2026-08-01",
    expires: "2027-03-01",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "low",
    usedIn: ["survival-guide"],
  },
  lillaWappen: {
    id: "lillaWappen",
    claim:
      "Lilla Wappen falls at the end of September and closes the cap season. The chair of Åbo Akademis Studentkår tells students that autumn is here and that caps go inside out, and after that the cap is put away until Wappen in the spring. ÅAS publishes the year's date, venue and ticket sale, all of which move from year to year.",
    source: "https://studentkaren.fi/en/labour-day/little-walpurgis/",
    checked: "2026-08-01",
    expires: "2027-03-01",
    audiences: ALL,
    institution: "abo-akademi",
    status: "verified",
    owner: "board",
    volatility: "low",
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

/**
 * True once a fact's `expires` date has passed, so a surface can say the claim
 * is awaiting re-verification instead of going on asserting it under a stale
 * checked date. This is the spec's central mitigation for the December
 * re-verification simply not happening.
 *
 * `now` defaults to the current time, which on a static export is BUILD time.
 * That is intended: rebuilding the site is exactly the moment the board can
 * act on being told a claim is overdue.
 *
 * The comparison is deliberately byte-for-byte the same rule as
 * findExpiredFacts in scripts/check-facts.mjs, so the page and the check
 * script can never disagree about whether a fact has lapsed. Both compare
 * against the start of the expiry day, so the expiry date itself is not yet
 * past. Covered by scripts/check-facts.test.mjs.
 */
export function isFactExpired(
  fact: Pick<Fact, "status" | "expires">,
  now: Date = new Date(),
): boolean {
  if (fact.status === "owner-confirm") return false;
  if (!fact.expires) return false;
  return new Date(fact.expires) < now;
}

/** Serialises the register so scripts/check-facts.mjs can validate the real data. */
export function factsAsJson(): string {
  return JSON.stringify(ARRIVAL_FACTS, null, 2);
}
