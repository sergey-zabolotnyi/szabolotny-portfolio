// Content for generated pages: case studies and engineering notes, in 4 languages (DE / EN / RU / UA).
// Rendered by scripts/build-pages.mjs  ->  node scripts/build-pages.mjs
// Strings are { de, en, ru, ua }; plain strings are language-neutral.
// Body blocks: h2, p, ul, ol, code, table, callout. `{{path:<slug>}}` in a string -> localized URL of that page.
// Only facts about the real projects are stated; nothing is invented.

import { NOTES_2026 } from './notes-2026.mjs';

const t = (de, en, ru, ua) => ({ de, en, ru, ua });

export const AUTHOR = { name: 'Serge Zabolotny', url: 'https://zabolotny.de/' };

export const CASES = [
  // ───────────────────────────────────────────────────────── MeisterMeld
  {
    slug: 'meistermeld',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'PWA', 'LLM', 'Voice-first', 'Field Service'],
    liveUrl: 'https://meistermeld.de',
    liveLabel: t('MeisterMeld live ansehen', 'View MeisterMeld live', 'Открыть MeisterMeld', 'Відкрити MeisterMeld'),
    related: ['pflegeoasis', 'ci-cd-nextjs-vps'],
    title: t(
      'MeisterMeld – Voice-first Software für Handwerker | Case Study',
      'MeisterMeld – voice-first software for tradespeople | Case study',
      'MeisterMeld — voice-first ПО для мастеров и ремесленников | Кейс',
      'MeisterMeld — voice-first ПЗ для майстрів і ремісників | Кейс'
    ),
    description: t(
      'Case Study: MeisterMeld, KI-gestützte Field-Service-Software für Handwerksbetriebe – Sprach- und Foto-Berichte, Auftragsverwaltung, PWA. Next.js, PostgreSQL, Drizzle. Von Serge Zabolotny.',
      'Case study: MeisterMeld, AI-assisted field-service software for trades businesses – voice and photo reports, job management, PWA. Next.js, PostgreSQL, Drizzle. By Serge Zabolotny.',
      'Кейс: MeisterMeld — field-service ПО с ИИ для ремесленных бригад: голосовые и фото-отчёты, управление заказами, PWA. Next.js, PostgreSQL, Drizzle. Автор — Сергей Заболотный.',
      'Кейс: MeisterMeld — field-service ПЗ з ШІ для ремісничих бригад: голосові та фото-звіти, керування замовленнями, PWA. Next.js, PostgreSQL, Drizzle. Автор — Сергій Заболотний.'
    ),
    kicker: t('Case Study · SaaS · Handwerk', 'Case study · SaaS · Trades', 'Кейс · SaaS · Ремесло', 'Кейс · SaaS · Ремесло'),
    h1: t(
      'MeisterMeld: Voice-first Berichte und Auftragsverwaltung für Handwerker',
      'MeisterMeld: voice-first reports and job management for tradespeople',
      'MeisterMeld: голосовые отчёты и управление заказами для мастеров',
      'MeisterMeld: голосові звіти та керування замовленнями для майстрів'
    ),
    lead: t(
      'Eine KI-gestützte Field-Service-App, mit der Handwerksbetriebe Arbeitsberichte per Sprache und Foto direkt auf der Baustelle erstellen – statt abends Zettel abzutippen.',
      'An AI-assisted field-service app that lets trades businesses create work reports by voice and photo right on the job site – instead of typing up notes in the evening.',
      'Field-service приложение с ИИ, в котором ремесленные компании создают рабочие отчёты голосом и фото прямо на объекте — вместо вечернего перепечатывания записок.',
      'Field-service застосунок із ШІ, у якому ремісничі компанії створюють робочі звіти голосом і фото просто на об’єкті — замість вечірнього передрукування записок.'
    ),
    facts: [
      [
        t('Rolle', 'Role', 'Роль', 'Роль'),
        t(
          'Konzept, Design, Entwicklung, Deployment, Betrieb (alleinige Entwicklung)',
          'Concept, design, development, deployment, operations (sole developer)',
          'Концепция, дизайн, разработка, деплой, эксплуатация (единственный разработчик)',
          'Концепція, дизайн, розробка, деплой, експлуатація (єдиний розробник)'
        ),
      ],
      [
        t('Status', 'Status', 'Статус', 'Статус'),
        t(
          'MVP live – erste Nutzer aus dem Handwerk testen die App',
          'MVP live – the first users from the trades are testing the app',
          'MVP запущен — первые пользователи из ремесленной сферы тестируют приложение',
          'MVP запущено — перші користувачі з ремісничої сфери тестують застосунок'
        ),
      ],
      ['Stack', 'Next.js, TypeScript, PostgreSQL, Drizzle ORM, PWA, LLM'],
      [
        t('Betrieb', 'Operations', 'Эксплуатация', 'Експлуатація'),
        t(
          'Eigener VPS (1blu), Deployment per GitHub Actions',
          'Own VPS (1blu), deployment via GitHub Actions',
          'Собственный VPS (1blu), деплой через GitHub Actions',
          'Власний VPS (1blu), деплой через GitHub Actions'
        ),
      ],
    ],
    jsonld: {
      '@type': 'SoftwareApplication',
      name: 'MeisterMeld',
      applicationCategory: 'BusinessApplication',
      url: 'https://meistermeld.de',
      operatingSystem: t(
        'Web, Progressive Web App (iOS/Android über den Browser)',
        'Web, Progressive Web App (iOS/Android via browser)',
        'Web, Progressive Web App (iOS/Android через браузер)',
        'Web, Progressive Web App (iOS/Android через браузер)'
      ),
      description: t(
        'Voice-first Field-Service-Software für Handwerksbetriebe: Berichte per Sprache und Foto, Kunden-, Auftrags- und Mitarbeiterverwaltung.',
        'Voice-first field-service software for trades businesses: reports by voice and photo, customer, job and employee management.',
        'Voice-first field-service ПО для ремесленных компаний: отчёты голосом и фото, управление клиентами, заказами и сотрудниками.',
        'Voice-first field-service ПЗ для ремісничих компаній: звіти голосом і фото, керування клієнтами, замовленнями та співробітниками.'
      ),
    },
    body: [
      { video: 'meistermeld' },
      {
        h2: t(
          'Das Problem: Dokumentation kostet Zeit, die auf der Baustelle fehlt',
          'The problem: documentation costs time the job site does not have',
          'Проблема: документация отнимает время, которого нет на объекте',
          'Проблема: документація забирає час, якого немає на об’єкті'
        ),
      },
      {
        p: t(
          'Im Handwerk entsteht die Arbeit vor Ort, die Dokumentation aber oft erst danach: Notizen auf Zetteln, Fotos im Handy, Berichte am Abend am Schreibtisch. Das ist Zeit, die niemand abrechnen kann – und Informationen gehen unterwegs verloren.',
          'In the trades the work happens on site, but the documentation often only afterwards: notes on scraps of paper, photos in the phone, reports at the desk in the evening. That is time nobody can bill – and information gets lost along the way.',
          'В ремесле работа происходит на месте, а документация — часто уже потом: записки на бумажках, фото в телефоне, отчёты вечером за столом. Это время, которое никто не оплатит, а информация по дороге теряется.',
          'У ремеслі робота відбувається на місці, а документація — часто вже потім: записки на папірцях, фото в телефоні, звіти ввечері за столом. Це час, який ніхто не оплатить, а інформація дорогою губиться.'
        ),
      },
      {
        h2: t(
          'Die Lösung: erst sprechen, dann strukturieren lassen',
          'The solution: speak first, let the AI structure it',
          'Решение: сначала говорим, потом ИИ структурирует',
          'Рішення: спочатку говоримо, потім ШІ структурує'
        ),
      },
      {
        p: t(
          'MeisterMeld dreht den Ablauf um. Mitarbeiter sprechen den Bericht ein oder laden Fotos hoch, eine <strong>KI (LLM)</strong> macht daraus einen strukturierten Arbeitsbericht, den der Betrieb prüfen, als PDF herunterladen und dem Auftrag zuordnen kann.',
          'MeisterMeld turns the workflow around. Employees speak the report or upload photos, and an <strong>AI (LLM)</strong> turns it into a structured work report that the company can review, download as a PDF and attach to the job.',
          'MeisterMeld переворачивает процесс. Сотрудники наговаривают отчёт или загружают фото, а <strong>ИИ (LLM)</strong> превращает это в структурированный рабочий отчёт, который компания проверяет, скачивает в PDF и привязывает к заказу.',
          'MeisterMeld перевертає процес. Співробітники наговорюють звіт або завантажують фото, а <strong>ШІ (LLM)</strong> перетворює це на структурований робочий звіт, який компанія перевіряє, завантажує у PDF і прив’язує до замовлення.'
        ),
      },
      {
        ul: [
          t(
            '<strong>Sprach- und Foto-Uploads</strong> als Eingabe, KI-Berichte als Ergebnis',
            '<strong>Voice and photo uploads</strong> as input, AI reports as output',
            '<strong>Голосовые и фото-загрузки</strong> на входе, ИИ-отчёты на выходе',
            '<strong>Голосові та фото-завантаження</strong> на вході, ШІ-звіти на виході'
          ),
          t(
            '<strong>Schnellbericht ohne Auftrag</strong> – wenn schnell etwas dokumentiert werden muss, ohne erst einen Auftrag anzulegen',
            '<strong>Quick report without a job</strong> – when something has to be documented fast, without creating a job first',
            '<strong>Быстрый отчёт без заказа</strong> — когда нужно быстро что-то зафиксировать, не создавая сначала заказ',
            '<strong>Швидкий звіт без замовлення</strong> — коли треба швидко щось зафіксувати, не створюючи спершу замовлення'
          ),
          t(
            '<strong>Kunden-, Auftrags- und Mitarbeiterverwaltung</strong> in einer App',
            '<strong>Customer, job and employee management</strong> in one app',
            '<strong>Управление клиентами, заказами и сотрудниками</strong> в одном приложении',
            '<strong>Керування клієнтами, замовленнями та співробітниками</strong> в одному застосунку'
          ),
          t(
            '<strong>PWA</strong>: installierbar auf dem Smartphone, ohne App-Store',
            '<strong>PWA</strong>: installable on the smartphone, no app store needed',
            '<strong>PWA</strong>: устанавливается на смартфон без магазина приложений',
            '<strong>PWA</strong>: встановлюється на смартфон без магазину застосунків'
          ),
        ],
      },
      { diagram: 'meistermeld' },
      { h2: t('Technik und Entscheidungen', 'Technology and decisions', 'Технологии и решения', 'Технології та рішення') },
      {
        ul: [
          t(
            '<strong>Next.js + TypeScript</strong> für Oberfläche und API, <strong>PostgreSQL mit Drizzle ORM</strong> als typisiertes Datenmodell',
            '<strong>Next.js + TypeScript</strong> for UI and API, <strong>PostgreSQL with Drizzle ORM</strong> as a typed data model',
            '<strong>Next.js + TypeScript</strong> для интерфейса и API, <strong>PostgreSQL с Drizzle ORM</strong> как типизированная модель данных',
            '<strong>Next.js + TypeScript</strong> для інтерфейсу та API, <strong>PostgreSQL з Drizzle ORM</strong> як типізована модель даних'
          ),
          t(
            '<strong>Voice-first und mobil zuerst:</strong> die App ist für die Arbeit unterwegs gedacht, nicht für den Schreibtisch',
            '<strong>Voice-first and mobile first:</strong> the app is built for work on the move, not for the desk',
            '<strong>Voice-first и mobile first:</strong> приложение создано для работы в дороге, а не за столом',
            '<strong>Voice-first і mobile first:</strong> застосунок створено для роботи в дорозі, а не за столом'
          ),
          t(
            '<strong>Eigener VPS statt PaaS:</strong> volle Kontrolle über Daten und Betrieb, Hosting in Deutschland',
            '<strong>Own VPS instead of PaaS:</strong> full control over data and operations, hosting in Germany',
            '<strong>Собственный VPS вместо PaaS:</strong> полный контроль над данными и эксплуатацией, хостинг в Германии',
            '<strong>Власний VPS замість PaaS:</strong> повний контроль над даними та експлуатацією, хостинг у Німеччині'
          ),
          t(
            '<strong>Deployment per GitHub Actions</strong> bei jedem Push auf den Hauptzweig',
            '<strong>Deployment via GitHub Actions</strong> on every push to the main branch',
            '<strong>Деплой через GitHub Actions</strong> при каждом пуше в основную ветку',
            '<strong>Деплой через GitHub Actions</strong> при кожному пуші в основну гілку'
          ),
          t(
            '<strong>Bewusster Scope:</strong> Buchhaltung und Rechnungsstellung baue ich nicht nach – dafür gibt es spezialisierte Programme. MeisterMeld konzentriert sich auf das, was vor Ort fehlt: schnelle, saubere Dokumentation.',
            '<strong>Deliberate scope:</strong> I do not rebuild accounting and invoicing – specialised programs exist for that. MeisterMeld focuses on what is missing on site: fast, clean documentation.',
            '<strong>Осознанные границы:</strong> бухгалтерию и выставление счетов я не переписываю — для этого есть специализированные программы. MeisterMeld сосредоточен на том, чего не хватает на объекте: быстрой и аккуратной документации.',
            '<strong>Усвідомлені межі:</strong> бухгалтерію та виставлення рахунків я не переписую — для цього є спеціалізовані програми. MeisterMeld зосереджений на тому, чого бракує на об’єкті: швидкій та акуратній документації.'
          ),
        ],
      },
      {
        callout: t(
          '<strong>Lehre aus dem Betrieb:</strong> Sobald Menschen tagsüber mit der App arbeiten, sind Deployments keine interne Sache mehr. Ausfallarme Releases gehören zum Produkt – nicht nur zur Infrastruktur.',
          '<strong>Lesson from operations:</strong> once people work with the app during the day, deployments are no longer an internal matter. Low-downtime releases are part of the product – not just of the infrastructure.',
          '<strong>Урок из эксплуатации:</strong> как только люди днём работают с приложением, деплой перестаёт быть внутренним делом. Релизы без простоя — часть продукта, а не только инфраструктуры.',
          '<strong>Урок з експлуатації:</strong> щойно люди вдень працюють із застосунком, деплой перестає бути внутрішньою справою. Релізи без простою — частина продукту, а не лише інфраструктури.'
        ),
      },
      { h2: t('Was ich daran zeige', 'What this project shows', 'Что показывает этот проект', 'Що показує цей проєкт') },
      {
        p: t(
          'MeisterMeld ist das Projekt mit dem größten Aufwand in meinem Portfolio, weil es alle Ebenen berührt: Produktidee und UX, KI-Integration (Sprache, Foto, strukturierte Ausgaben), Datenmodell, Authentifizierung und Rollen, Deployment und Betrieb mit echten Nutzern.',
          'MeisterMeld is the most effort-intensive project in my portfolio because it touches every layer: product idea and UX, AI integration (voice, photo, structured outputs), data model, authentication and roles, deployment and operations with real users.',
          'MeisterMeld — самый трудоёмкий проект в моём портфолио, потому что затрагивает все уровни: идею продукта и UX, интеграцию ИИ (голос, фото, структурированный вывод), модель данных, аутентификацию и роли, деплой и эксплуатацию с реальными пользователями.',
          'MeisterMeld — найтрудомісткіший проєкт у моєму портфоліо, бо торкається всіх рівнів: ідеї продукту й UX, інтеграції ШІ (голос, фото, структурований вивід), моделі даних, автентифікації та ролей, деплою й експлуатації з реальними користувачами.'
        ),
      },
    ],
  },

  // ───────────────────────────────────────────────────────── PflegeOasis
  {
    slug: 'pflegeoasis',
    tags: ['Next.js 15', 'PostgreSQL 16', 'Drizzle ORM', 'OpenAI', 'Human-in-the-Loop', 'CI/CD', 'PDF'],
    liveUrl: 'https://pflegeoasis.de',
    liveLabel: t('PflegeOasis live ansehen', 'View PflegeOasis live', 'Открыть PflegeOasis', 'Відкрити PflegeOasis'),
    related: ['meistermeld', 'ki-content-human-in-the-loop', 'ci-cd-nextjs-vps'],
    title: t(
      'PflegeOasis – Pflegegrad-Rechner & KI-Content mit Human-in-the-Loop | Case Study',
      'PflegeOasis – care-level calculator & AI content with human-in-the-loop | Case study',
      'PflegeOasis — калькулятор степени ухода и ИИ-контент с человеком в цикле | Кейс',
      'PflegeOasis — калькулятор ступеня догляду та ШІ-контент із людиною в циклі | Кейс'
    ),
    description: t(
      'Case Study: PflegeOasis.de, kostenloses Pflege-Portal mit Pflegegrad-Rechner, Widerspruch-Generator und 200+ Ratgeber-Artikeln aus einer KI-Pipeline mit menschlichem Review. Next.js 15, PostgreSQL 16.',
      'Case study: PflegeOasis.de, a free care portal with a care-level calculator, an objection-letter generator and 200+ guide articles from an AI pipeline with human review. Next.js 15, PostgreSQL 16.',
      'Кейс: PflegeOasis.de — бесплатный портал об уходе с калькулятором Pflegegrad, генератором возражений и 200+ статьями из ИИ-пайплайна с проверкой человеком. Next.js 15, PostgreSQL 16.',
      'Кейс: PflegeOasis.de — безкоштовний портал про догляд із калькулятором Pflegegrad, генератором заперечень і 200+ статтями з ШІ-пайплайну з перевіркою людиною. Next.js 15, PostgreSQL 16.'
    ),
    kicker: t('Case Study · Gesundheit · Ratgeber', 'Case study · Health · Guides', 'Кейс · Здоровье · Руководства', 'Кейс · Здоров’я · Посібники'),
    h1: t(
      'PflegeOasis: Pflegegrad-Rechner, Widerspruch-Generator und KI-Content mit menschlichem Review',
      'PflegeOasis: care-level calculator, objection-letter generator and AI content with human review',
      'PflegeOasis: калькулятор Pflegegrad, генератор возражений и ИИ-контент с проверкой человеком',
      'PflegeOasis: калькулятор Pflegegrad, генератор заперечень і ШІ-контент із перевіркою людиною'
    ),
    lead: t(
      'Ein kostenloses Portal, das Angehörigen hilft, sich im deutschen Pflegesystem zurechtzufinden – mit Rechnern, Checklisten und über 200 Ratgeber-Artikeln.',
      'A free portal that helps relatives find their way through the German care system – with calculators, checklists and more than 200 guide articles.',
      'Бесплатный портал, который помогает родственникам разобраться в немецкой системе ухода — с калькуляторами, чек-листами и более чем 200 статьями-руководствами.',
      'Безкоштовний портал, який допомагає родичам розібратися в німецькій системі догляду — з калькуляторами, чек-листами та понад 200 статтями-посібниками.'
    ),
    facts: [
      [
        t('Rolle', 'Role', 'Роль', 'Роль'),
        t(
          'Konzept und alleinige Entwicklung inkl. Betrieb',
          'Concept and sole development incl. operations',
          'Концепция и единоличная разработка, включая эксплуатацию',
          'Концепція та єдина розробка, включно з експлуатацією'
        ),
      ],
      [t('Status', 'Status', 'Статус', 'Статус'), t('MVP live', 'MVP live', 'MVP запущен', 'MVP запущено')],
      ['Stack', 'Next.js 15, TypeScript, Tailwind CSS, PostgreSQL 16, Drizzle ORM'],
      [
        t('KI & Betrieb', 'AI & operations', 'ИИ и эксплуатация', 'ШІ та експлуатація'),
        t(
          'OpenAI API (offline), GitHub Actions, PM2, Caddy, 1blu-VPS',
          'OpenAI API (offline), GitHub Actions, PM2, Caddy, 1blu VPS',
          'OpenAI API (офлайн), GitHub Actions, PM2, Caddy, VPS 1blu',
          'OpenAI API (офлайн), GitHub Actions, PM2, Caddy, VPS 1blu'
        ),
      ],
    ],
    jsonld: {
      '@type': 'SoftwareApplication',
      name: 'PflegeOasis',
      applicationCategory: 'HealthApplication',
      url: 'https://pflegeoasis.de',
      operatingSystem: 'Web',
      description: t(
        'Kostenloses Ratgeber-Portal zur Pflege in Deutschland mit Pflegegrad-Rechner, Pflegegeld-Rechner, Widerspruch-Generator und Antrags-Checkliste.',
        'Free guide portal on care in Germany with a care-level calculator, care-allowance calculator, objection-letter generator and application checklist.',
        'Бесплатный портал-руководство об уходе в Германии: калькулятор Pflegegrad, калькулятор Pflegegeld, генератор возражений и чек-лист заявки.',
        'Безкоштовний портал-посібник про догляд у Німеччині: калькулятор Pflegegrad, калькулятор Pflegegeld, генератор заперечень і чек-лист заявки.'
      ),
    },
    body: [
      {
        h2: t(
          'Das Problem: Pflege ist ein Behördenlabyrinth',
          'The problem: care is a bureaucratic maze',
          'Проблема: уход — это лабиринт ведомств',
          'Проблема: догляд — це лабіринт відомств'
        ),
      },
      {
        p: t(
          'Wer plötzlich einen Angehörigen pflegt, steht vor Begriffen wie Pflegegrad, Pflegegeld, Begutachtung und Widerspruch. Gute Informationen gibt es, aber sie sind verstreut, juristisch formuliert und oft nicht auf die konkrete Frage zugeschnitten.',
          'Anyone who suddenly cares for a relative faces terms like Pflegegrad (care level), Pflegegeld (care allowance), assessment and objection. Good information exists, but it is scattered, written in legal language and often not tailored to the actual question.',
          'Кто внезапно начинает ухаживать за родственником, сталкивается с понятиями Pflegegrad, Pflegegeld, экспертиза и возражение. Хорошая информация есть, но она разбросана, написана юридическим языком и часто не отвечает на конкретный вопрос.',
          'Хто раптом починає доглядати за родичем, стикається з поняттями Pflegegrad, Pflegegeld, експертиза та заперечення. Хороша інформація є, але вона розкидана, написана юридичною мовою й часто не відповідає на конкретне питання.'
        ),
      },
      { h2: t('Die Lösung: Werkzeuge statt nur Texte', 'The solution: tools, not just texts', 'Решение: инструменты, а не только тексты', 'Рішення: інструменти, а не лише тексти') },
      {
        ul: [
          t(
            '<strong>Pflegegrad-Rechner</strong> nach dem Punktesystem der Begutachtung',
            '<strong>Care-level calculator</strong> based on the points system of the assessment',
            '<strong>Калькулятор Pflegegrad</strong> по балльной системе экспертизы',
            '<strong>Калькулятор Pflegegrad</strong> за бальною системою експертизи'
          ),
          t(
            '<strong>Pflegegeld-Rechner</strong> für eine schnelle Orientierung',
            '<strong>Care-allowance calculator</strong> for quick orientation',
            '<strong>Калькулятор Pflegegeld</strong> для быстрой ориентации',
            '<strong>Калькулятор Pflegegeld</strong> для швидкої орієнтації'
          ),
          t(
            '<strong>Widerspruch-Generator</strong>, der ein fertiges Schreiben als PDF erzeugt',
            '<strong>Objection-letter generator</strong> that produces a ready-to-send letter as a PDF',
            '<strong>Генератор возражений</strong>, создающий готовое письмо в PDF',
            '<strong>Генератор заперечень</strong>, що створює готового листа у PDF'
          ),
          t(
            '<strong>Antrags-Checkliste</strong> und <strong>200+ Ratgeber-Artikel</strong> zu den häufigsten Fragen',
            '<strong>Application checklist</strong> and <strong>200+ guide articles</strong> on the most common questions',
            '<strong>Чек-лист заявки</strong> и <strong>200+ статей-руководств</strong> по самым частым вопросам',
            '<strong>Чек-лист заявки</strong> та <strong>200+ статей-посібників</strong> із найчастіших питань'
          ),
        ],
      },
      {
        h2: t('KI-Content mit Human-in-the-Loop', 'AI content with human-in-the-loop', 'ИИ-контент с человеком в цикле', 'ШІ-контент із людиною в циклі'),
      },
      {
        p: t(
          'Bei Pflegerecht sind Fehler nicht akzeptabel. Deshalb erzeugt die <strong>OpenAI API</strong> die Artikelentwürfe ausschließlich <strong>offline</strong> – nie live für Besucher. Jeder Entwurf wird mit strukturierten Prompts, Quellen und Rechtsgrundlagen erzeugt und vor der Veröffentlichung von einem Menschen geprüft. Die KI beschleunigt die Arbeit, die Verantwortung bleibt beim Menschen.',
          'With care law, mistakes are not acceptable. That is why the <strong>OpenAI API</strong> creates article drafts exclusively <strong>offline</strong> – never live for visitors. Every draft is generated with structured prompts, sources and legal bases and reviewed by a human before publication. The AI speeds up the work; responsibility stays with the human.',
          'В вопросах права об уходе ошибки недопустимы. Поэтому <strong>OpenAI API</strong> создаёт черновики статей исключительно <strong>офлайн</strong> — никогда вживую для посетителей. Каждый черновик генерируется со структурированными промптами, источниками и правовыми основаниями и проверяется человеком до публикации. ИИ ускоряет работу, ответственность остаётся за человеком.',
          'У праві про догляд помилки неприпустимі. Тому <strong>OpenAI API</strong> створює чернетки статей виключно <strong>офлайн</strong> — ніколи наживо для відвідувачів. Кожну чернетку генерують зі структурованими промптами, джерелами та правовими підставами, і перед публікацією її перевіряє людина. ШІ пришвидшує роботу, відповідальність лишається за людиною.'
        ),
      },
      {
        p: t(
          'Mehr dazu: <a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop – die Notiz</a>.',
          'More: <a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop – the note</a>.',
          'Подробнее: <a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле — заметка</a>.',
          'Докладніше: <a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі — нотатка</a>.'
        ),
      },
      { diagram: 'pflegeoasis' },
      { h2: t('Technik und Betrieb', 'Technology and operations', 'Технологии и эксплуатация', 'Технології та експлуатація') },
      {
        ul: [
          t(
            '<strong>Next.js 15 (App Router)</strong> mit TypeScript und Tailwind CSS, <strong>PostgreSQL 16</strong> mit Drizzle ORM',
            '<strong>Next.js 15 (App Router)</strong> with TypeScript and Tailwind CSS, <strong>PostgreSQL 16</strong> with Drizzle ORM',
            '<strong>Next.js 15 (App Router)</strong> с TypeScript и Tailwind CSS, <strong>PostgreSQL 16</strong> с Drizzle ORM',
            '<strong>Next.js 15 (App Router)</strong> з TypeScript і Tailwind CSS, <strong>PostgreSQL 16</strong> з Drizzle ORM'
          ),
          t(
            'Rechner-Logik als getrennte, testbare Module – nicht in der Oberfläche vergraben',
            'Calculator logic as separate, testable modules – not buried in the UI',
            'Логика калькуляторов вынесена в отдельные тестируемые модули, а не зарыта в интерфейсе',
            'Логіка калькуляторів винесена в окремі модулі, які можна тестувати, а не закопана в інтерфейсі'
          ),
          t(
            'PDF-Erzeugung mit <code>react-pdf</code>',
            'PDF generation with <code>react-pdf</code>',
            'Генерация PDF с помощью <code>react-pdf</code>',
            'Генерація PDF за допомогою <code>react-pdf</code>'
          ),
          t(
            '<strong>CI/CD:</strong> GitHub Actions → SSH → <code>git pull</code>, <code>pnpm install</code>, <code>pnpm build</code>, danach <code>pm2 reload</code> ohne Ausfallzeit; Caddy erneuert die TLS-Zertifikate automatisch',
            '<strong>CI/CD:</strong> GitHub Actions → SSH → <code>git pull</code>, <code>pnpm install</code>, <code>pnpm build</code>, then <code>pm2 reload</code> without downtime; Caddy renews the TLS certificates automatically',
            '<strong>CI/CD:</strong> GitHub Actions → SSH → <code>git pull</code>, <code>pnpm install</code>, <code>pnpm build</code>, затем <code>pm2 reload</code> без простоя; Caddy автоматически продлевает TLS-сертификаты',
            '<strong>CI/CD:</strong> GitHub Actions → SSH → <code>git pull</code>, <code>pnpm install</code>, <code>pnpm build</code>, потім <code>pm2 reload</code> без простою; Caddy автоматично подовжує TLS-сертифікати'
          ),
          t(
            'Betrieb auf einem eigenen 1blu-VPS',
            'Operated on my own 1blu VPS',
            'Работает на собственном VPS 1blu',
            'Працює на власному VPS 1blu'
          ),
        ],
      },
      {
        p: t(
          'Details: <a href="{{path:ci-cd-nextjs-vps}}">CI/CD für Next.js 15 auf dem VPS</a>.',
          'Details: <a href="{{path:ci-cd-nextjs-vps}}">CI/CD for Next.js 15 on a VPS</a>.',
          'Подробности: <a href="{{path:ci-cd-nextjs-vps}}">CI/CD для Next.js 15 на VPS</a>.',
          'Подробиці: <a href="{{path:ci-cd-nextjs-vps}}">CI/CD для Next.js 15 на VPS</a>.'
        ),
      },
      {
        callout: t(
          '<strong>Hinweis:</strong> PflegeOasis liefert Orientierung, keine Rechtsberatung. Diese Seite beschreibt das Projekt aus Entwicklersicht.',
          '<strong>Note:</strong> PflegeOasis offers orientation, not legal advice. This page describes the project from a developer’s point of view.',
          '<strong>Примечание:</strong> PflegeOasis даёт ориентиры, а не юридическую консультацию. Эта страница описывает проект с точки зрения разработчика.',
          '<strong>Примітка:</strong> PflegeOasis дає орієнтири, а не юридичну консультацію. Ця сторінка описує проєкт із погляду розробника.'
        ),
      },
    ],
  },
];

