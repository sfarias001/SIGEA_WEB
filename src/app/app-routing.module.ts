import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { IncidentesComponent } from './components/incidentes/incidentes.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { AltoRiesgoComponent } from './components/alto-riesgo/alto-riesgo.component';
import { DetalleIncidenteComponent } from './components/detalle-incidente/detalle-incidente.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'incidentes', component: IncidentesComponent },
  { path: 'bitacora', component: BitacoraComponent },
  { path: 'alto_riesgo', component: AltoRiesgoComponent },
  { path: 'detalle-incidente', component: DetalleIncidenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


