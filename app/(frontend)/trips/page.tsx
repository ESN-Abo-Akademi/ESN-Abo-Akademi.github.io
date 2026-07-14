import { HStack, VStack, Text, Icon, For } from "@chakra-ui/react";
import {
  Dog,
  Mountain,
  Sparkles,
  Waves,
  Flame,
  Gauge,
  Footprints,
  Fish,
  Sun,
  Landmark,
  Castle,
  Drama,
  Beer,
  Utensils,
  Sailboat,
  Leaf,
  Building,
  Compass,
  Map,
  Ticket,
  Anchor,
} from "lucide-react";
import Section from "@/components/ui/section";
import { TripsHero } from "@/components/ui/hero";
import { TripDetail, type TripDetailProps } from "@/components/ui/detail";
import { FlagshipTripCard } from "@/components/ui/card";

const REGIONS = [
  { label: "Lapland", color: "esn.cyan" },
  { label: "Lofoten", color: "esn.green" },
  { label: "Baltic Countries", color: "esn.orange" },
  { label: "Åland", color: "esn.darkBlue" },
  { label: "Pirates of the Baltic Sea", color: "esn.magenta" },
];

const TRIPS: Omit<TripDetailProps, "index">[] = [
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0a1828 0%, #0d2540 45%, #1a3a5a 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Saariselkä, Finland",
    title: "Lapland\nSaariselkä",
    dateRange: "Feb 19 – 25",
    duration: "6 days · 5 nights",
    featured: true,
    eyebrow: "Winter · Timetravels",
    description:
      "Go beyond the Arctic Circle to stunning Saariselkä. Experience the real Finnish winter with huskies, skiing, arctic swimming, and cosy cottages with private saunas. Local guides are on hand throughout, and with any luck, the Northern Lights will put on a show.",
    highlights: [
      { icon: Dog, label: "Huskies" },
      { icon: Mountain, label: "Skiing" },
      { icon: Sparkles, label: "Northern Lights" },
      { icon: Waves, label: "Arctic swimming" },
      { icon: Flame, label: "Private sauna" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
  },
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0f1e32 0%, #1a2e4a 45%, #223858 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1742639008233-6747489ba7a4?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Levi, Finland",
    title: "Lapland\nLevi",
    dateRange: "Jan 15 – 19",
    duration: "4 days · 3 nights",
    eyebrow: "Winter · Ski resort · Timetravels",
    description:
      "Levi is one of Finland's premier ski resorts, sitting well above the Arctic Circle. From ice go-karts to husky safaris, Levi packs an absurd amount of adventure into just four days. Snowshoe hikes through the wilderness, downhill runs, and a sauna under the stars.",
    highlights: [
      { icon: Gauge, label: "Ice go-karts" },
      { icon: Mountain, label: "Downhill skiing" },
      { icon: Dog, label: "Husky safari" },
      { icon: Footprints, label: "Snowshoe hike" },
      { icon: Sparkles, label: "Northern Lights" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
  },
  {
    color: "esn.green",
    gradient: "linear-gradient(170deg, #0a1e14 0%, #0d2a1a 45%, #1a3a28 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1703356225451-e70d724c1926?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Svolvær, Norway",
    title: "Lofoten\nIslands",
    dateRange: "May 1 – 7",
    duration: "6 days · 5 nights",
    eyebrow: "Spring · Adventure · Timetravels",
    description:
      "The Lofoten archipelago is one of the most dramatic landscapes in Europe, with jagged peaks rising straight from the Arctic sea and red fishing cabins clinging to the shoreline. This spring trip combines outdoor adventure with the unique culture of Norway's far north under the midnight sun.",
    highlights: [
      { icon: Mountain, label: "Dramatic fjords" },
      { icon: Fish, label: "Fishing villages" },
      { icon: Sun, label: "Midnight sun" },
      { icon: Footprints, label: "Hiking trails" },
      { icon: Waves, label: "Sea kayaking" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
  },
  {
    color: "esn.orange",
    gradient: "linear-gradient(170deg, #1a1008 0%, #2a1a0d 45%, #301e10 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1564951537954-29dd59397b90?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tallinn · Riga · Vilnius",
    title: "Baltic\nCountries",
    dateRange: "Apr 17 – 21",
    duration: "4 days · 3 nights",
    eyebrow: "Spring · City explorer · Timetravels",
    description:
      "Three countries, three capitals, one unforgettable trip. Tallinn's fairy-tale medieval old town, Riga's grand art nouveau boulevards, and Vilnius's bohemian Užupis district: the Baltics pack history, culture, and incredible nightlife into one compact journey.",
    highlights: [
      { icon: Landmark, label: "Tallinn Old Town" },
      { icon: Castle, label: "Riga" },
      { icon: Drama, label: "Vilnius" },
      { icon: Beer, label: "Nightlife" },
      { icon: Utensils, label: "Local food" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
  },
  {
    color: "esn.darkBlue",
    gradient: "linear-gradient(170deg, #0d1a2e 0%, #162540 45%, #1e3050 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1701466339485-3e6f08689304?q=80&w=562&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Mariehamn, Åland",
    title: "Åland\nIslands",
    dateRange: "May 2 – 4",
    duration: "2 days · 1 night",
    eyebrow: "Spring · ESN ÅA own trip",
    description:
      "Åland is a unique autonomous archipelago sitting between Finland and Sweden: Swedish-speaking, Finnish by law, and unlike anywhere else. Organised directly by ESN ÅA, this trip departs by Viking Line ferry from Turku harbour. A short but genuinely special trip.",
    highlights: [
      { icon: Sailboat, label: "Viking Line ferry" },
      { icon: Leaf, label: "Nature walks" },
      { icon: Building, label: "Mariehamn" },
      { icon: Compass, label: "Unique culture" },
      { icon: Map, label: "Island hopping" },
    ],
    organizer: "Organised directly by ESN Åbo Akademi",
    ctaLabel: "Register on Kide.app",
  },
];

export default function TripsPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py="12">
        <TripsHero regions={REGIONS} />
      </Section>

      <Section py="12">
        <VStack gap="8" w="full">
          <For each={TRIPS}>
            {(trip, index) => (
              <TripDetail key={trip.title} index={index + 1} {...trip} />
            )}
          </For>
        </VStack>
      </Section>

      <Section py="12">
        <VStack gap="6" w="full">
          <FlagshipTripCard
            icon={Anchor}
            eyebrow="ESN Finland flagship · Biannual · Spring & Autumn"
            title="Pirates of the Baltic Sea"
            description="1,500+ students from all over Finland on one ship. A 40-hour cruise from Helsinki to Stockholm, the biggest ESN event in Finland, now in its 26th edition."
            highlights={[
              "Helsinki → Stockholm",
              "1,500+ students",
              "40 hours at sea",
              "26th edition 2025",
            ]}
            learnMoreLink="/trips/pirates-of-the-baltic-sea"
            buyTicketsLink="/trips/pirates-of-the-baltic-sea#esn-aa"
          />
        </VStack>
      </Section>
    </>
  );
}
