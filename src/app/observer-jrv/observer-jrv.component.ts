import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observer-jrv',
  imports: [],
  templateUrl: './observer-jrv.component.html',
  styleUrl: './observer-jrv.component.css'
})
export class ObserverJrvComponent {
  count: number = 0;
  MAX: number = 10;
  counter: number = 0;
  disabled: boolean = false;
  private subject: Subject<number> = new Subject();

  ngOnInit(): void {
    this.subject.asObservable().subscribe(
      {
        next: v => this.counter = v,
        error: e => alert('ObserverJRV, error code: ' + e),
        complete: () => alert('ObserverJRV: finished')
      }
    )
  }

  increment() {
    if (this.hasNext()) {
      this.count++;
      this.subject.next(this.count);
    }
    if (!this.hasNext()) {
      this.subject.complete();
    }
  }

  hasNext(): boolean {
    return this.count < this.MAX;
  }

  getObservable(): Observable<number> {
    return this.subject.asObservable();
  }
}
