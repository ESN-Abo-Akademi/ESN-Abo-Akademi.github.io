import type { Metadata } from "next";
import {
  Box,
  Heading,
  Image,
  List,
  Text,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";
import Section from "@/components/ui/section";
import { getFact } from "@/content/arrival-facts";
import "./print.css";

export const metadata: Metadata = {
  alternates: { canonical: "/arriving/checklist/" },
  title: "First-week checklist",
  description:
    "A one-page checklist of everything to sort out in your first week as a new student in Turku (Åbo).",
};

const LAST_CHECKED = "1 August 2026";

const BEFORE = [
  "Residence permit or EU registration started",
  "Housing application submitted and offer accepted",
  "Travel booked to arrive before orientation",
  "Insurance arranged and card packed",
  "Something to sleep under packed for night one",
];

const FIRST_WEEK = [
  "Collect your key, and check it works before the office closes",
  "Attend orientation and collect your ÅAU username",
  "Log in to Peppi and register for courses",
  "Connect to Eduroam",
  "Pay the student union fee if you are joining",
  "Collect the starting package, receipts in hand",
  "Buy bedding, it is not in the package",
  "Buy your ESN membership on Kide.app, then bring the confirmation, ID and proof of student status to the ESN office to collect your ESNcard",
  "Ask at the office about the free DNA SIM, including what it covers and what data costs",
  "Read the Föli rules before queuing for a travel card",
  "Save 112 and install the 112 Suomi app",
];

export default function ChecklistPage() {
  return (
    <Section id="checklist-print-page" py={{ base: "8", md: "12" }}>
      <VStack alignItems="stretch" gap="6" w="full">
        <Box>
          <Heading as="h1" size="2xl">
            First week in Turku (Åbo)
          </Heading>
          <Text color="fg.muted">
            ESN Åbo Akademi. Turku is the Finnish name, Åbo is the Swedish name,
            same city.
          </Text>
        </Box>

        <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="8">
          <VStack alignItems="stretch" gap="3">
            <Heading as="h2" size="md">
              Before you travel
            </Heading>
            <List.Root gap="2" ps="5">
              {BEFORE.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List.Root>
          </VStack>

          <VStack alignItems="stretch" gap="3">
            <Heading as="h2" size="md">
              Your first week
            </Heading>
            <List.Root gap="2" ps="5">
              {FIRST_WEEK.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List.Root>
          </VStack>
        </Grid>

        <Box borderWidth="1px" borderRadius="md" p="4">
          <Heading as="h2" size="sm" mb="2">
            Two things that catch almost everybody
          </Heading>
          <Text fontSize="sm">
            The starting package has no bed linen, pillowcases or duvet covers.
            And the Föli student discount needs studies of at least nine months
            leading to a degree, so a one-semester exchange does not qualify.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="sm" mb="2">
            Find us
          </Heading>
          <HStack alignItems="flex-start" gap="4" justifyContent="space-between">
            <VStack alignItems="flex-start" gap="0" flex="1" minW="0">
              <Text fontSize="sm">{getFact("officeAddress").claim}</Text>
              <Text fontSize="sm" color="fg.muted">
                Current office hours are on Instagram, @esnaboakademi.
              </Text>
            </VStack>
            <VStack alignItems="center" gap="0" flexShrink="0">
              <Image
                src="/photos/esn-instagram-qr.png"
                alt="QR code linking to the ESN Åbo Akademi Instagram, @esnaboakademi"
                boxSize="14"
              />
              <Text fontSize="2xs" color="fg.muted" textAlign="center" whiteSpace="nowrap">
                Hours & tickets
              </Text>
            </VStack>
          </HStack>
        </Box>

        <HStack justifyContent="space-between" fontSize="xs" color="fg.muted">
          <Text>Full details: esnabo.org/arriving</Text>
          <Text>Checked {LAST_CHECKED}. Confirm anything time-sensitive at source.</Text>
        </HStack>
      </VStack>
    </Section>
  );
}
