import { ValidationService } from './validation-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface User {
  name: {
    firstName: string;
  };
  result: string;
  email: string;
  language: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  user: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required)
      }),
      result: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        ValidationService.emailValidator
      ]),
      language: new FormControl()
    });

    this.user.controls['result'].setValue('Hello Result');
  }
}
