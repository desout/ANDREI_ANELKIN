import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInfoUserTabComponent } from './editor-info-user-tab.component';

describe('EditorInfoUserTabComponent', () => {
  let component: EditorInfoUserTabComponent;
  let fixture: ComponentFixture<EditorInfoUserTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorInfoUserTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorInfoUserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
