import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Events",
  description:
    "Sitz parties, sauna nights, food nights, bar crawls, and the full autumn 2026 event calendar for exchange students in Turku (Åbo).",
};

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
    detail: "Kupittaa Park",
    description: "A relaxed welcome picnic for new exchange students.",
    color: "esn.green",
  },
  {
    day: 29,
    days: [29],
    dateLabel: "29 August 2026",
    weekday: "Saturday",
    title: "Hike & Sauna",
    format: "From 15:00",
    detail: "Ispoinen · sauna €7 per person",
    description:
      "An afternoon hike at Ispoinen followed by a swimsuit-friendly sauna by the sea.",
    color: "esn.cyan",
  },
  {
    day: 30,
    days: [30],
    dateLabel: "30 August 2026",
    weekday: "Sunday",
    title: "City Tour",
    format: "Time announced on Instagram",
    detail: "Meet at the ESN ÅA office, Geologicum",
    description:
      "A guided walking tour of Turku (Åbo) with the ESN team. Dress for the weather.",
    color: "esn.green",
  },
  {
    day: 31,
    days: [31],
    dateLabel: "31 August 2026",
    weekday: "Monday",
    title: "Hello Turku (Åbo)! Sitz",
    format: "19:00–22:00",
    detail: "Geologicum",
    description:
      "A traditional sitz — a formal dinner with singing — to welcome exchange students to their first week in Finland. Dress code: traditional dress from your country, or similar.",
    color: "esn.magenta",
  },
  {
    day: 31,
    days: [31],
    dateLabel: "31 August 2026",
    weekday: "Monday",
    title: "Hello Turku! Sitz Afterparty",
    format: "From 23:00",
    detail: "Bar Ihku or Lygas · final venue on Instagram",
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
    detail: "ESN ÅA office, Geologicum",
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
    detail: "UG Klub",
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
    day: 10,
    days: [10],
    dateLabel: "10 September 2026",
    weekday: "Thursday",
    title: "Actives Night",
    format: "18:00–20:00",
    detail: "Saaristobaari · to be confirmed",
    description:
      "A social night for ESN ÅA's active volunteers — if you have been helping out, or want to start, this one is for you.",
    color: "esn.orange",
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
    detail: "Parainen (Pargas) · travel with a Föli bus ticket",
    description:
      "A day trip to the traditional apple market in Parainen, also known as Pargas.",
    color: "esn.green",
  },
  {
    day: 23,
    days: [23],
    dateLabel: "23 September 2026",
    weekday: "Wednesday",
    title: "Costume Sitz",
    format: "18:00–22:00",
    detail: "Geologicum · registration to be confirmed",
    description:
      "A themed traditional student dinner with costumes and singing — wear a colour to match your traffic-light status. Afterparty not included.",
    color: "esn.magenta",
  },
  {
    day: 23,
    days: [23],
    dateLabel: "23 September 2026 · provisional",
    weekday: "Wednesday",
    title: "VIP / Traffic Light Party",
    format: "Time to be confirmed",
    detail: "Lygas · to be confirmed",
    description:
      "A proposed joint party with ESN Uni Turku — if the collaboration does not land, it becomes our own traffic-light party.",
    color: "esn.orange",
  },
  {
    day: 29,
    days: [29, 30],
    dateLabel: "29 September–5 October 2026",
    weekday: "Tuesday–Monday",
    title: "Lofoten Trip",
    format: "6 nights · on sale now",
    detail: "Henningsvær & Kabelvåg, Lofoten, Norway",
    description:
      "An adventure trip to the Lofoten islands organised by Timetravels, from €475. Book on the Timetravels website — see our Trips page.",
    color: "esn.darkBlue",
  },
];

