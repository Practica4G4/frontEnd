import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';
import { Transferencia } from 'src/app/models/transferencia';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(
    private router: Router,
    private transService: TransferenciaService
  ) { }

  ngOnInit(): void {
    //Cargar LocalStorage
    if (localStorage.getItem('usuario') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('usuario'));
      console.log(this.usuarios);
    } else {
      this.router.navigate(['/login']);
      console.log(`Ningun usuario ha iniciado sesion`);
    }

    //Obtener los cuentahabientes
    this.obtenerCuentahabientes();
    this.obtenerSaldoActual();
  }

  selectedValue: any;
  countries: any;
  saldoActual: number = 0;
  sA: any;
  montoTransferir: number = 0;
  usuarios: any = {};
  detalleTransferencia: Transferencia = {
    monto: '',
    cuentaOrigen: '',
    cuentaDestino: ''
  } 

  async transferirMonto(){
    if(this.saldoActual >= this.montoTransferir){

      this.detalleTransferencia.cuentaOrigen = this.usuarios.noCuenta.toString();
      this.detalleTransferencia.monto = this.montoTransferir.toString();
      this.detalleTransferencia.cuentaDestino = this.selectedValue.noCuenta.toString();
      
      console.log(this.detalleTransferencia);

      this.transService.postTransferencia(this.detalleTransferencia).subscribe(
        res=>{
          console.log(res);
          //ACTUALIZAR EL SALDO
          this.obtenerSaldoActual();
          //ACTUALIZAR EL LOCAL STORAGE
          
          //rederigir a otra pantalla
          alert('Transferencia exitosa')
          this.router.navigate([`consulta-saldo`]);

        }, error => console.log(error)
      );
    }else{
      alert('El monto a trasferir no puede ser mayor al monto total de la cuenta')
    }
    
  }

  obtenerCuentahabientes(){
    console.log('Entro aca')
    this.transService.getListadoCuentas().subscribe(
      res=>{
        console.log(res);
        this.countries = res;
      }, error => console.log(error)
    );
  }

  obtenerSaldoActual(){
    this.transService.getSaldoActual(this.usuarios.noCuenta).subscribe(
      res=>{
        console.log('SaldoActual')
        //console.log(res)
        this.sA = res;
        this.saldoActual = this.sA.saldoCuenta;
      }, error => console.log(error)
    );
  }

}
