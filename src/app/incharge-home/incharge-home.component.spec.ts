import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargeHomeComponent } from './incharge-home.component';

describe('InchargeHomeComponent', () => {
  let component: InchargeHomeComponent;
  let fixture: ComponentFixture<InchargeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchargeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
