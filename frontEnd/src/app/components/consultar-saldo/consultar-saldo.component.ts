import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.css']
})
export class ConsultarSaldoComponent implements OnInit {

  constructor( 
    private router: Router,
    private transService: TransferenciaService
    ) { }

  usuarios: any = {};
  saldoActual: number = 0;
  sA: any;

  ngOnInit(): void {
    if (localStorage.getItem('usuario') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('usuario'));
      console.log(this.usuarios);
      this.obtenerSaldoActual();
    } else {
      this.router.navigate(['/login']);
      console.log(`Ningun usuario ha iniciado sesion`);
    }

  }

  obtenerSaldoActual(){
    this.transService.getSaldoActual(this.usuarios.noCuenta).subscribe(
      res=>{
        console.log('SaldoActual')
        console.log(res)
        this.sA = res;
        this.saldoActual = this.sA.saldoCuenta;
      }, error => console.log(error)
    );
  }


}
