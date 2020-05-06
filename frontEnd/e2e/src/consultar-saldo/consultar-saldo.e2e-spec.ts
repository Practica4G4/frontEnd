import {ConsultarSaldoComponent} from './consultar-saldo.po';
import {browser, logging, Key, protractor} from 'protractor';

describe('Pagina para Consultar Saldo', () => {
  let component: ConsultarSaldoComponent;

  beforeEach(() => {
    component = new ConsultarSaldoComponent();
    component.logIn();
  });

  it('deberia mostrar encabezado de saldo actual', () => {
      expect(component.getEncabezado().getText()).toEqual('SALDO ACTUAL');
  });

  it('deberia mostrar 4 etiquetas de datos', () => {
    expect(component.getLabelsCampos().count()).toBe(4);
  });

  it('deberia mostrar el saldo de la cuenta 12345', () => {
    expect(component.getLabelsDatos().get(2).getText()).toEqual('12345');
  });


  it('deberia mostrar 4 datos', () => {
    expect(component.getLabelsDatos().count()).toBe(4);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
