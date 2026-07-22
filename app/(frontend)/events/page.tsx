import {
  Badge,
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  For,
  Card,
} from "@chakra-ui/react";
import {
  Drama,
  Utensils,
  Music,
  PartyPopper,
  Users,
  Globe,
  Beer,
  Flame,
  Waves,
  Medal,
  Sun,
  Snowflake,
  BookOpen,
  Trees,
  Wine,
  Gift,
  Shirt,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Section from "@/components/ui/section";
import { EventsHero } from "@/components/ui/hero";
import { TripDetail, type TripDetailProps } from "@/components/ui/detail";

const CATEGORIES = [
  { label: "Sitz Parties", color: "esn.magenta" },
  { label: "Food Nights", color: "esn.orange" },
  { label: "Bar Crawls", color: "esn.cyan" },
  { label: "Sauna Nights", color: "esn.green" },
  { label: "Cottage Weekends", color: "esn.darkBlue" },
];

type CalendarEvent = {
  day: number;
  days: number[];
  dateLabel: string;
  weekday: string;
  title: string;
  format: string;
  detail: string;
  description: string;
  color: string;
};

const AUGUST_EVENTS: CalendarEvent[] = [
  {
    day: 22,
    days: [22, 23],
    dateLabel: "22–23 August 2026",
    weekday: "Saturday–Sunday",
    title: "Welcome Booth · Assarin",
    format: "11:00–15:00",
    detail: "In front of Assarin",
    description:
      "Meet the ESN Åbo Akademi team, ask questions, and learn about ESNcards, SIM cards, patches, and student overalls.",
    color: "esn.darkBlue",
  },
  {
    day: 22,
    days: [22, 23],
    dateLabel: "22–23 August 2026",
    weekday: "Saturday–Sunday",
    title: "Welcome Booth · TYS",
    format: "11:00–16:00",
    detail: "In front of TYS",
    description:
      "Meet the ESN Åbo Akademi team, ask questions, and learn about ESNcards, SIM cards, patches, and student overalls.",
    color: "esn.cyan",
  },
  {
    day: 24,
    days: [24],
    dateLabel: "24 August 2026",
    weekday: "Monday",
    title: "Welcome Booth",
    format: "12:00–16:00",
    detail: "Educarium, University Hill",
    description:
      "Stop by for exchange-student information, ESNcards, SIM cards, patches, and student overalls.",
    color: "esn.darkBlue",
  },
  {
    day: 25,
    days: [25],
    dateLabel: "25 August 2026",
    weekday: "Tuesday",
    title: "Welcome Booth",
    format: "12:00–16:00",
    detail: "Educarium, University Hill",
    description:
      "Stop by for exchange-student information, ESNcards, SIM cards, patches, and student overalls.",
    color: "esn.cyan",
  },
  {
    day: 27,
    days: [27],
    dateLabel: "27 August 2026",
    weekday: "Thursday",
    title: "Welcome Picnic",
    format: "From 15:00",
    detail: "Kupittaa Park · location to be confirmed",
    description: "A relaxed welcome picnic for new exchange students.",
    color: "esn.green",
  },
  {
    day: 29,
    days: [29],
    dateLabel: "29 August 2026",
    weekday: "Saturday",
    title: "Hike, Picnic & Sauna",
    format: "From 14:00",
    detail: "Ispoinen · meeting point to be confirmed",
    description:
      "An afternoon outdoors combining an Ispoinen hike, a picnic, and a Finnish sauna.",
    color: "esn.cyan",
  },
  {
    day: 31,
    days: [31],
    dateLabel: "31 August 2026",
    weekday: "Monday",
    title: "First Week in Finland Sitz",
    format: "19:00–22:00",
    detail: "Venue and registration to be confirmed",
    description:
      "A traditional student dinner with singing to welcome exchange students to their first week in Finland.",
    color: "esn.magenta",
  },
  {
    day: 31,
    days: [31],
    dateLabel: "31 August 2026",
    weekday: "Monday",
    title: "First Week Sitz Afterparty",
    format: "From 23:00",
    detail: "Venue to be confirmed",
    description: "The official afterparty following the welcome sitz.",
    color: "esn.orange",
  },
];

const SEPTEMBER_EVENTS: CalendarEvent[] = [
  {
    day: 3,
    days: [3],
    dateLabel: "3 September 2026",
    weekday: "Thursday",
    title: "Board Games Evening",
    format: "18:00–21:00",
    detail: "Venue to be confirmed",
    description:
      "An easy-going evening of childhood favourites, including UNO, Ludo, and Carrom tournaments.",
    color: "esn.cyan",
  },
  {
    day: 3,
    days: [3],
    dateLabel: "3 September 2026",
    weekday: "Thursday",
    title: "UG Klub Afterparty",
    format: "From 22:00",
    detail: "Venue to be confirmed",
    description: "Continue the evening together after board games.",
    color: "esn.orange",
  },
  {
    day: 5,
    days: [5],
    dateLabel: "5 September 2026",
    weekday: "Saturday",
    title: "Office Open Day",
    format: "09:00–21:00",
    detail: "Geologicum · final arrangements to be confirmed",
    description:
      "Visit the ESN Åbo Akademi office for information, ESNcards, SIM cards, patches, student overalls, and a relaxed hangout.",
    color: "esn.darkBlue",
  },
  {
    day: 5,
    days: [5],
    dateLabel: "5 September 2026 · provisional",
    weekday: "Saturday",
    title: "Welcome Week Party",
    format: "Time to be confirmed",
    detail: "Venue to be confirmed",
    description:
      "A proposed joint start-of-semester party with ESN Uni Turku. Final confirmation will follow.",
    color: "esn.magenta",
  },
  {
    day: 10,
    days: [10],
    dateLabel: "10 September 2026",
    weekday: "Thursday",
    title: "ÅAS Association Info Day",
    format: "15:00–17:00",
    detail: "Åbo Akademi campus · room to be confirmed",
    description:
      "Meet Åbo Akademi's student associations and hear a short English-language introduction to ESN Åbo Akademi.",
    color: "esn.green",
  },
  {
    day: 11,
    days: [11],
    dateLabel: "11 September 2026",
    weekday: "Friday",
    title: "Back to School Party",
    format: "From 23:00",
    detail: "Venue to be confirmed",
    description: "A late-night party marking the start of the autumn semester.",
    color: "esn.magenta",
  },
  {
    day: 18,
    days: [18],
    dateLabel: "18 September 2026",
    weekday: "Friday",
    title: "Parainen Apple Market",
    format: "13:00–21:00",
    detail: "Parainen · transport details to be confirmed",
    description:
      "A day trip to the traditional apple market in Parainen, also known as Pargas.",
    color: "esn.green",
  },
  {
    day: 26,
    days: [26],
    dateLabel: "26 September 2026",
    weekday: "Saturday",
    title: "Costume Sitz",
    format: "18:00–22:00",
    detail: "Venue and registration to be confirmed",
    description:
      "A themed traditional student dinner with costumes, singing, and traffic-light colours.",
    color: "esn.magenta",
  },
  {
    day: 26,
    days: [26],
    dateLabel: "26 September 2026 · provisional",
    weekday: "Saturday",
    title: "VIP / Traffic Light Party",
    format: "Time to be confirmed",
    detail: "Venue to be confirmed",
    description:
      "A proposed collaboration with ESN Uni Turku; the final format and organiser are still being confirmed.",
    color: "esn.orange",
  },
  {
    day: 29,
    days: [29, 30],
    dateLabel: "29 September–5 October 2026 · proposed",
    weekday: "Tuesday–Monday",
    title: "Lofoten Trip",
    format: "7 days · booking to be confirmed",
    detail: "Lofoten, Norway",
    description:
      "A proposed student trip organised by TimeTravels. Final booking details will be published after confirmation.",
    color: "esn.darkBlue",
  },
];

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const EVENTS: Omit<TripDetailProps, "index">[] = [
  {
    color: "esn.magenta",
    gradient: "linear-gradient(170deg, #1a0a20 0%, #2a0d30 45%, #3a1a45 100%)",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1681841766171-fdb1554c909d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Various venues, Turku",
    title: "Themed Sitz",
    dateRange: "Spring & Autumn",
    duration: "One evening · costumes on",
    featured: true,
    eyebrow: "Themed dinner party · Twice a year",
    description:
      "A sitz is a Nordic student-dinner tradition: a full sit-down dinner with songs, toasts, and a running order, all in costume. ESN Åbo Akademi runs a Disney sitz every spring and a Harry Potter sitz every autumn.",
    highlights: [
      { icon: Drama, label: "Costumes" },
      { icon: Utensils, label: "Formal dinner" },
      { icon: Music, label: "Sitz songs" },
      { icon: PartyPopper, label: "After-party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.orange",
    gradient: "linear-gradient(170deg, #1a1008 0%, #2a1a0d 45%, #301e10 100%)",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "International\nFood Night",
    dateRange: "Every semester",
    duration: "One evening",
    eyebrow: "Cultural · Potluck",
    description:
      "Bring a dish from home and taste the world without leaving Turku. Every exchange student's chance to show off (or discover) a national cuisine.",
    highlights: [
      { icon: Utensils, label: "Potluck dinner" },
      { icon: Globe, label: "Cultures" },
      { icon: Users, label: "New friends" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0a1828 0%, #0d2540 45%, #1a3a5a 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1558210598-89ba75b1724e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "Bar Crawls &\nPub Nights",
    dateRange: "Monthly",
    duration: "One evening",
    eyebrow: "Nightlife · Social",
    description:
      "A guided tour through Turku's bars with fellow exchange students: drink specials, new faces, and a proper introduction to the local nightlife.",
    highlights: [
      { icon: Beer, label: "Drink specials" },
      { icon: Users, label: "New friends" },
      { icon: Music, label: "Live music venues" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.green",
    gradient: "linear-gradient(170deg, #0a1e14 0%, #0d2a1a 45%, #1a3a28 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1676452470766-6041f4f65c9b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku",
    title: "Traditional Finnish\nSauna Night",
    dateRange: "Every semester",
    duration: "One evening",
    eyebrow: "Cultural · Traditional",
    description:
      "The real Finnish sauna experience: heat, good company, and a proper introduction to one of the country's most cherished traditions.",
    highlights: [
      { icon: Flame, label: "Sauna" },
      { icon: Waves, label: "Cold plunge" },
      { icon: Users, label: "Social" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
  {
    color: "esn.darkBlue",
    gradient: "linear-gradient(170deg, #0d1a2e 0%, #162540 45%, #1e3050 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1508059937316-a7ec25086d99?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Ahtela camping area",
    title: "Ahtela Cottage\nWeekend",
    dateRange: "End of April / June",
    duration: "Weekend · 2 nights",
    eyebrow: "Outdoors · Weekend trip",
    description:
      "Over 40 hectares of cottages on the coast, with sauna, cottage olympic games, karaoke, and a dance party. Price includes transport from Turku, meals, and accommodation.",
    highlights: [
      { icon: Flame, label: "Sauna" },
      { icon: Medal, label: "Cottage olympics" },
      { icon: Music, label: "Karaoke" },
      { icon: PartyPopper, label: "Dance party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
  },
];

const REGULAR_HANGOUTS = [
  {
    title: "Movie Nights & Board Games",
    description: "Casual, low-key evenings, no plans, just good company.",
    icon: BookOpen,
    dot: "esn.cyan",
  },
  {
    title: "Bi-weekly Office Game Night",
    description: "Drop by the ESN ÅA office at Geologicum every other week.",
    icon: Users,
    dot: "esn.magenta",
  },
  {
    title: "Hiking & Outdoor Adventures",
    description: "Escape Forest, mushroom picking, and day hikes near Turku.",
    icon: Trees,
    dot: "esn.green",
  },
  {
    title: "Ice Skating, Skiing & Climbing",
    description: "Seasonal sport meetups for however cold it gets.",
    icon: Snowflake,
    dot: "esn.orange",
  },
];

const FINNISH_TRADITIONS = [
  {
    title: "Vappu",
    description:
      "May 1st: Finland's biggest student holiday. Overalls, picnics, and sparkling wine.",
    icon: PartyPopper,
    color: "esn.magenta",
  },
  {
    title: "Appro",
    description:
      "The pre-party before a sitz, a Finnish student-culture staple in its own right.",
    icon: Wine,
    color: "esn.orange",
  },
  {
    title: "Juhannus",
    description:
      "Midsummer in late June: bonfires, cottages, and a city that empties out.",
    icon: Sun,
    color: "esn.green",
  },
  {
    title: "Pikkujoulu",
    description:
      '"Little Christmas," the pre-Christmas party tradition every November/December.',
    icon: Gift,
    color: "esn.cyan",
  },
  {
    title: "Haalarit & Patches",
    description:
      "Student overalls covered in event patches, Finnish student culture's badge of honour.",
    icon: Shirt,
    color: "esn.darkBlue",
  },
];

type MonthCalendarProps = {
  month: string;
  year: number;
  daysInMonth: number;
  events: CalendarEvent[];
  leadingDays: number[];
  leadingMonth: string;
  trailingDays: number[];
  trailingMonth: string;
  description: string;
  backgroundColor?: "bg.alternate";
  badgeColor: "esn.cyan" | "esn.magenta";
};

function MonthCalendar({
  month,
  year,
  daysInMonth,
  events,
  leadingDays,
  leadingMonth,
  trailingDays,
  trailingMonth,
  description,
  backgroundColor,
  badgeColor,
}: MonthCalendarProps) {
  const monthDays = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );

  return (
    <Section backgroundColor={backgroundColor} py={{ base: "10", md: "14" }}>
      <VStack alignItems="flex-start" gap="7" w="full">
        <VStack alignItems="flex-start" gap="2" maxW="3xl">
          <Badge colorPalette={badgeColor} size="lg">
            {month} {year}
          </Badge>
          <Heading as="h2" size="3xl">
            {month} Calendar
          </Heading>
          <Text color="fg.muted" fontSize="lg">
            {description}
          </Text>
        </VStack>

        <Box w="full" overflowX="auto" pb="2">
          <Grid
            minW="760px"
            gridTemplateColumns="repeat(7, minmax(0, 1fr))"
            borderTopWidth="1px"
            borderLeftWidth="1px"
            borderColor="border">
            {WEEKDAYS.map((weekday) => (
              <Box
                key={weekday}
                px="3"
                py="2"
                bg="bg.alternate"
                borderRightWidth="1px"
                borderBottomWidth="1px"
                borderColor="border">
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="fg.muted"
                  letterSpacing="wide">
                  {weekday}
                </Text>
              </Box>
            ))}

            {leadingDays.map((day) => (
              <Box
                key={`${leadingMonth}-${day}`}
                minH="116px"
                p="3"
                bg="bg.subtle"
                borderRightWidth="1px"
                borderBottomWidth="1px"
                borderColor="border">
                <Text fontSize="sm" color="fg.subtle">
                  {day}
                </Text>
              </Box>
            ))}

            {monthDays.map((day) => {
              const dayEvents = events.filter((event) =>
                event.days.includes(day),
              );

              return (
                <Box
                  key={day}
                  minH="116px"
                  p="3"
                  bg={dayEvents.length > 0 ? "bg.alternate" : "bg.panel"}
                  borderRightWidth="1px"
                  borderBottomWidth="1px"
                  borderColor="border">
                  <Text
                    fontSize="sm"
                    fontWeight={dayEvents.length > 0 ? "bold" : "medium"}
                    color={dayEvents.length > 0 ? "fg" : "fg.muted"}>
                    {day}
                  </Text>
                  <VStack alignItems="stretch" gap="1.5" mt="2">
                    {dayEvents.map((event) => (
                      <Box
                        key={`${event.title}-${day}`}
                        px="2"
                        py="1.5"
                        borderLeftWidth="3px"
                        borderColor={event.color}
                        bg="bg.panel"
                        borderRadius="sm">
                        <Text fontSize="xs" fontWeight="bold" lineHeight="short">
                          {event.title}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              );
            })}

            {trailingDays.map((day) => (
              <Box
                key={`${trailingMonth}-${day}`}
                minH="116px"
                p="3"
                bg="bg.subtle"
                borderRightWidth="1px"
                borderBottomWidth="1px"
                borderColor="border">
                <Text fontSize="sm" color="fg.subtle">
                  {day}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        <Grid
          w="full"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          alignItems="stretch"
          gap="4">
          {events.map((event) => (
            <Card.Root
              key={`${event.dateLabel}-${event.title}`}
              variant="outline"
              h="full">
              <Card.Body gap="3" h="full">
                <HStack justifyContent="space-between" alignItems="flex-start">
                  <HStack gap="3" alignItems="flex-start">
                    <Box
                      w="11"
                      h="11"
                      flexShrink="0"
                      display="grid"
                      placeItems="center"
                      borderRadius="md"
                      bg={event.color}
                      color="white">
                      <Text fontSize="lg" fontWeight="bold">
                        {event.day}
                      </Text>
                    </Box>
                    <VStack alignItems="flex-start" gap="0">
                      <Text fontSize="xs" color="fg.muted">
                        {event.weekday} · {event.dateLabel}
                      </Text>
                      <Card.Title>{event.title}</Card.Title>
                    </VStack>
                  </HStack>
                  <Icon boxSize="5" color={event.color} flexShrink="0">
                    <CalendarDays />
                  </Icon>
                </HStack>
                <Badge alignSelf="flex-start" variant="subtle">
                  {event.format}
                </Badge>
                <Text fontSize="sm" color="fg.muted">
                  {event.description}
                </Text>
                <HStack alignItems="flex-start" color="fg.muted" mt="auto">
                  <Icon boxSize="4" mt="0.5" flexShrink="0">
                    <MapPin />
                  </Icon>
                  <Text fontSize="sm">{event.detail}</Text>
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}

export default function EventsPage() {
  return (
    <>
      <Section backgroundColor="bg.alternate" py="12">
        <EventsHero categories={CATEGORIES} />
      </Section>

      <MonthCalendar
        month="August"
        year={2026}
        daysInMonth={31}
        events={AUGUST_EVENTS}
        leadingDays={[27, 28, 29, 30, 31]}
        leadingMonth="July"
        trailingDays={[1, 2, 3, 4, 5, 6]}
        trailingMonth="September"
        badgeColor="esn.cyan"
        description="Welcome events for the start of the semester. The schedule comes from our Autumn 2026 events calendar; unconfirmed venues and registration details will be updated as soon as they are ready."
      />

      <MonthCalendar
        month="September"
        year={2026}
        daysInMonth={30}
        events={SEPTEMBER_EVENTS}
        leadingDays={[31]}
        leadingMonth="August"
        trailingDays={[1, 2, 3, 4]}
        trailingMonth="October"
        badgeColor="esn.magenta"
        backgroundColor="bg.alternate"
        description="Socials, student-culture events, an association fair, and a proposed Lofoten trip. Items marked provisional still need final confirmation from venues or partner organisations."
      />

      <Section py="12">
        <VStack gap="8" w="full">
          <For each={EVENTS}>
            {(event, index) => (
              <TripDetail key={event.title} index={index + 1} {...event} />
            )}
          </For>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <Heading as="h2" size="xl">
            Also happening regularly
          </Heading>
          <Grid
            w="full"
            gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="4">
            <For each={REGULAR_HANGOUTS}>
              {(hangout) => (
                <Card.Root key={hangout.title}>
                  <Card.Body>
                    <HStack gap="2" mb="2">
                      <Box w="3" h="3" borderRadius="full" bg={hangout.dot} />
                      <Icon boxSize="4" color="fg.muted">
                        <hangout.icon />
                      </Icon>
                    </HStack>
                    <Text fontWeight="bold" mb="1">
                      {hangout.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {hangout.description}
                    </Text>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </VStack>
      </Section>

      <Section py="12">
        <VStack alignItems="flex-start" gap="8" w="full">
          <VStack alignItems="flex-start" gap="1">
            <Heading as="h2" size="xl">
              Finnish traditions worth knowing
            </Heading>
            <Text color="fg.muted">
              A few local customs you&apos;ll run into during your exchange,
              ESN-organised or not.
            </Text>
          </VStack>
          <Grid
            w="full"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="4">
            <For each={FINNISH_TRADITIONS}>
              {(tradition) => (
                <Card.Root
                  key={tradition.title}
                  variant="outline"
                  colorPalette={tradition.color}>
                  <Card.Body gap="2">
                    <Icon boxSize="6" color="colorPalette.fg">
                      <tradition.icon />
                    </Icon>
                    <Card.Title>{tradition.title}</Card.Title>
                    <Card.Description>{tradition.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </Grid>
        </VStack>
      </Section>
    </>
  );
}
