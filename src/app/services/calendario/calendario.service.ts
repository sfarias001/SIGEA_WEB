import { Injectable } from '@angular/core';

export class Activity {
  
  nombreActividad: string = '';
  sitio: string = '';
  empresa: string = '';
  fechaSolicitud: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  allDay?: boolean;
  static nombreActividad: any;
}
const currentDate = new Date();

const activities: Activity[] = [{
  
  nombreActividad: 'Mantenimiento',
  sitio: "Polanco",
  empresa: 'tesla',
  fechaSolicitud: currentDate,
  startDate: currentDate,
  endDate: new Date(currentDate.getTime() + 30 * 60 * 1000), // Agrega 30 minutos
  
},{
  nombreActividad: 'Cambio de antena',
  sitio: "Polanco",
  empresa: 'tesla',
  fechaSolicitud: currentDate,
  startDate: new Date(currentDate.getTime() + 30 * 90 *1000 ),
  endDate: new Date(currentDate.getTime() + 30 * 60 * 1000), // Agrega 30 minutos

}, {
  nombreActividad: 'Brochure Design Review',
  sitio: "Polanco",
  empresa: 'tesla',
  fechaSolicitud: currentDate,
  startDate: new Date('2021-05-04T17:15:00.000Z'),
  endDate: new Date('2021-05-04T19:15:00.000Z'),

}, {
  nombreActividad: 'Website Re-Design Plan',
  sitio: "Polanco",
  empresa: 'tesla',
  fechaSolicitud: currentDate,
  startDate: new Date('2021-04-05T23:45:00.000Z'),
  endDate: new Date('2021-04-07T00:15:00.000Z'),

}];

@Injectable()
export class Service {
  getActivities() {
    return activities;
  }
}
