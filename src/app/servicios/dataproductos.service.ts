import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Miniatura, Productos } from '../common/Productos';

@Injectable({
  providedIn: 'root'
})
export class DataproductosService {

  constructor( private http: HttpClient) { }

  getMiniatura(): Observable<Productos>{
    return this.http.get<Productos>('data/dataproductos.json');
  }

  getMiniaturaById(id : string): Observable<Miniatura>{
    return this.getMiniatura()
    .pipe(map(miniatura=>{
      const miniaturas = miniatura.miniaturas
      .find(miniatura =>miniatura.nombre === id);

      if(!miniaturas){
        throw new Error ('No se encontró el participante con el id' + id);
      }
      return miniaturas;
      
    }))
  }
}
