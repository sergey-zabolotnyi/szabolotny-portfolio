# zabolotny.de

Personal portfolio of Serge Zabolotny — static HTML/CSS/JS, deployed on Vercel.

## Languages

- `index.html` — German source page (`/`). Edit markup here.
- `js/i18n.js` — texts for DE / EN / RU / UA (`translations` object).
- `en/`, `ru/`, `ua/` — **generated** pages. Do not edit by hand.

After changing `index.html` or `js/i18n.js`, regenerate and commit:

```bash
node scripts/build-i18n.mjs
```

A GitHub Action (`.github/workflows/i18n-check.yml`) fails if the generated pages are out of date.
