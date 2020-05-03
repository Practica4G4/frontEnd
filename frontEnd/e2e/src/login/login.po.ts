import {browser, by, element} from 'protractor';

export class LogInComponent {
  navigateTo() {
    return browser.get('/login');
  }

  getComponentLables() {
    return element.all(by.css('label.active'));
  }

  getLoginButton() {
    return element(by.css('button.btn.btn-success.btn-block'));
  }

  getRegisterButton() {
    return element(by.css('button.btn.btn-info.btn-block'));
  }

  getCuentaInput() {
    return element(by.name('noCuenta'));
  }

  getContraseniaInput() {
    return element(by.name('contrasena'));
  }
}
