/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Admin_serviceService } from './admin_service.service';

describe('Service: Admin_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Admin_serviceService]
    });
  });

  it('should ...', inject([Admin_serviceService], (service: Admin_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
