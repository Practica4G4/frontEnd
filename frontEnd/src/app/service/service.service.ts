import { Injectable } from '@angular/core';
import { RegistroUsuario } from '../models/registro-usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly urlApi = 'http://localhost:8000';
  
  constructor(private http: HttpClient) { }

  postRegistrarUsuario(usuario: RegistroUsuario){
    return this.http.post(this.urlApi + '/usuario/registrar',usuario);
  }


}
