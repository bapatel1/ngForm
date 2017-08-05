import { FormTextBoxModule } from './form-textbox/form-textbox.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PrettyJsonModule,
    FormTextBoxModule
  ],
  providers: [{ provide: JsonPipe, useClass: SafeJsonPipe }],
  bootstrap: [AppComponent]
})
export class AppModule { }
