import { TestBed } from '@angular/core/testing';

import { DataproductosService } from './dataproductos.service';

describe('DataproductosService', () => {
  let service: DataproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
