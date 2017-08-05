
import { ValidationService } from './../validation-service.service';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'form-textbox',
  templateUrl: './form-textbox.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FormTextboxComponent, multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextboxComponent),
      multi: true,
    }
  ]
})
export class FormTextboxComponent implements ControlValueAccessor, Validator {
  private jsonString = '';
  private data: any;
  @Input() label: string;
  @Input() control: FormControl;
  private errorMessage: any;
  // the method set in registerOnChange, it is just 
  // a placeholder for a method that takes one parameter, 
  // we use it to emit changes back to the form
  private propagateChange = (_: any) => {};

  // returns null when valid else the validation object 
  // in this case we're checking if the json parsing has 
  // passed or failed from the onChange method
  public validate(c: FormControl) {
    console.log(JSON.stringify(c.errors) + '  ' + c.status);
    if (c.errors) {
      // for (const propertyName in c.errors) {
      //   if (c.errors.hasOwnProperty(propertyName) && c.touched) {
      //     return ValidationService.getValidatorErrorMessage(propertyName, c.errors[propertyName]);
      //   }
      // }
      this.errorMessage = c.errors;
    }
    return null;
  }

  // get errorMessage() {
  //   if (this.control.errors) {
  //     for (const propertyName in this.control.errors) {
  //       if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
  //         return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
  //       }
  //     }
  //   }
  //   //console.log(this.control);
  //   return null;
  // }

  // this is the initial value set to the component
  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
      this.jsonString = this.data;
    }
  }
  // registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  // not used, used for touch input
  public registerOnTouched() { }
  // change events from the textarea
  private onChange(event) {
    // update the form
    // get value from text area
    const newValue = event.target.value;
    console.log(event.target.formControlName);
    try {
      // parse it to json
      this.data = newValue;
    } catch (ex) {
      console.log(ex);
    }
    this.propagateChange(this.data);
  }
}
