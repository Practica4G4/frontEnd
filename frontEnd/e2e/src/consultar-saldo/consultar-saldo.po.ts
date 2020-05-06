import {browser, by, element, Key, protractor} from 'protractor';
import {LogInComponent} from '../login/login.po';

export class ConsultarSaldoComponent {
  navigateTo() {
    return browser.get('/consulta-saldo');
  }

  logIn() {
    const component: LogInComponent = new LogInComponent();
    component.navigateTo();
    component.getCuentaInput().sendKeys('12345');
    component.getContraseniaInput().sendKeys('1234');
    const button = component.getLoginButton();
    button.click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('perfil'), 2000)
      .then(() => {
        this.navigateTo();
      });
  }

  getEncabezado() {
    return element(by.css('app-consultar-saldo > div.container > div > h2'));
  }

  getLabelsCampos() {
    return element.all(by.css('div.col-md-4.profile-usertitle-name > label'));
  }

  getLabelsDatos() {
    return element.all(by.css('div#home.tab-pane.fade.show.active > div.row > div.col-md-8'));
  }
}
