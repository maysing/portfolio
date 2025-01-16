document.addEventListener('DOMContentLoaded', function () {
  // Thrifty-knapp
  const thrifty = document.getElementById('thrifty');
  if (thrifty) {
    thrifty.addEventListener('click', function () {
      window.location.href = '/thrifty.html';
    });
  }

  // Boule-knapp
  const boule = document.getElementById('boule-img');
  if (boule) {
    boule.addEventListener('click', function () {
      window.location.href = '/boule.html';
    });
  }

  // Oset-knapp
  const oset = document.getElementById('oset');
  if (oset) {
    oset.addEventListener('click', function () {
      window.location.href = '/oset.html';
    });
  }

  // Hamburger-meny
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.hamburger-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Slideshow
  let currentSlide = 0;
  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? 'block' : 'none';
    });
  }
  showSlide(currentSlide);

  function changeSlide(direction) {
    showSlide(currentSlide + direction);
  }

  // BounceButton
  const bounceButton = document.getElementById('bounceButton');
  if (bounceButton) {
    bounceButton.addEventListener('click', function () {
      const target = document.getElementById('target');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Target-elementet kunde inte hittas.');
      }
    });
  }
});
