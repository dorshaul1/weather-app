import { TestBed } from '@angular/core/testing';

import { Weather.ServiceService } from './weather.service.service';

describe('Weather.ServiceService', () => {
  let service: Weather.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weather.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
