import { TestBed } from '@angular/core/testing';

import { DataStoreService } from './data-store.service';

describe('PassDataService', () => {
  let service: DataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
