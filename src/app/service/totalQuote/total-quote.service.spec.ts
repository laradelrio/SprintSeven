import { TestBed } from '@angular/core/testing';

import { TotalQuoteService } from './total-quote.service';

describe('TotalBudgetService', () => {
  let service: TotalQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
