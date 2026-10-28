// Services page ("Leistungen") in 4 languages. No prices, no client claims: only what the projects and notes on this site show.
const t = (de, en, ru, ua) => ({ de, en, ru, ua });

export const SERVICES = {
  slugs: { de: '/leistungen/', en: '/en/services/', ru: '/ru/services/', ua: '/ua/services/' },
  date: '2026-10-28',
  title: t(
    'Leistungen: KI-Prototypen, Automatisierung und Web-Produkte | Serge Zabolotny',
    'Services: AI prototypes, automation and web products | Serge Zabolotny',
    'Услуги: ИИ-прототипы, автоматизация и веб-продукты | Сергей Заболотный',
    'Послуги: ШІ-прототипи, автоматизація та веб-продукти | Сергій Заболотний'
  ),
  description: t(
    'Leistungen von Serge Zabolotny aus Dresden: KI-Prototypen und MVPs, KI-Integration mit menschlicher Kontrolle, Web-Produkte mit Backend und Server mit CI/CD. Belegt durch eigene Produkte wie MeisterMeld und PflegeOasis.',
    'Services by Serge Zabolotny from Dresden: AI prototypes and MVPs, AI integration with human oversight, web products with backend, and servers with CI/CD. Backed by own products such as MeisterMeld and PflegeOasis.',
    'Услуги Сергея Заболотного из Дрездена: ИИ-прототипы и MVP, интеграция ИИ с контролем человека, веб-продукты с бэкендом и серверы с CI/CD. Подтверждено собственными продуктами MeisterMeld и PflegeOasis.',
    'Послуги Сергія Заболотного з Дрездена: ШІ-прототипи та MVP, інтеграція ШІ з контролем людини, веб-продукти з бекендом і сервери з CI/CD. Підтверджено власними продуктами MeisterMeld та PflegeOasis.'
  ),
  kicker: t('Leistungen · Zusammenarbeit', 'Services · Working together', 'Услуги · Сотрудничество', 'Послуги · Співпраця'),
  h1: t(
    'Leistungen: von der Idee zum laufenden KI- und Web-Produkt',
    'Services: from an idea to a running AI and web product',
    'Услуги: от идеи до работающего ИИ- и веб-продукта',
    'Послуги: від ідеї до працюючого ШІ- та веб-продукту'
  ),
  lead: t(
    'Ich baue KI- und Web-Produkte von der Idee bis zum Betrieb: UX, Frontend, Backend, Datenbank, Deployment. Alles hier ist durch eigene Produkte und Notizen auf dieser Website belegt, nicht durch Versprechen.',
    'I build AI and web products from idea to operation: UX, frontend, backend, database, deployment. Everything here is backed by my own products and notes on this site, not by promises.',
    'Я делаю ИИ- и веб-продукты от идеи до эксплуатации: UX, фронтенд, бэкенд, база данных, деплой. Всё здесь подтверждено моими продуктами и заметками на этом сайте, а не обещаниями.',
    'Я роблю ШІ- та веб-продукти від ідеї до експлуатації: UX, фронтенд, бекенд, база даних, деплой. Усе тут підтверджено моїми продуктами та нотатками на цьому сайті, а не обіцянками.'
  ),
  packagesH: t('Vier Leistungen', 'Four services', 'Четыре направления', 'Чотири напрямки'),
  packages: [
    {
      title: t('KI-Prototyp und MVP', 'AI prototype and MVP', 'ИИ-прототип и MVP', 'ШІ-прототип і MVP'),
      text: t(
        'Aus einer Idee wird ein lauffähiger Prototyp mit klarem Umfang: das Wichtigste zuerst, damit Sie früh echtes Feedback bekommen. Ein eng gefasster Prototyp dauert erfahrungsgemäß etwa 3–6 Wochen; den genauen Aufwand klären wir nach dem Erstgespräch.',
        'An idea becomes a working prototype with a clear scope: the essentials first, so you get real feedback early. A tightly scoped prototype typically takes about 3–6 weeks; we settle the exact effort after the first call.',
        'Идея превращается в работающий прототип с чётким объёмом: сначала главное, чтобы вы рано получили настоящую обратную связь. Узко очерченный прототип обычно занимает около 3–6 недель; точный объём работ уточняем после первого разговора.',
        'Ідея перетворюється на працюючий прототип із чітким обсягом: спершу головне, щоб ви рано отримали справжній зворотний зв’язок. Вузько окреслений прототип зазвичай займає близько 3–6 тижнів; точний обсяг робіт уточнюємо після першої розмови.'
      ),
      proof: t(
        'Beleg: <a href="{{path:meistermeld}}">MeisterMeld</a> (voice-first Software für Handwerker) und <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Proof: <a href="{{path:meistermeld}}">MeisterMeld</a> (voice-first software for tradespeople) and <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Подтверждение: <a href="{{path:meistermeld}}">MeisterMeld</a> (voice-first ПО для мастеров) и <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Підтвердження: <a href="{{path:meistermeld}}">MeisterMeld</a> (voice-first ПЗ для майстрів) і <a href="{{path:pflegeoasis}}">PflegeOasis</a>.'
      ),
    },
    {
      title: t('KI-Integration mit menschlicher Kontrolle', 'AI integration with human oversight', 'Интеграция ИИ с контролем человека', 'Інтеграція ШІ з контролем людини'),
      text: t(
        'Sprachmodelle in bestehende Abläufe einbauen, ohne die Kontrolle abzugeben: Entwurf durch KI, Prüfung und Freigabe durch einen Menschen. Das passt auch zu den Transparenzpflichten der EU-KI-Verordnung.',
        'Building language models into existing workflows without giving up control: a draft by AI, review and approval by a person. This also fits the transparency duties of the EU AI Act.',
        'Встраивание языковых моделей в существующие процессы без потери контроля: черновик от ИИ, проверка и утверждение человеком. Это также соответствует требованиям прозрачности регламента ЕС об ИИ.',
        'Вбудовування мовних моделей в наявні процеси без втрати контролю: чернетка від ШІ, перевірка й затвердження людиною. Це також відповідає вимогам прозорості регламенту ЄС про ШІ.'
      ),
      proof: t(
        'Beleg: <a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop</a>, <a href="{{path:ki-verordnung-artikel-50-checkliste}}">KI-Verordnung Artikel 50</a> und <a href="{{path:ki-rechner-routinearbeit}}">der KI-Rechner für Routinearbeit</a>.',
        'Proof: <a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop</a>, <a href="{{path:ki-verordnung-artikel-50-checkliste}}">AI Act Article 50</a> and <a href="{{path:ki-rechner-routinearbeit}}">the AI routine-work calculator</a>.',
        'Подтверждение: <a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле</a>, <a href="{{path:ki-verordnung-artikel-50-checkliste}}">регламент ИИ, статья 50</a> и <a href="{{path:ki-rechner-routinearbeit}}">калькулятор ИИ и рутинной работы</a>.',
        'Підтвердження: <a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі</a>, <a href="{{path:ki-verordnung-artikel-50-checkliste}}">регламент ШІ, стаття 50</a> і <a href="{{path:ki-rechner-routinearbeit}}">калькулятор ШІ та рутинної роботи</a>.'
      ),
    },
    {
      title: t('Web-Produkt mit Backend und SEO', 'Web product with backend and SEO', 'Веб-продукт с бэкендом и SEO', 'Веб-продукт із бекендом і SEO'),
      text: t(
        'Landingpages, UX-Abläufe, Datenbank und Backend, lokale Suchmaschinenoptimierung, Zahlungslogik und ein sinnvoll geschnittener MVP-Umfang aus einer Hand.',
        'Landing pages, UX flows, database and backend, local search engine optimisation, payment logic and a sensibly cut MVP scope from one pair of hands.',
        'Лендинги, UX-сценарии, база данных и бэкенд, локальное SEO, платёжная логика и разумно очерченный объём MVP — из одних рук.',
        'Лендинги, UX-сценарії, база даних і бекенд, локальне SEO, платіжна логіка та розумно окреслений обсяг MVP — з одних рук.'
      ),
      proof: t(
        'Beleg: diese Website mit <a href="{{path:ci-cd-nextjs-vps}}">automatischem Deployment</a> und die Produkte <a href="{{path:meistermeld}}">MeisterMeld</a> und <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Proof: this website with <a href="{{path:ci-cd-nextjs-vps}}">automatic deployment</a> and the products <a href="{{path:meistermeld}}">MeisterMeld</a> and <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Подтверждение: этот сайт с <a href="{{path:ci-cd-nextjs-vps}}">автоматическим деплоем</a> и продукты <a href="{{path:meistermeld}}">MeisterMeld</a> и <a href="{{path:pflegeoasis}}">PflegeOasis</a>.',
        'Підтвердження: цей сайт з <a href="{{path:ci-cd-nextjs-vps}}">автоматичним деплоєм</a> і продукти <a href="{{path:meistermeld}}">MeisterMeld</a> та <a href="{{path:pflegeoasis}}">PflegeOasis</a>.'
      ),
    },
    {
      title: t('Server, Deployment und Betrieb', 'Servers, deployment and operations', 'Серверы, деплой и эксплуатация', 'Сервери, деплой та експлуатація'),
      text: t(
        'Eigener Server oder VPS mit CI/CD, sicherem Zugriff und Backups, deren Wiederherstellung getestet ist. Wer nicht alles in die Cloud großer Anbieter legen will, findet hier einen praktischen Weg.',
        'Your own server or a VPS with CI/CD, secure access and backups whose restore has been tested. Anyone who does not want everything in the big providers’ cloud will find a practical route here.',
        'Собственный сервер или VPS с CI/CD, защищённым доступом и бэкапами, восстановление которых проверено. Кто не хочет класть всё в облако крупных провайдеров, найдёт здесь практичный путь.',
        'Власний сервер або VPS із CI/CD, захищеним доступом і бекапами, відновлення яких перевірено. Хто не хоче класти все в хмару великих провайдерів, знайде тут практичний шлях.'
      ),
      proof: t(
        'Beleg: <a href="{{path:homeserver-statt-cloud}}">Raus aus der Cloud</a>, <a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a> und <a href="{{path:backup-3-2-1-restore-test-homelab}}">Backup nach 3-2-1</a>.',
        'Proof: <a href="{{path:homeserver-statt-cloud}}">leaving the cloud</a>, <a href="{{path:zero-trust-homelab}}">zero trust for the homelab</a> and <a href="{{path:backup-3-2-1-restore-test-homelab}}">backup the 3-2-1 way</a>.',
        'Подтверждение: <a href="{{path:homeserver-statt-cloud}}">уход из облака</a>, <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a> и <a href="{{path:backup-3-2-1-restore-test-homelab}}">бэкап по 3-2-1</a>.',
        'Підтвердження: <a href="{{path:homeserver-statt-cloud}}">вихід із хмари</a>, <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a> і <a href="{{path:backup-3-2-1-restore-test-homelab}}">бекап за 3-2-1</a>.'
      ),
    },
  ],
  processH: t('So läuft die Zusammenarbeit', 'How working together goes', 'Как проходит работа', 'Як проходить робота'),
  process: [
    t('<strong>Erstgespräch (30 Minuten):</strong> Ziel, Nutzer, Rahmen. Einen Termin können Sie direkt auf der Startseite buchen.', '<strong>First call (30 minutes):</strong> goal, users, constraints. You can book a slot directly on the home page.', '<strong>Первый разговор (30 минут):</strong> цель, пользователи, рамки. Время можно выбрать прямо на главной странице.', '<strong>Перша розмова (30 хвилин):</strong> мета, користувачі, рамки. Час можна обрати просто на головній сторінці.'),
    t('<strong>Umfang festlegen:</strong> Was gehört in die erste Version, was bewusst nicht? Schriftlich und knapp.', '<strong>Fix the scope:</strong> what goes into the first version and what deliberately does not? In writing and short.', '<strong>Определить объём:</strong> что входит в первую версию, а что сознательно нет? Письменно и кратко.', '<strong>Визначити обсяг:</strong> що входить у першу версію, а що свідомо ні? Письмово й коротко.'),
    t('<strong>Prototyp bauen und zeigen:</strong> in kurzen Schritten, damit Sie früh sehen, ob die Richtung stimmt.', '<strong>Build and show a prototype:</strong> in short steps, so you see early whether the direction is right.', '<strong>Собрать и показать прототип:</strong> короткими шагами, чтобы вы рано увидели, верно ли направление.', '<strong>Зібрати й показати прототип:</strong> короткими кроками, щоб ви рано побачили, чи правильний напрямок.'),
    t('<strong>Live schalten und betreiben:</strong> Deployment, Backups, Überwachung; auf Wunsch mit Dokumentation der Abläufe.', '<strong>Go live and operate:</strong> deployment, backups, monitoring; documentation of the processes on request.', '<strong>Запуск и эксплуатация:</strong> деплой, бэкапы, мониторинг; по желанию с документацией процессов.', '<strong>Запуск і експлуатація:</strong> деплой, бекапи, моніторинг; за бажанням із документацією процесів.'),
  ],
  fitH: t('Was ich nicht bin', 'What I am not', 'Чем я не являюсь', 'Чим я не є'),
  fit: [
    t('Ich arbeite allein, keine Agentur mit großem Team. Das hält Abstimmung kurz, begrenzt aber den Umfang.', 'I work alone, not an agency with a large team. That keeps coordination short but limits the volume.', 'Я работаю один, а не агентство с большой командой. Это сокращает согласования, но ограничивает объём.', 'Я працюю сам, а не агенція з великою командою. Це скорочує узгодження, але обмежує обсяг.'),
    t('Preise nenne ich nach dem Erstgespräch, weil sie vom Umfang abhängen. Keine Pauschalangebote ohne Kenntnis des Projekts.', 'I quote prices after the first call because they depend on scope. No flat offers without knowing the project.', 'Цену называю после первого разговора, так как она зависит от объёма. Никаких типовых предложений, не зная проекта.', 'Ціну називаю після першої розмови, бо вона залежить від обсягу. Жодних типових пропозицій, не знаючи проєкту.'),
    t('Rechtliche Fragen (etwa zu CRA, NIS2 oder KI-Verordnung) beantwortet eine Rechtsberatung; ich zeige, was technisch dazugehört.', 'Legal questions (for example on the CRA, NIS2 or the AI Act) are for legal counsel; I show what belongs on the technical side.', 'Юридические вопросы (например, по CRA, NIS2 или регламенту об ИИ) — к юристу; я показываю, что относится к технической стороне.', 'Юридичні питання (наприклад, щодо CRA, NIS2 чи регламенту про ШІ) — до юриста; я показую, що належить до технічного боку.'),
  ],
  employersH: t('Für Arbeitgeber', 'For employers', 'Для работодателей', 'Для роботодавців'),
  employers: t(
    'Ich suche zusätzlich eine Festanstellung in der IT, mit DevOps und Platform Engineering als bestem Fit. Meinen Werdegang, offene Lücken und meine Belege habe ich in <a href="{{path:quereinstieg-devops-deutschland}}">Quereinstieg DevOps in Deutschland</a> zusammengefasst; den Lebenslauf gibt es als <a href="/resume-de.pdf">PDF (Deutsch)</a>.',
    'I am also looking for a permanent IT job, with DevOps and platform engineering as the best fit. My background, open gaps and evidence are summarised in <a href="{{path:quereinstieg-devops-deutschland}}">career change into DevOps in Germany</a>; the CV is available as a <a href="/resume-en.pdf">PDF (English)</a>.',
    'Дополнительно я ищу постоянную работу в ИТ, лучше всего подходят DevOps и Platform Engineering. Путь, пробелы и подтверждения собраны в заметке <a href="{{path:quereinstieg-devops-deutschland}}">Переход в DevOps в Германии</a>; резюме доступно в виде <a href="/resume-en.pdf">PDF (на английском)</a>.',
    'Додатково я шукаю постійну роботу в ІТ, найкраще підходять DevOps і Platform Engineering. Шлях, прогалини й підтвердження зібрано в нотатці <a href="{{path:quereinstieg-devops-deutschland}}">Перехід у DevOps у Німеччині</a>; резюме доступне як <a href="/resume-en.pdf">PDF (англійською)</a>.'
  ),
  ctaH: t('Projekt besprechen', 'Discuss a project', 'Обсудить проект', 'Обговорити проєкт'),
  ctaP: t('Schreiben Sie mir kurz, worum es geht, oder buchen Sie ein 30-Minuten-Gespräch.', 'Send me a short note on what it is about, or book a 30-minute call.', 'Коротко напишите, о чём речь, или запишитесь на 30-минутный разговор.', 'Коротко напишіть, про що йдеться, або запишіться на 30-хвилинну розмову.'),
  ctaBtn: t('Kontakt und Termin', 'Contact and booking', 'Контакт и запись', 'Контакт і запис'),
};
