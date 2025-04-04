import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  template: `<p>Hoy es {{ today | date:format }}</p>
               <button (click)="toggleFormat()">Toggle Format</button>`,
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  today = new Date();
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
