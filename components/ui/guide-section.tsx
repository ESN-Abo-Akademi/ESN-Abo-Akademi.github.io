import { Heading, List, Text, VStack } from "@chakra-ui/react";
import { FactNote, FactSource } from "@/components/ui/fact-note";
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
 * No prose is authored here. Every user-visible string comes from
 * `section` (itself sourced from content/guide-copy.ts) or from the fact
 * register.
 *
 * `className="guide-print-block"` is the hook app/(frontend)/survival-guide/print.css
 * uses for `break-inside: avoid`, so one section does not split awkwardly
 * across a page boundary when printed. It has no effect on screen.
 */
export function GuideSection({ section }: GuideSectionProps) {
  return (
    <VStack
      alignItems="stretch"
      gap="4"
      w="full"
      className="guide-print-block">
      <Heading as="h2" size="xl">
        {section.title}
      </Heading>
      <Text color="fg.muted" maxW="3xl">
        {section.intro}
      </Text>
      <List.Root gap="3" ps="5">
        {sectionBlocks(section).map((block, index) => (
          <List.Item key={`${section.id}-${block.kind}-${index}`}>
            {block.kind === "note" ? (
              <Text as="span">{block.text}</Text>
            ) : block.fallback !== undefined ? (
              <FactNote id={block.id} fallback={block.fallback} />
            ) : (
              <>
                <Text as="span">{getFact(block.id).claim}</Text>
                <FactSource id={block.id} />
              </>
            )}
          </List.Item>
        ))}
      </List.Root>
    </VStack>
  );
}
