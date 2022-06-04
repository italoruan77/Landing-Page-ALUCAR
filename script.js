let btnMenu = document.querySelector('.menu_hamburger');
let btnCloseMenu = document.querySelector('.close-menu');
let header = document.getElementById('header');

btnMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

function openMenu() {
  header.classList.add('menu-active');
}

function closeMenu() {
  header.classList.remove('menu-active');
}

function clicked() {
  header.classList.remove('menu-active');
}

// ========= scroll reveal =============

ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
}).reveal(
  `
  #hero,
  .cars-container .box

  `
);

ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 2000,
}).reveal(
  `
   .features-container .box

  `
);

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 2000,
  delay: 100,
}).reveal(
  `
   .hero-content,
   .about-container .about-img img

  `
);

ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 2000,
  delay: 100,
}).reveal(
  `
  .hero-car img,
  .about-container .about-text
 

  `
);

ScrollReveal({
  scale: 0.8,
  duration: 2000,
}).reveal(
  `
  .reviews-container .box
  
  `
);
