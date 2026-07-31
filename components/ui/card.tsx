import {
  VStack,
  Button,
  Card,
  HStack,
  Image,
  CardRootProps,
  Badge,
  Box,
  Text,
  For,
  Icon,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon, Ticket, type LucideIcon } from "lucide-react";
import NextLink from "next/link";

export type TripCardProps = {
  title: string;
  color: string;
  badges: string[];
  detail: string;
  imageSrc?: string;
} & CardRootProps;

export function TripCard({
  title,
  color,
  badges,
  detail,
  imageSrc,
  ...props
}: TripCardProps) {
  return (
    <Card.Root
      key={title}
      colorPalette={color}
      position="relative"
      zIndex="0"
      overflow="hidden"
      {...props}>
      <Box
        position="absolute"
        zIndex="-1"
        top="0"
        bottom="0"
        width="100%"
        h="32">
        <Image
          alt=""
          width="100%"
          height="100%"
          fit="cover"
          src={
            imageSrc ??
            "https://images.unsplash.com/photo-1604614006904-49e3b710eeb8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Box
          position="absolute"
          inset="0"
          background="linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.65))"
        />
      </Box>
      <Card.Body color="white" pb="4">
        <VStack h="24" justifyContent="space-between" alignItems="flex-start">
          <HStack>
            <For each={badges}>
              {(badge, index) => <Badge key={`badge-${index}`}>{badge}</Badge>}
            </For>
          </HStack>
          <Card.Title mt="auto">{title}</Card.Title>
        </VStack>
      </Card.Body>
      <Card.Footer flexDirection="column" alignItems="flex-start">
        <Text fontSize="sm" color="fg.muted">
          {detail}
        </Text>
        <HStack w="full" justifyContent="space-between" mt="2">
          <Button asChild size="sm" variant="ghost">
            <NextLink href="/trips">
              View trip details{" "}
              <Icon>
                <ExternalLinkIcon />
              </Icon>
            </NextLink>
          </Button>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}

export function CTACard({ ...props }: CardRootProps) {
  return (
    <Card.Root colorPalette="esn.darkBlue" bg="colorPalette.solid" {...props}>
      <Card.Body>
        <HStack direction="row" gap="8" alignItems="center">
          <VStack alignItems="flex-start" justifyContent="center">
            <Card.Title color="colorPalette.contrast">
              Get your ESNcard today
            </Card.Title>
            <Card.Description color="colorPalette.contrast">
              Unlock event discounts, 2000+ partner deals across Europe, and
              become part of the ESN community. Register via Kide.app with your
              AA student email.
            </Card.Description>
          </VStack>
          <VStack justifyContent="center">
            <Button asChild size="lg" colorPalette="esn.cyan">
              <NextLink href="/membership">
                Get your membership
              </NextLink>
            </Button>
          </VStack>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export type FlagshipTripCardProps = {
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  learnMoreLink: string;
  buyTicketsLink: string;
} & CardRootProps;

export function FlagshipTripCard({
  icon: EyebrowIcon,
  eyebrow,
  title,
  description,
  highlights,
  learnMoreLink,
  buyTicketsLink,
  ...props
}: FlagshipTripCardProps) {
  return (
    <Card.Root
      colorPalette="esn.darkBlue"
      bg="colorPalette.solid"
      w="full"
      {...props}>
      <Card.Body>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap="8"
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent="space-between">
          <VStack alignItems="flex-start" gap="2">
            <HStack
              gap="1"
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase"
              color="colorPalette.muted">
              {EyebrowIcon && (
                <Icon boxSize="3">
                  <EyebrowIcon />
                </Icon>
              )}
              <Text>{eyebrow}</Text>
            </HStack>
            <Card.Title color="colorPalette.contrast" fontSize="xl">
              {title}
            </Card.Title>
            <Card.Description color="colorPalette.subtle" maxW="lg">
              {description}
            </Card.Description>
            <HStack wrap="wrap" gap="2" mt="2">
              <For each={highlights}>
                {(highlight) => (
                  <Badge
                    key={highlight}
                    bg="whiteAlpha.200"
                    color="white"
                    borderRadius="full">
                    {highlight}
                  </Badge>
                )}
              </For>
            </HStack>
          </VStack>
          <Stack direction={{ base: "row", md: "column" }} gap="2">
            <Button asChild size="lg" colorPalette="esn.cyan">
              <ChakraLink asChild textDecoration="none">
                <a href={buyTicketsLink} target="_blank" rel="noreferrer">
                  <Icon>
                    <Ticket />
                  </Icon>
                  Get your ticket
                </a>
              </ChakraLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              colorPalette="esn.cyan"
              color="white"
              _hover={{ color: "colorPalette.fg" }}>
              <ChakraLink asChild textDecoration="none">
                <a href={learnMoreLink} target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </ChakraLink>
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
