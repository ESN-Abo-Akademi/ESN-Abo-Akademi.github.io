import { Table, Box, Text, Heading, VStack } from "@chakra-ui/react";
import {
  checkedSummary,
  readFactUnchecked,
  type CheckedSummary,
} from "@/content/arrival-facts";

interface Row {
  topic: string;
  exchange: string;
  degree: string;
  doctoral: string;
  /**
   * Register ids this row summarises. Checked at build, and the source of the
   * one provenance line under the table: its date is computed from these
   * entries' `checked` values, and it stops asserting a date at all once any
   * of them expires. Nothing here prints a per-row citation.
   */
  factIds: string[];
}

const TABLE_HEADING_ID = "audience-table-heading";

// Each cell below is a deliberately terser summary of the register entries
// listed in that row's factIds. The register is the source of truth; when it
// is re-verified in December, update the matching rows here in the same
// pass. The check below fails the build if a row cites an id that was
// renamed or removed from the register, so a stale row cannot go unnoticed.
//
// Any exact figure in a cell must also appear in the register entry that the
// row cites, so that every figure on this table has a source and a checked
// date standing behind it even though the cells themselves print neither.
const ROWS: Row[] = [
  {
    topic: "Föli student travel card",
    // Not "not eligible": see the long note on `foliStudentCard` in the
    // register. Föli's nine-month test is met by a full academic year, its
    // own worked example of one is September to May, and it grants the
    // discount to partial-degree students on the same terms. A flat denial
    // asserts more than the page does, so this cell branches on the length
    // of the studies and sends the reader to Föli.
    exchange:
      "Depends on your studies. Föli asks for full-time study of at least nine months in total, so a full academic year can qualify and a single semester may not. Ask Föli about your own case before you buy a card.",
    degree:
      "Eligible if you are 20 or over, studying full time toward a degree, and registered in the Föli region.",
    // This exclusion, unlike the exchange one, is explicit on the page and
    // is not softened: "The student card will not be granted to:
    // Post-graduate students ... such as licentiate or doctorate students".
    // The Licentiate in Medicine exception is stated in the same sentence.
    doctoral:
      "Not eligible. Föli excludes licentiate and doctorate students, apart from students of a Licentiate in Medicine.",
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
    // "the student union's own house" would read as any reader's own union on
    // a page that tells every institution in the city to find its own.
    // Tavasthem is ÅAS's, which is why the register marks the fact
    // `institution: "abo-akademi"`, so the cell names the institution.
    degree:
      "TYS, or Tavasthem, the Åbo Akademi student union's own house in the centre. Tavasthem leases run for a minimum of 12 months.",
    doctoral: "As for degree students.",
    factIds: ["tysApplication", "tavasthem"],
  },
  {
    topic: "Student union membership",
    exchange: "Optional. Join by paying the fee, which unlocks the student card.",
    // This guide is read by students across Turku (Åbo), and "compulsory by
    // law" is not true of all of them: the Universities Act makes membership
    // compulsory for university degree students, and a university of applied
    // sciences is not a university for that purpose. The cell says which rule
    // it is stating and sends everyone else to their own union, rather than
    // publishing a claim about an institution ESN Åbo Akademi cannot
    // re-verify.
    degree:
      "Automatic at Åbo Akademi, where membership is compulsory by law for university degree students. If you study elsewhere in Turku (Åbo), check with your own student union.",
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

/** Every register entry the rows above summarise, in row order. */
export const AUDIENCE_TABLE_FACT_IDS: string[] = ROWS.flatMap(
  (row) => row.factIds,
);

// Fails the build if a row cites a register id that was renamed or removed.
// This is the check Wave 1 lacked, which let six register entries go dead.
AUDIENCE_TABLE_FACT_IDS.forEach((id) => {
  readFactUnchecked(id);
});

/**
 * The one provenance line under the table, derived from the register rather
 * than written down here.
 *
 * The per-row citation blocks this table used to print were trimmed to a
 * single line for visual density. The trim was about density, not about
 * cutting the table loose from the register: a hardcoded date would go on
 * asserting that these rows are current long after the entries behind them
 * lapsed, which is the one failure the register's expiry dates exist to
 * prevent. So the date comes from the cited entries' own `checked` values,
 * and once any of them is past its `expires` date this states that instead of
 * a date, the same way the per-fact "Awaiting re-verification" badge does.
 */
function provenanceLine(summary: CheckedSummary): string {
  if (summary.expired || !summary.earliest || !summary.latest) {
    return (
      "At least one row is past the date it was due to be checked again, " +
      "so treat the whole table as unverified and confirm anything that " +
      "matters with the provider."
    );
  }

  const when =
    summary.earliest === summary.latest
      ? `on ${summary.earliest}`
      : `between ${summary.earliest} and ${summary.latest}`;

  return (
    `Every row was checked against the official sources ${when}. ` +
    "Rules change, so confirm anything critical with the provider."
  );
}

/**
 * The exchange / degree / doctoral branching table. Merging these audiences
 * produces advice that is actively wrong for at least Föli and healthcare,
 * so this table is deliberately the first substantive block on the page.
 */
export function AudienceTable() {
  // Computed per render rather than at module load, so a static export takes
  // the expiry state from the moment the page is built.
  const provenance = provenanceLine(checkedSummary(AUDIENCE_TABLE_FACT_IDS));

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
      <Text
        className="mobile-scroll-hint"
        display={{ base: "block", md: "none" }}
        fontSize="sm"
        color="fg.muted">
        Swipe sideways to compare all student types.
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
      <Box
        overflowX="auto"
        w="full"
        className="audience-table-scroll mobile-scroll-region"
        role="region"
        aria-label="Student type comparison table"
        tabIndex={0}>
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
      <Text fontSize="xs" color="fg.muted">
        {provenance}
      </Text>
    </VStack>
  );
}
