// Grab every main.md under /src/news/**/main.md as raw text at build time
const modules = import.meta.glob("/src/news/**/main.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Parse "DD MMM YYYY" (e.g., "28 OCT 2025")
function parseFrontmatterDate(dateStr) {
  const MONTHS = {
    JAN: 0,
    FEB: 1,
    MAR: 2,
    APR: 3,
    MAY: 4,
    JUN: 5,
    JUL: 6,
    AUG: 7,
    SEP: 8,
    OCT: 9,
    NOV: 10,
    DEC: 11,
  };
  const [ddStr, mmm, yyyyStr] = dateStr.trim().split(/\s+/);
  const dd = Number(ddStr);
  const yyyy = Number(yyyyStr);
  const mm = MONTHS[mmm.toUpperCase()];
  return new Date(yyyy, mm, dd);
}

// Tiny front-matter extractor for simple "key: value" YAML
function parseFrontmatter(raw) {
  const m = raw.match(/^---\s*([\s\S]*?)\s*---/);
  const data = {};
  if (!m) return data;
  const block = m[1];
  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (val === "null") val = null;
    data[key] = val;
  }
  return data;
}

const records = Object.entries(modules).map(([path, raw]) => {
  const fm = parseFrontmatter(raw);
  const slug = path.split("/src/news/")[1].split("/")[0];
  return {
    title: fm.title,
    text: fm.description,
    image: fm.image,
    slug,
    _date: parseFrontmatterDate(fm.date),
  };
});

// Sort latest → oldest
records.sort((a, b) => b._date.getTime() - a._date.getTime());

// Export in requested shape
export const news_items = records.map(({ title, text, image, slug }) => ({
  title,
  text,
  image,
  slug,
}));
