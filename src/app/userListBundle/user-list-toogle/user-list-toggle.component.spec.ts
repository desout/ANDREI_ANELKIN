import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListToggleComponent } from './user-list-toggle.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../../Test.module';

describe('UserListToggleComponent', () => {
  let component: UserListToggleComponent;
  let fixture: ComponentFixture<UserListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
