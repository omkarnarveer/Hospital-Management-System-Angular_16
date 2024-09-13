import { Component } from '@angular/core';

import { AppointmentsService } from '../Services/Appointments/appointments.service';
import { Router } from '@angular/router';
import { Appointment } from '../class/Appointment Class/appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
deleteMedicin(arg0: any) {
throw new Error('Method not implemented.');
}

  appointment: Appointment = new Appointment();
medicines: any;

  constructor(private appointmentService: AppointmentsService, private router: Router) { }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(
      data => {
        console.log(data);
        this.goToAppointmentList();
      },
      error => console.error(error)
    );
  }

  onSubmit() {
    this.saveAppointment();
  }

  goToAppointmentList() {
    this.router.navigate(['admin/appointmentList']);
  }
}
