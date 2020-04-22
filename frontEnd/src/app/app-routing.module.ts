import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {componentFactoryName} from '@angular/compiler';
import {RegistroComponent} from './components/registro/registro.component';
import {LoginComponent} from './components/login/login.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {TipoDeCambioComponent} from './components/tipo-de-cambio/tipo-de-cambio.component';


const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'tipo-de-cambio',
    component: TipoDeCambioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
