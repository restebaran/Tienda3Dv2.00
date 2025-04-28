import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes-dynamic/navbar/navbar.component';
import { AboutComponent } from './componentes-pages/about/about.component';
import { ContactComponent } from './componentes-pages/contact/contact.component';
import { CarruselComponent } from './componentes-dynamic/carrusel/carrusel.component';
import { HomeComponent } from './componentes-pages/home/home.component';
import { LoginComponent } from './componentes-pages/login/login.component';
import { RegistroComponent } from './componentes-pages/registro/registro.component';
import { ProductosComponent } from './componentes-pages/productos/productos.component';
import { MiniaturaComponent } from './componentes-pages/miniatura/miniatura.component';
import { PageNotFoundComponent } from './componentes-pages/page-not-found/page-not-found.component';



export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'carrusel', component: CarruselComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'miniaturas', component: MiniaturaComponent},
    {path: 'miniatura/:nombre', component: MiniaturaComponent},
    {path: '**', component: PageNotFoundComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];
