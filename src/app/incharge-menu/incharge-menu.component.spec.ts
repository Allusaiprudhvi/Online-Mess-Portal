import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargeMenuComponent } from './incharge-menu.component';

describe('InchargeMenuComponent', () => {
  let component: InchargeMenuComponent;
  let fixture: ComponentFixture<InchargeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchargeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
