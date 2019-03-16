import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpModelComponent } from './pop-up-model.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../Test.module';

describe('PopUpModelComponent', () => {
  let component: PopUpModelComponent;
  let fixture: ComponentFixture<PopUpModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
