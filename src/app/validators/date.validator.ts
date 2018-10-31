import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';
import {DATE_FORMATS} from '../shared/configuration';

export const DateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const date: string = control.value;
  const result: boolean = moment(date, DATE_FORMATS, true).isValid();
  return !result ? {'dateValue': true} : null;
};

