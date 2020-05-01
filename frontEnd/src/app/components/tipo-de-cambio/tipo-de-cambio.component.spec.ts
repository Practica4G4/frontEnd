import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeCambioComponent } from './tipo-de-cambio.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TipoDeCambioComponent', () => {
  let component: TipoDeCambioComponent;
  let fixture: ComponentFixture<TipoDeCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ TipoDeCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
