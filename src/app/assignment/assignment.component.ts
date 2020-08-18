import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  name: string;
  email: string;
  mobNo: string;
  status: string;
  docId:string;
  reason: string;
  clinicId: string;

  AllClinicDoctorList ;

  ///////////////////////////////
  statuss = ['Created', 'Modified', 'Closed'];
  assform ={
    name:'',
    email:'',
    mobNo: '',
    status: this.statuss[0],
    docId:'',
    reason:'',
    clinicId:''
  }

  //////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getAllClinicDoctorList().subscribe(user =>{
      this.AllClinicDoctorList = user['user']
     //localStorage.setItem("list",cliniclist)
     console.log(this.AllClinicDoctorList)
    })
  }

  assignment = (data):any => {

    //alert(data.name);
    if(data.name === '' || data.name === null  ){
      alert('Please Entre Valid Name');
     }
     if(data.email === '' || data.email === null  ){
      alert('Please Enter Valid Email ');
     }
     if(data.mobNo === '' || data.mobNo === null  ){
      alert('Please Enter Valid Mobile Number ');
     }
     if(data.status === '' || data.status === null  ){
      alert('Please Select Valid Status ');
     }
     if(data.docId === '' || data.docId === null  ){
      alert('Please Select Valid Doctor Name ');
     }
     if(data.reason === '' || data.reason === null  ){
      alert('Please Enter Valid Reason ');
     }

     if(data.name != '' && data.email != '' && data.mobNo != '' && data.status != '' &&
      data.docId !='' && data.reason != '' && data.clinicId !='' ){
      //alert('=====');
    const  assignmentStatusReq = {

      "name": data.name,
      "email": data.email,
      "mobNo": data.mobNo,
      "status": data.status,
      "docId": data.docId,
      "reason": data.reason,
      "clinicId" : localStorage.getItem('id')
    }
    console.log(assignmentStatusReq);
     this.loginService.assignment(assignmentStatusReq).subscribe(res =>{
      this.router.navigateByUrl('/dashboard');
     })
    
    } else {
      alert("Assignment Failed..! Please Fill the Details Again");
      return false;
    }


  }

}
