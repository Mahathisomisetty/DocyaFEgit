import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'patient',component:PatientComponent},
  {path:'admin',component:AdminComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'nurse',component:NurseComponent},
{path:'viewappointments',component:ViewappointmentsComponent},
{path:'userguide',component:UserguideComponent},
{path:'nurseprofile',component:NurseprofileComponent},
{path:'viewdoctor',component:ViewdoctorComponent},{path:'viewnurse',component:ViewnurseComponent},{path:'viewpatients',component:ViewpatientsComponent},
{path:'adddoctor',component:AdddoctorComponent},{path:'addnurse',component:AddnurseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
