import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { ConsultarSaldoComponent } from './consultar-saldo.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConsultarSaldoComponent', () => {
  let component: ConsultarSaldoComponent;
  let fixture: ComponentFixture<ConsultarSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ConsultarSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
