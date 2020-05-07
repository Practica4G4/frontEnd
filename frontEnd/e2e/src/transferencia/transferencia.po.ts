import {browser, by, element} from 'protractor';

export class TransferenciaComponent {
  navigateTo() {
    return browser.get('/transferencia');
  }

  getTransferenciaTitle() {
    return element(by.id('transferencia-title'));
  }

  getDatosPersonalesEncabezado() {
    return element(by.id('datos-personales'));
  }

  getDatosTransferenciaEncabezado() {
    return element(by.id('datos-transferencia'));
  }

  getSelectCuentabiente() {
    return element(by.id('slc-cuentabiente'));
  }

  getSelectCuentabienteSelected() {
    return element(by.id('slc-cuentabiente option:selected'));
  }

  getMontoTransferencia() {
    return element(by.id('monto'));
  }

  getBtnTransferir() {
    return element(by.css('button.btn.btn-success.btn-block'));
  }
}
