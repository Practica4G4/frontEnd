import { Component, OnInit } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import {Transferencias} from "../../models/transferencia";

// such override allows to keep some initial values

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'tabs' });
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class ReportesComponent implements OnInit {

  transferenciasRecibidas: Transferencias;
  transferenciasRealizadas: Transferencias;

  constructor() { }

  ngOnInit(): void {
  }

}
