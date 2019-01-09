import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargeUpdateComponent } from './incharge-update.component';

describe('InchargeUpdateComponent', () => {
  let component: InchargeUpdateComponent;
  let fixture: ComponentFixture<InchargeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchargeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
