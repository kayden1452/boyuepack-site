// Mobile menu toggle
const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => links.classList.toggle('open'));
}

// Hero image carousel
(function () {
  const wrap = document.getElementById('heroCarousel');
  if (!wrap) return;
  const slides = wrap.querySelectorAll('.slide');
  const dotsBox = wrap.querySelector('.car-dots');
  let cur = 0, timer = null;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Show image ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => { show(i); restart(); });
    dotsBox.appendChild(b);
  });
  const dots = [...dotsBox.children];

  function show(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('active', k === cur));
    dots.forEach((d, k) => d.classList.toggle('active', k === cur));
  }
  function next() { show(cur + 1); }
  function prev() { show(cur - 1); }
  function restart() { clearInterval(timer); timer = setInterval(next, 4500); }

  wrap.querySelector('.next').addEventListener('click', () => { next(); restart(); });
  wrap.querySelector('.prev').addEventListener('click', () => { prev(); restart(); });
  wrap.addEventListener('mouseenter', () => clearInterval(timer));
  wrap.addEventListener('mouseleave', restart);
  restart();
})();
