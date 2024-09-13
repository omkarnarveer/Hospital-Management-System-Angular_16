import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/class/Appointment Class/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseUrl = "http://localhost:8080/api/v2"; 
  private insertUrl = "http://localhost:8080/api/v2/insert";
  private deleteUrl = "http://localhost:8080/api/v2/delete";
 

  constructor(private httpClient: HttpClient) { }

  //show
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
// add
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.insertUrl}`, appointment);
  }
// delete
  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  
}
