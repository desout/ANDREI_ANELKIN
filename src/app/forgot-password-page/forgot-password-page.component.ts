import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdatePasswordUser} from '../../../server/server/serverWorker';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {UsersState, CurUserState} from '../store';
import {Store} from '@ngrx/store';
import {LogoutUser} from '../store/current-user-store/actions/currentUser.actions';
import {UpdatePasswordUserFn} from '../store/user-store/actions/users.actions';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  user: UpdatePasswordUser = { name: '', oldPassword: '', newPassword: ''};
  updatePasswordForm: FormGroup;
  constructor(private router: Router,
              protected userService: UserService,
              private sessionStore: Store<CurUserState>,
              private usersStore: Store<UsersState>) { }

  ngOnInit() {
    this.updatePasswordForm = new FormGroup({
      userName: new FormControl(this.user.name, {
        validators: [Validators.required]
      }),
      oldPassword: new FormControl(this.user.oldPassword, {validators: [Validators.required, Validators.minLength(4)]}),
      newPassword: new FormControl(this.user.newPassword, {validators: [Validators.required, Validators.minLength(4)]})
    });
  }
  onSubmit() {
    this.usersStore.dispatch(new UpdatePasswordUserFn({
      name: this.userName.value,
      oldPassword: this.oldPassword.value,
      newPassword: this.newPassword.value} as UpdatePasswordUser));
  }
  onClickLogout() {
    this.sessionStore.dispatch(new LogoutUser());
  }
  get userName() {
    return this.updatePasswordForm.get('userName');
  }

  get oldPassword() {
    return this.updatePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.updatePasswordForm.get('newPassword');
  }
}
