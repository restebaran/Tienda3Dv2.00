import { Component } from '@angular/core';
import { CarruselComponent } from '../../componentes static/carrusel/carrusel.component';
import { CardsComponent } from '../../componentes static/cards/cards.component';
import { NewsletterComponent } from '../../componentes static/newsletter/newsletter.component';
import { ProductosComponent } from '../../componentes static/productos/productos.component';

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, CardsComponent,NewsletterComponent,ProductosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
