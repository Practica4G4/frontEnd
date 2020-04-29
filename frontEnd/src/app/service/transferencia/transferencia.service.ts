import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../environment/environment.service';
import { Transferencia } from 'src/app/models/transferencia';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(
    private http: HttpClient,
    private env: EnvironmentService
  ) { }

  //http://64.225.24.183:9350/usuario/mostrarCuentas
  getListadoCuentas(){
    //return this.http.get(this.env.API_URI + '/usuario/mostrarCuentas');
    return this.http.get(`${this.env.API_URI}/usuario/mostrarCuentas`);
  }

  postTransferencia(transferencia: Transferencia){
    return this.http.post(`${this.env.API_URI}/transferencia/transferir`,transferencia);
  }

  getSaldoActual(id: string){
    return this.http.get(`${this.env.API_URI}/usuario/obtenerSaldoCuenta/${id}`);
  }

}
