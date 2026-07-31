import type { Metadata } from "next";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  For,
  Card,
} from "@chakra-ui/react";
import {
  CheckCircle2,
  MapPin,
  Clock,
  Handshake,
  Heart,
} from "lucide-react";
import Section from "@/components/ui/section";
import { AboutHero } from "@/components/ui/hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "ESN Åbo Akademi, founded 1994, is Finland's second-oldest ESN section — meet the board, find our office in Turku (Åbo), and learn how to get involved.",
};

const STATS = [
  { number: "1994", label: "ESN ÅA founded" },
  { number: "2nd", label: "oldest ESN section in Finland" },
];

const OBJECTIVES = [
  "Works in the interest of international students",
  "Improves social & practical integration",
  "Represents student needs & rights, locally, nationally, and internationally",
  "Provides information about mobility programmes",
  "Motivates students to study abroad",
  "Supports reintegration of homecoming students",
  "Improves accessibility of student mobility",
  "Cares about its members",
  "Values volunteering & active citizenship",
];

const ESN_HISTORY = [
  {
    year: "1987",
    title: "Erasmus opens new doors",
    description:
      "The European Community approved the Erasmus programme, giving more students the opportunity to study abroad.",
  },
  {
    year: "1989",
    title: "Students helping students",
    description:
      "At an evaluation meeting in Ghent, 32 former Erasmus students identified the practical problems exchange students faced. Their answer became ESN's guiding idea: students helping students.",
  },
  {
    year: "16 Oct 1989",
    title: "The first ESN section",
    description:
      "The first section to use the name Erasmus Student Network was founded in Utrecht, the Netherlands.",
  },
  {
    year: "1990",
    title: "ESN International is founded",
    description:
      "Representatives met in Copenhagen to establish ESN International as a legal association, connecting the growing network across Europe.",
  },
];

const BOARD = [
  { name: "Saida Samadova", role: "President", color: "esn.magenta" },
  { name: "Kim Pekkonen", role: "Vice-President", color: "esn.cyan" },
  { name: "Aziz Ullah", role: "Treasurer", color: "esn.darkBlue" },
  {
    name: "Yasith Hirimburegama",
    role: "Partnership Manager",
    color: "esn.green",
  },
  { name: "Somoy Tunu", role: "Trips Manager", color: "esn.orange" },
  { name: "Risti Rahaat", role: "Board Support", color: "esn.magenta" },
  { name: "Krishmi Apsara", role: "Board Support", color: "esn.cyan" },
];

const MEMBERSHIP_BENEFITS = [
  "Free entrance to themed parties and social gatherings",
  "Opportunities to join group trips and adventures",
  "Access to cultural events, workshops, and performances",
  "Networking with like-minded exchange students",
  "Priority updates on upcoming activities",
  "Volunteer work that looks good on job applications",
];

function initials(name: string) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

