// Content for generated pages: case studies and engineering notes, in 4 languages (DE / EN / RU / UA).
// Rendered by scripts/build-pages.mjs  ->  node scripts/build-pages.mjs
// Strings are { de, en, ru, ua }; plain strings are language-neutral.
// Body blocks: h2, p, ul, ol, code, table, callout. `{{path:<slug>}}` in a string -> localized URL of that page.
// Only facts about the real projects are stated; nothing is invented.

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
  // ───────────────────────────────────────────────────────── macOS -> Windows/Linux
  {
    slug: 'weg-von-macos',
    date: '2026-10-26',
    tags: ['macOS', 'Linux', 'Windows', 'Boot Camp', 'OpenCore Legacy Patcher', 'Nachhaltigkeit', 'Hardware'],
    related: ['homeserver-statt-cloud', 'ci-cd-nextjs-vps'],
    title: t(
      'Weg von macOS: Gute Hardware, Windows und Linux statt Elektroschrott',
      'Leaving macOS: good hardware, Windows and Linux instead of e-waste',
      'Прощай, macOS: хорошее железо, Windows и Linux вместо электронного мусора',
      'Прощавай, macOS: добре залізо, Windows і Linux замість електронного сміття'
    ),
    description: t(
      'Erfahrungsbericht: iMac 27" Late 2013 mit 32 GB RAM, macOS-Support endet bei Catalina, OpenCore Legacy Patcher, ein halb installiertes Tahoe-Update – und warum jetzt Windows (Boot Camp) und Linux laufen.',
      'Field report: a 27" Late 2013 iMac with 32 GB RAM, official macOS support ending at Catalina, OpenCore Legacy Patcher, a half-installed Tahoe update – and why Windows (Boot Camp) and Linux run on it now.',
      'Личный опыт: iMac 27" Late 2013 с 32 ГБ RAM, официальная поддержка macOS заканчивается на Catalina, OpenCore Legacy Patcher, наполовину установленное обновление до Tahoe — и почему теперь работают Windows (Boot Camp) и Linux.',
      'Особистий досвід: iMac 27" Late 2013 із 32 ГБ RAM, офіційна підтримка macOS закінчується на Catalina, OpenCore Legacy Patcher, наполовину встановлене оновлення до Tahoe — і чому тепер працюють Windows (Boot Camp) і Linux.'
    ),
    kicker: t('Linux · Hardware · Nachhaltigkeit', 'Linux · Hardware · Sustainability', 'Linux · Железо · Устойчивость', 'Linux · Залізо · Сталість'),
    h1: t(
      'Weg von macOS: Gute Hardware, Windows und Linux statt Elektroschrott',
      'Leaving macOS: good hardware, Windows and Linux instead of e-waste',
      'Прощай, macOS: хорошее железо, Windows и Linux вместо электронного мусора',
      'Прощавай, macOS: добре залізо, Windows і Linux замість електронного сміття'
    ),
    lead: t(
      'Mein iMac 27" von 2013 hat 32 GB RAM und ein gutes Display – er läuft einwandfrei. Nur Apple hat ihn aufgegeben. Warum ich macOS verlassen habe und was seitdem besser läuft.',
      'My 2013 27" iMac has 32 GB of RAM and a great display – it works perfectly. Only Apple gave up on it. Why I left macOS and what runs better since.',
      'Мой iMac 27" 2013 года с 32 ГБ RAM и отличным дисплеем работает безупречно. Только Apple от него отказалась. Почему я ушёл с macOS и что с тех пор работает лучше.',
      'Мій iMac 27" 2013 року з 32 ГБ RAM і чудовим дисплеєм працює бездоганно. Лише Apple від нього відмовилась. Чому я пішов із macOS і що відтоді працює краще.'
    ),
    body: [
      { h2: t('Die Hardware', 'The hardware', 'Железо', 'Залізо') },
      {
        p: t(
          'Ich arbeite auf einem iMac 27" (Late 2013) mit 32 GB RAM und einer Grafikkarte mit 2 GB. Das Display ist bis heute angenehm, die Leistung reicht für meine Arbeit als Entwickler. Es gibt keinen technischen Grund, dieses Gerät auszusortieren.',
          'I work on a 27" iMac (Late 2013) with 32 GB of RAM and a 2 GB graphics card. The display is still a pleasure, and the performance is enough for my work as a developer. There is no technical reason to retire this machine.',
          'Я работаю на iMac 27" (Late 2013) с 32 ГБ RAM и видеокартой на 2 ГБ. Дисплей до сих пор приятный, производительности хватает для моей работы разработчика. Технических причин списывать эту машину нет.',
          'Я працюю на iMac 27" (Late 2013) із 32 ГБ RAM і відеокартою на 2 ГБ. Дисплей досі приємний, продуктивності вистачає для моєї роботи розробника. Технічних причин списувати цю машину немає.'
        ),
      },
      { h2: t('Wo Apple aufhört', 'Where Apple stops', 'Где Apple останавливается', 'Де Apple зупиняється') },
      {
        p: t(
          'Offiziell ist für diesen iMac bei macOS Catalina (10.15.7) Schluss, <a href="https://discussions.apple.com/thread/255999246" rel="noopener noreferrer">siehe die Diskussion in der Apple Community</a>. Fairerweise: Das sind rund neun Jahre Updates, das ist nicht nichts. Aber danach gibt es keine Sicherheitsupdates mehr, und Softwarehersteller streichen nach und nach die Unterstützung für alte macOS-Versionen. Das Gerät selbst funktioniert weiter – es wird nur von der Software abgehängt.',
          'Officially, macOS Catalina (10.15.7) is the end of the line for this iMac, <a href="https://discussions.apple.com/thread/255999246" rel="noopener noreferrer">see the discussion in the Apple Community</a>. To be fair: that is roughly nine years of updates, which is not nothing. But after that there are no more security updates, and software vendors gradually drop support for old macOS versions. The machine itself keeps working – it is just cut off from the software.',
          'Официально для этого iMac всё заканчивается на macOS Catalina (10.15.7), <a href="https://discussions.apple.com/thread/255999246" rel="noopener noreferrer">см. обсуждение в Apple Community</a>. Справедливости ради, это около девяти лет обновлений — немало. Но дальше нет обновлений безопасности, а разработчики ПО постепенно прекращают поддержку старых версий macOS. Сама машина продолжает работать — её просто отрезают от софта.',
          'Офіційно для цього iMac усе закінчується на macOS Catalina (10.15.7), <a href="https://discussions.apple.com/thread/255999246" rel="noopener noreferrer">див. обговорення в Apple Community</a>. Чесно кажучи, це близько дев’яти років оновлень — чимало. Але далі немає оновлень безпеки, а розробники ПЗ поступово припиняють підтримку старих версій macOS. Сама машина продовжує працювати — її просто відрізають від софту.'
        ),
      },
      { h2: t('Mein Versuch: OpenCore Legacy Patcher', 'My attempt: OpenCore Legacy Patcher', 'Моя попытка: OpenCore Legacy Patcher', 'Моя спроба: OpenCore Legacy Patcher') },
      {
        p: t(
          'Mit dem inoffiziellen Werkzeug OpenCore Legacy Patcher (OCLP) habe ich macOS Sonoma auf den iMac gebracht. Das lief. Weil ich keine ungewollten Updates wollte, habe ich automatische Updates abgeschaltet und die Update-Server zusätzlich per Terminal blockiert.',
          'With the unofficial tool OpenCore Legacy Patcher (OCLP) I got macOS Sonoma running on the iMac. That worked. Because I did not want unwanted updates, I switched off automatic updates and additionally blocked the update servers via the terminal.',
          'С помощью неофициального инструмента OpenCore Legacy Patcher (OCLP) я установил на iMac macOS Sonoma. Это работало. Чтобы не получать нежелательных обновлений, я отключил автообновления и дополнительно заблокировал серверы обновлений через терминал.',
          'За допомогою неофіційного інструмента OpenCore Legacy Patcher (OCLP) я встановив на iMac macOS Sonoma. Це працювало. Щоб не отримувати небажаних оновлень, я вимкнув автооновлення й додатково заблокував сервери оновлень через термінал.'
        ),
      },
      {
        p: t(
          'Trotzdem wurde ein Update auf macOS Tahoe angestoßen, nur zur Hälfte installiert und hat das ganze System zerstört. Warum es trotz aller Sperren dazu kam, kann ich nicht abschließend sagen – mein Eindruck ist eine sehr aggressive Update-Politik. Das war der Moment, in dem ich entschieden habe: Ich verlasse dieses System dauerhaft.',
          'Even so, an update to macOS Tahoe was triggered, only half installed and wrecked the whole system. Why that happened despite all the blocks I cannot say for certain – my impression is a very aggressive update policy. That was the moment I decided: I am leaving this system for good.',
          'Тем не менее обновление до macOS Tahoe всё равно запустилось, установилось наполовину и разрушило всю систему. Почему так случилось несмотря на все блокировки, я точно сказать не могу — у меня сложилось впечатление очень агрессивной политики обновлений. В этот момент я решил: ухожу из этой системы навсегда.',
          'Попри це оновлення до macOS Tahoe все одно запустилося, встановилося наполовину й зруйнувало всю систему. Чому так сталося попри всі блокування, точно сказати не можу — у мене склалося враження дуже агресивної політики оновлень. У цей момент я вирішив: залишаю цю систему назавжди.'
        ),
      },
      { h2: t('Was ich jetzt nutze', 'What I use now', 'Что я использую сейчас', 'Що я використовую зараз') },
      {
        ul: [
          t(
            '<strong>Windows über Boot Camp</strong> auf dem iMac',
            '<strong>Windows via Boot Camp</strong> on the iMac',
            '<strong>Windows через Boot Camp</strong> на iMac',
            '<strong>Windows через Boot Camp</strong> на iMac'
          ),
          t(
            '<strong>Linux parallel installiert:</strong> auf meinem MacBook Air läuft es bereits neben macOS, auf dem iMac kommt es als Nächstes dazu',
            '<strong>Linux installed alongside:</strong> it already runs next to macOS on my MacBook Air, and the iMac is next',
            '<strong>Linux параллельно:</strong> на MacBook Air он уже работает рядом с macOS, следующим на очереди iMac',
            '<strong>Linux паралельно:</strong> на MacBook Air він уже працює поруч із macOS, наступним буде iMac'
          ),
        ],
      },
      {
        p: t(
          'Mein Eindruck, ganz ohne Benchmarks: Alles läuft schneller und flüssiger. Ein schlankes Linux-Desktop-System kommt mit rund einem Gigabyte RAM aus, der Rest des Arbeitsspeichers steht für Docker, Editor und Browser zur Verfügung. Für meine Entwicklungsarbeit (Python, Node, Docker, SSH, Git) fehlt mir nichts.',
          'My impression, without any benchmarks: everything runs faster and smoother. A lean Linux desktop gets by with about a gigabyte of RAM, so the rest of the memory is available for Docker, editor and browser. For my development work (Python, Node, Docker, SSH, Git) I miss nothing.',
          'Моё впечатление, без всяких бенчмарков: всё работает быстрее и плавнее. Лёгкому Linux-десктопу достаточно около гигабайта RAM, остальная память доступна для Docker, редактора и браузера. Для моей разработки (Python, Node, Docker, SSH, Git) мне ничего не хватает.',
          'Моє враження, без жодних бенчмарків: усе працює швидше й плавніше. Легкому Linux-десктопу вистачає близько гігабайта RAM, решта пам’яті доступна для Docker, редактора й браузера. Для моєї розробки (Python, Node, Docker, SSH, Git) мені нічого не бракує.'
        ),
      },
      {
        callout: t(
          '<strong>Meine Meinung:</strong> Apple wirbt mit Umweltschutz. Ob aus Absicht oder nicht – ein voll funktionsfähiges Gerät mit 32 GB RAM nur wegen fehlender Software-Updates auszusortieren, erzeugt Elektroschrott. Mit Windows und Linux lebt dieselbe Hardware weiter.',
          '<strong>My opinion:</strong> Apple advertises environmental protection. Whether by intent or not, retiring a fully working machine with 32 GB of RAM only because software updates stop creates e-waste. With Windows and Linux the same hardware lives on.',
          '<strong>Моё мнение:</strong> Apple рекламирует заботу об окружающей среде. Намеренно или нет, списывать полностью рабочую машину с 32 ГБ RAM только из-за прекращения обновлений ПО — значит создавать электронный мусор. С Windows и Linux то же железо продолжает жить.',
          '<strong>Моя думка:</strong> Apple рекламує турботу про довкілля. Навмисно чи ні, списувати повністю робочу машину з 32 ГБ RAM лише через припинення оновлень ПЗ — це створювати електронне сміття. З Windows і Linux те саме залізо продовжує жити.'
        ),
      },
      { h2: t('Tipps für alle mit ähnlichem Gerät', 'Tips for anyone with a similar machine', 'Советы тем, у кого похожая машина', 'Поради тим, у кого схожа машина') },
      {
        ul: [
          t(
            '<strong>Vollständiges Backup vor jedem Experiment</strong> (Time Machine oder ein Klon der Platte). Ein inoffizieller Patcher kommt ohne Garantie.',
            '<strong>A full backup before any experiment</strong> (Time Machine or a clone of the disk). An unofficial patcher comes with no guarantee.',
            '<strong>Полный бэкап перед любым экспериментом</strong> (Time Machine или клон диска). У неофициального патчера нет гарантий.',
            '<strong>Повний бекап перед будь-яким експериментом</strong> (Time Machine або клон диска). У неофіційного патчера немає гарантій.'
          ),
          t(
            '<strong>Windows per Boot Camp und Linux zuerst auf einem Testgerät oder einer eigenen Partition</strong> ausprobieren, bevor man macOS ersetzt.',
            '<strong>Try Windows via Boot Camp and Linux first on a test machine or a separate partition</strong> before replacing macOS.',
            '<strong>Сначала попробуйте Windows через Boot Camp и Linux на тестовой машине или отдельном разделе</strong>, прежде чем заменять macOS.',
            '<strong>Спершу спробуйте Windows через Boot Camp і Linux на тестовій машині або окремому розділі</strong>, перш ніж замінювати macOS.'
          ),
          t(
            '<strong>Eigene Daten nicht in der Cloud eines einzelnen Anbieters lassen</strong> – siehe <a href="{{path:homeserver-statt-cloud}}">Raus aus der Cloud</a>.',
            '<strong>Do not leave your data in a single vendor’s cloud</strong> – see <a href="{{path:homeserver-statt-cloud}}">Leaving the cloud</a>.',
            '<strong>Не оставляйте данные в облаке одного поставщика</strong> — см. <a href="{{path:homeserver-statt-cloud}}">Уход из облака</a>.',
            '<strong>Не залишайте дані в хмарі одного постачальника</strong> — див. <a href="{{path:homeserver-statt-cloud}}">Вихід із хмари</a>.'
          ),
        ],
      },
      {
        p: t(
          'Danke, Apple, für viele gute Jahre mit diesem Gerät. Aber ab hier gehen wir getrennte Wege.',
          'Thank you, Apple, for many good years with this machine. But from here on our paths part.',
          'Спасибо, Apple, за много хороших лет с этой машиной. Но дальше нам не по пути.',
          'Дякую, Apple, за багато добрих років із цією машиною. Але далі нам не по дорозі.'
        ),
      },
    ],
  },
];
