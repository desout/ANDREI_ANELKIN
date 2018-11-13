import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInfoUserTabComponent } from './editor-info-user-tab.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../Test.module';

describe('EditorInfoUserTabComponent', () => {
  let component: EditorInfoUserTabComponent;
  let fixture: ComponentFixture<EditorInfoUserTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorInfoUserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
