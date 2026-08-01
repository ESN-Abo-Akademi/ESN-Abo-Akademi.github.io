// The survival guide's prose, section by section, in journey order.
//
// This file holds writing and nothing else. Every number, price, date,
// opening time and eligibility rule lives in content/arrival-facts.ts and is
// pulled in by id through `factIds`. Nothing here restates a fact, because a
// fact written in two places gets re-verified in one of them.
//
// `notes` are guidance a volunteer would give from experience: pack layers,
// ask at the desk, go to the first events. If a note starts wanting a figure
// or a source, it is a fact and belongs in the register.
//
// HOW A SECTION RENDERS. A note is either a plain string, which is general
// guidance for the whole section, or `{ text, after }`, which binds it to one
// fact so it renders directly beneath that fact. The binding exists because
// this prose deliberately never names a service, so a note like "find your row
// before you are ill" is a non-sequitur unless it sits next to the fact it
// belongs to. Call `sectionBlocks(section)` for the render order: unbound
// notes first, then each fact followed by its own notes. A binding that names
// an id outside the section's `factIds` throws at module load rather than
// silently dropping the note.
//
// A fact block may also carry a `fallback`, taken from the section's
// `factFallbacks`. It is set for facts still awaiting owner confirmation,
// which `getFact` refuses to publish: render those with `FactNote` and this
// string. The fallback is copy, so it lives here and not in a component.
//
// WHO THIS IS FOR. Every student in Turku (Åbo), whichever institution they
// study at, not only students at Åbo Akademi. That is a rule about the
// writing, not just the framing: the spine of this guide stays
// institution-neutral, and a fact that holds only at Åbo Akademi carries the
// register's `institution: "abo-akademi"` flag, which renders as a marker
// next to the claim.
//
// A marker on its own still leaves a reader at another institution stuck, so
// where an Åbo Akademi fact would strand them, this file carries a short
// prose pointer bound to that fact, naming the equivalent to go and find:
// their own student union, their own student system and WiFi, their own
// library, their own term dates. Those pointers carry NO numbers, addresses,
// URLs or opening hours for any other institution, deliberately. ESN Åbo
// Akademi cannot re-verify facts it does not control and will not hear about
// when they change, so publishing them would create exactly the rot the
// register exists to prevent. Name the thing; let the reader look it up.
//
// Editorial rules that bind this file: no em dashes, `Turku (Åbo)` on first
// mention, no competing cafe, nightlife, restaurant or day-trip lists, no
// advice stated as universal where the register branches it by student type,
// and the other Turku sections are never named or counted. Naming other
// institutions and their student unions is fine and is required by the rule
// above; that last rule is about ESN sections only. Name them accurately or
// not at all: TUAS is an institution and TYY and Novium are student unions,
// and a pointer that tells a reader to go and find their own union is the
// worst possible place to blur the two.
//
// See docs/superpowers/specs/2026-08-01-esn-aa-arrival-content-design.md

/** A note bound to one fact, rendered directly beneath it. */
export interface BoundNote {
  text: string;
  /** A fact id from the same section's `factIds`. */
  after: string;
}

export type GuideNote = string | BoundNote;

export interface GuideSection {
  id: string;
  title: string;
  /** One or two sentences setting up the section. Prose only, no facts. */
  intro: string;
  /** Register fact ids rendered inside this section, in order. */
  factIds: string[];
  /**
   * Prose to show instead of a fact still awaiting owner confirmation, keyed
   * by fact id. `getFact` refuses to publish such a fact and `FactNote`
   * requires a fallback, so the fallback is copy and belongs in this file
   * rather than hardcoded in a component.
   */
  factFallbacks?: Record<string, string>;
  /** Short prose items that are guidance rather than sourced fact. */
  notes: GuideNote[];
}

