import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('a.navbar-brand')).getText();
  }

  getNavBarItems() {
    return element.all(by.css('a.nav-link'));
  }
}
