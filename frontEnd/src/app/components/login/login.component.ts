import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from 'src/app/models/registro-usuario';
import { ServiceService } from 'src/app/service/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioSeleccionado = new RegistroUsuario();
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  autenticarUsuario(form: NgForm){
    
  }

  resetForm(form?: NgForm){

  }

}
