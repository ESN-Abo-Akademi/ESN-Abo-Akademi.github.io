import {
  VStack,
  Heading,
  HStack,
  Button,
  Box,
  Container,
  Text,
  For,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { PatchWall, type Patch } from "./patchwall";
import { HeroVideo } from "./herovideo";

const HOME_PATCHES: Patch[] = [
  {
    bg: "white",
    logoSrc: "/esn-abo-logo.png",
    top: "6%",
    left: "8%",
    w: "62%",
    h: "48%",
    rotate: 0,
  },
  {
    bg: "esn.cyan.500",
    label: "Turku",
    sub: "(Åbo)",
    round: true,
    bottom: "6%",
    left: "0%",
    w: "38%",
    h: "38%",
    rotate: 6,
  },
  {
    bg: "esn.darkBlue.500",
    label: "Est. 1994",
    sub: "Åbo Akademi",
    bottom: "12%",
    right: "2%",
    w: "44%",
    h: "30%",
    rotate: -7,
  },
  {
    bg: "white",
    logoSrc: "/aura-swan.png",
    round: true,
    top: "2%",
    right: "6%",
    w: "30%",
    h: "30%",
    rotate: 10,
  },
];

const ABOUT_PATCHES: Patch[] = [
  {
    bg: "esn.darkBlue.500",
    label: "ESN ÅA",
    sub: "Est. 1994",
    top: "6%",
    left: "6%",
    w: "58%",
    h: "42%",
    rotate: -5,
  },
  {
    bg: "esn.magenta.500",
    label: "2nd oldest",
    sub: "Section in Finland",
    labelSize: { base: "xs", md: "sm" },
    bottom: "10%",
    left: "0%",
    w: "46%",
    h: "32%",
    rotate: 5,
  },
  {
    bg: "esn.cyan.500",
    label: "Turku",
    sub: "(Åbo)",
    round: true,
    top: "12%",
    right: "4%",
    w: "34%",
    h: "34%",
    rotate: 8,
  },
  {
    bg: "esn.green.500",
    label: "Volunteers",
    labelSize: { base: "xs", md: "sm" },
    bottom: "4%",
    right: "8%",
    w: "40%",
    h: "26%",
    rotate: -8,
  },
];

const EVENTS_PATCHES: Patch[] = [
  {
    bg: "esn.magenta.500",
    label: "Sitz",
    sub: "Costumes on",
    top: "8%",
    left: "8%",
    w: "52%",
    h: "40%",
    rotate: -6,
  },
  {
    bg: "esn.orange.500",
    label: "Food night",
    labelSize: { base: "2xs", md: "xs" },
    top: "6%",
    right: "6%",
    w: "36%",
    h: "24%",
    rotate: 9,
  },
  {
    bg: "esn.cyan.500",
    label: "Aug 22",
    sub: "Welcome booth",
    round: true,
    bottom: "6%",
    left: "4%",
    w: "38%",
    h: "38%",
    rotate: -8,
  },
  {
    bg: "esn.green.500",
    label: "Sauna",
    sub: "& cold plunge",
    bottom: "8%",
    right: "4%",
    w: "46%",
    h: "32%",
    rotate: 6,
  },
];

const TRIPS_PATCHES: Patch[] = [
  {
    bg: "esn.darkBlue.500",
    label: "Lapland",
    sub: "69°N · Kilpisjärvi",
    top: "6%",
    left: "6%",
    w: "56%",
    h: "40%",
    rotate: -5,
  },
  {
    bg: "esn.magenta.500",
    label: "Iceland",
    round: true,
    top: "10%",
    right: "6%",
    w: "32%",
    h: "32%",
    rotate: 10,
  },
  {
    bg: "esn.orange.500",
    label: "Baltics",
    sub: "3 capitals",
    labelSize: { base: "xs", md: "sm" },
    bottom: "4%",
    left: "6%",
    w: "40%",
    h: "28%",
    rotate: -9,
  },
  {
    bg: "esn.green.500",
    label: "Lofoten",
    sub: "Northern Lights",
    bottom: "12%",
    right: "2%",
    w: "46%",
    h: "32%",
    rotate: 7,
  },
];

export type HeroProps = {
  stats: { number: string; label: string }[];
};

export default function HomeHero({ stats }: HeroProps) {
  return (
    <Box position="relative" w="full" overflow="hidden" bg="esn.darkBlue.900">
      <HeroVideo
        src="/video/hero-home.mp4"
        poster="/video/hero-home-poster.jpg"
      />
      <Box
        position="absolute"
        inset="0"
        bgImage="linear-gradient(90deg, rgba(18,20,58,0.92) 0%, rgba(18,20,58,0.6) 55%, rgba(18,20,58,0.28) 100%)"
      />
      <Container
        maxW="1024px"
        position="relative"
        zIndex="1"
        px="4"
        py={{ base: "12", md: "20" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "stretch", md: "center" }}>
          <VStack
            alignItems="flex-start"
            justifyContent="flex-end"
            gap="4"
            minW="0"
            order={{ base: 2, md: 1 }}>
            <Text
              as="h3"
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
              color="esn.cyan.300">
              ÅBO AKADEMI · TURKU, FINLAND
            </Text>
            <Heading as="h1" size="5xl" color="white">
              Your international community in Turku (Åbo)
            </Heading>
            <Text color="whiteAlpha.900">
              Sauna nights, themed sitz parties, food nights, and trips across
              Finland and Europe, organised by students, for students in Turku
              (Åbo).
            </Text>
            <HStack gap="4">
              <Button asChild colorPalette="esn.cyan" size="lg">
                <Link href="/esncard">Get your ESNcard</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                color="white"
                borderColor="whiteAlpha.700"
                _hover={{ bg: "whiteAlpha.200" }}>
                <Link href="/trips">Explore trips</Link>
              </Button>
            </HStack>
            <HStack gap="8" mt="8" alignItems="flex-start">
              <For each={stats}>
                {(stat, index) => (
                  <VStack key={`stat-${index}`} alignItems="flex-start" gap="1">
                    <Heading as="h2" size="4xl" color="white">
                      {stat.number}
                    </Heading>
                    <Text
                      color="whiteAlpha.800"
                      fontSize="sm"
                      whiteSpace="nowrap">
                      {stat.label}
                    </Text>
                  </VStack>
                )}
              </For>
            </HStack>
          </VStack>
          <VStack
            alignItems="center"
            justifyContent="center"
            flex="1"
            py="4"
            order={{ base: 1, md: 2 }}>
            <PatchWall patches={HOME_PATCHES} />
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

export type AboutHeroProps = {
  stats: { number: string; label: string }[];
};

export function AboutHero({ stats }: AboutHeroProps) {
  return (
    <Stack direction={{ base: "column", md: "row" }} alignItems="center">
      <VStack
        alignItems="flex-start"
        justifyContent="flex-end"
        gap="4"
        order={{ base: 2, md: 1 }}>
        <Heading as="h1" size="5xl">
          ESN Åbo Akademi,
          <br />
          since{" "}
          <Text as="span" color="esn.darkBlue">
            1994
          </Text>
        </Heading>
        <Text color="fg.muted">
          Finland&apos;s second-oldest ESN section, and part of the Erasmus
          Student Network, active in more than 1,000 higher education
          institutions across 45 countries since 1989.
        </Text>
        <HStack gap="8" mt="4" alignItems="flex-start">
          <For each={stats}>
            {(stat, index) => (
              <VStack key={`stat-${index}`} alignItems="flex-start" gap="1">
                <Heading as="h2" size="4xl" color="esn.darkBlue">
                  {stat.number}
                </Heading>
                <Text color="fg.muted" fontSize="sm" whiteSpace="nowrap">
                  {stat.label}
                </Text>
              </VStack>
            )}
          </For>
        </HStack>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        flex="1"
        py="4"
        order={{ base: 1, md: 2 }}>
        <PatchWall patches={ABOUT_PATCHES} />
      </VStack>
    </Stack>
  );
}

export type EventsHeroProps = {
  categories: { label: string; color: string }[];
};

export function EventsHero({ categories }: EventsHeroProps) {
  return (
    <Stack direction={{ base: "column", md: "row" }} alignItems="center">
      <VStack
        alignItems="flex-start"
        justifyContent="flex-end"
        gap="4"
        order={{ base: 2, md: 1 }}>
        <Heading as="h1" size="5xl">
          Something&apos;s always
          <br />
          on in{" "}
          <Text as="span" color="esn.darkBlue">
            Turku (Åbo)
          </Text>
        </Heading>
        <Text color="fg.muted">
          Sitz parties, sauna nights, food nights, and bar crawls run every
          semester, plus a few uniquely Finnish traditions along the way,
          from Vappu to pikkujoulu.
        </Text>
        <HStack wrap="wrap" gap="2">
          <For each={categories}>
            {(category) => (
              <HStack
                key={category.label}
                colorPalette={category.color}
                gap="2"
                bg="bg"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="full"
                px="3"
                py="1">
                <Box
                  w="1.5"
                  h="1.5"
                  borderRadius="full"
                  bg="colorPalette.solid"
                />
                <Text fontSize="sm" color="fg.muted">
                  {category.label}
                </Text>
              </HStack>
            )}
          </For>
        </HStack>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        flex="1"
        py="4"
        order={{ base: 1, md: 2 }}>
        <PatchWall patches={EVENTS_PATCHES} />
      </VStack>
    </Stack>
  );
}

export type TripsHeroProps = {
  regions: { label: string; color: string }[];
};

export function TripsHero({ regions }: TripsHeroProps) {
  return (
    <Stack direction={{ base: "column", md: "row" }} alignItems="center">
      <VStack
        alignItems="flex-start"
        justifyContent="flex-end"
        gap="4"
        order={{ base: 2, md: 1 }}>
        <Heading as="h1" size="5xl">
          Adventures waiting
          <br />
          for{" "}
          <Text as="span" color="esn.darkBlue">
            you
          </Text>
        </Heading>
        <Text color="fg.muted">
          Trips across Finland and Europe every semester, from the Turku (Åbo)
          archipelago to Norway&apos;s Lofoten islands and Lapland&apos;s Arctic
          Circle, many organised together with Timetravels.
        </Text>
        <HStack wrap="wrap" gap="2">
          <For each={regions}>
            {(region) => (
              <HStack
                key={region.label}
                colorPalette={region.color}
                gap="2"
                bg="bg"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="full"
                px="3"
                py="1">
                <Box
                  w="1.5"
                  h="1.5"
                  borderRadius="full"
                  bg="colorPalette.solid"
                />
                <Text fontSize="sm" color="fg.muted">
                  {region.label}
                </Text>
              </HStack>
            )}
          </For>
        </HStack>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        flex="1"
        py="4"
        order={{ base: 1, md: 2 }}>
        <PatchWall patches={TRIPS_PATCHES} />
      </VStack>
    </Stack>
  );
}
