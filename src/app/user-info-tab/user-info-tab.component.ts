import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {TranslateService} from '@ngx-translate/core';
import {LocalUser} from '../../../server/server/LocalUser';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user-info-tab',
  templateUrl: './user-info-tab.component.html',
  styleUrls: ['./user-info-tab.component.scss']
})
export class UserInfoTabComponent implements OnInit {
  user: LocalUser;
  constructor(public translate: TranslateService, private userService: UserService) { }

  ngOnInit() {
    this.userService
      .userUpdateHandle.pipe(startWith(this.user = this.userService.currentUser))
      .subscribe(( letUser ) => this.user = letUser);
  }

}
