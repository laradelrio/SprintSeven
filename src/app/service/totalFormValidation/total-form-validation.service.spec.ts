import { TestBed } from '@angular/core/testing';
import { TotalFormValidationService } from './total-form-validation.service';



describe('TotalFormValidationService', () => {
  let service: TotalFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

