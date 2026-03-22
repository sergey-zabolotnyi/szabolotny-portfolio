// hero-effects.js - Партиклы и анимации для Hero

function createHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('hero-particle');
    
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 10;
    const tx = (Math.random() - 0.5) * 200;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      --tx: ${tx}px;
      background: ${Math.random() > 0.7 ? 'rgba(77, 255, 180, 0.6)' : 'rgba(124, 111, 255, 0.5)'};
    `;
    
    container.appendChild(particle);
  }
}

function animateHeroStats() {
  const projectsCounter = document.getElementById('projectsCount');
  if (!projectsCounter) return;
  
  let count = 0;
  const target = 6;
  const interval = setInterval(() => {
    count++;
    projectsCounter.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 80);
}

setTimeout(() => {
  createHeroParticles();
  animateHeroStats();
}, 500);