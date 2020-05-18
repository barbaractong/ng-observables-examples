import { Component, OnInit } from '@angular/core';
import { Subject, AsyncSubject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { RandomDataService } from '../random-data.service';
import { DataModel } from '../data-model.interface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  private subject: Subject<DataModel>;
  private replaySubject: ReplaySubject<DataModel>;
  private asyncSubject: AsyncSubject<DataModel>;
  private behaviorSubject: BehaviorSubject<DataModel>;

  constructor( private RandomDataService: RandomDataService) { 
    
  }

  ngOnInit(){

    this.subject = new Subject<DataModel>();
    this.replaySubject = new ReplaySubject<DataModel>();
    this.asyncSubject = new AsyncSubject<DataModel>();
    this.behaviorSubject = new BehaviorSubject<DataModel>({ timeStamp: 0, data: 0});

    this.RandomDataService.dataObservable.subscribe(this.subject);
    this.RandomDataService.dataObservable.subscribe(this.replaySubject);
    this.RandomDataService.dataObservable.subscribe(this.asyncSubject);
    this.RandomDataService.dataObservable.subscribe(this.behaviorSubject);

  }

  connect() {
    this.RandomDataService.dataObservable.connect();
  }

  /*
  ngOnInit(): void {
    let s: Subject<number> = new Subject<number>();

    s.subscribe( n => console.log(n));
    
    s.next(1);
    s.next(2);
    s.next(3);
    s.complete();
  }
  */

}
