import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomp1Component } from './childcomp1.component';

describe('Childcomp1Component', () => {
  let component: Childcomp1Component;
  let fixture: ComponentFixture<Childcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
