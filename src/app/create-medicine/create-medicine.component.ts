import { Component } from '@angular/core';

import { MedicineService } from '../Services/Medicine/medicine.service';
import { Router } from '@angular/router';
import { Medicine } from '../class/Medicine Class/medicine';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {

  newMedicine: Medicine = new Medicine(); // Initialize a new Medicine object

  constructor(private medicineService: MedicineService, private router: Router) {}

  // Method to save the new medicine
  saveMedicine() {
    this.medicineService.addMedicine(this.newMedicine).subscribe(
      data => {
        console.log('Medicine added:', data);
        this.goToMedicineList();
      },
      error => console.error('Error adding medicine:', error)
    );
  }

  // Method called on form submission
  onSubmit() {
    this.saveMedicine();
  }

  // Method to navigate to the view medicines list
  goToMedicineList() {
    this.router.navigate(['/doctor-dashboard/view-medicine']); // Update the path if necessary
  }
}