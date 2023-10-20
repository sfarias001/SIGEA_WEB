import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


// Primeng components
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'; 
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

// DevExtreme
import { DxDataGridModule } from 'devextreme-angular';
import { DxTemplateModule } from 'devextreme-angular';
import { DxSchedulerModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Sweet Alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { IncidentesComponent } from './components/incidentes/incidentes.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { AltoRiesgoComponent } from './components/alto-riesgo/alto-riesgo.component';
import { DetalleIncidenteComponent } from './components/detalle-incidente/detalle-incidente.component';

// Services
import { Service } from './services/incidentes/incidentes.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CalendarioComponent,
    IncidentesComponent,
    BitacoraComponent,
    AltoRiesgoComponent,
    DetalleIncidenteComponent,
    
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module,

    AppRoutingModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxTemplateModule,

    FormsModule,
    BrowserAnimationsModule,
    TabMenuModule,
    ButtonModule,
    SidebarModule,
    InputTextareaModule,
    InputTextModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule { }
