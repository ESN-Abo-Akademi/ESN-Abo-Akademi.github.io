import type { Metadata } from "next";
import NextLink from "next/link";
import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/section";
import { AudienceTable } from "@/components/ui/audience-table";
import { GuideSection } from "@/components/ui/guide-section";
import { GUIDE_SECTIONS } from "@/content/guide-copy";
import "./print.css";

export const metadata: Metadata = {
  title: "Survival guide",
  description:
    "The full ESN Åbo Akademi survival guide for new students at Åbo Akademi University in Turku (Åbo): before you travel, arrival night, your first week, living here, getting around and getting help, and Åbo Akademi culture explained.",
};

const EDITION = "Edition 1";
const LAST_CHECKED = "1 August 2026";

const PRINT_PAGE_ID = "survival-guide-print-page";

export default function SurvivalGuidePage() {
  const lastSection = GUIDE_SECTIONS[GUIDE_SECTIONS.length - 1];
  const otherSections = GUIDE_SECTIONS.slice(0, -1);

  return (
    <Box id={PRINT_PAGE_ID}>
      <Section backgroundColor="bg.alternate" py={{ base: "10", md: "16" }}>
        <VStack alignItems="flex-start" gap="5" maxW="3xl">
          <Badge colorPalette="esn.magenta" size="lg">
            Survival guide
          </Badge>
          <Heading as="h1" size="3xl">
            The ESN Åbo Akademi survival guide
          </Heading>
          <Text fontSize="lg" color="fg.muted">
            Everything on the arriving page, and everything after it: your
            first week, settling into the quarter, getting around, getting
            help, and the traditions you will meet along the way.
          </Text>
          <Text color="fg.muted">
            Written for students at Åbo Akademi University, in the order you
            will actually need it. Where the answer depends on what kind of
            student you are, it says so, starting with the table below.
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="fg.muted">
            {EDITION} · Facts checked {LAST_CHECKED}
          </Text>
          <HStack gap="3" flexWrap="wrap">
            <Button asChild colorPalette="esn.darkBlue" borderRadius="md">
              <NextLink href="/arriving">
                Read arriving first <Icon><ArrowRight /></Icon>
              </NextLink>
            </Button>
            <Button asChild variant="outline" borderRadius="md">
              <NextLink href="/arriving/checklist">
                First-week checklist
              </NextLink>
            </Button>
          </HStack>
        </VStack>
      </Section>

      <Section py="12">
        <AudienceTable />
      </Section>

      {otherSections.map((section, index) => (
        <Section
          key={section.id}
          backgroundColor={index % 2 === 0 ? "bg.alternate" : undefined}
          py="12">
          <GuideSection section={section} />
        </Section>
      ))}

      <Section
        backgroundColor={otherSections.length % 2 === 0 ? "bg.alternate" : undefined}
        py="12">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap="8"
          w="full"
          alignItems="start">
          <GuideSection section={lastSection} />
          <VStack alignItems="stretch" gap="2">
            <Image
              src="/photos/esn-student-night.jpg"
              alt="ESN Åbo Akademi students at a club night"
              borderRadius="lg"
              w="full"
              fit="cover"
              aspectRatio="4/3"
            />
            <Text fontSize="xs" color="fg.muted">
              ESN Åbo Akademi students at a club night. Sitz, silliz and
              nights like this are where the words above stop being
              theory.
            </Text>
          </VStack>
        </Grid>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap="8"
          w="full"
          alignItems="start">
          <VStack alignItems="flex-start" gap="5" maxW="3xl">
            <Heading as="h2" size="xl">
              Still stuck? Come and find us
            </Heading>
            <Text color="fg.muted">
              Every claim in this guide traces back to the register behind
              it, and every register entry carries the date it was checked.
              If something has moved on, or you could not find your row in
              the table above, come and ask rather than guess.
            </Text>
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
          </VStack>
          <VStack alignItems="stretch" gap="2">
            <Image
              src="/photos/esn-pirates-baltic.jpg"
              alt="ESN Åbo Akademi students in costume at the Pirates of the Baltic Sea event"
              borderRadius="lg"
              w="full"
              fit="cover"
              aspectRatio="4/3"
            />
            <Text fontSize="xs" color="fg.muted">
              ESN Åbo Akademi students at Pirates of the Baltic Sea. This is
              the community you are joining.
            </Text>
          </VStack>
        </Grid>
      </Section>
    </Box>
  );
}
