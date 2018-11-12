import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../Test.module';

describe('ForgotPasswordPageComponent', () => {
  let component: ForgotPasswordPageComponent;
  let fixture: ComponentFixture<ForgotPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
