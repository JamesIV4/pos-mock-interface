import { TestBed } from '@angular/core/testing';

import { OrderStatusBarService } from './order-status-bar.service';

describe('OrderStatusBarService', () => {
  let service: OrderStatusBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderStatusBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
