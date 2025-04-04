import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route',
  imports: [],
  template: `<h1>Routing</h1>
             <h3>Id: {{id}}</h3>
             <p><button (click)='back()'>back</button></p>`,
  styleUrl: './route.component.css'
})
export class RouteComponent {

  id: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  back() {
    this.router.navigate(['/home']);
  }
}
