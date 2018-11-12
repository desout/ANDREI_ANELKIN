import { Action } from '@ngrx/store';
import {User} from '../../../../../server/server/User';
import {UpdatePasswordUserType} from '../../../user.service';


export const UserActionTypes = {
  ADD_USER: '[User] ADD',
  ADD_USER_SUCCESS: '[User] ADD_SUCCESS',
  ADD_USER_FAIL: '[User] ADD_FAIL',
  UPDATE_USER: '[User] UPDATE',
  UPDATE_USER_SUCCESS: '[User] UPDATE_SUCCESS',
  UPDATE_USER_FAIL: '[User] UPDATE_FAIL',
  GET_USER: '[User] LOAD',
  GET_USER_SUCCESS: '[User] LOAD_SUCCESS',
  GET_USER_FAIL: '[User] LOAD_FAIL',
  GET_USERS: '[Users] LOAD',
  GET_USERS_SUCCESS: '[Users] LOAD_SUCCESS',
  GET_USERS_FAIL: '[Users] LOAD_FAIL',
  DELETE_USER: '[User] DELETE',
  DELETE_USER_SUCCESS: '[User] DELETE_SUCCESS',
  DELETE_USER_FAIL: '[User] DELETE_FAIL',
  UPDATE_PASSWORD_USER: '[User] Update Password User',
  UPDATE_PASSWORD_USER_FAIL: '[User] Update Password User Fail',
  UPDATE_PASSWORD_USER_SUCCESS: '[User] Update Password User Success',
};

export class AddUser implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload: User) {}
}
export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class AddUserFail implements Action {
  readonly type = UserActionTypes.ADD_USER_FAIL;
  constructor(public payload: string) {}
}
export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;
  constructor(public payload: User) {}
}
export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UPDATE_USER_FAIL;
  constructor(public payload: string) {}
}
export class GetUser implements Action {
  readonly type = UserActionTypes.GET_USER;
  constructor(public payload: number) {}
}
export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class GetUserFail implements Action {
  readonly type = UserActionTypes.GET_USER_FAIL;
  constructor(public payload: string) {}
}
export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload: number) {}
}
export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAIL;
  constructor(public payload: string) {}
}
export class GetUsers implements Action {
  readonly type = UserActionTypes.GET_USERS;
}
export class GetUsersSuccess implements Action {
  readonly type = UserActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}
export class GetUsersFail implements Action {
  readonly type = UserActionTypes.GET_USERS_FAIL;
  constructor(public payload: string) {}
}
export class UpdatePasswordUserFn implements Action {
  readonly type = UserActionTypes.UPDATE_PASSWORD_USER;
  constructor(public payload: UpdatePasswordUserType) {}
}
export class UpdatePasswordUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_PASSWORD_USER_SUCCESS;
  constructor(public payload: boolean) {}
}
export class UpdatePasswordUserFail implements Action {
  readonly type = UserActionTypes.UPDATE_PASSWORD_USER_FAIL;
  constructor(public payload: string) {}
}
export type UsersActions =
|AddUser
|AddUserSuccess
|AddUserFail
|UpdateUser
|UpdateUserSuccess
|UpdateUserFail
|GetUser
|GetUserSuccess
|GetUserFail
|GetUsers
|GetUsersSuccess
|GetUsersFail
|UpdatePasswordUserFn
|UpdatePasswordUserSuccess
|UpdatePasswordUserFail
|DeleteUser
|DeleteUserSuccess
|DeleteUserFail;
