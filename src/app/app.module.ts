import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NurseComponent } from './nurse/nurse.component';
import { ViewappointmentsComponent } from './nurse/viewappointments/viewappointments.component';
import { UserguideComponent } from './userguide/userguide.component';
import { NurseprofileComponent } from './nurse/nurseprofile/nurseprofile.component';
import { PatientComponent } from './patient/patient.component';
import { ViewdoctorComponent } from './admin/viewdoctor/viewdoctor.component';
import { ViewnurseComponent } from './admin/viewnurse/viewnurse.component';
import { ViewpatientsComponent } from './admin/viewpatients/viewpatients.component';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { AddnurseComponent } from './admin/addnurse/addnurse.component';
import { DvappointmentsComponent } from './doctor/dvappointments/dvappointments.component';
import { DoctorprofileComponent } from './doctor/doctorprofile/doctorprofile.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { BookavailabilityComponent } from './doctor/bookavailability/bookavailability.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DoctorComponent,
    NurseComponent,
    ViewappointmentsComponent,
    UserguideComponent,
    NurseprofileComponent,
    PatientComponent,
    ViewdoctorComponent,
    ViewnurseComponent,
    ViewpatientsComponent,
    AdddoctorComponent,
    AddnurseComponent,
    DvappointmentsComponent,
    DoctorprofileComponent,
    DoctordashboardComponent,
    BookavailabilityComponent,
    AdminprofileComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,MatSlideToggleModule,MatSidenavModule,MatCommonModule,
    AppRoutingModule,MatDialogModule,MatInputModule,MatCardModule,MatToolbarModule,
    BrowserAnimationsModule,MatMenuModule,MatIconModule,MatButtonModule,MatFormFieldModule,
    ReactiveFormsModule,MatTooltipModule, MatTableModule,MatDatepickerModule,MatNativeDateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
