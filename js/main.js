// main.js - Main application logic

/* ========== CURSOR ========== */
const cur = document.getElementById('cur');
const cring = document.getElementById('cring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = (mx - 4) + 'px';
  cur.style.top = (my - 4) + 'px';
});

(function loop() {
  rx += (mx - rx - 20) * 0.1;
  ry += (my - ry - 20) * 0.1;
  cring.style.left = rx + 'px';
  cring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();

/* ========== NAVIGATION ========== */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 60);
});

function toggleMob() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMob() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('navLinks').classList.remove('open');
}

/* ========== PARALLAX ========== */
document.addEventListener('mousemove', e => {
  const xp = (e.clientX / innerWidth - 0.5) * 24;
  const yp = (e.clientY / innerHeight - 0.5) * 24;
  document.getElementById('hglow').style.transform = `translate(calc(-50% + ${xp}px), calc(-50% + ${yp}px))`;
  const hn = document.querySelector('.hero-name');
  if (hn) hn.style.transform = `translate(${xp * 0.1}px, ${yp * 0.1}px)`;
  const av = document.querySelector('.avatar-outer');
  if (av) av.style.transform = `translate(${xp * -0.08}px, ${yp * -0.08}px)`;
});

/* ========== ORBIT DOTS ========== */
const ow = document.getElementById('orbitWrap');
const orbits = [
  { r: 222, size: 8, color: '#4dffb4', dur: 6, delay: 0 },
  { r: 240, size: 6, color: '#ff6b6b', dur: 9, delay: -3 },
  { r: 232, size: 5, color: '#7c6fff', dur: 12, delay: -6 }
];

orbits.forEach(o => {
  const dot = document.createElement('div');
  dot.style.cssText = `position:absolute;width:${o.size}px;height:${o.size}px;border-radius:50%;background:${o.color};top:50%;left:50%;box-shadow:0 0 8px ${o.color};`;
  ow.appendChild(dot);
  let start = null;
  function anim(ts) {
    if (!start) start = ts + o.delay * 1000;
    const t = (ts - start) / 1000;
    const angle = t * (2 * Math.PI / o.dur);
    const x = Math.cos(angle) * o.r;
    const y = Math.sin(angle) * o.r;
    dot.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
});

/* ========== TYPEWRITER ========== */
const phrasesDE = ['AI Fullstack Developer', 'Python · React · SvelteKit', 'KI-Produkte aus Dresden', 'FastAPI · OpenAI · LangChain'];
const phrasesEN = ['AI Fullstack Developer', 'Python · React · SvelteKit', 'AI Products from Dresden', 'FastAPI · OpenAI · LangChain'];
const phrasesRU = ['AI Fullstack Developer', 'Python · React · SvelteKit', 'AI-продукты из Дрездена', 'FastAPI · OpenAI · LangChain'];
const phrasesUA = ['AI Fullstack Developer', 'Python · React · SvelteKit', 'AI-продукти з Дрездена', 'FastAPI · OpenAI · LangChain'];

let currentPhrases = phrasesDE;
let pi = 0, ci = 0, del = false, wait = 0;
const tel = document.getElementById('ttext');
let twTimer = null;

function tw() {
  if (twTimer) clearTimeout(twTimer);
  if (document.hidden) {
    twTimer = setTimeout(tw, 200);
    return;
  }
  if (wait > 0) {
    wait--;
    twTimer = setTimeout(tw, 40);
    return;
  }
  const ph = currentPhrases[pi];
  if (!del) {
    tel.textContent = ph.slice(0, ++ci);
    if (ci === ph.length) {
      del = true;
      wait = 50;
    }
    twTimer = setTimeout(tw, 65);
  } else {
    tel.textContent = ph.slice(0, --ci);
    if (ci === 0) {
      del = false;
      pi = (pi + 1) % currentPhrases.length;
      wait = 8;
    }
    twTimer = setTimeout(tw, 30);
  }
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    if (twTimer) clearTimeout(twTimer);
    wait = 0;
    twTimer = setTimeout(tw, 100);
  }
});

twTimer = setTimeout(tw, 600);

/* ========== SCROLL REVEAL ========== */
const revealClasses = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale'];
revealClasses.forEach(cls => {
  document.querySelectorAll('.' + cls).forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.08 }).observe(el);
  });
});

/* ========== FOOTER YEAR AUTO UPDATE ========== */
function updateFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
document.addEventListener('DOMContentLoaded', updateFooterYear);

/* ========== COUNTERS ========== */
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(el => {
        const target = +el.dataset.target;
        let count = 0;
        const interval = setInterval(() => {
          count += target / 60;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          el.textContent = Math.floor(count) + (target >= 6 ? '+' : '');
        }, 22);
      });
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
statsObserver.observe(document.querySelector('.stats-grid'));

/* ========== PROJECT FILTERS ========== */
document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pcard').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.status !== filter);
    });
  });
});

