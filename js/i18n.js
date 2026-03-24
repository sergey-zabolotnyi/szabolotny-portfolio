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
    timeline_title: 'Career', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'Smart-Letter, GeschenkFox, HandwerkerAI — solo-built AI products from concept to production.',
    timeline_2_title: 'Fullstack Developer', timeline_2_desc: 'React, SvelteKit, FastAPI — client projects, integrations, deployments on Vercel & Railway.',
    timeline_3_title: 'CTO / Technical Leadership', timeline_3_desc: 'Led development team, architecture decisions, roadmap and hiring for a tech startup.',
    timeline_4_title: 'Software Developer', timeline_4_desc: 'Java, Spring Boot, REST APIs — enterprise backend development and database design.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Entwicklung', status_live: 'MVP live', status_done: 'Abgeschlossen', status_study: 'Abschlussarbeit',
    proj_handwerker_desc: 'AI-Assistent für Handwerksbetriebe: automatische Antworten via Telegram, Terminbuchung und Angebotsgenerierung 24/7.',
    proj_handwerker_role: 'Alleinige Entwicklung: AI-Agent, Backend, Frontend, UX',
    proj_smartletter_desc: 'KI-Plattform: professionelle Briefe in 17 Sprachen, Spracherkennung, PDF/DOCX/JPEG-Verarbeitung.',
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
    chat_title: 'Frag die KI über Serge', chat_placeholder: 'Frage nach Projekten, Fähigkeiten...'
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
    timeline_title: 'Career', timeline_1_title: 'AI SaaS Developer', timeline_1_desc: 'Smart-Letter, GeschenkFox, HandwerkerAI — solo-built AI products from concept to production.',
    timeline_2_title: 'Fullstack Developer', timeline_2_desc: 'React, SvelteKit, FastAPI — client projects, integrations, deployments on Vercel & Railway.',
    timeline_3_title: 'CTO / Technical Leadership', timeline_3_desc: 'Led development team, architecture decisions, roadmap and hiring for a tech startup.',
    timeline_4_title: 'Software Developer', timeline_4_desc: 'Java, Spring Boot, REST APIs — enterprise backend development and database design.',
    filter_all: 'All', filter_live: 'Live', filter_dev: 'In Dev', filter_done: 'Done',
    status_dev: 'In Development', status_live: 'MVP live', status_done: 'Completed', status_study: 'Thesis Project',
    proj_handwerker_desc: 'AI assistant for crafts businesses: automated replies via Telegram, appointment scheduling, and quote generation 24/7.',
    proj_handwerker_role: 'Solo development: AI agent, Backend, Frontend, UX',
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
    chat_title: 'Ask AI about Serge', chat_placeholder: 'Ask about projects, skills...'
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
    timeline_title: 'Карьера', timeline_1_title: 'AI SaaS разработчик', timeline_1_desc: 'Smart-Letter, GeschenkFox, HandwerkerAI — самостоятельная разработка AI продуктов от концепции до продакшена.',
    timeline_2_title: 'Fullstack разработчик', timeline_2_desc: 'React, SvelteKit, FastAPI — клиентские проекты, интеграции, деплой на Vercel и Railway.',
    timeline_3_title: 'CTO / Техническое лидерство', timeline_3_desc: 'Руководство командой разработки, архитектурные решения, роадмап и найм для технологического стартапа.',
    timeline_4_title: 'Разработчик ПО', timeline_4_desc: 'Java, Spring Boot, REST API — разработка бэкенда и дизайн баз данных для enterprise.',
    filter_all: 'Все', filter_live: 'В работе', filter_dev: 'В разработке', filter_done: 'Завершено',
    status_dev: 'В разработке', status_live: 'MVP запущен', status_done: 'Завершен', status_study: 'Дипломный проект',
    proj_handwerker_desc: 'AI-ассистент для ремесленных предприятий: автоматические ответы в Telegram, запись на прием и генерация предложений 24/7.',
    proj_handwerker_role: 'Самостоятельная разработка: AI-агент, бэкенд, фронтенд, UX',
    proj_smartletter_desc: 'AI-платформа: профессиональные письма на 17 языках, распознавание речи, обработка PDF/DOCX/JPEG.',
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
    chat_title: 'Спросите AI о Сергее', chat_placeholder: 'Спросите о проектах, навыках...'
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
    timeline_title: 'Кар\'єра', timeline_1_title: 'AI SaaS розробник', timeline_1_desc: 'Smart-Letter, GeschenkFox, HandwerkerAI — самостійна розробка AI продуктів від концепції до продакшену.',
    timeline_2_title: 'Fullstack розробник', timeline_2_desc: 'React, SvelteKit, FastAPI — клієнтські проєкти, інтеграції, деплой на Vercel та Railway.',
    timeline_3_title: 'CTO / Технічне лідерство', timeline_3_desc: 'Керівництво командою розробки, архітектурні рішення, роадмап та найм для технологічного стартапу.',
    timeline_4_title: 'Розробник ПЗ', timeline_4_desc: 'Java, Spring Boot, REST API — розробка бекенду та дизайн баз даних для enterprise.',
    filter_all: 'Всі', filter_live: 'В роботі', filter_dev: 'В розробці', filter_done: 'Завершено',
    status_dev: 'В розробці', status_live: 'MVP запущено', status_done: 'Завершено', status_study: 'Дипломний проєкт',
    proj_handwerker_desc: 'AI-асистент для ремісничих підприємств: автоматичні відповіді в Telegram, запис на прийом та генерація пропозицій 24/7.',
    proj_handwerker_role: 'Самостійна розробка: AI-агент, бекенд, фронтенд, UX',
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
    chat_title: 'Запитайте AI про Сергія', chat_placeholder: 'Запитайте про проєкти, навички...'
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