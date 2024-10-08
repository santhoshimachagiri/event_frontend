import { TestBed } from '@angular/core/testing';

import { GuestNotificationService } from './guest-notification.service';

describe('GuestNotificationService', () => {
  let service: GuestNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
