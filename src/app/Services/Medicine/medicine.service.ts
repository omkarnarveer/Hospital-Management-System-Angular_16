import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/class/Medicine Class/medicine';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private baseUrl = 'http://localhost:8080/api/v3';

  constructor(private httpClient: HttpClient) {}

  // Get all medicines
  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/medicines`);
  }

  // Add a new medicine
  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`, medicine);
  }

  // Delete a medicine by ID
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/medicines/${id}`);
  }

  // Get a medicine by ID
  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/medicines/${id}`);
  }

  // Update a medicine
  updateMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.put<Medicine>(`${this.baseUrl}/medicines/${medicine.id}`, medicine);
  }
}
