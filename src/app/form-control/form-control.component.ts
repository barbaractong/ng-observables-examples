import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {


  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.firstName.value;
    this.firstName.valueChanges.subscribe(newName => console.log(newName));
  }

  setFirstName() {
    console.log(this.firstName.value)
  }

}
