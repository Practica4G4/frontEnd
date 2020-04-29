import {Injectable} from '@angular/core';
import {EnvironmentService} from '../environment/environment.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(
    private env: EnvironmentService,
    private http: HttpClient
  ) {
  }

  getTipoCambioDia() {
    return this.http.get(`${this.env.API_URI}/tipoCambio/dia`);
  }

  getTipoCambioFecha(fecha: string) {
    return this.http.get(`${this.env.API_URI}/tipoCambio/fechaInicial?fecha=${fecha}`);
  }
}
