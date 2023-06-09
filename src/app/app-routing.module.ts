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
import { DvappointmentsComponent } from './doctor/dvappointments/dvappointments.component';
import { DoctorprofileComponent } from './doctor/doctorprofile/doctorprofile.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { BookavailabilityComponent } from './doctor/bookavailability/bookavailability.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { BookappointmentComponent } from './patient/bookappointment/bookappointment.component';
import { DoctoraddComponent } from './doctor/doctoradd/doctoradd.component';
import { PatienthistoryComponent } from './patient/patienthistory/patienthistory.component';
import { VprescriptionComponent } from './patient/vprescription/vprescription.component';
import { PprofileComponent } from './patient/pprofile/pprofile.component';
import { PatientdbComponent } from './patient/patientdb/patientdb.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { UpdatedocComponent } from './admin/updatedoc/updatedoc.component';
import { UpdatenurseComponent } from './admin/updatenurse/updatenurse.component';
import { SappointmentComponent } from './doctor/sappointment/sappointment.component';
import { NewobservationComponent } from './doctor/newobservation/newobservation.component';
import { EditpresComponent } from './doctor/editpres/editpres.component';
import { EditpprofileComponent } from './patient/editpprofile/editpprofile.component';
import { AddbasicdetailsComponent } from './nurse/addbasicdetails/addbasicdetails.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'patient',component:PatientComponent},
  {path:'admin',component:AdminComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'nurse',component:NurseComponent},
  {path:'viewappointments',component:ViewappointmentsComponent},
  {path:'userguide',component:UserguideComponent},
  {path:'nurseprofile',component:NurseprofileComponent},
  {path:'viewdoctor',component:ViewdoctorComponent},
  {path:'viewnurse',component:ViewnurseComponent},
  {path:'viewpatients',component:ViewpatientsComponent},
  {path:'adddoctor',component:AdddoctorComponent},
  {path:'addnurse',component:AddnurseComponent},
  {path:'dvappointments',component:DvappointmentsComponent},
  {path:'doctorprofile',component:DoctorprofileComponent},
  {path:'doctordashboard',component:DoctordashboardComponent},
  {path:'bookavailability',component:BookavailabilityComponent},
  {path:'adminprofile',component:AdminprofileComponent},
 {path:'bookappointment',component:BookappointmentComponent},
 {path:'doctoradd',component:DoctoraddComponent},
 {path:'patienthistory',component:PatienthistoryComponent},
 {path:'vprescription',component:VprescriptionComponent},
 {path:'pprofile',component:PprofileComponent},
 {path:'patientdb',component:PatientdbComponent},
 {path:'fpassword',component:FpasswordComponent},
 {path:'updatedoc',component:UpdatedocComponent},
 {path:'updatenurse',component:UpdatenurseComponent},
 {path:'sappointment',component:SappointmentComponent},
 {path:'newobservation',component:NewobservationComponent},
 {path:'editpprofile',component:EditpprofileComponent},
 {path:'editpres',component:EditpresComponent},
 {path:'addbasicdetails',component:AddbasicdetailsComponent},
{ path: "**", redirectTo: "admin" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
