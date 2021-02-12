const menuLi = document.querySelector('.navigation__menu');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.navigation__menu__item a');
const navItems = document.querySelectorAll('.navigation__menu__item');
const form = document.querySelector('form');

//show  menu when clicked on hamburger

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
        link.style.animation = `navLinkZoom 0.3s linear forwards ${
          index / 9 + 0.3
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

  // hide menu when clicked outside
  if (window.innerWidth < 1025) {
    menuLi.classList.toggle('nav__active');
    burger.classList.toggle('active');
    navItems.forEach((link) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
    });
  }
};

navLinks.forEach((el) => {
  el.addEventListener('click', addStyleToActiveMenuItem);
});

// prevent submitting form
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// dodaj nasłuchiwanie na burgera
window.addEventListener('DOMContentLoaded', navSlide);
