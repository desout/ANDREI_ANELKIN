import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListToggleButtonComponent } from './user-list-toggle-button.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../../Test.module';

describe('UserListToggleButtonComponent', () => {
  let component: UserListToggleButtonComponent;
  let fixture: ComponentFixture<UserListToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
