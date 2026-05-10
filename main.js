'use strict';

// ── Portfolio data ──────────────────────────────────────────────
const projects = [
  {
    title: 'GCASH DIE CUT BROCHURE',
    slug: 'gcashdiecut-project',
    color: '#5cd1ff',
    img: 'images/gcashcat.png',
    wide: true
  },
  {
    title: '3D MOCK-UPS',
    slug: '3d-mock-ups',
    color: '#5cd1ff',
    img: 'images/3d-mock-ups/funny pome.png',
  },
  {
    title: 'LOGOFOLIO',
    slug: 'logofolio',
    color: '#3a6ea5',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'POSTERS & ADVERTISEMENTS',
    slug: 'posters-&-advertisements',
    color: '#e89c3a',
    img: 'images/posters-and-advertisements/skin1004.png'
  },
  {
    title: 'PRODUCTION PROJECTS',
    slug: 'production-projects',
    color: '#4a7c59',
    img: 'images/placeholder.jpg',
  },
  {
    title: 'ANIMATION PROJECTS',
    slug: 'animation-projects',
    color: '#7c4a8a',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'ILLUSTRATIONS',
    slug: 'illustrations',
    color: '#c0392b',
    img: 'images/placeholder.jpg',
    wide: true 
  },
  {
    title: 'CHARACTER STUDIES & DESIGNS ',
    slug: 'character-studies-&-designs',
    color: '#f39c12',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'PERSONAL PROJECT',
    slug: 'personal-project',
    color: '#f39c12',
    img: 'images/placeholder.jpg'
  },
];

// ── Build grid ─────────────────────────────────────────────────
var grid = document.getElementById('grid');

projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card' + (p.wide ? ' wide' : '');

  if (p.img) {
    var img = document.createElement('img');
    img.className = 'card-bg';
    img.src = p.img;
    img.alt = p.title;
    card.appendChild(img);
  }

  // overlay
  var overlay = document.createElement('div');
  overlay.className = 'card-overlay';

  var title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = p.title;

  var btn = document.createElement('a');
  btn.className = 'card-view-btn';
  btn.href = 'https://clarspieces.github.io/' + p.slug;
  btn.target = '_self';
  btn.rel = 'noopener';
  btn.textContent = 'View';

  overlay.appendChild(title);
  overlay.appendChild(btn);
  card.appendChild(overlay);
  grid.appendChild(card);
});

// ── Custom cursor ──────────────────────────────────────────────
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .card').forEach(function(el) {
  el.addEventListener('mouseenter', function() { cursor.classList.add('hovered'); });
  el.addEventListener('mouseleave', function() { cursor.classList.remove('hovered'); });
});

// ── Nav active link on scroll ─────────────────────────────────
var navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  navLinks.forEach(function(link) { link.classList.remove('active'); });
  navLinks[0].classList.add('active');
}, { passive: true });