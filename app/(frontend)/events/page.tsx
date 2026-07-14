import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  For,
  Card,
} from "@chakra-ui/react";
import {
  Drama,
  Utensils,
  Music,
  PartyPopper,
  Users,
  Globe,
  Beer,
  Flame,
  Waves,
  Medal,
  Sun,
  Snowflake,
  BookOpen,
  Trees,
  Wine,
  Gift,
  Shirt,
} from "lucide-react";
import Section from "@/components/ui/section";
import { EventsHero } from "@/components/ui/hero";
import { TripDetail, type TripDetailProps } from "@/components/ui/detail";

const CATEGORIES = [
  { label: "Sitz Parties", color: "esn.magenta" },
  { label: "Food Nights", color: "esn.orange" },
  { label: "Bar Crawls", color: "esn.cyan" },
  { label: "Sauna Nights", color: "esn.green" },
  { label: "Cottage Weekends", color: "esn.darkBlue" },
];

const EVENTS: Omit<TripDetailProps, "index">[] = [
  {
    color: "esn.magenta",
    gradient: "linear-gradient(170deg, #1a0a20 0%, #2a0d30 45%, #3a1a45 100%)",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1681841766171-fdb1554c909d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Various venues, Turku",
    title: "Themed Sitz",
    dateRange: "Spring & Autumn",
    duration: "One evening · costumes on",
    featured: true,
    eyebrow: "Themed dinner party · Twice a year",
    description:
      "A sitz is a Nordic student-dinner tradition: a full sit-down dinner with songs, toasts, and a running order, all in costume. ESN Åbo Akademi runs a Disney sitz every spring and a Harry Potter sitz every autumn.",
    highlights: [
      { icon: Drama, label: "Costumes" },
      { icon: Utensils, label: "Formal dinner" },
      { icon: Music, label: "Sitz songs" },
      { icon: PartyPopper, label: "After-party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.orange",
    gradient: "linear-gradient(170deg, #1a1008 0%, #2a1a0d 45%, #301e10 100%)",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "International\nFood Night",
    dateRange: "Every semester",
    duration: "One evening",
    eyebrow: "Cultural · Potluck",
    description:
      "Bring a dish from home and taste the world without leaving Turku. Every exchange student's chance to show off (or discover) a national cuisine.",
    highlights: [
      { icon: Utensils, label: "Potluck dinner" },
      { icon: Globe, label: "Cultures" },
      { icon: Users, label: "New friends" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0a1828 0%, #0d2540 45%, #1a3a5a 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1558210598-89ba75b1724e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "Bar Crawls &\nPub Nights",
    dateRange: "Monthly",
    duration: "One evening",
    eyebrow: "Nightlife · Social",
    description:
      "A guided tour through Turku's bars with fellow exchange students: drink specials, new faces, and a proper introduction to the local nightlife.",
    highlights: [
      { icon: Beer, label: "Drink specials" },
      { icon: Users, label: "New friends" },
      { icon: Music, label: "Live music venues" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.green",
    gradient: "linear-gradient(170deg, #0a1e14 0%, #0d2a1a 45%, #1a3a28 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1676452470766-6041f4f65c9b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "Traditional Finnish\nSauna Night",
    dateRange: "Every semester",
    duration: "One evening",
    eyebrow: "Cultural · Traditional",
    description:
      "The real Finnish sauna experience: heat, good company, and a proper introduction to one of the country's most cherished traditions.",
    highlights: [
      { icon: Flame, label: "Sauna" },
      { icon: Waves, label: "Cold plunge" },
      { icon: Users, label: "Social" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.darkBlue",
    gradient: "linear-gradient(170deg, #0d1a2e 0%, #162540 45%, #1e3050 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1508059937316-a7ec25086d99?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Ahtela camping area",
    title: "Ahtela Cottage\nWeekend",
    dateRange: "End of April / June",
    duration: "Weekend · 2 nights",
    eyebrow: "Outdoors · Weekend trip",
    description:
      "Over 40 hectares of cottages on the coast, with sauna, cottage olympic games, karaoke, and a dance party. Price includes transport from Turku, meals, and accommodation.",
    highlights: [
      { icon: Flame, label: "Sauna" },
      { icon: Medal, label: "Cottage olympics" },
      { icon: Music, label: "Karaoke" },
      { icon: PartyPopper, label: "Dance party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
];

const REGULAR_HANGOUTS = [
  {
    title: "Movie Nights & Board Games",
    description: "Casual, low-key evenings, no plans, just good company.",
    icon: BookOpen,
    dot: "esn.cyan",
  },
  {
    title: "Bi-weekly Office Game Night",
    description: "Drop by the ESN ÅA office at Geologicum every other week.",
    icon: Users,
    dot: "esn.magenta",
  },
  {
    title: "Hiking & Outdoor Adventures",
    description: "Escape Forest, mushroom picking, and day hikes near Turku.",
    icon: Trees,
    dot: "esn.green",
  },
  {
    title: "Ice Skating, Skiing & Climbing",
    description: "Seasonal sport meetups for however cold it gets.",
    icon: Snowflake,
    dot: "esn.orange",
  },
];

const FINNISH_TRADITIONS = [
  {
    title: "Vappu",
    description:
      "May 1st: Finland's biggest student holiday. Overalls, picnics, and sparkling wine.",
    icon: PartyPopper,
    color: "esn.magenta",
  },
  {
    title: "Appro",
    description:
      "The pre-party before a sitz, a Finnish student-culture staple in its own right.",
    icon: Wine,
    color: "esn.orange",
  },
  {
    title: "Juhannus",
    description:
      "Midsummer in late June: bonfires, cottages, and a city that empties out.",
    icon: Sun,
    color: "esn.green",
  },
  {
    title: "Pikkujoulu",
    description:
      '"Little Christmas," the pre-Christmas party tradition every November/December.',
    icon: Gift,
    color: "esn.cyan",
  },
  {
    title: "Haalarit & Patches",
    description:
      "Student overalls covered in event patches, Finnish student culture's badge of honour.",
    icon: Shirt,
    color: "esn.darkBlue",
  },
];

export default function EventsPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py="12">
        <EventsHero categories={CATEGORIES} />
      </Section>

      <Section py="12">
        <VStack gap="8" w="full">
          <For each={EVENTS}>
            {(event, index) => (
              <TripDetail key={event.title} index={index + 1} {...event} />
            )}
          </For>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <Heading as="h2" size="xl">
            Also happening regularly
          </Heading>
          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="4">
            <For each={REGULAR_HANGOUTS}>
              {(hangout) => (
                <Card.Root key={hangout.title}>
                  <Card.Body>
                    <HStack gap="2" mb="2">
                      <Box w="3" h="3" borderRadius="full" bg={hangout.dot} />
                      <Icon boxSize="4" color="fg.muted">
                        <hangout.icon />
                      </Icon>
                    </HStack>
                    <Text fontWeight="bold" mb="1">
                      {hangout.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {hangout.description}
                    </Text>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="1">
            <Heading as="h2" size="xl">
              Finnish traditions worth knowing
            </Heading>
            <Text color="fg.muted">
              A few local customs you&apos;ll run into during your exchange,
              ESN-organised or not.
            </Text>
          </VStack>
          <Grid
            w="full"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="4">
            <For each={FINNISH_TRADITIONS}>
              {(tradition) => (
                <Card.Root
                  key={tradition.title}
                  variant="outline"
                  colorPalette={tradition.color}>
                  <Card.Body gap="2">
                    <Icon boxSize="6" color="colorPalette.fg">
                      <tradition.icon />
                    </Icon>
                    <Card.Title>{tradition.title}</Card.Title>
                    <Card.Description>{tradition.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </VStack>
      </Section>
    </>
  );
}
