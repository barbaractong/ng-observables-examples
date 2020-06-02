import { Component, OnInit } from '@angular/core';

export interface Client {
  firstName: string,
  lastName: string,
  birth: Date,
  gender: string,
  street: string,
  city: string,
  state: string,
  phone1: string,
  phone2: string
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    gender: '',
    street: '',
    city: '',
    state: '',
    phone1: '',
    phone2: ''

  }

  states =  ['SP', 'RJ']

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.client)
  }
}
