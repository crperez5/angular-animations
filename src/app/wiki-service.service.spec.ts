import { TestBed, inject } from '@angular/core/testing';

import { WikiServiceService } from './wiki-service.service';

describe('WikiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiServiceService]
    });
  });

  it('should be created', inject([WikiServiceService], (service: WikiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
