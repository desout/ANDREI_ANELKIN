import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {UserService} from '../user.service';

export const isAvailableName = (userService: UserService, lastName: string): AsyncValidatorFn => {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    const name = control.value;
    if (name === lastName) {
      return of(null);
    }
    const isValid: Observable<boolean> = userService.checkUser(name);
    return isValid.pipe(
      map(isTaken => (isTaken ? { isBadName: true } : null)),
      catchError(() => null)
    );
  };
};
