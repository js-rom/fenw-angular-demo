import { Subject, Observable, Subscription } from "rxjs";
import { timer } from 'rxjs';

export class ObservableSubject {
    private subject: Subject<string> = new Subject();
 
    constructor() {
        const subscription: Subscription = timer(1000, 1000).subscribe(t => {
            if (t > 4) {
                subscription.unsubscribe();
                this.subject.complete();
            } else {
                this.subject.next(String(5 - t));
            }
        });
    }

    getObservable(): Observable<string> {
        return this.subject.asObservable();
    }
}