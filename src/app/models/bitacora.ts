import { DetalleImagen } from './detalle_imagen';

export class Bitacora {
  Fecha: string | undefined;
  Titulo: string | undefined;
  DetalleImagen: DetalleImagen | undefined;

  constructor(Fecha?: string, Titulo?: string, DetalleImagen?: DetalleImagen) {
    this.Fecha = Fecha;
    this.Titulo = Titulo;
    this.DetalleImagen = DetalleImagen;
  }
}
