import { TestBed, inject } from '@angular/core/testing';

import { EventGuardService } from './event-guard.service';

describe('EventGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventGuardService]
    });
  });

  it('should be created', inject([EventGuardService], (service: EventGuardService) => {
    expect(service).toBeTruthy();
  }));
});
