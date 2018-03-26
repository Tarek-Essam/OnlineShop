import { TestBed, inject } from '@angular/core/testing';

import { EditproductService } from './editproduct.service';

describe('EditproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditproductService]
    });
  });

  it('should be created', inject([EditproductService], (service: EditproductService) => {
    expect(service).toBeTruthy();
  }));
});
