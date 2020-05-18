import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  mySubscription1: Subscription;
  mySubscription2: Subscription;

  number1: number = 0;
  number2: number = 0;

  string1: string = " ";
  string2: string = " ";

  constructor() { }

  ngOnInit() {
    this.string1 = "Initializing...";
    this.string2 = "Initializing...";
    const myFirstObservable = new Observable( // funciona como um método
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.error("4")
        observer.complete();
      }
    )

    myFirstObservable.subscribe(
      (n: number) => {   // subscribe: recebe os dados gerados; espera uma funcao
        console.log(n);
      },
      (err) => {    // caso erro 
        console.error(err);
      },
      () => {     // caso deu certo
        console.log('Completed.')
      });
    /* observa pra semprepois nao tem chamada de parada  
    const timeCount = interval(10);
    timeCount.subscribe(  // async
      (n) => console.log(n)
    )
    console.log("after interval");
    */

    const myIntervalObserver = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log("from Observable: ", i);
          if (i == 10) {
            observer.complete()
          }
          else if (i % 2 == 0) {
            observer.next(i);
          }
        }, 1000);
        return () => clearInterval(id);
      }
    );

    setInterval(() => {
      this.mySubscription2 = myIntervalObserver.subscribe(
        (_n) => {
          this.number2 = _n;
        },
        (err) => {
          this.string2 = "Error " + err
        },
        () => {
          this.string2 = "Completed"
        }

      );
    }, 3000);

    this.mySubscription1 = myIntervalObserver.subscribe(
      (_n) => {
        this.number1 = _n;
      },
      (err) => {
        this.string1 = "Error " + err
      },
      () => {
        this.string1 = "Completed"
      }

    );

    setTimeout(() => {
      this.mySubscription1.unsubscribe();
      this.mySubscription2.unsubscribe();
    }, 4000)
  }
}

