import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {DATE_FORMATS} from './shared/configuration';
import {UserService} from './user.service';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../server/server/User';

@Injectable()
export class UserDropDownService {
  constructor(private userService: UserService) {}
  selectedUser: User;
  public selectedUserHandle = new Subject<number>();
  users: User[];
  term: string;
  getAge(date: string): number {
    const currentDate: moment.Moment = moment();
    const birthDay: moment.Moment = moment(date, DATE_FORMATS, true);
    return currentDate.year() - birthDay.year();
  }
  getDropDownUser(user: User): User {
    user.age = this.getAge(user.dateOfBirth);
    return user;
  }
  getFilteredUsers(): Observable<User[]> {
    return this.userService.getFilterUsers(this.term)
      .pipe(map((users) => users.map((user) => this.getDropDownUser(user))));
  }
  setNewSelectedUser(index: number): Observable<User> {
    if (index === -1) {
      return of(undefined);
    }
    return of(this.users[index]);
  }

}
