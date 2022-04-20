import {iosVhFix} from './utils/ios-vh-fix';
import showCurrentTime from './modules/current-time';
import initMobileMenu from './modules/mobile-menu';

window.addEventListener('DOMContentLoaded', () => {
  showCurrentTime();
  iosVhFix();
  initMobileMenu();
});
