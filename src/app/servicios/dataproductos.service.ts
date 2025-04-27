import { Injectable } from '@angular/core';
import { Producto, Productos} from '../common/productos';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataproductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Productos> {
    return this.http.get<Productos>('data/dataproductos.json');
  }

  getProductoById(id: string): Observable<Producto> {
    return this.getProductos().pipe(
      map((productos) => {
        const producto = productos.productos.find
        (producto => producto.id === id);
        if (!producto) {
          throw new Error('No se encontro el producto con el id' + id);
        }
        return producto;
      })
    );
  }
}
