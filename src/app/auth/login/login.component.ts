import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector    : 'piz-login',
  templateUrl : './login.component.html',
  styleUrls   : [ './login.component.scss' ],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user = { email : '', password : '' };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      email : [
        this.user.email, [
          Validators.required,
        ],
      ],

      password : [
        this.user.password, [
          Validators.required,
        ],
      ],
    });

    this.loginForm.valueChanges.subscribe(data => console.log(data));
  }

}
