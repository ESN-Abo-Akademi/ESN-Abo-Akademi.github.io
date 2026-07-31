import type { Metadata } from "next";
import { VStack, For, Text, Link as ChakraLink } from "@chakra-ui/react";
import {
  Mountain,
  Sparkles,
  Waves,
  Snowflake,
  Footprints,
  Fish,
  Landmark,
  Castle,
  Drama,
  Beer,
  Utensils,
  Compass,
  Anchor,
} from "lucide-react";
import Section from "@/components/ui/section";
import { TripsHero } from "@/components/ui/hero";
import { TripDetail, type TripDetailProps } from "@/components/ui/detail";
import { FlagshipTripCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "Autumn 2026 student trips from Turku (Åbo): Lofoten, Iceland, the Baltic capitals, and Northern Lapland, plus the Pirates of the Baltic Sea cruise.",
};

const REGIONS = [
  { label: "Lofoten", color: "esn.green" },
  { label: "Iceland", color: "esn.magenta" },
  { label: "Baltic Countries", color: "esn.orange" },
  { label: "Northern Lapland", color: "esn.cyan" },
  { label: "Pirates of the Baltic Sea", color: "esn.magenta" },
];

const CATALOG_URL =
  "https://www.timetravels.com/student-trips/finland/esn-finland/esn-abo-akademi.html";

const TRIPS: Omit<TripDetailProps, "index">[] = [
  {
    color: "esn.green",
    gradient: "linear-gradient(170deg, #0a1e14 0%, #0d2a1a 45%, #1a3a28 100%)",
    imageURL: "/scenery/ai-lofoten.jpg",
    location: "Henningsvær & Kabelvåg, Norway",
    title: "Lofoten\nIslands",
    dateRange: "29 Sep – 5 Oct 2026",
    duration: "6 nights · from €475",
    featured: true,
    eyebrow: "Autumn · Adventure · Timetravels",
    description:
      "The Lofoten archipelago is one of the most dramatic landscapes in Europe: jagged peaks rising straight from the Arctic sea, and red fishing cabins clinging to the shoreline in Henningsvær and Kabelvåg. As autumn darkness returns, so do the Northern Lights.",
    highlights: [
      { icon: Mountain, label: "Dramatic fjords" },
      { icon: Fish, label: "Fishing villages" },
      { icon: Footprints, label: "Hiking trails" },
      { icon: Sparkles, label: "Northern Lights" },
      { icon: Waves, label: "Arctic sea" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
    ctaHref:
      "https://www.timetravels.com/adventure-trip-to-lofoten-0126-nl4-00000163.html",
  },
  {
    color: "esn.orange",
    gradient: "linear-gradient(170deg, #1a1008 0%, #2a1a0d 45%, #301e10 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1564951537954-29dd59397b90?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tallinn · Riga · Vilnius",
    title: "Baltic countries\nexplorer",
    dateRange: "6 – 11 Oct 2026",
    duration: "5 nights · from €339",
    eyebrow: "Autumn · City explorer · Timetravels",
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
    ctaHref:
      "https://www.timetravels.com/baltic-countries-explorer-0126-bah-00000131.html",
  },
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0a1828 0%, #0d2540 45%, #1a3a5a 100%)",
    imageURL: "/scenery/ai-kilpisjarvi.jpg",
    location: "Rovaniemi · Kilpisjärvi · Levi, Finland",
    title: "Northern Lapland\nKilpisjärvi",
    dateRange: "21 – 27 Nov 2026",
    duration: "6 nights · from €439",
    eyebrow: "Winter · Two departures · Timetravels",
    description:
      "Go far beyond the Arctic Circle to Kilpisjärvi at 69°N, in Finland's remote north-western arm, with stops in Rovaniemi and Levi along the way. Prime Northern Lights season, and a second departure runs 3–9 December if the first one fills up.",
    highlights: [
      { icon: Sparkles, label: "Northern Lights" },
      { icon: Mountain, label: "Arctic fells" },
      { icon: Landmark, label: "Three-country cairn" },
      { icon: Snowflake, label: "Polar night" },
    ],
    organizer: "Organised by Timetravels in partnership with ESN ÅA",
    ctaLabel: "Book on Timetravels",
    ctaHref:
      "https://www.timetravels.com/adventure-to-northern-lapland-kilpisjarvi-0126-lfkh-00000072.html",
  },
  {
    color: "esn.magenta",
    gradient: "linear-gradient(170deg, #1a0a20 0%, #2a0d30 45%, #3a1a45 100%)",
    imageURL: "/scenery/ai-iceland.jpg",
    location: "Reykjavik · Golden Circle · Snæfellsnes",
    title: "Iceland\nAdventure",
    dateRange: "1 – 6 Oct 2026",
    duration: "5 nights · from €539",
    eyebrow: "Autumn · ESN Finland trip · Timetravels",
    description:
      "Waterfalls and black-sand beaches on the South Coast, the geysers of the Golden Circle, and the Snæfellsnes peninsula. A second departure runs 8–13 October. Not on sale quite yet — check Timetravels for the sales opening.",
    highlights: [
      { icon: Waves, label: "Waterfalls" },
      { icon: Mountain, label: "Volcanic landscapes" },
      { icon: Compass, label: "Golden Circle" },
      { icon: Sparkles, label: "Northern Lights" },
    ],
    organizer: "Organised by Timetravels with ESN Finland",
    ctaLabel: "See dates on Timetravels",
    ctaHref:
      "https://www.timetravels.com/adventure-trip-to-iceland-0126a-is-00000029.html",
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
          <VStack gap="1" textAlign="center">
            <Text fontWeight="700" color="esn.orange.700">
              Book before 1 September and enter Timetravels&apos; raffle to win
              your money back.
            </Text>
            <Text fontSize="sm" color="fg.muted">
              All departures and live availability:{" "}
              <ChakraLink
                href={CATALOG_URL}
                target="_blank"
                rel="noreferrer"
                color="link">
                ESN Åbo Akademi on Timetravels
              </ChakraLink>
            </Text>
          </VStack>
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
            description="1,500+ students from all over Finland on one ship. A 40-hour cruise from Helsinki to Stockholm, the biggest ESN event in Finland, sailing every spring and autumn."
            highlights={[
              "Helsinki → Stockholm",
              "1,500+ students",
              "40 hours at sea",
              "Spring & autumn sailings",
            ]}
            learnMoreLink="https://cruise.pobs.fi/"
            buyTicketsLink="https://cruise.pobs.fi/sales/finland/esn-åbo-akademi"
          />
        </VStack>
      </Section>
    </>
  );
}
