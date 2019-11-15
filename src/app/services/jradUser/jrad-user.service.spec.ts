import { TestBed } from '@angular/core/testing';

import { JradUserService } from './jrad-user.service';

describe('JradUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JradUserService = TestBed.get(JradUserService);
    expect(service).toBeTruthy();
  });
});
