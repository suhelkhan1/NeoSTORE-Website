import { TestBed, inject } from '@angular/core/testing';

import { CartServerService } from './cart-server.service';

describe('CartServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartServerService]
    });
  });

  it('should be created', inject([CartServerService], (service: CartServerService) => {
    expect(service).toBeTruthy();
  }));
});
