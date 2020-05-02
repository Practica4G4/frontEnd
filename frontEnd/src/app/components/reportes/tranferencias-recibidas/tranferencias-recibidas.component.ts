import {Component, Input, OnInit} from '@angular/core';
import {Transferencias} from '../../../models/transferencia';

@Component({
  selector: 'app-tranferencias-recibidas',
  templateUrl: './tranferencias-recibidas.component.html',
  styleUrls: ['./tranferencias-recibidas.component.css']
})
export class TranferenciasRecibidasComponent implements OnInit {
  @Input()
  tranferencias: Transferencias;

  constructor() { }

  ngOnInit(): void {
  }

}
