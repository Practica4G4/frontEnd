import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciasRealizadasComponent } from './tranferencias-realizadas.component';

describe('TranferenciasRealizadasComponent', () => {
  let component: TranferenciasRealizadasComponent;
  let fixture: ComponentFixture<TranferenciasRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferenciasRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferenciasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
