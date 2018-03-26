import { TestBed, inject } from '@angular/core/testing';

import { AddproductService } from './addproduct.service';

describe('AddproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddproductService]
    });
  });

  it('should be created', inject([AddproductService], (service: AddproductService) => {
    expect(service).toBeTruthy();
  }));
});
