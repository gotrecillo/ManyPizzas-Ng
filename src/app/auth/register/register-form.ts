import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomForm } from '../../shared/form/custom-form';
import { EmailValidator } from '../../shared/validations/email/email-validator';
import { EqualValidator } from '../../shared/validations/equal/equal-validator';

export default class RegisterForm extends CustomForm {

  public form: FormGroup;

  public errors = {
    'name'                  : '',
    'email'                 : '',
    'password'              : '',
    'password_confirmation' : '',
  };

  public messages = {
    'name'                  : {
      'required' : 'Introduzca su nombre.',
    },
    'email'                 : {
      'required' : 'Introduzca su email.',
      'email'    : 'El email debe ser un email válido.',
      'unique'   : 'El email ya esta en uso',
    },
    'password'              : {
      'required' : 'Introduzca su contraseña.',
      'minlength': 'La contraseña debe tener al menos 6 caracteres',
    },
    'password_confirmation' : {
      'required' : 'Introduzca su contraseña.',
      'equal' : 'La confirmación no coincide con la contraseña',
    },
  };

  constructor(private fb: FormBuilder, private emailValidation: EmailValidator) {
    super();
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public getErrors(): any {
    return this.errors;
  }

  public buildForm(): void {
    const form = this.fb.group({
        'name' : [ '', [
          Validators.required,
        ] ],

        'email' : [ '',
          Validators.compose([
            Validators.required,
            EmailValidator.normal(),
          ]),
          // We need to use this trick so we can inject a service into our validator
          this.emailValidation.unique().bind(this.emailValidation),
        ],

        'password' : [ '', [
          Validators.required,
          Validators.minLength(6),
        ] ],

        'password_confirmation' : [ '', [
          Validators.required,
        ] ],
      },
      { validator : EqualValidator.equal('password', 'password_confirmation') },
    );

    this.setForm(form)
        .setMessages(this.messages)
        .setErrors(this.errors)
        .subscribeToChanges();
  }
}
