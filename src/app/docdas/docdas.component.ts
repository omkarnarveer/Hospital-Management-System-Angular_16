import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patientService } from '../Services/Patient/patien.service';
import { Patient } from '../class/Patient Class/patient';


@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrls: ['./docdas.component.css']
})
export class DocdasComponent implements OnInit {

  // injecting the patient service to use Prebuild restApi
  constructor(private patientService: patientService, private router: Router) { }

  // array of patients
  patients: Patient[] = [];

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient() { // methods
    // Fetch data from API
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data; // Assigning the data received from the service to the patients array
    });
  }

  update(id: number) {
    this.router.navigate(['/doctor-dashboard/update-patient', id]);  // Navigate to the update patient page with the patient ID
  }

  deletePatient(id: number): void {
    if (confirm("Are you sure you want to delete this patient?")) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.getPatient();  // Refresh the patient list after deletion
      });
    }
  }
}
