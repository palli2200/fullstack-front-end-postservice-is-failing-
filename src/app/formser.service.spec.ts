import { TestBed } from '@angular/core/testing';

import { FormserService } from './formser.service';

describe('FormserService', () => {
  let service: FormserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
