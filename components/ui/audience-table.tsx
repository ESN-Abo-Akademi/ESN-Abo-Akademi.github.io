import { Table, Box, Text, Heading, HStack, VStack } from "@chakra-ui/react";
import { FactSource } from "@/components/ui/fact-note";

interface Row {
  topic: string;
  exchange: string;
  degree: string;
  doctoral: string;
}

const TABLE_HEADING_ID = "audience-table-heading";

// Each cell below is a deliberately terser summary of register entries in
// content/arrival-facts.ts. The register is the source of truth; when it is
// re-verified in December, update the matching rows here in the same pass.
//
//   Föli student travel card  ->  foliStudentCard
//   Healthcare                ->  healthExchange, healthDegree, healthDoctoral
//   Housing                   ->  tysApplication (Tavasthem has no entry yet)
//   Student union membership  ->  studentUnion
//   Banking                   ->  banking
//
// Any exact figure in a cell must also appear in the register, so that the
// provenance line below the table covers it.
const ROWS: Row[] = [
  {
    topic: "Föli student travel card",
    exchange:
      "Not eligible. A one-semester exchange fails the nine-month, degree-leading requirement.",
    degree:
      "Eligible if you are 20 or over, studying full time toward a degree, and registered in the Föli region.",
    doctoral: "Check your own eligibility against the Föli criteria.",
  },
  {
    topic: "Healthcare",
    exchange:
      "No Kela fee, and no FSHS access. Use public health services with a European Health Insurance Card.",
    degree:
      "Pay the Kela fee of 35.35 euro per term (2026) and use FSHS. Exempt if you hold social security cover in another EU or EEA country, Switzerland, Great Britain or Northern Ireland, but you may still use FSHS.",
    doctoral: "No Kela fee, and no FSHS access.",
  },
  {
    topic: "Housing",
    exchange: "TYS, on a fixed-term contract tied to the semester.",
    degree:
      "TYS, or Tavasthem, the student union's own house in the centre. Tavasthem leases run for a minimum of 12 months.",
    doctoral: "As for degree students.",
  },
  {
    topic: "Student union membership",
    exchange: "Optional. Join by paying the fee, which unlocks the student card.",
    degree: "Automatic under Finnish law.",
    doctoral: "As for degree students.",
  },
  {
    topic: "Banking",
    exchange:
      "Åbo Akademi advises against opening a Finnish account for a single semester. Wise or Revolut are the usual answer.",
    degree: "A Finnish account is normal and worth opening.",
    doctoral: "As for degree students.",
  },
];

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
      <VStack alignItems="flex-start" gap="1">
        <Text fontSize="xs" color="fg.muted">
          Where the rows with a rule or a figure in them come from:
        </Text>
        <HStack gap="2" alignItems="baseline">
          <Text fontSize="xs" color="fg.muted">
            Föli eligibility:
          </Text>
          <FactSource id="foliStudentCard" />
        </HStack>
        <HStack gap="2" alignItems="baseline">
          <Text fontSize="xs" color="fg.muted">
            Kela healthcare fee:
          </Text>
          <FactSource id="healthDegree" />
        </HStack>
      </VStack>
    </VStack>
  );
}
