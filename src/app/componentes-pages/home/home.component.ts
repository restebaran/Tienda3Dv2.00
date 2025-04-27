import { Component } from '@angular/core';
import { CarruselComponent } from '../../componentes-dynamic/carrusel/carrusel.component';
import { CardsComponent } from '../../componentes-dynamic/cards/cards.component';
import { NewsletterComponent } from '../../componentes-dynamic/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, CardsComponent,NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
