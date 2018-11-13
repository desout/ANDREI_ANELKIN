import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from './main-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../Test.module';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it( 'should be select En lang', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');

    expect(select.value).toEqual('en');
    expect(select.value).toMatchSnapshot();
  });
});
