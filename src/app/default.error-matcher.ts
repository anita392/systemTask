import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class DefaultErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

// export const passwordMatchValidator: ValidatorFn = (
//   formGroup: FormGroup
// ): ValidationErrors | null => {
//   const parent = formGroup.parent as FormGroup;
//   if (!parent) return null;
//   return parent.get('password').value === parent.get('confirmPassword').value
//     ? null
//     : { mismatch: true };
// };
