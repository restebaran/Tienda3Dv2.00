import { RouterLink, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../common/Productos';
import { DataproductosService } from '../../servicios/dataproductos.service';

@Component({
  selector: 'app-productos',
  imports: [RouterModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  miniaturaNueva! : Productos;
  constructor( private dataservice: DataproductosService){}

  ngOnInit(): void {
    this.loadproductos();
  }

  loadproductos() {
    this.dataservice.getMiniatura().subscribe(
      {
        next: (data)=>{
          this.miniaturaNueva = data;
          console.log(data);
        },
        error: (error)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log('complete');
        }
      }
    )

  }
}
