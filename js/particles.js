// particles.js - Star field, nebulae and galaxies

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const DPR = devicePixelRatio || 1;

function resize() {
  canvas.width = innerWidth * DPR;
  canvas.height = innerHeight * DPR;
  canvas.style.width = innerWidth + 'px';
  canvas.style.height = innerHeight + 'px';
  ctx.resetTransform();
  ctx.scale(DPR, DPR);
}

resize();
window.addEventListener('resize', resize);

const W = () => innerWidth;
const H = () => innerHeight;

let smx = 0, smy = 0;
document.addEventListener('mousemove', e => {
  smx = e.clientX / W() - 0.5;
  smy = e.clientY / H() - 0.5;
});

function mkStars(n, minR, maxR, alpha) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * W(),
    y: Math.random() * H(),
    r: minR + Math.random() * (maxR - minR),
    a: alpha * 0.4 + Math.random() * alpha * 0.6,
    ts: 0.5 + Math.random() * 2,
    tp: Math.random() * Math.PI * 2,
    px: 0,
    py: 0
  }));
}

const stars1 = mkStars(300, 0.2, 0.7, 0.5);
const stars2 = mkStars(150, 0.5, 1.2, 0.75);
const stars3 = mkStars(55, 1, 2.2, 1);

const nebulae = [
  { x: 0.15, y: 0.22, rx: 280, ry: 190, color: 'rgba(124,111,255,', a: 0.042 },
  { x: 0.78, y: 0.14, rx: 210, ry: 250, color: 'rgba(77,255,180,', a: 0.028 },
  { x: 0.52, y: 0.75, rx: 310, ry: 175, color: 'rgba(255,107,107,', a: 0.026 },
  { x: 0.9, y: 0.58, rx: 175, ry: 210, color: 'rgba(124,111,255,', a: 0.03 }
];

function drawNebula(n) {
  const x = n.x * W();
  const y = n.y * H();
  const mx2 = Math.max(n.rx, n.ry);
  const g = ctx.createRadialGradient(x, y, 0, x, y, mx2);
  g.addColorStop(0, n.color + (n.a * 2.5) + ')');
  g.addColorStop(0.4, n.color + n.a + ')');
  g.addColorStop(1, n.color + '0)');
  ctx.save();
  ctx.scale(n.rx / mx2, n.ry / mx2);
  ctx.beginPath();
  ctx.arc(x * (mx2 / n.rx), y * (mx2 / n.ry), mx2, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.restore();
}

function mkGalaxy(cxf, cyf, radius, angle, color, arms, density) {
  const pts = [];
  for (let arm = 0; arm < arms; arm++) {
    const aa = (arm / arms) * Math.PI * 2;
    for (let i = 0; i < density; i++) {
      const t = i / density;
      const r = t * radius;
      const spin = t * Math.PI * 3.5;
      const spread = t * radius * 0.36 * (Math.random() - 0.5) * 2;
      const a = aa + spin + angle;
      pts.push({
        x: Math.cos(a) * r + spread * (Math.random() - 0.5),
        y: Math.sin(a) * r + spread * (Math.random() - 0.5),
        a: (0.8 - t * 0.65) * (Math.random() * 0.5 + 0.5),
        r: Math.random() * 0.9 + 0.2
      });
    }
  }
  for (let i = 0; i < 50; i++) {
    const a2 = Math.random() * Math.PI * 2;
    const rd = Math.random() * radius * 0.1;
    pts.push({
      x: Math.cos(a2) * rd,
      y: Math.sin(a2) * rd,
      a: 0.6 + Math.random() * 0.4,
      r: Math.random() * 1.1 + 0.4
    });
  }
  return { pts, cxf, cyf, color, rot: 0, rotSpeed: (Math.random() - 0.5) * 0.00007 };
}

const galaxies = [
  mkGalaxy(0.83, 0.17, 105, 0.4, 'rgba(180,170,255,', 3, 50),
  mkGalaxy(0.11, 0.66, 78, 1.2, 'rgba(140,220,190,', 2, 38),
  mkGalaxy(0.6, 0.9, 62, 2.5, 'rgba(255,175,155,', 3, 32)
];

function drawGalaxy(g) {
  const cx = g.cxf * W();
  const cy = g.cyf * H();
  const cos = Math.cos(g.rot);
  const sin = Math.sin(g.rot);
  g.rot += g.rotSpeed;
  g.pts.forEach(p => {
    const rx = cx + p.x * cos - p.y * sin;
    const ry = cy + p.x * sin + p.y * cos;
    ctx.beginPath();
    ctx.arc(rx, ry, p.r, 0, Math.PI * 2);
    ctx.fillStyle = g.color + p.a + ')';
    ctx.fill();
  });
  const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, 24);
  gr.addColorStop(0, g.color + '.16)');
  gr.addColorStop(1, g.color + '0)');
  ctx.beginPath();
  ctx.arc(cx, cy, 24, 0, Math.PI * 2);
  ctx.fillStyle = gr;
  ctx.fill();
}

const meteors = [];
let lastTimestamp = null;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    lastTimestamp = null;
  }
});

function spawnMeteor() {
  const angle = Math.PI / 6 + Math.random() * Math.PI / 8;
  meteors.push({
    x: Math.random() * W(),
    y: 0,
    len: 80 + Math.random() * 120,
    speed: 8 + Math.random() * 10,
    angle,
    life: 0,
    maxLife: 40 + Math.random() * 30,
    a: 0
  });
}

const meteorInterval = setInterval(() => {
  if (!document.hidden && Math.random() < 0.6) spawnMeteor();
}, 1800);

let tick = 0;

(function draw(timestamp) {
  if (document.hidden) {
    requestAnimationFrame(draw);
    return;
  }
  tick++;
  ctx.clearRect(0, 0, W(), H());
  nebulae.forEach(drawNebula);
  galaxies.forEach(drawGalaxy);
  [[stars1, 6], [stars2, 14], [stars3, 26]].forEach(([layer, ps], li) => {
    layer.forEach(s => {
      s.px += (smx * ps - s.px) * 0.04;
      s.py += (smy * ps - s.py) * 0.04;
      const sx = s.x + s.px;
      const sy = s.y + s.py;
      const tw = 0.7 + 0.3 * Math.sin(tick * s.ts * 0.05 + s.tp);
      const a = s.a * tw;
      if (li === 2) {
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 4);
        g.addColorStop(0, `rgba(200,195,255,${a * 0.35})`);
        g.addColorStop(1, 'rgba(200,195,255,0)');
        ctx.beginPath();
        ctx.arc(sx, sy, s.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(sx, sy, s.r * tw, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,215,255,${a})`;
      ctx.fill();
    });
  });
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    m.life++;
    const prog = m.life / m.maxLife;
    m.a = prog < 0.2 ? prog / 0.2 : prog > 0.7 ? (1 - prog) / 0.3 : 1;
    m.x += Math.cos(m.angle) * m.speed;
    m.y += Math.sin(m.angle) * m.speed;
    const tx = m.x - Math.cos(m.angle) * m.len;
    const ty = m.y - Math.sin(m.angle) * m.len;
    const g = ctx.createLinearGradient(tx, ty, m.x, m.y);
    g.addColorStop(0, 'rgba(255,255,255,0)');
    g.addColorStop(0.7, `rgba(200,195,255,${m.a * 0.6})`);
    g.addColorStop(1, `rgba(255,255,255,${m.a})`);
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(m.x, m.y);
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    if (m.life >= m.maxLife) meteors.splice(i, 1);
  }
  requestAnimationFrame(draw);
})();