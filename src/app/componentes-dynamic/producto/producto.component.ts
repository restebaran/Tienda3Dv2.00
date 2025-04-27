import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto = {
    image1: '/productos/p1/1.jpg',
    image2: '/productos/p1/2.jpg',
    image3: '/productos/p1/3.jpg',
    image4: '/productos/p1/4.jpg',
    titulo: 'XENTARI',
    texto:'Esta increíble miniatura de resina, impresa en alta calidad, '+  
      'representa a un Sacerdote Tecnosacral, un líder místico de los ejércitos del futuro.' +
      ' Fabricada con precisión mediante impresión 3D en resina, esta pieza captura cada detalle con máxima fidelidad,' ,
    
    precio: 30 + '€',
  };
}
