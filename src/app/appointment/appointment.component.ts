import { Component, OnInit } from '@angular/core';


import { AppointmentsService } from '../Services/Appointments/appointments.service';
import { Appointment } from '../class/Appointment Class/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentsService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.getAppointments(); // Refresh the list after deletion
    });
  }
}