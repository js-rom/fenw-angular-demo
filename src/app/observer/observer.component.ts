import { Component } from '@angular/core';
import { ObservableSubject } from './observable-subject.model';
@Component({
  selector: 'app-observer',
  imports: [],
  template: `<h3>Observer1: {{value}}</h3>
               <h3>Observer2: {{value2}}</h3>
               <p>Ojo!!! una vez completado, deja de funcionar</p>`,
  styleUrl: './observer.component.css'
})
export class ObserverComponent {
  value: string = "";
  value2: string = "";

  private observableSubject: ObservableSubject = new ObservableSubject();

  ngOnInit(): void {
    this.observableSubject.getObservable().subscribe( // Observador
      {
        next: v => this.value = v,
        error: e => alert('Observer1, error code: ' + e),
        complete: () => alert('Observer1: finished')
      }
    );
    this.observableSubject.getObservable().subscribe( // Otro observador
      {
        next: v => this.value2 = v,
        error: e => alert('Observer2, error code: ' + e)
      }
    );
  }
}
