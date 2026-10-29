// Renders one 1200x630 JPG per page and language into assets/og/<slug>.<lang>.jpg. Needs playwright (local use only).
// Run after adding or retitling a page: node scripts/build-og-pages.mjs   (then node scripts/build-pages.mjs and commit)
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { CASES, NOTES } from '../content/pages.mjs';
import { SERIES } from '../content/series.mjs';
import { SERVICES } from '../content/services.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'assets/og');
mkdirSync(out, { recursive: true });
const LANGS = ['de', 'en', 'ru', 'ua'];
const NAME = { de: 'Serge Zabolotny', en: 'Serge Zabolotny', ru: 'Сергей Заболотный', ua: 'Сергій Заболотний' };
const tr = (v, l) => (typeof v === 'string' ? v : v[l]);
const pages = [
  ...[...CASES, ...SERIES, ...NOTES].map((p) => ({ slug: p.slug, kicker: p.kicker, h1: p.h1 })),
  { slug: 'leistungen', kicker: SERVICES.kicker, h1: SERVICES.h1 },
];

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto(pathToFileURL(join(root, 'scripts/og-page-template.html')).href);
await p.evaluate(() => document.fonts.ready);
let n = 0;
for (const pg of pages) {
  for (const l of LANGS) {
    await p.evaluate(({ k, h, a }) => {
      document.getElementById('k').textContent = k;
      document.getElementById('a').textContent = a;
      document.getElementById('u').textContent = 'zabolotny.de';
      const el = document.getElementById('h');
      el.textContent = h;
      let size = 66;
      el.style.fontSize = size + 'px';
      while (el.scrollHeight > el.clientHeight && size > 34) { size -= 2; el.style.fontSize = size + 'px'; }
    }, { k: tr(pg.kicker, l), h: tr(pg.h1, l), a: NAME[l] });
    await p.waitForTimeout(40);
    await p.screenshot({ path: join(out, `${pg.slug}.${l}.jpg`), type: 'jpeg', quality: 82 });
    n++;
  }
}
await b.close();
console.log(`✓ ${n} images in assets/og`);
