// i18n.js - Полные переводы на 4 языка

const translations = {
  de: {
    nav_about: 'Über mich', nav_skills: 'Skills', nav_projects: 'Projekte', nav_contact: 'Kontakt',
    hero_location: 'zabolotny.de · Dresden, Deutschland', hero_badge: 'AI-Produkte live gebaut', hero_projects: 'Projekte ansehen →', hero_cv: 'CV herunterladen ↓', hero_available: 'Verfügbar für Projekte', hero_scroll: 'Scrollen',
    hero_stat_projects: 'Live-Projekte', hero_stat_ai: 'AI-Produkte', hero_stat_de: 'Deutsch',
    about_h2_start: 'Ich baue', about_h2_grad: 'KI-Produkte', about_h2_end: 'die echte Probleme lösen.',
    about_p1: 'Als AI Fullstack Developer spezialisiere ich mich auf intelligente Webanwendungen — von der Idee bis zum Deployment.',
    about_p2: 'Mit Erfahrung als CTO und fundierten Kenntnissen in modernen AI-Technologien bringe ich Lösungen, die wirklich funktionieren.',
    about_p3: 'Basiert in Dresden. Offen für Festanstellung und Freelance-Projekte.',
    stat_projects: 'Projekte', stat_exp: 'Jahre Erfahrung', stat_german: 'Deutsch 2025', stat_lang: 'Sprachen',
    skill_frontend: 'Frontend', skill_backend: 'Backend', skill_db: 'Datenbanken', skill_ai: 'AI & Integrationen', skill_cloud: 'Cloud & DevOps',
    proof_title: 'Engineering Proof',
    proof_1_kicker: 'AI Pipelines', proof_1_title: 'Von Prompt zu Produkt', proof_1_desc: 'Vision/OCR, strukturierte Outputs, RAG-Ansätze und mehrsprachige Generierung in echten Apps statt Demo-Spielerei.',
    proof_2_kicker: 'Backend & Daten', proof_2_title: 'APIs, Jobs und Subscriptions', proof_2_desc: 'FastAPI, PostgreSQL, Stripe, Telegram-Bots und saubere Datenmodelle für Produkte, die dauerhaft laufen.',
    proof_3_kicker: 'Deployment', proof_3_title: 'Eigene Infrastruktur', proof_3_desc: 'Mehrere Services hinter nginx, systemd-Units, SSL, Cloudflare und Monitoring auf einem eigenen VPS.',
    proof_4_kicker: 'Product Thinking', proof_4_title: 'Nicht nur Code', proof_4_desc: 'Landingpages, UX-Flows, lokale SEO, Zahlungslogik und MVP-Scope aus einer Hand.',
    timeline_title: 'Karriere', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'SolarCheck AI, MeisterDesk, DreamDeck — eigenständige Entwicklung von AI-Produkten vom Konzept bis zum Deployment auf eigenem VPS.',
    timeline_2_title: 'AI Fullstack Developer', timeline_2_desc: 'Smart-Letter, GeschenkFox, RenovAI — FastAPI + React/SvelteKit, Groq/OpenAI APIs, eigene VPS-Infrastruktur.',
    timeline_3_title: 'Java Backend Developer — Starta Institut (Tel-Ran), Berlin', timeline_3_desc: '960h Java Web Development: Spring Boot, REST APIs, PostgreSQL, DevOps Basics. Abschlussprojekt: CRM-System. DEKRA-zertifiziert.',
    timeline_4_title: 'Technischer Support — Deutschland', timeline_4_desc: 'Teleperformance Görlitz (2017–2019), Concentrix Berlin (2021–2022): Apple & Facebook Business Support. Parallel: Selbststudium React, Python, FastAPI.',
    timeline_5_title: 'Web Developer & CTO — Ukraine', timeline_5_desc: 'Eigene monetarisierte Websites auf WordPress & DLE (Kontextwerbung). CTO bei MKP Gazkomplektprylad (2011–2017): technische Leitung, Prozessoptimierung.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Entwicklung', status_live: 'MVP live', status_done: 'Abgeschlossen', status_study: 'Abschlussarbeit',
    proj_meisterdesk_desc: 'Feldservice-Management für Handwerker: Kunden-, Auftrags- & Mitarbeiterverwaltung, PWA, KI-Berichte, Sprach-/Foto-Uploads.',
    proj_meisterdesk_role: 'Alleinige Entwicklung: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-Integration',
    proj_meisterdesk_proof_1: 'PWA für mobile Teams', proj_meisterdesk_proof_2: 'Drizzle ORM Datenmodell', proj_meisterdesk_proof_3: 'AI-Berichte aus Fotos und Sprache',
    proj_remont_desc: 'KI analysiert Raumfotos oder Grundrisse und erstellt automatisch eine detaillierte Kostenkalkulation mit Arbeiten, Materialien, Preisen und Designvorschlägen.',
    proj_remont_role: 'Alleinige Entwicklung: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-Deployment',
    proj_remont_proof_1: 'Vision-Analyse von Raumfotos', proj_remont_proof_2: 'Strukturierte Kostenschätzung', proj_remont_proof_3: 'FastAPI Backend auf VPS',
    proj_dreamdeck_desc: 'KI-Traumtagebuch als Telegram-Bot: Traumanalyse, Emotionserkennung, wöchentliche Insights und Mustererkennung.',
    proj_dreamdeck_role: 'Alleinige Entwicklung: AI-Integration, Backend, Datenbank, UX',
    proj_dreamdeck_proof_1: 'Telegram Bot mit Freemium-Flow', proj_dreamdeck_proof_2: 'PostgreSQL Subscription Tracking', proj_dreamdeck_proof_3: 'Groq API für schnelle Antworten',
    proj_smartletter_desc: 'KI-Plattform: professionelle Briefe in 17 Sprachen, Spracherkennung, PDF/DOCX/JPEG-Verarbeitung.',
    proj_smartletter_role: 'Alleinige Entwicklung: Architektur, Frontend, Backend, KI-Integration',
    proj_smartletter_proof_1: 'PDF/DOCX/JPEG Verarbeitung', proj_smartletter_proof_2: '17 Sprachen im Produkt', proj_smartletter_proof_3: 'FastAPI + React MVP live',
    proj_geschenkfox_desc: 'KI-Geschenkfinder mit interaktivem Quiz für den deutschen Markt. SEO-optimierte Architektur.',
    proj_geschenkfox_role: 'Alleinige Umsetzung: Design (Figma), Frontend, SEO, UX-Konzept',
    proj_geschenkfox_proof_1: 'SEO-orientierte SvelteKit Architektur', proj_geschenkfox_proof_2: 'Quiz UX für Kaufintention', proj_geschenkfox_proof_3: 'AI-Empfehlungslogik',
    proj_kernbohr_desc: 'Unternehmenswebsite für Diamantkernbohrung. Lokale SEO, Google Maps, Kundenanfragen.',
    proj_kernbohr_role: 'Alleinige Entwicklung: Struktur, Layout, lokale SEO-Strategie',
    proj_trockenbau_desc: 'Website für Trockenbau-Betrieb. Projektgalerie, Kundenbewertungen, Mobile-first.',
    proj_trockenbau_role: 'Alleinige Umsetzung: Design, CMS-Integration, mobile Optimierung',
    proj_crm_title: 'CRM-System', proj_crm_desc: 'Fullstack CRM: Rollenverwaltung, Projektübersicht, Berichte. Studienabschlussprojekt.',
    proj_crm_role: 'Alleinige Entwicklung: Datenbankdesign, Backend, Frontend, API',
    github_title: 'GitHub',
    contact_title1: 'Lass uns', contact_title2: 'zusammen', contact_title3: 'etwas bauen.',
    contact_p: 'Offen für Festanstellungen, Freelance-Projekte und Kooperationen rund um AI-Entwicklung — in Dresden und remote.',
    contact_phone: 'Telefon',
    form_name: 'Name', form_msg: 'Nachricht', form_ph_name: 'Max Mustermann', form_ph_msg: 'Ich habe ein interessantes Projekt...', form_btn: 'Nachricht senden →',
    success_msg: 'Nachricht gesendet!', success_sub: 'Ich melde mich bald bei dir.',
    footer_deployed: 'Deployed auf',
    footer_visitors: 'Besucher:',
    footer_infra: 'Portfolio auf Vercel · APIs auf VPS · AI-Proxy auf Cloudflare',
    currently_label: 'Currently building:',
    blog_title: 'TIL · Was ich gelernt habe',
    til_1_title: 'VPS-Migration von Scratch', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, automatische Backups — alles selbst konfiguriert. Von Render/Netlify/Supabase zu eigenem VPS migriert.',
    til_2_title: 'Telegram Bot Freemium-Modell', til_2_desc: 'Stripe-Integration für Bots, Webhook vs Polling, Callback-Handler-Architektur und PostgreSQL Subscription-Tracking für DreamDeck.',
    til_3_title: 'Vision API für Dokumentenanalyse', til_3_desc: 'PDF/DOCX/JPEG-Extraktion mit OpenAI Vision, Prompt-Engineering für strukturierte Ausgaben und mehrsprachige Brieferstellung in Smart-Letter.',
    til_4_title: 'i18n ohne Framework', til_4_desc: 'Leichtgewichtiges 4-Sprachen i18n-System (DE/EN/RU/UA) für dieses Portfolio — ohne externe Bibliotheken, nur vanilla JS und localStorage.',
    til_5_title: 'Groq API vs OpenAI: Speed vs Qualität', til_5_desc: 'Llama 3.1 via Groq für Echtzeit-Chat (10× schneller), GPT-4o für komplexe Analysen. Hybride Architektur senkt Kosten bei gleicher UX.',
    til_6_title: 'Google Solar API + B2B Lead-Monetarisierung', til_6_desc: 'Solar Lead Machine: Google Solar API liefert Dachfläche, kWp, kWh/Jahr pro Adresse. FastAPI-Backend verbindet Open Meteo, SMARD (BNetzA) und KfW-Scraper für präzise ROI-Kalkulation. Stripe Pay-per-Lead für Installateure.',
    til_7_title: 'Cloudflare Worker als KI-Proxy', til_7_desc: 'AI-Chat-Widget auf zabolotny.de läuft über einen Cloudflare Worker, der den Groq API-Key serverseitig schützt. Zero Cold Start, globales CDN, kein eigener Server nötig — Edge Computing in der Praxis.',
    til_8_title: 'FastAPI Microservice statt No-Code-Tools', til_8_desc: 'Kontaktformular-Microservice ersetzt n8n und Formspree: FastAPI-Endpunkt validiert Eingaben und leitet Nachrichten via Telegram Bot API weiter. Systemd-Service auf eigenem VPS, kein Drittanbieter.',
    til_9_title: 'Multi-Projekt nginx + systemd auf einem VPS', til_9_desc: 'Mehrere Projekte (Smart-Letter, RenovAI, DreamDeck, Portfolio-API) auf einer 1blu-Instanz: nginx als Reverse Proxy mit SSL-Terminierung via Cloudflare, jeder Dienst als eigener systemd-Unit mit automatischem Neustart.',
    proj_solar_title: 'SolarCheck AI',
    proj_solar_desc: 'B2B Lead-Plattform für die Solarbranche: KI analysiert Dachpotenzial per Adresse, berechnet ROI mit echten Strompreisen und KfW-Förderungen — und liefert qualifizierte Leads an Installateure.',
    proj_solar_role: 'Alleinige Entwicklung: SvelteKit, FastAPI, Google Solar API, PostgreSQL, Stripe, VPS',
    proj_solar_proof_1: 'Adressbasierte Solar-Analyse', proj_solar_proof_2: 'ROI-Logik mit externen APIs', proj_solar_proof_3: 'B2B Pay-per-Lead Modell',
    testimonials_title: 'Referenzen',
    testimonial_1_text: 'Serge hat zwei Websites für meine Unternehmen erstellt — Kernbohr-Expert.de und Trockenbauservice-Salcutan.de. Beide sind schnell, mobil-optimiert und performen gut in der lokalen Suche. Sehr strukturierte Arbeitsweise, klare Kommunikation. Kann ich nur empfehlen.',
    testimonial_2_text: 'Sehr zuverlässige Arbeit. Die mobile Optimierung war für uns besonders wichtig — Serge hat das genau so umgesetzt wie wir es uns vorgestellt haben. Schnelle Kommunikation, gutes Ergebnis.',
    testimonial_role_client: 'Geschäftsführer · Kernbohr-Expert.de & Trockenbauservice-Salcutan.de',
    chat_title: 'Frag die KI über Serge', chat_placeholder: 'Frage nach Projekten, Fähigkeiten...',
    cal_btn: 'Termin buchen →'
  },
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_location: 'zabolotny.de · Dresden, Germany', hero_badge: 'AI products shipped live', hero_projects: 'View Projects →', hero_cv: 'Download CV ↓', hero_available: 'Available for Projects', hero_scroll: 'Scroll',
    hero_stat_projects: 'Live projects', hero_stat_ai: 'AI products', hero_stat_de: 'German',
    about_h2_start: 'I build', about_h2_grad: 'AI products', about_h2_end: 'that solve real problems.',
    about_p1: 'As an AI Fullstack Developer I specialize in intelligent web applications — from idea to deployment.',
    about_p2: 'With experience as CTO and deep knowledge of modern AI technologies, I deliver solutions that truly work.',
    about_p3: 'Based in Dresden. Open for full-time and freelance projects.',
    stat_projects: 'Projects', stat_exp: 'Years Experience', stat_german: 'German 2025', stat_lang: 'Languages',
    skill_frontend: 'Frontend', skill_backend: 'Backend', skill_db: 'Databases', skill_ai: 'AI & Integrations', skill_cloud: 'Cloud & DevOps',
    proof_title: 'Engineering Proof',
    proof_1_kicker: 'AI Pipelines', proof_1_title: 'From prompt to product', proof_1_desc: 'Vision/OCR, structured outputs, RAG patterns and multilingual generation inside real apps, not toy demos.',
    proof_2_kicker: 'Backend & Data', proof_2_title: 'APIs, jobs and subscriptions', proof_2_desc: 'FastAPI, PostgreSQL, Stripe, Telegram bots and clean data models for products that keep running.',
    proof_3_kicker: 'Deployment', proof_3_title: 'Self-hosted infrastructure', proof_3_desc: 'Multiple services behind nginx, systemd units, SSL, Cloudflare and monitoring on my own VPS.',
    proof_4_kicker: 'Product Thinking', proof_4_title: 'More than code', proof_4_desc: 'Landing pages, UX flows, local SEO, payment logic and MVP scope handled end to end.',
    timeline_title: 'Career', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'SolarCheck AI, MeisterDesk, DreamDeck — solo-built AI products from concept to production deployment on own VPS.',
    timeline_2_title: 'AI Fullstack Developer', timeline_2_desc: 'Smart-Letter, GeschenkFox, RenovAI — FastAPI + React/SvelteKit, Groq/OpenAI APIs, self-hosted VPS infrastructure.',
    timeline_3_title: 'Java Backend Developer — Starta Institut (Tel-Ran), Berlin', timeline_3_desc: '960h Java Web Development: Spring Boot, REST APIs, PostgreSQL, DevOps Basics. Graduation project: CRM system. DEKRA-certified.',
    timeline_4_title: 'Technical Support — Germany', timeline_4_desc: 'Teleperformance Görlitz (2017–2019), Concentrix Berlin (2021–2022): Apple & Facebook Business Support. Parallel: self-study React, Python, FastAPI.',
    timeline_5_title: 'Web Developer & CTO — Ukraine', timeline_5_desc: 'Built monetized websites on WordPress & DLE (contextual ads). CTO at MKP Gazkomplektprylad (2011–2017): tech leadership, process optimization, team coordination.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Development', status_live: 'MVP live', status_done: 'Completed', status_study: 'Thesis Project',
    proj_meisterdesk_desc: 'Field service management for craftsmen: customer, job & employee management, PWA, AI reports, voice/photo uploads.',
    proj_meisterdesk_role: 'Solo development: Next.js, Drizzle ORM, PostgreSQL, PWA, AI integration',
    proj_meisterdesk_proof_1: 'PWA for mobile teams', proj_meisterdesk_proof_2: 'Drizzle ORM data model', proj_meisterdesk_proof_3: 'AI reports from photos and voice',
    proj_remont_desc: 'AI analyzes room photos or floor plans and automatically generates a detailed cost estimate with works, materials, prices and design suggestions.',
    proj_remont_role: 'Solo development: React, FastAPI, PostgreSQL, OpenAI Vision, VPS deployment',
    proj_remont_proof_1: 'Vision analysis of room photos', proj_remont_proof_2: 'Structured cost estimation', proj_remont_proof_3: 'FastAPI backend on VPS',
    proj_dreamdeck_desc: 'AI dream journal as a Telegram bot: dream analysis, emotion recognition, weekly insights and pattern detection.',
    proj_dreamdeck_role: 'Solo development: AI integration, Backend, Database, UX',
    proj_dreamdeck_proof_1: 'Telegram bot with freemium flow', proj_dreamdeck_proof_2: 'PostgreSQL subscription tracking', proj_dreamdeck_proof_3: 'Groq API for fast replies',
    proj_smartletter_desc: 'AI platform: professional letters in 17 languages, speech recognition, PDF/DOCX/JPEG processing.',
    proj_smartletter_role: 'Solo development: Architecture, Frontend, Backend, AI Integration',
    proj_smartletter_proof_1: 'PDF/DOCX/JPEG processing', proj_smartletter_proof_2: '17 languages in production', proj_smartletter_proof_3: 'FastAPI + React MVP live',
    proj_geschenkfox_desc: 'AI gift finder with interactive quiz for the German market. SEO-optimized architecture.',
    proj_geschenkfox_role: 'Solo implementation: Design (Figma), Frontend, SEO, UX concept',
    proj_geschenkfox_proof_1: 'SEO-oriented SvelteKit architecture', proj_geschenkfox_proof_2: 'Quiz UX for purchase intent', proj_geschenkfox_proof_3: 'AI recommendation logic',
    proj_kernbohr_desc: 'Corporate website for diamond core drilling. Local SEO, Google Maps, customer inquiries.',
    proj_kernbohr_role: 'Solo development: Structure, Layout, local SEO strategy',
    proj_trockenbau_desc: 'Website for drywall construction company. Project gallery, customer reviews, mobile-first.',
    proj_trockenbau_role: 'Solo implementation: Design, CMS integration, mobile optimization',
    proj_crm_title: 'CRM System', proj_crm_desc: 'Fullstack CRM: role management, project overview, reports. Graduation project.',
    proj_crm_role: 'Solo development: Database design, Backend, Frontend, API',
    github_title: 'GitHub',
    contact_title1: "Let's", contact_title2: 'together', contact_title3: 'build something.',
    contact_p: 'Open to full-time positions, freelance projects and AI development collaborations — in Dresden and remote.',
    contact_phone: 'Phone',
    form_name: 'Name', form_msg: 'Message', form_ph_name: 'John Smith', form_ph_msg: 'I have an interesting project...', form_btn: 'Send Message →',
    success_msg: 'Message sent!', success_sub: 'I\'ll get back to you soon.',
    footer_deployed: 'Deployed on',
    footer_visitors: 'Visitors:',
    footer_infra: 'Portfolio on Vercel · APIs on VPS · AI proxy on Cloudflare',
    currently_label: 'Currently building:',
    blog_title: 'TIL · What I Learned',
    til_1_title: 'VPS Migration from Scratch', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, automated backups — configured everything myself. Migrated from Render/Netlify/Supabase to own VPS.',
    til_2_title: 'Telegram Bot Freemium Model', til_2_desc: 'Stripe integration for bots, webhook vs polling, callback handler architecture and PostgreSQL subscription tracking for DreamDeck.',
    til_3_title: 'Vision API for Document Analysis', til_3_desc: 'PDF/DOCX/JPEG extraction with OpenAI Vision, prompt engineering for structured outputs and multilingual letter generation in Smart-Letter.',
    til_4_title: 'i18n Without a Framework', til_4_desc: 'Lightweight 4-language i18n system (DE/EN/RU/UA) for this portfolio — no external libraries, just vanilla JS and localStorage.',
    til_5_title: 'Groq API vs OpenAI: Speed vs Quality', til_5_desc: 'Llama 3.1 via Groq for real-time chat (10× faster), GPT-4o for complex analysis. Hybrid architecture cuts costs while keeping the same UX.',
    til_6_title: 'Google Solar API + B2B Lead Monetization', til_6_desc: 'Solar Lead Machine: Google Solar API returns roof area, kWp and kWh/year per address. FastAPI backend connects Open Meteo, SMARD (BNetzA) and a KfW scraper for accurate ROI calculation. Stripe pay-per-lead for installers.',
    til_7_title: 'Cloudflare Worker as AI Proxy', til_7_desc: 'AI chat widget on zabolotny.de runs via a Cloudflare Worker that keeps the Groq API key server-side. Zero cold start, global CDN, no dedicated server — edge computing in practice.',
    til_8_title: 'FastAPI Microservice Instead of No-Code Tools', til_8_desc: 'Contact form microservice replaces n8n and Formspree: FastAPI endpoint validates input and forwards messages via Telegram Bot API. Runs as a systemd service on own VPS, no third-party dependency.',
    til_9_title: 'Multi-Project nginx + systemd on One VPS', til_9_desc: 'Multiple projects (Smart-Letter, RenovAI, DreamDeck, Portfolio API) on a single 1blu instance: nginx as reverse proxy with SSL termination via Cloudflare, each service as its own systemd unit with auto-restart.',
    proj_solar_title: 'SolarCheck AI',
    proj_solar_desc: 'B2B lead platform for the solar industry: AI analyzes rooftop potential by address, calculates ROI using real electricity prices and KfW subsidies — and delivers qualified leads to solar installers.',
    proj_solar_role: 'Solo development: SvelteKit, FastAPI, Google Solar API, PostgreSQL, Stripe, VPS',
    proj_solar_proof_1: 'Address-based solar analysis', proj_solar_proof_2: 'ROI logic with external APIs', proj_solar_proof_3: 'B2B pay-per-lead model',
    testimonials_title: 'References',
    testimonial_1_text: 'Serge built two websites for my companies — Kernbohr-Expert.de and Trockenbauservice-Salcutan.de. Both are fast, mobile-optimized, and perform well in local search. Very structured approach, clear communication. Highly recommended.',
    testimonial_2_text: 'Very reliable work. Mobile optimization was especially important for us — Serge implemented it exactly as we envisioned. Fast communication, great result.',
    testimonial_role_client: 'CEO · Kernbohr-Expert.de & Trockenbauservice-Salcutan.de',
    cal_btn: 'Book a call →',
  },
  ru: {
    nav_about: 'Обо мне', nav_skills: 'Навыки', nav_projects: 'Проекты', nav_contact: 'Контакты',
    hero_location: 'zabolotny.de · Дрезден, Германия', hero_badge: 'AI-продукты запущены live', hero_projects: 'Смотреть проекты →', hero_cv: 'Скачать CV ↓', hero_available: 'Открыт для проектов', hero_scroll: 'Листать',
    hero_stat_projects: 'Live-проекты', hero_stat_ai: 'AI-продукты', hero_stat_de: 'Немецкий',
    about_h2_start: 'Я создаю', about_h2_grad: 'AI-продукты', about_h2_end: 'решающие реальные задачи.',
    about_p1: 'Как AI Fullstack Developer я специализируюсь на интеллектуальных веб-приложениях — от идеи до деплоя.',
    about_p2: 'Опыт CTO и знания современных AI-технологий позволяют создавать решения, которые действительно работают.',
    about_p3: 'Нахожусь в Дрездене. Открыт для найма и фриланс-проектов.',
    stat_projects: 'Проектов', stat_exp: 'Лет опыта', stat_german: 'Немецкий 2025', stat_lang: 'Языков',
    skill_frontend: 'Frontend', skill_backend: 'Backend', skill_db: 'Базы данных', skill_ai: 'AI и интеграции', skill_cloud: 'Cloud и DevOps',
    proof_title: 'Инженерные доказательства',
    proof_1_kicker: 'AI Pipelines', proof_1_title: 'От промпта к продукту', proof_1_desc: 'Vision/OCR, структурированные ответы, RAG-подходы и мультиязычная генерация в реальных приложениях, а не демо.',
    proof_2_kicker: 'Backend и данные', proof_2_title: 'API, задачи и подписки', proof_2_desc: 'FastAPI, PostgreSQL, Stripe, Telegram-боты и аккуратные модели данных для продуктов, которые работают постоянно.',
    proof_3_kicker: 'Deployment', proof_3_title: 'Своя инфраструктура', proof_3_desc: 'Несколько сервисов за nginx, systemd-units, SSL, Cloudflare и мониторинг на собственном VPS.',
    proof_4_kicker: 'Product Thinking', proof_4_title: 'Не только код', proof_4_desc: 'Landing pages, UX-flow, локальное SEO, платежная логика и MVP-scope из одних рук.',
    timeline_title: 'Карьера', timeline_1_title: 'AI SaaS разработчик', timeline_1_desc: 'SolarCheck AI, MeisterDesk, DreamDeck — самостоятельная разработка AI-продуктов от концепции до деплоя на собственном VPS.',
    timeline_2_title: 'AI Fullstack разработчик', timeline_2_desc: 'Smart-Letter, GeschenkFox, RenovAI — FastAPI + React/SvelteKit, Groq/OpenAI API, собственная VPS-инфраструктура.',
    timeline_3_title: 'Java Backend разработчик — Starta Institut (Tel-Ran), Берлин', timeline_3_desc: '960ч Java Web Development: Spring Boot, REST API, PostgreSQL, DevOps. Дипломный проект: CRM-система. Сертификат DEKRA.',
    timeline_4_title: 'Техническая поддержка — Германия', timeline_4_desc: 'Teleperformance Гёрлиц (2017–2019), Concentrix Берлин (2021–2022): поддержка Apple и Facebook Business. Параллельно: самообучение React, Python, FastAPI.',
    timeline_5_title: 'Web-разработчик и CTO — Украина', timeline_5_desc: 'Монетизированные сайты на WordPress и DLE (контекстная реклама). CTO в МКП Газкомплектприлад (2011–2017): техническое руководство, оптимизация процессов.',
    filter_all: 'Все', filter_live: 'В работе', filter_dev: 'В разработке', filter_done: 'Завершено',
    status_dev: 'В разработке', status_live: 'MVP запущен', status_done: 'Завершен', status_study: 'Дипломный проект',
    proj_meisterdesk_desc: 'Управление выездными услугами для мастеров: клиенты, заказы, сотрудники, PWA, ИИ-отчёты, загрузка голоса/фото.',
    proj_meisterdesk_role: 'Самостоятельная разработка: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-интеграция',
    proj_meisterdesk_proof_1: 'PWA для мобильных команд', proj_meisterdesk_proof_2: 'Модель данных на Drizzle ORM', proj_meisterdesk_proof_3: 'AI-отчеты из фото и голоса',
    proj_remont_desc: 'ИИ анализирует фото комнаты или схему помещения и автоматически составляет детальную смету: работы, материалы, цены и дизайн-предложения.',
    proj_remont_role: 'Самостоятельная разработка: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-деплой',
    proj_remont_proof_1: 'Vision-анализ фото помещений', proj_remont_proof_2: 'Структурированная смета', proj_remont_proof_3: 'FastAPI backend на VPS',
    proj_dreamdeck_desc: 'AI-дневник снов как Telegram-бот: анализ снов, распознавание эмоций, еженедельные инсайты и поиск паттернов.',
    proj_dreamdeck_role: 'Самостоятельная разработка: AI-интеграция, бэкенд, база данных, UX',
    proj_dreamdeck_proof_1: 'Telegram-бот с freemium-flow', proj_dreamdeck_proof_2: 'PostgreSQL tracking подписок', proj_dreamdeck_proof_3: 'Groq API для быстрых ответов',
    proj_smartletter_desc: 'AI-платформа: профессиональные письма на 17 языках, распознавание речи, обработка PDF/DOCX/JPEG.',
    proj_smartletter_role: 'Самостоятельная разработка: архитектура, фронтенд, бэкенд, AI-интеграция',
    proj_smartletter_proof_1: 'Обработка PDF/DOCX/JPEG', proj_smartletter_proof_2: '17 языков в продукте', proj_smartletter_proof_3: 'FastAPI + React MVP live',
    proj_geschenkfox_desc: 'AI-помощник по выбору подарков с интерактивным квизом для немецкого рынка. SEO-оптимизированная архитектура.',
    proj_geschenkfox_role: 'Самостоятельная реализация: дизайн (Figma), фронтенд, SEO, UX-концепция',
    proj_geschenkfox_proof_1: 'SEO-архитектура на SvelteKit', proj_geschenkfox_proof_2: 'Quiz UX под покупательский intent', proj_geschenkfox_proof_3: 'AI-логика рекомендаций',
    proj_kernbohr_desc: 'Корпоративный сайт для алмазного бурения. Локальное SEO, Google Maps, запросы клиентов.',
    proj_kernbohr_role: 'Самостоятельная разработка: структура, верстка, локальная SEO-стратегия',
    proj_trockenbau_desc: 'Сайт для компании по сухому строительству. Галерея проектов, отзывы клиентов, mobile-first.',
    proj_trockenbau_role: 'Самостоятельная реализация: дизайн, CMS-интеграция, мобильная оптимизация',
    proj_crm_title: 'CRM-система', proj_crm_desc: 'Fullstack CRM: управление ролями, обзор проектов, отчеты. Дипломный проект.',
    proj_crm_role: 'Самостоятельная разработка: дизайн БД, бэкенд, фронтенд, API',
    github_title: 'GitHub',
    contact_title1: 'Давайте', contact_title2: 'вместе', contact_title3: 'создадим что-то.',
    contact_p: 'Открыт для работы в штате, фриланс-проектов и коллабораций в области AI — в Дрездене и удалённо.',
    contact_phone: 'Телефон',
    form_name: 'Имя', form_msg: 'Сообщение', form_ph_name: 'Иван Иванов', form_ph_msg: 'У меня есть интересный проект...', form_btn: 'Отправить →',
    success_msg: 'Сообщение отправлено!', success_sub: 'Я скоро свяжусь с вами.',
    footer_deployed: 'Деплой на',
    footer_visitors: 'Посетители:',
    footer_infra: 'Portfolio на Vercel · API на VPS · AI-proxy на Cloudflare',
    currently_label: 'Сейчас строю:',
    blog_title: 'TIL · Что я изучил',
    til_1_title: 'Миграция на VPS с нуля', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, автоматические бэкапы — всё настроил сам. Перенёс проекты с Render/Netlify/Supabase на собственный VPS.',
    til_2_title: 'Freemium-модель для Telegram-ботов', til_2_desc: 'Stripe-интеграция для ботов, webhook vs polling, архитектура callback-хендлеров и PostgreSQL subscription tracking для DreamDeck.',
    til_3_title: 'Vision API для анализа документов', til_3_desc: 'Извлечение PDF/DOCX/JPEG через OpenAI Vision, prompt engineering для структурированных выводов и генерация писем на 17 языках в Smart-Letter.',
    til_4_title: 'i18n без фреймворка', til_4_desc: 'Лёгкая система i18n на 4 языка (DE/EN/RU/UA) для этого портфолио — без внешних библиотек, только vanilla JS и localStorage.',
    til_5_title: 'Groq API vs OpenAI: скорость vs качество', til_5_desc: 'Llama 3.1 через Groq для real-time чата (10× быстрее), GPT-4o для сложного анализа. Гибридная архитектура снижает затраты при той же UX.',
    til_6_title: 'Google Solar API + B2B монетизация лидов', til_6_desc: 'Solar Lead Machine: Google Solar API возвращает площадь крыши, кВт и кВт·ч/год по адресу. FastAPI связывает Open Meteo, SMARD (BNetzA) и KfW-скрапер для точного расчёта ROI. Stripe pay-per-lead для монтажников.',
    til_7_title: 'Cloudflare Worker как AI-прокси', til_7_desc: 'AI-чат-виджет на zabolotny.de работает через Cloudflare Worker, который скрывает Groq API-ключ на стороне сервера. Zero cold start, глобальный CDN, без выделенного сервера — edge computing на практике.',
    til_8_title: 'FastAPI microservice вместо no-code инструментов', til_8_desc: 'Микросервис контактной формы заменяет n8n и Formspree: FastAPI-эндпоинт валидирует данные и пересылает сообщения через Telegram Bot API. Работает как systemd-сервис на собственном VPS, без сторонних зависимостей.',
    til_9_title: 'Несколько проектов на одном VPS: nginx + systemd', til_9_desc: 'Smart-Letter, RenovAI, DreamDeck и Portfolio API на одном 1blu-сервере: nginx как reverse proxy с SSL-терминацией через Cloudflare, каждый сервис — отдельный systemd-unit с автоперезапуском.',
    proj_solar_title: 'SolarCheck AI',
    proj_solar_desc: 'B2B лид-платформа для солнечной энергетики: ИИ анализирует потенциал крыши по адресу, рассчитывает ROI по реальным тарифам и субсидиям KfW — и доставляет квалифицированные лиды монтажникам.',
    proj_solar_role: 'Самостоятельная разработка: SvelteKit, FastAPI, Google Solar API, PostgreSQL, Stripe, VPS',
    proj_solar_proof_1: 'Solar-анализ по адресу', proj_solar_proof_2: 'ROI-логика с внешними API', proj_solar_proof_3: 'B2B pay-per-lead модель',
    testimonials_title: 'Отзывы',
    testimonial_1_text: 'Серж сделал два сайта для моих компаний — Kernbohr-Expert.de и Trockenbauservice-Salcutan.de. Оба быстрые, оптимизированные под мобильные и хорошо работают в локальном поиске. Очень структурированный подход, чёткая коммуникация. Рекомендую.',
    testimonial_2_text: 'Очень надёжная работа. Мобильная оптимизация была особенно важна для нас — Серж реализовал всё именно так, как мы хотели. Быстрая коммуникация, отличный результат.',
    testimonial_role_client: 'Директор · Kernbohr-Expert.de & Trockenbauservice-Salcutan.de',
    cal_btn: 'Созвонимся →',
  },
  ua: {
    nav_about: 'Про мене', nav_skills: 'Навички', nav_projects: 'Проєкти', nav_contact: 'Контакт',
    hero_location: 'zabolotny.de · Дрезден, Німеччина', hero_badge: 'AI-продукти запущені live', hero_projects: 'Дивитись проєкти →', hero_cv: 'Завантажити CV ↓', hero_available: 'Відкритий для проєктів', hero_scroll: 'Гортати',
    hero_stat_projects: 'Live-проєкти', hero_stat_ai: 'AI-продукти', hero_stat_de: 'Німецька',
    about_h2_start: 'Я будую', about_h2_grad: 'AI-продукти', about_h2_end: 'що вирішують реальні проблеми.',
    about_p1: 'Як AI Fullstack Developer я спеціалізуюся на інтелектуальних вебзастосунках — від ідеї до деплою.',
    about_p2: 'Досвід CTO і знання сучасних AI-технологій дозволяють створювати рішення що справді працюють.',
    about_p3: 'У Дрездені. Відкритий до найму та фриланс-проєктів.',
    stat_projects: 'Проєктів', stat_exp: 'Років досвіду', stat_german: 'Німецька 2025', stat_lang: 'Мов',
    skill_frontend: 'Frontend', skill_backend: 'Backend', skill_db: 'Бази даних', skill_ai: 'AI та інтеграції', skill_cloud: 'Cloud та DevOps',
    proof_title: 'Інженерні докази',
    proof_1_kicker: 'AI Pipelines', proof_1_title: 'Від промпта до продукту', proof_1_desc: 'Vision/OCR, структуровані відповіді, RAG-підходи та багатомовна генерація в реальних застосунках, а не демо.',
    proof_2_kicker: 'Backend і дані', proof_2_title: 'API, задачі та підписки', proof_2_desc: 'FastAPI, PostgreSQL, Stripe, Telegram-боти та акуратні моделі даних для продуктів, що працюють постійно.',
    proof_3_kicker: 'Deployment', proof_3_title: 'Власна інфраструктура', proof_3_desc: 'Кілька сервісів за nginx, systemd-units, SSL, Cloudflare та моніторинг на власному VPS.',
    proof_4_kicker: 'Product Thinking', proof_4_title: 'Не лише код', proof_4_desc: 'Landing pages, UX-flow, локальне SEO, платіжна логіка та MVP-scope з одних рук.',
    timeline_title: "Кар'єра", timeline_1_title: 'AI SaaS розробник', timeline_1_desc: 'SolarCheck AI, MeisterDesk, DreamDeck — самостійна розробка AI-продуктів від концепції до деплою на власному VPS.',
    timeline_2_title: 'AI Fullstack розробник', timeline_2_desc: 'Smart-Letter, GeschenkFox, RenovAI — FastAPI + React/SvelteKit, Groq/OpenAI API, власна VPS-інфраструктура.',
    timeline_3_title: 'Java Backend розробник — Starta Institut (Tel-Ran), Берлін', timeline_3_desc: '960г Java Web Development: Spring Boot, REST API, PostgreSQL, DevOps. Дипломний проєкт: CRM-система. Сертифікат DEKRA.',
    timeline_4_title: 'Технічна підтримка — Німеччина', timeline_4_desc: 'Teleperformance Герліц (2017–2019), Concentrix Берлін (2021–2022): підтримка Apple та Facebook Business. Паралельно: самонавчання React, Python, FastAPI.',
    timeline_5_title: 'Web-розробник і CTO — Україна', timeline_5_desc: 'Монетизовані сайти на WordPress та DLE (контекстна реклама). CTO в МКП Газкомплектприлад (2011–2017): технічне керівництво, оптимізація процесів.',
    filter_all: 'Всі', filter_live: 'В роботі', filter_dev: 'В розробці', filter_done: 'Завершено',
    status_dev: 'В розробці', status_live: 'MVP запущено', status_done: 'Завершено', status_study: 'Дипломний проєкт',
    proj_meisterdesk_desc: 'Керування польовими послугами для майстрів: клієнти, замовлення, співробітники, PWA, ШІ-звіти, завантаження голосу/фото.',
    proj_meisterdesk_role: 'Самостійна розробка: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-інтеграція',
    proj_meisterdesk_proof_1: 'PWA для мобільних команд', proj_meisterdesk_proof_2: 'Модель даних на Drizzle ORM', proj_meisterdesk_proof_3: 'AI-звіти з фото та голосу',
    proj_remont_desc: 'AI аналізує фото кімнати або план приміщення та автоматично складає детальний кошторис: роботи, матеріали, ціни та дизайн-пропозиції.',
    proj_remont_role: 'Самостійна розробка: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-деплой',
    proj_remont_proof_1: 'Vision-аналіз фото приміщень', proj_remont_proof_2: 'Структурований кошторис', proj_remont_proof_3: 'FastAPI backend на VPS',
    proj_dreamdeck_desc: 'AI-щоденник снів як Telegram-бот: аналіз снів, розпізнавання емоцій, щотижневі інсайти та пошук патернів.',
    proj_dreamdeck_role: 'Самостійна розробка: AI-інтеграція, бекенд, база даних, UX',
    proj_dreamdeck_proof_1: 'Telegram-бот з freemium-flow', proj_dreamdeck_proof_2: 'PostgreSQL tracking підписок', proj_dreamdeck_proof_3: 'Groq API для швидких відповідей',
    proj_smartletter_desc: 'AI-платформа: професійні листи 17 мовами, розпізнавання мови, обробка PDF/DOCX/JPEG.',
    proj_smartletter_role: 'Самостійна розробка: архітектура, фронтенд, бекенд, AI-інтеграція',
    proj_smartletter_proof_1: 'Обробка PDF/DOCX/JPEG', proj_smartletter_proof_2: '17 мов у продукті', proj_smartletter_proof_3: 'FastAPI + React MVP live',
    proj_geschenkfox_desc: 'AI-помічник з вибору подарунків з інтерактивним квізом для німецького ринку. SEO-оптимізована архітектура.',
    proj_geschenkfox_role: 'Самостійна реалізація: дизайн (Figma), фронтенд, SEO, UX-концепція',
    proj_geschenkfox_proof_1: 'SEO-архітектура на SvelteKit', proj_geschenkfox_proof_2: 'Quiz UX під купівельний intent', proj_geschenkfox_proof_3: 'AI-логіка рекомендацій',
    proj_kernbohr_desc: 'Корпоративний сайт для алмазного буріння. Локальне SEO, Google Maps, запити клієнтів.',
    proj_kernbohr_role: 'Самостійна розробка: структура, верстка, локальна SEO-стратегія',
    proj_trockenbau_desc: 'Сайт для компанії з сухого будівництва. Галерея проєктів, відгуки клієнтів, mobile-first.',
    proj_trockenbau_role: 'Самостійна реалізація: дизайн, CMS-інтеграція, мобільна оптимізація',
    proj_crm_title: 'CRM-система', proj_crm_desc: 'Fullstack CRM: управління ролями, огляд проєктів, звіти. Дипломний проєкт.',
    proj_crm_role: 'Самостійна розробка: дизайн БД, бекенд, фронтенд, API',
    github_title: 'GitHub',
    contact_title1: 'Давайте', contact_title2: 'разом', contact_title3: 'створимо щось.',
    contact_p: 'Відкритий для роботи в штаті, фриланс-проєктів та колаборацій у сфері AI — у Дрездені та віддалено.',
    contact_phone: 'Телефон',
    form_name: "Ім'я", form_msg: 'Повідомлення', form_ph_name: 'Іван Іваненко', form_ph_msg: 'У мене є цікавий проєкт...', form_btn: 'Надіслати →',
    success_msg: 'Повідомлення надіслано!', success_sub: 'Я скоро зв\'яжуся з вами.',
    footer_deployed: 'Деплой на',
    footer_visitors: 'Відвідувачі:',
    footer_infra: 'Portfolio на Vercel · API на VPS · AI-proxy на Cloudflare',
    currently_label: 'Зараз будую:',
    blog_title: 'TIL · Що я вивчив',
    til_1_title: 'Міграція на VPS з нуля', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, автоматичні бекапи — все налаштував сам. Переніс проєкти з Render/Netlify/Supabase на власний VPS.',
    til_2_title: 'Freemium-модель для Telegram-ботів', til_2_desc: 'Stripe-інтеграція для ботів, webhook vs polling, архітектура callback-хендлерів та PostgreSQL subscription tracking для DreamDeck.',
    til_3_title: 'Vision API для аналізу документів', til_3_desc: 'Вилучення PDF/DOCX/JPEG через OpenAI Vision, prompt engineering для структурованих виводів та генерація листів 17 мовами в Smart-Letter.',
    til_4_title: 'i18n без фреймворку', til_4_desc: 'Легка система i18n на 4 мови (DE/EN/RU/UA) для цього портфоліо — без зовнішніх бібліотек, лише vanilla JS та localStorage.',
    til_5_title: 'Groq API vs OpenAI: швидкість vs якість', til_5_desc: 'Llama 3.1 через Groq для real-time чату (10× швидше), GPT-4o для складного аналізу. Гібридна архітектура знижує витрати при тій же UX.',
    til_6_title: 'Google Solar API + B2B монетизація лідів', til_6_desc: 'Solar Lead Machine: Google Solar API повертає площу даху, кВт і кВт·год/рік за адресою. FastAPI поєднує Open Meteo, SMARD (BNetzA) і KfW-скрапер для точного розрахунку ROI. Stripe pay-per-lead для монтажників.',
    til_7_title: 'Cloudflare Worker як AI-проксі', til_7_desc: 'AI-чат-віджет на zabolotny.de працює через Cloudflare Worker, який приховує Groq API-ключ на стороні сервера. Zero cold start, глобальний CDN, без виділеного сервера — edge computing на практиці.',
    til_8_title: 'FastAPI мікросервіс замість no-code інструментів', til_8_desc: 'Мікросервіс контактної форми замінює n8n та Formspree: FastAPI-ендпоінт валідує дані і пересилає повідомлення через Telegram Bot API. Працює як systemd-сервіс на власному VPS, без сторонніх залежностей.',
    til_9_title: 'Кілька проєктів на одному VPS: nginx + systemd', til_9_desc: 'Smart-Letter, RenovAI, DreamDeck та Portfolio API на одному 1blu-сервері: nginx як reverse proxy з SSL-термінацією через Cloudflare, кожен сервіс — окремий systemd-unit з автоперезапуском.',
    proj_solar_title: 'SolarCheck AI',
    proj_solar_desc: 'B2B лід-платформа для сонячної енергетики: ШІ аналізує потенціал даху за адресою, розраховує ROI за реальними тарифами та субсидіями KfW — і доставляє кваліфіковані ліди монтажникам.',
    proj_solar_role: 'Самостійна розробка: SvelteKit, FastAPI, Google Solar API, PostgreSQL, Stripe, VPS',
    proj_solar_proof_1: 'Solar-аналіз за адресою', proj_solar_proof_2: 'ROI-логіка із зовнішніми API', proj_solar_proof_3: 'B2B pay-per-lead модель',
    testimonials_title: 'Відгуки',
    testimonial_1_text: 'Серж зробив два сайти для моїх компаній — Kernbohr-Expert.de та Trockenbauservice-Salcutan.de. Обидва швидкі, оптимізовані під мобільні та добре працюють у локальному пошуку. Дуже структурований підхід, чітка комунікація. Рекомендую.',
    testimonial_2_text: 'Дуже надійна робота. Мобільна оптимізація була особливо важлива для нас — Серж реалізував все саме так, як ми хотіли. Швидка комунікація, відмінний результат.',
    testimonial_role_client: 'Директор · Kernbohr-Expert.de & Trockenbauservice-Salcutan.de',
    cal_btn: 'Домовимось про дзвінок →',
  }
};

