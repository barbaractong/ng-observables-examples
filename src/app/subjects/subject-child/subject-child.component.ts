import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
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

  constructor() { }

  ngOnInit(): void {
  }

}
