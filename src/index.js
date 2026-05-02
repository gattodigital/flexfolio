import './styles.css';

/* ─── Preloader ───────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('hide');
    setTimeout(() => preloader.remove(), 550);
  }, 1200);
});

/* ─── Footer Year ─────────────────────────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─── Navigation ──────────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Scroll: make nav solid after hero
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile menu toggle
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on backdrop click (outside nav)
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      mobileNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/* ─── Scroll Reveal ───────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Stat Counter Animation ──────────────────────────────────────── */
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ─── Contact Form ────────────────────────────────────────────────── */
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form && formSuccess) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');

    // Basic validation
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) return;

    // Simulate submission
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }

    setTimeout(() => {
      formSuccess.classList.add('show');
      form.reset();
      if (btn) {
        btn.textContent = 'Send Message \u2197';
        btn.disabled = false;
      }
      setTimeout(() => formSuccess.classList.remove('show'), 6000);
    }, 1000);
  });
}
