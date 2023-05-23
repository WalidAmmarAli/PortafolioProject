const openMenuButton = document.getElementById('button-bar');
const closeButton = document.getElementById('mobile-id');
const menuMobile = document.getElementById('menu-mobile');
const workDetailLinks = document.querySelectorAll('.options');

openMenuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
workDetailLinks.forEach(function(link) {
  link.addEventListener('click', closeMenu);
});

function openMenu() {
  menuMobile.style.display = 'block';

}

function closeMenu() {
  menuMobile.style.display = 'none';
}




