import {Component, Inject, OnInit} from '@angular/core';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {UserListViewComponent} from '../user-list-view/user-list-view.component';
import { Subject} from 'rxjs';
import {UserDropDownService} from '../../user-dropdown.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})

export class UsersSearchComponent implements OnInit {
  searching = false;
  public searchUsersTerm = new Subject<string>();
  constructor(@Inject(UserListViewComponent) private parent: UserListViewComponent,
              private userDropDownService: UserDropDownService) {
      this.searchUsersTerm
      .pipe(
        debounceTime(500),
        tap(() => this.searching = true),
        switchMap((term: string) => {
          this.userDropDownService.term = term;
          return this.userDropDownService.getFilteredUsers();
        }),
        tap(() => this.searching = false))
        .subscribe((users) => this.userDropDownService.users = users);
  }
  ngOnInit() {
    this.search('');
  }
  search(term: string) {
    this.searchUsersTerm.next(term);
  }
}

