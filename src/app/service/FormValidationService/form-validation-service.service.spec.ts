import { TestBed } from '@angular/core/testing';
import { FormValidationService } from './form-validation-service.service';



describe('TotalFormValidationService', () => {
  let service: FormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

