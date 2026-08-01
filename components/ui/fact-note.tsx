import { Text, Link as ChakraLink, Badge, VStack } from "@chakra-ui/react";
// These two components are the only sanctioned callers of readFactUnchecked.
// Everything else must use getFact, which throws on an unconfirmed fact.
import { readFactUnchecked } from "@/content/arrival-facts";

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
 */
export function FactSource({ id }: { id: string }) {
  const fact = readFactUnchecked(id);
  if (fact.status === "owner-confirm" || !fact.checked) return null;

  const isExternal = fact.source?.startsWith("http");

  return (
    <Text fontSize="xs" color="fg.muted">
      Checked {fact.checked}
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
