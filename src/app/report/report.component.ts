import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')

  patientDataObject;
  observationsObject;
  AllMastersList;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {

    this.loginService.getPatientData(localStorage.getItem("pmid")).subscribe(data => {
      console.log(data);      
      this.patientDataObject = data['doctor']
    }, error => console.log(error));
  
    this.loginService.observationsGetAllByPatient().subscribe(data => {
      console.log(data);     
      this.observationsObject = data['user']
    }, error => console.log(error));

    // this.loginService.getMaster(this.type).subscribe(master =>{
    //   //console.log(master);
    //   this.AllMastersList = master['master']    
    // })
    

  }

 


}
