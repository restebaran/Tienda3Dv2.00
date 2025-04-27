import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productos } from '../../common/productos';
import { DataproductosService } from '../../servicios/dataproductos.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductComponent implements OnInit {
  producto!: Productos;

  constructor(private dataservice: DataproductosService) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(){
    this.dataservice.getProductos().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.producto = data;
        },
        error: (err)=>{
          console.error(err);
        },
        complete: ()=>{
          console.log("Carga completada");
        }
      }
    )
  }
  
}
