import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {AuthService, AuthResponseType, UserLogin} from '../auth.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PopUpModelComponent} from '../pop-up-model/pop-up-model.component';
import {CurUserState} from '../store';
import {Store} from '@ngrx/store';
import {GetCurrentUser, LogoutUser} from '../store/current-user-store/actions/currentUser.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserLogin = { name: '', password: ''};
  loginForm: FormGroup;

  constructor(private modalService: NgbModal,
              private router: Router,
              protected userService: UserService,
              private authService: AuthService,
              private sessionStore: Store<CurUserState>) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(this.user.name, {
        validators: [Validators.required]
      }),
      password: new FormControl(this.user.password, {validators: [Validators.required, Validators.minLength(4)]})
    });
  }

  onSubmit() {
    this.authService.login({name: this.userName.value, password: this.password.value} as UserLogin).pipe(map(response => {
      if (!(response as AuthResponseType).success) {
        this.loginForm.get('password').setErrors({
          'badPassword': true
        });
      } else {
        this.sessionStore.dispatch(new GetCurrentUser());
        this.openPopUp();
        this.router.navigate(['./infoTab']);
      }
    })).subscribe();
  }
  onClickLogout() {
    this.sessionStore.dispatch(new LogoutUser());
  }
  openPopUp() {
    const modalRef = this.modalService.open(PopUpModelComponent);
    modalRef.componentInstance.name = this.userName.value;
  }
  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
