export class Imagen {
  url?: string | undefined;
  nombre?: string | undefined;
  descripcion?: string | undefined;

  constructor(url: string, nombre: string, descripcion?: string) {
    this.url = url;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
