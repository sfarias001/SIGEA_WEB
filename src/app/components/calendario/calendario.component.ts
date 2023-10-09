import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

// DevExtreme
import { Appointment, Service } from './calendario.service';





@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [Service],
})

export class CalendarioComponent {
  
// CALENDARIO DEV DevExtreme
appointmentsData: Appointment[];

currentDate: Date = new Date(2021, 3, 29);

constructor(service: Service) {
  this.appointmentsData = service.getAppointments();
}

  // MENU
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
        { label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink: '/calendario' },        
        { label: 'Incidentes', icon: 'pi pi-exclamation-triangle', routerLink: '/incidentes' },
        { label: 'Consulta de bitácora', icon: 'pi pi-book', routerLink: '/bitacora' },
        { label: 'Actividades de alto riesgo', icon: 'pi pi-info', routerLink: '/alto_riesgo' }
    ];
}

}
