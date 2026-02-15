document.addEventListener('DOMContentLoaded', () => {

  /* ---- Floating particles ---- */
  const container = document.getElementById('particles');

  for (let i = 0; i < 4; i++) {
    const el = document.createElement('div');
    const size = 180 + i * 100;
    el.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      top: ${20 + i * 15}%;
      left: ${5 + i * 20}%;
      border-radius: 50%;
      background: rgba(57, 255, 20, 0.08);
      animation: particlePulse ${5 + i}s ease-in-out infinite ${i * 0.7}s;
      pointer-events: none;
    `;
    container.appendChild(el);
  }

});
