import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-api-response',
  imports: [],
  template: `<button (click)="search()">Search</button>
               <p>status: {{status}}</p>
               <p>statusText: {{statusText}}</p>
               <p>json: {{json}}</p>
               <p>id: {{id}}</p>
               <p>name: {{name}}</p>
               <p>owner: login: {{ownerLogin}}</p>
               <p>html_url: {{htmlUrl}}</p>
               <p><button (click)="searchId()">Search Id</button>{{id2}}</p>
               `,
  styleUrl: './api-response.component.css'
})
export class ApiResponseComponent {
  static url = 'https://api.github.com/repos/js-rom/connect4';
  status: number | null = null;
  statusText: string = "";
  json: string = "";
  id: number | null = null;
  name: string = "";
  ownerLogin: string = "";
  htmlUrl: string = "";

  id2: number | null = null;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get<any>(ApiResponseComponent.url, { observe: 'response' }).subscribe(response => {
      this.status = response.status;
      this.statusText = response.statusText;
      this.json = JSON.stringify(response, null, 2);
      this.id = response.body?.id;
      this.name = response.body?.name;
      this.ownerLogin = response.body?.owner.login;
      this.htmlUrl = response.body?.html_url;
    });
  }
  searchId() {
    this.http.get<any>(ApiResponseComponent.url)
      .pipe(
        map(data => data.id)
      )
      .subscribe(id => this.id2 = id);
  }
}
