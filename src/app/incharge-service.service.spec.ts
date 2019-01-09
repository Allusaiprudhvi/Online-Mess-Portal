import { TestBed, inject } from '@angular/core/testing';

import { InchargeServiceService } from './incharge-service.service';

describe('InchargeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InchargeServiceService]
    });
  });

  it('should be created', inject([InchargeServiceService], (service: InchargeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
