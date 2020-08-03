import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRegisterComponent } from './current-register.component';

describe('CurrentRegisterComponent', () => {
  let component: CurrentRegisterComponent;
  let fixture: ComponentFixture<CurrentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
