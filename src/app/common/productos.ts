export interface Productos {
  miniaturas: Miniatura[];
}

export interface Miniatura {
  nombre: string;
  tipo: string;
  precio: string;
  descripcion: string[];
  imagen: string;
  miniImagen1: string;
  miniImagen2: string;
  miniImagen3: string;
  stock: string;
}
