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

// PromptPay QR payload generator
function generatePromptPayPayload(phone, amount) {
  function tag(id, val) {
    return id + val.length.toString().padStart(2, '0') + val;
  }
  const cleaned = phone.replace(/\D/g, '');
  const ppId = '0066' + cleaned.replace(/^0/, '');
  const merchantInfo = tag('00', 'A000000677010111') + tag('01', ppId);
  const amountStr = amount.toFixed(2);
  let payload = tag('00', '01') + tag('01', '12') + tag('29', merchantInfo) + tag('53', '764') + tag('54', amountStr) + tag('58', 'TH') + '6304';
  let crc = 0xFFFF;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
    }
  }
  return payload + (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

function showDepositModal(amount, stayType) {
  const overlay = document.getElementById('depositOverlay');
  if (!overlay) return;
  document.getElementById('depositAmount').textContent = '฿' + amount;
  document.getElementById('depositBankAmount').textContent = '฿' + amount;
  document.getElementById('depositTypeLabel').textContent =
    stayType === 'dayuse' ? 'ชั่วคราว — Day Use Deposit' : 'ค้างคืน — Overnight Deposit';

  const payload = generatePromptPayPayload('0868468786', amount);
  if (window.QRCode) {
    QRCode.toCanvas(document.getElementById('depositQR'), payload, {
      width: 180, margin: 1,
      color: { dark: '#000000', light: '#ffffff' }
    });
  }

  const label = stayType === 'dayuse' ? 'ชั่วคราว (Day Use)' : 'ค้างคืน (Overnight)';
  const msg = encodeURIComponent(`สวัสดีครับ/ค่ะ ขอแจ้งชำระมัดจำ ฿${amount} (${label}) กรุณาตรวจสอบสลิปด้วยนะครับ 🙏`);
  document.getElementById('depositLineBtn').href = `https://line.me/R/oaMessage/@banrimklong/?text=${msg}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Deposit modal close
const depositOverlay = document.getElementById('depositOverlay');
const depositCloseBtn = document.getElementById('depositClose');
function closeDepositModal() {
  if (depositOverlay) {
    depositOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
if (depositCloseBtn) depositCloseBtn.addEventListener('click', closeDepositModal);
if (depositOverlay) {
  depositOverlay.addEventListener('click', (e) => {
    if (e.target === depositOverlay) closeDepositModal();
  });
}

// Form submission via Formspree
const form = document.querySelector('.booking-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const btnSpan = btn.querySelector('span') || btn;
    btnSpan.textContent = 'กำลังส่ง...';
    btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/xbdbnanj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        const stayType = form.querySelector('#staytype')?.value || 'overnight';
        const deposit = stayType === 'dayuse' ? 100 : 200;
        btnSpan.textContent = '✓ ส่งแล้ว';
        btn.style.background = '#4a7c59';
        form.reset();
        setTimeout(() => showDepositModal(deposit, stayType), 600);
      } else {
        btnSpan.textContent = 'เกิดข้อผิดพลาด — ลองใหม่';
        btn.disabled = false;
      }
    } catch {
      btnSpan.textContent = 'เกิดข้อผิดพลาด — ลองใหม่';
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
