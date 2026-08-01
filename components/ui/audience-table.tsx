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
    degree: "Automatic. Membership is compulsory by law.",
    // Not "as for degree students": ÅAS says licentiate and doctoral
    // students join voluntarily, exactly as exchange students do. The
    // compulsory-by-law rule covers degree students only.
    doctoral: "Optional, as for exchange students. Join by paying the fee.",
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
      {/* On-screen table, unchanged. `overflowX="auto"` plus the fixed
          `minW` below is correct for screen, where the reader can scroll a
          narrow viewport sideways -- that behaviour was reviewed and
          approved separately and this fix does not touch it. Print has no
          scrolling, so the same box would silently clip the rightmost
          ("Doctoral or licentiate") column off the page. `audience-table-
          scroll` is a print-only hook: app/(frontend)/survival-guide/
          print.css hides this whole box when printing, and only when
          printing, via that class name -- it has no effect on screen and no
          effect at all on /arriving, which renders this same component but
          never loads that stylesheet. */}
      <Box overflowX="auto" w="full" className="audience-table-scroll">
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

      {/* Print-only stacked replacement for the table above: one heading
          per topic, then the same three cell strings as three labelled
          lines, at full page width. Chosen over reflowing the four-column
          table to page width because most cells here are full sentences
          (see e.g. the "Healthcare" row), and a four-column table narrow
          enough to fit A4 either wraps those sentences into a thin, hard-to
          scan strip or forces a type size small enough to hurt legibility
          on paper; a stacked layout reads like ordinary prose instead.
          `display="none"` is this component's own base style, so the block
          is hidden on screen -- and, just as importantly, hidden by default
          on /arriving too, which renders this same component but has no
          print stylesheet of its own to turn it back on. Only
          survival-guide/print.css's `@media print` rule, gated on that
          page's own marker, overrides it back to visible, and only when
          printing. Built from the same `ROWS` data as the table above, so
          there is exactly one copy of every cell's text -- nothing here can
          drift from what the on-screen table says. */}
      <Box display="none" className="audience-table-print">
        <VStack alignItems="stretch" gap="6" w="full">
          {ROWS.map((row) => (
            <VStack
              key={row.topic}
              alignItems="stretch"
              gap="1"
              className="audience-table-print-row">
              <Heading as="h3" size="sm">
                {row.topic}
              </Heading>
              <Text>
                <Text as="span" fontWeight="bold">
                  Exchange:
                </Text>{" "}
                {row.exchange}
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  Degree:
                </Text>{" "}
                {row.degree}
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  Doctoral or licentiate:
                </Text>{" "}
                {row.doctoral}
              </Text>
            </VStack>
          ))}
        </VStack>
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
