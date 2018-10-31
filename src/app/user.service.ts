import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {User} from '../../server/server/User';
import {LocalUser} from '../../server/server/LocalUser';
import {DATE_FORMATS} from './shared/configuration';
import * as moment from 'moment';
import {LocalStorageUser} from './jwt.interceptor';


interface UpdatePasswordUser {
  name: string;
  oldPassword: string;
  newPassword: string;
}

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootUrl = 'http://localhost:8000';
  currentUser: LocalUser;
  userUpdateHandle = new Subject<LocalUser>();
  constructor(private http: HttpClient) {
    const user: LocalStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    if (user !== null) {
      this.getUser(user.id).subscribe((letUser) => this.updateLocalUser(this.getLocalUser(letUser)));
    } else {
      this.updateLocalUser(undefined);

    }
  }
  getUsers(): Observable<LocalUser[]> {
    const url = `${this.rootUrl}/users`;
    return this.http.get<LocalUser[]>(url);
  }
  getUser(id: number): Observable<LocalUser> {
    const url = `${this.rootUrl}/users/${id}`;
    return this.http.get<LocalUser>(url);
  }
  addUser(user: User): Observable<LocalUser> {
    const url = `${this.rootUrl}/users/add`;
    return this.http.post<LocalUser>(url, this.getUserForSend(user), httpOptions);
  }
  updateUser (user: LocalUser): Observable<LocalUser> {
    const url = `${this.rootUrl}/users/${this.currentUser.id}`;
    return this.http.put<LocalUser>(url, this.getUserForSend(user), httpOptions);
  }
  deleteUser (id: number): Observable<LocalUser> {
    const url = `${this.rootUrl}/users/${id}`;
    return this.http.delete<LocalUser>(url, httpOptions);
  }
  updatePassword(user: UpdatePasswordUser): Observable<boolean> {
    const url = `${this.rootUrl}/account/updatePassword`;
    return this.http.post<boolean>(url, user, httpOptions);
  }
  checkUser (name: string): Observable<boolean> {
    const url = `${this.rootUrl}/users/check/${name}`;
    return this.http.get<boolean>(url, httpOptions);
  }

  updateLocalUser(user: LocalUser) {
    this.currentUser = user;
    this.userUpdateHandle.next(user);
  }
  getUserForSend(user: LocalUser): LocalUser {
    return{
      name: user.name,
      dateOfBirth: this.getUTCDate(user.dateOfBirth),
      dateOfFirstLogin: this.getUTCDate(user.dateOfFirstLogin),
      dateNextNotification: this.getUTCDate(user.dateNextNotification),
      information: user.information,
    };
  }
  getLocalUser(user: LocalUser): LocalUser {
    return{
      id: user.id,
      name: user.name,
      dateOfBirth: this.getLocalDate(user.dateOfBirth),
      dateOfFirstLogin: this.getLocalDate(user.dateOfFirstLogin),
      dateNextNotification: this.getLocalDate(user.dateNextNotification),
      information: user.information,
    };
  }
  getLocalDate = (date: string): string => moment.utc(date).format(DATE_FORMATS[0]).toString();
  getUTCDate = (date: string): string => moment(date, DATE_FORMATS, true).utc().toString();


}
