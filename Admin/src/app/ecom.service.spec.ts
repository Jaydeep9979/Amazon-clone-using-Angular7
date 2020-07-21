import { TestBed } from '@angular/core/testing';

import { EcomService } from './ecom.service';

describe('EcomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcomService = TestBed.get(EcomService);
    expect(service).toBeTruthy();
  });
});
