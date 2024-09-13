import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DocdasComponent,
    CreatePatientComponent,
    MedicineListComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    UpdateMedicineComponent,
    LayoutComponent,
    LayoutAdminComponent,
    LoginComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
