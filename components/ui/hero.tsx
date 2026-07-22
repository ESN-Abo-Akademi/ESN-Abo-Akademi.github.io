import {
  VStack,
  Heading,
  HStack,
  Button,
  Box,
  Text,
  For,
  Stack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export type HeroProps = {
  stats: { number: string; label: string }[];
};

export default function HomeHero({ stats }: HeroProps) {
  return (
    <Stack direction={{ base: "column", md: "row" }} alignItems="center">
      <VStack
        alignItems="flex-start"
        justifyContent="flex-end"
        gap="4"
        order={{ base: 2, md: 1 }}>
        <Text
          as="h3"
          fontSize="md"
          fontWeight="bold"
          letterSpacing="wide"
          color="esn.cyan">
          ÅBO AKADEMI · TURKU, FINLAND
        </Text>
        <Heading as="h1" size="5xl">
          Your international community in Turku
        </Heading>
        <Text color="fg.muted">
          Sauna nights, themed sitz parties, food nights, and trips across
          Finland and Europe, organised by exchange students, for exchange
          students at Åbo Akademi University.
        </Text>
        <HStack gap="4">
          <Button asChild colorPalette="esn.darkBlue" size="lg">
            <Link href="/esncard">Get your ESNcard</Link>
          </Button>
          <Button asChild variant="outline" colorPalette="blue" size="lg">
            <Link href="/trips">Explore trips</Link>
          </Button>
        </HStack>
        <HStack gap="8" mt="8" alignItems="flex-start">
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
        order={{ base: 1, md: 2 }}>
        <Box
          borderRadius="lg"
          bg="#00aeef1a"
          h={{ base: "200px", md: "400px" }}
          w={{ base: "200px", md: "400px" }}
          display="grid"
          placeItems="center">
          <Image
            src="/esn-abo-logo.png"
            alt="ESN star logo"
            w={{ base: "120px", md: "240px" }}
          />
        </Box>
      </VStack>
    </Stack>
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
        order={{ base: 1, md: 2 }}>
        <Box
          borderRadius="lg"
          bg="#00aeef1a"
          h={{ base: "200px", md: "400px" }}
          w={{ base: "200px", md: "400px" }}
        />
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
            Turku
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
        order={{ base: 1, md: 2 }}>
        <Box
          borderRadius="lg"
          bg="#00aeef1a"
          h={{ base: "200px", md: "400px" }}
          w={{ base: "200px", md: "400px" }}
        />
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
          Trips across Finland and Europe every semester, from the Turku
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
        order={{ base: 1, md: 2 }}>
        <Box
          borderRadius="lg"
          bg="#00aeef1a"
          h={{ base: "200px", md: "400px" }}
          w={{ base: "200px", md: "400px" }}
        />
      </VStack>
    </Stack>
  );
}
