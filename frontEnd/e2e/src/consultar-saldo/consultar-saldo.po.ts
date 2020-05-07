import {browser, by, element, Key, protractor} from 'protractor';
import {LogInComponent} from '../login/login.po';

export class ConsultarSaldoComponent {
  navigateTo() {
    return browser.get('/consulta-saldo');
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
