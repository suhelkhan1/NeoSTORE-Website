import { TestBed, inject } from '@angular/core/testing';

import { ProductSortService } from './product-sort.service';

describe('ProductSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSortService]
    });
  });

  it('should ...', inject([ProductSortService], (service: ProductSortService) => {
    expect(service).toBeTruthy();
  }));
});
