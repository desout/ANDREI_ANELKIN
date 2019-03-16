import {Component, OnInit} from '@angular/core';
import {UserDropDownService} from '../../user-dropdown.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isToggled = false;
  constructor(public userDropDownService: UserDropDownService) {
  }
  ngOnInit() {
  }

}
