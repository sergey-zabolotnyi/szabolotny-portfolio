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
const phrasesDE = ['KI-Prototyp in 3–6 Wochen — von der Idee bis zum Launch!', 'AI Fullstack Developer', 'Python · React · SvelteKit', 'KI-Produkte aus Dresden', 'FastAPI · OpenAI · LangChain'];
const phrasesEN = ['AI prototype development in 3–6 weeks — from idea to launch!', 'AI Fullstack Developer', 'Python · React · SvelteKit', 'AI Products from Dresden', 'FastAPI · OpenAI · LangChain'];
const phrasesRU = ['Создание AI-прототипа за 3–6 недель — от идеи до запуска!', 'AI Fullstack Developer', 'Python · React · SvelteKit', 'AI-продукты из Дрездена', 'FastAPI · OpenAI · LangChain'];
const phrasesUA = ['Створення AI-прототипу за 3–6 тижнів — від ідеї до запуску!', 'AI Fullstack Developer', 'Python · React · SvelteKit', 'AI-продукти з Дрездена', 'FastAPI · OpenAI · LangChain'];

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
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('formBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Senden...';
    btn.disabled = true;
    
    // Получаем данные из формы
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const message = document.getElementById('formMessage').value;
    const currentLang = localStorage.getItem('lang') || 'de';
    
    // Маппинг языков для API
    const langMap = { de: 'de', en: 'en', ru: 'ru', ua: 'ua' };
    const apiLang = langMap[currentLang] || 'de';
    
    try {
      const response = await fetch('https://api.zabolotny.de/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, lang: apiLang })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        document.getElementById('formSuccess').classList.add('show');
        contactForm.reset();
      } else {
        alert('Fehler beim Senden: ' + (data.detail || 'Unbekannter Fehler'));
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    }
    
    btn.textContent = originalText;
    btn.disabled = false;
    
    // Скрыть сообщение об успехе через 5 секунд
    setTimeout(() => {
      document.getElementById('formSuccess').classList.remove('show');
    }, 5000);
  });
}

/* ========== AI CHAT ========== */
let chatOpen = false;
let autoCloseTimer = null;
let autoOpenTimer = null;
const aiChat = document.getElementById('ai-chat');

// Start with collapsed chat
aiChat.classList.add('collapsed');
document.getElementById('chatTog').textContent = '+';

// Function to auto open chat after 120 seconds
function scheduleAutoOpen() {
  if (autoOpenTimer) clearTimeout(autoOpenTimer);
  autoOpenTimer = setTimeout(() => {
    if (!chatOpen && !document.hidden) {
      chatOpen = true;
      aiChat.classList.remove('collapsed');
      document.getElementById('chatTog').textContent = '−';
      aiChat.classList.add('popping');
      setTimeout(() => aiChat.classList.remove('popping'), 500);
      
      // Start auto-close timer after opening
      scheduleAutoClose();
    }
  }, 120 * 1000); // 120 seconds
}

// Function to auto close chat after 5 minutes
function scheduleAutoClose() {
  if (autoCloseTimer) clearTimeout(autoCloseTimer);
  autoCloseTimer = setTimeout(() => {
    if (chatOpen) {
      chatOpen = false;
      aiChat.classList.add('collapsed');
      document.getElementById('chatTog').textContent = '+';
      
      // Re-schedule auto-open for next session
      scheduleAutoOpen();
    }
  }, 5 * 60 * 1000); // 5 minutes
}

// Function to reset timers when user manually interacts
function resetChatTimers() {
  // Clear existing timers
  if (autoOpenTimer) clearTimeout(autoOpenTimer);
  if (autoCloseTimer) clearTimeout(autoCloseTimer);
  
  // If chat is open, schedule auto-close again
  if (chatOpen) {
    scheduleAutoClose();
  } else {
    // If chat is closed, schedule auto-open again
    scheduleAutoOpen();
  }
}

// Modified toggleChat function
function toggleChat() {
  chatOpen = !chatOpen;
  aiChat.classList.toggle('collapsed', !chatOpen);
  document.getElementById('chatTog').textContent = chatOpen ? '−' : '+';
  
  // Reset timers on manual toggle
  resetChatTimers();
}

// Start the auto-open timer when page loads
scheduleAutoOpen();

// Also start auto-open when page becomes visible again
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    scheduleAutoOpen();
  }
});

// Rest of your existing chat code continues here...
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

/* ============================================
   MOBILE CHAT - AUTO COLLAPSE ON INACTIVITY
   ============================================ */

let mobileChatTimeout;

function initMobileChatBehavior() {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;
  
  const chat = document.getElementById('ai-chat');
  const input = document.getElementById('chatinput');
  
  if (!chat) return;
  
  function resetMobileTimer() {
    clearTimeout(mobileChatTimeout);
    // Check if chat is open and input is not focused
    mobileChatTimeout = setTimeout(() => {
      // Only collapse if chat is open and input is not active
      const isInputFocused = document.activeElement === input;
      if (chatOpen && !isInputFocused) {
        toggleChat(); // Collapse the chat
        // Reset main timers after mobile collapse
        resetChatTimers();
      }
    }, 8000); // 8 seconds of inactivity
  }
  
  function handleUserActivity() {
    resetMobileTimer();
    // Also reset main timers on user activity
    resetChatTimers();
  }
  
  // Add event listeners
  chat.addEventListener('click', handleUserActivity);
  chat.addEventListener('touchstart', handleUserActivity);
  
  if (input) {
    input.addEventListener('focus', handleUserActivity);
    input.addEventListener('blur', () => {
      // Start timer when input loses focus
      resetMobileTimer();
    });
  }
  
  // Also track scroll and touch on body
  document.body.addEventListener('touchstart', handleUserActivity);
  window.addEventListener('scroll', handleUserActivity);
  
  // Initial timer
  resetMobileTimer();
}

// Run on load and on window resize (in case orientation changes)
document.addEventListener('DOMContentLoaded', initMobileChatBehavior);
window.addEventListener('resize', () => {
  // Re-initialize on resize to handle orientation change
  clearTimeout(mobileChatTimeout);
  initMobileChatBehavior();
});