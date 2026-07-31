import {
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "./section";

const EXPLORE = [
  { name: "Trips", path: "/trips" },
  { name: "Events", path: "/events" },
  { name: "Membership", path: "/membership" },
  { name: "ESNcard", path: "/esncard" },
  { name: "About", path: "/about" },
];

const CONTACT = [
  { name: "board@esnabo.org", href: "mailto:board@esnabo.org" },
  { name: "Instagram", href: "https://www.instagram.com/esnaboakademi/" },
  { name: "Facebook", href: "https://www.facebook.com/EsnAboAkademi" },
];

export default function Footer() {
  return (
    <Section backgroundColor="bg.alternate" py="10">
      <Grid
        w="full"
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
        gap="8">
        <VStack alignItems="flex-start" gap="2">
          <HStack gap="2">
            <Image src="/aura-swan.png" alt="" h="7" />
            <Text fontFamily="heading" fontWeight="800" fontSize="lg">
              ESN Åbo Akademi
            </Text>
          </HStack>
          <Text fontSize="sm" color="fg.muted">
            A volunteer-run non-profit, part of the Erasmus Student Network —
            students helping students since 1989.
          </Text>
          <Text fontSize="sm" color="fg.muted">
            Geologicum, Tuomiokirkontori 1, 2nd floor, 20500 Turku (Åbo), Finland
          </Text>
        </VStack>
        <VStack alignItems="flex-start" gap="2">
          <Text
            fontWeight="700"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="wider"
            color="fg.muted">
            Explore
          </Text>
          {EXPLORE.map((item) => (
            <ChakraLink asChild key={item.name} fontSize="sm" color="fg">
              <NextLink href={item.path}>{item.name}</NextLink>
            </ChakraLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start" gap="2">
          <Text
            fontWeight="700"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="wider"
            color="fg.muted">
            Contact
          </Text>
          {CONTACT.map((item) => (
            <ChakraLink
              key={item.name}
              href={item.href}
              fontSize="sm"
              color="fg"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}>
              {item.name}
            </ChakraLink>
          ))}
        </VStack>
      </Grid>
      <Text mt="8" fontSize="xs" color="fg.subtle">
        © 2026 ESN vid Åbo Akademi rf · Turku (Åbo), Finland
      </Text>
    </Section>
  );
}
