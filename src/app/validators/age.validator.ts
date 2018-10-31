import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
function isInt(age: number): boolean {
  return age % 1 === 0;
}
export const AgeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const age: number = Number(control.value);
  if (!isNaN(age) && isInt(age)) {
    return age < 18 || age > 65 ? {'ageValue': true} : null;
  }
  return {'ageType': {value: control.value}};
};
