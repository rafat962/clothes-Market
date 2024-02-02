/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cart_servicesService } from './cart_services.service';

describe('Service: Cart_services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cart_servicesService]
    });
  });

  it('should ...', inject([Cart_servicesService], (service: Cart_servicesService) => {
    expect(service).toBeTruthy();
  }));
});
