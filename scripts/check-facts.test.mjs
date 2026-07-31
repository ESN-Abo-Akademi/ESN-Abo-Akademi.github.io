import { test } from "node:test";
import assert from "node:assert/strict";
import { findExpiredFacts, findUnsourcedFacts } from "./check-facts.mjs";

const facts = {
  fresh: {
    id: "fresh",
    claim: "Föli travel card costs 5.20 euro",
    source: "https://www.foli.fi/en/tickets",
    checked: "2026-08-01",
    expires: "2026-12-01",
    audiences: ["exchange", "degree"],
    status: "verified",
  },
  stale: {
    id: "stale",
    claim: "CampusSport fee",
    source: "https://www.campussport.fi/en/prices/",
    checked: "2025-08-01",
    expires: "2026-07-01",
    audiences: ["degree"],
    status: "verified",
  },
  pending: {
    id: "pending",
    claim: "ESNcard price",
    source: null,
    checked: null,
    expires: null,
    audiences: ["exchange", "degree", "doctoral"],
    status: "owner-confirm",
  },
};

test("findExpiredFacts returns only facts past their expiry date", () => {
  const expired = findExpiredFacts(facts, new Date("2026-08-01"));
  assert.deepEqual(
    expired.map((f) => f.id),
    ["stale"],
  );
});

test("findExpiredFacts treats the expiry date itself as still valid", () => {
  const expired = findExpiredFacts(facts, new Date("2026-07-01"));
  assert.deepEqual(expired.map((f) => f.id), []);
});

test("findExpiredFacts ignores owner-confirm facts, which have no expiry", () => {
  const expired = findExpiredFacts(facts, new Date("2030-01-01"));
  assert.ok(!expired.some((f) => f.id === "pending"));
});

test("findUnsourcedFacts returns verified facts that lack a source", () => {
  const broken = {
    oops: {
      id: "oops",
      claim: "Something asserted with no source",
      source: null,
      checked: "2026-08-01",
      expires: "2026-12-01",
      audiences: ["exchange"],
      status: "verified",
    },
  };
  assert.deepEqual(
    findUnsourcedFacts(broken).map((f) => f.id),
    ["oops"],
  );
});

test("findUnsourcedFacts does not flag owner-confirm facts", () => {
  assert.deepEqual(findUnsourcedFacts(facts).map((f) => f.id), []);
});
