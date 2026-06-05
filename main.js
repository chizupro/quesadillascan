/* ─── THEME TOGGLE ─────────────────────────────────── */
const html  = document.documentElement;
const btn   = document.getElementById('themeToggle');
const STORE = 'manga-theme';

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem(STORE, theme);
}

// Load saved preference (default: dark)
const saved = localStorage.getItem(STORE) || 'dark';
applyTheme(saved);

btn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ─── FOOTER YEAR ──────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─── SMOOTH NAV HIGHLIGHT ─────────────────────────── */
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
