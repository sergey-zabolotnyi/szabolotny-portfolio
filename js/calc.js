// Calculator for the note "ki-rechner-routinearbeit": pure client-side, nothing is sent anywhere.
(function () {
  const root = document.getElementById('calc');
  if (!root) return;
  const $ = (id) => root.querySelector('#' + id);
  const loc = (document.documentElement.lang || 'de') === 'uk' ? 'uk-UA' : document.documentElement.lang || 'de';
  const money = new Intl.NumberFormat(loc, { style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 });
  const num1 = new Intl.NumberFormat(loc, { maximumFractionDigits: 1 });
  const WEEKS = 46; // working weeks per year (holidays, vacation, sick leave deducted)
  const scenarios = Array.from(root.querySelectorAll('[data-scenario]'));
  const val = (id) => Math.max(0, parseFloat($(id).value.replace(',', '.')) || 0);

  function calc() {
    const n = val('c-n'), h = val('c-h'), rate = val('c-rate'), tool = val('c-tool'), once = val('c-once');
    const routineMonth = (n * h * WEEKS) / 12;
    scenarios.forEach((row) => {
      const pct = parseFloat(row.dataset.scenario);
      const saved = routineMonth * pct;
      const value = saved * rate;
      const net = value - n * tool;
      const year1 = net * 12 - once;
      const payback = once > 0 ? (net > 0 ? num1.format(once / net) + ' ' + root.dataset.months : root.dataset.never) : net > 0 ? '0 ' + root.dataset.months : root.dataset.never;
      row.querySelector('[data-o=saved]').textContent = num1.format(saved);
      row.querySelector('[data-o=value]').textContent = money.format(value);
      row.querySelector('[data-o=net]').textContent = money.format(net);
      row.querySelector('[data-o=year1]').textContent = money.format(year1);
      row.querySelector('[data-o=payback]').textContent = payback;
    });
  }

  $('c-sector').addEventListener('change', function () {
    $('c-rate').value = this.value;
    calc();
  });
  root.addEventListener('input', calc);
  calc();
})();
