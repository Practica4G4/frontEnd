import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciasRecibidasComponent } from './tranferencias-recibidas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TranferenciasRecibidasComponent', () => {
  let component: TranferenciasRecibidasComponent;
  let fixture: ComponentFixture<TranferenciasRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
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
