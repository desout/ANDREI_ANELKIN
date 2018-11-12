import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoTabComponent } from './user-info-tab.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../Test.module';

describe('UserInfoTabComponent', () => {
  let component: UserInfoTabComponent;
  let fixture: ComponentFixture<UserInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
