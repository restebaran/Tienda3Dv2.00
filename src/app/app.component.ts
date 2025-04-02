import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes static/navbar/navbar.component';
import { FooterComponent } from './componentes static/footer/footer.component';
import { AnuncioComponent } from './componentes static/anuncio/anuncio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AnuncioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda3D';
}
