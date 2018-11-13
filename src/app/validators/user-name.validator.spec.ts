import {TestBed} from '@angular/core/testing';
import {checkName} from './user-name.validator';
describe('UserNameValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('checkName: Should correctly check name', () => {
    const returnedValue = checkName('Drogba');
    const returnedValue2 = checkName('drogba');

    expect(returnedValue).toBe(true);
    expect(returnedValue2).toBe(false);
    expect(returnedValue2).toMatchSnapshot();
    expect(returnedValue).toMatchSnapshot();
  });
});
