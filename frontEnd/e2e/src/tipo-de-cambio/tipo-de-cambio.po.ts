import {browser, by, element} from 'protractor';

export class TipodeCambioComponent {
  navigateTo() {
    return browser.get('/tipo-de-cambio');
  }

  getTipoDeCambioHeader() {
    return element(by.id('tipo-de-cambio-header'));
  }

  getDolarValue() {
    return element(by.id('dolar'));
  }

  getQuetzalValue() {
    return element(by.id('quetzal'));
  }

  getFechaInput() {
    return element(by.id('fecha'));
  }

  getIngresarFechaButton() {
    return element(by.id('btn-ingresar'));
  }

  getTipoDeCambioRegistros() {
    return element.all(by.css('.table-secondary'));
  }
}
