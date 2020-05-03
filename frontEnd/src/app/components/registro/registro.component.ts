import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from '../../models/usuario/registro/registro-usuario';
import { NgForm, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import {UsuarioService} from '../../service/usuario/usuario.service';



declare var M: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioSeleccionado = new RegistroUsuario();
  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioSeleccionado = new RegistroUsuario();
  }

  regitrarUsuario(form: NgForm){



    if (!this.isText(form.value.nombre)) {
      alert('Solo se adminen letras en el campo nombre');
      return;
    }

    if (!this.isText(form.value.apellido)) {
      alert('Solo se adminen letras en el campo apellido');
      return;
    }

    if(form.value.dpi){
      this.service.postRegistrarUsuario(form.value).subscribe(res =>{
        M.toast({html: 'Usuario Creado'});
        this.router.navigate(['/login']);

      }, (err: any) => {
        if(err.status == 400){
          M.toast({html: 'dpi o numero de cuenta ya estan en uso.'});
          this.resetForm(form);
        }
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuarioSeleccionado = new RegistroUsuario();
    }
  }


  isText(value: string){
    return !/[^a-zA-Z]/.test(value);
  }
}