/* ========== CONTACT FORM ========== */
document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = document.getElementById('formBtn');
  btn.textContent = 'Senden...';
  btn.disabled = true;
  try {
    await fetch('https://formspree.io/f/xvzwnayw', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' }
    });
  } catch (err) { }
  document.getElementById('formSuccess').classList.add('show');
  e.target.reset();
  btn.textContent = document.documentElement.lang === 'de' ? 'Nachricht senden →' : 'Send Message →';
  btn.disabled = false;
});

/* ========== AI CHAT ========== */
let chatOpen = false;
const aiChat = document.getElementById('ai-chat');

aiChat.classList.add('collapsed');
document.getElementById('chatTog').textContent = '+';

setTimeout(() => {
  if (!chatOpen) {
    chatOpen = true;
    aiChat.classList.remove('collapsed');
    document.getElementById('chatTog').textContent = '−';
    aiChat.classList.add('popping');
    setTimeout(() => aiChat.classList.remove('popping'), 500);
  }
}, 2 * 60 * 1000);

function toggleChat() {
  chatOpen = !chatOpen;
  aiChat.classList.toggle('collapsed', !chatOpen);
  document.getElementById('chatTog').textContent = chatOpen ? '−' : '+';
}

const chatBody = document.getElementById('chatBody');
const chatHistory = [];

const chatTitles = {
  de: 'Frag AI über Serge',
  en: 'Ask AI about Serge',
  ru: 'Спросите AI о Сергее',
  ua: 'Запитай AI про Сергія'
};

const chatPlaceholders = {
  de: 'Frag über Projekte, Skills...',
  en: 'Ask about projects, skills...',
  ru: 'Спроси о проектах, навыках...',
  ua: 'Запитай про проєкти, навички...'
};

const chatSuggestions = {
  de: ['Verfügbar?', 'Was kostet ein Projekt?', 'Wie schnell?', 'Erfahrung & Portfolio?', 'Zusammenarbeit starten?', 'Tech-Stack?'],
  en: ['Available?', 'Project cost?', 'How fast?', 'Experience & portfolio?', 'How to start?', 'Tech stack?'],
  ru: ['Доступен?', 'Сколько стоит проект?', 'Как быстро?', 'Опыт и портфолио?', 'Как начать?', 'Стек технологий?'],
  ua: ['Доступний?', 'Скільки коштує проєкт?', 'Як швидко?', 'Досвід і портфоліо?', 'Як розпочати?', 'Стек технологій?']
};

function updateChatLang(lang) {
  const titleEl = document.getElementById('chatTitle');
  const inputEl = document.getElementById('chatinput');
  if (titleEl) titleEl.textContent = chatTitles[lang] || chatTitles.en;
  if (inputEl) inputEl.placeholder = chatPlaceholders[lang] || chatPlaceholders.en;
  renderSuggestions(lang);
}

function renderSuggestions(lang) {
  const wrap = document.getElementById('chatSuggestions');
  if (!wrap) return;
  const sugs = chatSuggestions[lang] || chatSuggestions.en;
  wrap.innerHTML = sugs.map(s =>
    `<button class="chat-sug" onclick="sendSuggestion('${s}')">${s}</button>`
  ).join('');
}

function sendSuggestion(text) {
  document.getElementById('chatinput').value = text;
  sendChat();
}

function addMsg(text, role) {
  const d = document.createElement('div');
  d.className = 'cmsg ' + (role === 'user' ? 'u' : 'a');
  d.textContent = text;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
  return d;
}

let chatWelcomeAdded = false;

function initChatWelcome(lang) {
  if (chatWelcomeAdded) chatBody.innerHTML = '';
  chatWelcomeAdded = true;
  const welcomeMsgs = {
    de: 'Hallo! Frag mich alles über Serge — Projekte, Skills, Verfügbarkeit.',
    en: 'Hi! Ask me anything about Serge — projects, skills, availability.',
    ru: 'Привет! Спроси меня о Сергее — проекты, навыки, доступность.',
    ua: 'Привіт! Запитай мене про Сергія — проєкти, навички, доступність.'
  };
  addMsg(welcomeMsgs[lang] || welcomeMsgs.en, 'a');
  updateChatLang(lang);
  const titleEl = document.getElementById('chatTitle');
  const inputEl = document.getElementById('chatinput');
  if (titleEl && chatTitles[lang]) titleEl.textContent = chatTitles[lang];
  if (inputEl && chatPlaceholders[lang]) inputEl.placeholder = chatPlaceholders[lang];
}

async function sendChat() {
  const input = document.getElementById('chatinput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const sugsWrap = document.getElementById('chatSuggestions');
  if (sugsWrap) sugsWrap.style.display = 'none';
  addMsg(text, 'user');
  chatHistory.push({ role: 'user', content: text });
  const typing = addMsg('...', 'a');
  try {
    const currentLang = localStorage.getItem('lang') || 'de';
    const res = await fetch('https://zabolotny.szabolotnyi777.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang: currentLang, messages: chatHistory })
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, something went wrong.';
    typing.textContent = reply;
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (err) {
    typing.textContent = 'Connection error.';
  }
}