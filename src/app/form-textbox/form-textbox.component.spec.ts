import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextboxComponent } from './form-textbox.component';

describe('FormTextboxComponent', () => {
  let component: FormTextboxComponent;
  let fixture: ComponentFixture<FormTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
