// Architecture diagrams for the case studies (inline SVG, labels in 4 languages).
// Rendered by scripts/build-pages.mjs via the body block { diagram: '<key>' }.
// Only facts that are stated in the case study text are drawn.

const t = (de, en, ru, ua) => ({ de, en, ru, ua });
const W = 160, H = 64;
const X = [20, 300, 580];
const Y = [30, 140, 250];
// node: [col, row, label (\n = line break), style]
const N = (col, row, label, hi = false) => ({ x: X[col], y: Y[row], label, hi });

export const DIAGRAMS = {
  meistermeld: {
    title: t('Architektur von MeisterMeld', 'MeisterMeld architecture', 'Архитектура MeisterMeld', 'Архітектура MeisterMeld'),
    nodes: [
      N(0, 0, t('Smartphone\nPWA', 'Smartphone\nPWA', 'Смартфон\nPWA', 'Смартфон\nPWA')),
      N(1, 0, t('Next.js\nUI + API', 'Next.js\nUI + API', 'Next.js\nUI + API', 'Next.js\nUI + API'), true),
      N(2, 0, t('PostgreSQL\nDrizzle ORM', 'PostgreSQL\nDrizzle ORM', 'PostgreSQL\nDrizzle ORM', 'PostgreSQL\nDrizzle ORM')),
      N(1, 1, t('KI (LLM)\nSprache/Foto → Bericht', 'AI (LLM)\nvoice/photo → report', 'ИИ (LLM)\nголос/фото → отчёт', 'ШІ (LLM)\nголос/фото → звіт')),
      N(2, 1, t('Arbeitsbericht\nals PDF', 'Work report\nas PDF', 'Рабочий отчёт\nв PDF', 'Робочий звіт\nу PDF')),
      N(0, 2, t('git push', 'git push', 'git push', 'git push')),
      N(1, 2, t('GitHub Actions', 'GitHub Actions', 'GitHub Actions', 'GitHub Actions')),
      N(2, 2, t('Eigener VPS\n(1blu)', 'Own VPS\n(1blu)', 'Свой VPS\n(1blu)', 'Власний VPS\n(1blu)'), true),
    ],
    edges: [[0, 1], [1, 2], [1, 3], [3, 4], [5, 6], [6, 7]],
  },
  pflegeoasis: {
    title: t('Architektur von PflegeOasis', 'PflegeOasis architecture', 'Архитектура PflegeOasis', 'Архітектура PflegeOasis'),
    nodes: [
      N(0, 0, t('Besucher\nBrowser', 'Visitor\nbrowser', 'Посетитель\nбраузер', 'Відвідувач\nбраузер')),
      N(1, 0, t('Caddy\nTLS, Reverse Proxy', 'Caddy\nTLS, reverse proxy', 'Caddy\nTLS, reverse proxy', 'Caddy\nTLS, reverse proxy')),
      N(2, 0, t('Next.js 15\nPM2 · PDF', 'Next.js 15\nPM2 · PDF', 'Next.js 15\nPM2 · PDF', 'Next.js 15\nPM2 · PDF'), true),
      N(0, 1, t('OpenAI API\nEntwürfe, offline', 'OpenAI API\ndrafts, offline', 'OpenAI API\nчерновики, офлайн', 'OpenAI API\nчернетки, офлайн')),
      N(1, 1, t('Mensch prüft\n(Review)', 'Human\nreview', 'Проверка\nчеловеком', 'Перевірка\nлюдиною'), true),
      N(2, 1, t('PostgreSQL 16\nDrizzle ORM', 'PostgreSQL 16\nDrizzle ORM', 'PostgreSQL 16\nDrizzle ORM', 'PostgreSQL 16\nDrizzle ORM')),
      N(0, 2, t('git push', 'git push', 'git push', 'git push')),
      N(1, 2, t('GitHub Actions\n→ SSH', 'GitHub Actions\n→ SSH', 'GitHub Actions\n→ SSH', 'GitHub Actions\n→ SSH')),
      N(2, 2, t('1blu-VPS\npull, build, reload', '1blu VPS\npull, build, reload', 'VPS 1blu\npull, build, reload', 'VPS 1blu\npull, build, reload'), true),
    ],
    edges: [[0, 1], [1, 2], [2, 5], [3, 4], [4, 5], [6, 7], [7, 8]],
  },
};
export const DIAGRAM_SIZE = { w: W, h: H, vw: 760, vh: 330 };
