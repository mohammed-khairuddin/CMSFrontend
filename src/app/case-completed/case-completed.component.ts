import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
//import { pid } from 'process';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import { SharedService } from '../event-emitter.service';
//import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-case-completed',
  templateUrl: './case-completed.component.html',
  styleUrls: ['./case-completed.component.scss']
})
export class CaseCompletedComponent implements OnInit {

   
  p: number = 1;
  itemsPerPage :number;
  currentPage :number;
  totalItems :number;
  filter;
 

  AllClinicPatientsList: any = [];  
  AllClinicDoctorList: any;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

 
  docId;
  searchString;
  tempList;
  TotalList;
  ClinicData;
  status = 'assigned';
  // currentDate = new Date();
  // cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  //date = formatDate(new Date(), 'yyyy-MM-dd');
 date_ob = new Date();
 date = ("0" + this.date_ob.getDate()).slice(-2);
 month = ("0" + (this.date_ob.getMonth() + 1)).slice(-2);
 year = this.date_ob.getFullYear();

 reqdate = this.year + "-" + this.month + "-" + this.date;


 observationsObject;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private sharedService:SharedService)
  {
    
   }
  ngOnInit(): void {

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      //console.log(data)
      this.ClinicData = data['doctor']
    }, error => console.log(error));
      
    //console.log(this.reqdate);
    //console.log(this.year + "-" + this.month + "-" + this.date);

    this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
     
      //console.log(user);
      this.AllClinicPatientsList = user['user']
      this.TotalList = this.AllClinicPatientsList;

    })

  }

  goToViewObservations = (alllist):any => {
    window.localStorage.setItem("pmid", alllist.id.toString());
    this.router.navigateByUrl(`/report-preview/${alllist.id}`)
  }

  click(){
    this.sharedService.sendClickEvent();
    }

}
