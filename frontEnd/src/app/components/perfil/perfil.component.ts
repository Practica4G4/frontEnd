import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router) { }

  usuarios: any = {};

  ngOnInit(): void {
    if (localStorage.getItem('usuario') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('usuario'));
      console.log(this.usuarios);
    } else {
      this.router.navigate(['/login']);
      console.log(`Ningun usuario ha iniciado sesion`);
    }
  }

}
