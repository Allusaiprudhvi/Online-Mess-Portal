import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllotComponent } from './student-allot.component';

describe('StudentAllotComponent', () => {
  let component: StudentAllotComponent;
  let fixture: ComponentFixture<StudentAllotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAllotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAllotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
