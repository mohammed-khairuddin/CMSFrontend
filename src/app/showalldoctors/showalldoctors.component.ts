import { Component, OnInit } from '@angular/core';

import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showalldoctors',
  templateUrl: './showalldoctors.component.html',
  styleUrls: ['./showalldoctors.component.scss']
})
export class ShowalldoctorsComponent implements OnInit {

  AllDoctorList ;
  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {

    this.loginService.getAllDoctorsList().subscribe(clinic =>{
      this.AllDoctorList = clinic['clinic']
     console.log(this.AllDoctorList)
    })   

    
  }

  
  goToEditDoctor  = (list) => {
    window.localStorage.setItem("aid", list.id.toString());
    this.router.navigateByUrl(`/editdoctor/${list.id}`)


  }

  goToDeleteDoctor = (list):any => {
    window.localStorage.setItem("aid", list.id.toString());
     this.loginService.deleteDoctor().subscribe(res =>{
       window.location.reload();
        //this.router.navigateByUrl('/dashboard')
     })

  }

}
