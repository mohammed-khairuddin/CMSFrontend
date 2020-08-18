import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {Routes,RouterModule} from '@angular/router';
import { DicomViewerModule } from 'ng-dicomviewer';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HttpClientModule }  from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AddclinicdoctorComponent } from './addclinicdoctor/addclinicdoctor.component';
import { ShowallclinicsComponent } from './showallclinics/showallclinics.component';
import { ShowalldoctorsComponent } from './showalldoctors/showalldoctors.component';
import { ShowallpatientsComponent } from './showallpatients/showallpatients.component';
import { ViewpatientdetailsComponent } from './viewpatientdetails/viewpatientdetails.component';
import { ViewdoctorpatientsComponent } from './viewdoctorpatients/viewdoctorpatients.component';
import { EditclinicComponent } from './editclinic/editclinic.component';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { VieweditpatientdetailsComponent } from './vieweditpatientdetails/vieweditpatientdetails.component';
import { ClinicdashboardComponent } from './clinicdashboard/clinicdashboard.component';
import { ClnicDashboardTabComponent } from './clnic-dashboard-tab/clnic-dashboard-tab.component';
import { MastertableComponent } from './mastertable/mastertable.component';
import { LeftventriclesComponent } from './leftventricles/leftventricles.component';
import { AddleftventricleComponent } from './addleftventricle/addleftventricle.component';
import { DicomviewerComponent } from './dicomviewer/dicomviewer.component';
import { AddmastertableComponent } from './addmastertable/addmastertable.component';
import { EditmastertableComponent } from './editmastertable/editmastertable.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DicomuploadComponent } from './dicomupload/dicomupload.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisterKinComponent } from './register-kin/register-kin.component';
import { ComplainsComponent } from './complains/complains.component';
import { PreviewRegPatientComponent } from './preview-reg-patient/preview-reg-patient.component';
import { PreviewRegKinComponent } from './preview-reg-kin/preview-reg-kin.component';
import { EditKinComponent } from './edit-kin/edit-kin.component';
import { EditPatientMasterComponent } from './edit-patient-master/edit-patient-master.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { ObservationsComponent } from './observations/observations.component';
import { CommentsComponent } from './comments/comments.component';
import { CaseCompletedComponent } from './case-completed/case-completed.component';
import { MasterObservationsComponent } from './master-observations/master-observations.component';
import { MasterLvComponent } from './master-lv/master-lv.component';
import { MasterLaComponent } from './master-la/master-la.component';
import { MasterRvComponent } from './master-rv/master-rv.component';
import { MasterPvComponent } from './master-pv/master-pv.component';
import { MasterRaComponent } from './master-ra/master-ra.component';
import { MasterMvComponent } from './master-mv/master-mv.component';
import { MasterTvComponent } from './master-tv/master-tv.component';
import { MasterPaComponent } from './master-pa/master-pa.component';
import { MasterAortaComponent } from './master-aorta/master-aorta.component';
import { MasterPcComponent } from './master-pc/master-pc.component';
import { PreviewObservationsComponent } from './preview-observations/preview-observations.component';

const x = [
  { 
    path: '', component: LoginComponent 
   },

 
]

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    AssignmentComponent,
    DashboardComponent,
    FooterComponent,
    EditAssignmentComponent,
    ProfileComponent,
    SidenavComponent,
    PatientFormComponent,
    AddclinicdoctorComponent,
    ShowallclinicsComponent,
    ShowalldoctorsComponent,
    ShowallpatientsComponent,
    ViewpatientdetailsComponent,
    ViewdoctorpatientsComponent,
    EditclinicComponent,
    EditdoctorComponent,
    VieweditpatientdetailsComponent,
    ClinicdashboardComponent,
    ClnicDashboardTabComponent,
    MastertableComponent,
    LeftventriclesComponent,
    AddleftventricleComponent,
    DicomviewerComponent,
    AddmastertableComponent,
    EditmastertableComponent,
    DoctordashboardComponent,
    DicomuploadComponent,
    RegisterPatientComponent,
    RegisterKinComponent,
    ComplainsComponent,
    PreviewRegPatientComponent,
    PreviewRegKinComponent,
    EditKinComponent,
    EditPatientMasterComponent,
    DoctorprofileComponent,
    ObservationsComponent,
    CommentsComponent,
    CaseCompletedComponent,
    MasterObservationsComponent,    
    MasterLvComponent,
    MasterLaComponent,
    MasterRvComponent,
    MasterPvComponent,
    MasterRaComponent,
    MasterMvComponent,
    MasterTvComponent,
    MasterPaComponent,
    MasterAortaComponent,
    MasterPcComponent,
    PreviewObservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DicomViewerModule,
    RouterModule.forRoot(x),
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
