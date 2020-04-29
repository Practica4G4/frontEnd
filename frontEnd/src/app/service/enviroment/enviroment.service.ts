import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  readonly urlApi = 'http://64.225.24.183:9350/';


  constructor() { }
}
