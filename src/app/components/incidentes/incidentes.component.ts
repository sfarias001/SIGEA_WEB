import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';



import { Service, Incidente } from '../../services/incidentes/incidentes.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.component.html',
  styleUrls: ['./incidentes.component.css'],
  providers: [Service],

})
export class IncidentesComponent {

  incidentes: Incidente[] = [];


  data: any[] = [
    {
      ID: 1,
      Region: 'Región 1',
      Inmueble: 'Inmueble 1',
      Tipo_alarma: 'alarma 1',
      Particion: 'particion 1',
      Zona: 'Zona 1',
      Descripcion: 'Prueba',
      Fecha: '10/03/2023',
      Hora: '10:00 AM',
      AtiendeCRM_CMC: 'CRM',
      Motivo: 'Razón 1',
      QuienReporta: 'Usuario 1',
      Registro_evento: 'Prueba',
      Causa: 'alerta de camara',
      Activacion_alarma: 'camara',
      Accion: 'sin acción',
      Estatus: 'Activo',
      Acciones: `
        <i class="material-icons">add_comment</i>
        <i class="material-icons">visibility</i>
        <i class="material-icons">update</i>
      `
    },
    {
      ID: 2,
      Region: 'Región 1',
      Inmueble: 'Inmueble 1',
      Tipo_alarma: 'alarma 1',
      Particion: 'particion 1',
      Zona: 'Zona 1',
      Descripcion: 'Prueba',
      Fecha: '10/03/2023',
      Hora: '10:00 AM',
      AtiendeCRM_CMC: 'CRM',
      Motivo: 'Razón 1',
      QuienReporta: 'Usuario 1',
      Registro_evento: 'Prueba',
      Causa: 'alerta de camara',
      Activacion_alarma: 'camara',
      Accion: 'sin acción',
      Estatus: 'Activo',
      Acciones: `
        <i class="material-icons">add_comment</i>
        <i class="material-icons">visibility</i>
        <i class="material-icons">update</i>
      `
    },
    {
      ID: 3,
      Region: 'Región 1',
      Inmueble: 'Inmueble 1',
      Tipo_alarma: 'alarma 1',
      Particion: 'particion 1',
      Zona: 'Zona 1',
      Descripcion: 'Prueba',
      Fecha: '10/03/2023',
      Hora: '10:00 AM',
      AtiendeCRM_CMC: 'CRM',
      Motivo: 'Razón 1',
      QuienReporta: 'Usuario 1',
      Registro_evento: 'Prueba',
      Causa: 'alerta de camara',
      Activacion_alarma: 'camara',
      Accion: 'sin acción',
      Estatus: 'Activo',
      Acciones: `
        <i class="material-icons">add_comment</i>
        <i class="material-icons">visibility</i>
        <i class="material-icons">update</i>
      `
    },
    ];


  constructor(private router: Router, service: Service) {
    this.incidentes = service.getIncidentes();


    this.verDetalle = this.verDetalle.bind(this);
  }

  
  agregarComentario() {
    Swal.fire({
      title: 'Agregar comentario',
      html: `

      <div>
        <h6 style="float:left;">Incidente no:</h6>
      </div>
        
      `,
      confirmButtonText: 'Agregar',
      width: '85%',
      preConfirm: () => {

      }
    });
  }

    actualizar() {
      
    }


    verDetalle(e: any){
      this.router.navigate(['/detalle-incidente'])      
    }
  
  // Navegación menu
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink: '/calendario' },        
        { label: 'Incidentes', icon: 'pi pi-exclamation-triangle', routerLink: '/incidentes' },
        { label: 'Consulta de bitácora', icon: 'pi pi-book', routerLink: '/bitacora' },
        { label: 'Actividades de alto riesgo', icon: 'pi pi-info', routerLink: '/alto_riesgo' }
      ];
}



  // Sweet alert
  formData= {
    nombre: '',
    email: ''
  }



// Agregar incidente
regIncidente() {
  Swal.fire({
    title: 'Nuevo incidente',
    html: `
      <form style="display: flex; justify-content:center; align-items:center;">
        <div style="margin-right:20px;">
          <label for="region" style="float:left;">Región</label>
          <input type="text" class="form-control" id="region" [(ngModel)]="formData.region">

          <label for="inmueble" style="float:left;">Inmueble</label>
          <input type="text" class="form-control" id="inmueble" [(ngModel)]="formData.inmueble">

          <label for="tipo_alarma" style="float:left;">Tipo de alarma</label>
          <input type="text" class="form-control" id="tipo_alarma" [(ngModel)]="formData.tipo_alarma">

          <label for="particion" style="float:left;">´Partición</label>
          <input type="text" class="form-control" id="particion" [(ngModel)]="formData.particion">

          <label for="zona" style="float:left;">Zona</label>
          <input type="text" class="form-control" id="zona" [(ngModel)]="formData.zona">

        </div>

        <div style="margin-right:20px;">
          <label for="descripcion_zona" style="float:left;">Descripción de la zona</label>
          <input type="text" class="form-control" id="descripcion_zona" [(ngModel)]="formData.descripcion_zona">
        
          <div class="display:flex;">
            <label for="fecha" style="float:left;">Fecha</label>
            <input type="date" class="form-control" id="fecha" [(ngModel)]="formData.fecha" style="width:100px;">

            <label for="hora" style="float:left;">Hora</label>
            <input type="time" class="form-control" id="hora" [(ngModel)]="formData.hora" style="width:100px;">
         </div>

         
          <label for="atiende" style="float:left;">Atiende CRM/CMC</label>
          <input type="text" class="form-control" id="atiende" [(ngModel)]="formData.atiende">

          <label for="motivo" style="float:left;">Motivo</label>
          <input type="text" class="form-control" id="atiende" [(ngModel)]="formData.motivo">
        
         </div>

          <div >
            <label for="quiern_reporta" style="float:left;">Quien reporta</label>
            <input type="text" class="form-control" id="quien_reporta" [(ngModel)]="formData.quien_reporta">

            
            <label for="quiern_reporta" style="float:left;">Registro de evento</label>
            <input type="text" class="form-control" id="registro_evento" [(ngModel)]="formData.registro_evento">

            
            <label for="quiern_reporta" style="float:left;">Causa</label>
            <input type="text" class="form-control" id="causa" [(ngModel)]="formData.causa">

            
            <label for="quiern_reporta" style="float:left;">Activación de alarma</label>
            <input type="text" class="form-control" id="activacion_alarma" [(ngModel)]="formData.activacion_alarma">

            
            <label for="quiern_reporta" style="float:left;">Acción</label>
            <input type="text" class="form-control" id="accion" [(ngModel)]="formData.accion">

          </div>
      </form>
    `,
    // showCancelButton: true,
    confirmButtonText: 'Registrar',
    width: '85%',
    // cancelButtonText: 'Cancelar',
    preConfirm: () => {
      console.log('Nombre:', this.formData.nombre);
      console.log('Email:', this.formData.email);
    }
  });
}
}
