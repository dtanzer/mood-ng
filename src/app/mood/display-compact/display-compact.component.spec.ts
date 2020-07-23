import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompactComponent } from './display-compact.component';

describe('DisplayCompactComponent', () => {
  let component: DisplayCompactComponent;
  let fixture: ComponentFixture<DisplayCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
