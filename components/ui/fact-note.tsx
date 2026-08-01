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
}

/**
 * Renders a fact from the register. A fact with status "owner-confirm" never
 * renders its claim, only the fallback, so an unverified value cannot reach
 * the published page.
 */
export function FactNote({ id, fallback }: FactNoteProps) {
  const fact = readFactUnchecked(id);

  if (fact.status === "owner-confirm") {
    return (
      <VStack alignItems="flex-start" gap="1">
        <Text color="fg.muted">{fallback}</Text>
        <Badge colorPalette="esn.orange" size="sm">
          Awaiting confirmation
        </Badge>
      </VStack>
    );
  }

  return (
    <VStack alignItems="flex-start" gap="1">
      <Text>{fact.claim}</Text>
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
