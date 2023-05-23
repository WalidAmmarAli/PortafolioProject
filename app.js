const openMenuButton = document.getElementById('button-bar');
const closeButton = document.getElementById('mobile-id');
const menuMobile = document.getElementById('menu-mobile');
const workDetailLinks = document.querySelectorAll('.options');

function openMenu() {
  menuMobile.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuMobile.style.display = 'none';
  document.body.style.overflow = 'auto';
  openMenuButton.style.display = 'block';
  closeButton.style.cursor = 'pointer';

}

openMenuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
workDetailLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
