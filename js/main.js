/**
 * Sohaib Ahmed — Portfolio
 * Vanilla JS · No dependencies
 */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js-ready');

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('click', (e) => {
    if (!navbar?.contains(e.target) && navMenu?.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth scroll + active link
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      navMenu?.classList.remove('active');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
      const top = target.offsetTop - (navbar?.offsetHeight || 0);
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  function updateActiveNav() {
    const scrollY = window.scrollY + (navbar?.offsetHeight || 0) + 120;
    let current = '';
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // Navbar scroll state
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    if (backToTop) {
      const show = window.scrollY > 400;
      backToTop.classList.toggle('show', show);
      backToTop.hidden = !show;
    }
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Animated stat counters (fallback text already in HTML)
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const finalText = target.toFixed(decimals) + suffix;
    if (prefersReducedMotion) {
      el.textContent = finalText;
      return;
    }
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = finalText;
    }
    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

  // Skill tabs
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillPanels = document.querySelectorAll('.skill-panel');

  skillTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      skillTabs.forEach((t) => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });
      skillPanels.forEach((panel) => {
        const match = panel.id === `panel-${id}`;
        panel.classList.toggle('active', match);
        panel.hidden = !match;
      });
    });
  });

  // Project filter
  const chips = document.querySelectorAll('.chip');
  const projectCards = document.querySelectorAll('.project-card');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      chips.forEach((c) => c.classList.toggle('active', c === chip));
      projectCards.forEach((card) => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
        if (show) card.style.animation = 'fadeIn 0.35s ease';
      });
    });
  });

  // Copy email
  const copyBtn = document.getElementById('copyEmail');
  const copyText = document.getElementById('copyEmailText');
  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.dataset.copy;
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.classList.add('copied');
        copyText.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyText.textContent = 'Copy email address';
        }, 2000);
      } catch {
        copyText.textContent = email;
      }
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
})();
