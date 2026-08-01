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
// Editorial rules that bind this file: no em dashes, `Turku (Åbo)` on first
// mention, no competing cafe, nightlife, restaurant or day-trip lists, the
// other Turku sections are never named or counted.
//
// See docs/superpowers/specs/2026-08-01-esn-aa-arrival-content-design.md

export interface GuideSection {
  id: string;
  title: string;
  /** One or two sentences setting up the section. Prose only, no facts. */
  intro: string;
  /** Register fact ids rendered inside this section, in order. */
  factIds: string[];
  /** Short prose items that are guidance rather than sourced fact. */
  notes: string[];
}

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "before-you-travel",
    title: "Before you travel",
    intro:
      "The work you do before you fly is the work that keeps your first week from going wrong. Housing, permits and money all sit behind a queue, and the queue is shortest on the day your acceptance letter from Åbo Akademi in Turku (Åbo) lands in your inbox.",
    factIds: [
      "arrivalAutumn2026",
      "arrivalSpring2027",
      "tysApplication",
      "livingCosts",
      "banking",
    ],
    notes: [
      "Turku is the Finnish name for the city and Åbo is the Swedish name. Same place, two languages. You will see both on signs, on tickets and in our own name.",
      "If you need a residence permit, start that application first, before anything else on this page. Most things here can be rushed later. Immigration cannot.",
      "Verify the provider, the contract, the payee and the account details through contact channels you found yourself, not ones sent to you in a message. Real student housing may well invoice you before you arrive, so the warning sign is a counterparty you cannot check, not an early bill.",
      "Ask your home university for every signature and stamp you might need while you are still on the same campus as the people who sign things.",
      "Pack layers rather than one heavy coat. Buildings here are warm and the outdoors is not, and you spend the day moving between them.",
      "Bring the medication you rely on, and its prescription. Setting up a repeat prescription in a new country takes longer than you expect.",
      "Leave room in the bag. You will buy bedding, a reflector and probably a set of overalls in your first weeks.",
    ],
  },
  {
    id: "arrival-night",
    title: "Your arrival night",
    intro:
      "Most guides stop at the airport. The hours between landing and getting inside your own room are where things actually go wrong, so plan that stretch as carefully as you planned the flight.",
    factIds: ["tysKeyLocker", "startingPackage", "emergency"],
    notes: [
      "Most students land at Helsinki-Vantaa rather than Turku, then take a train or a coach west. Buy the onward ticket before you land if you can, and give the connection more slack than the timetable suggests.",
      "Trains stop at Turku Central Station and at Kupittaa. Kupittaa is nearer the university area and a lot of the student housing, so check which one is closer to your address before you step off.",
      "Tell your housing provider your real arrival time, in writing, before you fly. Get a name and a phone number that answers late in the evening. A key locker is only as good as the person who picks up when it does not open.",
      "Try your key while there is still someone to call. A key that fails at midnight and a key that fails in the afternoon are very different problems.",
      "Pack a sleeping bag liner or a travel towel, or plan to buy bedding on your way in. This is the thing that catches almost everybody.",
      "Do not count on a full grocery run on the night you land. Something to eat in your bag and a bottle of water is enough to get you to the morning.",
      "Put the emergency number in your phone before you travel, not after you need it.",
    ],
  },
  {
    id: "first-week",
    title: "Your first week",
    intro:
      "Parts of this week depend on other parts of it, so the order matters more than the speed. Orientation comes first, because your university credentials come out of it and nearly everything digital hangs off those.",
    factIds: [
      "exchangeContact",
      "studentUnion",
      "mealSubsidy",
      "mealSubsidyDoctoral",
      "officeAddress",
      "dnaSim",
    ],
    notes: [
      "Go to orientation even if you think you already know the material. It is where your credentials, your tutor and about half your friends come from.",
      "Sort your student union membership early. Several other things assume it is already done, including the starting package.",
      "Bring your receipts when you collect the starting package, on paper or as a screenshot that opens without WiFi.",
      "Eat the student lunch. It is the single biggest difference between a comfortable month and a tight one, and it turns on one card.",
      "Write down who to ask for what in your first week: your tutor for daily questions, the international coordinators for anything about courses and credits, your housing provider for the flat, and us for everything social and everything you are embarrassed to ask an office about.",
      "Come and say hello at our office. You do not need a reason. We would rather answer your question in a minute than watch you guess at it for a week.",
      "Our opening hours move with the semester, so check our Instagram before you walk over rather than trusting anything printed.",
    ],
  },
  {
    id: "living-here",
    title: "Living here",
    intro:
      "Your quarter is small. Almost everything you need day to day sits within five minutes' walk of the Cathedral and the Åbo Akademi buildings, and learning that square properly is worth more than any list of places you would visit once.",
    factIds: [
      "foliStudentCard",
      "foliCardCost",
      "healthExchange",
      "healthDegree",
      "healthDoctoral",
      "alcohol",
      "daylight",
      "reflector",
      "vaskiLibrary",
      "nyyti",
      "internationalHouse",
      "campusSport",
      "library",
      "languageCentre",
    ],
    notes: [
      "Start with Kårkaféerna, the student union's own cafés. They are inside the quarter, they are run for students rather than for visitors, and nobody minds if you sit there with a laptop all afternoon.",
      "We do not publish a list of cafés, bars and restaurants. Those lists go stale within a semester and they tell you nothing about the city you are standing in. Walk the quarter instead, and ask whoever is behind the counter what they would order.",
      "For what is on in the city, use Turku's own event listings, which are kept current by people whose job that is. For what is on with us, our events page is the live one.",
      "Come to the first few ESN Åbo Akademi events even when you are tired. The people you meet in your first fortnight tend to be the people you travel with in spring.",
      "Read the travel-card rules before you queue for one. This is the most commonly wasted morning of the first week, and the answer is different depending on what kind of student you are.",
      "Which health service you use also depends on your student type, and it is the place where guessing costs the most. Find your row before you are ill, not while you are.",
      "Alcohol rules here have moved recently and are still moving. Check the current position rather than repeating what someone told you last year.",
      "Small habits save more than big decisions. Bottles and cans carry a deposit you get back at the shop, reduced stickers appear on food late in the day, and nobody expects a tip.",
      "The dark season is real and it arrives sooner than most people expect. Get outside while it is light, keep your sleep at the same hours every day, and treat a flat week in the middle of autumn as ordinary rather than as a sign that something is wrong with you.",
      "Buy a reflector in your first week and clip it to the coat you actually wear, not the good one in the wardrobe.",
      "When your flat feels small and the weather is bad, use the public library as a living room. It is warm, it is quiet, and nobody asks you to buy anything to sit there.",
      "Asking for help early is normal here and it is not a sign that you are failing. Some problems are bigger than ESN or your university, and there is a place for those too.",
      "Nobody expects you to arrive with Swedish or Finnish. Learning enough to read a sign and thank a cashier changes how the city feels, and the Language Centre is where to start.",
      "If exercise is part of how you stay level, arrange it in your first weeks rather than once the dark has set in.",
    ],
  },
  {
    id: "culture-and-beyond",
    title: "Åbo Akademi culture, and what the words mean",
    intro:
      "Sooner or later somebody hands you an invitation in Swedish with three words in it you have never seen. Here is what they mean, so you can say yes without having to ask first.",
    factIds: [],
    notes: [
      "Halare are the overalls. Your colour comes from your subject association, so a room full of them reads like a map of who studies what. At ESN Åbo Akademi ours are blue. Patches come from events and get sewn on as you go.",
      "Subject associations are the clubs attached to your field of study. They run the overalls, the dinners and most of the social calendar, and joining one is the fastest way to meet Finnish students rather than only other internationals.",
      "A sitz is a sit-down dinner with singing. You get a songbook, you will not know the tunes, and nobody in their first term does.",
      "Wappen is the first of May. Students take over Vårdberget, the hill in the middle of town, in caps and overalls, with a picnic. The weather is not consulted.",
      "Lilla Wappen falls at the end of September. At the sitz the chair says \"Students, autumn is here, turn your caps inside out\", and everyone turns their student cap inside out until spring. That is the whole ceremony, and people take it seriously.",
      "Årsfest is the student union's annual ball: formal dress, a banquet, speeches and dancing. The day after comes silliz, which is the same crowd in overalls, with a band and no ceremony at all.",
      "Beyond the city, the archipelago starts not far past the end of the bus line, and Stockholm and Mariehamn are a ferry ride away. We announce our own trips on the events page.",
      "If a word in an invitation stops you, ask us. Nobody in the section was born knowing these either.",
    ],
  },
];
