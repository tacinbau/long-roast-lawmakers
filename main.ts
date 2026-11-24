import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One satirical sentence: lawmakers who write the rules for AI, crypto and
// the internet, undercut by the one file format they cannot produce.
const LINE =
  "Congress will happily regulate artificial intelligence, crypto, and the entire internet, but hand its members a Word document and the most powerful committee on earth must ask an intern how to save it as a PDF.";

// The gate only accepts a single sentence of 1-320 characters.
if (LINE.length < 1 || LINE.length > 320 || LINE.includes("\n")) {
  console.error(`entry must be one sentence of 1-320 chars, got ${LINE.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`${LINE} (${LINE.length} chars)`);
