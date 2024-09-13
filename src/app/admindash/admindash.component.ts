import { Component } from '@angular/core';


import { patientService } from '../Services/Patient/patien.service';
import { Patient } from '../class/Patient Class/patient';




@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {

  // array of patients
  patients:Patient[]=[]; 
  constructor(private patientService:patientService){}
  ngOnInit():void{
    this.getPatients();
  }


  // Method to get the list of patients using the patient service
  getPatients(){
    this.patientService.getPatientList().subscribe(data=> {
    this.patients=data; // Assigning the data received from the service to the patients array
    })
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients(); // Refresh the list after deletion
    });


  }
}
