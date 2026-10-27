// UI strings, sector rates and scenarios for the AI routine-work calculator (note "ki-rechner-routinearbeit").
// Sector hourly labour costs: Destatis press release 148/2026 (29.04.2026), Euro per hour worked in 2025 (estimate).
// Scenario shares come from the studies listed in the article (see SCENARIOS) – they are inputs for a model, not forecasts.

const t = (de, en, ru, ua) => ({ de, en, ru, ua });

export const SECTORS = [
  { rate: 45.0, label: t('Gesamtwirtschaft (Durchschnitt)', 'Whole economy (average)', 'Вся экономика (среднее)', 'Уся економіка (середнє)') },
  { rate: 49.5, label: t('Verarbeitendes Gewerbe', 'Manufacturing', 'Обрабатывающая промышленность', 'Переробна промисловість') },
  { rate: 39.6, label: t('Baugewerbe', 'Construction', 'Строительство', 'Будівництво') },
  { rate: 37.2, label: t('Handel und Kfz-Reparatur', 'Trade and vehicle repair', 'Торговля и ремонт автомобилей', 'Торгівля та ремонт автомобілів') },
  { rate: 35.8, label: t('Verkehr und Lagerei', 'Transport and storage', 'Транспорт и складирование', 'Транспорт і складування') },
  { rate: 27.4, label: t('Gastgewerbe', 'Accommodation and food services', 'Гостиницы и общепит', 'Готелі та харчування') },
  { rate: 58.5, label: t('Information und Kommunikation', 'Information and communication', 'Информация и связь', 'Інформація та зв’язок') },
  { rate: 69.7, label: t('Finanz- und Versicherungsdienstleistungen', 'Financial and insurance services', 'Финансы и страхование', 'Фінанси та страхування') },
  { rate: 60.4, label: t('Freiberufliche, wissenschaftliche, technische Dienstleistungen', 'Professional, scientific and technical services', 'Профессиональные, научные и технические услуги', 'Професійні, наукові та технічні послуги') },
  { rate: 33.2, label: t('Sonstige wirtschaftliche Dienstleistungen', 'Other business services', 'Прочие деловые услуги', 'Інші ділові послуги') },
  { rate: 41.7, label: t('Gesundheits- und Sozialwesen', 'Health and social work', 'Здравоохранение и соцработа', 'Охорона здоров’я та соцробота') },
];

// share of routine hours that is saved
export const SCENARIOS = [
  { pct: 0.028, name: t('Vorsichtig', 'Cautious', 'Осторожный', 'Обережний'), src: 'Humlum & Vestergaard' },
  { pct: 0.14, name: t('Typisch', 'Typical', 'Типичный', 'Типовий'), src: 'Brynjolfsson et al.' },
  { pct: 0.25, name: t('Optimistisch', 'Optimistic', 'Оптимистичный', 'Оптимістичний'), src: 'Dell’Acqua et al.' },
];

export const CALC_UI = {
  de: {
    employees: 'Anzahl Mitarbeitende', hours: 'Routinestunden pro Person und Woche', hoursHint: 'Zeit für wiederkehrende Aufgaben wie Texte, Zusammenfassungen, E-Mails, Berichte',
    sector: 'Branche (Stundenkosten laut Destatis)', rate: 'Arbeitskosten pro Stunde (€)', tool: 'KI-Werkzeug pro Person und Monat (€)', toolHint: 'Eigene Annahme – bitte anpassen',
    once: 'Einmalige Kosten für Einführung und Schulung (€)', onceHint: 'Eigene Annahme – bitte anpassen',
    result: 'Ergebnis', scenario: 'Szenario', share: 'Anteil gespart', saved: 'Stunden gespart / Monat', value: 'Wert / Monat', net: 'Netto / Monat (nach Werkzeugkosten)', year1: 'Netto im 1. Jahr', payback: 'Amortisation',
    months: 'Monate', never: 'nicht erreicht', noscript: 'Der Rechner benötigt JavaScript.',
    note: 'Modellrechnung, keine Prognose. Grundlage: 46 Arbeitswochen pro Jahr; der Anteil „gespart“ wird auf Ihre Routinestunden angewendet.',
  },
  en: {
    employees: 'Number of employees', hours: 'Routine hours per person per week', hoursHint: 'Time spent on repetitive tasks such as drafts, summaries, emails, reports',
    sector: 'Sector (hourly cost per Destatis)', rate: 'Labour cost per hour (€)', tool: 'AI tool per person per month (€)', toolHint: 'My own assumption – please adjust',
    once: 'One-off cost for rollout and training (€)', onceHint: 'My own assumption – please adjust',
    result: 'Result', scenario: 'Scenario', share: 'Share saved', saved: 'Hours saved / month', value: 'Value / month', net: 'Net / month (after tool costs)', year1: 'Net in year 1', payback: 'Payback',
    months: 'months', never: 'not reached', noscript: 'The calculator needs JavaScript.',
    note: 'A model, not a forecast. Basis: 46 working weeks per year; the share saved is applied to your routine hours.',
  },
  ru: {
    employees: 'Число сотрудников', hours: 'Часов рутины на человека в неделю', hoursHint: 'Время на повторяющиеся задачи: тексты, резюме, письма, отчёты',
    sector: 'Отрасль (стоимость часа по данным Destatis)', rate: 'Стоимость часа труда (€)', tool: 'ИИ-инструмент на человека в месяц (€)', toolHint: 'Моё допущение — измените под себя',
    once: 'Разовые расходы на внедрение и обучение (€)', onceHint: 'Моё допущение — измените под себя',
    result: 'Результат', scenario: 'Сценарий', share: 'Доля экономии', saved: 'Часов сэкономлено / мес.', value: 'Ценность / мес.', net: 'Чистая выгода / мес. (после затрат на инструмент)', year1: 'Чистая выгода за 1-й год', payback: 'Окупаемость',
    months: 'мес.', never: 'не достигается', noscript: 'Для калькулятора нужен JavaScript.',
    note: 'Модельный расчёт, а не прогноз. Основа: 46 рабочих недель в году; доля экономии применяется к вашим часам рутины.',
  },
  ua: {
    employees: 'Кількість співробітників', hours: 'Годин рутини на людину на тиждень', hoursHint: 'Час на повторювані завдання: тексти, резюме, листи, звіти',
    sector: 'Галузь (вартість години за даними Destatis)', rate: 'Вартість години праці (€)', tool: 'ШІ-інструмент на людину на місяць (€)', toolHint: 'Моє припущення — змініть під себе',
    once: 'Разові витрати на впровадження та навчання (€)', onceHint: 'Моє припущення — змініть під себе',
    result: 'Результат', scenario: 'Сценарій', share: 'Частка економії', saved: 'Годин заощаджено / міс.', value: 'Цінність / міс.', net: 'Чиста вигода / міс. (після витрат на інструмент)', year1: 'Чиста вигода за 1-й рік', payback: 'Окупність',
    months: 'міс.', never: 'не досягається', noscript: 'Для калькулятора потрібен JavaScript.',
    note: 'Модельний розрахунок, а не прогноз. Основа: 46 робочих тижнів на рік; частка економії застосовується до ваших годин рутини.',
  },
};
