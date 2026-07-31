import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Button,
  Icon,
  Image,
  For,
  type StackProps,
} from "@chakra-ui/react";
import { HeroVideo } from "./herovideo";
import { MapPin, Star, type LucideIcon } from "lucide-react";

export type TripHighlight = {
  icon: LucideIcon;
  label: string;
};

export type TripDetailProps = {
  index: number;
  color: string;
  gradient: string;
  imageURL?: string;
  location: string;
  title: string;
  dateRange: string;
  duration: string;
  eyebrow: string;
  featured?: boolean;
  description: string;
  highlights: TripHighlight[];
  organizer: string;
  ctaLabel: string;
  ctaHref?: string;
  videoURL?: string;
} & StackProps;

export function TripDetail({
  index,
  color,
  gradient,
  imageURL,
  location,
  title,
  dateRange,
  duration,
  eyebrow,
  featured,
  description,
  highlights,
  organizer,
  ctaLabel,
  ctaHref,
  videoURL,
  ...props
}: TripDetailProps) {
  const flipped = index % 2 === 0;

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      colorPalette={color}
      gap="0"
      w="full"
      borderRadius="lg"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "perspective(1200px) rotateX(1.5deg) translateY(-8px)",
        boxShadow: "2xl",
      }}
      css={{
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": { transform: "none" },
        },
      }}
      {...props}>
      <Box
        position="relative"
        overflow="hidden"
        flex="1"
        minH="xl"
        p="8"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        background={gradient}
        order={{ base: 1, md: flipped ? 2 : 1 }}>
        {videoURL ? (
          <HeroVideo src={videoURL} poster={imageURL ?? ""} />
        ) : (
          imageURL && (
            <Image
              alt=""
              position="absolute"
              inset="0"
              w="full"
              h="full"
              fit="cover"
              src={imageURL}
            />
          )
        )}
        <Box
          position="absolute"
          inset="0"
          background="linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)"
        />
        <VStack position="relative" alignItems="flex-start" gap="3">
          <HStack
            gap="1"
            color="whiteAlpha.700"
            fontSize="xs"
            letterSpacing="wide">
            <Icon boxSize="3">
              <MapPin />
            </Icon>
            <Text textTransform="uppercase">{location}</Text>
          </HStack>
          <Heading
            as="h3"
            size="2xl"
            color="white"
            whiteSpace="pre-line"
            lineHeight="1.1">
            {title}
          </Heading>
          <HStack gap="2" wrap="wrap">
            <Badge
              bg="whiteAlpha.200"
              borderWidth="1px"
              borderColor="whiteAlpha.300"
              color="white"
              borderRadius="full">
              {dateRange}
            </Badge>
            <Text fontSize="sm" color="whiteAlpha.600">
              {duration}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <VStack
        flex="1"
        alignItems="flex-start"
        gap="4"
        p={{ base: "6", md: "9" }}
        justifyContent="center"
        order={{ base: 2, md: flipped ? 1 : 2 }}>
        <HStack
          gap="1"
          color="fg.muted"
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase">
          {featured && (
            <Icon boxSize="3" color="yellow.400">
              <Star fill="currentColor" />
            </Icon>
          )}
          <Text>{featured ? `Most popular · ${eyebrow}` : eyebrow}</Text>
        </HStack>
        <Text color="fg.muted" lineHeight="1.7">
          {description}
        </Text>
        <VStack alignItems="flex-start" gap="2">
          <Text
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="fg.subtle">
            Highlights
          </Text>
          <HStack wrap="wrap" gap="2">
            <For each={highlights}>
              {(highlight) => (
                <Badge
                  key={highlight.label}
                  borderRadius="full"
                  color="fg"
                  px="3"
                  py="1"
                  gap="1">
                  <Icon boxSize="3">
                    <highlight.icon />
                  </Icon>
                  {highlight.label}
                </Badge>
              )}
            </For>
          </HStack>
        </VStack>
        <HStack gap="2" fontSize="sm" color="fg.muted">
          <Box w="1.5" h="1.5" borderRadius="full" bg="colorPalette.solid" />
          <Text>{organizer}</Text>
        </HStack>
        <VStack w="full" gap="2">
          {ctaHref ? (
            <Button asChild w="full" colorPalette="esn.darkBlue">
              <a href={ctaHref} target="_blank" rel="noreferrer">
                {ctaLabel} →
              </a>
            </Button>
          ) : (
            <Button w="full" colorPalette="esn.darkBlue">
              {ctaLabel} →
            </Button>
          )}
        </VStack>
      </VStack>
    </Stack>
  );
}
