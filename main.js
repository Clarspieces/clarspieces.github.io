'use strict';

// ── Portfolio data ──────────────────────────────────────────────
const projects = [
  {
    title: 'GCASH DIE CUT BROCHURE',
    slug: 'wide-project',
    color: '#5cd1ff',
    img: 'images/gcashcat.png',
    wide: true
  },
  {
    title: 'Logofolio',
    slug: 'Logofolio',
    color: '#3a6ea5',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'Wow cool project!',
    slug: 'cool-project',
    color: '#e89c3a',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'Project name here',
    slug: 'project-name-here',
    color: '#4a7c59',
    img: 'images/placeholder.jpg',
  },
  {
    title: 'Project title',
    slug: 'project-title',
    color: '#7c4a8a',
    img: 'images/placeholder.jpg'
  },
  {
    title: 'AAAAAHHHHHHHHHH',
    slug: 'aaaahhhhhh',
    color: '#c0392b',
    img: 'images/placeholder.jpg',
    wide: true },
  {
    title: 'HUEHUEHUEHUEHUEHUEHUEHUE',
    slug: 'hue-hue-hue',
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
  btn.href = 'https://clarspieces.github.io/' + p.slug + '/';
  btn.target = '_blank';
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