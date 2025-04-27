import { TestBed } from '@angular/core/testing';

import { DatacardsService } from './datacards.service';

describe('DatacardsService', () => {
  let service: DatacardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
