import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { AprovadorComponent } from './aprovador/aprovador.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    SolicitanteComponent,
    AprovadorComponent,
    AdministrativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
