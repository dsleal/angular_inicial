import { TestBed } from '@angular/core/testing';

import { AlgumsService } from './algums.service';

describe('AlgumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgumsService = TestBed.get(AlgumsService);
    expect(service).toBeTruthy();
  });
});
