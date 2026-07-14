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
  tripStart: Date;
  tripEnd: Date;
} & CardRootProps;

export function TripCard({
  title,
  color,
  badges,
  tripStart,
  tripEnd,
  ...props
}: TripCardProps) {
  return (
    <Card.Root
      key={title}
      colorPalette={`esn.${color}`}
      position="relative"
      zIndex="0"
      overflow="hidden">
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
          src="https://images.unsplash.com/photo-1604614006904-49e3b710eeb8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          12 March to 13 March
        </Text>
        <HStack w="full" justifyContent="space-between" mt="2">
          <Button size="sm" variant="ghost">
            Book Now{" "}
            <Icon>
              <ExternalLinkIcon />
            </Icon>
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
            <Button size="lg" colorPalette="esn.cyan">
              Follow us on Kide.app
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
                <NextLink href={buyTicketsLink}>
                  <Icon>
                    <Ticket />
                  </Icon>
                  Get your ticket
                </NextLink>
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
                <NextLink href={learnMoreLink}>Learn more</NextLink>
              </ChakraLink>
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}

export function PartnerCard({ ...props }: CardRootProps) {
  return (
    <Card.Root variant="outline" {...props}>
      <Card.Body
        gap="1"
        p="4"
        alignItems="center"
        justifyContent="center"
        minW="32"
        minH="32">
        <Image src="Linux.png" alt="Some Image" maxW="16" maxH="16" />
        <Card.Title color="fg.subtle" fontSize="sm">
          ESN ÅA
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
}
