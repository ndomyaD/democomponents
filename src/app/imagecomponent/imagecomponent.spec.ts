import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagecomponent } from './imagecomponent';

describe('Imagecomponent', () => {
  let component: Imagecomponent;
  let fixture: ComponentFixture<Imagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Imagecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
