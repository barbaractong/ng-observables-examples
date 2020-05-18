import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { ColdObservablesComponent } from './cold-observables/cold-observables.component';
import { HotObservablesComponent } from './hot-observables/hot-observables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicContentComponent,
    ColdObservablesComponent,
    HotObservablesComponent,
    SubjectsComponent,
    SubjectChildComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
