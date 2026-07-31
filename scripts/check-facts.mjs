#!/usr/bin/env node
// Checks the arrival fact register for expired and unsourced claims.
// Dependency-free by design. If this script ever becomes a maintenance
// burden, delete it. The register itself is the durable artefact.

export function findExpiredFacts(facts, today) {
  return Object.values(facts).filter((fact) => {
    if (fact.status === "owner-confirm") return false;
    if (!fact.expires) return false;
    return new Date(fact.expires) < today;
  });
}

export function findUnsourcedFacts(facts) {
  return Object.values(facts).filter(
    (fact) => fact.status === "verified" && !fact.source,
  );
}

// CLI mode: node scripts/check-facts.mjs <path-to-facts.json>
//
// The register itself is TypeScript, and this script deliberately does not
// depend on a TS loader. The Next build already type-checks the register.
// To run the CLI, dump the register to JSON first:
//
//   npx tsx -e "import('./content/arrival-facts.ts').then(m => \
//     console.log(JSON.stringify(m.ARRIVAL_FACTS)))" > /tmp/facts.json
//   node scripts/check-facts.mjs /tmp/facts.json
//
// If that ever stops working, delete this CLI block. The exported functions
// and their tests are the part worth keeping.
if (import.meta.url === `file://${process.argv[1]}`) {
  const { readFileSync } = await import("node:fs");
  const path = process.argv[2];
  if (!path) {
    console.error("Usage: node scripts/check-facts.mjs <path-to-facts.json>");
    process.exit(2);
  }
  const facts = JSON.parse(readFileSync(path, "utf8"));

  const expired = findExpiredFacts(facts, new Date());
  const unsourced = findUnsourcedFacts(facts);

  for (const fact of unsourced) {
    console.error(`UNSOURCED: ${fact.id} is marked verified but has no source`);
  }
  for (const fact of expired) {
    console.warn(`EXPIRED:   ${fact.id} expired ${fact.expires}, re-verify it`);
  }

  const pending = Object.values(facts).filter(
    (f) => f.status === "owner-confirm",
  );
  for (const fact of pending) {
    console.warn(`PENDING:   ${fact.id} is awaiting owner confirmation`);
  }

  if (unsourced.length > 0) process.exit(1);
  console.log(
    `Checked ${Object.keys(facts).length} facts. ${expired.length} expired, ${pending.length} pending.`,
  );
}
