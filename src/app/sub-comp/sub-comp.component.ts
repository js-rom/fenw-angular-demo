import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  imports: [],
  //templateUrl: './sub-comp.component.html',
  template: `<h3>sub-component</h3>
             <p>{{subComponentProperty}}</p>
             <p><button (click)='event($event)'>event</button>`,
  styleUrl: './sub-comp.component.css'
})
export class SubCompComponent {

  @Input() subComponentProperty: String | null = null;

  @Output() subComponentEvent = new EventEmitter<any>();

  event(msg: any) {
    this.subComponentEvent.emit(msg);
    // this.subComponentEvent.emit('value');
  }
}
