import {LogInComponent} from './login.po';
import {browser, logging, Key, protractor} from 'protractor';


describe('Pagina de Inicio de Sesion', () => {
  let component: LogInComponent;

  beforeEach(() => {
    component = new LogInComponent();
    component.navigateTo();
  });

  it('deberian mostrarse 2 etiquetas', () => {
    expect(component.getComponentLables().count()).toBe(2);
  });

  it('deberian mostrarse boton de Inicio de Sesion', () => {
    expect(component.getLoginButton().getText()).toEqual('INGRESAR');
  });

  it('deberian mostrarse boton de Registro', () => {
    expect(component.getRegisterButton().getText()).toEqual('REGISTRAR');
  });

  it('deberia redirigir a pagina de Registro', () => {
    const button = component.getRegisterButton();
    button.click();
    expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:4201/registro');
  });

  it('no. Cuenta Input debe aceptar texto', () => {
    const text = '1234567891011';
    component.getCuentaInput().sendKeys(text);
    expect(component.getCuentaInput().getAttribute('value')).toEqual(text);
  });

  it('Contraseña Input debe aceptar texto', () => {
    const text = '1234567891011';
    component.getContraseniaInput().sendKeys(text);
    expect(component.getContraseniaInput().getAttribute('value')).toEqual(text);
  });

  it('no deberia hacer nada con usuario incorrecto', () => {
    component.getCuentaInput().sendKeys('1234561');
    component.getContraseniaInput().sendKeys('1111655');
    const button = component.getLoginButton();
    button.click();
    expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:4201/login');
  });

  it('Deberia redirigir al perfil con usuario correcto', () => {
    component.getCuentaInput().sendKeys('12345');
    component.getContraseniaInput().sendKeys('1234');
    const button = component.getLoginButton();
    button.click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('perfil'), 2000)
      .then((result) => {
        expect(result).toEqual(true);
      });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
