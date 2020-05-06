import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Pagina de inicio', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deberia mostrarse el nombre del sitio', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('SISTEMA BANCARIO REVISION DE PRACTICA 3 Y 4');
  });

  it('deberian ser 2 items si no hay sesion iniciada', () => {
    page.navigateTo();
    expect(page.getNavBarItems().count()).toBe(2);
  });

  it('deberian mostrar opcion de Registro si no hay sesion iniciada', () => {
    page.navigateTo();
    expect(page.getNavBarItems().get(0).getText()).toEqual('REGISTRARSE');
  });

  it('deberian redirigir a pagina de Registro', () => {
    page.navigateTo();
    page.getNavBarItems().get(0).click();
    expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:4201/registro');
  });

  it('deberian mostrar opcion de Inicio de Sesion si no hay sesion iniciada', () => {
    page.navigateTo();
    expect(page.getNavBarItems().get(1).getText()).toEqual('LOG IN');
  });

  it('deberian redirigir a pagina de Inicio de Sesion', () => {
    page.navigateTo();
    page.getNavBarItems().get(1).click();
    expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:4201/login');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
