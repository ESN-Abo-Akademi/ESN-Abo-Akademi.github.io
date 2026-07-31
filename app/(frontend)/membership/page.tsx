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
  BadgeCheck,
  CreditCard,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import Section from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join ESN Åbo Akademi, purchase your membership and collect your ESNcard in Turku (Åbo).",
};

const KIDE_URL =
  "https://kide.app/memberships/d3567320-a4dc-4fb2-acae-61ded11f2931";
const BOARD_EMAIL = "board@esnabo.org";

const PURCHASE_STEPS = [
  {
    number: "01",
    title: "Purchase on Kide.app",
    description:
      "Open the official ESN Åbo Akademi membership product and complete the checkout. A Kide.app service fee of up to €0.95 may be added.",
    icon: ExternalLink,
  },
  {
    number: "02",
    title: "Keep your confirmation",
    description:
      "Save the purchase confirmation on your phone. Bring identification and proof that you are a student or intern in Turku (Åbo) or Southwest Finland.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "Collect your ESNcard",
    description:
      "Visit the ESN Åbo Akademi office during announced office hours. A board member will verify the purchase and issue your card.",
    icon: BadgeCheck,
  },
];

export default function MembershipPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "16" }}>
        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "1.35fr 0.65fr" }}
          gap="8"
          alignItems="center">
          <VStack alignItems="flex-start" gap="5" maxW="3xl">
            <Badge colorPalette="esn.cyan" size="lg">
              Membership + ESNcard
            </Badge>
            <Heading as="h1" size="5xl">
              Join your international community in Turku (Åbo)
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              Membership connects you with ESN Åbo Akademi and includes an
              ESNcard, giving eligible students and interns access to our
              community and benefits across the ESN network.
            </Text>
            <HStack gap="3" wrap="wrap">
              <Button asChild size="lg" colorPalette="esn.darkBlue">
                <a href={KIDE_URL} target="_blank" rel="noreferrer">
                  Buy membership on Kide.app
                  <ExternalLink />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${BOARD_EMAIL}`}>
                  Ask the board
                  <Mail />
                </a>
              </Button>
            </HStack>
          </VStack>

          <Card.Root colorPalette="esn.darkBlue" bg="colorPalette.solid">
            <Card.Body gap="3">
              <Text
                color="colorPalette.muted"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
                fontSize="sm">
                One-year membership
              </Text>
              <Heading as="p" size="4xl" color="colorPalette.contrast">
                €10
              </Heading>
              <Text color="colorPalette.subtle">
                Includes an ESNcard. Kide.app may add a service fee of up to
                €0.95 at checkout.
              </Text>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Section>

      <Section py={{ base: "10", md: "14" }}>
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="2">
            <Heading as="h2" size="2xl">
              How to purchase and collect your card
            </Heading>
            <Text color="fg.muted">
              Complete these three steps. Office hours are announced through
              our social channels and may change during the semester.
            </Text>
          </VStack>

          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="4">
            {PURCHASE_STEPS.map((step) => {
              const StepIcon = step.icon;

              return (
                <Card.Root key={step.number} variant="outline">
                  <Card.Body gap="4">
                    <HStack justifyContent="space-between">
                      <Icon boxSize="6" color="esn.cyan">
                        <StepIcon />
                      </Icon>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color="fg.subtle">
                        {step.number}
                      </Text>
                    </HStack>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Description>{step.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "14" }}>
        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="5">
          <Card.Root>
            <Card.Body gap="3">
              <HStack color="esn.darkBlue">
                <MapPin />
                <Card.Title>Collect from our office</Card.Title>
              </HStack>
              <Card.Description fontSize="md">
                ESN Åbo Akademi, Geologicum, Tuomiokirkontori 1, 2nd floor,
                20500 Turku (Åbo).
              </Card.Description>
              <Text fontSize="sm" color="fg.muted">
                Check the latest office hours before visiting. If the announced
                time does not work, email the board to arrange collection.
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root colorPalette="esn.cyan">
            <Card.Body gap="3">
              <Card.Title>What comes with the card?</Card.Title>
              <Card.Description fontSize="md">
                Explore international ESNcard discounts and the local benefits
                available through ESN Åbo Akademi.
              </Card.Description>
              <Button asChild alignSelf="flex-start" colorPalette="esn.cyan">
                <NextLink href="/esncard">
                  Explore ESNcard benefits
                  <ArrowRight />
                </NextLink>
              </Button>
            </Card.Body>
          </Card.Root>
        </Grid>

        <VStack mt="8" gap="2">
          <Text color="fg.muted">Need help before purchasing?</Text>
          <ChakraLink asChild color="link" fontWeight="bold">
            <a href={`mailto:${BOARD_EMAIL}`}>{BOARD_EMAIL}</a>
          </ChakraLink>
        </VStack>
      </Section>
    </>
  );
}
