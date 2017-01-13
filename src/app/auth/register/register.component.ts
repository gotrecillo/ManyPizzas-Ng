import { Component, OnInit } from '@angular/core';
import RegisterForm from './register-form';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailValidator } from '../../shared/validations/email/email-validator';

@Component({
  selector    : 'piz-register',
  templateUrl : './register.component.html',
  styleUrls   : [ './register.component.scss' ],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm;

  registerForm: FormGroup;
  formErrors: any;
  email: AbstractControl;

  constructor(fb: FormBuilder,
              private authentication: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private emailValidator: EmailValidator,
  ) {
    this.form = new RegisterForm(fb, emailValidator);
  }

  ngOnInit() {
    this.form.buildForm();

    this.authentication.logout();

    this.registerForm = this.form.getForm();
    this.formErrors   = this.form.getErrors();

    this.email = this.registerForm.get('email');
  }

  submitForm() {
    if (!this.registerForm.valid) {
      return this.form.renderAllErrors();
    }

    const name                 = this.registerForm.get('name').value;
    const password             = this.registerForm.get('password').value;
    const passwordConfirmation = this.registerForm.get('password_confirmation').value;
    const email                = this.registerForm.get('email').value;

    this.authentication
        .register(name, email, password, passwordConfirmation)
        .subscribe(
          () => { console.log('ok'); },
          () => { console.log('not ok'); },
        );
  }

}
