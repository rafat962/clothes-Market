/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth_serviceService } from './auth_service.service';

describe('Service: Auth_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth_serviceService]
    });
  });

  it('should ...', inject([Auth_serviceService], (service: Auth_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
