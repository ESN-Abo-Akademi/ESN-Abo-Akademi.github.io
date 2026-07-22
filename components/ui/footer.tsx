import { Text, HStack } from "@chakra-ui/react";
import Socials from "./socials";
import Section from "./section";

export default function Footer() {
  return (
    <Section backgroundColor="bg.alternate" py="0">
      <HStack justifyContent="space-around">
        <Text flex="1" fontSize="sm" color="fg.muted">
          ESN Åbo Akademi · Tuomiokirkontori 1 (Geologicum), 20500 Turku
        </Text>
        <HStack gap="4">
          <Text asChild fontSize="sm" color="link" fontWeight="semibold">
            <a href="mailto:board@esnabo.org">Email the board</a>
          </Text>
          <Socials h="8" gap="3" />
        </HStack>
      </HStack>
    </Section>
  );
}
