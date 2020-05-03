import {Component, OnInit} from '@angular/core';
import {TabsetConfig} from 'ngx-bootstrap/tabs';
import {Transferencias} from '../../models/transferencia';
import {TransferenciaService} from '../../service/transferencia/transferencia.service';

// such override allows to keep some initial values

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), {type: 'tabs'});
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  providers: [{provide: TabsetConfig, useFactory: getTabsetConfig}]
})
export class ReportesComponent implements OnInit {
  user: any;
  transferenciasRecibidas: Transferencias;
  transferenciasRealizadas: Transferencias;

  constructor(
    private transferenciaService: TransferenciaService
  ) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario'));
    if (this.user) {
      this.getTransfernciasRealizadas();
      this.getTransfernciasRecibidas();
    }
  }

  getTransfernciasRealizadas(): void {
    this.transferenciaService.getTransferenciasRealizadas(this.user.noCuenta.toString())
      .subscribe(transferencias => this.transferenciasRealizadas = transferencias);
  }

  getTransfernciasRecibidas(): void {
    this.transferenciaService.getTransferenciasRecibidas(this.user.noCuenta.toString())
      .subscribe(transferencias => this.transferenciasRecibidas = transferencias);
  }

}