/** One renderable item, in the order it belongs under the intro. */
export type GuideBlock =
  | { kind: "note"; text: string }
  | { kind: "fact"; id: string; fallback?: string };

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "before-you-travel",
    title: "Before you travel",
    intro:
      "Three things decide how your first month goes: the term dates, a flat in Turku (Åbo) and a budget. Each has a queue in front of it, and the housing queue opens on a fixed date and fills fast.",
    factIds: [
      "arrivalAutumn2026",
      "arrivalSpring2027",
      "tysApplication",
      "livingCosts",
      "banking",
    ],
    notes: [
      "This guide is for every student in Turku (Åbo), whichever institution you study at. Most of what follows is the same wherever you are enrolled, because it comes from the city, from Kela, from Föli, or from services the institutions run together. Where something is specific to Åbo Akademi, or to us, it carries an Åbo Akademi marker, and the line next to it tells you what to go and find at your own institution instead.",
      "Turku is the Finnish name for the city and Åbo is the Swedish name. Same place, two languages. You will meet both on signs, on tickets and in our own name.",
      "Streets carry both names too, and the two versions of one street often look nothing like each other. A street sign, a bus display and a map app may each show you a different one, and addresses in this guide and elsewhere are written sometimes in one language and sometimes in the other. If an address does not match what is in front of you, check the other language before you decide you are lost.",
      "If you need a residence permit, start that application before anything else on this page. Most things here can be rushed later. Immigration cannot.",
      "Pack layers rather than one heavy coat. Buildings here are warm and the outdoors is not, and you spend your day moving between the two.",
      "Bring the medication you rely on and its prescription. Setting up a repeat prescription in a new country takes longer than you expect.",
      "Leave room in the bag. You will buy bedding, a reflector and probably a set of overalls in your first weeks.",
      "Collect every signature and stamp your home university might want while you are still on the same campus as the people who sign things.",
      {
        text: "Those two dates are Åbo Akademi's. Term dates, Arrival Day and orientation all differ from one institution to another, sometimes by a week or more, so take yours from your own institution and use these only for the shape of the semester. Everything else on this page keys off your own dates, not these.",
        after: "arrivalSpring2027",
      },
      {
        text: "Apply on the day the window opens, not on the day your acceptance letter arrives. Those are two different dates, and the rooms go early.",
        after: "tysApplication",
      },
      {
        text: "Verify the provider, the contract, the payee and the account details through contact channels you found yourself, not ones sent to you in a message. Real student housing may well invoice you before you arrive, so the warning sign is someone you cannot check, not an early bill.",
        after: "tysApplication",
      },
    ],
  },
  {
    id: "arrival-night",
    title: "Arrival night",
    intro:
      "Your journey does not end at the airport. The hours between landing and getting inside your own room are where things actually go wrong, so plan that stretch as carefully as you planned the flight.",
    factIds: ["tysKeyLocker", "startingPackage", "emergency"],
    notes: [
      "Most students land at Helsinki-Vantaa rather than Turku, then take a train or a coach west. Buy the onward ticket before you land if you can, and give the connection more slack than the timetable suggests.",
      "Trains stop at Kupittaa and then at Turku Central Station. If your room is out towards the eastern campuses, get off at Kupittaa. If you are heading for the Cathedral quarter and the Åbo Akademi buildings, stay on to the central station. Check your address on a map before you board.",
      "Do not count on a full grocery run on the night you land. Something to eat in your bag and a bottle of water will get you to the morning.",
      {
        text: "Tell your housing provider your real arrival time in writing before you fly, and get a name and a number that answers late in the evening. A key locker is only as good as the person who picks up when it does not open.",
        after: "tysKeyLocker",
      },
      {
        text: "Try the key while there is still someone to call. A key that fails in the afternoon and a key that fails at midnight are very different problems.",
        after: "tysKeyLocker",
      },
      {
        text: "Pack a sleeping bag liner or a travel towel, or plan to buy bedding on your way in. This is the one that catches almost everybody.",
        after: "startingPackage",
      },
      {
        text: "Put these in your phone before you travel, not after you need them.",
        after: "emergency",
      },
    ],
  },
  {
    id: "first-week",
    title: "First week",
    intro:
      "Parts of this week depend on other parts of it, so the order matters more than the speed. Orientation comes first, because your university credentials come out of it and nearly everything digital hangs off those.",
    factIds: [
      "exchangeContact",
      "studentUnion",
      "mealSubsidy",
      "mealSubsidyDoctoral",
      "esncardPrice",
      "officeAddress",
      "officeHours",
      "dnaSim",
    ],
    factFallbacks: {
      officeHours:
        "Our opening hours change every semester, so we do not print them here. The current ones are on our Instagram, @esnaboakademi. Check before you walk over.",
    },
    notes: [
      "Go to orientation even if you think you already know the material. It is where your credentials, your tutor and about half your friends come from.",
      "Write down who to ask for what: your tutor for daily questions, the international coordinators for courses and credits, your housing provider for the flat, and us for the rest.",
      "Bring your receipts when you collect the starting package, on paper or as a screenshot that opens without WiFi.",
      {
        // Careful here. This pointer used to say "Peppi and Eduroam are Åbo
        // Akademi's", which is two false claims in one line: other
        // institutions in the city run Peppi as well, and eduroam is a global
        // federation that belongs to no institution at all. A reader
        // elsewhere was told the system they will actually use is somebody
        // else's, and sent looking for a differently named one that does not
        // exist. Say what a new student can rely on (you are given these at
        // orientation, whatever they are called where you study) and what we
        // can re-verify (what Åbo Akademi's are called). Never assert what
        // another institution's are, or are not.
        text: "Wherever you study, you are given an IT account, a student system and campus WiFi at orientation, whatever they are called at your institution. At Åbo Akademi they are the ones above: your ÅAU credentials, Peppi and Eduroam. Log in on the first day rather than the day you need them, because almost everything else digital hangs off them. Your own international office, not ours, is the one that signs your paperwork.",
        after: "exchangeContact",
      },
      {
        text: "Whether you join the student union or already belong to it depends on what kind of student you are, so read your row before you queue at a desk. Either way, settle it in your first week, because the starting package and the student card both assume it is done.",
        after: "studentUnion",
      },
      {
        // TUAS is an institution, not a student union: its union has its own
        // name, which this line deliberately does not guess at. The
        // `startingPackage` entry in the register states exactly who runs the
        // store, in the source's own careful wording, and renders it earlier
        // in the guide, so this pointer does not need to restate it and must
        // not blur it. Name only what we are sure of.
        text: "Åbo Akademi's student union is ÅAS, and every institution in the city has its own, TYY and Novium among them. Find yours, because your membership, your fee and your student card come from it and not from us.",
        after: "studentUnion",
      },
      {
        text: "Whether the subsidised lunch is open to you depends on your student type as well. If it is, it is the single biggest difference between a comfortable month and a tight one.",
        after: "mealSubsidyDoctoral",
      },
      {
        text: "Buy the ESN membership on Kide.app first. Then bring the confirmation, your identification and proof of student status to the office, and a board member will issue the card. This is ours, and it is a separate thing from student union membership.",
        after: "esncardPrice",
      },
      {
        text: "Come and say hello. You do not need a reason. We would rather answer your question in a minute than watch you guess at it for a week.",
        after: "officeAddress",
      },
      {
        text: "We also run a WhatsApp community for arriving students. Ask at the office or message us on Instagram and we will send you the current invite.",
        after: "dnaSim",
      },
    ],
  },
  {
    id: "living-here",
    title: "Living here",
    intro:
      "Your quarter is small. Whichever campus you are attached to, almost everything you need day to day sits in a few streets around it, and for Åbo Akademi that is the square by the Cathedral. This section is about learning yours properly: the few minutes of walking you will do every day for a year.",
    factIds: [
      "library",
      "vaskiLibrary",
      "alcohol",
      "languageOfInstruction",
      "languageCentre",
    ],
    notes: [
      {
        text: "Every institution in Turku (Åbo) has its own library and its own course book collection, and Arken and Astra are Åbo Akademi's. Find yours in the first week. A course book you borrow is a course book you did not buy, and the reading lists all assume you found the shelf.",
        after: "library",
      },
      "Start with Kårkaféerna, the Åbo Akademi student union's own cafés. They are inside the quarter, they are run for students rather than for visitors, and you can sit in one with a laptop all afternoon.",
      "Ask whoever is behind the counter what they would order, and ask the person next to you in the queue where they go on a Thursday. We do not print our own list of places here, because anything we printed would have moved on by the time you read it, and because asking is how you end up with company rather than an address.",
      "For what is on in the city, use Turku's own event listings. For what is on with us, our events page is the live one, and it is worth coming to the first few even when you are tired. The people you meet in your first weeks tend to be the people you travel with in spring.",
      "Bottles and cans carry a deposit called pantti that you get back at the shop. Reduced stickers go on food late in the day. Tipping is not expected.",
      {
        text: "When your flat feels small and the weather is bad, use a library as a living room. It is warm, it is quiet, and you can stay all day without buying anything.",
        after: "vaskiLibrary",
      },
      {
        text: "Say something the first time a room slides out of English and you lose the thread. Asking people to switch back is ordinary here and nobody will think less of you for it. Sitting quietly through a whole term is the thing that actually goes wrong.",
        after: "languageOfInstruction",
      },
      {
        text: "Learning some Swedish or Finnish is worth doing anyway. It changes how the city feels, and it changes how people talk to you.",
        after: "languageCentre",
      },
    ],
  },
  {
    id: "getting-around-and-getting-help",
    title: "Getting around, and getting help",
    intro:
      "Two things newcomers leave too late: working out how they will cross the city, and working out who to tell when something is wrong. Both are much easier to arrange in a good week than in a bad one.",
    factIds: [
      "foliStudentCard",
      "foliCardCost",
      "healthExchange",
      "healthDegree",
      "healthDoctoral",
      "daylight",
      "reflector",
      "campusSport",
      "nyyti",
      "internationalHouse",
    ],
    notes: [
      "Read the travel-card rules before you queue for one. This is the most commonly wasted morning of the first week, and the answer is different depending on what kind of student you are.",
      "Which health service you use depends on your student type too, and this is where guessing costs the most. Find your row before you are ill, not while you are.",
      "Asking for help early is normal here, and it is not a sign that you are failing. Some problems are bigger than ESN or your university, and there is a place for those too.",
      {
        text: "The dark season is real and it arrives sooner than most people expect. Get outside while it is light, keep your sleep at the same hours every day, and treat a flat week in the middle of autumn as ordinary rather than a sign that something is wrong with you.",
        after: "daylight",
      },
      {
        text: "Buy one in your first week and clip it to the coat you actually wear, not the good one in the wardrobe.",
        after: "reflector",
      },
      {
        text: "If exercise is part of how you stay level, arrange it early rather than once the dark has set in.",
        after: "campusSport",
      },
    ],
  },
  {
    id: "culture-and-beyond",
    title: "Åbo Akademi culture, and what the words mean",
    intro:
      "Sooner or later somebody hands you an invitation in Swedish with three words in it you have never seen. Here is what they mean, so you can say yes without having to ask first.",
    factIds: ["wappen", "lillaWappen"],
    notes: [
      "Halare are the overalls. The colour comes from your subject association, so a room of them maps who studies what. Ours are blue.",
      "Subject associations are the clubs attached to your field. They run the overalls, the dinners and most of the social calendar. Joining one is the fastest way to meet Finnish students.",
      "A sitz is a sit-down dinner with singing. You get a songbook, you will not know the tunes, and neither does anyone else in their first term. Årsfest is the student union's annual ball, and the day after comes silliz: the same crowd in overalls, with a band.",
      "Beyond the city, the archipelago starts almost at the end of the bus line. Our trips go up on the events page.",
      "If a word in an invitation stops you, ask us. None of us was born knowing them either.",
    ],
  },
];

