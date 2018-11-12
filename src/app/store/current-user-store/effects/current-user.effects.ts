import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../../../../server/server/User';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService} from '../../../user.service';
import {
  CurrentUserActions,
  CurrentUserActionTypes,
  GetCurrentUserFail,
  GetCurrentUserSuccess,
  LoginUser,
  LoginUserFail, LoginUserSuccess,
  LogoutUserFail,
  LogoutUserSuccess,
  UpdateCurrentUser,
  UpdateCurrentUserFail,
  UpdateCurrentUserSuccess,
} from '../actions/currentUser.actions';
import { UsersActions} from '../../user-store/actions/users.actions';
import {AuthResponseType, AuthService} from '../../../auth.service';
import {Router} from '@angular/router';
@Injectable()
export class CurrentUserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  @Effect()
  updateCurrentUser$: Observable<CurrentUserActions> = this.actions$.pipe(
    ofType(CurrentUserActionTypes.UPDATE_CURRENT_USER),
    mergeMap((action: UpdateCurrentUser) => {
      return this.userService.updateCurrentUser((action as UpdateCurrentUser).payload)
        .pipe(
          map((user: User) => new UpdateCurrentUserSuccess(user)),
          catchError((error: string) => of(new UpdateCurrentUserFail(error)))
        );
    })
  );
  @Effect()
  getCurrentUser$: Observable<CurrentUserActions> = this.actions$.pipe(
    ofType(CurrentUserActionTypes.GET_CURRENT_USER),
    switchMap(() => {
      return this.userService.getCurrentUser()
        .pipe(
          map((user: User) => new GetCurrentUserSuccess(user)),
          catchError(() => of(new GetCurrentUserFail()))
        );
    })
  );
  @Effect()
  loginUser$: Observable<CurrentUserActions> = this.actions$.pipe(
    ofType(CurrentUserActionTypes.LOGIN_USER),
    mergeMap((action: LoginUser) => {
      return this.authService.login((action as LoginUser).payload)
        .pipe(
          map((res: AuthResponseType) => new LoginUserSuccess(JSON.parse(res.object) as User)),
          catchError((error: string) => of(new LoginUserFail(error)))
        );
    })
  );
  @Effect()
  logoutUser$: Observable<CurrentUserActions> = this.actions$.pipe(
    ofType(CurrentUserActionTypes.LOGOUT_USER),
    mergeMap( ( ) => {
        return this.authService.logout()
          .pipe(
            map(() => {
              this.router.navigate(['./account/login']);
              return new LogoutUserSuccess();
            }),
            catchError((error: string) => of(new LogoutUserFail(error)))
          );
      }
    )
  );
}
