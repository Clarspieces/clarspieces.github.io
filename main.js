'use strict';

// Portfolio data
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
    img: 'images/logofolio/logofolio-header-image.png'
  },
  {
    title: 'POSTERS & ADVERTISEMENTS',
    slug: 'posters-&-advertisements',
    color: '#e89c3a',
    img: 'images/posters-and-advertisements/posters-and-adver-header.png'
  },
  {
    title: 'VIDEO PRODUCTION & EDITING',
    slug: 'video-production-and-editing',
    color: '#4a7c59',
    img: 'images/placeholder.jpg',
  },
  {
    title: 'ANIMATION SHOWREEL',
    slug: 'animation-showreel',
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
    title: 'CONTENT CREATION',
    slug: 'content-creation',
    color: '#f39c12',
    img: 'images/placeholder.jpg'
  },
];

// Build grid
const grid = document.getElementById('grid');

projects.forEach(p => {
  if (!grid) {
    return;
  }
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
  btn.href = `./projects/${p.slug}`
  if (document.URL.includes('.html')) {
    btn.href += '.html'
  }
  btn.target = '_self';
  btn.rel = 'noopener';
  btn.textContent = 'View';

  overlay.appendChild(title);
  overlay.appendChild(btn);
  card.appendChild(overlay);
  grid.appendChild(card);
});

// Custom cursor
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .card').forEach(function(el) {
  el.addEventListener('mouseenter', function() { cursor.classList.add('hovered'); });
  el.addEventListener('mouseleave', function() { cursor.classList.remove('hovered'); });
});

// Nav collapse on scroll
var nav = document.querySelector('nav');
var navLinks = document.querySelectorAll('.nav-links a');
var lastScrollY = 0;
var mouseInTopQuarter = false;
var topQuarter = window.innerHeight / 4;

function setNavCollapsed(collapsed) {
  nav.classList.toggle('nav--collapsed', collapsed);
}

function updateNav() {
  var atTop = window.scrollY < 40;
  var scrollingUp = window.scrollY < lastScrollY;
  setNavCollapsed(!atTop && !scrollingUp && !mouseInTopQuarter);
  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', updateNav, { passive: true });

window.addEventListener('resize', function() {
  topQuarter = window.innerHeight / 4;
}, { passive: true });

document.addEventListener('mousemove', function(e) {
  var wasInTop = mouseInTopQuarter;
  mouseInTopQuarter = e.clientY < topQuarter;
  if (mouseInTopQuarter !== wasInTop) updateNav();
});


// Project page "next project" link
const ctaLink = document.getElementById('next-project-link');
if (ctaLink) {
  let slug = window.location.pathname.replace(/\/+$/, '').split('/').pop();
  if (slug.endsWith('.html')) {
    slug = slug.substring(0, slug.length - 5);
  }
  let idx = projects.findIndex(p => p.slug === slug);
  let next = idx !== -1 ? projects[(idx + 1) % projects.length] : null;

  if (!next || idx === -1) {
    ctaLink.href = '../index.html#portfolio';
    ctaLink.textContent = 'Back to Portfolio →';
  } else {
    ctaLink.href = `../projects/${next.slug}.html`;
    ctaLink.textContent = `${next.title} →`;
  }
}
