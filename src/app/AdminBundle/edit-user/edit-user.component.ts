import {Component, Inject, OnInit} from '@angular/core';
import {UserDropDownService} from '../../user-dropdown.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../server/server/User';
import {UserService} from '../../user.service';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import { CurUserState, UsersState} from '../../store';
import {isNameTaken} from '../../validators/user-name.validator';
import {isAvailableName} from '../../validators/user-name-available.validator';
import {DateValidator} from '../../validators/date.validator';
import {AddUser, DeleteUser, GetUsers, UpdateUser} from '../../store/user-store/actions/users.actions';
import {EditUsersComponent} from '../edit-users/edit-users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
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
              public dropdownService: UserDropDownService,
              private formBuilder: FormBuilder,
              public translate: TranslateService,
              private usersStore: Store<UsersState>,
              @Inject(EditUsersComponent) private parent: EditUsersComponent) {}

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(4)]),
          [isNameTaken.bind(this), isAvailableName(this.userService, '').bind(this)],
          'blur'],
        dateOfBirth: ['', Validators.compose([Validators.required, DateValidator])],
        dateOfFirstLogin: ['', Validators.compose([Validators.required, DateValidator])],
        dateNextNotification: ['', Validators.compose([Validators.required, DateValidator])],
        information: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

      });
  }
  onSubmit() {
    const newUser: User = this.getUserFromForm();
    if (!this.dropdownService.selectedUser) {
      newUser.role = 'USER';
      this.usersStore.dispatch(new AddUser(newUser));
    } else {
      newUser.role = this.dropdownService.selectedUser.role;
      newUser.id = this.dropdownService.selectedUser.id;
      this.usersStore.dispatch( new UpdateUser(newUser));
    }
    this.parent.showEdit = false;
  }
  onClickDelete() {
    if (this.dropdownService.selectedUser.role !== 'ADMIN') {
      this.usersStore.dispatch(new DeleteUser(this.dropdownService.selectedUser.id));
      this.usersStore.dispatch(new GetUsers());
      this.userForm.reset();
      this.dropdownService.selectedUserHandle.next(-1);
    }
  }

  get name() { return this.userForm.get('name'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get dateOfFirstLogin() { return this.userForm.get('dateOfFirstLogin'); }
  get dateNextNotification() { return this.userForm.get('dateNextNotification'); }
  get information() { return this.userForm.get('information'); }

}
