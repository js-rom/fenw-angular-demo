import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypescriptComponent } from "./typescript/typescript.component";
import { BindingComponent } from "./binding/binding.component";
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { NumberComponent } from './core/number/number.component';
import { SubCompJrvComponent } from "./sub-comp-jrv/sub-comp-jrv.component";
import { CrudComponent } from './crud/crud.component';
import { CrudJrvComponent } from "./crud-jrv/crud-jrv.component";
import { PipeComponent } from "./pipe/pipe.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TypescriptComponent,
    BindingComponent,
    SubCompComponent,
    NumberComponent,
    SubCompJrvComponent,
    CrudComponent, CrudJrvComponent, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // sub-comp
  title = 'Angular. Demo';
  // Number
  value = '';
  valor = '';

  processEvent(event: string) {
    alert(event);
  }

  ngOnInit(): void {
    // Se inicializa
  }
}
