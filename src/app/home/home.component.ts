import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h2>Routing</h2>
    <ul>
      <li><a [routerLink]="['/route', 1]">Route 1</a></li>
      <li><a [routerLink]="['/route', 2]">Route 2</a></li>
      <li><a [routerLink]="['/route', 3]">Route 3</a></li>
      <li><a [routerLink]="['/prueba', 'Jesús']">Saludar a Jesús</a></li>
    </ul>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
