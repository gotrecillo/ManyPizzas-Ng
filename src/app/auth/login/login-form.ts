import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomForm } from '../../shared/form/custom-form';
import { EmailValidator } from '../../shared/validations/email/email-validators';

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
        'email' : 'Email must be a valid email.',
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
        EmailValidator.normal(),
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
