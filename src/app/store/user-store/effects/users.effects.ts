import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../../../../server/server/User';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {UserService} from '../../../user.service';
import {
  AddUser, AddUserFail, AddUserSuccess,
  GetUser, GetUserFail,
  GetUsersFail,
  GetUsersSuccess,
  GetUserSuccess, UpdatePasswordUserFn, UpdatePasswordUserFail, UpdatePasswordUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess,
  UserActionTypes,
  UsersActions, DeleteUser, DeleteUserSuccess, DeleteUserFail
} from '../actions/users.actions';
@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
  }

  @Effect()
  getUsers$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.GET_USERS),
    mergeMap(() => {
      return this.userService.getUsers()
        .pipe(
          map((users: User[]) => new GetUsersSuccess(users)),
          catchError((error: string) => of(new GetUsersFail(error)))
        );
    })
  );
  @Effect()
  getUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.GET_USER),
    mergeMap((action: GetUser) => {
      return this.userService.getUser(action.payload)
        .pipe(
          map((user: User) => new GetUserSuccess(user)),
          catchError((error: string) => of(new GetUserFail(error)))
        );
    })
  );
  @Effect()
  AddUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.ADD_USER),
    mergeMap((action: AddUser) => {
      return this.userService.addUser(action.payload)
        .pipe(
          map((user: User) => new AddUserSuccess(user)),
          catchError((error: string) => of(new AddUserFail(error)))
        );
    })
  );
  @Effect()
  DeleteUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.DELETE_USER),
    mergeMap((action: DeleteUser) => {
      return this.userService.deleteUser(action.payload)
        .pipe(
          map((user: User) => new DeleteUserSuccess(user)),
          catchError((error: string) => of(new DeleteUserFail(error)))
        );
    })
  );
  @Effect()
  UpdateUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_USER),
    mergeMap((action: UpdateUser) => {
      return this.userService.updateUser(action.payload)
        .pipe(
          map((user: User) => new UpdateUserSuccess(user)),
          catchError((error: string) => of(new UpdateUserFail(error)))
        );
    })
  );
  @Effect()
  updatePasswordUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_PASSWORD_USER),
    mergeMap( (action: UpdatePasswordUserFn ) => {
        return this.userService.updatePassword(action.payload)
          .pipe(
            map((response: boolean) => new UpdatePasswordUserSuccess(response)),
            catchError((error: string) => of(new UpdatePasswordUserFail(error)))
          );
      }
    )
  );
}
