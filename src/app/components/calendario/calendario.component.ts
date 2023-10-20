import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { locale } from 'devextreme/localization'

// DevExtreme
import { Activity, Service } from '../../services/calendario/calendario.service';
import { DxSchedulerModule } from "devextreme-angular";

import Swal from 'sweetalert2';



  @Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.css'],
    providers: [Service],
  })

export class CalendarioComponent {

  sidebarDirectory = false;
    
  // CALENDARIO DEV DevExtreme
  activitiesData: Activity[];

  currentDate: Date = new Date();
  daysViewStartDate: Date = new Date();
  weeksViewStartDate: Date = new Date();
  
  value: any;
  views: string[] = ['dia', 'semana', 'mes'];


  

  constructor(service: Service) {
    this.activitiesData = service.getActivities();
    locale('es')
  }

  // onAppointmentDblClick(e: any) {
  //   const appointmentData: AppointmentData = e.appointmentData;
  //   if (appointmentData) {

  //   }
  // }



  // Ventana emergente de calendario
  onAppointmentFormOpening(data: any) {
    data.cancel=true;
    let activity: Activity | undefined = undefined;

    if (data.appointmentData) {
      const selectedIndex = this.activitiesData.indexOf(data.appointmentData);
      if (selectedIndex !== -1) {
          activity = this.activitiesData[selectedIndex];
      }
  }

    Swal.fire({
      // title: 'Detalles de la actividad',
      html: `

      <h3 style="text-align:left;"> Detalles de la actividad </h3>
      
      <div class="mt-5">
          <div>
              <h1  style="text-align:left; font-size:20px"> Actividad </h1>
              <span> ${activity ? activity.nombreActividad: ''}  </span>
          </div>
          <div>
              <h1 style="text-align:left; font-size:20px"> Sitio </h1>
              <span> ${activity ? activity.sitio: ''}  </span>
          </div>
          <div>
              <h1 style="text-align:left; font-size:20px"> Empresa </h1>
              <span> ${activity ? activity.empresa: ''}  </span>
          </div>
          <div>
              <h1 style="text-align:left; font-size:20px"> Fecha de solicitud </h1>
              <span> ${activity ? activity.fechaSolicitud: ''}  </span>
          </div>
          <div>
              <h1 style="text-align:left; font-size:20px"> Fecha de inicio </h1>
              <span> ${activity ? activity.startDate: ''}  </span>
          </div>
          <div>
              <h1 style="text-align:left; font-size:20px"> Fecha de término </h1>
              <span> ${activity ? activity.endDate: ''}  </span>
          </div>
      </div>
  `,

      confirmButtonText: 'Aceptar',
      customClass: {
        title: 'swal-title-left-aligned', 
      },

      width: '60%',
      preConfirm: () => {

      }
    });




    
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
