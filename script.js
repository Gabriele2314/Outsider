/* ================================================
   OUTSIDER — JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header scroll effect ---- */
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });

  /* ---- Smooth scroll for all anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- Scroll reveal (Intersection Observer) ---- */
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  /* ---- Hero floating particles ---- */
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      const size = 200 + i * 80;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: ${15 + i * 12}%;
        left: ${10 + i * 15}%;
        border-radius: 50%;
        background: rgba(57, 255, 20, 0.08);
        animation: particlePulse ${4 + i}s ease-in-out infinite ${i * 0.5}s;
        pointer-events: none;
      `;
      particlesContainer.appendChild(particle);
    }
  }

  // Inject particle animation
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes particlePulse {
      0%, 100% { transform: scale(1); opacity: 0.05; }
      50%      { transform: scale(1.2); opacity: 0.12; }
    }
  `;
  document.head.appendChild(styleSheet);

});
