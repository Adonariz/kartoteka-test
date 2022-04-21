// import {ScrollLock} from '../utils/scroll-lock';

function initMobileMenu() {
  // const scrollLock = new ScrollLock();
  const btnOpen = document.querySelector('.mobile-menu--burger');
  const btnClose = document.querySelector('.mobile-menu--close');
  const mainNav = document.querySelector('.main-nav');
  const body = document.querySelector('body');
  const desktopWidth = 1024;

  if (window.innerWidth < desktopWidth) {
    mainNav.classList.add('main-nav--is-closed');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < desktopWidth) {
      mainNav.classList.remove('main-nav--is-open');
      mainNav.classList.add('main-nav--is-closed');
    } else {
      mainNav.classList.remove('main-nav--is-open', 'main-nav--is-closed');
    }
  });

  if (btnOpen && mainNav) {
    btnOpen.addEventListener('click', () => {
      if (!mainNav.classList.contains('main-nav--is-open') || mainNav.classList.contains('main-nav--is-closed')) {
        mainNav.classList.remove('main-nav--is-closed');
        mainNav.classList.add('main-nav--is-open');
        body.classList.add('.scroll-lock', 'scroll-lock-ios');
        // scrollLock.disableScrolling();
      }
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--is-open')) {
        mainNav.classList.remove('main-nav--is-open');
        mainNav.classList.add('main-nav--is-closed');
        body.classList.remove('.scroll-lock', 'scroll-lock-ios');
        // scrollLock.enableScrolling();
      }
    });
  }
}

export default initMobileMenu;
