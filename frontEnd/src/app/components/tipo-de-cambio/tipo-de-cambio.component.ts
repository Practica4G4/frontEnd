import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCambioService } from '../../service/tipo-cambio/tipo-cambio.service';

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
  tipoDeCambioFechas: any = [];

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
    var dia = fecha.value.split('/')
    var myInt = parseInt(dia[0], 10)
    if (myInt >= 2) {
      this.tipoDeCambioFecha = true;
      this.tipoCambio.getTipoCambioFecha(fecha.value).subscribe(
        res => {
          this.tipoDeCambioFechas = res;

          console.log(this.tipoDeCambioFechas);
        }, error => console.log(error)
      );
    }else{
      alert('solo se pueden seleccionar 3 dias antes a la fecha actual.');
      console.log("solo se pueden seleccionar 3 dias antes.");
    }
  }
}
