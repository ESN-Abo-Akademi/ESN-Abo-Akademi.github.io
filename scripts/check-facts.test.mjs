import { test } from "node:test";
import assert from "node:assert/strict";
import {
  findExpiredFacts,
  findUnsourcedFacts,
  findFactsMissingOwner,
} from "./check-facts.mjs";
// The predicate the PAGE uses, imported from the register itself. It has to
// agree with findExpiredFacts above at the boundary, or the check script and
// the published page would disagree about whether a claim has lapsed.
import { isFactExpired } from "../content/arrival-facts.ts";

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

test("findExpiredFacts flags a high-volatility fact whose expiry has passed", () => {
  const facts = {
    alcohol: {
      id: "alcohol",
      claim: "Grocery shops sell fermented drinks up to 8 percent",
      source: "https://yle.fi/a/74-20232920",
      checked: "2026-08-01",
      expires: "2026-12-15",
      audiences: ["exchange"],
      status: "verified",
      owner: "board",
      volatility: "high",
      usedIn: ["survival-guide"],
    },
  };
  assert.deepEqual(
    findExpiredFacts(facts, new Date("2027-01-01")).map((f) => f.id),
    ["alcohol"],
  );
});

test("findFactsMissingOwner flags a verified fact with no owner", () => {
  const facts = {
    orphan: {
      id: "orphan",
      claim: "Something nobody is responsible for",
      source: "https://example.org/",
      checked: "2026-08-01",
      expires: "2026-12-15",
      audiences: ["exchange"],
      status: "verified",
      owner: "",
      volatility: "low",
      usedIn: ["survival-guide"],
    },
  };
  assert.deepEqual(
    findFactsMissingOwner(facts).map((f) => f.id),
    ["orphan"],
  );
});

test("isFactExpired treats the expiry date itself as not yet expired", () => {
  const fact = { status: "verified", expires: "2026-12-15" };
  assert.equal(isFactExpired(fact, new Date("2026-12-15")), false);
  assert.equal(isFactExpired(fact, new Date("2026-12-16")), true);
});

test("isFactExpired agrees with findExpiredFacts at the same boundary", () => {
  const onTheDay = new Date("2026-07-01");
  assert.equal(isFactExpired(facts.stale, onTheDay), false);
  assert.deepEqual(findExpiredFacts(facts, onTheDay).map((f) => f.id), []);

  const dayAfter = new Date("2026-07-02");
  assert.equal(isFactExpired(facts.stale, dayAfter), true);
  assert.deepEqual(findExpiredFacts(facts, dayAfter).map((f) => f.id), [
    "stale",
  ]);
});

test("isFactExpired never flags a fact with no expiry date", () => {
  const far = new Date("2030-01-01");
  assert.equal(isFactExpired(facts.pending, far), false);
  assert.equal(isFactExpired({ status: "verified", expires: null }, far), false);
});

test("findFactsMissingOwner ignores owner-confirm facts", () => {
  const facts = {
    pending: {
      id: "pending",
      claim: "ESNcard price",
      source: null,
      checked: null,
      expires: null,
      audiences: ["exchange"],
      status: "owner-confirm",
      owner: "",
      volatility: "low",
      usedIn: [],
    },
  };
  assert.deepEqual(findFactsMissingOwner(facts).map((f) => f.id), []);
});