export default function AboutPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py="12">
        <AboutHero stats={STATS} />
      </Section>

      <Section py="12">
        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="8">
          <VStack alignItems="flex-start" gap="4">
            <Heading as="h2" size="xl">
              What ESN does
            </Heading>
            <Text color="fg.muted">
              The Erasmus Student Network was founded in 1989 and is one of the
              biggest student associations in Europe, active on local, national,
              and international levels, with around 15,000 active members
              supporting international students through buddy sections like
              ours.
            </Text>
          </VStack>
          <Grid
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            gap="3"
            alignSelf="center">
            <For each={OBJECTIVES}>
              {(objective) => (
                <HStack key={objective} alignItems="flex-start" gap="2">
                  <Icon boxSize="4" color="esn.green" mt="1" flexShrink="0">
                    <CheckCircle2 />
                  </Icon>
                  <Text fontSize="sm" color="fg.muted">
                    {objective}
                  </Text>
                </HStack>
              )}
            </For>
          </Grid>
        </Grid>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="3" maxW="3xl">
            <Text
              color="esn.magenta"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide">
              Part of a bigger story
            </Text>
            <Heading as="h2" size="xl">
              How the Erasmus Student Network began
            </Heading>
            <Text color="fg.muted">
              ESN&apos;s History Book tells how a small group of former Erasmus
              students turned one practical idea into an international
              volunteer network: help future exchange students make the most
              of their experience. ESN Åbo Akademi carries that idea forward
              here in Turku (Åbo).
            </Text>
          </VStack>

          <Grid
            w="full"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="4">
            <For each={ESN_HISTORY}>
              {(milestone) => (
                <Card.Root key={milestone.year} h="full">
                  <Card.Body gap="3">
                    <Text
                      color="esn.darkBlue"
                      fontSize="sm"
                      fontWeight="bold">
                      {milestone.year}
                    </Text>
                    <Card.Title>{milestone.title}</Card.Title>
                    <Card.Description fontSize="sm">
                      {milestone.description}
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>

          <HStack gap="4" flexWrap="wrap">
            <Text asChild color="link" fontSize="sm" fontWeight="bold">
              <a
                href="https://www.esn.org/news/celebrating-36-years-students-helping-students-esn-history-book"
                target="_blank"
                rel="noreferrer">
                Explore the ESN History Book
              </a>
            </Text>
            <Text asChild color="link" fontSize="sm" fontWeight="bold">
              <a
                href="https://esn.org/history"
                target="_blank"
                rel="noreferrer">
                Read ESN&apos;s official history
              </a>
            </Text>
          </HStack>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="flex-start" gap="4" maxW="3xl">
          <Heading as="h2" size="xl">
            ESN Åbo Akademi
          </Heading>
          <Text color="fg.muted">
            ESN vid Åbo Akademi r.f. is the official ESN section at Åbo Akademi
            University, the only Swedish-speaking multidisciplinary university
            in Finland. Together with ESN Uni Turku, it&apos;s one of two ESN
            sections active in Turku (Åbo).
          </Text>
          <Text color="fg.muted">
            We help exchange students get enjoyable cultural and social
            experiences while they&apos;re here, foster inclusivity in student
            circles, and help exchange students in any way we can.
          </Text>
          <Text fontWeight="600">
            And here&apos;s the part we&apos;re proudest of: ESN ÅA is a
            non-profit association run entirely by volunteers. Nobody is paid —
            every trip, sitz, and sauna night is organised by students who do
            it for the love of it.
          </Text>
        </VStack>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <Heading as="h2" size="xl">
            Our board, 2026
          </Heading>
          <Grid
            w="full"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="4">
            <For each={BOARD}>
              {(member) => (
                <Card.Root key={member.name}>
                  <Card.Body alignItems="center" textAlign="center" gap="2">
                    <Box
                      w="14"
                      h="14"
                      borderRadius="full"
                      bg={member.color}
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold">
                      {initials(member.name)}
                    </Box>
                    <Text fontWeight="bold">{member.name}</Text>
                    <Text fontSize="sm" color="fg.muted">
                      {member.role}
                    </Text>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
            <Card.Root colorPalette="esn.cyan" variant="elevated">
              <Card.Body alignItems="center" textAlign="center" gap="2">
                <Box
                  w="14"
                  h="14"
                  borderRadius="full"
                  bg="white"
                  borderWidth="2px"
                  borderColor="colorPalette.muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden">
                  <Image src="/aura-swan.png" alt="Aura the swan mark" w="10" />
                </Box>
                <Text fontWeight="bold">Aura the Almighty</Text>
                <Text fontSize="sm" color="fg.muted">
                  Monarch (our resident swan) — and the face of our old flag
                </Text>
              </Card.Body>
            </Card.Root>
          </Grid>
        </VStack>
      </Section>

      <Section py="12">
        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="8">
          <VStack alignItems="flex-start" gap="3">
            <HStack gap="2" color="esn.darkBlue">
              <Icon boxSize="5">
                <MapPin />
              </Icon>
              <Heading as="h2" size="lg">
                Visit us
              </Heading>
            </HStack>
            <Text color="fg.muted">
              Geologicum, Tuomiokirkontori 1, 2nd floor, 20500 Turku (Åbo). About 800
              meters (10 minutes on foot) from the Åbo Akademi campus.
            </Text>
          </VStack>
          <VStack alignItems="flex-start" gap="3">
            <HStack gap="2" color="esn.darkBlue">
              <Icon boxSize="5">
                <Clock />
              </Icon>
              <Heading as="h2" size="lg">
                Office hours
              </Heading>
            </HStack>
            <Text color="fg.muted">
              Weekly office hours, plus a bi-weekly game night. Come by to
              become a member, buy overalls, or just say hi.
            </Text>
          </VStack>
        </Grid>
      </Section>

      <Section backgroundColor="bg.alternate" py="12">
        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="8">
          <VStack alignItems="flex-start" gap="4">
            <HStack gap="2" color="esn.darkBlue">
              <Icon boxSize="5">
                <Heart />
              </Icon>
              <Heading as="h2" size="lg">
                Become an active member
              </Heading>
            </HStack>
            <VStack alignItems="flex-start" gap="2">
              <For each={MEMBERSHIP_BENEFITS}>
                {(benefit) => (
                  <HStack key={benefit} alignItems="flex-start" gap="2">
                    <Icon boxSize="4" color="esn.green" mt="1" flexShrink="0">
                      <CheckCircle2 />
                    </Icon>
                    <Text fontSize="sm" color="fg.muted">
                      {benefit}
                    </Text>
                  </HStack>
                )}
              </For>
            </VStack>
          </VStack>
          <VStack
            alignItems="flex-start"
            gap="3"
            bg="colorPalette.solid"
            colorPalette="esn.darkBlue"
            borderRadius="lg"
            p="6">
            <HStack gap="2" color="colorPalette.contrast">
              <Icon boxSize="5">
                <Handshake />
              </Icon>
              <Heading as="h3" size="lg" color="colorPalette.contrast">
                Where volunteering leads
              </Heading>
            </HStack>
            <Text color="colorPalette.subtle">
              Every board member started as a volunteer. Join in, find your
              people — and once you&apos;ve volunteered with us and it feels
              right, you can apply to join the board and help lead the section.
            </Text>
          </VStack>
        </Grid>
      </Section>
    </>
  );
}
