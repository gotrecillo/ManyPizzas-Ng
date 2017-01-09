import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomForm } from '../../shared/form/custom-form';

export default class LoginForm extends CustomForm {

  public form: FormGroup;

  public errors = {
    'email'    : '',
    'password' : '',
  };

  constructor(private fb: FormBuilder) {
    super();
    this.messages = {
      'email'    : {
        'required'  : 'Please enter your email.',
        'minlength' : 'Email must have at least 5 characters.',
      },
      'password' : {
        'required' : 'Please enter your password.',
      },
    };
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public getErrors(): any {
    return this.errors;
  }

  public buildForm(): void {
    const form = this.fb.group({
      'email'    : [ '', [
        Validators.required,
        Validators.minLength(5),
      ] ],
      'password' : [ '', [
        Validators.required,
      ] ],
    });

    this.setForm(form)
        .setMessages(this.messages)
        .setErrors(this.errors)
        .subscribeToChanges();
  }
}
