// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===================== HAMBURGER MENU =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ===================== AOS (Animate on Scroll) =====================
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-animate');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initAOS);

// ===================== STAT COUNTER =====================
function animateCount(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + suffix;
  }, step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const nums = e.target.querySelectorAll('.stat-number');
      nums.forEach(n => {
        const raw = n.textContent.trim();
        const suffix = raw.replace(/[0-9]/g, '');
        const value = parseInt(raw);
        animateCount(n, value, suffix);
      });
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

const statsRibbon = document.querySelector('.stats-ribbon');
if (statsRibbon) statsObserver.observe(statsRibbon);

// ===================== RESERVATION FORM =====================
const form = document.getElementById('reservationForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  // Set min date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Confirming…';
    await new Promise(r => setTimeout(r, 1400));
    form.style.opacity = '0';
    form.style.transform = 'translateY(10px)';
    form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    await new Promise(r => setTimeout(r, 400));
    form.style.display = 'none';
    formSuccess.classList.add('visible');
  });
}

// ===================== SMOOTH PARALLAX HERO =====================
const heroVideo = document.getElementById('heroVideo');
window.addEventListener('scroll', () => {
  if (!heroVideo) return;
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroVideo.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
}, { passive: true });

// ===================== CURSOR GLOW (desktop) =====================
if (window.matchMedia('(pointer:fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;pointer-events:none;z-index:9999;
    width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition:left 0.12s ease,top 0.12s ease;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}
