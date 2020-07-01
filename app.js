const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links');
const backdrop = document.querySelector('.backdrop');

const addActive = (element) => {
  element.classList += ' active';
};

const removeActive = (element) => {
  element.classList.remove('active');
};

const closeNav = () => {
  navlinks.style.display = 'none';
  backdrop.style.display = 'none';
  removeActive(backdrop);
  removeActive(navlinks);
  removeActive(burger);
};

(() => {
  burger.addEventListener('click', () => {
    if (navlinks.classList.contains('active')) {
      closeNav();
    } else {
      addActive(backdrop);
      addActive(navlinks);
      addActive(burger);
      backdrop.style.display = 'block';
      navlinks.style.display = 'inline-block';
    }
  });
  backdrop.addEventListener('click', () => {
    if (backdrop.classList.contains('active')) {
      closeNav();
    }
  });
})();
