import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMenuComponent } from './student-menu.component';

describe('StudentMenuComponent', () => {
  let component: StudentMenuComponent;
  let fixture: ComponentFixture<StudentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
