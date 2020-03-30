import { TestBed } from '@angular/core/testing';

import { NgGrowlAlertService } from './ng-growl-alert.service';

describe('NgGrowlAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGrowlAlertService = TestBed.get(NgGrowlAlertService);
    expect(service).toBeTruthy();
  });
});
