import {Component, Inject, OnInit} from '@angular/core';
import {UserListComponent} from '../user-list/user-list.component';

@Component({
  selector: 'app-user-list-toogle-button',
  templateUrl: './user-list-toggle-button.component.html',
  styleUrls: ['./user-list-toggle-button.component.scss']
})
export class UserListToggleButtonComponent implements OnInit {
  constructor(@Inject(UserListComponent) private parent: UserListComponent) { }

  ngOnInit() {
  }
  onToggleClick() {
    this.parent.isToggled = !this.parent.isToggled;
  }
}