/**
 * Flattens a section into render order: unbound notes, then each fact
 * followed by the notes bound to it. Task 4's component maps this once
 * rather than reconciling two arrays itself.
 */
export function sectionBlocks(section: GuideSection): GuideBlock[] {
  const boundTo = (id: string): GuideBlock[] =>
    section.notes
      .filter(
        (note): note is BoundNote =>
          typeof note !== "string" && note.after === id,
      )
      .map((note) => ({ kind: "note", text: note.text }));

  return [
    ...section.notes
      .filter((note): note is string => typeof note === "string")
      .map((text): GuideBlock => ({ kind: "note", text })),
    ...section.factIds.flatMap((id): GuideBlock[] => {
      const fallback = section.factFallbacks?.[id];
      return [
        fallback === undefined
          ? { kind: "fact", id }
          : { kind: "fact", id, fallback },
        ...boundTo(id),
      ];
    }),
  ];
}

// Fails the build if a note binds to a fact its section does not render, or
// if a fallback is written for a fact the section does not render. Either
// would otherwise be dropped without a word. Same guard as the one
// AudienceTable runs over its own rows.
GUIDE_SECTIONS.forEach((section) => {
  section.notes.forEach((note) => {
    if (typeof note !== "string" && !section.factIds.includes(note.after)) {
      throw new Error(
        `Section "${section.id}" binds a note to "${note.after}", which is not in its factIds.`,
      );
    }
  });
  Object.keys(section.factFallbacks ?? {}).forEach((id) => {
    if (!section.factIds.includes(id)) {
      throw new Error(
        `Section "${section.id}" has a fallback for "${id}", which is not in its factIds.`,
      );
    }
  });
});
