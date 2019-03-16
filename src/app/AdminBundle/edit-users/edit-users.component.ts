import { Component, OnInit } from '@angular/core';
import {UserDropDownService} from '../../user-dropdown.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  constructor(private dropdownService: UserDropDownService) { }
  public showEdit = false;
  ngOnInit() {
  }
  onClickEdit() {
    this.showEdit = true;
  }
  onClickNew() {
    this.dropdownService.selectedUserHandle.next(-1);
    this.showEdit = true;
  }
}
