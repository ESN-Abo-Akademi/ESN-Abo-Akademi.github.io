import type { Metadata } from "next";
import NextLink from "next/link";
import {
  Badge,
  Button,
  Card,
  Grid,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowRight,
  BadgePercent,
  Bus,
  CalendarDays,
  ExternalLink,
  Globe2,
  HeartHandshake,
  House,
  Mail,
  Plane,
  ShoppingBag,
  Users,
} from "lucide-react";
import Section from "@/components/ui/section";

export const metadata: Metadata = {
  title: "ESNcard Benefits",
  description:
    "Learn about international and local ESNcard benefits available to ESN Åbo Akademi members.",
};

const INTERNATIONAL_BENEFITS = [
  {
    title: "Travel and transport",
    description:
      "Access offers from participating travel, coach, rail and mobility partners across Europe.",
    icon: Plane,
  },
  {
    title: "Accommodation",
    description:
      "Find discounts from participating hostels, hotels and student-housing services.",
    icon: House,
  },
  {
    title: "Shopping and services",
    description:
      "Use member offers covering technology, learning, deliveries, lifestyle and everyday services.",
    icon: ShoppingBag,
  },
  {
    title: "A European community",
    description:
      "Join eligible activities and opportunities offered by ESN sections beyond your home city.",
    icon: Globe2,
  },
];

const LOCAL_BENEFITS = [
  {
    title: "Member prices",
    description:
      "Get reduced member pricing where it is advertised for ESN Åbo Akademi events and activities.",
    icon: BadgePercent,
  },
  {
    title: "Events and community",
    description:
      "Take part in social, cultural and wellbeing activities organised for the international community of Turku (Åbo).",
    icon: CalendarDays,
  },
  {
    title: "Trips and experiences",
    description:
      "Receive access to our trip information and any member offers stated in the current ticket listing.",
    icon: Bus,
  },
  {
    title: "Local support",
    description:
      "Meet volunteers who can help you connect with student life, local services and other international students.",
    icon: HeartHandshake,
  },
];

export default function EsncardPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "16" }}>
        <VStack alignItems="flex-start" gap="5" maxW="4xl">
          <Badge colorPalette="esn.magenta" size="lg">
            One card · benefits across Europe
          </Badge>
          <Heading as="h1" size="5xl">
            Make more of your time abroad with the ESNcard
          </Heading>
          <Text color="fg.muted" fontSize="lg">
            The ESNcard is the membership card of the Erasmus Student Network.
            It is valid for 12 months from the date of issue and connects
            eligible members with ESN services, events and participating
            partner offers.
          </Text>
          <HStack gap="3" wrap="wrap">
            <Button asChild size="lg" colorPalette="esn.darkBlue">
              <NextLink href="/membership">
                Get your ESNcard
                <ArrowRight />
              </NextLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://www.esncard.org/discounts"
                target="_blank"
                rel="noreferrer">
                Browse live discounts
                <ExternalLink />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Section>

      <Section py={{ base: "10", md: "14" }}>
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="2" maxW="3xl">
            <HStack color="esn.darkBlue">
              <Icon boxSize="6">
                <Globe2 />
              </Icon>
              <Heading as="h2" size="2xl">
                International benefits
              </Heading>
            </HStack>
            <Text color="fg.muted">
              Partner offers change regularly. Sign in at ESNcard.org and use
              its live discount finder for the current eligibility rules,
              locations and redemption instructions.
            </Text>
          </VStack>

          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            gap="4">
            {INTERNATIONAL_BENEFITS.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <Card.Root key={benefit.title} variant="outline">
                  <Card.Body gap="3">
                    <Icon boxSize="6" color="esn.cyan">
                      <BenefitIcon />
                    </Icon>
                    <Card.Title>{benefit.title}</Card.Title>
                    <Card.Description>{benefit.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "14" }}>
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="2" maxW="3xl">
            <HStack color="esn.magenta">
              <Icon boxSize="6">
                <Users />
              </Icon>
              <Heading as="h2" size="2xl">
                Local benefits in Turku (Åbo)
              </Heading>
            </HStack>
            <Text color="fg.muted">
              Local benefits depend on the event and active partner agreement.
              Always check the current listing or announcement before relying
              on a discount.
            </Text>
          </VStack>

          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            gap="4">
            {LOCAL_BENEFITS.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <Card.Root key={benefit.title}>
                  <Card.Body gap="3">
                    <Icon boxSize="6" color="esn.magenta">
                      <BenefitIcon />
                    </Icon>
                    <Card.Title>{benefit.title}</Card.Title>
                    <Card.Description>{benefit.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Section>

      <Section py={{ base: "10", md: "14" }}>
        <Card.Root colorPalette="esn.darkBlue" bg="colorPalette.solid" w="full">
          <Card.Body>
            <Grid
              gridTemplateColumns={{ base: "1fr", md: "1fr auto" }}
              gap="6"
              alignItems="center">
              <VStack alignItems="flex-start" gap="2">
                <Card.Title color="colorPalette.contrast" fontSize="xl">
                  Questions about eligibility or a benefit?
                </Card.Title>
                <Card.Description color="colorPalette.subtle">
                  Email the whole ESN Åbo Akademi board and we will point you
                  to the right information.
                </Card.Description>
              </VStack>
              <Button asChild size="lg" colorPalette="esn.cyan">
                <a href="mailto:board@esnabo.org">
                  <Mail />
                  board@esnabo.org
                </a>
              </Button>
            </Grid>
          </Card.Body>
        </Card.Root>

        <Text mt="6" textAlign="center" color="fg.muted" fontSize="sm">
          The ESNcard is not a general university student card. Eligibility and
          each partner’s conditions apply. Read the official{" "}
          <ChakraLink asChild color="link">
            <a
              href="https://www.esncard.org/faq"
              target="_blank"
              rel="noreferrer">
              ESNcard FAQ
            </a>
          </ChakraLink>
          .
        </Text>
      </Section>
    </>
  );
}
