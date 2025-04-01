import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  title = 'Angular. Demo';
  getValue(): string {
    return 'valor';
  }
  event(title: string) {
    this.title = title;
  }
  event2(msg: any) {
    alert(msg);
  }
}
