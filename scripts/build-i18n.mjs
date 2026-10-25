#!/usr/bin/env node
// Generates static language pages /en/, /ru/, /ua/ from the German source page.
//
//   node scripts/build-i18n.mjs          -> (re)write en/index.html, ru/index.html, ua/index.html
//   node scripts/build-i18n.mjs --check  -> exit 1 if the committed pages are out of date (used in CI)
//
// Source of truth: index.html (German markup) + the `translations` object in js/i18n.js.
// Every element with data-i18n="key" gets its text pre-rendered, so search engines
// index real EN/RU/UA content instead of German text swapped by JavaScript.
// No dependencies — plain Node 18+.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { SERIES } from '../content/series.mjs';
import { NOTES, CASES } from '../content/pages.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://zabolotny.de';
const CHECK = process.argv.includes('--check');

const PAGES = {
  en: {
    htmlLang: 'en',
    locale: 'en_US',
    title: 'Serge Zabolotny — Fullstack & AI Developer in Dresden',
    name: 'Serge Zabolotny',
    altNames: ['Sergii Zabolotnyi', 'Сергей Заболотный', 'Сергій Заболотний'],
    description:
      'Fullstack & AI developer in Dresden, Germany. Next.js, FastAPI, OpenAI — shipped products: MeisterMeld, PflegeOasis, ScamGuard. Deployed with Docker, CI/CD, Linux.',
  },
  ru: {
    htmlLang: 'ru',
    locale: 'ru_RU',
    title: 'Сергей Заболотный — Fullstack- и AI-разработчик, Дрезден',
    name: 'Сергей Заболотный',
    altNames: ['Serge Zabolotny', 'Sergii Zabolotnyi', 'Сергій Заболотний'],
    description:
      'Fullstack- и AI-разработчик в Дрездене, Германия. Next.js, FastAPI, OpenAI — свои продукты в продакшене: MeisterMeld, PflegeOasis, ScamGuard. Docker, CI/CD, Linux.',
  },
  ua: {
    htmlLang: 'uk',
    locale: 'uk_UA',
    title: 'Сергій Заболотний — Fullstack- та AI-розробник, Дрезден',
    name: 'Сергій Заболотний',
    altNames: ['Serge Zabolotny', 'Sergii Zabolotnyi', 'Сергей Заболотный'],
    description:
      'Fullstack- та AI-розробник у Дрездені, Німеччина. Next.js, FastAPI, OpenAI — власні продукти в продакшені: MeisterMeld, PflegeOasis, ScamGuard. Docker, CI/CD, Linux.',
  },
};

// ---------- load translations from js/i18n.js ----------
function loadTranslations() {
  const src = readFileSync(join(ROOT, 'js/i18n.js'), 'utf8');
  const start = src.indexOf('const translations');
  const end = src.indexOf('\n};', start);
  if (start < 0 || end < 0) throw new Error('translations object not found in js/i18n.js');
  const code = src.slice(start, end + 3).replace('const translations', 'globalThis.translations');
  const ctx = {};
  vm.runInNewContext(code, ctx);
  return ctx.translations;
}

// ---------- helpers ----------
const escText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');

function replaceOnce(html, search, replacement, label) {
  if (!html.includes(search)) throw new Error(`build-i18n: could not find ${label}`);
  return html.replace(search, replacement);
}

function replaceMetaContent(html, attr, name, value) {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`build-i18n: meta ${name} not found`);
  return html.replace(re, `$1${escAttr(value)}$2`);
}

