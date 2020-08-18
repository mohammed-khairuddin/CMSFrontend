import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.scss']
})
export class EditAssignmentComponent implements OnInit {

  name: string;
  email: string;
  mobNo: string;
  status: string;
  docId:string;
  reason: string;
  clinicId: string;
  AllClinicDoctorList ;
  AssignmentData;
  AssignUpdateData;


  editedAssignment = {};
  result: any = {};
  user: any = {};

  editassignmentObject = { "name": '',
  "email": '',
  "mobNo": '',
  "status": '',
  "docId": '',
  "reason": ''
}

///////////////////////////////
statuss = ['Created', 'Modified', 'Closed'];
editassform ={
  name:'',
  email:'',
  mobNo: '',
  status: this.statuss[0],
  docId:'',
  reason:'',
  clinicId:''
}

//////////////////////////////
 

  constructor(private router: Router,private ar:ActivatedRoute, private loginService: LoginserviceService) { }

  ngOnInit(): void {

    this.loginService.getAssignmentData(localStorage.getItem("aid"))
        .subscribe(data => {
          console.log(data)
          this.editassignmentObject = data['assignment']
        }, error => console.log(error));
  

    this.loginService.getAllClinicDoctorList().subscribe(user =>{
      this.AllClinicDoctorList = user['user']
     console.log(this.AllClinicDoctorList)
    })   
    
  }

  updateAssignment = ():any => {
     this.loginService.updateAssignment(this.editassignmentObject).subscribe(updateAssignment =>{
      this.router.navigateByUrl('/dashboard');
     })
    
  }
}
