// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===== BOARD MEMBER SLIDER =====
const track = document.getElementById('boardTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('sliderDots');

let currentIndex = 0;

function getVisibleCount() {
  const w = window.innerWidth;
  if (w <= 560) return 1;
  if (w <= 900) return 2;
  return 3;
}

function getCardWidth() {
  const cards = track.querySelectorAll('.board-card');
  if (!cards.length) return 0;
  const gap = 32;
  return cards[0].offsetWidth + gap;
}

function getMaxIndex() {
  const cards = track.querySelectorAll('.board-card');
  return Math.max(0, cards.length - getVisibleCount());
}

function buildDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i <= getMaxIndex(); i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  dotsContainer.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === currentIndex)
  );
}

function goTo(idx) {
  currentIndex = Math.max(0, Math.min(idx, getMaxIndex()));
  track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
  updateDots();
}

prevBtn?.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn?.addEventListener('click', () => goTo(currentIndex + 1));

// Touch swipe
let touchStartX = 0;
track?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track?.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));
});

// Auto-play
let autoplay = setInterval(() => {
  goTo(currentIndex < getMaxIndex() ? currentIndex + 1 : 0);
}, 3500);

track?.addEventListener('mouseenter', () => clearInterval(autoplay));
track?.addEventListener('mouseleave', () => {
  autoplay = setInterval(() => {
    goTo(currentIndex < getMaxIndex() ? currentIndex + 1 : 0);
  }, 3500);
});

window.addEventListener('resize', () => { buildDots(); goTo(0); });
buildDots();

// ===== STATS COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.pillar, .board-card, .stat-item').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== LANGUAGE TOGGLE =====
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;

  // Toggle data-en / data-te elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'te'
      ? (el.getAttribute('data-te') || el.getAttribute('data-en'))
      : el.getAttribute('data-en');
  });

  // Toggle hero org name: show English or Telugu version
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
  document.querySelectorAll('.lang-te').forEach(el => {
    el.style.display = lang === 'te' ? '' : 'none';
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && lang === 'en') || (i === 1 && lang === 'te'));
  });
}

window.setLang = setLang;