const OCTOBER_EVENTS: CalendarEvent[] = [
  {
    day: 6,
    days: [6, 7, 8],
    dateLabel: "6–8 October 2026",
    weekday: "Tuesday–Thursday",
    title: "Cottage Trip",
    format: "2 nights · to be confirmed",
    detail: "Vienola",
    description:
      "A cottage getaway with the ESN crowd — sauna, games, and cabin life. Details will be confirmed closer to the date.",
    color: "esn.cyan",
  },
  {
    day: 6,
    days: [6, 7, 8, 9, 10, 11],
    dateLabel: "6–11 October 2026",
    weekday: "Tuesday–Sunday",
    title: "Baltics Trip",
    format: "5 nights · on sale now",
    detail: "Tallinn · Riga · Vilnius",
    description:
      "The Baltic capitals with Timetravels, from €339, including an overnight ferry. Book on the Timetravels website — see our Trips page.",
    color: "esn.darkBlue",
  },
  {
    day: 8,
    days: [8, 9, 10, 11],
    dateLabel: "8–11 October 2026",
    weekday: "Thursday–Sunday",
    title: "NEP Trondheim",
    format: "For ESN volunteers",
    detail: "Trondheim, Norway",
    description:
      "The Northern European Platform — an ESN training and networking event for volunteers from across the region.",
    color: "esn.green",
  },
  {
    day: 14,
    days: [14],
    dateLabel: "14 October 2026",
    weekday: "Wednesday",
    title: "Climbing Workshop",
    format: "Details to be confirmed",
    detail: "Venue to be confirmed",
    description: "An indoor climbing session — details coming soon.",
    color: "esn.cyan",
  },
  {
    day: 23,
    days: [23],
    dateLabel: "23 October 2026",
    weekday: "Friday",
    title: "Kurjenrahka Hike",
    format: "13:00–17:00",
    detail: "Kurjenrahka National Park · transport to be confirmed",
    description:
      "A group hike through the bogs and forests of Kurjenrahka National Park before the winter dark sets in.",
    color: "esn.green",
  },
  {
    day: 30,
    days: [30],
    dateLabel: "30 October 2026",
    weekday: "Friday",
    title: "Harry Potter / Halloween Sitz",
    format: "Evening · time to be confirmed",
    detail: "Venue to be confirmed",
    description:
      "The autumn edition of our famous themed sitz — Halloween meets Hogwarts, the night before All Saints' Day, so no classes the next morning.",
    color: "esn.magenta",
  },
];

const NOVEMBER_EVENTS: CalendarEvent[] = [
  {
    day: 7,
    days: [7, 8, 9],
    dateLabel: "7–9 November 2026",
    weekday: "Saturday–Monday",
    title: "Pirates of the Baltic Sea #28",
    format: "National ESN cruise",
    detail: "Baltic Sea · Helsinki–Stockholm",
    description:
      "ESN Finland's legendary national cruise — 1,500+ students on one ship. Tickets via cruise.pobs.fi; see our Trips page.",
    color: "esn.darkBlue",
  },
  {
    day: 20,
    days: [20],
    dateLabel: "20 November 2026",
    weekday: "Friday",
    title: "Winter Sitz",
    format: "18:00–22:00",
    detail: "Venue to be confirmed",
    description:
      "A winter-themed sitz dinner to warm up the darkest stretch of the semester.",
    color: "esn.magenta",
  },
  {
    day: 20,
    days: [20],
    dateLabel: "20 November 2026",
    weekday: "Friday",
    title: "Winter Sitz Afterparty",
    format: "From 23:00",
    detail: "Venue to be confirmed",
    description: "The afterparty following the Winter Sitz.",
    color: "esn.orange",
  },
  {
    day: 21,
    days: [21, 22, 23, 24, 25, 26, 27],
    dateLabel: "21–27 November 2026",
    weekday: "Saturday–Friday",
    title: "Lapland · Kilpisjärvi Trip",
    format: "6 nights · on sale now",
    detail: "Rovaniemi · Kilpisjärvi · Levi",
    description:
      "Far beyond the Arctic Circle with Timetravels, from €439 — prime Northern Lights season. See our Trips page.",
    color: "esn.darkBlue",
  },
  {
    day: 27,
    days: [27],
    dateLabel: "27 November 2026",
    weekday: "Friday",
    title: "Movie Night & Patch Sewing",
    format: "18:00–23:00",
    detail: "Venue to be confirmed",
    description:
      "A cosy night in: a film on the big screen while you finally sew those patches onto your overalls.",
    color: "esn.cyan",
  },
];

