import { Heading, List, Text, VStack } from "@chakra-ui/react";
import {
  FactNote,
  FactSource,
  InstitutionMarker,
} from "@/components/ui/fact-note";
import { getFact } from "@/content/arrival-facts";
import {
  sectionBlocks,
  type GuideSection as GuideSectionData,
} from "@/content/guide-copy";

interface GuideSectionProps {
  section: GuideSectionData;
}

/**
 * Renders one survival-guide section: its heading, its intro, then
 * `sectionBlocks(section)` in the exact order that function computes.
 *
 * That order interleaves unbound notes, then each fact followed by the
 * notes bound to it, because this guide's prose deliberately never names a
 * service: a note like "find your row before you are ill" only makes sense
 * sitting directly beneath the fact it refers to. See content/guide-copy.ts
 * for the full rationale.
 *
 * A fact block either carries a `fallback` (the fact is still awaiting
 * owner confirmation, so it renders through `FactNote`) or it does not (the
 * fact is safe to publish, so it renders through `getFact` plus
 * `FactSource`), the same pattern app/(frontend)/arriving/page.tsx uses.
 *
 * Either way the fact block also carries an `InstitutionMarker`, which
 * renders the "Åbo Akademi" flag for a claim that is true only there and
 * nothing at all for the rest. The guide is written for every student in
 * Turku (Åbo); the marker is what stops a reader at another institution
 * taking an Åbo Akademi term date or library as their own. What to look
 * for instead is prose, so it lives in content/guide-copy.ts next to the
 * fact it qualifies, not here.
 *
 * No prose is authored here. Every user-visible string comes from
 * `section` (itself sourced from content/guide-copy.ts) or from the fact
 * register. The marker's own word, "Åbo Akademi", is the name of an
 * institution rather than copy, and it is written once in
 * components/ui/fact-note.tsx.
 *
 * Three print-only class names, none with any effect on screen (see
 * app/(frontend)/survival-guide/print.css for the rules):
 *
 * - `guide-print-block` on the outer wrapper, for the orphans/widows
 *   backstop only. It does NOT carry `break-inside: avoid`: a whole
 *   section (heading, intro and every fact) routinely runs to more than
 *   one printed page, and Chrome's fragmentation engine responds to
 *   `break-inside: avoid` on a box taller than a page by deferring the
 *   *entire* box to the top of the next page rather than laying out what
 *   fits, which left a near-blank sheet behind it. Verified by rendering
 *   the PDF and looking at the page, not by reasoning about the CSS.
 * - `guide-print-heading` on the small heading-plus-intro group, which
 *   *is* bounded (two short text nodes), so `break-inside: avoid` there is
 *   safe and keeps the title glued to its lead sentence.
 * - `guide-print-item` on every `List.Item`: the real per-item unit (a
 *   bound note, or a claim plus its own `FactSource`) that must never
 *   split, keeping a "Checked ... source" line from stranding on its own
 *   page. Unlike the section as a whole, one item is always small enough
 *   for `break-inside: avoid` to behave.
 */
export function GuideSection({ section }: GuideSectionProps) {
  return (
    <VStack
      alignItems="stretch"
      gap="4"
      w="full"
      className="guide-print-block">
      <VStack alignItems="stretch" gap="4" className="guide-print-heading">
        <Heading as="h2" size="xl">
          {section.title}
        </Heading>
        <Text color="fg.muted" maxW="3xl">
          {section.intro}
        </Text>
      </VStack>
      <List.Root gap="3" ps="5">
        {sectionBlocks(section).map((block, index) => (
          <List.Item
            key={`${section.id}-${block.kind}-${index}`}
            className="guide-print-item">
            {block.kind === "note" ? (
              <Text as="span">{block.text}</Text>
            ) : block.fallback !== undefined ? (
              <>
                <FactNote id={block.id} fallback={block.fallback} />
                <InstitutionMarker id={block.id} />
              </>
            ) : (
              <>
                <Text as="span">{getFact(block.id).claim}</Text>{" "}
                <InstitutionMarker id={block.id} />
                <FactSource id={block.id} />
              </>
            )}
          </List.Item>
        ))}
      </List.Root>
    </VStack>
  );
}
