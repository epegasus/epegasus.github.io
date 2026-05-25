/**
 * Portfolio FAQ Assistant — local, no API keys required
 */
(function () {
  'use strict';

  const trigger = document.getElementById('chatbot-trigger');
  const windowEl = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const messagesEl = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send-btn');
  const suggestionsEl = document.getElementById('chatbot-suggestions');

  const RESUME_URL = 'assets/Sohaib_Ahmed_Senior_Android_Engineer_Resume.pdf';

  const SUGGESTIONS = [
    'What is your experience?',
    'Tell me about your Play Store apps',
    'Where can I download the resume?',
    'How can I contact you?'
  ];

  const FAQ = [
    {
      keys: ['experience', 'years', 'background', 'who are you', 'about you'],
      reply: 'Sohaib is a Senior Android Engineer & Technical Lead with 5+ years of experience. He leads Android at HyperSoft Inc. (since Mar 2022), currently as Technical Lead since Jul 2023, mentoring 20+ engineers and owning architecture for apps with 75M+ cumulative installs.'
    },
    {
      keys: ['install', 'download', 'million', 'play store', 'apps', 'products', 'photo touch', 'translator', 'qibla', 'video', 'remote', 'recovery'],
      reply: 'Play Store products: Photo Touch AI Editor (10M+, 4.4★), All Languages Translator (50M+ on store, 58M+ lifetime), All Video Downloader & Saver (10M+), Recover Deleted Messages (1M+), Universal TV Remote (1M+), Qibla Compass: Mecca Finder (100K+). Links are on the Products section of the portfolio.'
    },
    {
      keys: ['architecture', 'mvvm', 'mvi', 'clean', 'kotlin', 'compose', 'tech', 'stack', 'skills'],
      reply: 'Core stack: Kotlin, Jetpack Compose, Material 3, MVVM/MVI, multi-module Clean Architecture, Room, Retrofit, Coroutines/Flow, Firebase, AdMob, Play Billing. He evolved company architecture from MVC → MVVM → MVI with shared base modules.'
    },
    {
      keys: ['lead', 'team', 'mentor', 'technical lead', 'hypersoft'],
      reply: 'At HyperSoft he led 20+ Android engineers, grew the team from 4 to 25+, ran code reviews and technical training, and enforced company-wide engineering standards. Maintains 99.99% crash-free rates on major apps via Crashlytics and proactive triage.'
    },
    {
      keys: ['contact', 'email', 'phone', 'hire', 'reach', 'linkedin'],
      reply: 'Email: sohaibmughal93@gmail.com · Phone: +92 320 6313745 · LinkedIn: linkedin.com/in/epegasus · GitHub: github.com/epegasus · Location: Islamabad / Rawalpindi, Pakistan.'
    },
    {
      keys: ['resume', 'cv', 'download resume', 'pdf'],
      reply: 'Download the latest resume (Feb 2026): ' + RESUME_URL + ' — or open resume.html on this site to view it in the browser.'
    },
    {
      keys: ['education', 'degree', 'university', 'gpa'],
      reply: 'BS Computer Science from University of Gujrat (2019), CGPA 3.31/4.00. Languages: English (professional), Urdu (native).'
    },
    {
      keys: ['github', 'open source', 'repo', 'project code'],
      reply: 'GitHub (@epegasus): android-libraries, android-architectures, android-samples, Pegasus-Utils (★5), AnimeHub, compose-catalog-material-3, inappbilling, and more at github.com/epegasus.'
    },
    {
      keys: ['job', 'role', 'title', 'position'],
      reply: 'Current title: Technical Lead / Senior Android Engineer at HyperSoft Inc. Open to senior Android, technical lead, and architecture-focused roles.'
    }
  ];

  const DEFAULT_REPLY =
    'I can help with Sohaib\'s experience, Play Store apps (75M+ installs), tech stack (Kotlin, Compose, MVI), leadership, education, or contact info. Try one of the suggested questions below.';

  function openChat() {
    windowEl.hidden = false;
    windowEl.classList.add('open');
    if (!messagesEl.dataset.init) {
      messagesEl.dataset.init = '1';
      addMessage('bot', 'Hi! I\'m Sohaib\'s portfolio assistant. Ask about his Android experience, apps, or skills.');
      renderSuggestions();
    }
    input.focus();
  }

  function closeChat() {
    windowEl.classList.remove('open');
    windowEl.hidden = true;
  }

  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = `chatbot-message chatbot-message-${role}`;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function renderSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.innerHTML = '';
    SUGGESTIONS.forEach((q) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chatbot-suggestion';
      btn.textContent = q;
      btn.addEventListener('click', () => {
        input.value = q;
        handleSend();
      });
      suggestionsEl.appendChild(btn);
    });
  }

  function findReply(text) {
    const lower = text.toLowerCase();
    for (const item of FAQ) {
      if (item.keys.some((k) => lower.includes(k))) return item.reply;
    }
    return DEFAULT_REPLY;
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    addMessage('user', text);
    input.value = '';
    setTimeout(() => addMessage('bot', findReply(text)), 400);
  }

  trigger?.addEventListener('click', openChat);
  closeBtn?.addEventListener('click', closeChat);
  sendBtn?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && windowEl?.classList.contains('open')) closeChat();
  });
})();
