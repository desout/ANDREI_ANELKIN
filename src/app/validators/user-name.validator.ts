import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AbstractControl, ValidationErrors} from '@angular/forms';

export const isNameTaken = (control: AbstractControl): Observable<ValidationErrors> => {
  const name = control.value;
  const splittedName = name.split(' ');
  const isValid: boolean = isValidName(splittedName);
  return of(isValid).pipe(
    map(isTaken => (!isTaken ? { suitName: true } : null)),
    catchError(() => null)
  );
};

export const checkName = (name: string): boolean => {
  const splittedName: string[] = name.split('');
  for (const char of splittedName ) {
    if (!isLetter(char)) {
      return false;
    }
  }
  const firstCharacter = name.charAt(0);
  const upperCharacter = firstCharacter.toUpperCase();
  return firstCharacter === upperCharacter;
};
const isValidName = (splittedName: Array<string>): boolean => {
  if (splittedName.length <= 2) {
    for (const part of splittedName) {
      const isValidPart = checkName(part);
      if (!isValidPart) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const isLetter = (c): boolean => c.toLowerCase() !== c.toUpperCase();
