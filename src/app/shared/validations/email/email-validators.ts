import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Util } from '../util';
import { AuthenticationService } from '../../../auth/_services/authentication.service';

@Injectable()
export class EmailValidator {
  private emailTimeout;

  static simple() {
    return function validate(control: AbstractControl): { [key: string]: any } {
      if (Util.isNotPresent(control)) {
        return null;
      }

      const pattern = '^.+@.+\\..+$';

      return new RegExp(pattern).test(control.value) ? null : { 'email' : true };
    };
  }

  // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
  static normal() {
    return function validate(control: AbstractControl): { [key: string]: any } {
      if (Util.isNotPresent(control)) {
        return null;
      }

      // tslint:disable:max-line-length
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      // tslint:enable:max-line-length

      return regex.test(control.value) ? null : { 'email' : true };
    };
  }

  constructor(private authenticationService: AuthenticationService) {}

  unique() {
    return function validate(control: AbstractControl) {
      clearTimeout(this.emailTimeout);

      return new Promise<any>(resolve => {
        this.emailTimeout = setTimeout(() => {
          this.authenticationService
              .checkEmail(control.value)
              .subscribe(
                () => { resolve(null); },
                () => { resolve({ unique : true }); },
              );
        }, 600);
      });
    };
  }
}
