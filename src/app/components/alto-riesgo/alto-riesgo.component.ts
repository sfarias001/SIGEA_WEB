import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

// import { Service, altoRiesgo } from '../../services/altoRiesgo/altoRiesgo.service';


@Component({
  selector: 'app-alto-riesgo',
  templateUrl: './alto-riesgo.component.html',
  styleUrls: ['./alto-riesgo.component.css']
})
export class AltoRiesgoComponent {


  altoRiesgoData: any[] = [
    {
      ID: 1,
      nombreSolicitante: 'prueba prueba',
      nombreProveedor: 'prueba prueba',
      radioBase: 'Polanco',
      Estatus: 'Abierto',
      validarTarea: `,
        <i class="material-icons">add_comment</i>
        `,
      Cancelar: `
      <i class="material-icons">add_comment</i>
      `,
      Detalle: `
      <i class="material-icons">add_comment</i>
      `,

    },
    {
      ID: 2,
      nombreSolicitante: 'prueba prueba',
      nombreProveedor: 'prueba prueba',
      radioBase: 'Polanco',
      Estatus: 'Abierto',
      validarTarea: `,
        <i class="material-icons">add_comment</i>
        `,
      Cancelar: `
      <i class="material-icons">add_comment</i>
      `,
      Detalle: `
      <i class="material-icons">add_comment</i>
      `,
    },
    {
      ID: 3,
      nombreSolicitante: 'prueba prueba',
      nombreProveedor: 'prueba prueba',
      radioBase: 'Polanco',
      Estatus: 'Abierto',
      validarTarea: `,
        <i class="material-icons">add_comment</i>
        `,
      Cancelar: `
      <i class="material-icons">add_comment</i>
      `,
      Detalle: `
      <i class="material-icons">add_comment</i>
      `,
    },
    ];



    // Evento de botones

    
    validarTarea() {
      
    }

    
    Cancelar() {
      
    }

    
    Detalle() {
      
    }



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
