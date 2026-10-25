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

## AI chat (Cloudflare Worker)

`worker/ai-chat.js` is the source of the "Ask AI about Serge" proxy. It is deployed manually:
Cloudflare → Workers & Pages → `zabolotny` → Edit code → paste → Deploy.
Secrets: `GROQ_API_KEY` (required), `GROQ_MODEL` (optional, overrides the default model).

## CV (PDF)

`resume-de.pdf` / `resume-en.pdf` (and `resume.pdf` = German, kept for old links) are generated:

```bash
pip install reportlab --break-system-packages
python3 scripts/build-cv.py
```

Content lives in the `CONTENT` dict of `scripts/build-cv.py`. The German page links `resume-de.pdf`, EN/RU/UA link `resume-en.pdf`.
