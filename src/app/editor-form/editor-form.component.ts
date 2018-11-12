import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AgeValidator} from '../validators/age.validator';
import {DateValidator} from '../validators/date.validator';
import {createUser, User} from '../../../server/server/User';
import {UserService} from '../user.service';
import {isNameTaken} from '../validators/user-name.validator';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit {
  user = {name: 'Desout',
    age: '18',
    dateOfBirth: '2018/11/11',
    dateOfFirstLogin: '2018/11/11',
    dateNextNotification: '2018/11/11',
    information: 'infoinfo'};
  userForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, {
        validators: [Validators.required, Validators.minLength(4)],
        asyncValidators: [isNameTaken.bind(this)],
        updateOn: 'blur'
      }),
      age: new FormControl(this.user.age, [Validators.required, AgeValidator]),
      dateOfBirth: new FormControl(this.user.dateOfBirth, [Validators.required, DateValidator]),
      dateOfFirstLogin: new FormControl(this.user.dateOfFirstLogin, [Validators.required, DateValidator]),
      dateNextNotification: new FormControl(this.user.dateNextNotification, [Validators.required, DateValidator]),
      information: new FormControl(this.user.information, [Validators.required, Validators.minLength(4)])

  });
  }
  onSubmit() {
    this.submitted = true;
    const exportUser: User = this.getUserFromForm();
    this.userService.addUser(exportUser).subscribe();
  }
  getUserFromForm(): User {
    return createUser(this.name.value,
      'empty',
      this.dateOfBirth.value,
      this.dateOfFirstLogin.value,
      this.dateNextNotification.value,
      this.information.value,
      'user');
  }
  get name() { return this.userForm.get('name'); }
  get age() { return this.userForm.get('age'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get dateOfFirstLogin() { return this.userForm.get('dateOfFirstLogin'); }
  get dateNextNotification() { return this.userForm.get('dateNextNotification'); }
  get information() { return this.userForm.get('information'); }
}

