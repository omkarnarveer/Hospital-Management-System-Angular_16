import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/class/Patient Class/patient';



@Injectable({
  providedIn: 'root'
})
export class patientService{

  createPatient(patient: Patient) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

    private baseUrl="http://localhost:8080/api/v1/patients"
    private patientdeleteUrl = "http://localhost:8080/api/v1/delete";
    private patientInsertUrl = "http://localhost:8080/api/v1/insert";
    private patientUpdateUrl = "http://localhost:8080/api/v1/update";

    // show
    getPatientList():Observable<Patient[]>{
      return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
    }

    // delelte
  deletePatient(id: number): Observable<object> {
    return this.httpClient.delete(`${this.patientdeleteUrl}/${id}`);
  }

  //insert
  InsertPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.patientInsertUrl}`, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  // Update existing patient
  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.patientUpdateUrl}/${id}`, patient);
  }
  
   }

