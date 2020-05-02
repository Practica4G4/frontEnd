import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { ConsultarSaldoComponent } from './components/consultar-saldo/consultar-saldo.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import {TabsModule} from "ngx-bootstrap/tabs";

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    NavbarComponent,
    TipoDeCambioComponent,
    TransferenciaComponent,
    ConsultarSaldoComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
