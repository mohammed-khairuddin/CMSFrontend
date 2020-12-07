import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
//import { SharedService } from '../event-emitter.service';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  patientDataObject;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.loginService.getPatientData(localStorage.getItem("ppid")).subscribe(data => {
      console.log(data);
      this.patientDataObject = data['doctor']
    }, error => console.log(error));
  

    
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }


 
}
