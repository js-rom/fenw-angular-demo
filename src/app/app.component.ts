import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypescriptComponent } from "./typescript/typescript.component";
import {FormsModule} from '@angular/forms';
import { BindingComponent } from "./binding/binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypescriptComponent, FormsModule, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'fenw-angular-19-demo';
}
