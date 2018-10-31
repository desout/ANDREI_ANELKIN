import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService} from '../user.service';
import {TranslateService} from '@ngx-translate/core';
import {isNameTaken} from '../validators/user-name.validator';
import {DateValidator} from '../validators/date.validator';
import {startWith} from 'rxjs/operators';
import {LocalUser} from '../../../server/server/LocalUser';
import {isAvailableName} from '../validators/user-name-available.validator';

@Component({
  selector: 'app-editor-info-user-tab',
  templateUrl: './editor-info-user-tab.component.html',
  styleUrls: ['./editor-info-user-tab.component.scss']
})
export class EditorInfoUserTabComponent implements OnInit {
  user: LocalUser;
  userForm: FormGroup;

  getUserFromForm(): LocalUser {
    return {
      name:  this.userForm.get('name').value,
      dateOfBirth: this.userForm.get('dateOfBirth').value,
      dateOfFirstLogin: this.userForm.get('dateOfFirstLogin').value,
      dateNextNotification: this.userForm.get('dateNextNotification').value,
      information: this.userForm.get('information').value
    };
  }
  constructor(private userService: UserService, private formBuilder: FormBuilder, public translate: TranslateService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)]),
        [isNameTaken.bind(this), isAvailableName(this.userService).bind(this)],
        'blur'],
      dateOfBirth: ['', Validators.compose([Validators.required, DateValidator])],
      dateOfFirstLogin: ['', Validators.compose([Validators.required, DateValidator])],
      dateNextNotification: ['', Validators.compose([Validators.required, DateValidator])],
      information: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

    });

    this.userService.userUpdateHandle.pipe(startWith(this.user = this.userService.currentUser))
      .subscribe(( letUser ) => {
        this.user = letUser;
        if ( letUser) {
          this.userForm.patchValue( {
            name: this.user.name,
            dateOfBirth: this.user.dateOfBirth,
            dateOfFirstLogin: this.user.dateOfFirstLogin,
            dateNextNotification: this.user.dateNextNotification,
            information: this.user.information});
        }

      });
  }
  onSubmit() {
    const newUser: LocalUser = this.getUserFromForm();
    this.userService.updateUser(newUser).subscribe();
    this.userService.updateLocalUser(newUser);
  }

  get name() { return this.userForm.get('name'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get dateOfFirstLogin() { return this.userForm.get('dateOfFirstLogin'); }
  get dateNextNotification() { return this.userForm.get('dateNextNotification'); }
  get information() { return this.userForm.get('information'); }
}
