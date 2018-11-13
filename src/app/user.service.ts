import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {User} from '../../server/server/User';
import {DATE_FORMATS} from './shared/configuration';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {currentUser, CurUserState} from './store';


export interface UpdatePasswordUserType {
  name: string;
  oldPassword: string;
  newPassword: string;
}



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootUrl = 'http://localhost:8000';
  currentUser$: Observable<User>;
  constructor(private http: HttpClient, private sessionStore: Store<CurUserState>) {
    this.currentUser$ = this.sessionStore.pipe(select(currentUser));
  }
  getUsers(): Observable<User[]> {
    const url = `${this.rootUrl}/users`;
    return this.http.get<User[]>(url).pipe(map((users: User[]) => users.map((user) => this.getLocalUser(user))));
  }
  getUser(id: number): Observable<User> {
    const url = `${this.rootUrl}/users/${id}`;
    return this.http.get<User>(url).pipe(map((user) => this.getLocalUser(user)));
  }
  addUser(user: User): Observable<User> {
    const url = `${this.rootUrl}/users/add`;
    return this.http.post<User>(url, this.getUserForSend(user));
  }
  updateUser (user: User): Observable<User> {
    const url = `${this.rootUrl}/users/${user.id}`;
    return this.http.put<User>(url, this.getUserForSend(user));
  }
  deleteUser (id: number): Observable<User> {
    const url = `${this.rootUrl}/users/${id}`;
    return this.http.delete<User>(url).pipe(map((user) => this.getLocalUser(user)));
  }
  updatePassword(user: UpdatePasswordUserType): Observable<boolean> {
    const url = `${this.rootUrl}/account/updatePassword`;
    return this.http.post<boolean>(url, user);
  }
  checkUser (name: string): Observable<boolean> {
    const url = `${this.rootUrl}/users/check/${name}`;
    return this.http.get<boolean>(url);
  }
  getFilterUsers(term: string): Observable<User[]> {
    const url = `${this.rootUrl}/users/search`;
    return this.http.post<User[]>(url, {name: term}).pipe(map((users: User[]) => users.map((user) => this.getLocalUser(user))));
  }
  updateCurrentUser(user: User): Observable<User> {
    const url = `${this.rootUrl}/currentUser`;
    return this.currentUser$ = this.http.put<User>(url, user).pipe(map((letUser) => this.getLocalUser(letUser)));
  }
  getCurrentUser(): Observable<User> {
    const url = `${this.rootUrl}/currentUser`;
    return this.http.get<User>(url).pipe(map((user) => this.getLocalUser(user)));
  }
  getUserForSend(user: User): User {
    return {
      name: user.name,
      dateOfBirth: this.getUTCDate(user.dateOfBirth),
      dateOfFirstLogin: this.getUTCDate(user.dateOfFirstLogin),
      dateNextNotification: this.getUTCDate(user.dateNextNotification),
      information: user.information,
      role: user.role
    };
  }
  getLocalUser(user: User): User {
    return{
      id: user.id,
      name: user.name,
      dateOfBirth: this.getLocalDate(user.dateOfBirth),
      dateOfFirstLogin: this.getLocalDate(user.dateOfFirstLogin),
      dateNextNotification: this.getLocalDate(user.dateNextNotification),
      information: user.information,
      role: user.role
    };
  }


  getLocalDate = (date: string): string => moment.utc(date).format(DATE_FORMATS[0]).toString();
  getUTCDate = (date: string): string => moment(date, DATE_FORMATS, true).utc().toString();


}
