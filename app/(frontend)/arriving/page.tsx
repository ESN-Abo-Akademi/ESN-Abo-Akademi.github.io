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
  Image,
  Link as ChakraLink,
  List,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowRight,
  BedDouble,
  Building2,
  KeyRound,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Section from "@/components/ui/section";
import { FactNote, FactSource } from "@/components/ui/fact-note";
import { AudienceTable } from "@/components/ui/audience-table";
import { getFact } from "@/content/arrival-facts";

export const metadata: Metadata = {
  alternates: { canonical: "/arriving/" },
  title: "Arriving in Turku (Åbo)",
  description:
    "What to do before you travel, on your arrival night, and in your first week as a new student at Åbo Akademi University in Turku (Åbo).",
};

const LAST_CHECKED = "1 August 2026";

const GETTING_HERE = [
  {
    icon: Plane,
    title: "Most people land at Helsinki-Vantaa",
    body: "Turku Airport has a few direct routes, but the common arrival is Helsinki-Vantaa and then a train or coach west. Allow around three hours from landing to Turku (Åbo), plus the last leg to your building. Buy the onward ticket before you land if you can.",
  },
  {
    icon: Building2,
    title: "Trains and coaches",
    body: "Trains run to Turku Central Station and to Kupittaa. Kupittaa is closer to the university area and student housing. Long-distance coaches arrive near the centre.",
  },
  {
    icon: MapPin,
    title: "Ferries",
    body: "Ferries connect Turku (Åbo) with Stockholm and Mariehamn. The harbour is a short bus ride from the centre.",
  },
];

