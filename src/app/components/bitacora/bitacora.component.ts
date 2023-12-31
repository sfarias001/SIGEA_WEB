import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Service } from '../../services/bitacora/bitacora.service';
import Swal from 'sweetalert2';
import { Bitacora } from 'src/app/models/bitacora';


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [Service],
})


export class BitacoraComponent implements OnInit {
  bitacoraItems: Bitacora[] = [];
  pageSize: number = 10;
  imagen: string | undefined = '';
  imagenTemplate: string = '';

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.bitacoraItems = this.service.getBitacora();

    this.bitacoraItems.forEach((element) => {
      if (element.DetalleImagen?.imagenes != undefined) {
        console.log('e = ', element.DetalleImagen?.imagenes[0].url);
        let ruta = element.DetalleImagen?.imagenes[0].url;
        console.log("ruta = ",ruta);
        
        this.imagen = ruta;
        this.imagenTemplate = `
    <ng-template let-data="data">
      <img src="${ruta}" alt="Imagen" style="width: 35px; cursor:pointer ;">
    </ng-template>
  `;
      }
    });

    // for (let item of this.bitacoraItems) {
    //   // if (item.Detalle) {
    //   //   for (const detalle of item) {
    //   //       detalle.ImagenUrl = `assets/images${detalle.Image}`;
    //   //   }
    //   // }
    // }
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      {
        label: 'Calendario',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/calendario',
      },
      {
        label: 'Incidentes',
        icon: 'pi pi-exclamation-triangle',
        routerLink: '/incidentes',
      },
      {
        label: 'Consulta de bitácora',
        icon: 'pi pi-book',
        routerLink: '/bitacora',
      },
      {
        label: 'Actividades de alto riesgo',
        icon: 'pi pi-info',
        routerLink: '/alto_riesgo',
      },
    ];
  }

  items: MenuItem[] | undefined;

  // Sweet alert
  formData = {
    nombre: '',
    email: '',
  };

  regNovedad() {
    Swal.fire({
      title: 'Registro de alarmas',
      html: `

          <form style="display: flex;">
              <div style="margin-right: 20px;">
                <label for="hora_inicio">Hora de inicio:</label>
                <input type="text" class="form-control" id="hora_inicio" [(ngModel)]="formData.hora_inicio">
              </div>
            
              <div style="margin-right: 20px;">
                <label for="hora_fin">Hora fin:</label>
                <input type="text" class="form-control" id="hora_fin" [(ngModel)]="formData.hora_fin">
              </div>
            
              <div style="">
                <label for="localidad">Localidad:</label>
                <input type="text" class="form-control" id="localidad" [(ngModel)]="formData.localidad">
              </div>

              <div style="">
                <label for="add_evidencia">Adjuntar evidencia:</label>
                <img  src="../../../assets/images/adjuntar.png" alt="" style="cursor: pointer; max-width: 30px; margin: 1%;">
              </div>

              <div>
                <label for="fecha_novedad">Fecha:</label>
                <input type="date" class="form-control" id="fecha_novedad" [(ngModel)]="formData.fecha_novedad">
              </div>


        </form>


          <div style="margin-top:5%;">          
            <label for="descripcion" class="" style="float:left;">Descripción:</label>
            <textarea class="form-control" id="descripcion" [(ngModel)]="formData.descripcion" rows="4"></textarea>
          </div>

      `,
      // showCancelButton: true,
      confirmButtonText: 'Agregar',
      // cancelButtonText: 'Cancelar',
      width: '85%',
      preConfirm: () => {
        // console.log('Nombre:', this.formData.nombre);
        // console.log('Email:', this.formData.email);
      },
    });
  }
}
