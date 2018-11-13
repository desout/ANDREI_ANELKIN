import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';
import {GetCurrentUser, LogoutUser} from '../store/current-user-store/actions/currentUser.actions';
import {CurUserState} from '../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  title = 'Andrei Anelkin';
  constructor(public translate: TranslateService,
              private userService: UserService,
              private authService: AuthService,
              private sessionStore: Store<CurUserState>) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  onClickLogout() {
    this.sessionStore.dispatch(new LogoutUser());
  }
  ngOnInit() {
    this.sessionStore.dispatch(new GetCurrentUser());
  }

}
