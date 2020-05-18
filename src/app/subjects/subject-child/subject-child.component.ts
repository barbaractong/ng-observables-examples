import { Component, OnInit, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataModel } from 'src/app/data-model.interface';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() Subject: Subject<DataModel>; 
  @Input() Name: string;

  log: string[] = [];
  connected: boolean = false;
  subscription: Subscription;

  logData(data: DataModel) {
    this.log.push("Timestamp: ", data.timeStamp + " Data: " + data.data);
  }

  constructor() { }

  ngOnInit(): void {
  }

  connect(){
    this.log.push("Connected");
    this.connected = true;
    this.subscription = this.Subject.subscribe(
    (data: DataModel) => { this.logData(data) },
    (err) => { this.connected = false;},
    () => { this.connected = false; this.log.push("Finished.")}
    )
  }

  disconnect(){

  }

}
