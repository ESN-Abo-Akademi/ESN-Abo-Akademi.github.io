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
// Editorial rules that bind this file: no em dashes, `Turku (Åbo)` on first
// mention, no competing cafe, nightlife, restaurant or day-trip lists, no
// advice stated as universal where the register branches it by student type,
// and the other Turku sections are never named or counted.
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
  /** Short prose items that are guidance rather than sourced fact. */
  notes: GuideNote[];
}

/** One renderable item, in the order it belongs under the intro. */
export type GuideBlock =
  | { kind: "note"; text: string }
  | { kind: "fact"; id: string };

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
      "Turku is the Finnish name for the city and Åbo is the Swedish name. Same place, two languages. You will meet both on signs, on tickets and in our own name.",
      "If you need a residence permit, start that application before anything else on this page. Most things here can be rushed later. Immigration cannot.",
      "Pack layers rather than one heavy coat. Buildings here are warm and the outdoors is not, and you spend your day moving between the two.",
      "Bring the medication you rely on and its prescription. Setting up a repeat prescription in a new country takes longer than you expect.",
      "Leave room in the bag. You will buy bedding, a reflector and probably a set of overalls in your first weeks.",
      {
        text: "Collect every signature and stamp your home university might want while you are still on the same campus as the people who sign things.",
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
      "Most guides stop at the airport. The hours between landing and getting inside your own room are where things actually go wrong, so plan that stretch as carefully as you planned the flight.",
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
    notes: [
      "Go to orientation even if you think you already know the material. It is where your credentials, your tutor and about half your friends come from.",
      "Write down who to ask for what: your tutor for daily questions, the international coordinators for courses and credits, your housing provider for the flat, and us for the rest.",
      "Bring your receipts when you collect the starting package, on paper or as a screenshot that opens without WiFi.",
      {
        text: "Whether you join the student union or already belong to it depends on what kind of student you are, so read your row before you queue at a desk. Either way, settle it in your first week, because the starting package and the student card both assume it is done.",
        after: "studentUnion",
      },
      {
        text: "Whether the subsidised lunch is open to you depends on your student type as well. If it is, it is the single biggest difference between a comfortable month and a tight one.",
        after: "mealSubsidyDoctoral",
      },
      {
        text: "Buy the membership first, then bring the confirmation, your identification and proof of student status to the office, and a board member will issue the card.",
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
      "Your quarter is small. Almost everything you need day to day sits within five minutes' walk of the Cathedral and the Åbo Akademi buildings, and learning that square properly is worth more than any list of places you would visit once.",
    factIds: [
      "library",
      "vaskiLibrary",
      "alcohol",
      "languageOfInstruction",
      "languageCentre",
    ],
    notes: [
      "Start with Kårkaféerna, the student union's own cafés. They are inside the quarter, they are run for students rather than for visitors, and you can sit in one with a laptop all afternoon.",
      "Ask whoever is behind the counter what they would order, and ask the person next to you in the queue where they go on a Thursday. That finds better places than a printed list, and it never goes stale, which is why we do not print one.",
      "For what is on in the city, use Turku's own event listings. For what is on with us, our events page is the live one, and it is worth coming to the first few even when you are tired. The people you meet in your first weeks tend to be the people you travel with in spring.",
      "Bottles and cans carry a deposit called pantti that you get back at the shop. Reduced stickers go on food late in the day. Tipping is not expected.",
      {
        text: "When your flat feels small and the weather is bad, use a library as a living room. It is warm, it is quiet, and you can stay all day without buying anything.",
        after: "vaskiLibrary",
      },
      {
        text: "Do not assume everything will happen in English. Check the language of instruction for your own programme before you arrive, and ask your department what it handles in English.",
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
    ...section.factIds.flatMap((id): GuideBlock[] => [
      { kind: "fact", id },
      ...boundTo(id),
    ]),
  ];
}

// Fails the build if a note binds to a fact its section does not render,
// which would otherwise drop the note without a word. Same guard as the one
// AudienceTable runs over its own rows.
GUIDE_SECTIONS.forEach((section) =>
  section.notes.forEach((note) => {
    if (typeof note !== "string" && !section.factIds.includes(note.after)) {
      throw new Error(
        `Section "${section.id}" binds a note to "${note.after}", which is not in its factIds.`,
      );
    }
  }),
);
