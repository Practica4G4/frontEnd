import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TipoCambioService} from "../../service/tipo-cambio/tipo-cambio.service";

@Component({
  selector: 'app-tipo-de-cambio',
  templateUrl: './tipo-de-cambio.component.html',
  styleUrls: ['./tipo-de-cambio.component.css']
})
export class TipoDeCambioComponent implements OnInit {

  constructor(
    private router: Router,
    private tipoCambio: TipoCambioService) { }

  usuarios: any = {};
  tipoDeCambio: any = {};

  tipoDeCambioFecha = false;

  ngOnInit(): void {
    if (localStorage.getItem('usuario') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('usuario'));
      this.tipoCambio.getTipoCambioDia().subscribe(
        res => {
          this.tipoDeCambio = res;
          console.log(this.tipoDeCambio);
        }, err => console.log(err)
      );
    } else {
      this.router.navigate(['/login']);
      console.log(`Ningun usuario ha iniciado sesion`);
    }
  }

  consultarPorFecha(fecha: HTMLInputElement) {
    console.log(fecha.value);
    this.tipoDeCambioFecha = true;
  }
}
