import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../Services/Medicine/medicine.service';
import { Medicine } from '../class/Medicine Class/medicine';


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService, private router: Router) {}

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines(): void {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }

  delete(id: number): void {
    if (confirm("Are you sure you want to delete this medicine?")) {
      this.medicineService.delete(id).subscribe(() => {
        this.getMedicines(); // Refresh the list after deletion
      }, error => {
        console.error('Error deleting medicine:', error);
      });
    }
  }

  edit(id: number): void {
    this.router.navigate([`/doctor-dashboard/update-medicine/${id}`]);
  }
}
