import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuario } from '../models/usuario/registro/registro-usuario';
import { AutenticarUsuario } from '../models/usuario/autenticar/autenticar-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly urlApi = 'https://ad1prac3.herokuapp.com';
  
  constructor(private http: HttpClient) { }

  postRegistrarUsuario(usuario: RegistroUsuario){
    return this.http.post(this.urlApi + '/usuario/registrar',usuario);
  }

  autenticarUsuario(usuario: AutenticarUsuario){
    return this.http.post(this.urlApi + '/usuario/autenticar',usuario);
  }

}
