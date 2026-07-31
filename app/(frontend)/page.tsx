import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Grid,
  For,
  Card,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Section from "@/components/ui/section";
import HomeHero from "@/components/ui/hero";
import { CTACard, TripCard } from "@/components/ui/card";

const STATS = [
  { number: "32", label: "years in Turku (Åbo)" },
  { number: "2nd", label: "oldest ESN section in Finland" },
  { number: "100%", label: "volunteer-run, non-profit" },
];

const TRIPS = [
  {
    title: "Lofoten Islands, Norway",
    image: "/scenery/ai-lofoten.jpg",
    duration: "29 Sep – 5 Oct",
    type: "From €475",
    color: "esn.green",
  },
  {
    title: "Iceland Adventure",
    image: "/scenery/ai-iceland.jpg",
    duration: "1 – 6 Oct",
    type: "From €539",
    color: "esn.magenta",
  },
  {
    title: "Baltic Countries Explorer",
    image: "/scenery/ai-tallinn.jpg",
    duration: "6 – 11 Oct",
    type: "From €339",
    color: "esn.orange",
  },
  {
    title: "Northern Lapland · Kilpisjärvi",
    image: "/scenery/ai-kilpisjarvi.jpg",
    duration: "Nov & Dec",
    type: "From €439",
    color: "esn.cyan",
  },
  {
    title: "Pirates of the Baltic Sea",
    image: "/scenery/ai-cruise.jpg",
    duration: "40 hours",
    type: "Cruise · ESN Finland",
    color: "esn.darkBlue",
  },
];

const EVENTS = [
  {
    date: "Aug 22–23 · 11:00–15:00",
    title: "Welcome Booth · Assarin",
    dot: "esn.cyan",
  },
  {
    date: "Aug 22–23 · 11:00–16:00",
    title: "Welcome Booth · TYS",
    dot: "esn.magenta",
  },
  {
    date: "Aug 24 · 12:00–16:00",
    title: "Welcome Booth · Educarium",
    dot: "esn.green",
  },
  {
    date: "Aug 27 · from 15:00",
    title: "Welcome Picnic",
    dot: "esn.orange",
  },
];

const LOCAL_PARTNERS = [
  { name: "Timetravels", href: "https://www.timetravels.com/" },
  { name: "Omena Hotels", href: "https://www.omenahotels.com/" },
  { name: "Saaristobaari", href: "https://www.saaristobaari.fi/" },
];

const INTERNATIONAL_PARTNERS = [
  {
    name: "Ryanair — official ESN airline",
    href: "https://www.esncard.org/ryanair",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section — full-bleed cinematic video */}
      <HomeHero stats={STATS} />

      {/* Trips Section */}
      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <HStack w="full" justifyContent="space-between">
            <Heading as="h2" size="xl">
              Autumn 2026 trips
            </Heading>
            <Text asChild color="link">
              <NextLink href="/trips">View all →</NextLink>
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
                  badges={[trip.type, trip.duration]}
                  color={trip.color}
                  title={trip.title}
                  imageSrc={trip.image}
                  detail="See the trips page for dates and availability"
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
            <Text asChild color="link">
              <NextLink href="/events">View calendar →</NextLink>
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

      {/* CTA Section */}
      <Section py="12">
        <VStack alignItems="center" gap="4">
          <CTACard />
        </VStack>
      </Section>

      {/* Partners Section */}
      <Section pt="0" pb="16">
        <VStack alignItems="center" gap="6" w="full">
          <VStack alignItems="center" gap="3">
            <Text
              fontWeight="700"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="wider"
              color="fg.muted">
              Local partners in Turku (Åbo)
            </Text>
            <HStack wrap="wrap" justifyContent="center" gap="3">
              {LOCAL_PARTNERS.map((partner) => (
                <ChakraLink
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}>
                  <HStack
                    px="5"
                    py="2.5"
                    borderWidth="1px"
                    borderColor="border"
                    borderRadius="full"
                    fontWeight="700">
                    <Text>{partner.name}</Text>
                  </HStack>
                </ChakraLink>
              ))}
              <HStack
                px="5"
                py="2.5"
                borderWidth="1px"
                borderStyle="dashed"
                borderColor="border"
                borderRadius="full"
                color="fg.muted">
                <Text fontSize="sm">More partners announced soon</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack alignItems="center" gap="3">
            <Text
              fontWeight="700"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="wider"
              color="fg.muted">
              International · across the ESN network
            </Text>
            <HStack wrap="wrap" justifyContent="center" gap="3">
              {INTERNATIONAL_PARTNERS.map((partner) => (
                <ChakraLink
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}>
                  <HStack
                    px="5"
                    py="2.5"
                    borderWidth="1px"
                    borderColor="border"
                    borderRadius="full"
                    fontWeight="700">
                    <Text>{partner.name}</Text>
                  </HStack>
                </ChakraLink>
              ))}
            </HStack>
            <Text fontSize="sm" color="fg.muted">
              Dozens more travel, housing, and lifestyle deals come with your
              ESNcard —{" "}
              <ChakraLink
                href="https://www.esncard.org/discounts"
                target="_blank"
                rel="noreferrer"
                color="link">
                browse the full partner directory
              </ChakraLink>
              .
            </Text>
          </VStack>
        </VStack>
      </Section>

      {/* Instagram follow strip */}
      <Section py="0">
        <VStack alignItems="center" gap="2">
          <ChakraLink
            href="https://www.instagram.com/esnaboakademi/"
            target="_blank"
            rel="noreferrer"
            color="fg"
            fontFamily="heading"
            fontWeight="700"
            fontSize={{ base: "lg", md: "xl" }}
            _hover={{ color: "esn.magenta.500", textDecoration: "none" }}>
            @esnaboakademi
          </ChakraLink>
          <Text fontSize="sm" color="fg.muted" textAlign="center">
            Parties, trips, and daily life — follow us on Instagram so you
            never miss a signup.
          </Text>
        </VStack>
      </Section>

      {/* Turku wave — the Aura currents + skyline from the section flag */}
      <Box as="section" w="full" pt="8" lineHeight="0" aria-hidden="false">
        <Image
          src="/turku-wave.svg"
          alt="Turku (Åbo) skyline over the Aura river currents, from the ESN Åbo Akademi flag"
          w="full"
          display="block"
        />
      </Box>
    </>
  );
}
