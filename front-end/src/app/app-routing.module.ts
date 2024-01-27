import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { AprovadorComponent } from './aprovador/aprovador.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'solicitante', component: SolicitanteComponent },
  { path: 'aprovador', component: AprovadorComponent },
  { path: 'administrativo', component: AdministrativoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
