import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { ColdObservablesComponent } from './cold-observables/cold-observables.component';
import { HotObservablesComponent } from './hot-observables/hot-observables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { FormControlComponent } from './form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ThemeFormsComponent } from './theme-forms/theme-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NativeFormValidationComponent } from './native-form-validation/native-form-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { NgSwitchSampleComponent } from './ng-switch-sample/ng-switch-sample.component';
import { NgTemplateSampleComponent } from './ng-template-sample/ng-template-sample.component';
import { BVRascunhosComponent } from './bv-rascunhos/bv-rascunhos.component';
import { TabsComponent } from './BV-rascunhos/tabs/tabs.component';
import { TableComponent } from './BV-rascunhos/table/table.component';
import { ParamFormsComponent } from './bv-rascunhos/param-forms/param-forms.component';
import { PureComponent } from './pure/pure.component';
import { ToolbarComponent } from './pure/toolbar/toolbar.component';
import { DynamicFormsFieldComponent } from './dynamic-forms-field/dynamic-forms-field.component';
import { DynamicFormFieldComponent } from './src/app/bv-rascunhos/dynamic-form-field/dynamic-form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicContentComponent,
    ColdObservablesComponent,
    HotObservablesComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    ReactiveFormValidationComponent,
    ThemeFormsComponent,
    TemplateDrivenFormsComponent,
    NativeFormValidationComponent,
    FormValidationComponent,
    NgSwitchSampleComponent,
    NgTemplateSampleComponent,
    BVRascunhosComponent,
    TabsComponent,
    TableComponent,
    ParamFormsComponent,
    PureComponent,
    ToolbarComponent,
    DynamicFormsFieldComponent,
    DynamicFormFieldComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
