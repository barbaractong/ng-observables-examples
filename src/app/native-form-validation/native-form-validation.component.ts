import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-form-validation',
  templateUrl: './native-form-validation.component.html',
  styleUrls: ['./native-form-validation.component.css']
})
export class NativeFormValidationComponent implements OnInit {

  firstName = '';
  lastName = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
