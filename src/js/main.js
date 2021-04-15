'use strict';

// Menu Burger
const toggleMenuBurger = () => {
  const menuBurger = document.querySelector('.navbar__menu'),
    btnMenuBurger = document.querySelector('.menu-button');

  btnMenuBurger.addEventListener('click', () => {

    menuBurger.style.display = 'flex';

  });

  menuBurger.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('close-button')) {
      menuBurger.style.display = 'none';
    }
  });
};

toggleMenuBurger();