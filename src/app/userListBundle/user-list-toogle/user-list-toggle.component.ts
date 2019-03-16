import {Component, OnInit} from '@angular/core';
import {UserDropDownService} from '../../user-dropdown.service';

@Component({
  selector: 'app-user-list-toogle',
  templateUrl: './user-list-toggle.component.html',
  styleUrls: ['./user-list-toggle.component.scss']
})
export class UserListToggleComponent implements OnInit {
  constructor(public userDropdownService: UserDropDownService) { }

  ngOnInit() {

  }

}
