import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Viwes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { IncidentesComponent } from './components/incidentes/incidentes.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { AltoRiesgoComponent } from './components/alto-riesgo/alto-riesgo.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'calendario', component: CalendarioComponent }, 
  { path: 'incidentes', component: IncidentesComponent }, 
  { path: 'bitacora', component: BitacoraComponent }, 
  { path: 'alto_riesgo', component: AltoRiesgoComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
