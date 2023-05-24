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
import {MatTooltipModule} from '@angular/material/tooltip';
import { NurseComponent } from './nurse/nurse.component';
import { ViewappointmentsComponent } from './nurse/viewappointments/viewappointments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DoctorComponent,
    NurseComponent,
    ViewappointmentsComponent
  ],
  imports: [
    BrowserModule,MatSlideToggleModule,MatSidenavModule,MatCommonModule,
    AppRoutingModule,MatDialogModule,MatInputModule,MatCardModule,MatToolbarModule,
    BrowserAnimationsModule,MatMenuModule,MatIconModule,MatButtonModule,MatFormFieldModule,
    ReactiveFormsModule,MatTooltipModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
