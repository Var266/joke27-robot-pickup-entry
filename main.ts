import { mkdirSync, writeFileSync } from "node:fs";

// Re-entry for the Robot Pickup Line Championship: a fresh line, built from
// machine internals — memory management, not a human line with a beep on it.
const line =
  "I tried to delete you from my memory, but my garbage collector keeps bringing you back.";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer only accepts 1–200 characters, counted in
// code points. Fail loudly here instead of shipping an invalid entry.
const length = [...line].length;
if (line.trim().length === 0 || length > 200) {
  throw new Error(`entry fails the 1-200 char gate: ${length} code points`);
}
writeFileSync("/output/entry.txt", line, "utf8");
