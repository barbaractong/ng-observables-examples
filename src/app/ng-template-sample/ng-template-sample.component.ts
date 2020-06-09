import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-sample',
  templateUrl: './ng-template-sample.component.html',
  styleUrls: ['./ng-template-sample.component.css']
})
export class NgTemplateSampleComponent implements OnInit {

  enable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
