/**
 * Professional Portfolio - Rohail Butt
 * Vanilla JavaScript - No jQuery Dependencies
 * Performance Optimized
 */

(function() {
  'use strict';

  // ========================================
  // DOM Elements
  // ========================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    }
  });

  // ========================================
  // Smooth Scrolling for Navigation Links
  // ========================================
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Handle "Ask AI" link - open chatbot instead of scrolling
      if (this.id === 'askAiLink' || targetId === '#ask-ai') {
        const chatbotTrigger = document.getElementById('chatbot-trigger');
        if (chatbotTrigger) {
          chatbotTrigger.click();
        }
        return;
      }
      
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const navHeight = navbar.offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight;
          
          // Update active state immediately
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          this.classList.add('active');
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update active state again after scroll completes (for edge cases)
          setTimeout(() => {
            updateActiveNavLink();
          }, 500);
        }
      }
    });
  });

  // ========================================
  // Active Navigation Link on Scroll
  // ========================================
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const sectionBottom = sectionTop + sectionHeight;

      // Check if we're at the last section or near the bottom of the page
      const isLastSection = index === sections.length - 1;
      const isNearBottom = window.scrollY + windowHeight >= documentHeight - 50;

      // For the last section, also check if we're near the bottom of the page
      if (isLastSection && isNearBottom) {
        navLinks.forEach(link => {
          // Skip "Ask AI" link - it's not a scrollable section
          if (link.id === 'askAiLink' || link.getAttribute('href') === '#ask-ai') {
            return;
          }
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        return;
      }

      // For other sections, use the normal scroll position check
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => {
          // Skip "Ask AI" link - it's not a scrollable section
          if (link.id === 'askAiLink' || link.getAttribute('href') === '#ask-ai') {
            return;
          }
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ========================================
  // Scroll Event Handler
  // ========================================
  let lastScrollTop = 0;
  let ticking = false;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Update active nav link
    updateActiveNavLink();

    // Show/hide back to top button
    if (scrollTop > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }

    lastScrollTop = scrollTop;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
      });
      ticking = true;
    }
  });

  // ========================================
  // Back to Top Button
  // ========================================
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================
  // Intersection Observer for Fade-in Animations
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .cert-card, .education-item, .contact-item');
  
  fadeElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });

  // ========================================
  // Lazy Loading Images
  // ========================================
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // If image has data-src attribute, load it
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  // Observe all images with lazy loading
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // ========================================
  // Set Current Year in Footer
  // ========================================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========================================
  // Typing Effect for Hero (Simple CSS-based alternative)
  // ========================================
  // Note: We're using CSS animations instead of typed.js for better performance
  // The typing effect is achieved through CSS in the stylesheet

  // ========================================
  // Prevent Flash of Unstyled Content
  // ========================================
  document.documentElement.classList.add('js-loaded');

  // ========================================
  // Page Load Performance
  // ========================================
  window.addEventListener('load', function() {
    // Log performance metrics (optional - remove in production)
    if (window.performance && window.performance.timing) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page Load Time:', pageLoadTime + 'ms');
    }

    // Trigger initial scroll check
    handleScroll();
  });

  // ========================================
  // Handle Window Resize
  // ========================================
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Close mobile menu on resize to desktop
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        if (navToggle) {
          navToggle.classList.remove('active');
        }
      }
    }, 250);
  });

  // ========================================
  // Keyboard Navigation Accessibility
  // ========================================
  document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    }

    // Allow keyboard navigation to skip to main content
    if (e.key === 'Tab') {
      // Add visual focus indicators
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    // Remove keyboard navigation class when using mouse
    document.body.classList.remove('keyboard-nav');
  });

  // ========================================
  // Preload Critical Assets (Optional)
  // ========================================
  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  // Preload hero image if needed
  // preloadImage('img/programmer.jpg');

  // ========================================
  // Analytics Integration Point
  // ========================================
  // Track navigation clicks (integrate with your analytics)
  function trackEvent(category, action, label) {
    // Google Analytics example (if implemented):
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    //   });
    // }
    console.log('Event:', category, action, label);
  }

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      trackEvent('CTA', 'Click', buttonText);
    });
  });

  // Track external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkUrl = this.href;
      trackEvent('External Link', 'Click', linkUrl);
    });
  });

  // ========================================
  // Service Worker Registration (Progressive Web App)
  // ========================================
  // Uncomment to enable PWA features
  /*
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registered:', registration.scope);
      }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
      });
    });
  }
  */

  // ========================================
  // Initialize
  // ========================================
  console.log('Portfolio initialized successfully');

})();
