export interface Productos {
  productos: Producto[];
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  miniImagen1: string;
  miniImagen2: string;
  miniImagen3: string;
  stock: number;
}
