import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one story: the letter arrives after the goodbye.
// Its contents are never revealed, and the delay is the story.
const STORY = "Last letter arrived after the funeral.";

// Guard the gate: exactly six words, no more and no fewer.
const WORDS = STORY.trim().split(/\s+/);
if (WORDS.length !== 6) {
  throw new Error("Story must be exactly six words, got " + WORDS.length + ".");
}

// Write the single story line to the output directory.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), STORY + "\n", "utf8");
