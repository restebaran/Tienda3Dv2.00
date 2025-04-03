import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes static/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { CarruselComponent } from './componentes static/carrusel/carrusel.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductComponent } from './componentes/product/product.component';
import { Impresion3dComponent } from './componentes/impresion3d/impresion3d.component';
import { P1Component } from './productos/p1/p1.component';



export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'carrusel', component: CarruselComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'product', component: ProductComponent},
    {path: 'impresion3d', component: Impresion3dComponent},
    {path: 'p1', component: P1Component},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];
