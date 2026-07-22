import {
  HStack,
  List,
  Button,
  For,
  Image,
  ContainerProps,
} from "@chakra-ui/react";
import NavItem from "./navlink";
import Section from "./section";
import Link from "next/link";

const NAVIGATIONS = [
  { name: "Home", path: "/" },
  { name: "Trips", path: "/trips" },
  { name: "Events", path: "/events" },
  { name: "Membership", path: "/membership" },
  { name: "ESNcard", path: "/esncard" },
  { name: "About", path: "/about" },
];

export default function Navbar({ ...props }: ContainerProps) {
  return (
    <Section backgroundColor="bg.default" {...props} py="0">
      <HStack as="nav" justifyContent="space-between" h="16">
        <Link href="/">
          <Image src="/esn-abo.png" alt="ESN Åbo Akademi" h="20" />
        </Link>
        <List.Root
          as="ul"
          h="100%"
          flex="1"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          gap={{ base: "2", md: "4" }}
          listStyleType="none">
          <For each={NAVIGATIONS}>
            {(item) => (
              <List.Item key={item.name}>
                <NavItem href={item.path}>{item.name}</NavItem>
              </List.Item>
            )}
          </For>
        </List.Root>
        <Button asChild colorPalette="esn.darkBlue" borderRadius="md">
          <Link href="/membership">Join Us</Link>
        </Button>
      </HStack>
    </Section>
  );
}
