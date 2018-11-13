import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';
import { CurUserState} from '../store';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-info-tab',
  templateUrl: './user-info-tab.component.html',
  styleUrls: ['./user-info-tab.component.scss']
})
export class UserInfoTabComponent implements OnInit {
  constructor(public translate: TranslateService, public userService: UserService, public sessionStore: Store<CurUserState>) { }

  ngOnInit() {
  }


}
