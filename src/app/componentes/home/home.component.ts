import { Component } from '@angular/core';
import { CarruselComponent } from '../../componentes static/carrusel/carrusel.component';
import { CardsComponent } from '../../componentes static/cards/cards.component';
import { NewsletterComponent } from '../../componentes static/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, CardsComponent,NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
