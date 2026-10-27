// Five notes (Oct 2026): CRA, NIS2, AI Act Art. 50, backups, DevOps career change. 4 languages each.
// Facts come only from sources cited in each note; legal topics carry "not legal advice" and a check-the-original hint.

const t = (de, en, ru, ua) => ({ de, en, ru, ua });
const P = (de, en, ru, ua) => ({ p: t(de, en, ru, ua) });
const H = (de, en, ru, ua) => ({ h2: t(de, en, ru, ua) });
const A = (href, txt) => `<a href="${href}" rel="noopener noreferrer">${txt}</a>`;

const NOT_LEGAL = t(
  '<strong>Keine Rechtsberatung.</strong> Ich bin Entwickler, kein Jurist. Die Angaben stammen aus den genannten Quellen (Stand Oktober 2026); verbindlich ist der Gesetzestext.',
  '<strong>Not legal advice.</strong> I am a developer, not a lawyer. The details come from the sources listed (as of October 2026); the legal text is what counts.',
  '<strong>Не юридическая консультация.</strong> Я разработчик, а не юрист. Данные взяты из перечисленных источников (на октябрь 2026); решающим является текст закона.',
  '<strong>Не юридична консультація.</strong> Я розробник, а не юрист. Дані взято з перелічених джерел (станом на жовтень 2026); визначальним є текст закону.'
);

