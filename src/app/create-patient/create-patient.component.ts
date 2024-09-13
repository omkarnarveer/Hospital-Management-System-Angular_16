import { Component } from '@angular/core';

import { patientService } from '../Services/Patient/patien.service';
import { Route, Router } from '@angular/router';
import { Patient } from '../class/Patient Class/patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})


export class CreatePatientComponent {

  patient:Patient =new Patient();

  constructor(private patientService:patientService,private router:Router){ }

  savepatient(){
    this.patientService.InsertPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    },
    error => console.error(error)
  );
  }

  onSubmit(){
    this.savepatient();
  }

 goToPatientList(){
   this.router.navigate(['/doctor-dashboard/view-patient']);
 }}