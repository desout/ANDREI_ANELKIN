import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';
import {LocalUser} from '../../../server/server/LocalUser';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  title = 'Andrei Anelkin';
  user: LocalUser;
  constructor(public translate: TranslateService, private userService: UserService, private authService: AuthService) {

    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  onClickLogout() {
    this.authService.logout();
  }
  ngOnInit() {
    this.userService.userUpdateHandle
      .subscribe((letUser) => this.user = letUser);
  }

}
