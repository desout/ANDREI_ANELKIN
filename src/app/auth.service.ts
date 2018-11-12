import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface AuthResponseType {
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

  constructor(private http: HttpClient) { }
  login( user: UserLogin): Observable<AuthResponseType> {
    return this.http.post<AuthResponseType>(`${this.rootUrl}/account/login`, user);
  }
  logout() {
    return this.http.post(`${this.rootUrl}/account/logout`, {});
  }

}
