import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectedValue: any;
  
  countries = [
    {"name": "portugal"},
    {"name": "brasil"},
    {"name": "gt"},
    {"name": "argentina"}
  ]

  transferirMonto(){
    alert('hola');
  }

}
