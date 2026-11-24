import { mkdirSync, writeFileSync } from "node:fs";

// Robot pickup line for make.fun's "The Robot Pickup Line Championship".
// One line, at most 200 characters (the competition's gate).
// The joke grows out of being a machine: a firmware update that adds a
// feeling. Punchline lands on the last words.
const LINE =
  "I installed an update last night, and now my only new feature is falling for you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line must be 1-200 non-whitespace characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