export const NOTES_2026 = [
  // ───────────────────────────────────────────────────────── CRA
  {
    slug: 'cra-meldepflicht-11-september-2026',
    date: '2026-10-27',
    tags: ['Cyber Resilience Act', 'CRA', 'Sicherheitslücken', 'DevOps', 'Compliance', 'ENISA'],
    related: ['nis2-kleine-it-unternehmen', 'ki-verordnung-artikel-50-checkliste', 'ci-cd-nextjs-vps'],
    title: t(
      'Cyber Resilience Act: Meldepflicht seit 11. September 2026 – was Entwickler wissen müssen',
      'Cyber Resilience Act: reporting duty since 11 September 2026 – what developers need to know',
      'Cyber Resilience Act: обязанность уведомлять с 11 сентября 2026 — что нужно знать разработчикам',
      'Cyber Resilience Act: обов’язок повідомляти з 11 вересня 2026 — що потрібно знати розробникам'
    ),
    description: t(
      'CRA-Meldepflicht für Hersteller: Frühwarnung in 24 Stunden, Meldung nach 72 Stunden, Abschlussbericht nach 14 Tagen – wer betroffen ist, wohin gemeldet wird und was Entwicklerteams vorbereiten sollten.',
      'CRA reporting duty for manufacturers: early warning within 24 hours, notification after 72 hours, final report after 14 days – who is affected, where to report and what dev teams should prepare.',
      'Обязанность уведомлять по CRA для производителей: раннее предупреждение за 24 часа, уведомление через 72 часа, итоговый отчёт через 14 дней — кого касается, куда сообщать и что подготовить командам.',
      'Обов’язок повідомляти за CRA для виробників: рання попередження за 24 години, повідомлення за 72 години, підсумковий звіт за 14 днів — кого стосується, куди повідомляти й що підготувати командам.'
    ),
    kicker: t('Recht · Sicherheit · DevOps', 'Regulation · Security · DevOps', 'Регулирование · Безопасность · DevOps', 'Регулювання · Безпека · DevOps'),
    h1: t(
      'CRA-Meldepflicht ab 11. September 2026: 24 Stunden, 72 Stunden, 14 Tage',
      'CRA reporting duty from 11 September 2026: 24 hours, 72 hours, 14 days',
      'Обязанность уведомлять по CRA с 11 сентября 2026: 24 часа, 72 часа, 14 дней',
      'Обов’язок повідомляти за CRA з 11 вересня 2026: 24 години, 72 години, 14 днів'
    ),
    lead: t(
      'Seit dem 11. September 2026 müssen Hersteller von Produkten mit digitalen Elementen aktiv ausgenutzte Schwachstellen melden – in drei Stufen und nach einer festen Uhr. Was das für Entwicklungs- und DevOps-Teams bedeutet.',
      'Since 11 September 2026, manufacturers of products with digital elements must report actively exploited vulnerabilities – in three stages and on a fixed clock. What this means for development and DevOps teams.',
      'С 11 сентября 2026 производители продуктов с цифровыми элементами обязаны сообщать об активно эксплуатируемых уязвимостях — в три этапа и по жёсткому таймеру. Что это значит для команд разработки и DevOps.',
      'З 11 вересня 2026 виробники продуктів із цифровими елементами мають повідомляти про активно експлуатовані вразливості — у три етапи й за жорстким таймером. Що це означає для команд розробки та DevOps.'
    ),
    body: [
      H('Worum es geht', 'What this is about', 'О чём речь', 'Про що йдеться'),
      P(
        'Der Cyber Resilience Act (CRA, Verordnung (EU) 2024/2847) legt Sicherheitsanforderungen für Produkte mit digitalen Elementen fest. Als erste Pflicht greift die <strong>Meldung aktiv ausgenutzter Schwachstellen und schwerwiegender Vorfälle</strong>: Sie gilt seit dem 11. September 2026, also deutlich vor den übrigen Anforderungen. Die Uhr beginnt, sobald der Hersteller <em>Kenntnis</em> von der aktiven Ausnutzung erhält – nicht erst, wenn alles geklärt ist.',
        'The Cyber Resilience Act (CRA, Regulation (EU) 2024/2847) sets security requirements for products with digital elements. The first duty to apply is <strong>reporting actively exploited vulnerabilities and severe incidents</strong>: it applies from 11 September 2026, well ahead of the other requirements. The clock starts when the manufacturer <em>becomes aware</em> of active exploitation – not when everything is clarified.',
        'Cyber Resilience Act (CRA, Регламент (ЕС) 2024/2847) задаёт требования безопасности для продуктов с цифровыми элементами. Первой вступает в силу <strong>обязанность сообщать об активно эксплуатируемых уязвимостях и серьёзных инцидентах</strong>: она действует с 11 сентября 2026, заметно раньше остальных требований. Таймер запускается, когда производитель <em>узнаёт</em> об активной эксплуатации, а не когда всё выяснено.',
        'Cyber Resilience Act (CRA, Регламент (ЄС) 2024/2847) встановлює вимоги безпеки до продуктів із цифровими елементами. Першим набуває чинності <strong>обов’язок повідомляти про активно експлуатовані вразливості та серйозні інциденти</strong>: він діє з 11 вересня 2026, помітно раніше за решту вимог. Таймер запускається, коли виробник <em>дізнається</em> про активну експлуатацію, а не коли все з’ясовано.'
      ),
      H('Die drei Fristen', 'The three deadlines', 'Три срока', 'Три строки'),
      {
        table: {
          head: [t('Stufe', 'Stage', 'Этап', 'Етап'), t('Frist', 'Deadline', 'Срок', 'Строк'), t('Inhalt', 'Content', 'Содержание', 'Зміст')],
          rows: [
            [t('Frühwarnung', 'Early warning', 'Раннее предупреждение', 'Рання попередження'), t('24 Stunden', '24 hours', '24 часа', '24 години'), t('Nur das Nötigste, Tempo geht vor Vollständigkeit', 'Minimal detail, speed over completeness', 'Минимум деталей, скорость важнее полноты', 'Мінімум деталей, швидкість важливіша за повноту')],
            [t('Meldung', 'Notification', 'Уведомление', 'Повідомлення'), t('72 Stunden', '72 hours', '72 часа', '72 години'), t('Produkt, Beschreibung, Schweregrad, Auswirkung, getroffene oder geplante Maßnahmen', 'Product, description, severity, impact, measures taken or planned', 'Продукт, описание, серьёзность, влияние, принятые или планируемые меры', 'Продукт, опис, серйозність, вплив, вжиті або заплановані заходи')],
            [t('Abschlussbericht', 'Final report', 'Итоговый отчёт', 'Підсумковий звіт'), t('14 Tage', '14 days', '14 дней', '14 днів'), t('CVE, CVSS-Wert, Ursache, Behebung, Stand der Veröffentlichung, Information der Nutzer', 'CVE, CVSS score, root cause, remediation, disclosure status, user notification', 'CVE, оценка CVSS, причина, исправление, статус раскрытия, уведомление пользователей', 'CVE, оцінка CVSS, причина, виправлення, статус розкриття, повідомлення користувачів')],
          ],
        },
      },
      P(
        'Gemeldet wird über die zentrale Meldeplattform der ENISA, die an die nationalen CSIRTs weiterleitet. Unabhängig davon müssen betroffene Nutzer ohne unnötige Verzögerung informiert werden. Als Obergrenze für Verstöße nennt die Quelle bis zu 10 Mio. € oder 2 % des weltweiten Jahresumsatzes. Einzelheiten, etwa zur Frist bei schwerwiegenden Vorfällen, bitte im Verordnungstext nachlesen.',
        'Reports go through ENISA’s single reporting platform, which forwards them to the national CSIRTs. Separately, affected users must be informed without undue delay. The source names a ceiling of up to €10 million or 2% of worldwide annual turnover for breaches. For details, such as the deadline for severe incidents, please read the regulation text.',
        'Сообщения подаются через единую платформу ENISA, которая передаёт их национальным CSIRT. Независимо от этого пострадавших пользователей нужно информировать без неоправданной задержки. Верхняя граница штрафа по источнику — до 10 млн € или 2% мирового годового оборота. Детали, например срок для серьёзных инцидентов, смотрите в тексте регламента.',
        'Повідомлення подаються через єдину платформу ENISA, яка передає їх національним CSIRT. Окремо про це потрібно без невиправданої затримки інформувати постраждалих користувачів. Верхня межа штрафу за джерелом — до 10 млн € або 2% світового річного обороту. Деталі, наприклад строк для серйозних інцидентів, дивіться в тексті регламенту.'
      ),
      H('Wer ist betroffen?', 'Who is affected?', 'Кого это касается', 'Кого це стосується'),
      P(
        'Verpflichtet sind <strong>Hersteller</strong> von Produkten mit digitalen Elementen. Importeure und Händler melden nicht selbst an die ENISA, müssen Schwachstelleninformationen aber unverzüglich an den Hersteller weitergeben. Nach meinem Verständnis ist ein reiner Webdienst (SaaS) ohne zugehöriges Produkt nicht selbst Hersteller im Sinne des CRA; wer Software oder Geräte ausliefert, die Kunden betreiben, ist es eher. Das ist meine Lesart, keine Auskunft – im Zweifel gegen den Verordnungstext prüfen.',
        '<strong>Manufacturers</strong> of products with digital elements are obliged. Importers and distributors do not report to ENISA themselves, but must pass vulnerability information to the manufacturer without delay. As I understand it, a pure web service (SaaS) without an accompanying product is not itself a manufacturer under the CRA; whoever ships software or devices that customers run is more likely to be. That is my reading, not an official statement – when in doubt, check it against the regulation text.',
        'Обязаны <strong>производители</strong> продуктов с цифровыми элементами. Импортёры и дистрибьюторы сами не сообщают в ENISA, но обязаны без задержки передавать сведения об уязвимостях производителю. Насколько я понимаю, чистый веб-сервис (SaaS) без сопутствующего продукта сам по себе не является производителем по CRA; скорее им является тот, кто поставляет ПО или устройства, которые клиенты запускают у себя. Это моё прочтение, а не официальное разъяснение — при сомнениях сверяйтесь с текстом регламента.',
        'Зобов’язані <strong>виробники</strong> продуктів із цифровими елементами. Імпортери й дистриб’ютори самі не повідомляють до ENISA, але мають без затримки передавати відомості про вразливості виробнику. Наскільки я розумію, чистий вебсервіс (SaaS) без супровідного продукту сам по собі не є виробником за CRA; радше ним є той, хто постачає ПЗ або пристрої, які клієнти запускають в себе. Це моє прочитання, а не офіційне роз’яснення — у разі сумнівів звіряйтеся з текстом регламенту.'
      ),
      H('Was ein Entwicklungsteam vorbereiten sollte', 'What a development team should prepare', 'Что стоит подготовить команде разработки', 'Що варто підготувати команді розробки'),
      {
        ul: [
          t('<strong>Eine benannte Person und einen Ablauf:</strong> Wer entscheidet binnen Stunden, ob etwas „aktiv ausgenutzt“ ist, und wer sendet die Frühwarnung?', '<strong>A named person and a process:</strong> who decides within hours whether something is “actively exploited”, and who sends the early warning?', '<strong>Ответственный и процедура:</strong> кто за часы решает, что уязвимость «активно эксплуатируется», и кто отправляет раннее предупреждение?', '<strong>Відповідальний і процедура:</strong> хто за години вирішує, що вразливість «активно експлуатується», і хто надсилає раннє попередження?'),
          t('<strong>Überblick über die eigenen Abhängigkeiten:</strong> Ohne Liste der eingesetzten Bibliotheken (SBOM) wird die Frage „Sind wir betroffen?“ zur Suche im Dunkeln.', '<strong>An overview of your dependencies:</strong> without a list of the libraries in use (an SBOM), “are we affected?” becomes a search in the dark.', '<strong>Обзор собственных зависимостей:</strong> без списка используемых библиотек (SBOM) вопрос «затронуты ли мы?» превращается в поиск вслепую.', '<strong>Огляд власних залежностей:</strong> без списку використаних бібліотек (SBOM) питання «чи нас зачепило?» перетворюється на пошук наосліп.'),
          t('<strong>Schnelles, wiederholbares Ausliefern von Fixes:</strong> Eine saubere <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-Pipeline</a> ist hier kein Luxus, sondern die Voraussetzung, um nach 14 Tagen etwas Behobenes berichten zu können.', '<strong>Fast, repeatable delivery of fixes:</strong> a clean <a href="{{path:ci-cd-nextjs-vps}}">CI/CD pipeline</a> is not a luxury here but the precondition for reporting something fixed after 14 days.', '<strong>Быстрая и повторяемая выкатка исправлений:</strong> аккуратный <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-пайплайн</a> здесь не роскошь, а условие, чтобы через 14 дней сообщить об исправленном.', '<strong>Швидка й повторювана доставка виправлень:</strong> акуратний <a href="{{path:ci-cd-nextjs-vps}}">CI/CD-пайплайн</a> тут не розкіш, а умова, щоб за 14 днів повідомити про виправлене.'),
          t('<strong>Kommunikationsweg zu Nutzern:</strong> Wie erreichen Sie Ihre Kunden, wenn ein Update dringend ist?', '<strong>A channel to users:</strong> how do you reach your customers when an update is urgent?', '<strong>Канал связи с пользователями:</strong> как вы свяжетесь с клиентами, когда обновление срочное?', '<strong>Канал зв’язку з користувачами:</strong> як ви зв’яжетеся з клієнтами, коли оновлення термінове?'),
        ],
      },
      P(
        'Dazu passt, was ich in den Notizen zu <a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a> und zu <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2 für kleine IT-Unternehmen</a> beschreibe: Wer seine Zugänge und Abhängigkeiten kennt, ist bei beiden Regelwerken im Vorteil.',
        'This fits what I describe in the notes on <a href="{{path:zero-trust-homelab}}">zero trust for the homelab</a> and on <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2 for small IT companies</a>: anyone who knows their access paths and dependencies has an advantage under both regimes.',
        'Это созвучно тому, что я описываю в заметках про <a href="{{path:zero-trust-homelab}}">Zero Trust для домашней лаборатории</a> и про <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2 для небольших ИТ-компаний</a>: кто знает свои доступы и зависимости, в выигрыше при обоих регуляциях.',
        'Це узгоджується з тим, що я описую в нотатках про <a href="{{path:zero-trust-homelab}}">Zero Trust для домашньої лабораторії</a> і про <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2 для невеликих ІТ-компаній</a>: хто знає свої доступи й залежності, у виграші за обох регуляцій.'
      ),
      H('Quellen und Grenzen', 'Sources and limits', 'Источники и ограничения', 'Джерела та обмеження'),
      {
        ul: [
          t(A('https://eucybersecurity.org/article-14', 'CRA Compliance Hub: Artikel 14') + ' (Sekundärquelle, Stand Oktober 2026)', A('https://eucybersecurity.org/article-14', 'CRA Compliance Hub: Article 14') + ' (secondary source, as of October 2026)', A('https://eucybersecurity.org/article-14', 'CRA Compliance Hub: статья 14') + ' (вторичный источник, на октябрь 2026)', A('https://eucybersecurity.org/article-14', 'CRA Compliance Hub: стаття 14') + ' (вторинне джерело, станом на жовтень 2026)'),
          t(A('https://eur-lex.europa.eu/eli/reg/2024/2847/oj', 'Verordnung (EU) 2024/2847 im Amtsblatt') + ' – der verbindliche Text', A('https://eur-lex.europa.eu/eli/reg/2024/2847/oj', 'Regulation (EU) 2024/2847 in the Official Journal') + ' – the binding text', A('https://eur-lex.europa.eu/eli/reg/2024/2847/oj', 'Регламент (ЕС) 2024/2847 в Официальном журнале') + ' — обязывающий текст', A('https://eur-lex.europa.eu/eli/reg/2024/2847/oj', 'Регламент (ЄС) 2024/2847 в Офіційному віснику') + ' — обов’язковий текст'),
        ],
      },
      { callout: NOT_LEGAL },
    ],
  },

  // ───────────────────────────────────────────────────────── NIS2
  {
    slug: 'nis2-kleine-it-unternehmen',
    date: '2026-10-27',
    tags: ['NIS2', 'IT-Sicherheit', 'BSI', 'Compliance', 'Backup', 'Lieferkette'],
    related: ['cra-meldepflicht-11-september-2026', 'backup-3-2-1-restore-test-homelab', 'zero-trust-homelab'],
    title: t(
      'NIS2 in Deutschland: Was kleine IT-Unternehmen und Freelancer wissen sollten',
      'NIS2 in Germany: what small IT companies and freelancers should know',
      'NIS2 в Германии: что стоит знать небольшим ИТ-компаниям и фрилансерам',
      'NIS2 у Німеччині: що варто знати невеликим ІТ-компаніям і фрилансерам'
    ),
    description: t(
      'NIS2-Umsetzungsgesetz seit 6. Dezember 2025: Schwellenwerte (50/250 Mitarbeiter), Meldefristen 24/72 Stunden, BSI-Registrierung, Bußgelder – und was das für Freelancer und kleine IT-Firmen als Lieferanten bedeutet.',
      'The NIS2 implementation act since 6 December 2025: thresholds (50/250 employees), 24/72-hour reporting, BSI registration, fines – and what it means for freelancers and small IT firms as suppliers.',
      'Закон о реализации NIS2 с 6 декабря 2025: пороги (50/250 сотрудников), сроки уведомлений 24/72 часа, регистрация в BSI, штрафы — и что это значит для фрилансеров и небольших ИТ-фирм как поставщиков.',
      'Закон про імплементацію NIS2 з 6 грудня 2025: пороги (50/250 працівників), строки повідомлень 24/72 години, реєстрація в BSI, штрафи — і що це означає для фрилансерів та невеликих ІТ-фірм як постачальників.'
    ),
    kicker: t('Recht · IT-Sicherheit · Mittelstand', 'Regulation · IT security · SMEs', 'Регулирование · ИТ-безопасность · СМБ', 'Регулювання · ІТ-безпека · МСБ'),
    h1: t(
      'NIS2 für kleine IT-Unternehmen und Freelancer: Schwellen, Fristen, Pflichten',
      'NIS2 for small IT companies and freelancers: thresholds, deadlines, duties',
      'NIS2 для небольших ИТ-компаний и фрилансеров: пороги, сроки, обязанности',
      'NIS2 для невеликих ІТ-компаній і фрилансерів: пороги, строки, обов’язки'
    ),
    lead: t(
      'Das deutsche NIS2-Umsetzungsgesetz ist seit dem 6. Dezember 2025 in Kraft. Ob ein Unternehmen direkt betroffen ist, hängt von Branche und Größe ab – aber auch kleine Firmen spüren es als Lieferanten.',
      'The German NIS2 implementation act has been in force since 6 December 2025. Whether a company is directly affected depends on sector and size – but small firms feel it as suppliers too.',
      'Немецкий закон о реализации NIS2 действует с 6 декабря 2025. Затронута ли компания напрямую, зависит от отрасли и размера, но и небольшие фирмы ощущают его как поставщики.',
      'Німецький закон про імплементацію NIS2 діє з 6 грудня 2025. Чи зачеплено компанію напряму, залежить від галузі та розміру, але й невеликі фірми відчувають його як постачальники.'
    ),
    body: [
      H('Die Eckdaten', 'The key facts', 'Главное', 'Головне'),
      {
        table: {
          head: [t('Thema', 'Topic', 'Тема', 'Тема'), t('Angabe laut Quelle', 'According to the source', 'По данным источника', 'За даними джерела')],
          rows: [
            [t('In Kraft', 'In force', 'Вступил в силу', 'Набув чинності'), t('6. Dezember 2025 (verkündet am 5. Dezember 2025, BGBl. I Nr. 301)', '6 December 2025 (promulgated 5 December 2025, BGBl. I No. 301)', '6 декабря 2025 (опубликован 5 декабря 2025, BGBl. I № 301)', '6 грудня 2025 (оприлюднено 5 грудня 2025, BGBl. I № 301)')],
            [t('Besonders wichtige Einrichtungen', 'Particularly important entities', '«Особенно важные» организации', '«Особливо важливі» організації'), t('ab 250 Beschäftigten oder über 50 Mio. € Umsatz und über 43 Mio. € Bilanzsumme', 'from 250 employees, or turnover above €50 million and balance sheet above €43 million', 'от 250 сотрудников или оборот выше 50 млн € и баланс выше 43 млн €', 'від 250 працівників або оборот понад 50 млн € і баланс понад 43 млн €')],
            [t('Wichtige Einrichtungen', 'Important entities', '«Важные» организации', '«Важливі» організації'), t('ab 50 Beschäftigten oder je über 10 Mio. € Umsatz und Bilanzsumme', 'from 50 employees, or turnover and balance sheet each above €10 million', 'от 50 сотрудников или оборот и баланс выше 10 млн € каждый', 'від 50 працівників або оборот і баланс понад 10 млн € кожен')],
            [t('Zusatzbedingung', 'Extra condition', 'Дополнительное условие', 'Додаткова умова'), t('Zugehörigkeit zu einem Sektor aus Anlage 1 oder 2', 'membership of a sector listed in Annex 1 or 2', 'принадлежность к сектору из приложения 1 или 2', 'належність до сектору з додатка 1 або 2')],
            [t('Registrierung beim BSI', 'BSI registration', 'Регистрация в BSI', 'Реєстрація в BSI'), t('innerhalb von drei Monaten; für bereits erfasste Einrichtungen bis 6. März 2026', 'within three months; for entities already covered by 6 March 2026', 'в течение трёх месяцев; для уже подпадающих — до 6 марта 2026', 'протягом трьох місяців; для тих, що вже підпадають, — до 6 березня 2026')],
            [t('Meldungen bei erheblichen Vorfällen', 'Reports for significant incidents', 'Уведомления о значительных инцидентах', 'Повідомлення про значні інциденти'), t('Frühwarnung 24 Stunden, Meldung 72 Stunden, Abschlussbericht spätestens einen Monat danach', 'early warning 24 hours, notification 72 hours, final report no later than one month after', 'раннее предупреждение 24 часа, уведомление 72 часа, итоговый отчёт не позднее чем через месяц', 'рання попередження 24 години, повідомлення 72 години, підсумковий звіт не пізніше ніж за місяць')],
            [t('Bußgeld', 'Fines', 'Штрафы', 'Штрафи'), t('bis 10 Mio. € (besonders wichtige) bzw. bis 7 Mio. € (wichtige Einrichtungen)', 'up to €10 million (particularly important) or €7 million (important entities)', 'до 10 млн € («особенно важные») или до 7 млн € («важные»)', 'до 10 млн € («особливо важливі») або до 7 млн € («важливі»)')],
          ],
        },
      },
      P(
        'Wichtig: Die Größe allein entscheidet nicht. Erst die Kombination aus Schwellenwert <em>und</em> Sektor macht ein Unternehmen zur regulierten Einrichtung. Bei Unsicherheit hilft die Selbsteinschätzung des BSI – und im Zweifel eine Rechtsberatung.',
        'Important: size alone does not decide. Only the combination of a threshold <em>and</em> a sector makes a company a regulated entity. When unsure, the BSI’s self-assessment helps – and, if in doubt, legal advice.',
        'Важно: размер сам по себе ничего не решает. Регулируемой организацией компанию делает сочетание порога <em>и</em> сектора. При неуверенности помогает самооценка BSI, а в сомнительных случаях — юридическая консультация.',
        'Важливо: розмір сам по собі нічого не вирішує. Регульованою організацією компанію робить поєднання порогу <em>і</em> сектору. У разі невпевненості допомагає самооцінка BSI, а в сумнівних випадках — юридична консультація.'
      ),
      H('Und wenn ich unter den Schwellen liege?', 'And if I am below the thresholds?', 'А если я ниже порогов?', 'А якщо я нижче порогів?'),
      P(
        'Ein Freelancer oder ein Kleinstunternehmen liegt in der Regel unter 50 Beschäftigten und ist damit nicht direkt betroffen – das ist meine Einschätzung der Schwellenwerte, keine Rechtsauskunft. Spürbar wird NIS2 trotzdem über die <strong>Lieferkette</strong>: Betroffene Kunden müssen Risiken bei ihren Dienstleistern im Blick behalten und werden Nachweise verlangen, etwa zu Zugriffskontrolle, Backups und Vorfallbehandlung. Eine Kommentierung zum Referentenentwurf (usd, 2024) nennt Lieferkettensicherheit, Schwachstellenmanagement, Backup und Business Continuity, Zugriffskontrolle und Mehrfaktor-Authentifizierung ausdrücklich unter den Maßnahmen; ob das im Wortlaut der Endfassung so steht, sollte man im Gesetz prüfen.',
        'A freelancer or micro-company is usually below 50 employees and therefore not directly affected – that is my reading of the thresholds, not legal advice. NIS2 still becomes noticeable through the <strong>supply chain</strong>: affected customers have to keep an eye on risks at their service providers and will ask for evidence, for example on access control, backups and incident handling. A commentary on the draft bill (usd, 2024) explicitly lists supply-chain security, vulnerability handling, backup and business continuity, access control and multi-factor authentication among the measures; whether the final wording says the same should be checked in the law.',
        'Фрилансер или микрокомпания обычно имеют меньше 50 сотрудников и напрямую не затронуты — это моя оценка порогов, а не юридическая консультация. Тем не менее NIS2 ощутим через <strong>цепочку поставок</strong>: затронутые клиенты обязаны следить за рисками у своих подрядчиков и будут требовать подтверждений, например по контролю доступа, бэкапам и обработке инцидентов. Комментарий к проекту закона (usd, 2024) прямо называет среди мер безопасность цепочки поставок, управление уязвимостями, бэкап и непрерывность бизнеса, контроль доступа и многофакторную аутентификацию; совпадает ли это с окончательной редакцией, нужно проверить по тексту закона.',
        'Фрилансер або мікрокомпанія зазвичай мають менше ніж 50 працівників і напряму не зачеплені — це моя оцінка порогів, а не юридична консультація. Проте NIS2 відчутний через <strong>ланцюг постачання</strong>: зачеплені клієнти мусять стежити за ризиками у своїх підрядників і вимагатимуть підтверджень, наприклад щодо контролю доступу, бекапів і обробки інцидентів. Коментар до проєкту закону (usd, 2024) прямо називає серед заходів безпеку ланцюга постачання, управління вразливостями, бекап і безперервність бізнесу, контроль доступу та багатофакторну автентифікацію; чи збігається це з остаточною редакцією, потрібно перевірити за текстом закону.'
      ),
      H('Praktische Nachweise, die man ohnehin haben sollte', 'Practical evidence worth having anyway', 'Практические подтверждения, которые стоит иметь в любом случае', 'Практичні підтвердження, які варто мати в будь-якому разі'),
      {
        ul: [
          t('<strong>Backups mit getesteter Wiederherstellung:</strong> siehe <a href="{{path:backup-3-2-1-restore-test-homelab}}">Backup nach 3-2-1 und der Restore-Test</a>.', '<strong>Backups with a tested restore:</strong> see <a href="{{path:backup-3-2-1-restore-test-homelab}}">backup the 3-2-1 way and the restore test</a>.', '<strong>Бэкапы с проверенным восстановлением:</strong> см. <a href="{{path:backup-3-2-1-restore-test-homelab}}">бэкап по 3-2-1 и тест восстановления</a>.', '<strong>Бекапи з перевіреним відновленням:</strong> див. <a href="{{path:backup-3-2-1-restore-test-homelab}}">бекап за 3-2-1 і тест відновлення</a>.'),
          t('<strong>Zugriffskontrolle und Mehrfaktor-Anmeldung:</strong> so setze ich es im Homelab um, siehe <a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a>.', '<strong>Access control and multi-factor login:</strong> how I do it in the homelab, see <a href="{{path:zero-trust-homelab}}">zero trust for the homelab</a>.', '<strong>Контроль доступа и многофакторный вход:</strong> как я делаю это в домашней лаборатории — <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.', '<strong>Контроль доступу й багатофакторний вхід:</strong> як я роблю це в домашній лабораторії — <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.'),
          t('<strong>Nachvollziehbares Ausliefern:</strong> eine <a href="{{path:ci-cd-nextjs-vps}}">dokumentierte CI/CD-Pipeline</a> zeigt, wie Änderungen in Produktion gelangen.', '<strong>Traceable delivery:</strong> a <a href="{{path:ci-cd-nextjs-vps}}">documented CI/CD pipeline</a> shows how changes reach production.', '<strong>Прослеживаемая выкатка:</strong> <a href="{{path:ci-cd-nextjs-vps}}">задокументированный CI/CD-пайплайн</a> показывает, как изменения попадают в прод.', '<strong>Простежувана доставка:</strong> <a href="{{path:ci-cd-nextjs-vps}}">задокументований CI/CD-пайплайн</a> показує, як зміни потрапляють у прод.'),
          t('<strong>Ein Plan für Sicherheitsvorfälle:</strong> wer wird wann informiert? Eng verwandt mit der <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA-Meldepflicht</a>.', '<strong>A plan for security incidents:</strong> who is informed when? Closely related to the <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA reporting duty</a>.', '<strong>План на случай инцидента безопасности:</strong> кого и когда информировать? Тесно связано с <a href="{{path:cra-meldepflicht-11-september-2026}}">обязанностью уведомлять по CRA</a>.', '<strong>План на випадок інциденту безпеки:</strong> кого і коли інформувати? Тісно пов’язано з <a href="{{path:cra-meldepflicht-11-september-2026}}">обов’язком повідомляти за CRA</a>.'),
        ],
      },
      H('Quellen und Grenzen', 'Sources and limits', 'Источники и ограничения', 'Джерела та обмеження'),
      {
        ul: [
          t(A('https://www.advisori.de/blog/nis2-umsetzungsgesetz-nis2umsucg', 'ADVISORI: NIS2-Umsetzungsgesetz') + ' (Beratungsblog, Inkrafttreten, Schwellenwerte, Fristen, Bußgelder)', A('https://www.advisori.de/blog/nis2-umsetzungsgesetz-nis2umsucg', 'ADVISORI: NIS2 implementation act') + ' (consultancy blog; entry into force, thresholds, deadlines, fines)', A('https://www.advisori.de/blog/nis2-umsetzungsgesetz-nis2umsucg', 'ADVISORI: закон о реализации NIS2') + ' (блог консалтинга; вступление в силу, пороги, сроки, штрафы)', A('https://www.advisori.de/blog/nis2-umsetzungsgesetz-nis2umsucg', 'ADVISORI: закон про імплементацію NIS2') + ' (блог консалтингу; набуття чинності, пороги, строки, штрафи)'),
          t(A('https://www.usd.de/news-nis-2-deutsches-umsetzungsgesetz/', 'usd: NIS-2, die wichtigsten Punkte') + ' (Kommentar zum Referentenentwurf 2024, nur für die Maßnahmenliste)', A('https://www.usd.de/news-nis-2-deutsches-umsetzungsgesetz/', 'usd: NIS-2, the key points') + ' (commentary on the 2024 draft, used only for the list of measures)', A('https://www.usd.de/news-nis-2-deutsches-umsetzungsgesetz/', 'usd: NIS-2, главные пункты') + ' (комментарий к проекту 2024, только для списка мер)', A('https://www.usd.de/news-nis-2-deutsches-umsetzungsgesetz/', 'usd: NIS-2, головні пункти') + ' (коментар до проєкту 2024, лише для переліку заходів)'),
          t('Verbindlich ist das Bundesgesetzblatt; beide Quellen sind keine amtlichen Texte.', 'The Federal Law Gazette is binding; neither source is an official text.', 'Обязывающим является Bundesgesetzblatt; оба источника не являются официальными текстами.', 'Обов’язковим є Bundesgesetzblatt; обидва джерела не є офіційними текстами.'),
        ],
      },
      { callout: NOT_LEGAL },
    ],
  },

  // ───────────────────────────────────────────────────────── AI Act Art. 50
  {
    slug: 'ki-verordnung-artikel-50-checkliste',
    date: '2026-10-27',
    tags: ['EU AI Act', 'KI-Verordnung', 'Artikel 50', 'Transparenz', 'Kennzeichnung', 'Chatbot'],
    related: ['ki-content-human-in-the-loop', 'welt-nach-der-4-industriellen-revolution', 'pflegeoasis'],
    title: t(
      'KI-Verordnung Artikel 50: Checkliste zur Kennzeichnung von KI-Inhalten bis 2. Dezember 2026',
      'AI Act Article 50: checklist for labelling AI content by 2 December 2026',
      'Регламент об ИИ, статья 50: чек-лист по маркировке ИИ-контента до 2 декабря 2026',
      'Регламент про ШІ, стаття 50: чек-лист із маркування ШІ-контенту до 2 грудня 2026'
    ),
    description: t(
      'EU-KI-Verordnung Artikel 50 praktisch: Chatbot-Hinweis, maschinenlesbare Kennzeichnung, Deepfakes, KI-Texte zu öffentlichen Themen – mit Fristen (2. August und 2. Dezember 2026), Bußgeldrahmen und Checkliste.',
      'EU AI Act Article 50 in practice: chatbot disclosure, machine-readable marking, deepfakes, AI text on public-interest topics – with deadlines (2 August and 2 December 2026), fine range and checklist.',
      'Статья 50 регламента ЕС об ИИ на практике: уведомление в чат-ботах, машиночитаемая маркировка, дипфейки, ИИ-тексты по общественно значимым темам — со сроками (2 августа и 2 декабря 2026), штрафами и чек-листом.',
      'Стаття 50 регламенту ЄС про ШІ на практиці: повідомлення в чат-ботах, машинозчитне маркування, діпфейки, ШІ-тексти на суспільно значущі теми — зі строками (2 серпня та 2 грудня 2026), штрафами й чек-листом.'
    ),
    kicker: t('Recht · KI · Transparenz', 'Regulation · AI · Transparency', 'Регулирование · ИИ · Прозрачность', 'Регулювання · ШІ · Прозорість'),
    h1: t(
      'KI-Verordnung Artikel 50: Was bis zum 2. Dezember 2026 zu tun ist',
      'AI Act Article 50: what needs doing by 2 December 2026',
      'Регламент об ИИ, статья 50: что нужно сделать до 2 декабря 2026',
      'Регламент про ШІ, стаття 50: що потрібно зробити до 2 грудня 2026'
    ),
    lead: t(
      'Die meisten Transparenzpflichten aus Artikel 50 gelten seit dem 2. August 2026. Für die maschinenlesbare Kennzeichnung bereits am Markt befindlicher generativer KI gilt eine Übergangsfrist bis zum 2. Dezember 2026. Eine Checkliste für Entwickler und Betreiber.',
      'Most of Article 50’s transparency duties have applied since 2 August 2026. For the machine-readable marking of generative AI already on the market, a transition period runs until 2 December 2026. A checklist for developers and operators.',
      'Большинство требований статьи 50 о прозрачности действуют с 2 августа 2026. Для машиночитаемой маркировки уже находящегося на рынке генеративного ИИ действует переходный период до 2 декабря 2026. Чек-лист для разработчиков и операторов.',
      'Більшість вимог статті 50 щодо прозорості діють з 2 серпня 2026. Для машинозчитного маркування генеративного ШІ, що вже є на ринку, діє перехідний період до 2 грудня 2026. Чек-лист для розробників і операторів.'
    ),
    body: [
      H('Was Artikel 50 verlangt', 'What Article 50 requires', 'Что требует статья 50', 'Що вимагає стаття 50'),
      {
        table: {
          head: [t('Pflicht', 'Duty', 'Обязанность', 'Обов’язок'), t('Wer', 'Who', 'Кто', 'Хто'), t('Kurz gesagt', 'In short', 'Коротко', 'Коротко')],
          rows: [
            [t('Chatbot-Hinweis (Art. 50 Abs. 1)', 'Chatbot disclosure (Art. 50(1))', 'Уведомление в чат-ботах (ст. 50(1))', 'Повідомлення в чат-ботах (ст. 50(1))'), t('Anbieter', 'Providers', 'Провайдеры', 'Провайдери'), t('Menschen müssen erfahren, dass sie mit KI interagieren – außer es ist offensichtlich', 'People must be told they are interacting with AI – unless it is obvious', 'Людям нужно сообщить, что они взаимодействуют с ИИ, если это не очевидно', 'Людям потрібно повідомити, що вони взаємодіють зі ШІ, якщо це не очевидно')],
            [t('Maschinenlesbare Kennzeichnung (Abs. 2)', 'Machine-readable marking (para. 2)', 'Машиночитаемая маркировка (п. 2)', 'Машинозчитне маркування (п. 2)'), t('Anbieter generativer KI', 'Providers of generative AI', 'Провайдеры генеративного ИИ', 'Провайдери генеративного ШІ'), t('Synthetische Audio-, Bild-, Video- und Textausgaben müssen als künstlich erkennbar markiert sein, soweit technisch machbar', 'Synthetic audio, image, video and text outputs must be marked as artificial, where technically feasible', 'Синтетические аудио, изображения, видео и тексты должны маркироваться как искусственные, где это технически возможно', 'Синтетичні аудіо, зображення, відео й тексти мають маркуватися як штучні, де це технічно можливо')],
            [t('Deepfakes (Abs. 4)', 'Deep fakes (para. 4)', 'Дипфейки (п. 4)', 'Діпфейки (п. 4)'), t('Betreiber', 'Deployers', 'Операторы', 'Оператори'), t('Offenlegung; verlassen Sie sich nicht auf die Kennzeichnung des Anbieters', 'Disclosure; do not rely on the provider’s marking', 'Раскрытие; нельзя полагаться на маркировку провайдера', 'Розкриття; не можна покладатися на маркування провайдера')],
            [t('KI-Texte zu öffentlichen Themen (Abs. 4)', 'AI text on public-interest matters (para. 4)', 'ИИ-тексты на общественно значимые темы (п. 4)', 'ШІ-тексти на суспільно значущі теми (п. 4)'), t('Betreiber', 'Deployers', 'Операторы', 'Оператори'), t('Offenlegung, außer ein Mensch mit redaktioneller Verantwortung hat den Inhalt geprüft', 'Disclosure, unless a person with editorial responsibility has reviewed the content', 'Раскрытие, если контент не проверил человек с редакционной ответственностью', 'Розкриття, якщо контент не перевірила людина з редакційною відповідальністю')],
          ],
        },
      },
      P(
        'Die Hinweise müssen klar erkennbar sein, spätestens bei der ersten Interaktion erscheinen und barrierefrei zugänglich sein. Als Obergrenze für Verstöße nennt die Quelle bis zu 15 Mio. € oder 3 % des weltweiten Jahresumsatzes.',
        'Disclosures must be clear, appear no later than the first interaction and be accessible. For breaches the source names a ceiling of up to €15 million or 3% of worldwide annual turnover.',
        'Уведомления должны быть чёткими, появляться не позднее первого взаимодействия и быть доступными. Верхняя граница штрафа по источнику — до 15 млн € или 3% мирового годового оборота.',
        'Повідомлення мають бути чіткими, з’являтися не пізніше першої взаємодії й бути доступними. Верхня межа штрафу за джерелом — до 15 млн € або 3% світового річного обороту.'
      ),
      H('Die Fristen im Überblick', 'The deadlines at a glance', 'Сроки в одном месте', 'Строки в одному місці'),
      {
        ul: [
          t('<strong>2. August 2026:</strong> die meisten Transparenzpflichten gelten.', '<strong>2 August 2026:</strong> most transparency duties apply.', '<strong>2 августа 2026:</strong> большинство требований о прозрачности действуют.', '<strong>2 серпня 2026:</strong> більшість вимог щодо прозорості діють.'),
          t('<strong>2. Dezember 2026:</strong> Übergangsfrist für die maschinenlesbare Kennzeichnung (Abs. 2) bei generativen KI-Systemen, die schon vor dem 2. August 2026 am Markt waren – eingeführt durch das „Digital Omnibus“-Paket. Hintergrund dazu in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Die Welt in 10–20 Jahren</a>.', '<strong>2 December 2026:</strong> transition period for machine-readable marking (para. 2) for generative AI systems already on the market before 2 August 2026 – introduced by the “Digital Omnibus” package. Background in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">The world in 10–20 years</a>.', '<strong>2 декабря 2026:</strong> переходный период для машиночитаемой маркировки (п. 2) генеративных систем ИИ, уже находившихся на рынке до 2 августа 2026, введён пакетом «Digital Omnibus». Контекст — в заметке <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Мир через 10–20 лет</a>.', '<strong>2 грудня 2026:</strong> перехідний період для машинозчитного маркування (п. 2) генеративних систем ШІ, що вже були на ринку до 2 серпня 2026, запроваджений пакетом «Digital Omnibus». Контекст — у нотатці <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Світ через 10–20 років</a>.'),
          t('<strong>20. Juli 2026:</strong> die Kommission veröffentlichte die endgültigen Leitlinien zu Artikel 50.', '<strong>20 July 2026:</strong> the Commission published the final guidelines on Article 50.', '<strong>20 июля 2026:</strong> Комиссия опубликовала итоговые руководящие указания по статье 50.', '<strong>20 липня 2026:</strong> Комісія опублікувала остаточні настанови щодо статті 50.'),
          t('<strong>Juni 2026:</strong> der freiwillige Verhaltenskodex zur Transparenz KI-generierter Inhalte wurde fertiggestellt; Ende Juli hatten laut Quelle rund 190 Organisationen unterzeichnet.', '<strong>June 2026:</strong> the voluntary Code of Practice on transparency of AI-generated content was finalised; by the end of July about 190 organisations had signed, according to the source.', '<strong>Июнь 2026:</strong> завершён добровольный кодекс практики по прозрачности ИИ-контента; к концу июля, по данным источника, его подписали около 190 организаций.', '<strong>Червень 2026:</strong> завершено добровільний кодекс практики щодо прозорості ШІ-контенту; до кінця липня, за даними джерела, його підписали близько 190 організацій.'),
        ],
      },
      H('Checkliste', 'Checklist', 'Чек-лист', 'Чек-лист'),
      {
        ol: [
          t('<strong>Gibt es einen Chat oder Assistenten?</strong> Dann kennzeichnen Sie ihn klar als KI. Der Chat auf dieser Website trägt die Bezeichnung „KI-Assistent“; die Leitlinien legen die Ausnahme „offensichtlich“ streng aus, deshalb ist eine ausdrückliche Kennzeichnung die sichere Wahl.', '<strong>Do you have a chat or assistant?</strong> Then label it clearly as AI. The chat on this website carries the label “AI Assistant”; the guidelines read the “obvious” exception strictly, so an explicit label is the safe choice.', '<strong>Есть чат или ассистент?</strong> Явно обозначьте его как ИИ. Чат на этом сайте назван «AI-ассистент»; руководящие указания трактуют исключение «очевидно» строго, поэтому явная пометка — безопасный выбор.', '<strong>Є чат або асистент?</strong> Чітко позначте його як ШІ. Чат на цьому сайті має назву «AI-асистент»; настанови трактують виняток «очевидно» суворо, тож явна позначка — безпечний вибір.'),
          t('<strong>Erzeugen Sie Bilder, Audio, Video oder Text mit KI für andere?</strong> Prüfen Sie, ob Ihr Anbieter die maschinenlesbare Kennzeichnung liefert, und planen Sie den 2. Dezember 2026 ein.', '<strong>Do you generate images, audio, video or text with AI for others?</strong> Check whether your provider supplies the machine-readable marking and plan for 2 December 2026.', '<strong>Создаёте ли вы с помощью ИИ изображения, аудио, видео или тексты для других?</strong> Проверьте, обеспечивает ли провайдер машиночитаемую маркировку, и заложите 2 декабря 2026.', '<strong>Створюєте ви за допомогою ШІ зображення, аудіо, відео чи тексти для інших?</strong> Перевірте, чи забезпечує провайдер машинозчитне маркування, і заплануйте 2 грудня 2026.'),
          t('<strong>Veröffentlichen Sie KI-Texte zu Themen von öffentlichem Interesse?</strong> Entweder offenlegen – oder ein Mensch mit redaktioneller Verantwortung prüft den Inhalt inhaltlich. Die Leitlinien verlangen laut Quelle eine echte, sachkundige Prüfung, keinen flüchtigen Blick.', '<strong>Do you publish AI text on matters of public interest?</strong> Either disclose it, or have a person with editorial responsibility review the substance. According to the source, the guidelines demand a genuine, knowledgeable review, not a cursory glance.', '<strong>Публикуете ли вы ИИ-тексты на общественно значимые темы?</strong> Либо раскрывайте это, либо пусть человек с редакционной ответственностью проверит содержание. По источнику, руководящие указания требуют настоящей экспертной проверки, а не беглого взгляда.', '<strong>Публікуєте ви ШІ-тексти на суспільно значущі теми?</strong> Або розкривайте це, або нехай людина з редакційною відповідальністю перевірить зміст. За джерелом, настанови вимагають справжньої фахової перевірки, а не побіжного погляду.'),
          t('<strong>Dokumentieren Sie den Ablauf:</strong> Wer prüft, nach welchen Kriterien, und wo ist das festgehalten? Mein Ansatz dazu steht in <a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop</a> und im <a href="{{path:pflegeoasis}}">PflegeOasis-Case</a>.', '<strong>Document the process:</strong> who reviews, by which criteria, and where is it recorded? My approach is in <a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop</a> and the <a href="{{path:pflegeoasis}}">PflegeOasis case</a>.', '<strong>Задокументируйте процесс:</strong> кто проверяет, по каким критериям и где это зафиксировано? Мой подход — в заметке <a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле</a> и в <a href="{{path:pflegeoasis}}">кейсе PflegeOasis</a>.', '<strong>Задокументуйте процес:</strong> хто перевіряє, за якими критеріями й де це зафіксовано? Мій підхід — у нотатці <a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі</a> і в <a href="{{path:pflegeoasis}}">кейсі PflegeOasis</a>.'),
          t('<strong>Prüfen Sie den Verhaltenskodex:</strong> Er ist freiwillig, wurde aber von Kommission und KI-Gremium als geeignet für die Absätze 2, 4 und 5 eingestuft.', '<strong>Look at the Code of Practice:</strong> it is voluntary, but the Commission and the AI Board judged it adequate for paragraphs 2, 4 and 5.', '<strong>Изучите кодекс практики:</strong> он добровольный, но Комиссия и Совет по ИИ признали его достаточным для пунктов 2, 4 и 5.', '<strong>Вивчіть кодекс практики:</strong> він добровільний, але Комісія й Рада з ШІ визнали його достатнім для пунктів 2, 4 і 5.'),
        ],
      },
      H('Quellen und Grenzen', 'Sources and limits', 'Источники и ограничения', 'Джерела та обмеження'),
      {
        ul: [
          t(A('https://www.reedsmith.com/our-insights/blogs/viewpoints/102nfqg/always-read-the-label-eu-ai-transparency-rules-and-questions-that-remain-unanswe/', 'Reed Smith: Always read the label – EU AI transparency rules') + ' (Kanzleibeitrag, Stand Oktober 2026)', A('https://www.reedsmith.com/our-insights/blogs/viewpoints/102nfqg/always-read-the-label-eu-ai-transparency-rules-and-questions-that-remain-unanswe/', 'Reed Smith: Always read the label – EU AI transparency rules') + ' (law-firm article, as of October 2026)', A('https://www.reedsmith.com/our-insights/blogs/viewpoints/102nfqg/always-read-the-label-eu-ai-transparency-rules-and-questions-that-remain-unanswe/', 'Reed Smith: Always read the label – EU AI transparency rules') + ' (материал юрфирмы, на октябрь 2026)', A('https://www.reedsmith.com/our-insights/blogs/viewpoints/102nfqg/always-read-the-label-eu-ai-transparency-rules-and-questions-that-remain-unanswe/', 'Reed Smith: Always read the label – EU AI transparency rules') + ' (матеріал юрфірми, станом на жовтень 2026)'),
          t(A('https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/', 'Usercentrics: Digital Omnibus, Fristen für Hochrisiko-Systeme und Artikel 50') + ' (Sekundärquelle; das Amtsblatt bitte selbst prüfen)', A('https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/', 'Usercentrics: Digital Omnibus, high-risk deadlines and Article 50') + ' (secondary source; please check the Official Journal yourself)', A('https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/', 'Usercentrics: Digital Omnibus, сроки для высокого риска и статья 50') + ' (вторичный источник; Официальный журнал проверьте сами)', A('https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/', 'Usercentrics: Digital Omnibus, строки для високого ризику та стаття 50') + ' (вторинне джерело; Офіційний вісник перевірте самі)'),
        ],
      },
      { callout: NOT_LEGAL },
    ],
  },

  // ───────────────────────────────────────────────────────── Backup 3-2-1
  {
    slug: 'backup-3-2-1-restore-test-homelab',
    date: '2026-10-27',
    tags: ['Backup', '3-2-1-Regel', 'Proxmox', 'vzdump', 'Restore-Test', 'Homelab', 'Uptime Kuma'],
    related: ['homeserver-zugriff-backup', 'nis2-kleine-it-unternehmen', 'proxmox-lxc-aufteilung'],
    title: t(
      'Backup nach der 3-2-1-Regel mit Proxmox: vzdump einrichten und die Wiederherstellung testen',
      'Backups the 3-2-1 way with Proxmox: set up vzdump and test the restore',
      'Бэкап по правилу 3-2-1 в Proxmox: настройка vzdump и проверка восстановления',
      'Бекап за правилом 3-2-1 у Proxmox: налаштування vzdump і перевірка відновлення'
    ),
    description: t(
      'Praxis: Proxmox-Backups mit vzdump, Aufbewahrung 7 täglich / 4 wöchentlich / 3 monatlich, die 3-2-1-Regel und ein sicherer Restore-Test auf einer neuen Container-ID, ohne Produktivsysteme anzufassen.',
      'Practice: Proxmox backups with vzdump, retention 7 daily / 4 weekly / 3 monthly, the 3-2-1 rule and a safe restore test on a new container ID without touching production systems.',
      'Практика: бэкапы Proxmox через vzdump, хранение 7 ежедневных / 4 еженедельных / 3 ежемесячных, правило 3-2-1 и безопасный тест восстановления на новом ID контейнера, не затрагивая прод.',
      'Практика: бекапи Proxmox через vzdump, зберігання 7 щоденних / 4 щотижневих / 3 щомісячних, правило 3-2-1 і безпечний тест відновлення на новому ID контейнера, не чіпаючи прод.'
    ),
    kicker: t('Homelab · Backup · Proxmox', 'Homelab · Backup · Proxmox', 'Homelab · Бэкап · Proxmox', 'Homelab · Бекап · Proxmox'),
    h1: t(
      'Backup nach 3-2-1 und der Restore-Test: Ein Backup zählt erst, wenn es zurückgespielt wurde',
      'Backup the 3-2-1 way and the restore test: a backup only counts once it has been restored',
      'Бэкап по 3-2-1 и тест восстановления: бэкап считается бэкапом, только если его удалось восстановить',
      'Бекап за 3-2-1 і тест відновлення: бекап — це бекап, лише якщо його вдалося відновити'
    ),
    lead: t(
      'Die meisten Backup-Geschichten enden an derselben Stelle: Die Sicherung lief – aber niemand hat je getestet, ob sie sich zurückspielen lässt. So sichere ich meinen Proxmox-Host und so teste ich die Wiederherstellung, ohne etwas Laufendes zu gefährden.',
      'Most backup stories end at the same point: the backup ran – but nobody ever tested whether it can be restored. Here is how I back up my Proxmox host and how I test the restore without endangering anything running.',
      'Большинство историй про бэкапы заканчиваются одинаково: копия делалась, но никто не проверял, можно ли её восстановить. Вот как я бэкаплю свой хост Proxmox и как проверяю восстановление, не рискуя ничем рабочим.',
      'Більшість історій про бекапи закінчуються однаково: копія робилася, але ніхто не перевіряв, чи можна її відновити. Ось як я бекаплю свій хост Proxmox і як перевіряю відновлення, не ризикуючи нічим робочим.'
    ),
    body: [
      H('Die 3-2-1-Regel in einem Satz', 'The 3-2-1 rule in one sentence', 'Правило 3-2-1 одной фразой', 'Правило 3-2-1 одним реченням'),
      P(
        '<strong>Drei</strong> Kopien der Daten (das Original plus zwei Sicherungen), auf <strong>zwei</strong> verschiedenen Speichermedien, davon <strong>eine</strong> an einem anderen Ort. Eine zweite Platte im selben Gerät schützt vor einem Plattendefekt, aber nicht vor Diebstahl, Feuer oder Überspannung – genau das ist die Lücke, die die dritte Zahl schließt. Wie die Serie zu diesem Thema aufgebaut ist, steht in <a href="{{path:homeserver-zugriff-backup}}">Zugriff und Backups im Home-Server</a>.',
        '<strong>Three</strong> copies of the data (the original plus two backups), on <strong>two</strong> different storage media, with <strong>one</strong> in a different location. A second disk in the same machine protects against a disk failure, but not against theft, fire or a power surge – which is exactly the gap the last number closes. How the series covers this is in <a href="{{path:homeserver-zugriff-backup}}">access and backups in the home server</a>.',
        '<strong>Три</strong> копии данных (оригинал и две резервные), на <strong>двух</strong> разных носителях, из них <strong>одна</strong> в другом месте. Второй диск в том же устройстве защищает от поломки диска, но не от кражи, пожара или скачка напряжения — именно эту дыру закрывает последняя цифра. Как эта тема раскрыта в серии, смотрите в статье <a href="{{path:homeserver-zugriff-backup}}">Доступ и бэкапы на домашнем сервере</a>.',
        '<strong>Три</strong> копії даних (оригінал і дві резервні), на <strong>двох</strong> різних носіях, з яких <strong>одна</strong> в іншому місці. Другий диск в тому самому пристрої захищає від поломки диска, але не від крадіжки, пожежі чи стрибка напруги — саме цю прогалину закриває остання цифра. Як цю тему розкрито в серії, дивіться в статті <a href="{{path:homeserver-zugriff-backup}}">Доступ і бекапи на домашньому сервері</a>.'
      ),
      H('Meine Basis: vzdump mit Aufbewahrungsregel', 'My baseline: vzdump with a retention rule', 'Моя база: vzdump с правилом хранения', 'Моя база: vzdump із правилом зберігання'),
      P(
        'Auf dem <a href="{{path:proxmox-lxc-aufteilung}}">Proxmox-Host mit den aufgeteilten LXC-Containern</a> läuft täglich ein Backup auf eine separate Platte, mit sieben täglichen, vier wöchentlichen und drei monatlichen Sicherungen:',
        'On the <a href="{{path:proxmox-lxc-aufteilung}}">Proxmox host with the split LXC containers</a>, a backup runs daily to a separate disk, keeping seven daily, four weekly and three monthly copies:',
        'На <a href="{{path:proxmox-lxc-aufteilung}}">хосте Proxmox с разделёнными LXC-контейнерами</a> каждый день делается бэкап на отдельный диск, с хранением семи ежедневных, четырёх еженедельных и трёх ежемесячных копий:',
        'На <a href="{{path:proxmox-lxc-aufteilung}}">хості Proxmox із розділеними LXC-контейнерами</a> щодня робиться бекап на окремий диск зі зберіганням семи щоденних, чотирьох щотижневих і трьох щомісячних копій:'
      ),
      { code: 'vzdump <CTID> --storage <backup-storage> --mode snapshot \\\n  --prune-backups keep-daily=7,keep-weekly=4,keep-monthly=3' },
      P(
        'Zusätzlich meldet <strong>Uptime Kuma</strong>, wenn ein Dienst ausfällt. Das ersetzt keinen Restore-Test, zeigt aber schnell, dass etwas nicht stimmt. Die Zugänge zum Host sichere ich wie in <a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a> beschrieben.',
        'In addition, <strong>Uptime Kuma</strong> reports when a service goes down. That does not replace a restore test, but it quickly shows when something is wrong. I secure access to the host as described in <a href="{{path:zero-trust-homelab}}">zero trust for the homelab</a>.',
        'Кроме того, <strong>Uptime Kuma</strong> сообщает, если сервис недоступен. Это не заменяет тест восстановления, но быстро показывает, что что-то не так. Доступ к хосту я защищаю так, как описано в заметке <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.',
        'Крім того, <strong>Uptime Kuma</strong> повідомляє, якщо сервіс недоступний. Це не замінює тест відновлення, але швидко показує, що щось не так. Доступ до хоста я захищаю так, як описано в нотатці <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.'
      ),
      H('Der Restore-Test in vier Schritten', 'The restore test in four steps', 'Тест восстановления за четыре шага', 'Тест відновлення за чотири кроки'),
      { callout: t('<strong>Sicherheitsregel:</strong> immer auf eine <em>neue, freie</em> Container-ID zurückspielen, niemals auf die ID eines laufenden Containers. Und das Netzwerk des Test-Containers vor dem Start entfernen, damit er nicht mit dem Original kollidiert.', '<strong>Safety rule:</strong> always restore to a <em>new, unused</em> container ID, never to the ID of a running container. And remove the test container’s network before starting it so it cannot clash with the original.', '<strong>Правило безопасности:</strong> всегда восстанавливайте на <em>новый свободный</em> ID контейнера, никогда на ID работающего. И убирайте сеть у тестового контейнера до запуска, чтобы он не конфликтовал с оригиналом.', '<strong>Правило безпеки:</strong> завжди відновлюйте на <em>новий вільний</em> ID контейнера, ніколи на ID працюючого. І прибирайте мережу в тестового контейнера до запуску, щоб він не конфліктував з оригіналом.') },
      {
        ol: [
          t('<strong>Backup wählen:</strong> Die Archive im Backup-Speicher auflisten und ein aktuelles auswählen.', '<strong>Pick a backup:</strong> list the archives in the backup storage and choose a recent one.', '<strong>Выбрать копию:</strong> посмотреть архивы в хранилище бэкапов и выбрать свежий.', '<strong>Обрати копію:</strong> переглянути архіви в сховищі бекапів і вибрати свіжий.'),
          t('<strong>Auf neue ID zurückspielen:</strong> <code>pct restore 999 &lt;Archiv&gt; --storage &lt;ziel-storage&gt;</code>', '<strong>Restore to a new ID:</strong> <code>pct restore 999 &lt;archive&gt; --storage &lt;target-storage&gt;</code>', '<strong>Восстановить на новый ID:</strong> <code>pct restore 999 &lt;архив&gt; --storage &lt;целевое-хранилище&gt;</code>', '<strong>Відновити на новий ID:</strong> <code>pct restore 999 &lt;архів&gt; --storage &lt;цільове-сховище&gt;</code>'),
          t('<strong>Netzwerk entfernen, starten, prüfen:</strong> <code>pct set 999 -delete net0</code>, dann <code>pct start 999</code>. Läuft der Dienst? Sind die Daten vollständig und aktuell?', '<strong>Remove network, start, check:</strong> <code>pct set 999 -delete net0</code>, then <code>pct start 999</code>. Does the service run? Is the data complete and recent?', '<strong>Убрать сеть, запустить, проверить:</strong> <code>pct set 999 -delete net0</code>, затем <code>pct start 999</code>. Сервис работает? Данные полные и свежие?', '<strong>Прибрати мережу, запустити, перевірити:</strong> <code>pct set 999 -delete net0</code>, потім <code>pct start 999</code>. Сервіс працює? Дані повні й свіжі?'),
          t('<strong>Aufräumen und notieren:</strong> <code>pct stop 999 &amp;&amp; pct destroy 999</code>. Datum, Archiv und Ergebnis festhalten – das ist Ihr Nachweis.', '<strong>Clean up and note it down:</strong> <code>pct stop 999 &amp;&amp; pct destroy 999</code>. Record the date, archive and result – that is your evidence.', '<strong>Убрать и записать:</strong> <code>pct stop 999 &amp;&amp; pct destroy 999</code>. Зафиксируйте дату, архив и результат — это ваше подтверждение.', '<strong>Прибрати й записати:</strong> <code>pct stop 999 &amp;&amp; pct destroy 999</code>. Зафіксуйте дату, архів і результат — це ваше підтвердження.'),
        ],
      },
      P(
        'Für virtuelle Maschinen heißt der Befehl <code>qmrestore</code>, das Prinzip bleibt gleich. Wiederholen Sie den Test in festen Abständen, etwa einmal im Quartal, und nach jeder größeren Änderung am Setup.',
        'For virtual machines the command is <code>qmrestore</code>; the principle stays the same. Repeat the test at fixed intervals, say once a quarter, and after every major change to the setup.',
        'Для виртуальных машин команда называется <code>qmrestore</code>, принцип тот же. Повторяйте тест через фиксированные промежутки, например раз в квартал, и после каждого крупного изменения настройки.',
        'Для віртуальних машин команда називається <code>qmrestore</code>, принцип той самий. Повторюйте тест через фіксовані проміжки, наприклад раз на квартал, і після кожної великої зміни налаштувань.'
      ),
      H('Warum das auch beruflich zählt', 'Why this matters professionally too', 'Почему это важно и профессионально', 'Чому це важливо й професійно'),
      P(
        'Backup und Wiederherstellung gehören zu den Maßnahmen, nach denen Kunden im Rahmen von <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a> bei Dienstleistern fragen können. Ein dokumentierter Restore-Test ist ein konkreter Nachweis. Er gehört bei mir auch zu den Punkten, die in jedem Projekt von <a href="{{path:meistermeld}}">MeisterMeld</a> bis zur Server-Umgebung selbstverständlich sein sollten.',
        'Backup and recovery are among the measures customers may ask service providers about under <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a>. A documented restore test is concrete evidence. For me it is also one of the things that should be a given in every project, from <a href="{{path:meistermeld}}">MeisterMeld</a> to the server environment.',
        'Бэкап и восстановление входят в меры, о которых клиенты могут спрашивать подрядчиков в рамках <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a>. Задокументированный тест восстановления — конкретное подтверждение. Для меня это ещё и то, что должно быть само собой разумеющимся в каждом проекте, от <a href="{{path:meistermeld}}">MeisterMeld</a> до серверной среды.',
        'Бекап і відновлення входять до заходів, про які клієнти можуть питати підрядників у межах <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a>. Задокументований тест відновлення — конкретне підтвердження. Для мене це ще й те, що має бути само собою зрозумілим у кожному проєкті, від <a href="{{path:meistermeld}}">MeisterMeld</a> до серверного середовища.'
      ),
      H('Checkliste', 'Checklist', 'Чек-лист', 'Чек-лист'),
      {
        ul: [
          t('Tägliches Backup auf separate Platte, mit Aufbewahrungsregel', 'Daily backup to a separate disk, with a retention rule', 'Ежедневный бэкап на отдельный диск с правилом хранения', 'Щоденний бекап на окремий диск із правилом зберігання'),
          t('Mindestens eine Kopie an einem anderen Ort', 'At least one copy in a different location', 'Хотя бы одна копия в другом месте', 'Принаймні одна копія в іншому місці'),
          t('Restore-Test auf neuer ID, Ergebnis dokumentiert', 'Restore test on a new ID, result documented', 'Тест восстановления на новом ID, результат задокументирован', 'Тест відновлення на новому ID, результат задокументовано'),
          t('Monitoring mit Benachrichtigung (z. B. Uptime Kuma)', 'Monitoring with notifications (e.g. Uptime Kuma)', 'Мониторинг с уведомлениями (например, Uptime Kuma)', 'Моніторинг зі сповіщеннями (наприклад, Uptime Kuma)'),
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────── Quereinstieg DevOps
  {
    slug: 'quereinstieg-devops-deutschland',
    date: '2026-10-27',
    tags: ['DevOps', 'Quereinstieg', 'Karriere', 'Bewerbung', 'Linux', 'CI/CD', 'Platform Engineering'],
    related: ['welt-nach-der-4-industriellen-revolution', 'ci-cd-nextjs-vps', 'zero-trust-homelab'],
    title: t(
      'Quereinstieg DevOps in Deutschland: Mein Weg und wie ich Fähigkeiten belege',
      'Career change into DevOps in Germany: my path and how I prove my skills',
      'Переход в DevOps в Германии: мой путь и как я подтверждаю навыки',
      'Перехід у DevOps у Німеччині: мій шлях і як я підтверджую навички'
    ),
    description: t(
      'Quereinstieg in DevOps und Platform Engineering in Deutschland: Zahlen zum IT-Fachkräftemangel (Bitkom 2026), der schwierigere Einstieg, und wie ich mit Homelab, CI/CD, Zero Trust und Backups sichtbare Belege schaffe.',
      'Changing careers into DevOps and platform engineering in Germany: figures on the IT skills shortage (Bitkom 2026), the harder entry, and how I build visible proof with a homelab, CI/CD, zero trust and backups.',
      'Переход в DevOps и Platform Engineering в Германии: цифры по дефициту ИТ-кадров (Bitkom 2026), более сложный вход и как я создаю видимые доказательства навыков через homelab, CI/CD, Zero Trust и бэкапы.',
      'Перехід у DevOps і Platform Engineering у Німеччині: цифри щодо дефіциту ІТ-кадрів (Bitkom 2026), складніший вхід і як я створюю видимі докази навичок через homelab, CI/CD, Zero Trust і бекапи.'
    ),
    kicker: t('Karriere · DevOps · Erfahrungsbericht', 'Career · DevOps · Field report', 'Карьера · DevOps · Личный опыт', 'Кар’єра · DevOps · Особистий досвід'),
    h1: t(
      'Quereinstieg DevOps in Deutschland: mein Plan, meine Belege, meine Lücken',
      'Career change into DevOps in Germany: my plan, my evidence, my gaps',
      'Переход в DevOps в Германии: мой план, мои подтверждения, мои пробелы',
      'Перехід у DevOps у Німеччині: мій план, мої підтвердження, мої прогалини'
    ),
    lead: t(
      'Ich suche eine Festanstellung in der IT, mit DevOps und Platform Engineering als bestem Fit. Hier steht offen, was der Markt laut Zahlen hergibt, woher ich komme und womit ich meine Fähigkeiten überprüfbar mache.',
      'I am looking for a permanent IT job, with DevOps and platform engineering as the best fit. This is an open account of what the market offers according to the numbers, where I come from and how I make my skills verifiable.',
      'Я ищу постоянную работу в ИТ, лучше всего подходят DevOps и Platform Engineering. Здесь честно о том, что рынок даёт по цифрам, откуда я иду и чем делаю свои навыки проверяемыми.',
      'Я шукаю постійну роботу в ІТ, найкраще підходять DevOps і Platform Engineering. Тут чесно про те, що ринок дає за цифрами, звідки я йду і чим роблю свої навички такими, що можна перевірити.'
    ),
    body: [
      H('Was der Markt laut Zahlen hergibt', 'What the market offers, by the numbers', 'Что рынок даёт по цифрам', 'Що ринок дає за цифрами'),
      P(
        'Nach der Bitkom-Erhebung vom 3. September 2026 fehlen in Deutschland aktuell 79 000 IT-Fachkräfte – 2025 waren es 109 000, 2023 noch 149 000. Der Mangel hat sich fast halbiert, ist aber nicht verschwunden. Gleichzeitig nutzen 42 % der Unternehmen KI in der IT; nur 10 % davon haben deswegen Stellen gestrichen, 32 % erwarten künftig Kürzungen. Die Einordnung dazu steht ausführlich in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Die Welt in 10–20 Jahren: drei Szenarien</a>.',
        'According to Bitkom’s survey of 3 September 2026, Germany is currently short of 79,000 IT specialists – 109,000 in 2025 and 149,000 in 2023. The shortage has almost halved but has not disappeared. At the same time 42% of companies use AI in IT; only 10% of those have cut jobs because of it, and 32% expect cuts in future. The interpretation is covered in detail in <a href="{{path:welt-nach-der-4-industriellen-revolution}}">The world in 10–20 years: three scenarios</a>.',
        'По опросу Bitkom от 3 сентября 2026 в Германии сейчас не хватает 79 000 ИТ-специалистов — в 2025 было 109 000, в 2023 ещё 149 000. Дефицит почти вдвое сократился, но не исчез. При этом 42% компаний используют ИИ в ИТ; лишь 10% из них из-за этого сократили позиции, 32% ждут сокращений в будущем. Подробный разбор — в заметке <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Мир через 10–20 лет: три сценария</a>.',
        'За опитуванням Bitkom від 3 вересня 2026 у Німеччині зараз бракує 79 000 ІТ-фахівців — у 2025 було 109 000, у 2023 ще 149 000. Дефіцит майже вдвічі скоротився, але не зник. Водночас 42% компаній використовують ШІ в ІТ; лише 10% із них через це скоротили позиції, 32% очікують скорочень надалі. Докладний розбір — у нотатці <a href="{{path:welt-nach-der-4-industriellen-revolution}}">Світ через 10–20 років: три сценарії</a>.'
      ),
      P(
        'Für Berufseinsteiger ist das Bild gemischt: Eine Stanford-Studie („Canaries in the Coal Mine“, Brynjolfsson et al.) fand in den KI-exponiertesten Berufen in den USA einen relativen Beschäftigungsrückgang von 13 % bei 22–25-Jährigen, während Erfahrene stabil blieben. Das sind US-Daten und kein Beweis für eine Ursache – aber ein Hinweis, dass Belege für Können beim Einstieg wichtiger werden.',
        'For newcomers the picture is mixed: a Stanford study (“Canaries in the Coal Mine”, Brynjolfsson et al.) found a relative employment decline of 13% for 22–25-year-olds in the most AI-exposed occupations in the US, while experienced workers stayed stable. That is US data and no proof of causation – but a hint that evidence of skill matters more at entry.',
        'Для начинающих картина смешанная: исследование Стэнфорда («Canaries in the Coal Mine», Brynjolfsson и др.) показало в США относительное снижение занятости на 13% у 22–25-летних в наиболее подверженных ИИ профессиях, тогда как опытные оставались стабильны. Это данные США и не доказательство причины, но намёк на то, что при входе всё важнее подтверждения умений.',
        'Для початківців картина змішана: дослідження Стенфорда («Canaries in the Coal Mine», Brynjolfsson та ін.) показало в США відносне зниження зайнятості на 13% у 22–25-річних у найбільш схильних до ШІ професіях, тоді як досвідчені лишалися стабільними. Це дані США й не доказ причини, але натяк на те, що під час входу дедалі важливіші підтвердження вмінь.'
      ),
      H('Woher ich komme', 'Where I come from', 'Откуда я иду', 'Звідки я йду'),
      {
        ul: [
          t('2011–2017: technischer Leiter (CTO) bei einem Unternehmen in der Ukraine, das Autogas-Umrüstanlagen verbaute', '2011–2017: CTO at a company in Ukraine that installed LPG conversion systems', '2011–2017: технический директор (CTO) компании в Украине, устанавливавшей газобаллонное оборудование', '2011–2017: технічний директор (CTO) компанії в Україні, що встановлювала газобалонне обладнання'),
          t('2017–2022: technischer Support für Apple-Produkte und Business-Kunden (Teleperformance Görlitz, Concentrix Berlin)', '2017–2022: technical support for Apple products and business customers (Teleperformance Görlitz, Concentrix Berlin)', '2017–2022: техническая поддержка продуктов Apple и бизнес-клиентов (Teleperformance Görlitz, Concentrix Berlin)', '2017–2022: технічна підтримка продуктів Apple і бізнес-клієнтів (Teleperformance Görlitz, Concentrix Berlin)'),
          t('2022–2023: DEKRA-zertifizierte Weiterbildung Java Web Development, 960 Stunden (Starta-Institut / Tel-Ran Berlin)', '2022–2023: DEKRA-certified Java web development training, 960 hours (Starta-Institut / Tel-Ran Berlin)', '2022–2023: курс Java Web Development с сертификатом DEKRA, 960 часов (Starta-Institut / Tel-Ran Berlin)', '2022–2023: курс Java Web Development із сертифікатом DEKRA, 960 годин (Starta-Institut / Tel-Ran Berlin)'),
          t('seit 2024: freiberuflicher Entwickler und Gründer von <a href="{{path:meistermeld}}">MeisterMeld</a>', 'since 2024: freelance developer and founder of <a href="{{path:meistermeld}}">MeisterMeld</a>', 'с 2024: фрилансер-разработчик и основатель <a href="{{path:meistermeld}}">MeisterMeld</a>', 'з 2024: фрилансер-розробник і засновник <a href="{{path:meistermeld}}">MeisterMeld</a>'),
        ],
      },
      H('Meine Belege: was man auf dieser Website nachlesen kann', 'My evidence: what you can read on this website', 'Мои подтверждения: что можно прочитать на этом сайте', 'Мої підтвердження: що можна прочитати на цьому сайті'),
      {
        table: {
          head: [t('Fähigkeit', 'Skill', 'Навык', 'Навичка'), t('Beleg', 'Evidence', 'Подтверждение', 'Підтвердження')],
          rows: [
            [t('Linux, Virtualisierung, Container', 'Linux, virtualisation, containers', 'Linux, виртуализация, контейнеры', 'Linux, віртуалізація, контейнери'), t('<a href="{{path:proxmox-lxc-aufteilung}}">Proxmox und LXC aufteilen</a>', '<a href="{{path:proxmox-lxc-aufteilung}}">splitting Proxmox and LXC</a>', '<a href="{{path:proxmox-lxc-aufteilung}}">разделение Proxmox и LXC</a>', '<a href="{{path:proxmox-lxc-aufteilung}}">розділення Proxmox і LXC</a>')],
            [t('CI/CD, Deployment', 'CI/CD, deployment', 'CI/CD, деплой', 'CI/CD, деплой'), t('<a href="{{path:ci-cd-nextjs-vps}}">GitHub Actions, Next.js und VPS</a>', '<a href="{{path:ci-cd-nextjs-vps}}">GitHub Actions, Next.js and VPS</a>', '<a href="{{path:ci-cd-nextjs-vps}}">GitHub Actions, Next.js и VPS</a>', '<a href="{{path:ci-cd-nextjs-vps}}">GitHub Actions, Next.js і VPS</a>')],
            [t('Sicherheit, Zugriff', 'Security, access', 'Безопасность, доступ', 'Безпека, доступ'), t('<a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a>', '<a href="{{path:zero-trust-homelab}}">zero trust for the homelab</a>', '<a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>', '<a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>')],
            [t('Backup, Betrieb', 'Backup, operations', 'Бэкап, эксплуатация', 'Бекап, експлуатація'), t('<a href="{{path:backup-3-2-1-restore-test-homelab}}">Backup nach 3-2-1 und Restore-Test</a>', '<a href="{{path:backup-3-2-1-restore-test-homelab}}">backup 3-2-1 and restore test</a>', '<a href="{{path:backup-3-2-1-restore-test-homelab}}">бэкап 3-2-1 и тест восстановления</a>', '<a href="{{path:backup-3-2-1-restore-test-homelab}}">бекап 3-2-1 і тест відновлення</a>')],
            [t('Produkt von der Idee bis zum Betrieb', 'A product from idea to operation', 'Продукт от идеи до эксплуатации', 'Продукт від ідеї до експлуатації'), t('<a href="{{path:meistermeld}}">MeisterMeld</a> und <a href="{{path:pflegeoasis}}">PflegeOasis</a>', '<a href="{{path:meistermeld}}">MeisterMeld</a> and <a href="{{path:pflegeoasis}}">PflegeOasis</a>', '<a href="{{path:meistermeld}}">MeisterMeld</a> и <a href="{{path:pflegeoasis}}">PflegeOasis</a>', '<a href="{{path:meistermeld}}">MeisterMeld</a> і <a href="{{path:pflegeoasis}}">PflegeOasis</a>')],
            [t('KI mit menschlicher Kontrolle', 'AI under human control', 'ИИ под контролем человека', 'ШІ під контролем людини'), t('<a href="{{path:ki-content-human-in-the-loop}}">KI-Content mit Human-in-the-Loop</a>', '<a href="{{path:ki-content-human-in-the-loop}}">AI content with human-in-the-loop</a>', '<a href="{{path:ki-content-human-in-the-loop}}">ИИ-контент с человеком в цикле</a>', '<a href="{{path:ki-content-human-in-the-loop}}">ШІ-контент із людиною в циклі</a>')],
          ],
        },
      },
      H('Meine Lücken, offen gesagt', 'My gaps, stated openly', 'Мои пробелы, честно', 'Мої прогалини, чесно'),
      P(
        'Ich habe bisher in keinem großen Team mit Rufbereitschaft und Produktionsverantwortung gearbeitet, und mein Betrieb läuft überwiegend im eigenen Homelab und auf einzelnen Servern, nicht in großen Cloud-Umgebungen mit vielen Beteiligten. Das ist die Lücke, die ich in einer Festanstellung schließen möchte – und der Grund, warum ich meine Arbeit so öffentlich dokumentiere. Mit Regelwerken wie <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA</a>, <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a> und <a href="{{path:ki-verordnung-artikel-50-checkliste}}">KI-Verordnung</a> beschäftige ich mich, weil sie den Alltag von DevOps-Teams in Deutschland prägen werden.',
        'So far I have not worked in a large team with on-call duty and production responsibility, and my operations mostly run in my own homelab and on individual servers, not in large cloud environments with many people involved. That is the gap I want to close in a permanent role – and the reason I document my work so publicly. I follow regulations such as the <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA</a>, <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a> and the <a href="{{path:ki-verordnung-artikel-50-checkliste}}">AI Act</a> because they will shape the everyday life of DevOps teams in Germany.',
        'Пока я не работал в большой команде с дежурствами и ответственностью за прод, а моя эксплуатация в основном крутится в собственном homelab и на отдельных серверах, а не в больших облачных средах со множеством участников. Это пробел, который я хочу закрыть на постоянной работе, и причина, по которой я так открыто документирую свою работу. Регуляциями вроде <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA</a>, <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a> и <a href="{{path:ki-verordnung-artikel-50-checkliste}}">регламента об ИИ</a> я занимаюсь, потому что они будут определять будни DevOps-команд в Германии.',
        'Поки що я не працював у великій команді з чергуваннями та відповідальністю за прод, а моя експлуатація здебільшого крутиться у власному homelab і на окремих серверах, а не у великих хмарних середовищах із багатьма учасниками. Це прогалина, яку я хочу закрити на постійній роботі, і причина, чому я так відкрито документую свою роботу. Регуляціями на кшталт <a href="{{path:cra-meldepflicht-11-september-2026}}">CRA</a>, <a href="{{path:nis2-kleine-it-unternehmen}}">NIS2</a> і <a href="{{path:ki-verordnung-artikel-50-checkliste}}">регламенту про ШІ</a> я займаюся, бо вони визначатимуть будні DevOps-команд у Німеччині.'
      ),
      H('Wenn Sie ähnlich starten: drei praktische Schritte', 'If you are starting similarly: three practical steps', 'Если вы стартуете похоже: три практических шага', 'Якщо ви стартуєте схоже: три практичні кроки'),
      {
        ol: [
          t('<strong>Etwas Echtes betreiben,</strong> nicht nur Tutorials nachbauen: ein Server, ein Dienst, Backups, Monitoring.', '<strong>Run something real,</strong> not just tutorial copies: a server, a service, backups, monitoring.', '<strong>Эксплуатируйте что-то настоящее,</strong> а не только повторяйте туториалы: сервер, сервис, бэкапы, мониторинг.', '<strong>Експлуатуйте щось справжнє,</strong> а не лише повторюйте туторіали: сервер, сервіс, бекапи, моніторинг.'),
          t('<strong>Es öffentlich dokumentieren,</strong> mit Entscheidungen und Fehlern. Eine Notiz mit Befehlen und Grenzen sagt mehr als eine Liste von Schlagwörtern.', '<strong>Document it publicly,</strong> with decisions and mistakes. A note with commands and limits says more than a list of buzzwords.', '<strong>Документируйте публично,</strong> с решениями и ошибками. Заметка с командами и ограничениями говорит больше, чем список модных слов.', '<strong>Документуйте публічно,</strong> із рішеннями й помилками. Нотатка з командами й обмеженнями каже більше, ніж список модних слів.'),
          t('<strong>Die Rahmenbedingungen kennen,</strong> unter denen Teams arbeiten: Sicherheit, Meldepflichten, Nachweise.', '<strong>Know the framework teams work under:</strong> security, reporting duties, evidence.', '<strong>Знайте рамки, в которых работают команды:</strong> безопасность, обязанности по уведомлению, подтверждения.', '<strong>Знайте рамки, у яких працюють команди:</strong> безпека, обов’язки повідомляти, підтвердження.'),
        ],
      },
      H('Quellen', 'Sources', 'Источники', 'Джерела'),
      {
        ul: [
          t(A('https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert', 'Bitkom: IT-Fachkräftemangel in den letzten drei Jahren halbiert') + ' (3. September 2026)', A('https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert', 'Bitkom: IT skills shortage halved in three years') + ' (3 September 2026)', A('https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert', 'Bitkom: дефицит ИТ-кадров за три года сократился вдвое') + ' (3 сентября 2026)', A('https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert', 'Bitkom: дефіцит ІТ-кадрів за три роки скоротився вдвічі') + ' (3 вересня 2026)'),
          t('Brynjolfsson et al., „Canaries in the Coal Mine“ (Stanford, SIEPR): US-Daten, kein Kausalbeweis.', 'Brynjolfsson et al., “Canaries in the Coal Mine” (Stanford, SIEPR): US data, no proof of causation.', 'Brynjolfsson и др., «Canaries in the Coal Mine» (Стэнфорд, SIEPR): данные США, не доказательство причины.', 'Brynjolfsson та ін., «Canaries in the Coal Mine» (Стенфорд, SIEPR): дані США, не доказ причини.'),
        ],
      },
    ],
  },
];
