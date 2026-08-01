import { Table, Box, Text, Heading, HStack, VStack } from "@chakra-ui/react";
import { FactSource } from "@/components/ui/fact-note";
import { readFactUnchecked } from "@/content/arrival-facts";

interface Row {
  topic: string;
  exchange: string;
  degree: string;
  doctoral: string;
  /** Register ids this row summarises. Rendered as provenance and checked at build. */
  factIds: string[];
}

const TABLE_HEADING_ID = "audience-table-heading";

// Each cell below is a deliberately terser summary of the register entries
// listed in that row's factIds. The register is the source of truth; when it
// is re-verified in December, update the matching rows here in the same
// pass. The check below fails the build if a row cites an id that was
// renamed or removed from the register, so a stale row cannot go unnoticed.
//
// Any exact figure in a cell must also appear in the register, so that the
// provenance rendered below the table covers it.
const ROWS: Row[] = [
  {
    topic: "Föli student travel card",
    exchange:
      "Not eligible. A one-semester exchange fails the nine-month, degree-leading requirement.",
    degree:
      "Eligible if you are 20 or over, studying full time toward a degree, and registered in the Föli region.",
    doctoral: "Check your own eligibility against the Föli criteria.",
    factIds: ["foliStudentCard"],
  },
  {
    topic: "Student lunch (Kela meal subsidy)",
    exchange:
      "Eligible. A subsidised lunch costs at most 3.10 euro with a Frank, Kide.app, Slice or Tuudo card.",
    degree: "Eligible on the same terms.",
    doctoral:
      "Not eligible. Postgraduate student cards are not accepted for the meal subsidy.",
    factIds: ["mealSubsidy", "mealSubsidyDoctoral"],
  },
  {
    topic: "Healthcare",
    exchange:
      "No Kela fee, and no FSHS access. Use public health services with a European Health Insurance Card.",
    degree:
      "Pay the Kela fee of 35.35 euro per term (2026) and use FSHS. Exempt if you hold social security cover in another EU or EEA country, Switzerland, Great Britain or Northern Ireland, but you may still use FSHS.",
    doctoral: "No Kela fee, and no FSHS access.",
    factIds: ["healthExchange", "healthDegree", "healthDoctoral"],
  },
  {
    topic: "Housing",
    exchange: "TYS, on a fixed-term contract tied to the semester.",
    degree:
      "TYS, or Tavasthem, the student union's own house in the centre. Tavasthem leases run for a minimum of 12 months.",
    doctoral: "As for degree students.",
    factIds: ["tysApplication", "tavasthem"],
  },
  {
    topic: "Student union membership",
    exchange: "Optional. Join by paying the fee, which unlocks the student card.",
    degree: "Automatic under Finnish law.",
    doctoral: "As for degree students.",
    factIds: ["studentUnion"],
  },
  {
    topic: "Banking",
    exchange:
      "Åbo Akademi advises against opening a Finnish account for a single semester. Wise or Revolut are the usual answer.",
    degree: "A Finnish account is normal and worth opening.",
    doctoral: "As for degree students.",
    factIds: ["banking"],
  },
];

// Fails the build if a row cites a register id that was renamed or removed.
// This is the check Wave 1 lacked, which let six register entries go dead.
ROWS.forEach((row) =>
  row.factIds.forEach((id) => {
    readFactUnchecked(id);
  }),
);

/**
 * The exchange / degree / doctoral branching table. Merging these audiences
 * produces advice that is actively wrong for at least Föli and healthcare,
 * so this table is deliberately the first substantive block on the page.
 */
export function AudienceTable() {
  return (
    <VStack alignItems="stretch" gap="4" w="full">
      <Heading as="h2" size="xl" id={TABLE_HEADING_ID}>
        First, which kind of student are you?
      </Heading>
      <Text color="fg.muted" maxW="3xl">
        A lot of advice about studying in Turku (Åbo) is written as if every
        international student gets the same answer. Several important ones
        differ. Find your column and use that.
      </Text>
      <Box overflowX="auto" w="full">
        <Table.Root
          size="sm"
          striped
          minW="720px"
          aria-labelledby={TABLE_HEADING_ID}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Topic</Table.ColumnHeader>
              <Table.ColumnHeader>Exchange</Table.ColumnHeader>
              <Table.ColumnHeader>Degree</Table.ColumnHeader>
              <Table.ColumnHeader>Doctoral or licentiate</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ROWS.map((row) => (
              <Table.Row key={row.topic}>
                <Table.Cell fontWeight="bold">{row.topic}</Table.Cell>
                <Table.Cell>{row.exchange}</Table.Cell>
                <Table.Cell>{row.degree}</Table.Cell>
                <Table.Cell>{row.doctoral}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
      <VStack alignItems="flex-start" gap="3">
        <Text fontSize="xs" color="fg.muted">
          Where each row above comes from:
        </Text>
        {ROWS.map((row) => (
          <VStack key={row.topic} alignItems="flex-start" gap="1">
            <Text fontSize="xs" fontWeight="bold" color="fg.muted">
              {row.topic}
            </Text>
            <HStack gap="3" flexWrap="wrap">
              {row.factIds.map((id) => (
                <FactSource key={id} id={id} />
              ))}
            </HStack>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}