export default function ArrivingPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "16" }}>
        <VStack alignItems="flex-start" gap="5" maxW="3xl">
          <Badge colorPalette="esn.cyan" size="lg">
            New here
          </Badge>
          <Heading as="h1" size="3xl">
            Arriving in Turku (Åbo)
          </Heading>
          <Text fontSize="lg" color="fg.muted">
            Turku is the Finnish name and Åbo is the Swedish name for the same
            city. You will see both everywhere, including on our own name.
          </Text>
          <Text color="fg.muted">
            This page covers what to do before you travel, what to do on the
            night you land, and what to sort out in your first week. It is
            written for students at Åbo Akademi University, and it says clearly
            where the answer is different depending on what kind of student you
            are.
          </Text>
          <HStack gap="3" flexWrap="wrap">
            <Button asChild colorPalette="esn.darkBlue" borderRadius="md">
              <NextLink href="/arriving/checklist">
                First-week checklist <Icon><ArrowRight /></Icon>
              </NextLink>
            </Button>
            <Button asChild variant="outline" borderRadius="md">
              <NextLink href="/events">See what is on</NextLink>
            </Button>
            <Button asChild variant="outline" borderRadius="md">
              <NextLink href="/survival-guide">Survival guide</NextLink>
            </Button>
          </HStack>
          <Text fontSize="xs" color="fg.muted">
            Facts on this page were last checked on {LAST_CHECKED}. Facts
            outside our control are linked to their source rather than
            copied, because opening hours and prices elsewhere change. Facts
            about ESN Åbo Akademi itself, such as our office address and the
            ESNcard price, are printed directly with the date checked,
            because we are the source.
          </Text>
        </VStack>
      </Section>

      <Section py="12">
        <AudienceTable />
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Before you travel
          </Heading>
          <List.Root gap="3" ps="5">
            <List.Item>
              <Text as="span" fontWeight="bold">
                Permits and registration.
              </Text>{" "}
              If you are coming from outside the EU or EEA, apply for a
              residence permit through Migri as soon as you have your acceptance
              letter. If you are an EU or EEA citizen staying longer than 90
              days, register your right of residence. Check your decision or
              permit card before assuming you still need to apply separately for
              a personal identity code.
            </List.Item>
            <List.Item>
              <Text as="span" fontWeight="bold">
                Housing.
              </Text>{" "}
              {getFact("tysApplication").claim}
              <FactSource id="tysApplication" />
            </List.Item>
            <List.Item>
              <Text as="span" fontWeight="bold">
                Paying safely.
              </Text>{" "}
              Verify the provider, the contract, the payee and the account
              details through contact channels you found yourself, not ones sent
              to you in a message. Legitimate student housing may well invoice
              you before you arrive, so the warning sign is an unverifiable
              counterparty, not an early invoice.
            </List.Item>
            <List.Item>
              <Text as="span" fontWeight="bold">
                Orientation.
              </Text>{" "}
              {getFact("arrivalAutumn2026").claim}
              <FactSource id="arrivalAutumn2026" />
              <Text mt="2">
                {getFact("arrivalSpring2027").claim} Plan your travel so you
                are here for it.
              </Text>
              <FactSource id="arrivalSpring2027" />
            </List.Item>
            <List.Item>
              <Text as="span" fontWeight="bold">
                Money.
              </Text>{" "}
              {getFact("livingCosts").claim}
              <FactSource id="livingCosts" />
            </List.Item>
          </List.Root>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Getting here
          </Heading>
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="5">
            {GETTING_HERE.map((item) => {
              const ItemIcon = item.icon;

              return (
                <Card.Root key={item.title} variant="outline">
                  <Card.Body gap="3">
                    <Icon boxSize="6" color="esn.cyan.500">
                      <ItemIcon />
                    </Icon>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Description>{item.body}</Card.Description>
                  </Card.Body>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Your arrival night
          </Heading>
          <Text color="fg.muted" maxW="3xl">
            This is the part most guides skip, and it is the part that goes
            wrong most often.
          </Text>
          <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="5">
            <Card.Root variant="outline">
              <Card.Body gap="3">
                <Icon boxSize="6" color="esn.magenta.500">
                  <KeyRound />
                </Icon>
                <Card.Title>Getting your key after hours</Card.Title>
                <Card.Description>
                  {getFact("tysKeyLocker").claim} Do not assume the locker is
                  automatic. Confirm with your housing provider how the code
                  reaches you, by when you must ask for it, and who answers late
                  in the evening if it does not work.
                </Card.Description>
                <FactSource id="tysKeyLocker" />
              </Card.Body>
            </Card.Root>
            <Card.Root variant="outline">
              <Card.Body gap="3">
                <Icon boxSize="6" color="esn.magenta.500">
                  <BedDouble />
                </Icon>
                <Card.Title>You will not have bedding on night one</Card.Title>
                <Card.Description>
                  {getFact("startingPackage").claim} Pack a sleeping bag liner
                  or a travel towel, or budget to buy bedding on your first day.
                  This catches almost everybody.
                </Card.Description>
                <FactSource id="startingPackage" />
              </Card.Body>
            </Card.Root>
          </Grid>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Your first week, in order
          </Heading>
          <Text color="fg.muted" maxW="3xl">
            Some of these depend on each other, so the order matters.
          </Text>
          <List.Root as="ol" gap="3" ps="5">
            <List.Item>
              Go to orientation. You get your ÅAU username there, and everything
              digital depends on it.
            </List.Item>
            <List.Item>
              Sign in to Peppi for course registration, and connect to Eduroam
              with your ÅAU credentials.
              <FactSource id="exchangeContact" />
            </List.Item>
            <List.Item>
              Sort out your student union membership. {getFact("studentUnion").claim}
              <FactSource id="studentUnion" />
            </List.Item>
            <List.Item>
              Collect your starting package, after your union and package fees
              are paid. Bring the receipts.
            </List.Item>
            <List.Item>
              Get your ESNcard. Buy the membership on Kide.app through our{" "}
              <ChakraLink asChild variant="underline">
                <NextLink href="/membership">membership page</NextLink>
              </ChakraLink>
              , then bring the purchase confirmation, identification and proof
              of student status to the office and a board member will issue the
              card. {getFact("dnaSim").claim}
            </List.Item>
            <List.Item>
              Sort out transport. Read the Föli eligibility rules before you
              queue for a student card.
              <FactSource id="foliStudentCard" />
            </List.Item>
          </List.Root>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Getting around, and the trap in it
          </Heading>
          <Card.Root variant="outline" borderColor="esn.orange.500">
            <Card.Body gap="3">
              <Card.Title>Check before you queue for a student card</Card.Title>
              <Card.Description>
                {getFact("foliStudentCard").claim}
              </Card.Description>
              <FactSource id="foliStudentCard" />
            </Card.Body>
          </Card.Root>
          <Text>
            {getFact("foliCardCost").claim}
          </Text>
          <FactSource id="foliCardCost" />
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="stretch" gap="6" w="full">
          <Heading as="h2" size="xl">
            Health and safety
          </Heading>
          <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="5">
            <Card.Root variant="outline">
              <Card.Body gap="3">
                <Icon boxSize="6" color="esn.green.500">
                  <ShieldCheck />
                </Icon>
                <Card.Title>Which service you use</Card.Title>
                <Card.Description>
                  Healthcare is one of the places the answer really does depend
                  on your student type. Check the table at the top of this page,
                  then follow your row.
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root variant="outline">
              <Card.Body gap="3">
                <Icon boxSize="6" color="esn.green.500">
                  <Phone />
                </Icon>
                <Card.Title>In an emergency</Card.Title>
                <Card.Description>{getFact("emergency").claim}</Card.Description>
                <FactSource id="emergency" />
              </Card.Body>
            </Card.Root>
          </Grid>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap="8"
          w="full"
          alignItems="start">
          <VStack alignItems="flex-start" gap="5" maxW="3xl">
            <Heading as="h2" size="xl">
              Come and find us
            </Heading>
            <Text>{getFact("officeAddress").claim}</Text>
            <FactSource id="officeAddress" />
            <FactNote
              id="officeHours"
              fallback="Office hours change every semester, so we publish the current ones on Instagram rather than here. Check @esnaboakademi before you walk over."
            />
            <Text>{getFact("esncardPrice").claim}</Text>
            <FactSource id="esncardPrice" />
            <HStack gap="3" flexWrap="wrap">
              <Button asChild colorPalette="esn.darkBlue" borderRadius="md">
                <NextLink href="/membership">Get your membership</NextLink>
              </Button>
              <Button asChild variant="outline" borderRadius="md">
                <ChakraLink
                  href="https://www.instagram.com/esnaboakademi/"
                  target="_blank"
                  rel="noreferrer">
                  @esnaboakademi
                </ChakraLink>
              </Button>
            </HStack>
            <Text color="fg.muted">
              We also work closely with the other ESN sections in Turku (Åbo), and
              you are welcome at their events too.
            </Text>
          </VStack>
          <VStack alignItems="stretch" gap="2">
            <Image
              src="/photos/esn-hike-winter.jpg"
              alt="A group of ESN Åbo Akademi students on a winter hike in a snowy forest near Turku, one of them wearing the blue ESN ÅA overall"
              borderRadius="lg"
              w="full"
              fit="cover"
              aspectRatio="4/3"
            />
            <Text fontSize="xs" color="fg.muted">
              ESN Åbo Akademi students on a winter hike. This is the community
              you are joining.
            </Text>
          </VStack>
        </Grid>
      </Section>
    </>
  );
}
