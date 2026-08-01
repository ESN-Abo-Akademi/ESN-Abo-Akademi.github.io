"use client";

import { useState } from "react";
import {
  HStack,
  VStack,
  List,
  Button,
  For,
  Image,
  IconButton,
  ContainerProps,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.4em"
      height="1.4em"
      aria-hidden="true">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#igGrad)" />
      <rect
        x="4.4"
        y="4.4"
        width="15.2"
        height="15.2"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="#fff" />
    </svg>
  );
}
import NavItem from "./navlink";
import Section from "./section";
import Link from "next/link";

const NAVIGATIONS = [
  { name: "Home", path: "/" },
  { name: "Arriving", path: "/arriving" },
  { name: "Guide", path: "/survival-guide" },
  { name: "Trips", path: "/trips" },
  { name: "Events", path: "/events" },
  { name: "Membership", path: "/membership" },
  { name: "ESNcard", path: "/esncard" },
  { name: "About", path: "/about" },
];

export default function Navbar({ ...props }: ContainerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Section backgroundColor="bg.default" {...props} py="0">
      <HStack as="nav" justifyContent="space-between" h={{ base: "16", md: "24" }} gap="4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/esn-abo.png" alt="ESN Åbo Akademi" h={{ base: "12", md: "20" }} />
        </Link>
        <List.Root
          as="ul"
          h="100%"
          flex="1"
          display={{ base: "none", md: "flex" }}
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          gap="4"
          listStyleType="none">
          <For each={NAVIGATIONS}>
            {(item) => (
              <List.Item key={item.name}>
                <NavItem href={item.path}>{item.name}</NavItem>
              </List.Item>
            )}
          </For>
        </List.Root>
        <HStack gap="2">
          <IconButton
            asChild
            aria-label="ESN Åbo Akademi on Instagram"
            variant="ghost"
            display={{ base: "none", md: "inline-flex" }}>
            <a
              href="https://www.instagram.com/esnaboakademi/"
              target="_blank"
              rel="noreferrer">
              <InstagramIcon />
            </a>
          </IconButton>
          <Button
            asChild
            colorPalette="esn.darkBlue"
            borderRadius="md"
            display={{ base: "none", md: "inline-flex" }}>
            <Link href="/membership">Join Us</Link>
          </Button>
          <IconButton
            aria-label={open ? "Close menu" : "Open menu"}
            variant="ghost"
            display={{ base: "inline-flex", md: "none" }}
            onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </IconButton>
        </HStack>
      </HStack>
      {open && (
        <VStack
          as="nav"
          display={{ base: "flex", md: "none" }}
          alignItems="stretch"
          gap="3"
          pt="2"
          pb="5">
          <For each={NAVIGATIONS}>
            {(item) => (
              <NavItem
                key={item.name}
                href={item.path}
                fontSize="lg"
                onClick={() => setOpen(false)}>
                {item.name}
              </NavItem>
            )}
          </For>
          <Button asChild colorPalette="esn.darkBlue" borderRadius="md">
            <Link href="/membership" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </Button>
          <Button asChild variant="outline" borderRadius="md">
            <a
              href="https://www.instagram.com/esnaboakademi/"
              target="_blank"
              rel="noreferrer">
              <InstagramIcon /> @esnaboakademi
            </a>
          </Button>
        </VStack>
      )}
    </Section>
  );
}
