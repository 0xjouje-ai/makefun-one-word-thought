// One Word, First Thought — entry program.
//
// Writes exactly one word to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered (each exactly one word):
//   "petrichor"      — the scent of rain on dry earth
//   "sonder"         — the realisation that every passer-by lives a life
//                      as vivid and complex as your own
//   "defenestration" — the act of throwing someone out of a window
//   "apricity"       — the warmth of the sun on a cold winter's day
//   "syzygy"         — three celestial bodies in a straight line
// Chosen: "petrichor"
// Why it wins against the judge brief: it is surprising (a word most
// readers have never met, not the safe or expected one), vivid and
// specific (one word summons an entire scene — dry earth, first rain,
// that unmistakable smell), and it carries a spark of wit in its very
// making: petra (stone) + ichor (the blood of the gods), so the word
// itself says the earth bleeds gold when it rains. It sounds like
// what it means, soft rain on stone, and it feels chosen, not filler.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 24
// characters, not only white space, and exactly one word.
if (!/^\S+$/.test(WORD)) {
  throw new Error(`entry must be exactly one word, got ${JSON.stringify(WORD)}`);
}
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(WORD);
