import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdatePasswordUser} from '../../../server/server/serverWorker';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  user: UpdatePasswordUser = { name: '', oldPassword: '', newPassword: ''};
  updatePasswordForm: FormGroup;
  constructor(private router: Router, protected userService: UserService, private authService: AuthService) { }

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
    this.userService.updatePassword({
      name: this.userName.value,
      oldPassword: this.oldPassword.value,
      newPassword: this.newPassword.value} as UpdatePasswordUser)
      .pipe(map(response => {
      if (!response) {
        this.updatePasswordForm.get('newPassword').setErrors({
          'badPassword': true
        });
      } else {
        this.router.navigate(['./infoTab']);
      }
    })).subscribe();
  }
  onClickLogout() {
    this.authService.logout();
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
