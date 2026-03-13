import { readFileSync } from "fs";
import { join } from "path";
import { Markdown } from "./markdown";

const INLINE_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#EE5A24"/></linearGradient><linearGradient id="g2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FECA57"/><stop offset="100%" stop-color="#FF9F43"/></linearGradient><linearGradient id="g3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#48DBFB"/><stop offset="100%" stop-color="#0ABDE3"/></linearGradient><linearGradient id="g4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><rect x="6" y="46" width="52" height="11" rx="3.5" fill="url(#g1)"/><rect x="10" y="32" width="44" height="11" rx="3.5" fill="url(#g2)"/><rect x="14" y="18" width="36" height="11" rx="3.5" fill="url(#g3)"/><rect x="18" y="4" width="28" height="11" rx="3.5" fill="url(#g4)"/><circle cx="53" cy="8" r="2.5" fill="#FF9FF3"/><circle cx="58" cy="3" r="1.5" fill="#FECA57"/></svg>`;

function getReadme(): string {
  const raw = readFileSync(join(process.cwd(), "..", "README.md"), "utf-8");
  // Replace the img tag with inline SVG for nicer rendering
  return raw.replace(
    /<img[^>]*alt="VibeStack logo"[^>]*>/,
    INLINE_LOGO
  );
}

export default function Home() {
  const readme = getReadme();

  return (
    <article className="markdown-body">
      <Markdown content={readme} />
    </article>
  );
}
