import { FormTextboxComponent } from './form-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrettyJsonModule,
    ],
    exports: [
        FormTextboxComponent,
    ],
    declarations: [
        FormTextboxComponent,
    ],
    providers: [{ provide: JsonPipe, useClass: SafeJsonPipe }],
})
export class FormTextBoxModule { }