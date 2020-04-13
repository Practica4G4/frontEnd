import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from '../../models/usuario/registro/registro-usuario';
import { ServiceService } from '../../service/service.service';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';



declare var M: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioSeleccionado = new RegistroUsuario();
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.usuarioSeleccionado = new RegistroUsuario();
  }

  regitrarUsuario(form: NgForm){
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

}
