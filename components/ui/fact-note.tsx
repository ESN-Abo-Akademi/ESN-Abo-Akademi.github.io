import { Text, Link as ChakraLink, Badge, VStack } from "@chakra-ui/react";
// FactNote and FactSource below are the only sanctioned callers of
// readFactUnchecked that render a claim, and they do so safely: a fact still
// awaiting owner confirmation shows only the fallback, never the claim.
// components/ui/audience-table.tsx also calls readFactUnchecked directly, but
// only to confirm a factId still exists in the register at module scope; it
// discards the return value rather than rendering it, so it does not need
// this file's fallback handling. Anywhere that wants to render a claim must
// use getFact, which throws on an unconfirmed fact.
import { isFactExpired, readFactUnchecked } from "@/content/arrival-facts";

interface FactNoteProps {
  id: string;
  /** Shown instead of the claim when the fact is awaiting owner confirmation. */
  fallback: string;
  /**
   * Renders the `InstitutionMarker` inline at the end of the text, in the same
   * position a caller that renders the claim itself would put it.
   *
   * It has to be rendered from in here rather than after the component: this
   * component's own output is a block, so a marker placed after it lands on a
   * line of its own underneath, which is not where the same marker sits next
   * to any other claim in the guide. Off by default, because
   * app/(frontend)/arriving/page.tsx does not use markers at all.
   */
  withMarker?: boolean;
}

/**
 * The quiet "Åbo Akademi" marker that a fact carries when it is true only at
 * Åbo Akademi, or is ESN Åbo Akademi's own. Renders nothing at all for a fact
 * that holds for any student in the city, which is most of the register.
 *
 * The guide is written for every student in Turku (Åbo), so a reader at
 * another institution needs to be able to see, at a glance, which lines are
 * not about them. `content/guide-copy.ts` carries the prose that names what
 * to look for instead; this is only the flag.
 *
 * Deliberately `variant="outline"`: the printed PDF is the copy that gets
 * forwarded, and a border and dark text survive printing whether or not the
 * browser is printing background colours. `institution-marker` is the hook
 * app/(frontend)/survival-guide/print.css uses to pin that down; it has no
 * effect on screen.
 */
export function InstitutionMarker({ id }: { id: string }) {
  if (readFactUnchecked(id).institution === "all") return null;

  return (
    <Badge
      colorPalette="esn.darkBlue"
      variant="outline"
      size="sm"
      className="institution-marker">
      Åbo Akademi
    </Badge>
  );
}

/**
 * Renders a fact from the register. A fact with status "owner-confirm" never
 * renders its claim, only the fallback, so an unverified value cannot reach
 * the published page.
 */
export function FactNote({ id, fallback, withMarker }: FactNoteProps) {
  const fact = readFactUnchecked(id);
  const marker = withMarker ? (
    <>
      {" "}
      <InstitutionMarker id={id} />
    </>
  ) : null;

  if (fact.status === "owner-confirm") {
    return (
      <VStack alignItems="flex-start" gap="1">
        <Text color="fg.muted">
          {fallback}
          {marker}
        </Text>
        <Badge colorPalette="esn.orange" size="sm">
          Awaiting confirmation
        </Badge>
      </VStack>
    );
  }

  return (
    <VStack alignItems="flex-start" gap="1">
      <Text>
        {fact.claim}
        {marker}
      </Text>
      <FactSource id={id} />
    </VStack>
  );
}

/**
 * The "checked on, with source" line that every published number carries.
 * A non-http source (for example "owner-confirmed:2026-08-01") renders the
 * checked date with no link, because there is no public page to point at.
 *
 * Once a fact is past its `expires` date the checked date is replaced by an
 * "Awaiting re-verification" badge, in the same treatment FactNote already
 * uses for a fact awaiting owner confirmation. Without this the guide would
 * keep asserting a lapsed claim as current under a stale date, which is the
 * one failure the register's expiry dates exist to prevent. The source link
 * stays, because that is the link a re-verifier needs.
 */
export function FactSource({ id }: { id: string }) {
  const fact = readFactUnchecked(id);
  if (fact.status === "owner-confirm" || !fact.checked) return null;

  const isExternal = fact.source?.startsWith("http");

  return (
    <Text fontSize="xs" color="fg.muted">
      {isFactExpired(fact) ? (
        <Badge colorPalette="esn.orange" size="sm">
          Awaiting re-verification
        </Badge>
      ) : (
        <>Checked {fact.checked}</>
      )}
      {isExternal ? (
        <>
          {" · "}
          <ChakraLink
            href={fact.source as string}
            target="_blank"
            rel="noreferrer"
            fontSize="xs">
            source
          </ChakraLink>
        </>
      ) : null}
    </Text>
  );
}
