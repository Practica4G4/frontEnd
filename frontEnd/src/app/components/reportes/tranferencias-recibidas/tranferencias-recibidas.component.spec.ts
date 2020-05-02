import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciasRecibidasComponent } from './tranferencias-recibidas.component';

describe('TranferenciasRecibidasComponent', () => {
  let component: TranferenciasRecibidasComponent;
  let fixture: ComponentFixture<TranferenciasRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferenciasRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferenciasRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
