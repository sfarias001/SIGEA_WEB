import { Injectable } from '@angular/core';



export class BitacoraData {
    Fecha: string | undefined;
    Titulo: string | undefined;
    Detalle: {
        ImagenUrl: string; 
    }[] | undefined;
}

const bitacora: BitacoraData[] = [{
    Fecha: "México",
    Titulo: 'Super Mart of the West',
    Detalle: [
        { ImagenUrl: '../../../assets/images/add_report.png' } 
    ],
}, {
    Fecha: "México",
    Titulo: 'Super Mart of the West',
    Detalle: [
        { ImagenUrl: 'assets/images/ver_detalle.png' } 
    ],
}];

@Injectable()
export class Service {
    getBitacora() {
        return bitacora;
    }
}