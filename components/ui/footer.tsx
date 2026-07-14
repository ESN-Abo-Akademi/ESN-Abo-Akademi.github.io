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
        <Socials h="8" gap="3" />
      </HStack>
    </Section>
  );
}
