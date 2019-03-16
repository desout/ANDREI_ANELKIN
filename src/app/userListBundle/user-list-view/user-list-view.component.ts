import {Component, Inject, OnInit} from '@angular/core';
import {UserListComponent} from '../user-list/user-list.component';
import {UserDropDownService} from '../../user-dropdown.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
  public loading = false;
  constructor(public userDropDownService: UserDropDownService,
              @Inject(UserListComponent) private parent: UserListComponent) { }

  ngOnInit() {
    this.userDropDownService.selectedUserHandle
      .pipe(
        switchMap((index: number) => this.userDropDownService.setNewSelectedUser(index)))
      .subscribe((user) => this.userDropDownService.selectedUser = user);
  }
  onItemClick(index: number) {
    this.parent.userDropDownService.selectedUserHandle.next(index);
    this.parent.isToggled = false;
  }
}