export const NOTES = [
  // ───────────────────────────────────────────────────────── Zero Trust
  {
    slug: 'zero-trust-homelab',
    date: '2026-10-18',
    tags: ['Cloudflare Tunnel', 'Zero Trust', 'Cloudflare Access', 'Tailscale', 'Proxmox', 'Homelab'],
    related: ['homeserver-zugriff-backup', 'proxmox-lxc-aufteilung', 'homeserver-statt-cloud'],
    title: t(
      'Zero Trust fürs Homelab: Cloudflare Tunnel und Access statt offener Dashboards',
      'Zero Trust for the homelab: Cloudflare Tunnel and Access instead of open dashboards',
      'Zero Trust для homelab: Cloudflare Tunnel и Access вместо открытых дашбордов',
      'Zero Trust для homelab: Cloudflare Tunnel і Access замість відкритих дашбордів'
    ),
    description: t(
      'Wie ich ein öffentlich erreichbares Homelab-Dashboard mit Cloudflare Tunnel, Cloudflare Access (Zero Trust) und Tailscale abgesichert habe – ohne Port-Forwarding am Router.',
      'How I secured a publicly reachable homelab dashboard with Cloudflare Tunnel, Cloudflare Access (Zero Trust) and Tailscale – without port forwarding on the router.',
      'Как я защитил общедоступный дашборд homelab с помощью Cloudflare Tunnel, Cloudflare Access (Zero Trust) и Tailscale — без проброса портов на роутере.',
      'Як я захистив загальнодоступний дашборд homelab за допомогою Cloudflare Tunnel, Cloudflare Access (Zero Trust) і Tailscale — без проброшення портів на роутері.'
    ),
    kicker: 'DevOps · Cloudflare · Zero Trust',
    h1: t(
      'Zero Trust fürs Homelab: Cloudflare Tunnel und Access statt offener Dashboards',
      'Zero Trust for the homelab: Cloudflare Tunnel and Access instead of open dashboards',
      'Zero Trust для homelab: Cloudflare Tunnel и Access вместо открытых дашбордов',
      'Zero Trust для homelab: Cloudflare Tunnel і Access замість відкритих дашбордів'
    ),
    lead: t(
      'Ein internes Dashboard war über eine Subdomain öffentlich erreichbar. So habe ich es mit Cloudflare Tunnel, Cloudflare Access und Tailscale abgesichert.',
      'An internal dashboard was publicly reachable via a subdomain. Here is how I locked it down with Cloudflare Tunnel, Cloudflare Access and Tailscale.',
      'Внутренний дашборд был доступен публично через поддомен. Вот как я закрыл его с помощью Cloudflare Tunnel, Cloudflare Access и Tailscale.',
      'Внутрішній дашборд був публічно доступний через піддомен. Ось як я закрив його за допомогою Cloudflare Tunnel, Cloudflare Access і Tailscale.'
    ),
    body: [
      { h2: t('Ausgangslage', 'Starting point', 'Исходная ситуация', 'Вихідна ситуація') },
      {
        p: t(
          'In meinem Homelab (Proxmox VE mit LXC-Containern) läuft ein Dashboard, das alle Dienste auflistet. Es war über eine Subdomain öffentlich erreichbar – ohne Login. Genau so etwas ist die typische Lücke bei Self-Hosting: Der Dienst ist praktisch, aber jeder, der die Adresse errät oder findet, sieht die Übersicht.',
          'My homelab (Proxmox VE with LXC containers) runs a dashboard that lists all services. It was publicly reachable via a subdomain – without a login. That is exactly the typical gap in self-hosting: the service is handy, but anyone who guesses or finds the address sees the overview.',
          'В моём homelab (Proxmox VE с LXC-контейнерами) работает дашборд со списком всех сервисов. Он был публично доступен через поддомен — без логина. Это типичная дыра в self-hosting: сервис удобен, но любой, кто угадает или найдёт адрес, видит всю картину.',
          'У моєму homelab (Proxmox VE з LXC-контейнерами) працює дашборд зі списком усіх сервісів. Він був публічно доступний через піддомен — без логіну. Це типова діра в self-hosting: сервіс зручний, але будь-хто, хто вгадає чи знайде адресу, бачить усю картину.'
        ),
      },
      { h2: t('Die Lösung in vier Bausteinen', 'The solution in four building blocks', 'Решение из четырёх блоков', 'Рішення з чотирьох блоків') },
      {
        ol: [
          t(
            '<strong>Cloudflare Tunnel als einziger Eingang.</strong> Der Tunnel baut eine ausgehende Verbindung zu Cloudflare auf. Am Router ist deshalb <strong>kein Port-Forwarding</strong> nötig, es gibt keine offenen Ports nach außen.',
            '<strong>Cloudflare Tunnel as the only entrance.</strong> The tunnel makes an outbound connection to Cloudflare. So <strong>no port forwarding</strong> is needed on the router and no ports are open to the outside.',
            '<strong>Cloudflare Tunnel как единственный вход.</strong> Туннель устанавливает исходящее соединение с Cloudflare. Поэтому на роутере <strong>не нужен проброс портов</strong>, снаружи нет открытых портов.',
            '<strong>Cloudflare Tunnel як єдиний вхід.</strong> Тунель встановлює вихідне з’єднання з Cloudflare. Тому на роутері <strong>не потрібне проброшення портів</strong>, ззовні немає відкритих портів.'
          ),
          t(
            '<strong>Cloudflare Access als Zero-Trust-Schicht.</strong> Vor dem Dashboard sitzt eine Access-Policy: Nur meine E-Mail-Adresse darf rein, die Anmeldung läuft per One-Time-PIN.',
            '<strong>Cloudflare Access as the zero-trust layer.</strong> An Access policy sits in front of the dashboard: only my email address may enter, and sign-in works via one-time PIN.',
            '<strong>Cloudflare Access как слой Zero Trust.</strong> Перед дашбордом стоит политика Access: войти может только мой e-mail, вход — по одноразовому PIN-коду.',
            '<strong>Cloudflare Access як шар Zero Trust.</strong> Перед дашбордом стоїть політика Access: увійти може лише мій e-mail, вхід — за одноразовим PIN-кодом.'
          ),
          t(
            '<strong>Tailscale für alles Private.</strong> Dienste, die nie öffentlich sein sollen (z. B. Foto-Verwaltung), erreiche ich ausschließlich über das WireGuard-basierte Tailscale-Netz.',
            '<strong>Tailscale for everything private.</strong> Services that should never be public (e.g. photo management) are reachable only through the WireGuard-based Tailscale network.',
            '<strong>Tailscale для всего приватного.</strong> Сервисы, которые никогда не должны быть публичными (например, управление фото), доступны только через сеть Tailscale на базе WireGuard.',
            '<strong>Tailscale для всього приватного.</strong> Сервіси, які ніколи не мають бути публічними (наприклад, керування фото), доступні лише через мережу Tailscale на базі WireGuard.'
          ),
          t(
            '<strong>Regelmäßig prüfen, was veröffentlicht ist.</strong> Der eigentliche Auslöser war eine vergessene Veröffentlichung.',
            '<strong>Regularly check what is published.</strong> The actual trigger was a forgotten publication.',
            '<strong>Регулярно проверять, что опубликовано.</strong> Настоящим поводом стала забытая публикация.',
            '<strong>Регулярно перевіряти, що опубліковано.</strong> Справжнім приводом стала забута публікація.'
          ),
        ],
      },
      {
        h2: t(
          'Wie ich prüfe, was wirklich öffentlich ist',
          'How I check what is really public',
          'Как я проверяю, что на самом деле публично',
          'Як я перевіряю, що насправді публічно'
        ),
      },
      {
        p: t(
          'Die wichtigste Lehre: nicht nur der Dienst zählt, sondern auch, was <strong>DNS und Tunnel</strong> veröffentlichen. Meine Checkliste:',
          'The key lesson: it is not only the service that counts, but also what <strong>DNS and the tunnel</strong> publish. My checklist:',
          'Главный вывод: важен не только сам сервис, но и то, что публикуют <strong>DNS и туннель</strong>. Мой чек-лист:',
          'Головний висновок: важливий не лише сам сервіс, а й те, що публікують <strong>DNS і тунель</strong>. Мій чек-лист:'
        ),
      },
      {
        ul: [
          t(
            'Im Cloudflare-Dashboard unter Zero Trust → Tunnels: Welche <em>Public Hostnames</em> sind eingetragen?',
            'In the Cloudflare dashboard under Zero Trust → Tunnels: which <em>Public Hostnames</em> are registered?',
            'В панели Cloudflare, раздел Zero Trust → Tunnels: какие <em>Public Hostnames</em> прописаны?',
            'У панелі Cloudflare, розділ Zero Trust → Tunnels: які <em>Public Hostnames</em> прописані?'
          ),
          t(
            'Unter Access → Applications: Hat <strong>jeder</strong> öffentliche Hostname eine Policy?',
            'Under Access → Applications: does <strong>every</strong> public hostname have a policy?',
            'В Access → Applications: есть ли политика у <strong>каждого</strong> публичного хоста?',
            'В Access → Applications: чи є політика в <strong>кожного</strong> публічного хоста?'
          ),
          t(
            'In den DNS-Einträgen: Gibt es alte CNAME-Einträge auf Dienste, die es nicht mehr gibt?',
            'In the DNS records: are there old CNAME records pointing to services that no longer exist?',
            'В DNS-записях: нет ли старых CNAME-записей на сервисы, которых уже не существует?',
            'У DNS-записах: чи немає старих CNAME-записів на сервіси, яких уже не існує?'
          ),
        ],
      },
      { code: 'cloudflared tunnel list\ncloudflared tunnel info <tunnel-name>' },
      {
        callout: t(
          '<strong>Merksatz:</strong> Zero Trust heißt nicht, ein Tool einzuschalten, sondern für jeden Zugang eine bewusste Entscheidung zu haben: öffentlich mit Login, privat über Tailscale – oder gar nicht erreichbar.',
          '<strong>Rule of thumb:</strong> zero trust does not mean switching on a tool, but making a conscious decision for every access: public with login, private via Tailscale – or not reachable at all.',
          '<strong>Главное правило:</strong> Zero Trust — это не «включить инструмент», а осознанно решить для каждого доступа: публично с логином, приватно через Tailscale — или вообще недоступно.',
          '<strong>Головне правило:</strong> Zero Trust — це не «увімкнути інструмент», а свідомо вирішити для кожного доступу: публічно з логіном, приватно через Tailscale — або взагалі недоступно.'
        ),
      },
      { h2: t('Ergebnis', 'Result', 'Результат', 'Результат') },
      {
        p: t(
          'Das Dashboard ist nur noch nach Login erreichbar, am Router ist kein Port offen, und private Dienste liegen komplett im Tailscale-Netz. Ein Dashboard weniger, das die interne Infrastruktur verrät.',
          'The dashboard is now reachable only after login, no port is open on the router, and private services live entirely inside the Tailscale network. One dashboard less that gives away the internal infrastructure.',
          'Дашборд теперь доступен только после логина, на роутере не открыт ни один порт, а приватные сервисы целиком находятся в сети Tailscale. Одним дашбордом, выдающим внутреннюю инфраструктуру, стало меньше.',
          'Дашборд тепер доступний лише після логіну, на роутері не відкрито жодного порту, а приватні сервіси повністю перебувають у мережі Tailscale. Одним дашбордом, що видає внутрішню інфраструктуру, стало менше.'
        ),
      },
    ],
  },

  // ───────────────────────────────────────────────────────── CI/CD
  {
    slug: 'ci-cd-nextjs-vps',
    date: '2026-10-18',
    tags: ['GitHub Actions', 'CI/CD', 'Next.js 15', 'PM2', 'Caddy', 'pnpm', 'VPS'],
    related: ['ki-content-human-in-the-loop', 'zero-trust-homelab'],
    title: t(
      'CI/CD für Next.js 15 auf dem VPS: GitHub Actions, PM2-Reload und Caddy',
      'CI/CD for Next.js 15 on a VPS: GitHub Actions, PM2 reload and Caddy',
      'CI/CD для Next.js 15 на VPS: GitHub Actions, PM2 reload и Caddy',
      'CI/CD для Next.js 15 на VPS: GitHub Actions, PM2 reload і Caddy'
    ),
    description: t(
      'Deployment per git push für eine Next.js-15-App auf einem eigenen VPS: GitHub Actions, SSH, pnpm, pm2 reload ohne Ausfallzeit und automatische TLS-Zertifikate mit Caddy.',
      'Deployment via git push for a Next.js 15 app on your own VPS: GitHub Actions, SSH, pnpm, pm2 reload without downtime and automatic TLS certificates with Caddy.',
      'Деплой через git push для приложения на Next.js 15 на собственном VPS: GitHub Actions, SSH, pnpm, pm2 reload без простоя и автоматические TLS-сертификаты с Caddy.',
      'Деплой через git push для застосунку на Next.js 15 на власному VPS: GitHub Actions, SSH, pnpm, pm2 reload без простою та автоматичні TLS-сертифікати з Caddy.'
    ),
    kicker: 'DevOps · CI/CD · Next.js',
    h1: t(
      'CI/CD für Next.js 15 auf dem VPS: GitHub Actions, PM2-Reload und Caddy',
      'CI/CD for Next.js 15 on a VPS: GitHub Actions, PM2 reload and Caddy',
      'CI/CD для Next.js 15 на VPS: GitHub Actions, PM2 reload и Caddy',
      'CI/CD для Next.js 15 на VPS: GitHub Actions, PM2 reload і Caddy'
    ),
    lead: t(
      'Manuelle Deployments waren langsam und fehleranfällig. Heute reicht ein git push – ohne Ausfallzeit und ohne PaaS.',
      'Manual deployments were slow and error-prone. Today a git push is enough – no downtime and no PaaS.',
      'Ручной деплой был медленным и подверженным ошибкам. Сегодня достаточно git push — без простоя и без PaaS.',
      'Ручний деплой був повільним і схильним до помилок. Сьогодні досить git push — без простою і без PaaS.'
    ),
    body: [
      { h2: t('Ausgangslage', 'Starting point', 'Исходная ситуация', 'Вихідна ситуація') },
      {
        p: t(
          'PflegeOasis läuft auf einem eigenen VPS (Next.js 15, PostgreSQL 16, Drizzle ORM). Anfangs habe ich per SSH eingeloggt und die Schritte von Hand ausgeführt. Das kostet Zeit, und jeder vergessene Schritt ist eine mögliche Fehlerquelle.',
          'PflegeOasis runs on my own VPS (Next.js 15, PostgreSQL 16, Drizzle ORM). At first I logged in via SSH and ran the steps by hand. That costs time, and every forgotten step is a possible source of errors.',
          'PflegeOasis работает на моём VPS (Next.js 15, PostgreSQL 16, Drizzle ORM). Сначала я заходил по SSH и выполнял шаги вручную. Это отнимает время, а каждый забытый шаг — возможный источник ошибок.',
          'PflegeOasis працює на моєму VPS (Next.js 15, PostgreSQL 16, Drizzle ORM). Спершу я заходив по SSH і виконував кроки вручну. Це забирає час, а кожен забутий крок — можливе джерело помилок.'
        ),
      },
      { h2: t('Der Ablauf', 'The flow', 'Процесс', 'Процес') },
      {
        ol: [
          t(
            '<strong>Push auf den Hauptzweig</strong> löst einen GitHub-Actions-Workflow aus.',
            'A <strong>push to the main branch</strong> triggers a GitHub Actions workflow.',
            '<strong>Пуш в основную ветку</strong> запускает workflow GitHub Actions.',
            '<strong>Пуш в основну гілку</strong> запускає workflow GitHub Actions.'
          ),
          t(
            'Der Workflow verbindet sich <strong>per SSH</strong> mit dem Server.',
            'The workflow connects to the server <strong>via SSH</strong>.',
            'Workflow подключается к серверу <strong>по SSH</strong>.',
            'Workflow підключається до сервера <strong>по SSH</strong>.'
          ),
          t(
            'Auf dem Server laufen <code>git pull</code>, <code>pnpm install</code> und <code>pnpm build</code>.',
            'On the server <code>git pull</code>, <code>pnpm install</code> and <code>pnpm build</code> run.',
            'На сервере выполняются <code>git pull</code>, <code>pnpm install</code> и <code>pnpm build</code>.',
            'На сервері виконуються <code>git pull</code>, <code>pnpm install</code> і <code>pnpm build</code>.'
          ),
          t(
            '<code>pm2 reload</code> startet die Next.js-App neu – <strong>ohne Ausfallzeit</strong>.',
            '<code>pm2 reload</code> restarts the Next.js app – <strong>without downtime</strong>.',
            '<code>pm2 reload</code> перезапускает приложение Next.js — <strong>без простоя</strong>.',
            '<code>pm2 reload</code> перезапускає застосунок Next.js — <strong>без простою</strong>.'
          ),
          t(
            '<strong>Caddy</strong> sitzt als Reverse Proxy davor und kümmert sich automatisch um TLS-Zertifikate.',
            '<strong>Caddy</strong> sits in front as a reverse proxy and takes care of TLS certificates automatically.',
            '<strong>Caddy</strong> стоит перед приложением как reverse proxy и автоматически занимается TLS-сертификатами.',
            '<strong>Caddy</strong> стоїть перед застосунком як reverse proxy й автоматично опікується TLS-сертифікатами.'
          ),
        ],
      },
      {
        p: t(
          'Schematisch (vereinfacht) macht der Server beim Deployment Folgendes:',
          'Schematically (simplified), the server does the following during a deployment:',
          'Схематично (упрощённо) сервер при деплое делает следующее:',
          'Схематично (спрощено) сервер під час деплою робить таке:'
        ),
      },
      { code: 'git pull\npnpm install\npnpm build\npm2 reload <app-name>' },
      { h2: t('Warum kein PaaS?', 'Why no PaaS?', 'Почему не PaaS?', 'Чому не PaaS?') },
      {
        ul: [
          t(
            '<strong>Kontrolle:</strong> Datenbank, Backups und Netzwerk liegen in meiner Hand, Hosting in Deutschland.',
            '<strong>Control:</strong> database, backups and network are in my hands, hosting in Germany.',
            '<strong>Контроль:</strong> база данных, бэкапы и сеть в моих руках, хостинг в Германии.',
            '<strong>Контроль:</strong> база даних, бекапи та мережа в моїх руках, хостинг у Німеччині.'
          ),
          t(
            '<strong>Kosten:</strong> Ein VPS trägt mehrere Projekte, ohne dass Limits oder Cold Starts stören.',
            '<strong>Cost:</strong> one VPS carries several projects without limits or cold starts getting in the way.',
            '<strong>Стоимость:</strong> один VPS тянет несколько проектов, и не мешают ни лимиты, ни холодные старты.',
            '<strong>Вартість:</strong> один VPS тягне кілька проєктів, і не заважають ні ліміти, ні холодні старти.'
          ),
          t(
            '<strong>Verständnis:</strong> Wer den Betrieb selbst baut, versteht, was bei einem Ausfall passiert.',
            '<strong>Understanding:</strong> whoever builds the operations themselves understands what happens during an outage.',
            '<strong>Понимание:</strong> кто сам строит эксплуатацию, понимает, что происходит при сбое.',
            '<strong>Розуміння:</strong> хто сам будує експлуатацію, розуміє, що відбувається при збої.'
          ),
        ],
      },
      {
        callout: t(
          '<strong>Grenzen:</strong> Gebaut wird hier auf dem Server selbst. Bei kleinem Arbeitsspeicher kann ein Build den Betrieb belasten – dann ist es sinnvoller, auf dem CI-Runner zu bauen und nur das fertige Ergebnis hochzuladen.',
          '<strong>Limits:</strong> the build runs on the server itself. With little RAM a build can strain the running app – then it makes more sense to build on the CI runner and upload only the finished result.',
          '<strong>Ограничения:</strong> сборка идёт на самом сервере. При малом объёме памяти сборка может нагрузить работающее приложение — тогда разумнее собирать на CI-раннере и загружать только готовый результат.',
          '<strong>Обмеження:</strong> збірка йде на самому сервері. За малого обсягу пам’яті збірка може навантажити працюючий застосунок — тоді розумніше збирати на CI-раннері й завантажувати лише готовий результат.'
        ),
      },
      { h2: t('Ergebnis', 'Result', 'Результат', 'Результат') },
      {
        p: t(
          'Deployment per <code>git push</code>: schneller, wiederholbar und ohne Handarbeit. Der Workflow ist die Dokumentation.',
          'Deployment via <code>git push</code>: faster, repeatable and without manual work. The workflow is the documentation.',
          'Деплой через <code>git push</code>: быстрее, воспроизводимо и без ручной работы. Workflow и есть документация.',
          'Деплой через <code>git push</code>: швидше, відтворювано й без ручної роботи. Workflow і є документацією.'
        ),
      },
    ],
  },

  // ───────────────────────────────────────────────────────── KI content
  {
    slug: 'ki-content-human-in-the-loop',
    date: '2026-10-18',
    tags: ['OpenAI API', 'LLM', 'Human-in-the-Loop', 'Prompt Engineering', 'Content Pipeline', 'Next.js'],
    related: ['ci-cd-nextjs-vps', 'zero-trust-homelab'],
    title: t(
      'KI-Content mit Human-in-the-Loop: 200+ Ratgeber-Artikel mit LLM-Entwürfen',
      'AI content with human-in-the-loop: 200+ guide articles from LLM drafts',
      'ИИ-контент с человеком в цикле: 200+ статей из черновиков LLM',
      'ШІ-контент із людиною в циклі: 200+ статей із чернеток LLM'
    ),
    description: t(
      'Wie PflegeOasis 200+ Ratgeber-Artikel mit OpenAI-Entwürfen erstellt, die offline entstehen und vor der Veröffentlichung von einem Menschen geprüft werden – Human-in-the-Loop bei sensiblen Themen.',
      'How PflegeOasis creates 200+ guide articles from OpenAI drafts that are produced offline and reviewed by a human before publication – human-in-the-loop for sensitive topics.',
      'Как PflegeOasis создаёт 200+ статей из черновиков OpenAI, которые генерируются офлайн и проверяются человеком до публикации — human-in-the-loop для чувствительных тем.',
      'Як PflegeOasis створює 200+ статей із чернеток OpenAI, що генеруються офлайн і перевіряються людиною перед публікацією — human-in-the-loop для чутливих тем.'
    ),
    kicker: t('KI · LLM · Content-Pipeline', 'AI · LLM · Content pipeline', 'ИИ · LLM · Контент-пайплайн', 'ШІ · LLM · Контент-пайплайн'),
    h1: t(
      'KI-Content mit Human-in-the-Loop: 200+ Ratgeber-Artikel mit LLM-Entwürfen',
      'AI content with human-in-the-loop: 200+ guide articles from LLM drafts',
      'ИИ-контент с человеком в цикле: 200+ статей из черновиков LLM',
      'ШІ-контент із людиною в циклі: 200+ статей із чернеток LLM'
    ),
    lead: t(
      'Bei Pflegerecht sind KI-Fehler nicht akzeptabel. So nutze ich ein Sprachmodell als Schreibhilfe, ohne ihm die Verantwortung zu geben.',
      'With care law, AI mistakes are not acceptable. This is how I use a language model as a writing aid without handing it the responsibility.',
      'В праве об уходе ошибки ИИ недопустимы. Вот как я использую языковую модель как помощника в письме, не передавая ей ответственность.',
      'У праві про догляд помилки ШІ неприпустимі. Ось як я використовую мовну модель як помічника в письмі, не передаючи їй відповідальність.'
    ),
    body: [
      { h2: t('Die Herausforderung', 'The challenge', 'Задача', 'Завдання') },
      {
        p: t(
          'PflegeOasis soll 200+ Ratgeber-Artikel zu Pflegerecht anbieten. Von Hand ist das kaum zu schaffen, vollautomatisch generierter Content aber wäre bei diesem Thema verantwortungslos: Ein falsch genannter Anspruch oder eine falsche Frist kann für Betroffene echte Folgen haben.',
          'PflegeOasis is meant to offer 200+ guide articles on care law. By hand that is hardly doable, but fully automated content would be irresponsible on this topic: a wrongly stated entitlement or deadline can have real consequences for the people affected.',
          'PflegeOasis должен предлагать 200+ статей о праве на уход. Вручную это почти невозможно, но полностью автоматически сгенерированный контент на такую тему безответственен: неверно названное право или срок могут иметь реальные последствия для людей.',
          'PflegeOasis має пропонувати 200+ статей про право на догляд. Вручну це майже неможливо, але повністю автоматично згенерований контент на таку тему безвідповідальний: неправильно назване право чи строк можуть мати реальні наслідки для людей.'
        ),
      },
      { h2: t('Die Pipeline', 'The pipeline', 'Пайплайн', 'Пайплайн') },
      {
        ol: [
          t(
            '<strong>Entwurf offline:</strong> Die OpenAI API erzeugt Artikelentwürfe in einem getrennten Schritt – <strong>nie live</strong> für Besucher.',
            '<strong>Draft offline:</strong> the OpenAI API creates article drafts in a separate step – <strong>never live</strong> for visitors.',
            '<strong>Черновик офлайн:</strong> OpenAI API создаёт черновики статей отдельным шагом — <strong>никогда вживую</strong> для посетителей.',
            '<strong>Чернетка офлайн:</strong> OpenAI API створює чернетки статей окремим кроком — <strong>ніколи наживо</strong> для відвідувачів.'
          ),
          t(
            '<strong>Strukturierte Prompts:</strong> Jeder Entwurf bekommt Quellen und Rechtsgrundlagen mit, statt dass das Modell aus dem Gedächtnis schreibt.',
            '<strong>Structured prompts:</strong> every draft gets sources and legal bases, instead of the model writing from memory.',
            '<strong>Структурированные промпты:</strong> каждый черновик получает источники и правовые основания, вместо того чтобы модель писала по памяти.',
            '<strong>Структуровані промпти:</strong> кожна чернетка отримує джерела та правові підстави, замість того щоб модель писала з пам’яті.'
          ),
          t(
            '<strong>Menschliche Prüfung:</strong> Jeder Artikel wird vor der Veröffentlichung von einem Menschen geprüft und korrigiert.',
            '<strong>Human review:</strong> every article is checked and corrected by a human before publication.',
            '<strong>Проверка человеком:</strong> каждая статья проверяется и правится человеком до публикации.',
            '<strong>Перевірка людиною:</strong> кожну статтю перевіряє й виправляє людина перед публікацією.'
          ),
          t(
            '<strong>Veröffentlichung:</strong> Erst nach der Prüfung geht der Artikel online.',
            '<strong>Publication:</strong> the article goes online only after the review.',
            '<strong>Публикация:</strong> статья выходит онлайн только после проверки.',
            '<strong>Публікація:</strong> стаття виходить онлайн лише після перевірки.'
          ),
        ],
      },
      { h2: t('Was dabei hilft', 'What helps', 'Что помогает', 'Що допомагає') },
      {
        ul: [
          t(
            '<strong>Quellen in den Prompt</strong> geben, damit die Aussagen überprüfbar bleiben',
            'Put <strong>sources into the prompt</strong> so the statements stay verifiable',
            'Давать <strong>источники в промпте</strong>, чтобы утверждения оставались проверяемыми',
            'Давати <strong>джерела в промпті</strong>, щоб твердження лишалися перевірюваними'
          ),
          t(
            '<strong>Strukturierte Prompts</strong> statt freier Texteingabe, damit die Ergebnisse vergleichbar und prüfbar sind',
            '<strong>Structured prompts</strong> instead of free text input, so results are comparable and reviewable',
            '<strong>Структурированные промпты</strong> вместо свободного текста, чтобы результаты были сопоставимы и проверяемы',
            '<strong>Структуровані промпти</strong> замість вільного тексту, щоб результати були порівнянними й перевірюваними'
          ),
          t(
            '<strong>Offline statt live:</strong> Fehler fallen vor der Veröffentlichung auf, nicht danach',
            '<strong>Offline instead of live:</strong> errors are caught before publication, not after',
            '<strong>Офлайн, а не вживую:</strong> ошибки обнаруживаются до публикации, а не после',
            '<strong>Офлайн, а не наживо:</strong> помилки виявляються до публікації, а не після'
          ),
        ],
      },
      {
        callout: t(
          '<strong>Lehre:</strong> Bei sensiblen Themen beschleunigt KI die Arbeit – die Verantwortung bleibt beim Menschen.',
          '<strong>Lesson:</strong> on sensitive topics AI speeds up the work – responsibility stays with the human.',
          '<strong>Вывод:</strong> в чувствительных темах ИИ ускоряет работу, а ответственность остаётся за человеком.',
          '<strong>Висновок:</strong> у чутливих темах ШІ пришвидшує роботу, а відповідальність лишається за людиною.'
        ),
      },
    ],
  },

  // ───────────────────────────────────────────────────────── macOS
  {
    slug: 'macos-verlassen-imac-2013',
    date: '2026-10-26',
    tags: ['macOS', 'Windows', 'Linux', 'Boot Camp', 'OpenCore Legacy Patcher', 'Nachhaltigkeit', 'iMac'],
    related: ['homeserver-statt-cloud', 'zero-trust-homelab'],
    title: t(
      'Warum ich macOS verlassen habe: iMac 27" (2013) mit 32 GB RAM, jetzt Windows und Linux',
      'Why I left macOS: a 2013 27" iMac with 32 GB RAM, now running Windows and Linux',
      'Почему я ушёл с macOS: iMac 27" (2013) с 32 ГБ ОЗУ, теперь Windows и Linux',
      'Чому я пішов із macOS: iMac 27" (2013) із 32 ГБ ОЗП, тепер Windows і Linux'
    ),
    description: t(
      'Mein iMac 27" Late 2013 ist hardwareseitig voll einsatzfähig, bekommt aber kein offizielles macOS mehr. Warum ein Tahoe-Update nach OpenCore Legacy Patcher das System zerstörte und ich zu Windows (Boot Camp) und Linux gewechselt bin.',
      'My iMac 27" Late 2013 is fully capable hardware-wise but no longer gets official macOS updates. How a Tahoe update after OpenCore Legacy Patcher broke the system and why I moved to Windows (Boot Camp) and Linux.',
      'Мой iMac 27" Late 2013 по железу полностью рабочий, но больше не получает официальных обновлений macOS. Как обновление до Tahoe после OpenCore Legacy Patcher сломало систему и почему я перешёл на Windows (Boot Camp) и Linux.',
      'Мій iMac 27" Late 2013 за залізом повністю робочий, але більше не отримує офіційних оновлень macOS. Як оновлення до Tahoe після OpenCore Legacy Patcher зламало систему і чому я перейшов на Windows (Boot Camp) та Linux.'
    ),
    kicker: t('Erfahrungsbericht · Hardware · Linux', 'Field report · Hardware · Linux', 'Личный опыт · Железо · Linux', 'Особистий досвід · Залізо · Linux'),
    h1: t(
      'Warum ich macOS verlassen habe – und was mein iMac von 2013 noch kann',
      'Why I left macOS – and what my 2013 iMac can still do',
      'Почему я ушёл с macOS — и что ещё умеет мой iMac 2013 года',
      'Чому я пішов із macOS — і що ще вміє мій iMac 2013 року'
    ),
    lead: t(
      'Ein iMac mit 32 GB RAM und gutem Display ist nach zwölf Jahren kein Schrott. Warum ich trotzdem auf Windows und Linux umgestiegen bin – ein persönlicher Erfahrungsbericht, kein Benchmark.',
      'An iMac with 32 GB of RAM and a good display is not junk after twelve years. Why I switched to Windows and Linux anyway – a personal field report, not a benchmark.',
      'iMac с 32 ГБ ОЗУ и хорошим дисплеем через двенадцать лет — не хлам. Почему я всё равно перешёл на Windows и Linux — личный опыт, а не бенчмарк.',
      'iMac із 32 ГБ ОЗП і гарним дисплеєм через дванадцять років — не мотлох. Чому я все одно перейшов на Windows і Linux — особистий досвід, а не бенчмарк.'
    ),
    body: [
      { h2: t('Die Hardware: alles andere als alt', 'The hardware: anything but old', 'Железо: совсем не старое', 'Залізо: зовсім не старе') },
      {
        p: t(
          'Mein Arbeitsgerät ist ein iMac 27" (Late 2013) mit <strong>32 GB RAM</strong>, einer Grafikkarte mit 2 GB und einem Display, das ich bis heute sehr angenehm finde. Für Webentwicklung – Editor, Browser, Terminal, Docker – reicht das völlig aus. An der Hardware lag es nie.',
          'My workhorse is an iMac 27" (Late 2013) with <strong>32 GB of RAM</strong>, a graphics card with 2 GB and a display I still find very comfortable. For web development – editor, browser, terminal, Docker – that is plenty. The hardware was never the problem.',
          'Мой рабочий инструмент — iMac 27" (Late 2013) с <strong>32 ГБ ОЗУ</strong>, видеокартой на 2 ГБ и дисплеем, который мне до сих пор очень комфортен. Для веб-разработки — редактор, браузер, терминал, Docker — этого более чем достаточно. Проблема никогда не была в железе.',
          'Мій робочий інструмент — iMac 27" (Late 2013) із <strong>32 ГБ ОЗП</strong>, відеокартою на 2 ГБ і дисплеєм, який мені досі дуже зручний. Для веб-розробки — редактор, браузер, термінал, Docker — цього більш ніж досить. Проблема ніколи не була в залізі.'
        ),
      },
      {
        p: t(
          'Aufgerüstet habe ich ihn schon früher: Der Tausch der Festplatte (HDD) gegen eine SSD hat den iMac damals um ein Vielfaches schneller gemacht. Genau solche Upgrades zeigen, wie viel Leben in dieser Hardware steckt.',
          'I had already upgraded it earlier: swapping the hard drive (HDD) for an SSD made the iMac several times faster back then. Upgrades like that show how much life is left in this hardware.',
          'Апгрейд я делал ещё раньше: замена жёсткого диска (HDD) на SSD в своё время ускорила iMac в разы. Именно такие апгрейды показывают, сколько жизни ещё в этом железе.',
          'Апгрейд я робив ще раніше: заміна жорсткого диска (HDD) на SSD свого часу пришвидшила iMac у рази. Саме такі апгрейди показують, скільки життя ще в цьому залізі.'
        ),
      },
      { h2: t('Wo die offizielle Unterstützung endet', 'Where official support ends', 'Где заканчивается официальная поддержка', 'Де закінчується офіційна підтримка') },
      {
        p: t(
          'Das letzte macOS, das Apple für dieses Modell freigibt, ist Catalina (10.15.7). Danach gibt es offiziell nichts mehr. Das sind knapp neun Jahre Updates – nicht wenig, aber das Gerät ist technisch noch voll leistungsfähig. Für Entwickler hat das Folgen: Software-Hersteller stellen den Support für alte macOS-Versionen irgendwann ein, und Sicherheitsupdates fehlen.',
          'The last macOS Apple releases for this model is Catalina (10.15.7). After that there is officially nothing. That is almost nine years of updates – not little, yet the machine is still technically very capable. For developers this has consequences: software vendors eventually drop support for old macOS versions, and security updates are missing.',
          'Последняя macOS, которую Apple выпускает для этой модели, — Catalina (10.15.7). Дальше официально ничего нет. Это почти девять лет обновлений — немало, но машина технически по-прежнему мощная. Для разработчика у этого есть последствия: производители ПО рано или поздно прекращают поддержку старых версий macOS, а обновлений безопасности нет.',
          'Остання macOS, яку Apple випускає для цієї моделі, — Catalina (10.15.7). Далі офіційно нічого немає. Це майже дев’ять років оновлень — немало, але машина технічно досі потужна. Для розробника це має наслідки: виробники ПЗ рано чи пізно припиняють підтримку старих версій macOS, а оновлень безпеки немає.'
        ),
      },
      {
        h2: t('Der Versuch mit OpenCore Legacy Patcher', 'The attempt with OpenCore Legacy Patcher', 'Попытка с OpenCore Legacy Patcher', 'Спроба з OpenCore Legacy Patcher'),
      },
      {
        p: t(
          'Ich wollte das Gerät mit dem inoffiziellen Community-Tool <strong>OpenCore Legacy Patcher</strong> (OCLP) weiternutzen und habe <strong>macOS Sonoma</strong> installiert. Damit nichts mehr von selbst passiert, habe ich automatische Updates ausgeschaltet und die Update-Server per Terminal gesperrt.',
          'I wanted to keep using the machine with the unofficial community tool <strong>OpenCore Legacy Patcher</strong> (OCLP) and installed <strong>macOS Sonoma</strong>. So that nothing would happen by itself, I switched off automatic updates and blocked the update servers via Terminal.',
          'Я хотел продолжать пользоваться машиной с помощью неофициального community-инструмента <strong>OpenCore Legacy Patcher</strong> (OCLP) и поставил <strong>macOS Sonoma</strong>. Чтобы ничего не происходило само, я отключил автообновления и заблокировал серверы обновлений через Терминал.',
          'Я хотів і далі користуватися машиною за допомогою неофіційного community-інструмента <strong>OpenCore Legacy Patcher</strong> (OCLP) і поставив <strong>macOS Sonoma</strong>. Щоб нічого не відбувалося саме, я вимкнув автооновлення і заблокував сервери оновлень через Термінал.',
        ),
      },
      {
        p: t(
          'Trotzdem wurde <strong>macOS Tahoe</strong> halb installiert – und danach war das System kaputt. Welcher Mechanismus das ausgelöst hat, weiß ich nicht genau; ich beschreibe nur, was ich erlebt habe. Für mich war das der Punkt, an dem ich beschlossen habe, dieses Ökosystem zu verlassen.',
          'Still, <strong>macOS Tahoe</strong> got half-installed – and afterwards the system was broken. I do not know exactly which mechanism triggered it; I only describe what I experienced. For me that was the moment I decided to leave this ecosystem.',
          'Тем не менее <strong>macOS Tahoe</strong> установилась наполовину — и после этого система была сломана. Какой именно механизм это запустил, я точно не знаю; я описываю только то, что пережил. Для меня это стало моментом, когда я решил уйти из этой экосистемы.',
          'Попри це <strong>macOS Tahoe</strong> встановилася наполовину — і після цього система була зламана. Який саме механізм це запустив, я точно не знаю; я описую лише те, що пережив. Для мене це став момент, коли я вирішив піти з цієї екосистеми.'
        ),
      },
      {
        callout: t(
          '<strong>Lehre:</strong> Wer ein nicht unterstütztes Gerät mit inoffiziellen Mitteln aktuell hält, trägt das Risiko selbst. Ein vollständiges Backup (Time Machine oder Clone) vor jedem Experiment ist Pflicht, nicht Kür.',
          '<strong>Lesson:</strong> anyone keeping an unsupported machine current with unofficial means carries the risk themselves. A full backup (Time Machine or a clone) before any experiment is a must, not an option.',
          '<strong>Вывод:</strong> кто поддерживает неподдерживаемую машину неофициальными средствами, сам несёт риск. Полный бэкап (Time Machine или клон) перед любым экспериментом — обязанность, а не пожелание.',
          '<strong>Висновок:</strong> хто підтримує непідтримувану машину неофіційними засобами, сам несе ризик. Повний бекап (Time Machine або клон) перед будь-яким експериментом — обов’язок, а не побажання.'
        ),
      },
      { h2: t('Meine Lösung: Windows und Linux', 'My solution: Windows and Linux', 'Моё решение: Windows и Linux', 'Моє рішення: Windows і Linux') },
      {
        ul: [
          t(
            '<strong>Windows per Boot Camp</strong> läuft auf dem iMac.',
            '<strong>Windows via Boot Camp</strong> runs on the iMac.',
            '<strong>Windows через Boot Camp</strong> работает на iMac.',
            '<strong>Windows через Boot Camp</strong> працює на iMac.'
          ),
          t(
            '<strong>Linux</strong> läuft parallel auf meinem MacBook Air; auf dem iMac ist es der nächste Schritt.',
            '<strong>Linux</strong> runs side by side on my MacBook Air; on the iMac it is the next step.',
            '<strong>Linux</strong> параллельно стоит на моём MacBook Air; на iMac это следующий шаг.',
            '<strong>Linux</strong> паралельно стоїть на моєму MacBook Air; на iMac це наступний крок.'
          ),
          t(
            'Mein subjektiver Eindruck: Alles läuft schneller. Leichte Linux-Distributionen kommen mit rund 1 GB RAM aus, von den 32 GB bleibt viel für Docker und virtuelle Maschinen. Das ist <strong>kein Benchmark</strong>, sondern mein Alltagseindruck.',
            'My subjective impression: everything runs faster. Lightweight Linux distributions get by with about 1 GB of RAM, so plenty of the 32 GB is left for Docker and virtual machines. This is <strong>not a benchmark</strong>, just my everyday impression.',
            'Моё субъективное впечатление: всё работает быстрее. Лёгким дистрибутивам Linux хватает около 1 ГБ ОЗУ, поэтому от 32 ГБ много остаётся для Docker и виртуальных машин. Это <strong>не бенчмарк</strong>, а моё повседневное впечатление.',
            'Моє суб’єктивне враження: усе працює швидше. Легким дистрибутивам Linux вистачає близько 1 ГБ ОЗП, тому з 32 ГБ багато лишається для Docker і віртуальних машин. Це <strong>не бенчмарк</strong>, а моє щоденне враження.'
          ),
        ],
      },
      { h2: t('Mein Standpunkt zur Nachhaltigkeit', 'My view on sustainability', 'Моя позиция о устойчивости', 'Моя позиція щодо сталості') },
      {
        p: t(
          'Apple spricht viel über Umwelt und Ressourcenschonung. Für mich passt das nicht zusammen mit einem voll funktionsfähigen Rechner, der keine offiziellen Updates mehr bekommt. Ich unterstelle keine Absicht – das kann ich nicht belegen –, aber die Wirkung ist dieselbe: Die Hardware hält länger als der Software-Support. Mit Windows und Linux kann ich dasselbe Gerät weiter nutzen, statt es zu ersetzen. Das ist meine persönliche Meinung.',
          'Apple talks a lot about the environment and conserving resources. For me that does not fit with a fully working computer that no longer receives official updates. I am not assuming intent – I cannot prove that – but the effect is the same: the hardware outlasts the software support. With Windows and Linux I can keep using the same machine instead of replacing it. This is my personal opinion.',
          'Apple много говорит об экологии и бережном отношении к ресурсам. Для меня это не сходится с полностью рабочим компьютером, который больше не получает официальных обновлений. Я не утверждаю умысла — доказать этого не могу, — но результат тот же: железо живёт дольше, чем программная поддержка. С Windows и Linux я могу пользоваться той же машиной, а не заменять её. Это моё личное мнение.',
          'Apple багато говорить про екологію та бережливе ставлення до ресурсів. Для мене це не сходиться з повністю робочим комп’ютером, який більше не отримує офіційних оновлень. Я не стверджую наміру — довести цього не можу, — але результат той самий: залізо живе довше за програмну підтримку. З Windows і Linux я можу користуватися тією самою машиною, а не замінювати її. Це моя особиста думка.'
        ),
      },
      { h2: t('Fazit', 'Conclusion', 'Итог', 'Підсумок') },
      {
        p: t(
          'Danke, Apple, für zwölf Jahre Hardware, die immer noch tadellos funktioniert – genau deshalb ärgert es mich, sie nicht mehr offiziell nutzen zu können. Meinen Weg gehe ich jetzt ohne macOS weiter.',
          'Thank you, Apple, for twelve years of hardware that still works flawlessly – which is exactly why it annoys me that I can no longer use it officially. I am continuing my path without macOS.',
          'Спасибо, Apple, за двенадцать лет железа, которое всё ещё работает безупречно, — именно поэтому обидно, что нельзя пользоваться им официально. Свой путь я теперь продолжаю без macOS.',
          'Дякую, Apple, за дванадцять років заліза, яке досі працює бездоганно, — саме тому прикро, що ним не можна користуватися офіційно. Свій шлях я тепер продовжую без macOS.'
        ),
      },
    ],
  },
  // ───────────────────────────────────────────────────────── AI routine-work calculator
  {
    slug: 'ki-rechner-routinearbeit',
    date: '2026-10-27',
    tags: ['KI', 'Produktivität', 'Rechner', 'Automatisierung', 'Studien', 'Destatis'],
    related: ['ki-content-human-in-the-loop', 'pflegeoasis'],
    title: t(
      'Wie viel Routinearbeit spart KI? Rechner mit Studien und Destatis-Zahlen',
      'How much routine work does AI save? A calculator built on studies and Destatis figures',
      'Сколько рутины экономит ИИ? Калькулятор на данных исследований и Destatis',
      'Скільки рутини економить ШІ? Калькулятор на даних досліджень і Destatis'
    ),
    description: t(
      'Interaktiver Rechner: Wie viele Stunden und Euro spart KI bei Routinearbeit im Team? Mit drei Szenarien aus veröffentlichten Studien (Brynjolfsson, Dell’Acqua, Humlum & Vestergaard) und Stundenkosten laut Destatis.',
      'Interactive calculator: how many hours and euros does AI save on routine work in a team? Three scenarios from published studies (Brynjolfsson, Dell’Acqua, Humlum & Vestergaard) and hourly costs per Destatis.',
      'Интерактивный калькулятор: сколько часов и евро экономит ИИ на рутине в команде? Три сценария из опубликованных исследований (Brynjolfsson, Dell’Acqua, Humlum & Vestergaard) и стоимость часа по Destatis.',
      'Інтерактивний калькулятор: скільки годин і євро економить ШІ на рутині в команді? Три сценарії з опублікованих досліджень (Brynjolfsson, Dell’Acqua, Humlum & Vestergaard) і вартість години за Destatis.'
    ),
    kicker: t('KI · Produktivität · Rechner', 'AI · Productivity · Calculator', 'ИИ · Продуктивность · Калькулятор', 'ШІ · Продуктивність · Калькулятор'),
    h1: t(
      'Wie viel Routinearbeit spart KI? Ein Rechner auf Basis von Studien',
      'How much routine work does AI save? A calculator based on studies',
      'Сколько рутины экономит ИИ? Калькулятор на основе исследований',
      'Скільки рутини економить ШІ? Калькулятор на основі досліджень'
    ),
    lead: t(
      'Die Studien zeigen sehr unterschiedliche Zahlen – von knapp 3 % bis über 40 %. Statt einer einzigen Zahl gibt der Rechner drei Szenarien aus, jeweils mit Quelle, in Stunden und Euro für Ihr Team.',
      'The studies show very different numbers – from just under 3% to over 40%. Instead of a single number, the calculator gives three scenarios, each with its source, in hours and euros for your team.',
      'Исследования показывают очень разные цифры — от неполных 3% до более 40%. Вместо одной цифры калькулятор выдаёт три сценария, каждый с источником, в часах и евро для вашей команды.',
      'Дослідження показують дуже різні цифри — від неповних 3% до понад 40%. Замість однієї цифри калькулятор видає три сценарії, кожен із джерелом, у годинах і євро для вашої команди.'
    ),
    body: [
      { h2: t('Der Rechner', 'The calculator', 'Калькулятор', 'Калькулятор') },
      {
        p: t(
          'Tragen Sie Teamgröße und Routinestunden ein, wählen Sie Ihre Branche – die Stundenkosten kommen aus der Destatis-Statistik und lassen sich überschreiben. Werkzeug- und Einführungskosten sind meine Annahmen: Bitte ersetzen Sie sie durch Ihre eigenen Werte. Die Berechnung läuft komplett im Browser, es werden keine Daten übertragen.',
          'Enter team size and routine hours and choose your sector – the hourly costs come from the Destatis statistics and can be overwritten. Tool and rollout costs are my own assumptions: please replace them with your own values. Everything is calculated in your browser, no data is sent anywhere.',
          'Укажите размер команды и часы рутины, выберите отрасль — стоимость часа берётся из статистики Destatis, её можно изменить. Затраты на инструмент и внедрение — мои допущения: замените их своими значениями. Весь расчёт идёт в браузере, данные никуда не отправляются.',
          'Вкажіть розмір команди та години рутини, оберіть галузь — вартість години береться зі статистики Destatis, її можна змінити. Витрати на інструмент і впровадження — мої припущення: замініть їх своїми значеннями. Увесь розрахунок іде в браузері, дані нікуди не надсилаються.'
        ),
      },
      { calculator: true },
      { h2: t('So lesen Sie das Ergebnis', 'How to read the result', 'Как читать результат', 'Як читати результат') },
      {
        ul: [
          t(
            '<strong>Vorsichtig (2,8 %):</strong> der gemessene Durchschnitt über alle Arbeitsstunden in Dänemark. Hier wird er auf Ihre Routinestunden angewendet – die Schätzung ist also bewusst sehr konservativ.',
            '<strong>Cautious (2.8%):</strong> the measured average over all working hours in Denmark. Here it is applied to your routine hours – so the estimate is deliberately very conservative.',
            '<strong>Осторожный (2,8%):</strong> измеренное среднее по всему рабочему времени в Дании. Здесь оно применено к вашим часам рутины, то есть оценка намеренно очень консервативная.',
            '<strong>Обережний (2,8%):</strong> виміряне середнє за всім робочим часом у Данії. Тут його застосовано до ваших годин рутини, тож оцінка свідомо дуже консервативна.'
          ),
          t(
            '<strong>Typisch (14 %):</strong> Produktivitätsgewinn im Kundenservice einer echten Firma, gemessen an über 5 000 Beschäftigten.',
            '<strong>Typical (14%):</strong> productivity gain in the customer service of a real company, measured across more than 5,000 employees.',
            '<strong>Типичный (14%):</strong> прирост продуктивности в службе поддержки реальной компании, измеренный на более чем 5 000 сотрудников.',
            '<strong>Типовий (14%):</strong> приріст продуктивності у службі підтримки реальної компанії, виміряний на понад 5 000 співробітників.'
          ),
          t(
            '<strong>Optimistisch (25 %):</strong> Geschwindigkeitsgewinn bei Aufgaben, die gut zu KI passen (Harvard/BCG-Experiment).',
            '<strong>Optimistic (25%):</strong> speed gain on tasks that suit AI well (Harvard/BCG experiment).',
            '<strong>Оптимистичный (25%):</strong> прирост скорости на задачах, которые хорошо подходят ИИ (эксперимент Harvard/BCG).',
            '<strong>Оптимістичний (25%):</strong> приріст швидкості на завданнях, які добре підходять ШІ (експеримент Harvard/BCG).'
          ),
        ],
      },
      { h2: t('Die Studien im Überblick', 'The studies at a glance', 'Исследования вкратце', 'Дослідження стисло') },
      {
        table: {
          head: [
            t('Quelle', 'Source', 'Источник', 'Джерело'),
            t('Gemessen', 'What was measured', 'Что измеряли', 'Що вимірювали'),
            t('Ergebnis', 'Result', 'Результат', 'Результат'),
          ],
          rows: [
            [
              '<a href="https://nber.org/papers/w31161" rel="noopener noreferrer">Brynjolfsson, Li, Raymond (NBER)</a>',
              t('Kundenservice, 5 179 Beschäftigte', 'Customer support, 5,179 agents', 'Поддержка клиентов, 5 179 сотрудников', 'Підтримка клієнтів, 5 179 співробітників'),
              t('+14 % gelöste Fälle pro Stunde; +34 % bei Neulingen, kaum Effekt bei Erfahrenen', '+14% issues resolved per hour; +34% for novices, minimal effect for experienced agents', '+14% решённых обращений в час; +34% у новичков, минимальный эффект у опытных', '+14% розв’язаних звернень на годину; +34% у новачків, мінімальний ефект у досвідчених'),
            ],
            [
              '<a href="https://scale.stanford.edu/publications/experimental-evidence-productivity-effects-generative-artificial-intelligence" rel="noopener noreferrer">Noy &amp; Zhang (Science 2023)</a>',
              t('Schreibaufgaben, 453 Fachkräfte', 'Writing tasks, 453 professionals', 'Письменные задачи, 453 специалиста', 'Письмові завдання, 453 фахівці'),
              t('Zeit −40 %, Qualität +18 %', 'Time −40%, quality +18%', 'Время −40%, качество +18%', 'Час −40%, якість +18%'),
            ],
            [
              '<a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=64700" rel="noopener noreferrer">Dell’Acqua et al. (Harvard/BCG)</a>',
              t('758 Wissensarbeiter, 18 Aufgaben', '758 knowledge workers, 18 tasks', '758 специалистов, 18 задач', '758 фахівців, 18 завдань'),
              t('+12,2 % Aufgaben, 25,1 % schneller; bei einer Aufgabe außerhalb der KI-Grenze 19 % weniger richtige Lösungen', '+12.2% tasks, 25.1% faster; on a task outside the AI frontier 19% fewer correct solutions', '+12,2% задач, на 25,1% быстрее; на задаче вне границы ИИ на 19% меньше верных решений', '+12,2% завдань, на 25,1% швидше; на завданні поза межею ШІ на 19% менше правильних розв’язків'),
            ],
            [
              '<a href="https://arxiv.org/abs/2302.06590" rel="noopener noreferrer">Peng et al. (GitHub Copilot)</a>',
              t('Eine Programmieraufgabe im Experiment', 'One programming task in an experiment', 'Одна задача по программированию в эксперименте', 'Одне завдання з програмування в експерименті'),
              t('55,8 % schneller (Laborwert)', '55.8% faster (lab result)', 'на 55,8% быстрее (лабораторный результат)', 'на 55,8% швидше (лабораторний результат)'),
            ],
            [
              '<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" rel="noopener noreferrer">METR (2025)</a>',
              t('16 erfahrene Entwickler in ihren eigenen großen Projekten', '16 experienced developers in their own large projects', '16 опытных разработчиков в собственных больших проектах', '16 досвідчених розробників у власних великих проєктах'),
              t('19 % langsamer mit KI – bei gefühlter Ersparnis von 20 %', '19% slower with AI – while they felt 20% faster', 'на 19% медленнее с ИИ — при ощущении экономии в 20%', 'на 19% повільніше з ШІ — за відчуття економії в 20%'),
            ],
            [
              '<a href="https://marginalrevolution.com/marginalrevolution/2025/04/large-language-models-small-labor-market-effects.html" rel="noopener noreferrer">Humlum &amp; Vestergaard (Dänemark, 2025)</a>',
              t('25 000 Beschäftigte, 11 Berufe', '25,000 workers, 11 occupations', '25 000 работников, 11 профессий', '25 000 працівників, 11 професій'),
              t('Im Schnitt 2,8 % der Arbeitszeit gespart, keine signifikanten Effekte auf Einkommen und Stunden', 'On average 2.8% of working time saved, no significant effects on earnings or hours', 'В среднем 2,8% рабочего времени, без значимого влияния на заработок и часы', 'У середньому 2,8% робочого часу, без значущого впливу на заробіток і години'),
            ],
            [
              '<a href="https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_148_624.html" rel="noopener noreferrer">Destatis (29.04.2026)</a>',
              t('Arbeitskosten je Stunde 2025', 'Labour cost per hour in 2025', 'Стоимость часа труда в 2025 году', 'Вартість години праці у 2025 році'),
              t('45,00 € im Durchschnitt (Schätzung), je nach Branche 27,40 € bis 69,70 €', '€45.00 on average (estimate), €27.40 to €69.70 depending on sector', '45,00 € в среднем (оценка), от 27,40 € до 69,70 € по отраслям', '45,00 € у середньому (оцінка), від 27,40 € до 69,70 € за галузями'),
            ],
          ],
        },
      },
      { p: t(
        'Der Blick nach vorn: Was diese Zahlen für IT-Berufe in 10–20 Jahren bedeuten könnten, steht in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Die Welt in 10–20 Jahren: drei Szenarien</a>. Ein Beispiel für KI mit menschlicher Kontrolle ist <a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop</a>.',
        'Looking ahead: what these figures could mean for IT careers in 10–20 years is in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">The world in 10–20 years: three scenarios</a>. An example of AI under human control is <a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop</a>.',
        'Взгляд вперёд: что эти цифры могут значить для IT-профессий через 10–20 лет — в заметке <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Мир через 10–20 лет: три сценария</a>. Пример ИИ под контролем человека — <a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле</a>.',
        'Погляд уперед: що ці цифри можуть означати для IT-професій через 10–20 років — у нотатці <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Світ через 10–20 років: три сценарії</a>. Приклад ШІ під контролем людини — <a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі</a>.'
      ) },
      { h2: t('Grenzen der Rechnung', 'Limits of the calculation', 'Ограничения расчёта', 'Обмеження розрахунку') },
      {
        ul: [
          t(
            '<strong>Labor ist nicht Alltag:</strong> Die hohen Werte stammen aus Experimenten mit ausgewählten Aufgaben. Im echten Betrieb liegen die Zahlen deutlich niedriger.',
            '<strong>The lab is not everyday work:</strong> the high figures come from experiments with selected tasks. In real operations the numbers are much lower.',
            '<strong>Лаборатория — не повседневность:</strong> высокие значения получены в экспериментах с подобранными задачами. В реальной работе цифры заметно ниже.',
            '<strong>Лабораторія — не повсякдення:</strong> високі значення отримано в експериментах із підібраними завданнями. У реальній роботі цифри помітно нижчі.'
          ),
          t(
            '<strong>Nicht jeder profitiert gleich:</strong> Neulinge gewinnen mehr als Erfahrene, und bei Aufgaben außerhalb der Stärken der KI sinkt die Qualität. Wer nur das Tempo misst, übersieht Prüf- und Korrekturzeit.',
            '<strong>Not everyone benefits equally:</strong> novices gain more than experienced people, and on tasks outside AI’s strengths quality drops. Whoever only measures speed overlooks review and correction time.',
            '<strong>Выгода неодинакова:</strong> новички выигрывают больше опытных, а на задачах вне сильных сторон ИИ качество падает. Кто измеряет только скорость, упускает время на проверку и правки.',
            '<strong>Вигода неоднакова:</strong> новачки виграють більше за досвідчених, а на завданнях поза сильними сторонами ШІ якість падає. Хто вимірює лише швидкість, не бачить часу на перевірку та правки.'
          ),
          t(
            '<strong>Gefühl ist kein Messwert:</strong> In der METR-Studie glaubten die Entwickler, schneller zu sein, waren es aber nicht. Messen Sie Ihre eigenen Aufgaben, bevor Sie hochrechnen.',
            '<strong>Feeling is not a measurement:</strong> in the METR study the developers believed they were faster, but were not. Measure your own tasks before extrapolating.',
            '<strong>Ощущение — не измерение:</strong> в исследовании METR разработчики считали, что стали быстрее, но это было не так. Измерьте собственные задачи, прежде чем экстраполировать.',
            '<strong>Відчуття — не вимірювання:</strong> у дослідженні METR розробники вважали, що стали швидшими, але це було не так. Виміряйте власні завдання, перш ніж екстраполювати.'
          ),
          t(
            '<strong>Die Stundenkosten sind ein Durchschnitt:</strong> Destatis schätzt die Werte für 2025 aus der Arbeitskostenerhebung 2020 hoch. Sie enthalten auch Lohnnebenkosten.',
            '<strong>The hourly costs are an average:</strong> Destatis extrapolates the 2025 values from the 2020 labour cost survey. They include non-wage labour costs.',
            '<strong>Стоимость часа — среднее значение:</strong> Destatis экстраполирует значения 2025 года по обследованию 2020 года. Они включают и незарплатные расходы работодателя.',
            '<strong>Вартість години — середнє значення:</strong> Destatis екстраполює значення 2025 року з обстеження 2020 року. Вони включають і незарплатні витрати роботодавця.'
          ),
        ],
      },
      { h2: t('Was ich selbst damit mache', 'What I do with it myself', 'Что я делаю с этим сам', 'Що я роблю з цим сам') },
      {
        p: t(
          'Bei PflegeOasis erzeugt eine KI die Entwürfe der Ratgeber-Artikel offline, ein Mensch prüft jeden Text vor der Veröffentlichung. Die KI beschleunigt die Arbeit, die Verantwortung bleibt beim Menschen – Prüf- und Korrekturzeit gehört deshalb zur Rechnung. Mehr dazu in der Notiz <a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop</a>.',
          'At PflegeOasis an AI creates the drafts of the guide articles offline, and a human reviews every text before publication. The AI speeds up the work; responsibility stays with the human – which is why review and correction time belong in the calculation. More in the note <a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop</a>.',
          'В PflegeOasis ИИ создаёт черновики статей офлайн, а человек проверяет каждый текст перед публикацией. ИИ ускоряет работу, ответственность остаётся за человеком — поэтому время на проверку и правки входит в расчёт. Подробнее в заметке <a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле</a>.',
          'У PflegeOasis ШІ створює чернетки статей офлайн, а людина перевіряє кожен текст перед публікацією. ШІ пришвидшує роботу, відповідальність лишається за людиною — тому час на перевірку та правки входить у розрахунок. Докладніше в нотатці <a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі</a>.'
        ),
      },
    ],
  },
  // ───────────────────────────────────────────────────────── World after the 4th industrial revolution
  {
    slug: 'welt-nach-der-4-industriellen-revolution',
    date: '2026-10-27',
    tags: ['KI', 'Robotik', 'Drohnen', 'DevOps', 'Arbeitsmarkt', 'EU AI Act'],
    related: ['ki-rechner-routinearbeit', 'ki-content-human-in-the-loop'],
    title: t(
      'Die Welt in 10–20 Jahren: drei Szenarien für IT-Berufe in der KI-Ära',
      'The world in 10–20 years: three scenarios for IT careers in the AI era',
      'Мир через 10–20 лет: три сценария для ИТ-профессий в эпоху ИИ',
      'Світ через 10–20 років: три сценарії для ІТ-професій в епоху ШІ'
    ),
    description: t(
      'KI, Roboter und Drohnen – wie könnte die Welt in 10–20 Jahren aussehen? Keine Prognose, sondern drei Szenarien mit Zahlen von Bitkom 2026, IFR 2026, WEF, DORA und der EU-KI-Verordnung, mit Fokus auf IT und DevOps.',
      'AI, robots and drones – what could the world look like in 10–20 years? Not a forecast but three scenarios with figures from Bitkom 2026, IFR 2026, WEF, DORA and the EU AI Act, focused on IT and DevOps.',
      'ИИ, роботы и дроны — каким может быть мир через 10–20 лет? Не прогноз, а три сценария с цифрами Bitkom 2026, IFR 2026, WEF, DORA и регламента ЕС об ИИ, с акцентом на ИТ и DevOps.',
      'ШІ, роботи й дрони — яким може бути світ через 10–20 років? Не прогноз, а три сценарії з цифрами Bitkom 2026, IFR 2026, WEF, DORA та регламенту ЄС про ШІ, з акцентом на ІТ і DevOps.'
    ),
    kicker: t('KI · Arbeitsmarkt · DevOps', 'AI · Labour market · DevOps', 'ИИ · Рынок труда · DevOps', 'ШІ · Ринок праці · DevOps'),
    h1: t(
      'Die Welt in 10–20 Jahren: drei Szenarien statt einer Prognose',
      'The world in 10–20 years: three scenarios instead of a forecast',
      'Мир через 10–20 лет: три сценария вместо прогноза',
      'Світ через 10–20 років: три сценарії замість прогнозу'
    ),
    lead: t(
      'Niemand weiß, wie die Welt nach KI, Robotern und Drohnen aussieht. Was man tun kann: gemessene Zahlen sammeln, Szenarien daraus ableiten und fragen, was in allen Szenarien gleich bleibt – aus Sicht eines Menschen, der in IT und DevOps arbeitet.',
      'Nobody knows what the world looks like after AI, robots and drones. What one can do: collect measured numbers, derive scenarios from them and ask what stays the same in all of them – from the view of someone working in IT and DevOps.',
      'Никто не знает, как выглядит мир после ИИ, роботов и дронов. Что можно сделать: собрать измеренные цифры, вывести из них сценарии и спросить, что остаётся неизменным во всех — с точки зрения человека, который работает в ИТ и DevOps.',
      'Ніхто не знає, як виглядає світ після ШІ, роботів і дронів. Що можна зробити: зібрати виміряні цифри, вивести з них сценарії й запитати, що лишається незмінним в усіх — з погляду людини, яка працює в ІТ і DevOps.'
    ),
    body: [
      { h2: t('Vorab: Szenarien, keine Prognose', 'First: scenarios, not a forecast', 'Сначала: сценарии, а не прогноз', 'Спершу: сценарії, а не прогноз') },
      {
        p: t(
          'Der Text unterscheidet zwei Dinge: Zahlen, die gemessen und veröffentlicht wurden (mit Quelle), und meine Einordnung daraus. Die Szenarien unten sind meine Lesart der Zahlen, keine Vorhersage. Wer behauptet, die Welt von 2040 genau zu kennen, verkauft etwas.',
          'The text separates two things: numbers that were measured and published (with a source) and my interpretation of them. The scenarios below are my reading of the numbers, not a prediction. Whoever claims to know the world of 2040 exactly is selling something.',
          'Текст разделяет две вещи: цифры, которые измерены и опубликованы (с источником), и моя интерпретация. Сценарии ниже — моё прочтение цифр, а не предсказание. Кто утверждает, что точно знает мир 2040 года, тот что-то продаёт.',
          'Текст розділяє дві речі: цифри, які виміряно й опубліковано (з джерелом), і мою інтерпретацію. Сценарії нижче — моє прочитання цифр, а не передбачення. Хто стверджує, що достеменно знає світ 2040 року, той щось продає.'
        ),
      },
      { h2: t('Das große Bild: drei Technologien, drei Tempi', 'The big picture: three technologies, three speeds', 'Общая картина: три технологии, три темпа', 'Загальна картина: три технології, три темпи') },
      {
        p: t(
          '<strong>KI ist Software und breitet sich am schnellsten aus:</strong> Laut dem <a href="https://blog.google/technology/developers/dora-report-2025/" rel="noopener noreferrer">DORA-Bericht 2025</a> nutzen 90 % der befragten Softwareentwickler KI (knapp 5 000 Befragte). <strong>Roboter sind Hardware und wachsen langsamer, aber stetig:</strong> Die <a href="https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally" rel="noopener noreferrer">IFR meldete am 24.09.2026</a> einen Rekordbestand von 5 Millionen Industrierobotern weltweit, über 600 000 davon wurden 2025 neu installiert (+11 %). <strong>Drohnen</strong> lasse ich ohne Zahlen: Ich habe keine belastbare Statistik gefunden, die ich hier verantworten würde. Qualitativ zeichnen sich Einsatzfelder wie Inspektion, Landwirtschaft und Logistik ab, wo vor allem Regulierung das Tempo bestimmt.',
          '<strong>AI is software and spreads fastest:</strong> according to the <a href="https://blog.google/technology/developers/dora-report-2025/" rel="noopener noreferrer">2025 DORA report</a>, 90% of surveyed software developers use AI (nearly 5,000 respondents). <strong>Robots are hardware and grow more slowly but steadily:</strong> the <a href="https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally" rel="noopener noreferrer">IFR reported on 24 September 2026</a> a record stock of 5 million industrial robots worldwide, with more than 600,000 newly installed in 2025 (+11%). <strong>Drones</strong> I leave without numbers: I found no reliable statistic I would stand behind here. Qualitatively, use cases such as inspection, agriculture and logistics are emerging, where regulation mostly sets the pace.',
          '<strong>ИИ — это софт, и он распространяется быстрее всего:</strong> по <a href="https://blog.google/technology/developers/dora-report-2025/" rel="noopener noreferrer">отчёту DORA 2025</a> ИИ используют 90% опрошенных разработчиков (почти 5 000 респондентов). <strong>Роботы — это железо, они растут медленнее, но стабильно:</strong> <a href="https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally" rel="noopener noreferrer">IFR сообщила 24.09.2026</a> о рекордном парке в 5 миллионов промышленных роботов в мире, более 600 000 из них установлены в 2025 году (+11%). <strong>Дроны</strong> оставляю без цифр: надёжной статистики, за которую я мог бы отвечать, не нашёл. Качественно просматриваются инспекции, сельское хозяйство и логистика, где темп задаёт прежде всего регулирование.',
          '<strong>ШІ — це софт, і він поширюється найшвидше:</strong> за <a href="https://blog.google/technology/developers/dora-report-2025/" rel="noopener noreferrer">звітом DORA 2025</a> ШІ використовують 90% опитаних розробників (майже 5 000 респондентів). <strong>Роботи — це залізо, вони ростуть повільніше, але стабільно:</strong> <a href="https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally" rel="noopener noreferrer">IFR повідомила 24.09.2026</a> про рекордний парк у 5 мільйонів промислових роботів у світі, понад 600 000 з них встановлено 2025 року (+11%). <strong>Дрони</strong> лишаю без цифр: надійної статистики, за яку я міг би відповідати, не знайшов. Якісно проглядаються інспекції, сільське господарство й логістика, де темп задає насамперед регулювання.'
        ),
      },
      {
        p: t(
          'Für den Arbeitsmarkt insgesamt rechnet das <a href="https://weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" rel="noopener noreferrer">Weltwirtschaftsforum (Future of Jobs 2025)</a> bis 2030 mit 170 Millionen neuen und 92 Millionen wegfallenden Stellen, netto +78 Millionen. Rund 40 % der Fähigkeiten im Job ändern sich, und 41 % der Arbeitgeber planen, Personal zu reduzieren, weil KI Aufgaben übernimmt. Das ist eine Umfrage unter Unternehmen, keine Messung.',
          'For the labour market overall, the <a href="https://weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" rel="noopener noreferrer">World Economic Forum (Future of Jobs 2025)</a> expects 170 million new and 92 million displaced jobs by 2030, a net +78 million. Nearly 40% of on-the-job skills will change, and 41% of employers plan to reduce staff because AI takes over tasks. This is a survey of companies, not a measurement.',
          'По рынку труда в целом <a href="https://weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" rel="noopener noreferrer">Всемирный экономический форум (Future of Jobs 2025)</a> ожидает к 2030 году 170 миллионов новых и 92 миллиона исчезающих рабочих мест, в сумме +78 миллионов. Около 40% рабочих навыков изменятся, а 41% работодателей планируют сокращать персонал, потому что ИИ берёт на себя задачи. Это опрос компаний, а не измерение.',
          'Щодо ринку праці загалом <a href="https://weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" rel="noopener noreferrer">Всесвітній економічний форум (Future of Jobs 2025)</a> очікує до 2030 року 170 мільйонів нових і 92 мільйони зникаючих робочих місць, у сумі +78 мільйонів. Близько 40% робочих навичок зміняться, а 41% роботодавців планують скорочувати персонал, бо ШІ бере на себе завдання. Це опитування компаній, а не вимірювання.'
        ),
      },
      { h2: t('Mein Schwerpunkt: IT und DevOps – was die Zahlen sagen', 'My focus: IT and DevOps – what the numbers say', 'Мой фокус: ИТ и DevOps — что говорят цифры', 'Мій фокус: ІТ і DevOps — що кажуть цифри') },
      {
        table: {
          head: [
            t('Quelle', 'Source', 'Источник', 'Джерело'),
            t('Zahl', 'Figure', 'Цифра', 'Цифра'),
            t('Einordnung', 'Meaning', 'Что это значит', 'Що це означає'),
          ],
          rows: [
            [
              '<a href="https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert" rel="noopener noreferrer">Bitkom (03.09.2026)</a>',
              t('79 000 fehlende IT-Fachkräfte (2023: 149 000, 2025: 109 000)', '79,000 missing IT specialists (2023: 149,000, 2025: 109,000)', 'Не хватает 79 000 ИТ-специалистов (2023: 149 000, 2025: 109 000)', 'Бракує 79 000 ІТ-фахівців (2023: 149 000, 2025: 109 000)'),
              t('Der Mangel hat sich in drei Jahren fast halbiert, ist aber nicht verschwunden.', 'The shortage has nearly halved in three years but has not disappeared.', 'Дефицит за три года почти вдвое сократился, но не исчез.', 'Дефіцит за три роки майже вдвічі скоротився, але не зник.'),
            ],
            [
              '<a href="https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert" rel="noopener noreferrer">Bitkom (03.09.2026)</a>',
              t('42 % der Unternehmen nutzen KI in der IT; nur 10 % davon haben deshalb Stellen gestrichen, 85 % keine', '42% of companies use AI in IT; only 10% of those have cut positions because of it, 85% none', '42% компаний используют ИИ в ИТ; лишь 10% из них сократили из-за этого позиции, 85% — ни одной', '42% компаній використовують ШІ в ІТ; лише 10% з них скоротили через це позиції, 85% — жодної'),
              t('Bisher wenig Stellenabbau; 32 % erwarten künftig Kürzungen, 65 % nicht. In 35 % der Fälle ersetzt KI unbesetzte Stellen.', 'So far few cuts; 32% expect cuts in future, 65% do not. In 35% of cases AI replaces vacancies that cannot be filled.', 'Пока сокращений мало; 32% ждут их в будущем, 65% — нет. В 35% случаев ИИ заменяет вакансии, которые не удаётся закрыть.', 'Поки скорочень мало; 32% очікують їх надалі, 65% — ні. У 35% випадків ШІ замінює вакансії, які не вдається закрити.'),
            ],
            [
              '<a href="https://siepr.stanford.edu/publications/working-paper/canaries-coal-mine-six-facts-about-recent-employment-effects-artificial" rel="noopener noreferrer">Brynjolfsson et al. (Stanford, „Canaries“)</a>',
              t('−13 % relative Beschäftigung bei 22–25-Jährigen in den KI-exponiertesten Berufen', '−13% relative employment for 22–25-year-olds in the most AI-exposed occupations', '−13% относительной занятости у 22–25-летних в наиболее подверженных ИИ профессиях', '−13% відносної зайнятості у 22–25-річних у найбільш схильних до ШІ професіях'),
              t('Erfahrene Beschäftigte derselben Berufe blieben stabil. Der Einstieg wird schwerer, nicht die ganze Branche.', 'Experienced workers in the same occupations stayed stable. Getting started gets harder, not the whole industry.', 'У опытных работников тех же профессий занятость стабильна. Сложнее становится вход в профессию, а не отрасли целиком.', 'У досвідчених працівників тих самих професій зайнятість стабільна. Складнішим стає вхід у професію, а не галузі загалом.'),
            ],
            [
              '<a href="https://www.nber.org/papers/w32487" rel="noopener noreferrer">Acemoglu (NBER w32487)</a>',
              t('höchstens 0,66 % (angepasst unter 0,53 %) mehr Gesamtproduktivität in 10 Jahren', 'at most 0.66% (adjusted: under 0.53%) more total factor productivity over 10 years', 'не более 0,66% (скорректированно менее 0,53%) прироста совокупной производительности за 10 лет', 'щонайбільше 0,66% (скориговано менш як 0,53%) приросту сукупної продуктивності за 10 років'),
              t('Die vorsichtige Gegenstimme: Der gesamtwirtschaftliche Effekt könnte klein ausfallen.', 'The cautious counter-voice: the economy-wide effect could be small.', 'Осторожный контраргумент: общий эффект для экономики может оказаться небольшим.', 'Обережний контраргумент: загальний ефект для економіки може виявитися невеликим.'),
            ],
            [
              '<a href="https://blog.google/technology/developers/dora-report-2025/" rel="noopener noreferrer">DORA 2025</a>',
              t('KI-Nutzung 90 %, verknüpft mit höherem Durchsatz bei der Auslieferung', 'AI use 90%, linked to higher delivery throughput', 'Использование ИИ 90%, связано с более высокой пропускной способностью поставки', 'Використання ШІ 90%, пов’язане з вищою пропускною здатністю постачання'),
              t('KI wirkt laut Bericht als „Spiegel und Verstärker“: Gut organisierte Teams profitieren, zersplitterte Teams sehen ihre Schwächen deutlicher.', 'According to the report AI acts as a “mirror and a multiplier”: cohesive teams gain, fragmented teams see their weaknesses exposed.', 'По отчёту ИИ работает как «зеркало и мультипликатор»: слаженные команды выигрывают, разрозненные яснее видят свои слабости.', 'За звітом ШІ працює як «дзеркало й мультиплікатор»: злагоджені команди виграють, розрізнені виразніше бачать свої слабкості.'),
            ],
          ],
        },
      },
      { h2: t('Drei Szenarien für IT-Berufe', 'Three scenarios for IT careers', 'Три сценария для ИТ-профессий', 'Три сценарії для ІТ-професій') },
      {
        ul: [
          t(
            '<strong>Langsam:</strong> Der Effekt bleibt klein, wie Acemoglu es für möglich hält. KI ist ein weiteres Werkzeug neben Editor und Terminal. Der Fachkräftemangel bleibt, klassische Fähigkeiten (Linux, Netzwerke, Automatisierung) behalten ihren Wert.',
            '<strong>Slow:</strong> the effect stays small, as Acemoglu considers possible. AI is one more tool next to editor and terminal. The shortage of specialists remains, classic skills (Linux, networking, automation) keep their value.',
            '<strong>Медленный:</strong> эффект остаётся небольшим, как допускает Acemoglu. ИИ — ещё один инструмент рядом с редактором и терминалом. Дефицит специалистов сохраняется, классические навыки (Linux, сети, автоматизация) не теряют ценности.',
            '<strong>Повільний:</strong> ефект лишається невеликим, як допускає Acemoglu. ШІ — ще один інструмент поряд із редактором і терміналом. Дефіцит фахівців зберігається, класичні навички (Linux, мережі, автоматизація) не втрачають цінності.'
          ),
          t(
            '<strong>Mittel (der Stand heute, fortgeschrieben):</strong> KI ist Standard in fast jedem Team. Teams brauchen weniger Hände für dieselbe Arbeit, der Einstieg wird härter (die „Canaries“-Zahl), der Mangel schrumpft weiter. Arbeit verlagert sich vom Schreiben zum Prüfen, Betreiben und Absichern.',
            '<strong>Medium (today’s situation, extended):</strong> AI is standard in almost every team. Teams need fewer hands for the same work, entry gets harder (the “Canaries” number), the shortage keeps shrinking. Work shifts from writing to reviewing, operating and securing.',
            '<strong>Средний (сегодняшняя ситуация, продолженная):</strong> ИИ — стандарт почти в каждой команде. Для той же работы нужно меньше рук, вход в профессию усложняется (цифра «Canaries»), дефицит продолжает сокращаться. Работа смещается от написания к проверке, эксплуатации и защите.',
            '<strong>Середній (сьогоднішня ситуація, продовжена):</strong> ШІ — стандарт майже в кожній команді. Для тієї самої роботи потрібно менше рук, вхід у професію ускладнюється (цифра «Canaries»), дефіцит і далі скорочується. Робота зміщується від написання до перевірки, експлуатації та захисту.'
          ),
          t(
            '<strong>Schnell:</strong> KI übernimmt den größten Teil der Routine in Entwicklung und Betrieb, und die Arbeitgeber setzen um, was sie in der WEF-Umfrage planen. Dann sind kleine Teams mit viel Verantwortung die Regel, und Fachwissen über Plattformen, Sicherheit und Regulierung zählt mehr als Tipptempo.',
            '<strong>Fast:</strong> AI takes over most routine in development and operations, and employers do what they say they plan in the WEF survey. Small teams with a lot of responsibility become the rule, and expertise in platforms, security and regulation counts for more than typing speed.',
            '<strong>Быстрый:</strong> ИИ берёт на себя большую часть рутины в разработке и эксплуатации, а работодатели делают то, что планируют в опросе WEF. Тогда нормой становятся небольшие команды с большой ответственностью, а знания о платформах, безопасности и регулировании ценятся выше скорости набора.',
            '<strong>Швидкий:</strong> ШІ бере на себе більшу частину рутини в розробці й експлуатації, а роботодавці роблять те, що планують в опитуванні WEF. Тоді нормою стають невеликі команди з великою відповідальністю, а знання про платформи, безпеку й регулювання цінуються вище за швидкість набору.'
          ),
        ],
      },
      { h2: t('Was in allen Szenarien gleich bleibt', 'What stays the same in all scenarios', 'Что остаётся неизменным во всех сценариях', 'Що лишається незмінним в усіх сценаріях') },
      {
        ul: [
          t(
            '<strong>Jemand betreibt das System.</strong> Auslieferung, Monitoring, Backups, Wiederherstellung: Wenn etwas ausfällt, braucht es einen Menschen, der den Zusammenhang versteht.',
            '<strong>Someone runs the system.</strong> Delivery, monitoring, backups, recovery: when something fails, a human who understands the context is needed.',
            '<strong>Кто-то эксплуатирует систему.</strong> Поставка, мониторинг, бэкапы, восстановление: когда что-то падает, нужен человек, который понимает контекст.',
            '<strong>Хтось експлуатує систему.</strong> Постачання, моніторинг, бекапи, відновлення: коли щось падає, потрібна людина, яка розуміє контекст.'
          ),
          t(
            '<strong>Jemand haftet.</strong> Die EU-KI-Verordnung verlangt Dokumentation, Aufsicht und Transparenz; das lässt sich nicht an ein Modell delegieren.',
            '<strong>Someone is accountable.</strong> The EU AI Act demands documentation, oversight and transparency; that cannot be delegated to a model.',
            '<strong>Кто-то отвечает.</strong> Регламент ЕС об ИИ требует документации, надзора и прозрачности; это нельзя делегировать модели.',
            '<strong>Хтось відповідає.</strong> Регламент ЄС про ШІ вимагає документації, нагляду й прозорості; це не можна делегувати моделі.'
          ),
          t(
            '<strong>Gute Grundlagen zahlen sich aus.</strong> Wenn KI ein Verstärker ist (DORA), dann verstärkt sie saubere Pipelines, Tests und Prozesse ebenso wie das Chaos.',
            '<strong>Good foundations pay off.</strong> If AI is an amplifier (DORA), it amplifies clean pipelines, tests and processes just as it amplifies chaos.',
            '<strong>Хорошие основы окупаются.</strong> Если ИИ — усилитель (DORA), он усиливает чистые пайплайны, тесты и процессы так же, как и хаос.',
            '<strong>Добрі основи окупаються.</strong> Якщо ШІ — підсилювач (DORA), він підсилює чисті пайплайни, тести й процеси так само, як і хаос.'
          ),
        ],
      },
      { h2: t('Was ich selbst daraus mache', 'What I do with it myself', 'Что я делаю с этим сам', 'Що я роблю з цим сам') },
      {
        p: t(
          'Ich nutze KI täglich als Werkzeug und prüfe jedes Ergebnis selbst, wie bei <a href="{{path:ki-content-human-in-the-loop}}">PflegeOasis</a>. Meine Praxis setze ich bewusst auf die Teile, die in allen Szenarien bleiben: einen eigenen Server mit <a href="{{path:zero-trust-homelab}}">Zero-Trust-Zugriff</a>, <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-Pipelines</a>, Docker und Linux. Ob das Szenario langsam, mittel oder schnell eintritt, weiß ich nicht – ich kann nur sicherstellen, dass meine Fähigkeiten in jedem davon gebraucht werden.',
          'I use AI daily as a tool and check every result myself, as with <a href="{{path:ki-content-human-in-the-loop}}">PflegeOasis</a>. I deliberately build my practice on the parts that remain in all scenarios: my own server with <a href="{{path:zero-trust-homelab}}">zero-trust access</a>, <a href="{{path:ci-cd-nextjs-vps}}">CI/CD pipelines</a>, Docker and Linux. Whether the scenario turns out slow, medium or fast I do not know – I can only make sure my skills are needed in each of them.',
          'Я ежедневно использую ИИ как инструмент и сам проверяю каждый результат, как в <a href="{{path:ki-content-human-in-the-loop}}">PflegeOasis</a>. Свою практику я намеренно строю на том, что остаётся во всех сценариях: собственный сервер с <a href="{{path:zero-trust-homelab}}">доступом по принципу Zero Trust</a>, <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-пайплайны</a>, Docker и Linux. Каким окажется сценарий — медленным, средним или быстрым, — я не знаю; могу лишь добиться, чтобы мои навыки были нужны в каждом из них.',
          'Я щодня використовую ШІ як інструмент і сам перевіряю кожен результат, як у <a href="{{path:ki-content-human-in-the-loop}}">PflegeOasis</a>. Свою практику я свідомо будую на тому, що лишається в усіх сценаріях: власний сервер із <a href="{{path:zero-trust-homelab}}">доступом за принципом Zero Trust</a>, <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-пайплайни</a>, Docker і Linux. Яким виявиться сценарій — повільним, середнім чи швидким, — я не знаю; можу лише подбати, щоб мої навички були потрібні в кожному з них.'
        ),
      },
      { h2: t('Deutschland und EU', 'Germany and the EU', 'Германия и ЕС', 'Німеччина та ЄС') },
      {
        p: t(
          'Regulierung gibt hier das Tempo vor. Die „Digital Omnibus“-Änderung der <a href="https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/" rel="noopener noreferrer">EU-KI-Verordnung</a> wurde am 29.06.2026 vom Rat angenommen und ist seit Juli 2026 in Kraft. Die Pflichten für Hochrisiko-Systeme nach Anhang III gelten nun ab dem 02.12.2027, nach Anhang I ab dem 02.08.2028. Transparenzpflichten für generative KI (Artikel 50) bleiben bestehen; für bereits am Markt befindliche Systeme gilt die Kennzeichnungsfrist ab dem 02.12.2026. Für Betreiber von KI-Anwendungen heißt das: Dokumentation und Aufsicht werden Teil des Alltags.',
          'Regulation sets the pace here. The “Digital Omnibus” amendment of the <a href="https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/" rel="noopener noreferrer">EU AI Act</a> was adopted by the Council on 29 June 2026 and has been in force since July 2026. Obligations for high-risk systems under Annex III now apply from 2 December 2027, under Annex I from 2 August 2028. Transparency duties for generative AI (Article 50) remain; for systems already on the market the marking deadline is 2 December 2026. For operators of AI applications this means documentation and oversight become part of everyday work.',
          'Здесь темп задаёт регулирование. Поправка «Digital Omnibus» к <a href="https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/" rel="noopener noreferrer">регламенту ЕС об ИИ</a> принята Советом 29.06.2026 и действует с июля 2026 года. Требования к системам высокого риска по приложению III теперь применяются с 02.12.2027, по приложению I — с 02.08.2028. Обязанности по прозрачности для генеративного ИИ (статья 50) сохраняются; для систем, уже находящихся на рынке, срок маркировки — с 02.12.2026. Для тех, кто эксплуатирует ИИ-приложения, это значит, что документация и надзор становятся частью повседневной работы.',
          'Тут темп задає регулювання. Поправка «Digital Omnibus» до <a href="https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/" rel="noopener noreferrer">регламенту ЄС про ШІ</a> ухвалена Радою 29.06.2026 і діє з липня 2026 року. Вимоги до систем високого ризику за додатком III тепер застосовуються з 02.12.2027, за додатком I — з 02.08.2028. Обов’язки щодо прозорості для генеративного ШІ (стаття 50) зберігаються; для систем, що вже на ринку, строк маркування — з 02.12.2026. Для тих, хто експлуатує ШІ-застосунки, це означає, що документація й нагляд стають частиною щоденної роботи.'
        ),
      },
      {
        p: t(
          'Bei den Robotern liegt Deutschland laut IFR mit unter 25 000 neu installierten Einheiten auf Platz fünf weltweit und stellt etwa 41 % der Installationen in der EU. Der Bitkom-Wert zeigt zugleich: Deutsche Unternehmen setzen KI in der IT bereits breit ein (42 %), bauen dabei aber bisher kaum Stellen ab.',
          'On robots, Germany ranks fifth worldwide according to the IFR, with under 25,000 newly installed units, and accounts for about 41% of installations in the EU. The Bitkom figure shows at the same time: German companies already use AI widely in IT (42%) but have so far hardly cut positions.',
          'По роботам Германия, по данным IFR, занимает пятое место в мире: менее 25 000 новых установок и около 41% установок в ЕС. Цифра Bitkom показывает и другое: немецкие компании уже широко применяют ИИ в ИТ (42%), но пока почти не сокращают позиции.',
          'За роботами Німеччина, за даними IFR, посідає п’яте місце у світі: менш як 25 000 нових установок і близько 41% установок у ЄС. Цифра Bitkom показує й інше: німецькі компанії вже широко застосовують ШІ в ІТ (42%), але поки майже не скорочують позиції.'
        ),
      },
      { p: t(
        'Wie viel Routinearbeit KI heute tatsächlich spart, können Sie im <a href="{{path:ki-rechner-routinearbeit}}">KI-Rechner für Routinearbeit</a> mit den Zahlen aus Studien nachrechnen. Wie ich selbst einen Teil meiner Arbeitsumgebung unabhängig halte, steht im <a href="{{path:homeserver-statt-cloud}}">Home-Server-Beitrag</a>, und im <a href="{{path:meistermeld}}">MeisterMeld-Case</a> sieht man, wie ich KI in einem echten Produkt einsetze.',
        'How much routine work AI really saves today can be checked in the <a href="{{path:ki-rechner-routinearbeit}}">AI routine-work calculator</a>, using figures from studies. How I keep part of my own working environment independent is in the <a href="{{path:homeserver-statt-cloud}}">home-server article</a>, and the <a href="{{path:meistermeld}}">MeisterMeld case</a> shows how I use AI in a real product.',
        'Сколько рутины ИИ реально экономит сегодня, можно посчитать в <a href="{{path:ki-rechner-routinearbeit}}">калькуляторе ИИ и рутинной работы</a> на цифрах из исследований. Как я сохраняю независимость части рабочей среды — в <a href="{{path:homeserver-statt-cloud}}">статье про домашний сервер</a>, а в <a href="{{path:meistermeld}}">кейсе MeisterMeld</a> видно, как я применяю ИИ в реальном продукте.',
        'Скільки рутини ШІ реально заощаджує сьогодні, можна порахувати в <a href="{{path:ki-rechner-routinearbeit}}">калькуляторі ШІ та рутинної роботи</a> на цифрах із досліджень. Як я зберігаю незалежність частини робочого середовища — у <a href="{{path:homeserver-statt-cloud}}">статті про домашній сервер</a>, а в <a href="{{path:meistermeld}}">кейсі MeisterMeld</a> видно, як я застосовую ШІ в реальному продукті.'
      ) },
      { h2: t('Grenzen dieses Textes', 'Limits of this text', 'Ограничения этого текста', 'Обмеження цього тексту') },
      {
        ul: [
          t(
            '<strong>Szenarien sind keine Prognosen.</strong> Sie zeigen, wofür man sich rüsten kann, nicht was eintritt.',
            '<strong>Scenarios are not forecasts.</strong> They show what one can prepare for, not what will happen.',
            '<strong>Сценарии — не прогнозы.</strong> Они показывают, к чему можно готовиться, а не что произойдёт.',
            '<strong>Сценарії — не прогнози.</strong> Вони показують, до чого можна готуватися, а не що станеться.'
          ),
          t(
            '<strong>Umfragen sind keine Messung.</strong> Bitkom, WEF und DORA beruhen auf Befragungen; die „Canaries“-Zahl stammt aus US-Daten und beweist keine Ursache.',
            '<strong>Surveys are not measurements.</strong> Bitkom, WEF and DORA rest on questionnaires; the “Canaries” figure comes from US data and does not prove causation.',
            '<strong>Опросы — не измерения.</strong> Bitkom, WEF и DORA опираются на анкеты; цифра «Canaries» взята из данных США и не доказывает причинность.',
            '<strong>Опитування — не вимірювання.</strong> Bitkom, WEF і DORA спираються на анкети; цифра «Canaries» взята з даних США й не доводить причинності.'
          ),
          t(
            '<strong>Stand: Oktober 2026.</strong> Gesetze und Zahlen ändern sich; die Angaben zur KI-Verordnung stammen aus einer Sekundärquelle, vor Entscheidungen bitte das Amtsblatt prüfen. WEF und DORA stammen aus 2025, die übrigen Zahlen aus 2026. Dies ist keine Rechts- oder Karriereberatung.',
            '<strong>As of October 2026.</strong> Laws and figures change; the AI Act details come from a secondary source, so please check the Official Journal before decisions. WEF and DORA are from 2025, the other figures from 2026. This is not legal or career advice.',
            '<strong>По состоянию на октябрь 2026.</strong> Законы и цифры меняются; данные о регламенте ИИ взяты из вторичного источника, перед решениями проверьте Official Journal. WEF и DORA — 2025 года, остальные цифры — 2026 года. Это не юридическая и не карьерная консультация.',
            '<strong>Станом на жовтень 2026.</strong> Закони й цифри змінюються; дані про регламент ШІ взято з вторинного джерела, перед рішеннями перевірте Official Journal. WEF і DORA — 2025 року, решта цифр — 2026 року. Це не юридична й не кар’єрна консультація.'
          ),
        ],
      },
    ],
  },
];

NOTES.push(...NOTES_2026);
