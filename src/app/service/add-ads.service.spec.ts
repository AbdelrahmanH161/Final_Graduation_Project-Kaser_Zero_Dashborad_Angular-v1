import { TestBed } from '@angular/core/testing';

import { AddAdsService } from './add-ads.service';

describe('AddAdsService', () => {
  let service: AddAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
