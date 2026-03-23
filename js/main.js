// main.js - Основная логика приложения

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

twTimer = setTimeout(tw, 1200);

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

/* ========== COUNTERS ========== */
new IntersectionObserver(entries => {
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
      e.unobserve(e.target);
    }
  });
}, { threshold: 0.3 }).observe(document.querySelector('.stats-grid'));

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
});

/* ========== AI CHAT ========== */
let chatOpen = true;
const chatBody = document.getElementById('chatBody');
const chatHistory = [];

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('ai-chat').classList.toggle('collapsed', !chatOpen);
  document.getElementById('chatTog').textContent = chatOpen ? '−' : '+';
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
    ru: 'Привет! Спроси меня о Серге — проекты, навыки, доступность.',
    ua: 'Привіт! Запитай мене про Сергія — проєкти, навички, доступність.'
  };
  addMsg(welcomeMsgs[lang] || welcomeMsgs.en, 'a');
}

async function sendChat() {
  const input = document.getElementById('chatinput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMsg(text, 'user');
  chatHistory.push({ role: 'user', content: text });
  const typing = addMsg('...', 'a');
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: `You are a helpful assistant on Serge Zabolotny's portfolio website. Serge is an AI Fullstack Developer based in Dresden, Germany. Stack: Python, FastAPI, React, SvelteKit, OpenAI API, LangChain, Groq, PostgreSQL, Supabase, Docker. Projects: Smart-Letter.net (live), GeschenkFox.de (live), HandwerkerAI (in dev). 10+ years experience, ex-CTO. Open to full-time and freelance. Answer in 2-3 sentences max.`,
        messages: chatHistory
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Sorry, something went wrong.';
    typing.textContent = reply;
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (err) {
    typing.textContent = 'Connection error — API key needed on backend.';
  }
}