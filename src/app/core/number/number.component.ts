import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'number',
  imports: [FormsModule, NgIf],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  @Input() min: number | undefined = undefined;
  @Input() max: number | undefined = undefined;
  @Input() value = 0;
  @Input() valor: number | undefined = undefined;
  
  @Output()
  valueOut = new EventEmitter<number>();
  error = false;
  onBlur() {
      this.error = (this.min !== undefined && this.value < this.min)
          || (this.max !== undefined && this.value > this.max);
      if (!this.error) {
          this.valueOut.emit(this.value);
      }
  }

  onNumber(){
      this.valueOut.emit(this.valor);
  }
}
