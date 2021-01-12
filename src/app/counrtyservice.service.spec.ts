import { TestBed } from '@angular/core/testing';

import { CounrtyserviceService } from './counrtyservice.service';

describe('CounrtyserviceService', () => {
  let service: CounrtyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounrtyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
