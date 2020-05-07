import {browser, by, element, protractor} from 'protractor';

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

  logIn(fun: () => {}) {
    const component: LogInComponent = new LogInComponent();
    component.navigateTo();
    component.getCuentaInput().sendKeys('12345');
    component.getContraseniaInput().sendKeys('1234');
    const button = component.getLoginButton();
    button.click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('perfil'), 4000)
      .then(() => {
        fun();
      });
  }
}
