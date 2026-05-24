const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src/features/learn/numpy-py/data");

const ch1 = execSync(
  "git show c1bb162:src/features/learn/numpy-py/data/numpyCurriculum.js",
  { cwd: root, encoding: "utf8" },
);

const extra = execSync(
  "git show f42f739:src/features/learn/numpy-py/data/numpyChaptersExtra.js",
  { cwd: root, encoding: "utf8" },
);

const ch1Start = ch1.indexOf("export const NUMPY_CHAPTERS = [");
const ch1End = ch1.indexOf("];", ch1Start);
let ch1Inner = ch1.slice(ch1Start + "export const NUMPY_CHAPTERS = [".length, ch1End).trim();
// c1bb162 ends with chapter 1 only - good

const extraInner = extra
  .replace(/^[\s\S]*?export const NUMPY_CHAPTERS_EXTRA = \[\n/s, "")
  .replace(/\n\];\s*$/s, "")
  .trim();

const out = `// PolyCode — NumPy (Python) full curriculum
// 8 chapters · 16 lessons · Python coding challenges

export const NUMPY_CHAPTERS = [
${ch1Inner},
${extraInner}
];

export const NUMPY_LESSONS = NUMPY_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color,
  })),
);

export const NUMPY_TOTAL_XP = NUMPY_LESSONS.reduce((s, l) => s + l.xp, 0);
`;

const outPath = path.join(dataDir, "numpyCurriculum.js");
fs.writeFileSync(outPath, out, "utf8");

// Validate syntax
const src = fs.readFileSync(outPath, "utf8");
const chapterCount = (src.match(/^\s+id: "[a-z-]+",$/gm) || []).filter((line) =>
  !line.includes("numpy-") && !["shape", "dtype"].some((x) => line.includes(x)),
).length;

console.log(`Wrote ${outPath}`);
console.log(`Approx chapters: ${chapterCount}, file lines: ${src.split("\n").length}`);
