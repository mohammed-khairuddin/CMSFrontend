import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';


@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')

  master :Object;
  obtype: string;
  patientDataObject;

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.getPatientData(localStorage.getItem("pmid")).subscribe(data => {
    //console.log(data)
    this.patientDataObject = data['doctor']
  }, error => console.log(error));


 

  }


  getAddPage  = (obtype) => {
    console.log(obtype);
    //console.log('=====//////////');
    window.localStorage.setItem("obtype", obtype.toString());
    // this.router.navigateByUrl(`/mastertable/`+type);   
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');

   });


  }
  

  
}
