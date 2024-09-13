import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../Services/Medicine/medicine.service';
import { Medicine } from '../class/Medicine Class/medicine';


@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
  medicine: Medicine = new Medicine();
  id: number = 0;

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    });
  }

  onSubmit(): void {
    this.medicineService.updateMedicine(this.medicine).subscribe(() => {
      this.router.navigate(['doctor-dashboard/view-medicine']); // Redirect to the medicine list or success page
    });
  }
}
