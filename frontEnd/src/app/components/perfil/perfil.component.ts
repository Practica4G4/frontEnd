import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router,
            private usuarioS: UsuarioService
      ) { }

  usuarios: any = {};
  usuarioTemp: any;
  ngOnInit(): void {
    if (localStorage.getItem('usuario') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('usuario'));
      this.obtenerInfo(this.usuarios.noCuenta);
    } else {
      this.router.navigate(['/login']);
      console.log(`Ningun usuario ha iniciado sesion`);
    }
  }

  obtenerInfo(id:string){
    this.usuarioS.getInfoUsuario(id).subscribe(
      res=>{
        this.usuarioTemp = res;
        this.usuarios.noCuenta = this.usuarioTemp.noCuenta;
        this.usuarios.nombre = this.usuarioTemp.nombre;
        this.usuarios.apellido = this.usuarioTemp.apellido;
        this.usuarios.dpi = this.usuarioTemp.dpi;

      }, error => console.log(error)
    );
  }

}
