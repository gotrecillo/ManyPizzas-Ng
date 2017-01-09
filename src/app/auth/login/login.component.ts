import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import LoginForm from './login-form';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector    : 'piz-login',
    templateUrl : './login.component.html',
    styleUrls   : [ './login.component.scss' ],
  }
)
export class LoginComponent implements OnInit {
  private form: LoginForm;

  loginForm: FormGroup;
  formErrors: any;
  returnUrl: string;

  constructor(fb: FormBuilder,
              private authentication: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
    this.form = new LoginForm(fb);
  }

  ngOnInit() {
    this.form.buildForm();

    this.authentication.logout();
    this.returnUrl = this.route.snapshot.queryParams[ 'returnUrl' ] || '/';

    this.loginForm  = this.form.getForm();
    this.formErrors = this.form.getErrors();
  }

  submitForm() {
    if (!this.loginForm.valid) {
      return this.form.renderAllErrors();
    }

    const password = this.loginForm.get('password').value;
    const email    = this.loginForm.get('email').value;

    this.authentication
        .login(email, password)
        .subscribe(
          () => {
            this.router.navigate([ this.returnUrl ])
                // we navigate to the home page in case the url passed as query is invalid
                .catch(() => this.router.navigate([ '/' ]));
          },
          error => console.log(error.status),
        );
  }

}
