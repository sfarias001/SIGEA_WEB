import { Imagen } from "./imagen";

export class DetalleImagen {
    imagenes: Imagen[] | undefined;
  
    constructor(imagenes?: Imagen[]) {
      this.imagenes = imagenes;
    }
  }