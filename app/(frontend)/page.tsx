import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Grid,
  For,
  Card,
  Separator,
} from "@chakra-ui/react";
import Section from "@/components/ui/section";
import HomeHero from "@/components/ui/hero";
import { CTACard, PartnerCard, TripCard } from "@/components/ui/card";

const STATS = [
  { number: "100+", label: "events per year" },
  { number: "2000+", label: "ESNcard discounts" },
  { number: "10+", label: "trips across Europe" },
];

const TRIPS = [
  {
    title: "Lofoten Islands, Norway",
    duration: "6 days",
    type: "ESN card discount · Svolvaer",
    spotsLeft: "4 spots left",
    color: "esn.green",
  },
  {
    title: "Pirates of the Baltic",
    duration: "3 days",
    type: "Cruise",
    spotsLeft: "12 spots",
    color: "esn.magenta",
  },
  {
    title: "Iceland",
    duration: "5 days",
    type: "Adventure",
    spotsLeft: "2 spots left",
    color: "esn.orange",
  },
  {
    title: "Finnish Lapland",
    duration: "4 days",
    type: "Winter",
    spotsLeft: "0 spots",
    color: "esn.cyan",
  },
  {
    title: "Baltic Countries",
    duration: "5 days",
    type: "Explorer",
    spotsLeft: "15 spots",
    color: "esn.green",
  },
];

const EVENTS = [
  {
    date: "Apr 3 · 19:30",
    title: "International Pub Night",
    dot: "esn.cyan",
  },
  {
    date: "Apr 7 · 18:30",
    title: "Retro Sitsfest",
    dot: "esn.magenta",
  },
  {
    date: "Apr 10 · 16:00",
    title: "City Tour Turku",
    dot: "esn.green",
  },
  {
    date: "Apr 15 · 18:00",
    title: "Board Game Night",
    dot: "esn.orange",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="bg.alternate" py="12">
        <HomeHero stats={STATS} />
      </Section>

      {/* Trips Section */}
      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <HStack w="full" justifyContent="space-between">
            <Heading as="h2" size="xl">
              TimeTravels trips
            </Heading>
            <Text color="link" cursor="pointer">
              View all →
            </Text>
          </HStack>

          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="4">
            <For each={TRIPS}>
              {(trip, index) => (
                <TripCard
                  key={`${trip.title}-${index}`}
                  badges={["Test", "Run"]}
                  color={"red"}
                  title="ssdsd"
                  tripStart={new Date("10 March 2026")}
                  tripEnd={new Date("12 March 2026")}
                />
              )}
            </For>
          </Grid>
        </VStack>
      </Section>

      {/* Events Section */}
      <Section>
        <VStack alignItems="flex-start" gap="8" w="full">
          <HStack w="full" justifyContent="space-between">
            <Heading as="h2" size="xl">
              Upcoming events
            </Heading>
            <Text color="link" cursor="pointer">
              View calendar →
            </Text>
          </HStack>

          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="4">
            <For each={EVENTS}>
              {(event) => (
                <Card.Root key={event.title}>
                  <Card.Body>
                    <HStack gap="2" mb="2">
                      <Box w="3" h="3" borderRadius="full" bg={event.dot} />
                      <Text fontSize="sm" color="fg.muted">
                        {event.date}
                      </Text>
                    </HStack>
                    <Text fontWeight="bold">{event.title}</Text>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </VStack>
      </Section>

      {/* CTA and Partners Section */}
      <Section py="12">
        <VStack alignItems="center" gap="4">
          <CTACard />
          <Separator size="md" w="90%" my="4"></Separator>
          <VStack alignItems="flex-start" gap="8" w="full">
            <Heading as="h4" color="fg.subtle">
              Our Partners
            </Heading>
            <HStack
              gap="8"
              wrap="wrap"
              alignItems="center"
              justifyContent="center">
              <For each={[0, 1, , 2, 3, 4]}>
                {(val) => <PartnerCard key={val} w=""></PartnerCard>}
              </For>
            </HStack>
          </VStack>
        </VStack>
      </Section>
    </>
  );
}
