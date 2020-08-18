import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clinicdashboard',
  templateUrl: './clinicdashboard.component.html',
  styleUrls: ['./clinicdashboard.component.scss']
})
export class ClinicdashboardComponent implements OnInit {

  AllClinicPatientsList: any;  
  AllClinicDoctorList: any;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')

  docId;
  searchString;
  tempList;
  TotalList;
  ClinicData;

  allcases = '#all-cases';

  constructor(private loginService: LoginserviceService,private router:Router) { 
    
  }

  ngOnInit(): void {

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      //console.log(data)
      this.ClinicData = data['doctor']
    }, error => console.log(error));

   
   
  }


  goToUpdatePatientDoc = (alllist,index) => {
    window.localStorage.setItem("pid", alllist.id.toString());
    this.loginService.updatePatientDoc(this.AllClinicPatientsList[index]).subscribe(updateAssignment =>{
     //alert('Doctor Assigned Successfully');
     this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)

    })
 }



}
