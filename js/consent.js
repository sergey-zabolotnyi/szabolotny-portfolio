// consent.js — loads Google Analytics only after explicit opt-in.
// Required under TTDSG §25 / DSGVO: non-essential tracking needs prior consent,
// it cannot just load silently on page visit.
(function () {
  var CONSENT_KEY = 'zbn-analytics-consent'; // 'granted' | 'denied'
  var GA_ID = 'G-BBN83KRBK2';

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
  }

  function showBanner() {
    var el = document.getElementById('cookieConsent');
    if (el) el.classList.add('is-visible');
  }
  function hideBanner() {
    var el = document.getElementById('cookieConsent');
    if (el) el.classList.remove('is-visible');
  }

  var consent = getConsent();
  if (consent === 'granted') loadGA();

  function init() {
    if (!consent) showBanner();

    var accept = document.getElementById('cookieAccept');
    var decline = document.getElementById('cookieDecline');
    if (accept) accept.addEventListener('click', function () {
      setConsent('granted');
      loadGA();
      hideBanner();
    });
    if (decline) decline.addEventListener('click', function () {
      setConsent('denied');
      hideBanner();
    });

    // Delegated fallback on document, in case the buttons get re-rendered
    // by other scripts (e.g. language switch) after this runs.
    document.addEventListener('click', function (e) {
      var target = e.target.closest && e.target.closest('#cookieAccept, #cookieDecline');
      if (!target) return;
      if (target.id === 'cookieAccept') {
        setConsent('granted');
        loadGA();
      } else {
        setConsent('denied');
      }
      hideBanner();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed so the footer "Cookie-Einstellungen" link can reopen the banner
  window.reopenCookieBanner = function () {
    showBanner();
  };
})();
