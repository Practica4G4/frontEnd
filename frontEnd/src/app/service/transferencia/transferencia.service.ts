import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnviromentService } from '../enviroment/enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService
  ) { }

  //http://64.225.24.183:9350/usuario/mostrarCuentas
  getListadoCuentas(){
    return this.http.get(`${this.env.urlApi}usuario/mostrarCuentas`);
  }

  postTransferencia(){
    //return this.http.post(`${this.env.urlApi}transferencia/transferir`,);
  }

}