// ---------- build one page ----------
function buildPage(source, lang, t, missing) {
  const cfg = PAGES[lang];
  const url = `${SITE}/${lang}/`;
  let html = source;

  // 1. texts: <tag ... data-i18n="key" ...>text</tag>  (elements are plain-text leaves)
  html = html.replace(
    /(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (m, open, _tag, key, _inner, close) => {
      if (t[key] === undefined) {
        missing.add(`${lang}.${key}`);
        return m;
      }
      return open + escText(t[key]) + close;
    }
  );

  // 2. placeholders: data-i18n-ph="key" ... placeholder="..."
  html = html.replace(/<(input|textarea)\b[^>]*\bdata-i18n-ph="([^"]+)"[^>]*>/g, (tagHtml, _t, key) => {
    if (t[key] === undefined) {
      missing.add(`${lang}.${key}`);
      return tagHtml;
    }
    return tagHtml.replace(/placeholder="[^"]*"/, `placeholder="${escAttr(t[key])}"`);
  });

  // 3. <html> + head meta
  html = replaceOnce(
    html,
    '<html lang="de" data-page-lang="de">',
    `<html lang="${cfg.htmlLang}" data-page-lang="${lang}">`,
    '<html lang="de" data-page-lang="de">'
  );
  // title + social titles (German title comes from index.html; other languages are set here)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escText(cfg.title)}</title>`);
  html = replaceMetaContent(html, 'property', 'og:title', cfg.title);
  html = replaceMetaContent(html, 'name', 'twitter:title', cfg.title);
  // JSON-LD Person: localized name, other spellings as alternateName
  html = replaceOnce(
    html,
    /  "name": "Serge Zabolotny",\n  "alternateName": \[[^\]]*\],/.exec(html)?.[0] ?? '',
    `  "name": ${JSON.stringify(cfg.name)},\n  "alternateName": ${JSON.stringify(cfg.altNames)},`,
    'JSON-LD name'
  );
  html = replaceMetaContent(html, 'name', 'description', cfg.description);
  html = replaceMetaContent(html, 'property', 'og:description', cfg.description);
  html = replaceMetaContent(html, 'name', 'twitter:description', cfg.description);
  html = replaceMetaContent(html, 'property', 'og:locale', cfg.locale);
  html = replaceMetaContent(html, 'property', 'og:url', url);
  html = replaceOnce(
    html,
    `<link rel="canonical" href="${SITE}/">`,
    `<link rel="canonical" href="${url}">`,
    'canonical link'
  );

  // 3b. internal links to the translated note series / index point to the language-specific pages
  html = html.replace(/href="\/notizen\/([a-z0-9-]+)\/"/g, (m, slug) =>
    [...SERIES, ...NOTES].some((s) => s.slug === slug) ? `href="/${lang}/notes/${slug}/"` : m
  );
  html = html.replace(/href="\/projekte\/([a-z0-9-]+)\/"/g, (m, slug) =>
    CASES.some((c) => c.slug === slug) ? `href="/${lang}/projects/${slug}/"` : m
  );
  html = html.replace('href="/notizen/" data-i18n="cases_notes"', `href="/${lang}/notes/" data-i18n="cases_notes"`);

  // 3c. English CV for all non-German pages
  html = html.replace('href="/resume-de.pdf"', 'href="/resume-en.pdf"');

  // 4. language switcher: mark the current language as active
  html = html.replace(/<a class="lang-btn active"/, '<a class="lang-btn"');
  html = replaceOnce(html, `<a class="lang-btn" data-lang="${lang}"`, `<a class="lang-btn active" data-lang="${lang}"`, `lang link ${lang}`);

  // 5. banner
  html = html.replace(
    '<!DOCTYPE html>',
    '<!DOCTYPE html>\n<!-- GENERATED from /index.html by scripts/build-i18n.mjs — do not edit by hand -->'
  );
  return html;
}

// ---------- main ----------
const translations = loadTranslations();
const source = readFileSync(join(ROOT, 'index.html'), 'utf8');
const missing = new Set();
let stale = [];

for (const lang of Object.keys(PAGES)) {
  if (!translations[lang]) throw new Error(`no translations for "${lang}"`);
  const out = buildPage(source, lang, translations[lang], missing);
  const file = join(ROOT, lang, 'index.html');
  if (CHECK) {
    const current = existsSync(file) ? readFileSync(file, 'utf8') : '';
    if (current !== out) stale.push(`${lang}/index.html`);
  } else {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, out);
    console.log(`✓ ${lang}/index.html`);
  }
}

if (missing.size) {
  console.warn(`⚠ missing translations (German text kept): ${[...missing].join(', ')}`);
}
if (CHECK) {
  if (stale.length) {
    console.error(`✗ out of date: ${stale.join(', ')}\n  Run: node scripts/build-i18n.mjs and commit the result.`);
    process.exit(1);
  }
  console.log('✓ language pages are up to date');
}
