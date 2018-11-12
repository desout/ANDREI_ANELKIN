import { Map} from 'immutable';
import {User} from '../../../../../server/server/User';
import {
  CurrentUserActions,
  CurrentUserActionTypes,
  GetCurrentUserSuccess, LoginUser, LoginUserSuccess, LogoutUserFail,
  UpdateCurrentUser, UpdateCurrentUserSuccess
} from '../actions/currentUser.actions';
import {UpdateUserFail} from '../../user-store/actions/users.actions';
export interface CurrentUserState {
  currentUser: User;
  loaded?: boolean;
  loading?: boolean;
}

export const initialState: CurrentUserState = {
  currentUser: {} as User,
  loaded: false,
  loading: false
};

export function currentUserReducer(state: CurrentUserState = initialState, action: CurrentUserActions): CurrentUserState {
  switch (action.type) {
    case CurrentUserActionTypes.UPDATE_CURRENT_USER: {
      return Map(state)
        .set('currentUser', (action as UpdateCurrentUser).payload)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case CurrentUserActionTypes.UPDATE_CURRENT_USER_FAIL: {
      return Map(state)
        .set('currentUser', (action as UpdateUserFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case CurrentUserActionTypes.UPDATE_CURRENT_USER_SUCCESS: {
      return Map(state)
        .set('currentUser', (action as UpdateCurrentUserSuccess).payload)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case CurrentUserActionTypes.GET_CURRENT_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_FAIL: {
      return Map(state)
        .set('currentUser', {})
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS: {
      return Map(state)
        .set('currentUser', (action as GetCurrentUserSuccess).payload)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case CurrentUserActionTypes.LOGIN_USER: {
      return Map(state)
        .set('currentUser', (action as LoginUser).payload)
        .set('loaded', false)
        .set('loading', true)
        .toJS() as CurrentUserState;
    }
    case CurrentUserActionTypes.LOGIN_USER_FAIL: {
      return Map(state)
        .set('currentUser', (action as LogoutUserFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case CurrentUserActionTypes.LOGIN_USER_SUCCESS: {
      return Map(state)
        .set('currentUser', (action as LoginUserSuccess).payload)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case CurrentUserActionTypes.LOGOUT_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case CurrentUserActionTypes.LOGOUT_USER_FAIL: {
      return Map(state)
        .set('currentUser', (action as LogoutUserFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case CurrentUserActionTypes.LOGOUT_USER_SUCCESS: {
      return Map(state)
        .set('currentUser', {})
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    default: {
      return state;
    }
  }
}
