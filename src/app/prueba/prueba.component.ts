import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  imports: [],
  template: `<h1>Routing</h1>
             <h3>Hola {{name}}!!</h3>
             <p><button (click)='back()'>back</button></p>`,
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  name: string;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.name = activatedRoute.snapshot.params['name'];
  }

  back() {
    this.router.navigate(['/home']);
  }
}
