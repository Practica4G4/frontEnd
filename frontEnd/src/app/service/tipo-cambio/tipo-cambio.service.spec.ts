import { TestBed } from '@angular/core/testing';
import { TipoCambioService } from './tipo-cambio.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TipoCambioService', () => {
  let service: TipoCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TipoCambioService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
