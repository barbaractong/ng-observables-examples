import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-param-forms',
  templateUrl: './param-forms.component.html',
  styleUrls: ['./param-forms.component.css']
})
export class ParamFormsComponent implements OnInit {

  /*dropdownDoc = ["Comprovante de residência", "Comprovante de registro"]
  // dropdownCampo = ["CEP", "Logradouro", "RG", "CPF"]
  dropdownCampo = ["CEP", "Logradouro"]
  */

  selectedDocument;
  documentTitle = "";
  field = [];
  showInput = true;
  inputType;
  
  fieldList: any = [
    {
      value: 1,
      "document": "Comprovante de residência",
      field: ["CEP", "Logradouro"]
    },
    {
      value: 2,
      "document": "Comprovante de identidade",
      field: ["RG", "CPF"]
    }
  ]

  documentID: number;

  paramForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paramForm = this.formBuilder.group({
      //documentSelected: [''],
      //fieldSelected: [''],
      acuracy: [0, [Validators.min(0), Validators.max(100)]],
      similarity: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  }

  onSubmit() {
    
  }


  action(event) {
    let _documentName = event.source.value;
    let _valueSelect = event.source.selected;

    let dropDownData = this.fieldList.find((data: any) => data.document === event.source.value);

    if (_documentName === "Comprovante de residência" &&  _valueSelect === true){
      this.showInput = false;
      console.log(this.showInput)
    }

    if (dropDownData) {
      this.field = dropDownData.field;

      if(this.field) {
        this.documentTitle = this.field[0];
      }
    } else {
      this.fieldList = [];
    }
  }

  addField() {
   
  }

}
