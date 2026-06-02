// Navigation scroll behavior
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScroll = scrollY;
});

// Mobile menu
const burger = document.querySelector('.nav-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
    const spans = burger.querySelectorAll('span');
    if (!isOpen) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      const spans = burger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// Hero background zoom-in on load
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('load', () => {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  });
}

// Scroll reveal with IntersectionObserver
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.count);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// Smooth parallax on hero scroll
const heroBgEl = document.querySelector('.hero-bg');
if (heroBgEl) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBgEl.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Form submission via Formspree
const form = document.querySelector('.booking-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/xbdbnanj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        btn.textContent = '✓ Request Sent';
        btn.style.background = '#4a7c59';
        btn.style.borderColor = '#4a7c59';
        form.reset();
      } else {
        btn.textContent = 'Failed — Please Try Again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Failed — Please Try Again';
      btn.disabled = false;
    }
  });
}

// Gallery hover tilt effect (subtle)
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    item.querySelector('img').style.transform =
      `scale(1.06) translate(${x * 8}px, ${y * 8}px)`;
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('img').style.transform = '';
  });
});
