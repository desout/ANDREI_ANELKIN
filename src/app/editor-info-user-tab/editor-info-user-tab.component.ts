import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService} from '../user.service';
import {TranslateService} from '@ngx-translate/core';
import {isNameTaken} from '../validators/user-name.validator';
import {DateValidator} from '../validators/date.validator';
import {isAvailableName} from '../validators/user-name-available.validator';
import {User} from '../../../server/server/User';
import {CurUserState} from '../store';
import {Store} from '@ngrx/store';
import {UpdateCurrentUser} from '../store/current-user-store/actions/currentUser.actions';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-editor-info-user-tab',
  templateUrl: './editor-info-user-tab.component.html',
  styleUrls: ['./editor-info-user-tab.component.scss']
})
export class EditorInfoUserTabComponent implements OnInit {
  userForm: FormGroup;
  getUserFromForm(): User {
    return {
      name:  this.userForm.get('name').value,
      dateOfBirth: this.userForm.get('dateOfBirth').value,
      dateOfFirstLogin: this.userForm.get('dateOfFirstLogin').value,
      dateNextNotification: this.userForm.get('dateNextNotification').value,
      information: this.userForm.get('information').value,
      role: ''
    };
  }
  constructor(public userService: UserService,
              private formBuilder: FormBuilder,
              public translate: TranslateService,
              private sessionStore: Store<CurUserState>) {}

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user) => {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(4)]),
          [isNameTaken.bind(this), isAvailableName(this.userService, user.name).bind(this)],
          'blur'],
        dateOfBirth: ['', Validators.compose([Validators.required, DateValidator])],
        dateOfFirstLogin: ['', Validators.compose([Validators.required, DateValidator])],
        dateNextNotification: ['', Validators.compose([Validators.required, DateValidator])],
        information: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

      });
    });
  }
  onSubmit() {
    this.userService.currentUser$.pipe(take(1)).subscribe((user) => {
      const newUser: User = this.getUserFromForm();
      newUser.role = user.role;
      this.sessionStore.dispatch(new UpdateCurrentUser(newUser));
    });
  }

  get name() { return this.userForm.get('name'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get dateOfFirstLogin() { return this.userForm.get('dateOfFirstLogin'); }
  get dateNextNotification() { return this.userForm.get('dateNextNotification'); }
  get information() { return this.userForm.get('information'); }
}
