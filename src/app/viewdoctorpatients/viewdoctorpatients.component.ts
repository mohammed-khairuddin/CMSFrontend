import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewdoctorpatients',
  templateUrl: './viewdoctorpatients.component.html',
  styleUrls: ['./viewdoctorpatients.component.scss']
})
export class ViewdoctorpatientsComponent implements OnInit {

  AllDoctorPatientsList: any;  
  AllClinicDoctorList:any;
  ClinicData;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {

    this.loginService.getAllClinicDoctorList().subscribe(user =>{
      this.AllClinicDoctorList = user['user']
     console.log(this.AllClinicDoctorList)
    })   

    this.loginService.getAllDoctorPatientsList().subscribe(user =>{
      this.AllDoctorPatientsList = user['doctor']
     console.log(this.AllDoctorPatientsList)
    })   

    
    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      console.log(data)
      this.ClinicData = data['doctor']
    }, error => console.log(error));

    

  }

  goToViewPatientDetails = (alllist):any => {
    window.localStorage.setItem("pid", alllist.id.toString());
    this.router.navigateByUrl(`/viewpatientdetails/${alllist.id}`)
  }

  goToViewObservations = (alllist):any => {
    window.localStorage.setItem("pmid", alllist.id.toString());
    this.router.navigateByUrl(`/observations/${alllist.id}`)
  }

  

}
