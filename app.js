// Obtenemos los elementos del DOM
const openMenuButton = document.getElementById('button-bar');
const closeButton = document.getElementById('mobile-id');
const menuMobile = document.getElementById('menu-mobile');

// Función para abrir el menú
function openMenu() {
  menuMobile.style.display = 'block';

}

// Función para cerrar el menú
function closeMenu() {
  menuMobile.style.display = 'none';
}

// Agregamos los event listeners
openMenuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);



