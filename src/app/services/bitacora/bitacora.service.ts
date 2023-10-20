import { Injectable } from '@angular/core';
import { Bitacora } from 'src/app/models/bitacora';

// ImagenUrl: '../../../assets/images/add_report.png'
const bitacora: Bitacora[] = [
  {
    Fecha: '10/10/2023',
    Titulo: 'Super Mart of the West 1',
    DetalleImagen:
     {
      imagenes: [
        {
          url: "../../../assets/images/add_report.png",
          nombre: 'evidencia.png',
          descripcion: 'foto de la evidencia',
        },
      ],
    },
  },
  {
    Fecha: '09/10/2023',
    Titulo: 'Super Mart of the West 2',
    DetalleImagen: {
      imagenes: [
        {
          url: "../../../assets/images/add_report.png",
          nombre: 'evidencia2.png',
          descripcion: 'foto 2 de la evidencia',
        },
      ],
    },
  },
];

@Injectable()
export class Service {
  getBitacora() {
    return bitacora;
  }
}
