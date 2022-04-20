import {ScrollLock} from '../utils/scroll-lock';

function initMobileMenu() {
  const scrollLock = new ScrollLock();
  const btnOpen = document.querySelector('.mobile-menu--burger');
  const btnClose = document.querySelector('.mobile-menu--close');
  const mainNav = document.querySelector('.main-nav');
  const desktopWidth = 1023;

  if (window.innerWidth < desktopWidth) {
    mainNav.classList.add('main-nav--is-closed');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < desktopWidth) {
      mainNav.classList.remove('main-nav--is-open');
      mainNav.classList.add('main-nav--is-closed');
    } else {
      mainNav.classList.remove('main-nav--is-open');
      mainNav.classList.remove('main-nav--is-closed');
    }
  });

  if (btnOpen && mainNav) {
    btnOpen.addEventListener('click', () => {
      if (!mainNav.classList.contains('main-nav--is-open') || mainNav.classList.contains('main-nav--is-closed')) {
        mainNav.classList.remove('main-nav--is-closed');
        mainNav.classList.add('main-nav--is-open');
        scrollLock.disableScrolling();
      }
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--is-open')) {
        mainNav.classList.remove('main-nav--is-open');
        mainNav.classList.add('main-nav--is-closed');
        scrollLock.enableScrolling();
      }
    });
  }
}

export default initMobileMenu;
