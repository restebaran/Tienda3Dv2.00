import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes-dynamic/navbar/navbar.component';
import { FooterComponent } from './componentes-dynamic/footer/footer.component';
import { AnuncioComponent } from './componentes-dynamic/anuncio/anuncio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AnuncioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda3D';
}
