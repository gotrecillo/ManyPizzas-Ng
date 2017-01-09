import { FormGroup, AbstractControl } from '@angular/forms';

export interface NamedAbstractControl {
  name: string;
  control: AbstractControl;
}

export interface NamedMessage {
  name: string;
  message: string;
}

export abstract class CustomForm {
  public form: FormGroup;
  public errors: any;
  public messages: any;

  public setForm(form: FormGroup) {
    this.form = form;
    return this;
  }

  public setMessages(messages: any) {
    this.messages = messages;
    return this;
  }

  public setErrors(errors: any) {
    this.errors = errors;
    return this;
  }

  public renderAllErrors() {
    const controls = this.getNamedFormControls();

    controls.forEach(control => control.control.markAsDirty());

    this.recalculateControlErrors(controls);
  }

  public subscribeToChanges() {
    this.form.valueChanges.subscribe(data => this.changeForm());
  }

  private recalculateControlErrors(controls: NamedAbstractControl[]) {
    controls.forEach(control => this.clearFormFieldErrors(control.name));

    controls.filter(control => this.isInvalidAndChangedControl(control))
            .map(control => this.getControlErrorMessage(control))
            .forEach(message => this.errors[ message.name ] = message.message);
  }

  private changeForm() {
    const controls = this.getNamedFormControls();

    this.recalculateControlErrors(controls);
  }

  private clearFormFieldErrors(field) {
    this.errors[ field ] = '';
  }

  private isInvalidAndChangedControl(namedControl: NamedAbstractControl): boolean {
    return namedControl.control.dirty && this.isInvalidControl(namedControl);
  }

  private isInvalidControl(namedControl: NamedAbstractControl): boolean {
    return !namedControl.control.valid;
  }

  private getControlErrorMessage(namedControl: NamedAbstractControl): NamedMessage {
    const rules = Object.keys(namedControl.control.errors);

    const messages = rules.map(rule => this.messages[ namedControl.name ][ rule ]);

    return { name : namedControl.name, message : messages.join(' ') };
  }

  private getFormFieldsNames(): string[] {
    return Object.keys(this.form.getRawValue());
  }

  private getFormControl(name: string): AbstractControl {
    return this.form.get(name);
  }

  private getNamedFormControls(): NamedAbstractControl[] {
    const fields = this.getFormFieldsNames();

    return fields.map(field => ({ name : field, control : this.getFormControl(field) }));
  }
}
