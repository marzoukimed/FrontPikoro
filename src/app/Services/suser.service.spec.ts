import { TestBed } from '@angular/core/testing';

import { SuserService } from './suser.service';

describe('SuserService', () => {
  let service: SuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
