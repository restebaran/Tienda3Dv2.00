import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes-dynamic/navbar/navbar.component';
import { AboutComponent } from './componentes-pages/about/about.component';
import { ContactComponent } from './componentes-pages/contact/contact.component';
import { CarruselComponent } from './componentes-dynamic/carrusel/carrusel.component';
import { HomeComponent } from './componentes-pages/home/home.component';
import { LoginComponent } from './componentes-pages/login/login.component';
import { RegistroComponent } from './componentes-pages/registro/registro.component';
import { Impresion3dComponent } from './componentes-pages/impresion3d/impresion3d.component';
import { PageNotFoundComponent } from './componentes-pages/page-not-found/page-not-found.component';
import { ProductComponent } from './componentes-pages/productos/productos.component';



export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'carrusel', component: CarruselComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'productos', component: ProductComponent},
    {path: 'impresion3d', component: Impresion3dComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];
