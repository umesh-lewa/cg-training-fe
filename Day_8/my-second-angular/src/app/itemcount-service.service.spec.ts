import { TestBed } from '@angular/core/testing';

import { ItemcountServiceService } from './itemcount-service.service';

describe('ItemcountServiceService', () => {
  let service: ItemcountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemcountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
