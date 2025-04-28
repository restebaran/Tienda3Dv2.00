import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Miniatura } from '../../common/Productos';
import { DataproductosService } from '../../servicios/dataproductos.service';


@Component({
  selector: 'app-miniatura',
  imports: [RouterLink],
  templateUrl: './miniatura.component.html',
  styleUrl: './miniatura.component.css'
})
export class MiniaturaComponent implements OnInit {

  constructor(
    private dataservice: DataproductosService,
    private activerouted: ActivatedRoute,
    private route: ActivatedRoute
  ){}
  miniaturaONE?: Miniatura;

  ngOnInit(): void {
    this.loadMiniaturaONE();
  }
  loadMiniaturaONE(){
    const id = this.activerouted.snapshot.params['nombre'];

    this.dataservice.getMiniaturaById(id).subscribe(
      {
        next: (data)=>{
          this.miniaturaONE = data;
          console.log(this.miniaturaONE);
        },
        error: (error)=>{
          console.log('No se pudo encontrar el jugador con el alias por' + error);
        },
        complete: ()=>{
          console.log('el proceso de adquirir el jugador se ha completado correctamente')
        }
      }
    )
  }

   // Función para cambiar la imagen principal
  //  cambiarImagen(nuevaImagen: string): void {
  //   if (this.miniaturaONE) {
  //     this.miniaturaONE.imagen = nuevaImagen;
  //   }
  // }

  cambiarImagen(nuevaImagen: string): void {
    if (this.miniaturaONE) {
      // Guarda la imagen actual principal
      const imagenAnterior = this.miniaturaONE.imagen;
  
      // Cambia la imagen principal a la nueva
      this.miniaturaONE.imagen = nuevaImagen;
  
      // Reemplaza la miniatura que fue clicada con la imagen anterior
      if (this.miniaturaONE.miniImagen1 === nuevaImagen) {
        this.miniaturaONE.miniImagen1 = imagenAnterior;
      } else if (this.miniaturaONE.miniImagen2 === nuevaImagen) {
        this.miniaturaONE.miniImagen2 = imagenAnterior;
      } else if (this.miniaturaONE.miniImagen3 === nuevaImagen) {
        this.miniaturaONE.miniImagen3 = imagenAnterior;
      }
    }
  }

}