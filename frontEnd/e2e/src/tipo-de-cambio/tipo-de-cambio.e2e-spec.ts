import {TipodeCambioComponent} from './tipo-de-cambio.po';
import {LogInComponent} from '../login/login.po';
import {browser, logging, Key, protractor} from 'protractor';
import {formatDate} from "@angular/common";
import {count} from "rxjs/operators";

describe('Pagina Tipo de Cambio', () => {
  let component: TipodeCambioComponent;
  let logInComponent: LogInComponent;

  beforeEach(() => {
    logInComponent = new LogInComponent();
    component = new TipodeCambioComponent();
    logInComponent.logIn(component.navigateTo);
  });

  it('deberia mostrar encabezado de tipo de cambio', () => {
    expect(component.getTipoDeCambioHeader().getText()).toEqual('TIPO DE CAMBIO');
  });

  it('deberia mostrar valor del dolar en dolares', () => {
    expect(component.getDolarValue().getAttribute('placeholder')).toEqual('$ 1.00');
  });

  it('deberia mostrar valor del dolar en quetzales', () => {
    expect(component.getQuetzalValue().getAttribute('placeholder')).toBeDefined();
  });

  it('deberia mostrar mas de 0 registros en la tabla de tipos de cambio por fecha', () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    component.getFechaInput().sendKeys(formatDate(yesterday, 'dd/MM/yyyy', 'en_US'));
    component.getIngresarFechaButton().click();
    expect(component.getTipoDeCambioRegistros().count()).toBeGreaterThan(0);
  });

  it('fecha no existe, no deberia mostrar nada en la tabla de tipos de cambio por fecha', () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 5);
    component.getFechaInput().sendKeys(formatDate(yesterday, 'dd/MM/yyyy', 'en_US'));
    component.getIngresarFechaButton().click();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 2000);
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual('solo se pueden seleccionar 3 dias antes a la fecha actual.');
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
