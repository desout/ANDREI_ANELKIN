import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {currentUserReducer, CurrentUserState} from './current-user-store/reducers/currentUser.reducer';
import {userReducer, UserState} from './user-store/reducers/users.reducer';
import {UsersActions} from './user-store/actions/users.actions';
import {CurrentUserActions} from './current-user-store/actions/currentUser.actions';

export interface CurUserState {
  currentUser: CurrentUserState;
}
export interface UsersState {
  users: UserState;
}

export const dataReducers: ActionReducerMap<UsersState, UsersActions> = {
  users: userReducer
};
export const sessionReducers: ActionReducerMap<CurUserState, CurrentUserActions> = {
  currentUser: currentUserReducer
};

export const selectUsersFeature = createFeatureSelector<UsersState>('Users');
export const selectSessionFeature = createFeatureSelector<CurUserState>('Session');

export const selectUsers = createSelector(selectUsersFeature, (state: UsersState) => state.users);
export const selectCurrentUser = createSelector(selectSessionFeature, (state: CurUserState) => state.currentUser);

export const allUsers = createSelector(selectUsers, (state: UserState) => state.users);
export const currentUser = createSelector(selectCurrentUser, (state: CurrentUserState) => state.currentUser);
