import {TransferenciaComponent} from './transferencia.po';
import {LogInComponent} from '../login/login.po';
import {browser, logging, Key, protractor} from 'protractor';

describe('Pagina Realizar Transferencia', () => {
  let component: TransferenciaComponent;
  let loginComponent: LogInComponent;

  beforeEach(() => {
    loginComponent = new LogInComponent();
    component = new TransferenciaComponent();
    loginComponent.logIn(component.navigateTo);
  });

  it('deberia mostar encabezado de transferencia', () => {
    expect(component.getTransferenciaTitle().getText()).toEqual('TRANSFERENCIA');
  });

  it('deberia mostar encabezado de datos personales', () => {
    expect(component.getDatosPersonalesEncabezado().getText()).toEqual('DATOS PERSONALES');
  });

  it('deberia mostar encabezado de datos de la transferencia', () => {
    expect(component.getDatosTransferenciaEncabezado().getText()).toEqual('DATOS DE LA TRANSFERENCIA');
  });

  it('deberia de mostrar alerta de error, monto mayor al que puede transferir', () => {
    component.getSelectCuentabiente().click();
    browser.actions().sendKeys(Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(Key.ENTER).perform();

    component.getMontoTransferencia().sendKeys('10000000000000000000000000000000000000000000000000');
    component.getBtnTransferir().click();

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 2000);
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual('El monto a trasferir no puede ser mayor al monto total de la cuenta');
    alertDialog.accept();
  });

  it('deberia de mostrar alerta de exito al transferir', () => {
    component.getSelectCuentabiente().click();
    browser.actions().sendKeys(Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(Key.ENTER).perform();

    component.getMontoTransferencia().sendKeys('0');
    component.getBtnTransferir().click();

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 2000);
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual('Transferencia exitosa');
    alertDialog.accept();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
