// One Line, Big Laugh entry: writes one original funny line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I asked the AI to write my wedding vows — it proposed to me instead, and now we're registered at a server farm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
