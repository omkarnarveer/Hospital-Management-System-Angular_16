import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdasComponent } from './docdas/docdas.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LoginComponentComponent } from './login-component/login-component.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: LoginComponentComponent },

  // Admin routes with AuthGuard protection
  {
    path: 'admin', component: LayoutAdminComponent,
    children: [
      { path: 'appointmentList', component: AppointmentComponent },
      { path: 'create-appointment', component: CreateAppointmentComponent },
      { path: 'Admin-Patient-list', component: AdmindashComponent },
      { path: '', redirectTo: 'appointmentList', pathMatch: 'full' }
    ]
  },

  // Doctor routes with sidebar layout
  {
    path: 'doctor-dashboard', component: LayoutComponent,
    children: [
      { path: 'view-patient', component: DocdasComponent },
      { path: 'create-patient', component: CreatePatientComponent },
      { path: 'view-medicine', component: MedicineListComponent },
      { path: 'add-medicine', component: CreateMedicineComponent },
      { path: 'update-patient/:id', component: UpdatePatientComponent },
      { path: 'update-medicine/:id', component: UpdateMedicineComponent },
      { path: '', redirectTo: 'view-medicine', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
