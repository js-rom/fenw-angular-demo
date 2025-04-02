import {
  Component, EventEmitter, Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sub-comp-jrv',
  imports: [FormsModule, NgIf],
  templateUrl: './sub-comp-jrv.component.html',
  styleUrl: './sub-comp-jrv.component.css'
})
export class SubCompJrvComponent {

  msg: string = "";

  @Output()
  valueOut = new EventEmitter<string>();

  isValid() {
    const MIN_LENGTH = 3;
    return this.msg.length >= MIN_LENGTH;
  }

  onBlur() {
    if (this.isValid()) {
      this.valueOut.emit(this.msg);
    }

  }
}
