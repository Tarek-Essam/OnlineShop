import { TestBed, inject } from '@angular/core/testing';

import { MyproductsService } from './myproducts.service';

describe('MyproductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyproductsService]
    });
  });

  it('should be created', inject([MyproductsService], (service: MyproductsService) => {
    expect(service).toBeTruthy();
  }));
});
