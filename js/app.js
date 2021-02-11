const menuLi = document.querySelector('.navigation__menu');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.navigation__menu__item a');
const navItems = document.querySelectorAll('.navigation__menu__item');

const navSlide = () => {
  burger.addEventListener('click', () => {
    //toggle class
    menuLi.classList.toggle('nav__active');
    burger.classList.toggle('active');
    //animate links
    navItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkZoom 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
  });
};

// add style to active menu item

const addStyleToActiveMenuItem = (event) => {
  navLinks.forEach((el) => {
    el.classList.remove('active');
  });
  event.target.classList.add('active');
};

navLinks.forEach((el) => {
  el.addEventListener('click', addStyleToActiveMenuItem);
});

window.addEventListener('DOMContentLoaded', navSlide);
