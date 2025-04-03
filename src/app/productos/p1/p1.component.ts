import { Component } from '@angular/core';

@Component({
  selector: 'app-p1',
  imports: [],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.css',
})
export class P1Component {
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
