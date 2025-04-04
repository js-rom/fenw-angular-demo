import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './route/route.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
    { path: 'route/:id', component: RouteComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'prueba/:name', component: PruebaComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
