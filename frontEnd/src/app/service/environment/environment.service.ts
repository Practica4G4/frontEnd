import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  API_URI = 'http://64.225.24.183:9350';
  constructor() { }
}
