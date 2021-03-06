import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthResponseType} from '../auth.service';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient ) { }
  private rootUrl = 'http:///localhost:8000/account';
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.http.post<AuthResponseType>(this.rootUrl + '/auth', null).pipe(map((response: AuthResponseType) => {
      if (response.success) {
        return true;
      }
      this.router.navigate(['/account/login']);
      return false;
    }));


  }
}
