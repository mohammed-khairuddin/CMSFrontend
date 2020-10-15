import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import { SharedService } from '../event-emitter.service';


@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  isDataLoadedInLV:boolean = false;
  isDataLoadedInRV:boolean = false;
  isDataLoadedInLA:boolean = false;
  isDataLoadedInRA:boolean = false;
  isDataLoadedInMV:boolean = false;
  isDataLoadedInTV:boolean = false;
  isDataLoadedInPA:boolean = false;
  isDataLoadedInPV:boolean = false;
  isDataLoadedInAORTA:boolean = false;
  isDataLoadedInPC:boolean = false;
  isDataLoadedInREPORT:boolean = false;
  master :Object;
  obtype: string;
  patientDataObject;

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute,private sharedService:SharedService) { 

  }
  click(){
    this.sharedService.sendClickEvent();
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

    window.localStorage.setItem("obtype", obtype.toString());
    //this.isDataLoadedInLV = false;
    //this.isDataLoadedInRV = false;
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
      if(obtype === 'rightVentricleObservation'){
        this.isDataLoadedInRV = true;
      }
      if(obtype === 'leftVentricalObservation'){
        this.isDataLoadedInLV = true;
      }
      if(obtype === 'leftAtriumObservation'){
        this.isDataLoadedInLA = true;
      }
      if(obtype === 'rightAtriumObservation'){
        this.isDataLoadedInRA = true;
      }
      if(obtype === 'mitralValveObservation'){
        this.isDataLoadedInMV = true;
      }
      if(obtype === 'tricuspidValveObservation'){
        this.isDataLoadedInTV = true;
      }
      if(obtype === 'pulmonaryArteryObservation'){
        this.isDataLoadedInPA = true;
      }
      if(obtype === 'pulmonicValveObservation'){
        this.isDataLoadedInPV = true;
      }
      if(obtype === 'aortaObservation'){
        this.isDataLoadedInAORTA = true;
      }
      if(obtype === 'pericardiumObservation'){
        this.isDataLoadedInPC = true;
      }
      if(obtype === ''){
        this.isDataLoadedInREPORT = true;
      }
   });


  }
  

  
}
