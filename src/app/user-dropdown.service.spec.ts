import {TestBed} from '@angular/core/testing';
import { UserDropDownService } from './user-dropdown.service';
import {TestModule} from './Test.module';

describe('UserDropDownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
  });
  it('getDropDownUser: Should return User with correct age', () => {
    const mockUser = {
      id: 0,
      age: 21,
      name: 'Andrei',
      password: 'drogba',
      dateOfBirth: '1997/10/23',
      dateOfFirstLogin: '2017/10/23',
      dateNextNotification: '2018/10/23',
      information: 'Best of the Best',
      role: 'ADMIN'
    };
    const service: UserDropDownService = TestBed.get(UserDropDownService);

    const user = service.getDropDownUser({
      id: 0,
      name: 'Andrei',
      password: 'drogba',
      dateOfBirth: '1997/10/23',
      dateOfFirstLogin: '2017/10/23',
      dateNextNotification: '2018/10/23',
      information: 'Best of the Best',
      role: 'ADMIN'});

    expect(user).toEqual(mockUser);
    expect(user).toMatchSnapshot();
  });
  it('getAge: should return correct age', () => {
    const age = 19;
    const service: UserDropDownService = TestBed.get(UserDropDownService);

    const letAge = service.getAge('1999/10/23');

    expect(letAge).toEqual(age);
    expect(letAge).toMatchSnapshot();
  });
});
