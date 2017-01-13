import { FormGroup } from '@angular/forms';

export class EqualValidator {

  static equal(targetKey: string, toMatchKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const target  = group.controls[ targetKey ];
      const toMatch = group.controls[ toMatchKey ];

      if (target.touched && toMatch.dirty) {
        const isMisMatch = target.value !== toMatch.value;

        if (isMisMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({ equal : true });
          return { equal : true };
        }

        if (!isMisMatch && toMatch.hasError('equal')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }

}
