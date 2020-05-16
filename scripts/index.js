const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__nav');

function closeMenu() {
  menu.classList.remove('header__nav_opened');
}

function closeOverlay(event) {
  if (event.target.classList.contains('header__nav_opened')) {
    closeMenu();
    document.removeEventListener('click', closeOverlay);
  }
}

function openMenu() {
  menu.classList.add('header__nav_opened');
  document.addEventListener('click', closeOverlay);
}

menuButton.addEventListener('click', openMenu);
