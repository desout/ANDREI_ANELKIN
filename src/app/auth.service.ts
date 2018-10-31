import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {httpOptions, UserService} from './user.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LocalUser} from '../../server/server/LocalUser';

export interface ResponseType {
  success: boolean;
  message: string;
  token?: string;
  object?: string;
}
export interface UserLogin {
  name: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }
  login( user: UserLogin): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${this.rootUrl}/account/login`, user, httpOptions)
      .pipe( map((response: ResponseType) => {
        if (response && response.token ) {
          const letUser: LocalUser = this.userService.getLocalUser(JSON.parse(response.object));
          this.userService.updateLocalUser(letUser);
          localStorage.setItem('currentUser', JSON.stringify({id: letUser.id, name: letUser.name, token: response.token}));
        }
        return response;
      }));
  }
  logout() {
    this.userService.currentUser = null;
    localStorage.removeItem('currentUser');
    this.userService.updateLocalUser(undefined);
    this.router.navigate( ['./account/login']);
  }

}
