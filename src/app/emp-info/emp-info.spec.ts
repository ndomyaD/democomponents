import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInfo } from './emp-info';

describe('EmpInfo', () => {
  let component: EmpInfo;
  let fixture: ComponentFixture<EmpInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
