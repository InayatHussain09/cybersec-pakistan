/* ==============================================================
   CyberSec Pakistan — Interactive Script
   ============================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Staggered Opening Reveal Animation
  const revealItems = document.querySelectorAll('.reveal-item');
  revealItems.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('revealed');
    }, 70 * index);
  });

  // 3. Desktop Interactive Cursor Spotlight on Cards
  const cards = document.querySelectorAll('.clean-card');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 135, 0.08), rgba(8, 17, 12, 0.75) 65%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(8, 17, 12, 0.75)';
      });
    });
  }
});