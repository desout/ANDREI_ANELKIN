import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersComponent } from './edit-users.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../../Test.module';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;
  let fixture: ComponentFixture<EditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it( 'Button success should be created', () => {
    const element: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-success');

    expect(element).toMatchSnapshot();
  });
});
