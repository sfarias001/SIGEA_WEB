import { Injectable } from '@angular/core';

export class Incidente {
    Región: String | undefined;

    Inmueble: string | undefined;

    Tipo_alarma: string | undefined;

    Partición: string | undefined;

    Zona: string | undefined;

    Hora: String | undefined;

    Atiende_CRM_CMC: string | undefined;

    Motivo: string | undefined;

    Quien_reporta: string | undefined;

    Registro_de_evento: string | undefined;

    Causa: string | undefined;

    Activación_de_alarma: string | undefined;

    Acción: string | undefined;

    Estatus: string | undefined;

    Agregar_comentario: string | undefined;

    Ver_detalle: string | undefined;

    Actualizar: string | undefined;
}

const incicentes: Incidente[] = [{
    Región: "México",
    Inmueble: 'Super Mart of the West',
    Tipo_alarma: '702 SW 8th Street',
    Partición: 'Bentonville',
    Zona: 'Arkansas',
    Hora: "72716",
    Atiende_CRM_CMC: '(800) 555-2797',
    Motivo: '(800) 555-2797',
    Quien_reporta: '(800) 555-2171',
    Registro_de_evento: '(800) 555-2171',
    Causa: '(800) 555-2171',
    Activación_de_alarma: '(800) 555-2171',
    Acción: '(800) 555-2171',
    Estatus: '(800) 555-2171',
    Agregar_comentario: '(800) 555-2171',
    Ver_detalle: '(800) 555-2171',
    Actualizar: '(800) 555-2171',
}, {
    Región: "México",
    Inmueble: 'Super Mart of the West',
    Tipo_alarma: '702 SW 8th Street',
    Partición: 'Bentonville',
    Zona: 'Arkansas',
    Hora: "72716",
    Atiende_CRM_CMC: '(800) 555-2797',
    Quien_reporta: '(800) 555-2171',
    Motivo: '(800) 555-2797',
    Registro_de_evento: '(800) 555-2171',
    Causa: '(800) 555-2171',
    Activación_de_alarma: '(800) 555-2171',
    Acción: '(800) 555-2171',
    Estatus: '(800) 555-2171',
    Agregar_comentario: '(800) 555-2171',
    Ver_detalle: '(800) 555-2171',
    Actualizar: '(800) 555-2171',
}];

@Injectable()
export class Service {
  getIncidentes() {
    return incicentes;
  }
}