import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalOutputPage } from './hospital-output.page';

describe('HospitalOutputPage', () => {
  let component: HospitalOutputPage;
  let fixture: ComponentFixture<HospitalOutputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalOutputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalOutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
