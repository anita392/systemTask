import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mysample2Component } from './mysample2.component';

describe('Mysample2Component', () => {
  let component: Mysample2Component;
  let fixture: ComponentFixture<Mysample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mysample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mysample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
