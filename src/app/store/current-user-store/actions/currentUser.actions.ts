import {Action} from '@ngrx/store';
import {User} from '../../../../../server/server/User';
import {AuthResponseType, UserLogin} from '../../../auth.service';

export const CurrentUserActionTypes = {
  UPDATE_CURRENT_USER: '[User] CURRENT UPDATE',
  UPDATE_CURRENT_USER_SUCCESS: '[User] CURRENT UPDATE_SUCCESS',
  UPDATE_CURRENT_USER_FAIL: '[User] CURRENT UPDATE_FAIL',
  GET_CURRENT_USER: '[User] CURRENT GET',
  GET_CURRENT_USER_SUCCESS: '[User] CURRENT GET_SUCCESS',
  GET_CURRENT_USER_FAIL: '[User] CURRENT GET_FAIL',
  LOGIN_USER: '[User] Login User',
  LOGIN_USER_FAIL: '[User] Login User Fail',
  LOGIN_USER_SUCCESS: '[User] Login User Success',
  LOGOUT_USER: '[User] Logout User',
  LOGOUT_USER_FAIL: '[User] Logout User Fail',
  LOGOUT_USER_SUCCESS: '[User] Logout User Success',
};

export class UpdateCurrentUser implements Action {
  readonly type = CurrentUserActionTypes.UPDATE_CURRENT_USER;
  constructor(public payload: User) {}
}
export class UpdateCurrentUserSuccess implements Action {
  readonly type = CurrentUserActionTypes.UPDATE_CURRENT_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class UpdateCurrentUserFail implements Action {
  readonly type = CurrentUserActionTypes.UPDATE_CURRENT_USER_FAIL;
  constructor(public payload: string) {}
}
export class GetCurrentUser implements Action {
  readonly type = CurrentUserActionTypes.GET_CURRENT_USER;
}
export class GetCurrentUserSuccess implements Action {
  readonly type = CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class GetCurrentUserFail implements Action {
  readonly type = CurrentUserActionTypes.GET_CURRENT_USER_FAIL;
}
export class LoginUser implements Action {
  readonly type = CurrentUserActionTypes.LOGIN_USER;
  constructor(public payload: UserLogin) {}
}
export class LoginUserSuccess implements Action {
  readonly type = CurrentUserActionTypes.LOGIN_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class LoginUserFail implements Action {
  readonly type = CurrentUserActionTypes.LOGIN_USER_FAIL;
  constructor(public payload: string) {}
}
export class LogoutUser implements Action {
  readonly type = CurrentUserActionTypes.LOGOUT_USER;
}
export class LogoutUserSuccess implements Action {
  readonly type = CurrentUserActionTypes.LOGOUT_USER_SUCCESS;
}
export class LogoutUserFail implements Action {
  readonly type = CurrentUserActionTypes.LOGOUT_USER_FAIL;
  constructor(public payload: string) {}
}
export type CurrentUserActions=
|UpdateCurrentUser
|UpdateCurrentUserSuccess
|UpdateCurrentUserFail
|GetCurrentUser
|GetCurrentUserSuccess
|GetCurrentUserFail
|LoginUser
|LoginUserSuccess
|LoginUserFail
|LogoutUser
|LogoutUserSuccess
|LogoutUserFail;
