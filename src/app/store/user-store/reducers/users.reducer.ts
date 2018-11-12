import {
  DeleteUserFail,
  DeleteUserSuccess,
  GetUsersFail,
  GetUsersSuccess,
  GetUserSuccess,
  UserActionTypes,
  UsersActions
} from '../actions/users.actions';
import { Map, List } from 'immutable';
import {User} from '../../../../../server/server/User';
import {LogoutUserFail} from '../../current-user-store/actions/currentUser.actions';
export interface UserState {
  users: User[];
  loaded?: boolean;
  loading?: boolean;
}

export const initialState: UserState = {
  users: [],
  loaded: false,
  loading: false
};

export function userReducer(state: UserState = initialState, action: UsersActions): UserState {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.ADD_USER_FAIL: {
      return Map(state)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.ADD_USER_SUCCESS: {
      return Map(state)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case UserActionTypes.UPDATE_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.UPDATE_USER_FAIL: {
      return Map(state)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.UPDATE_USER_SUCCESS: {
      return Map(state)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case UserActionTypes.GET_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.GET_USER_FAIL: {
      return Map(state)
        .set('users', (action as LogoutUserFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.GET_USER_SUCCESS: {
      return Map(state)
        .set('users', (action as GetUserSuccess).payload)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case UserActionTypes.DELETE_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.DELETE_USER_FAIL: {
      return Map(state)
        .set('users', (action as DeleteUserFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.DELETE_USER_SUCCESS: {
      return Map(state)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case UserActionTypes.GET_USERS: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.GET_USERS_FAIL: {
      return Map(state)
        .set('users', (action as GetUsersFail).payload)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.GET_USERS_SUCCESS: {
      return Map(state)
        .set('users', (action as GetUsersSuccess).payload)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    case UserActionTypes.UPDATE_PASSWORD_USER: {
      return Map(state)
        .set('loaded', false)
        .set('loading', true)
        .toJS();
    }
    case UserActionTypes.UPDATE_PASSWORD_USER_FAIL: {
      return Map(state)
        .set('loading', false)
        .set('loaded', false)
        .toJS();
    }
    case UserActionTypes.UPDATE_PASSWORD_USER_SUCCESS: {
      return Map(state)
        .set('loading', false)
        .set('loaded', true)
        .toJS();
    }
    default: {
      return state;
    }
  }
}
