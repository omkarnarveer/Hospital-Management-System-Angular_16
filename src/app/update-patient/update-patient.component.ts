import { Component } from '@angular/core';

import { patientService } from '../Services/Patient/patien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../class/Patient Class/patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {
  patient: Patient = new Patient();
  id: number = 0;

  constructor(
    private patientService: patientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    });
  }

  onSubmit(): void {
    this.patientService.updatePatient(this.id, this.patient).subscribe(() => {
      this.router.navigate(['/doctor-dashboard/view-patient']); // Redirect to a list or success page
    });
}
}