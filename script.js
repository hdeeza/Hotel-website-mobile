const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener( 'click', () => {mobileMenu.style.left ='0';});
closeMenu.addEventListener( 'click', () => {mobileMenu.style.left ='-100%';});

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });