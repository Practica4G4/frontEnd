import { TestBed } from '@angular/core/testing';

import { TransferenciaService } from './transferencia.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TransferenciaService', () => {
  let service: TransferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TransferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cuentahabientes', () =>{
    
  });
});
