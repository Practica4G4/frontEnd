import {Component, Input, OnInit} from '@angular/core';
import {Transferencias} from '../../../models/transferencia';
import {TransferenciaService} from "../../../service/transferencia/transferencia.service";

@Component({
  selector: 'app-tranferencias-realizadas',
  templateUrl: './tranferencias-realizadas.component.html',
  styleUrls: ['./tranferencias-realizadas.component.css']
})
export class TranferenciasRealizadasComponent implements OnInit {
  user: any;
  @Input()
  tranferencias: Transferencias;

  constructor() {
  }

  ngOnInit(): void {
  }

}
