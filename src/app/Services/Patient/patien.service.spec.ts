import { TestBed } from '@angular/core/testing';
import { patientService } from './patien.service';



describe('patientService', () => {
  let service: patientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(patientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
