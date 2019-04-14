import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedSearchPage } from './customized-search.page';

describe('CustomizedSearchPage', () => {
  let component: CustomizedSearchPage;
  let fixture: ComponentFixture<CustomizedSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