function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });

  // Cal.com floating button
  const calLabel = document.querySelector('#calFloatBtn .cal-label');
  if (calLabel && t.cal_btn) calLabel.textContent = t.cal_btn;

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
  
  if (lang === 'de') currentPhrases = phrasesDE;
  else if (lang === 'en') currentPhrases = phrasesEN;
  else if (lang === 'ru') currentPhrases = phrasesRU;
  else if (lang === 'ua') currentPhrases = phrasesUA;
  
  pi = 0; ci = 0; del = false; wait = 0; tel.textContent = '';
  setTimeout(() => { tw(); }, 100);
  initChatWelcome(lang);
}

(function() {
  const supported = ['de', 'en', 'ru', 'ua'];

  function detectBrowserLang() {
    const langs = navigator.languages || [navigator.language || 'de'];
    for (const l of langs) {
      const code = l.toLowerCase().slice(0, 2);
      if (code === 'uk') return 'ua';
      if (supported.includes(code)) return code;
    }
    return 'de';
  }

  const savedLang = localStorage.getItem('lang');
  const lang = savedLang || detectBrowserLang();

  function applyLang() {
    setLang(lang);
    if (typeof initChatWelcome === 'function') {
      initChatWelcome(lang);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLang);
  } else {
    applyLang();
  }
})();
