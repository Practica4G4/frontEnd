import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistroUsuario} from '../../models/usuario/registro/registro-usuario';
import {AutenticarUsuario} from '../../models/usuario/autenticar/autenticar-usuario';
import {EnvironmentService} from '../environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

  postRegistrarUsuario(usuario: RegistroUsuario){
    return this.http.post(this.env.API_URI + '/usuario/registrar', usuario);
  }

  autenticarUsuario(usuario: AutenticarUsuario){
    return this.http.post(this.env.API_URI + '/usuario/autenticar', usuario);
  }

  getInfoUsuario(id: string){
    return this.http.get(`${this.env.API_URI}/usuario/mostrarPerfil/${id}`);
  }
}
