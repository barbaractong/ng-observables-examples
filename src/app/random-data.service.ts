import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';
import { publish } from 'rxjs/operators';
import { DataModel } from './data-model.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {
  public dataObservable: ConnectableObservable<DataModel>;
  constructor() {
    this.dataObservable = new Observable(
      ( observer: Observer<DataModel> ) => {
        let n = 0;
        console.log('Observable created');
        let f = () => {
          n++;
          console.log(n);
          if (n <= 10) {
            let timeStamp = Math.random() * 2000 + 500;
            observer.next( {
              timeStamp: timeStamp, data: n
            });
            setTimeout(f, timeStamp);
          } else {
            observer.complete();
          }
        }
        f();
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>;
   }
}
