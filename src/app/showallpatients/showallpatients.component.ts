import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { pid } from 'process';
//import { AnyRecordWithTtl } from 'dns';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';


@Component({
  selector: 'app-showallpatients',
  templateUrl: './showallpatients.component.html',
  styleUrls: ['./showallpatients.component.scss']
})
export class ShowallpatientsComponent implements OnInit {

  p: number = 1;
  itemsPerPage :number;
  currentPage :number;
  totalItems :number;

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
  status = 'created';
  // showpatientform = {
  //   docId:''
  // };
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }

 

  ngOnInit(): void {

    
    this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
      //user['user'].map(data => return {...data,id:``})getAllClinicPatientsList
      this.AllClinicPatientsList = user['user']
      this.TotalList = this.AllClinicPatientsList;
     //console.log(this.AllClinicPatientsList)

    })

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      this.ClinicData = data['doctor']
    }, error => console.log(error));

    
  
  }

  goToUpdatePatientDoc = (alllist,index) => {
    window.localStorage.setItem("pid", alllist.id.toString());
    //this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)
    this.loginService.updatePatientDoc(this.AllClinicPatientsList[index]).subscribe(updateAssignment =>{
     //alert('Doctor Assigned Successfully');
     this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)
    //window.location.reload();
    })
 }

 getResultData = () => {
  if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
 this.AllClinicPatientsList=  this.TotalList.filter(data => 
       data.mobileno.toString().includes(this.searchString.toString())
  )
 
 }
 else {

  this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
    this.AllClinicPatientsList = user['user']
   //console.log(this.AllClinicPatientsList)
  })
  
 }

 }

//////////////////////////////////////////////

}
