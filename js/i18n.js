// i18n.js - Полные переводы на 4 языка

const translations = {
  de: {
    nav_about: 'Über mich', nav_skills: 'Skills', nav_projects: 'Projekte', nav_contact: 'Kontakt',
    hero_location: 'zabolotny.de · Dresden, Deutschland', hero_projects: 'Projekte ansehen →', hero_cv: 'CV herunterladen ↓', hero_available: 'Verfügbar für Projekte', hero_scroll: 'Scrollen',
    about_h2_start: 'Ich baue', about_h2_grad: 'KI-Produkte', about_h2_end: 'die echte Probleme lösen.',
    about_p1: 'Als AI Fullstack Developer spezialisiere ich mich auf intelligente Webanwendungen — von der Idee bis zum Deployment.',
    about_p2: 'Mit Erfahrung als CTO und fundierten Kenntnissen in modernen AI-Technologien bringe ich Lösungen, die wirklich funktionieren.',
    about_p3: 'Basiert in Dresden. Offen für Festanstellung und Freelance-Projekte.',
    stat_projects: 'Projekte', stat_exp: 'Jahre Erfahrung', stat_german: 'Deutsch 2025', stat_lang: 'Sprachen',
    skill_frontend: 'Frontend', skill_backend: 'Backend & Datenbanken', skill_ai: 'AI & Integrationen', skill_cloud: 'Cloud & Weitere',
    timeline_title: 'Career', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'Smart-Letter, GeschenkFox, RenovAI — solo-built AI products from concept to production.',
    timeline_2_title: 'Fullstack Developer', timeline_2_desc: 'React, SvelteKit, FastAPI — client projects, integrations, deployments on Vercel & Railway.',
    timeline_3_title: 'CTO / Technical Leadership', timeline_3_desc: 'Led development team, architecture decisions, roadmap and hiring for a tech startup.',
    timeline_4_title: 'Software Developer', timeline_4_desc: 'Java, Spring Boot, REST APIs — enterprise backend development and database design.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Entwicklung', status_live: 'MVP live', status_done: 'Abgeschlossen', status_study: 'Abschlussarbeit',
    proj_meisterdesk_desc: 'Feldservice-Management für Handwerker: Kunden-, Auftrags- & Mitarbeiterverwaltung, PWA, KI-Berichte, Sprach-/Foto-Uploads.',
    proj_meisterdesk_role: 'Alleinige Entwicklung: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-Integration',
    proj_remont_desc: 'KI analysiert Raumfotos oder Grundrisse und erstellt automatisch eine detaillierte Kostenkalkulation mit Arbeiten, Materialien, Preisen und Designvorschlägen.',
    proj_remont_role: 'Alleinige Entwicklung: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-Deployment',
    proj_dreamdeck_desc: 'KI-Traumtagebuch als Telegram-Bot: Traumanalyse, Emotionserkennung, wöchentliche Insights und Mustererkennung.',
    proj_dreamdeck_role: 'Alleinige Entwicklung: AI-Integration, Backend, Datenbank, UX',
    proj_smartletter_role: 'Alleinige Entwicklung: Architektur, Frontend, Backend, KI-Integration',
    proj_geschenkfox_desc: 'KI-Geschenkfinder mit interaktivem Quiz für den deutschen Markt. SEO-optimierte Architektur.',
    proj_geschenkfox_role: 'Alleinige Umsetzung: Design (Figma), Frontend, SEO, UX-Konzept',
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
    currently_label: 'Currently building:',
    blog_title: 'TIL · Was ich gelernt habe',
    til_1_title: 'VPS-Migration von Scratch', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, automatische Backups — alles selbst konfiguriert. Von Render/Netlify/Supabase zu eigenem VPS migriert.',
    til_2_title: 'Telegram Bot Freemium-Modell', til_2_desc: 'Stripe-Integration für Bots, Webhook vs Polling, Callback-Handler-Architektur und PostgreSQL Subscription-Tracking für DreamDeck.',
    til_3_title: 'Vision API für Dokumentenanalyse', til_3_desc: 'PDF/DOCX/JPEG-Extraktion mit OpenAI Vision, Prompt-Engineering für strukturierte Ausgaben und mehrsprachige Brieferstellung in Smart-Letter.',
    til_4_title: 'i18n ohne Framework', til_4_desc: 'Leichtgewichtiges 4-Sprachen i18n-System (DE/EN/RU/UA) für dieses Portfolio — ohne externe Bibliotheken, nur vanilla JS und localStorage.',
    til_5_title: 'Groq API vs OpenAI: Speed vs Qualität', til_5_desc: 'Llama 3.1 via Groq für Echtzeit-Chat (10× schneller), GPT-4o für komplexe Analysen. Hybride Architektur senkt Kosten bei gleicher UX.',
    testimonials_title: 'Referenzen',
    testimonial_1_text: 'Serge hat unsere Website schnell und professionell umgesetzt. Die lokale SEO-Optimierung hat unsere Sichtbarkeit in Dresden deutlich verbessert — wir bekommen jetzt deutlich mehr Anfragen über Google.',
    testimonial_2_text: 'Sehr zuverlässige Arbeit. Die mobile Optimierung war für uns besonders wichtig — Serge hat das genau so umgesetzt wie wir es uns vorgestellt haben. Schnelle Kommunikation, gutes Ergebnis.',
    testimonial_role_client: 'Kunde · Dresden',
    chat_title: 'Frag die KI über Serge', chat_placeholder: 'Frage nach Projekten, Fähigkeiten...',
    cal_btn: 'Termin buchen →'
  },
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_location: 'zabolotny.de · Dresden, Germany', hero_projects: 'View Projects →', hero_cv: 'Download CV ↓', hero_available: 'Available for Projects', hero_scroll: 'Scroll',
    about_h2_start: 'I build', about_h2_grad: 'AI products', about_h2_end: 'that solve real problems.',
    about_p1: 'As an AI Fullstack Developer I specialize in intelligent web applications — from idea to deployment.',
    about_p2: 'With experience as CTO and deep knowledge of modern AI technologies, I deliver solutions that truly work.',
    about_p3: 'Based in Dresden. Open for full-time and freelance projects.',
    stat_projects: 'Projects', stat_exp: 'Years Experience', stat_german: 'German 2025', stat_lang: 'Languages',
    skill_frontend: 'Frontend', skill_backend: 'Backend & Databases', skill_ai: 'AI & Integrations', skill_cloud: 'Cloud & More',
    timeline_title: 'Career', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'Smart-Letter, GeschenkFox, RenovAI — solo-built AI products from concept to production.',
    timeline_2_title: 'Fullstack Developer', timeline_2_desc: 'React, SvelteKit, FastAPI — client projects, integrations, deployments on Vercel & Railway.',
    timeline_3_title: 'CTO / Technical Leadership', timeline_3_desc: 'Led development team, architecture decisions, roadmap and hiring for a tech startup.',
    timeline_4_title: 'Software Developer', timeline_4_desc: 'Java, Spring Boot, REST APIs — enterprise backend development and database design.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Development', status_live: 'MVP live', status_done: 'Completed', status_study: 'Thesis Project',
    proj_meisterdesk_desc: 'Field service management for craftsmen: customer, job & employee management, PWA, AI reports, voice/photo uploads.',
    proj_meisterdesk_role: 'Solo development: Next.js, Drizzle ORM, PostgreSQL, PWA, AI integration',
    proj_remont_desc: 'AI analyzes room photos or floor plans and automatically generates a detailed cost estimate with works, materials, prices and design suggestions.',
    proj_remont_role: 'Solo development: React, FastAPI, PostgreSQL, OpenAI Vision, VPS deployment',
    proj_dreamdeck_desc: 'AI dream journal as a Telegram bot: dream analysis, emotion recognition, weekly insights and pattern detection.',
    proj_dreamdeck_role: 'Solo development: AI integration, Backend, Database, UX',
    proj_smartletter_desc: 'AI platform: professional letters in 17 languages, speech recognition, PDF/DOCX/JPEG processing.',
    proj_smartletter_role: 'Solo development: Architecture, Frontend, Backend, AI Integration',
    proj_geschenkfox_desc: 'AI gift finder with interactive quiz for the German market. SEO-optimized architecture.',
    proj_geschenkfox_role: 'Solo implementation: Design (Figma), Frontend, SEO, UX concept',
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
    currently_label: 'Currently building:',
    blog_title: 'TIL · What I Learned',
    til_1_title: 'VPS Migration from Scratch', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, automated backups — configured everything myself. Migrated from Render/Netlify/Supabase to own VPS.',
    til_2_title: 'Telegram Bot Freemium Model', til_2_desc: 'Stripe integration for bots, webhook vs polling, callback handler architecture and PostgreSQL subscription tracking for DreamDeck.',
    til_3_title: 'Vision API for Document Analysis', til_3_desc: 'PDF/DOCX/JPEG extraction with OpenAI Vision, prompt engineering for structured outputs and multilingual letter generation in Smart-Letter.',
    til_4_title: 'i18n Without a Framework', til_4_desc: 'Lightweight 4-language i18n system (DE/EN/RU/UA) for this portfolio — no external libraries, just vanilla JS and localStorage.',
    til_5_title: 'Groq API vs OpenAI: Speed vs Quality', til_5_desc: 'Llama 3.1 via Groq for real-time chat (10× faster), GPT-4o for complex analysis. Hybrid architecture cuts costs while keeping the same UX.',
    testimonials_title: 'References',
    testimonial_1_text: 'Serge delivered our website quickly and professionally. The local SEO optimization significantly improved our visibility in Dresden — we now get noticeably more inquiries through Google.',
    testimonial_2_text: 'Very reliable work. Mobile optimization was especially important for us — Serge implemented it exactly as we envisioned. Fast communication, great result.',
    testimonial_role_client: 'Client · Dresden',
  },
  ru: {
    nav_about: 'Обо мне', nav_skills: 'Навыки', nav_projects: 'Проекты', nav_contact: 'Контакты',
    hero_location: 'zabolotny.de · Дрезден, Германия', hero_projects: 'Смотреть проекты →', hero_cv: 'Скачать CV ↓', hero_available: 'Открыт для проектов', hero_scroll: 'Листать',
    about_h2_start: 'Я создаю', about_h2_grad: 'AI-продукты', about_h2_end: 'решающие реальные задачи.',
    about_p1: 'Как AI Fullstack Developer я специализируюсь на интеллектуальных веб-приложениях — от идеи до деплоя.',
    about_p2: 'Опыт CTO и знания современных AI-технологий позволяют создавать решения, которые действительно работают.',
    about_p3: 'Нахожусь в Дрездене. Открыт для найма и фриланс-проектов.',
    stat_projects: 'Проектов', stat_exp: 'Лет опыта', stat_german: 'Немецкий 2025', stat_lang: 'Языков',
    skill_frontend: 'Frontend', skill_backend: 'Backend & Базы данных', skill_ai: 'AI и интеграции', skill_cloud: 'Cloud и другое',
    timeline_title: 'Карьера', timeline_1_title: 'AI SaaS разработчик', timeline_1_desc: 'Smart-Letter, GeschenkFox, RenovAI — самостоятельная разработка AI продуктов от концепции до продакшена.',
    timeline_2_title: 'Fullstack разработчик', timeline_2_desc: 'React, SvelteKit, FastAPI — клиентские проекты, интеграции, деплой на Vercel и Railway.',
    timeline_3_title: 'CTO / Техническое лидерство', timeline_3_desc: 'Руководство командой разработки, архитектурные решения, роадмап и найм для технологического стартапа.',
    timeline_4_title: 'Разработчик ПО', timeline_4_desc: 'Java, Spring Boot, REST API — разработка бэкенда и дизайн баз данных для enterprise.',
    filter_all: 'Все', filter_live: 'В работе', filter_dev: 'В разработке', filter_done: 'Завершено',
    status_dev: 'В разработке', status_live: 'MVP запущен', status_done: 'Завершен', status_study: 'Дипломный проект',
    proj_meisterdesk_desc: 'Управление выездными услугами для мастеров: клиенты, заказы, сотрудники, PWA, ИИ-отчёты, загрузка голоса/фото.',
    proj_meisterdesk_role: 'Самостоятельная разработка: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-интеграция',
    proj_remont_desc: 'ИИ анализирует фото комнаты или схему помещения и автоматически составляет детальную смету: работы, материалы, цены и дизайн-предложения.',
    proj_remont_role: 'Самостоятельная разработка: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-деплой',
    proj_dreamdeck_desc: 'AI-дневник снов как Telegram-бот: анализ снов, распознавание эмоций, еженедельные инсайты и поиск паттернов.',
    proj_dreamdeck_role: 'Самостоятельная разработка: AI-интеграция, бэкенд, база данных, UX',
    proj_smartletter_role: 'Самостоятельная разработка: архитектура, фронтенд, бэкенд, AI-интеграция',
    proj_geschenkfox_desc: 'AI-помощник по выбору подарков с интерактивным квизом для немецкого рынка. SEO-оптимизированная архитектура.',
    proj_geschenkfox_role: 'Самостоятельная реализация: дизайн (Figma), фронтенд, SEO, UX-концепция',
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
    currently_label: 'Сейчас строю:',
    blog_title: 'TIL · Что я изучил',
    til_1_title: 'Миграция на VPS с нуля', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, автоматические бэкапы — всё настроил сам. Перенёс проекты с Render/Netlify/Supabase на собственный VPS.',
    til_2_title: 'Freemium-модель для Telegram-ботов', til_2_desc: 'Stripe-интеграция для ботов, webhook vs polling, архитектура callback-хендлеров и PostgreSQL subscription tracking для DreamDeck.',
    til_3_title: 'Vision API для анализа документов', til_3_desc: 'Извлечение PDF/DOCX/JPEG через OpenAI Vision, prompt engineering для структурированных выводов и генерация писем на 17 языках в Smart-Letter.',
    til_4_title: 'i18n без фреймворка', til_4_desc: 'Лёгкая система i18n на 4 языка (DE/EN/RU/UA) для этого портфолио — без внешних библиотек, только vanilla JS и localStorage.',
    til_5_title: 'Groq API vs OpenAI: скорость vs качество', til_5_desc: 'Llama 3.1 через Groq для real-time чата (10× быстрее), GPT-4o для сложного анализа. Гибридная архитектура снижает затраты при той же UX.',
    testimonials_title: 'Отзывы',
    testimonial_1_text: 'Серж сделал наш сайт быстро и профессионально. SEO-оптимизация значительно улучшила нашу видимость в Дрездене — теперь мы получаем заметно больше заявок через Google.',
    testimonial_2_text: 'Очень надёжная работа. Мобильная оптимизация была особенно важна для нас — Серж реализовал всё именно так, как мы хотели. Быстрая коммуникация, отличный результат.',
    testimonial_role_client: 'Клиент · Дрезден',
  },
  ua: {
    nav_about: 'Про мене', nav_skills: 'Навички', nav_projects: 'Проєкти', nav_contact: 'Контакт',
    hero_location: 'zabolotny.de · Дрезден, Німеччина', hero_projects: 'Дивитись проєкти →', hero_cv: 'Завантажити CV ↓', hero_available: 'Відкритий для проєктів', hero_scroll: 'Гортати',
    about_h2_start: 'Я будую', about_h2_grad: 'AI-продукти', about_h2_end: 'що вирішують реальні проблеми.',
    about_p1: 'Як AI Fullstack Developer я спеціалізуюся на інтелектуальних вебзастосунках — від ідеї до деплою.',
    about_p2: 'Досвід CTO і знання сучасних AI-технологій дозволяють створювати рішення що справді працюють.',
    about_p3: 'У Дрездені. Відкритий до найму та фриланс-проєктів.',
    stat_projects: 'Проєктів', stat_exp: 'Років досвіду', stat_german: 'Німецька 2025', stat_lang: 'Мов',
    skill_frontend: 'Frontend', skill_backend: 'Backend & Бази даних', skill_ai: 'AI та інтеграції', skill_cloud: 'Cloud та інше',
    timeline_title: 'Кар\'єра', timeline_1_title: 'AI SaaS розробник', timeline_1_desc: 'Smart-Letter, GeschenkFox, RenovAI — самостійна розробка AI продуктів від концепції до продакшену.',
    timeline_2_title: 'Fullstack розробник', timeline_2_desc: 'React, SvelteKit, FastAPI — клієнтські проєкти, інтеграції, деплой на Vercel та Railway.',
    timeline_3_title: 'CTO / Технічне лідерство', timeline_3_desc: 'Керівництво командою розробки, архітектурні рішення, роадмап та найм для технологічного стартапу.',
    timeline_4_title: 'Розробник ПЗ', timeline_4_desc: 'Java, Spring Boot, REST API — розробка бекенду та дизайн баз даних для enterprise.',
    filter_all: 'Всі', filter_live: 'В роботі', filter_dev: 'В розробці', filter_done: 'Завершено',
    status_dev: 'В розробці', status_live: 'MVP запущено', status_done: 'Завершено', status_study: 'Дипломний проєкт',
    proj_meisterdesk_desc: 'Керування польовими послугами для майстрів: клієнти, замовлення, співробітники, PWA, ШІ-звіти, завантаження голосу/фото.',
    proj_meisterdesk_role: 'Самостійна розробка: Next.js, Drizzle ORM, PostgreSQL, PWA, AI-інтеграція',
    proj_remont_desc: 'AI аналізує фото кімнати або план приміщення та автоматично складає детальний кошторис: роботи, матеріали, ціни та дизайн-пропозиції.',
    proj_remont_role: 'Самостійна розробка: React, FastAPI, PostgreSQL, OpenAI Vision, VPS-деплой',
    proj_dreamdeck_desc: 'AI-щоденник снів як Telegram-бот: аналіз снів, розпізнавання емоцій, щотижневі інсайти та пошук патернів.',
    proj_dreamdeck_role: 'Самостійна розробка: AI-інтеграція, бекенд, база даних, UX',
    proj_smartletter_desc: 'AI-платформа: професійні листи 17 мовами, розпізнавання мови, обробка PDF/DOCX/JPEG.',
    proj_smartletter_role: 'Самостійна розробка: архітектура, фронтенд, бекенд, AI-інтеграція',
    proj_geschenkfox_desc: 'AI-помічник з вибору подарунків з інтерактивним квізом для німецького ринку. SEO-оптимізована архітектура.',
    proj_geschenkfox_role: 'Самостійна реалізація: дизайн (Figma), фронтенд, SEO, UX-концепція',
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
    currently_label: 'Зараз будую:',
    blog_title: 'TIL · Що я вивчив',
    til_1_title: 'Міграція на VPS з нуля', til_1_desc: 'Nginx, PostgreSQL, systemd, SSL, автоматичні бекапи — все налаштував сам. Переніс проєкти з Render/Netlify/Supabase на власний VPS.',
    til_2_title: 'Freemium-модель для Telegram-ботів', til_2_desc: 'Stripe-інтеграція для ботів, webhook vs polling, архітектура callback-хендлерів та PostgreSQL subscription tracking для DreamDeck.',
    til_3_title: 'Vision API для аналізу документів', til_3_desc: 'Вилучення PDF/DOCX/JPEG через OpenAI Vision, prompt engineering для структурованих виводів та генерація листів 17 мовами в Smart-Letter.',
    til_4_title: 'i18n без фреймворку', til_4_desc: 'Легка система i18n на 4 мови (DE/EN/RU/UA) для цього портфоліо — без зовнішніх бібліотек, лише vanilla JS та localStorage.',
    til_5_title: 'Groq API vs OpenAI: швидкість vs якість', til_5_desc: 'Llama 3.1 через Groq для real-time чату (10× швидше), GPT-4o для складного аналізу. Гібридна архітектура знижує витрати при тій же UX.',
    testimonials_title: 'Відгуки',
    testimonial_1_text: 'Серж зробив наш сайт швидко та професійно. SEO-оптимізація значно покращила нашу видимість у Дрездені — тепер ми отримуємо помітно більше заявок через Google.',
    testimonial_2_text: 'Дуже надійна робота. Мобільна оптимізація була особливо важлива для нас — Серж реалізував все саме так, як ми хотіли. Швидка комунікація, відмінний результат.',
    testimonial_role_client: 'Клієнт · Дрезден',
  }
};

function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
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