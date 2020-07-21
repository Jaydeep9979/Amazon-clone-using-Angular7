import { TestBed, async, inject } from '@angular/core/testing';

import { ProfauthGuard } from './profauth.guard';

describe('ProfauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfauthGuard]
    });
  });

  it('should ...', inject([ProfauthGuard], (guard: ProfauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
