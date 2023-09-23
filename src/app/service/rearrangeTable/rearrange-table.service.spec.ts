import { TestBed } from '@angular/core/testing';

import { RearrangeTableService } from './rearrange-table.service';

describe('RearrangeTableService', () => {
  let service: RearrangeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RearrangeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
