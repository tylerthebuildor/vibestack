import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'fs';
import { marked } from 'marked';

const readme = readFileSync('../README.md', 'utf-8');
const inlineLogo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style="width:1.2em;height:1.2em;vertical-align:-0.15em;display:inline-block;margin-right:0.15em"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#EE5A24"/></linearGradient><linearGradient id="g2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FECA57"/><stop offset="100%" stop-color="#FF9F43"/></linearGradient><linearGradient id="g3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#48DBFB"/><stop offset="100%" stop-color="#0ABDE3"/></linearGradient><linearGradient id="g4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><rect x="6" y="46" width="52" height="11" rx="3.5" fill="url(#g1)"/><rect x="10" y="32" width="44" height="11" rx="3.5" fill="url(#g2)"/><rect x="14" y="18" width="36" height="11" rx="3.5" fill="url(#g3)"/><rect x="18" y="4" width="28" height="11" rx="3.5" fill="url(#g4)"/><circle cx="53" cy="8" r="2.5" fill="#FF9FF3"/><circle cx="58" cy="3" r="1.5" fill="#FECA57"/></svg>';
let content = marked.parse(readme);
// Replace the README img tag with inline SVG for the website
content = content.replace(/<img[^>]*alt="VibeStack logo"[^>]*>/, inlineLogo);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VibeStack — Give your AI agents the context to build, not just guess</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="description" content="Drop a small set of opinionated files into any project to help both you and your AI agents work effectively as the codebase grows.">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #e6edf3;
      background: #0d1117;
      word-wrap: break-word;
    }
    .container {
      max-width: 860px;
      margin: 0 auto;
      padding: 3rem 2rem 4rem;
    }
    /* Headings */
    h1 { font-size: 2em; margin-top: 0; margin-bottom: 16px; color: #f0f6fc; font-weight: 600; line-height: 1.25; }
    h2 { font-size: 1.5em; margin-top: 24px; margin-bottom: 16px; color: #f0f6fc; font-weight: 600; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 2px solid #30363d; }
    h3 { font-size: 1.25em; margin-top: 24px; margin-bottom: 16px; color: #f0f6fc; font-weight: 600; line-height: 1.25; }
    /* Text */
    p { margin-top: 0; margin-bottom: 16px; }
    a { color: #58a6ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    strong { font-weight: 600; }
    /* Code */
    code {
      font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
      background: rgba(110,118,129,0.4);
      padding: 0.2em 0.4em;
      border-radius: 6px;
      font-size: 85%;
    }
    .pre-wrapper {
      position: relative;
      margin-bottom: 16px;
    }
    pre {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 16px;
      overflow-x: auto;
      margin-bottom: 0;
      line-height: 1.45;
    }
    .copy-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 6px;
      z-index: 1;
      background: #21262d;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #8b949e;
      cursor: pointer;
      width: 32px;
      height: 32px;
      padding: 0;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .copy-btn:hover { background: #30363d; color: #e6edf3; }
    .copy-btn.copied { color: #3fb950; border-color: #3fb950; }
    pre code {
      background: none;
      padding: 0;
      font-size: 85%;
      line-height: inherit;
      border-radius: 0;
    }
    /* Blockquote */
    blockquote {
      border-left: 0.25em solid #30363d;
      padding: 0 1em;
      margin: 0 0 16px 0;
      color: #8b949e;
    }
    /* Dividers */
    hr {
      border: none;
      border-top: 3px solid #30363d;
      margin: 24px 0;
      overflow: hidden;
    }
    /* Lists */
    ul, ol { padding-left: 2em; margin-top: 0; margin-bottom: 16px; }
    li { margin-top: 0.25em; }
    li + li { margin-top: 0.25em; }
    li > p { margin-top: 16px; }
    ul ul, ol ul, ul ol, ol ol { margin-top: 0; margin-bottom: 0; }
    /* Tables */
    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      margin-bottom: 16px;
      border: 1px solid #30363d;
      overflow: hidden;
    }
    td, th {
      border: 1px solid #30363d;
      padding: 6px 13px;
      text-align: left;
    }
    th { font-weight: 600; background: #161b22; }
    tr { background: #0d1117; border-top: 1px solid #21262d; }
    tr:nth-child(2n) { background: #161b22; }
    /* Images */
    img { max-width: 100%; }
    /* Center-aligned blocks (header) */
    [align="center"] { text-align: center; }
    /* Mobile */
    @media (max-width: 600px) {
      .container { padding: 1.5rem 1rem; }
      h1 { font-size: 1.75em; }
    }
  </style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
  <script src="/copy-buttons.js"></script>
</body>
</html>`;

mkdirSync('public', { recursive: true });
cpSync('static', 'public', { recursive: true });
writeFileSync('public/index.html', html);
console.log('Built public/index.html');