const DECEMBER_EVENTS: CalendarEvent[] = [
  {
    day: 4,
    days: [4],
    dateLabel: "4 December 2026",
    weekday: "Friday",
    title: "Vaarniemi Nature Trail Hike",
    format: "12:00–18:00",
    detail: "Vaarniemi / Kyyrlä–Toijainen trail · transport to be confirmed",
    description:
      "A winter group hike — December daylight in Turku (Åbo) ends around 15:30, so bring a headlamp for the last stretch.",
    color: "esn.green",
  },
  {
    day: 9,
    days: [9],
    dateLabel: "9 December 2026",
    weekday: "Wednesday",
    title: "Sledging Day",
    format: "12:00–14:00",
    detail: "Location announced on Instagram",
    description:
      "Grab a sled and join us on one of Turku (Åbo)'s free sledging hills.",
    color: "esn.cyan",
  },
  {
    day: 17,
    days: [17],
    dateLabel: "17 December 2026",
    weekday: "Thursday",
    title: "Christmas + Farewell Sitz",
    format: "18:00–22:00",
    detail: "Venue to be confirmed",
    description:
      "A Christmas-themed sitz and term-end celebration — the big goodbye before the holidays.",
    color: "esn.magenta",
  },
  {
    day: 17,
    days: [17],
    dateLabel: "17 December 2026",
    weekday: "Thursday",
    title: "Farewell Sitz Afterparty",
    format: "From 23:00",
    detail: "Venue to be confirmed",
    description: "The afterparty following the Christmas sitz.",
    color: "esn.orange",
  },
  {
    day: 25,
    days: [25],
    dateLabel: "25 December 2026 · provisional",
    weekday: "Friday",
    title: "Christmas Cottage Trip",
    format: "Dates to be confirmed",
    detail: "Vienola",
    description:
      "A cosy Christmas celebration at the cottage with ESN friends, for everyone spending the holidays in Finland.",
    color: "esn.cyan",
  },
];

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const EVENTS: Omit<TripDetailProps, "index">[] = [
  {
    color: "esn.magenta",
    gradient: "linear-gradient(170deg, #1a0a20 0%, #2a0d30 45%, #3a1a45 100%)",
    imageURL: "/scenery/ai-sitz-hall.jpg",
    location: "Various venues, Turku (Åbo)",
    title: "Themed Sitz",
    dateRange: "Spring & Autumn",
    duration: "One evening · costumes on",
    featured: true,
    eyebrow: "Themed sitz party · Twice a year",
    description:
      "A sitz is a Nordic student-dinner tradition: a full sit-down dinner with songs, toasts, and a running order, all in costume. ESN Åbo Akademi runs a Disney sitz every spring and a Harry Potter sitz every autumn — and more sitzes are organised through the year, so keep an eye on our Instagram.",
    highlights: [
      { icon: Drama, label: "Costumes" },
      { icon: Utensils, label: "Formal dinner" },
      { icon: Music, label: "Sitz songs" },
      { icon: PartyPopper, label: "After-party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
    ctaHref: "https://www.instagram.com/esnaboakademi/",
  },
  {
    color: "esn.orange",
    gradient: "linear-gradient(170deg, #1a1008 0%, #2a1a0d 45%, #301e10 100%)",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku (Åbo)",
    title: "International\nFood Night",
    dateRange: "Every semester",
    duration: "One evening",
    eyebrow: "Cultural · Potluck",
    description:
      "Bring a dish from home and taste the world without leaving Turku (Åbo). Every exchange student's chance to show off (or discover) a national cuisine.",
    highlights: [
      { icon: Utensils, label: "Potluck dinner" },
      { icon: Globe, label: "Cultures" },
      { icon: Users, label: "New friends" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
    ctaHref: "https://www.instagram.com/esnaboakademi/",
  },
  {
    color: "esn.cyan",
    gradient: "linear-gradient(170deg, #0a1828 0%, #0d2540 45%, #1a3a5a 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1558210598-89ba75b1724e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku (Åbo)",
    title: "Bar Crawls &\nPub Nights",
    dateRange: "Monthly",
    duration: "One evening",
    eyebrow: "Nightlife · Social",
    description:
      "A guided tour through Turku (Åbo)'s bars with fellow exchange students: drink specials, new faces, and a proper introduction to the local nightlife.",
    highlights: [
      { icon: Beer, label: "Drink specials" },
      { icon: Users, label: "New friends" },
      { icon: Music, label: "Live music venues" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
    ctaHref: "https://www.instagram.com/esnaboakademi/",
  },
  {
    color: "esn.green",
    gradient: "linear-gradient(170deg, #0a1e14 0%, #0d2a1a 45%, #1a3a28 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1676452470766-6041f4f65c9b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Turku (Åbo)",
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
    ctaHref: "https://www.instagram.com/esnaboakademi/",
  },
  {
    color: "esn.darkBlue",
    gradient: "linear-gradient(170deg, #0d1a2e 0%, #162540 45%, #1e3050 100%)",
    imageURL:
      "https://images.unsplash.com/photo-1508059937316-a7ec25086d99?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Southwest Finland coast",
    title: "Cottage\nWeekend",
    dateRange: "End of April / June",
    duration: "Weekend · 2 nights",
    eyebrow: "Outdoors · Weekend trip",
    description:
      "A weekend of cottages on the coast, with sauna, cottage olympic games, karaoke, and a dance party. Price includes transport from Turku (Åbo), meals, and accommodation.",
    highlights: [
      { icon: Flame, label: "Sauna" },
      { icon: Medal, label: "Cottage olympics" },
      { icon: Music, label: "Karaoke" },
      { icon: PartyPopper, label: "Dance party" },
    ],
    organizer: "Organised by ESN Åbo Akademi",
    ctaLabel: "Follow for dates on Instagram",
    ctaHref: "https://www.instagram.com/esnaboakademi/",
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
    description: "Escape Forest, mushroom picking, and day hikes near Turku (Åbo).",
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

      <MonthCalendar
        month="October"
        year={2026}
        daysInMonth={31}
        events={OCTOBER_EVENTS}
        leadingDays={[28, 29, 30]}
        leadingMonth="September"
        trailingDays={[1]}
        trailingMonth="November"
        badgeColor="esn.cyan"
        description="Trips, a national ESN event, and the autumn's big themed sitz. Several venues are still being confirmed."
      />

      <MonthCalendar
        month="November"
        year={2026}
        daysInMonth={30}
        events={NOVEMBER_EVENTS}
        leadingDays={[26, 27, 28, 29, 30, 31]}
        leadingMonth="October"
        trailingDays={[1, 2, 3, 4, 5, 6]}
        trailingMonth="December"
        badgeColor="esn.magenta"
        backgroundColor="bg.alternate"
        description="The national cruise, the Winter Sitz, and the Lapland trip — the heart of the winter season."
      />

      <MonthCalendar
        month="December"
        year={2026}
        daysInMonth={31}
        events={DECEMBER_EVENTS}
        leadingDays={[30]}
        leadingMonth="November"
        trailingDays={[1, 2, 3]}
        trailingMonth="January"
        badgeColor="esn.cyan"
        description="Winter hikes, sledging, and the farewell sitz that closes the semester."
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
