import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-master-pv',
  templateUrl: './master-pv.component.html',
  styleUrls: ['./master-pv.component.scss']
})
export class MasterPvComponent implements OnInit {

  structure =  [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
  abnormal=[
    {id:2,itemName:'Thickened-With good excursion'},
    {id:3,itemName:'Thickened-With mildly decreased excursion'},
    {id:4,itemName:'Thickened-With moderately decreased excursion'},
    {id:5,itemName:'Thickened-With severely decreased excursion'},
    {id:6,itemName:'Doming'},
    {id:7,itemName:'Dilated annulus'},
    {id:8,itemName:'Other (Specify)'},//text-box
  ]

  pulmonicRegurgitation = [
    {id:2,itemName:'Pulmonic Regurgitation-Absent'},
    {id:3,itemName:'Pulmonic Regurgitation-Present'},
  ]
  regurgitationPresent=[
    {id:2,itemName:'Pulmonic Regurgitation-Present-Mild'},
    {id:3,itemName:'Pulmonic Regurgitation-Present-Mild to Moderate'},
    {id:4,itemName:'Pulmonic Regurgitation-Present-Moderate'},
    {id:5,itemName:'Pulmonic Regurgitation-Present-Moderate to Severe'},
    {id:6,itemName:'Pulmonic Regurgitation-Present-Severe'},

  ]

  pulmonicStenosis=[
    {id:2,itemName:'Pulmonic Stenosis-Location'},
    {id:3,itemName:'Pulmonic Stenosis-Severity'},
    {id:4,itemName:'Pulmonic Stenosis-Quantitative Measurements'},
  ]
  stenosisLocation=[
    {id:2,itemName:'Pulmonic Stenosis-Location-Valvular'},
    {id:3,itemName:'Pulmonic Stenosis-Location-Infundibular'},
    {id:4,itemName:'Pulmonic Stenosis-Location-Valvular and Infundibular'},
    {id:5,itemName:'Pulmonic Stenosis-Location-Supravalvular'},
    {id:6,itemName:'Pulmonic Stenosis-Location-Branch'},
  ]
  branch=[
    {id:2,itemName:'Pulmonic Stenosis-Location-Branch-Left Main Pulmonary Artery'},
    {id:3,itemName:'Pulmonic Stenosis-Location-Branch-Right Main Pulmonary Artery'},
    {id:4,itemName:'Pulmonic Stenosis-Location-Branch-Others(Specify)'},//text-box
  ]
  stenosisSeverity=[
    {id:2,itemName:'Pulmonic Stenosis-Severity-Mild'},
    {id:3,itemName:'Pulmonic Stenosis-Severity-Moderate'},
    {id:4,itemName:'Pulmonic Stenosis-Severity-Severe'},
  ]
  stenosisQuantitativeMeasurements=[
    {id:2,itemName:'Pulmonic Stenosis-Quantitative Measurements-Peak instantaneous pulmonary velocity(Doppler)'},
    {id:3,itemName:'Pulmonic Stenosis-Quantitative Measurements-Peak instantaneous trans-pulmonic Gradient(Doppler)'},
    {id:4,itemName:'Pulmonic Stenosis-Quantitative Measurements-Mean Pulmonary Velocity(Doppler)'},
    {id:5,itemName:'Pulmonic Stenosis-Quantitative Measurements-Mean trans-Pulmonic Gradient(Doppler)'},
    {id:6,itemName:'Pulmonic Stenosis-Quantitative Measurements-Estimated Pulmonary Artery Diastolic Pressure'},
    {id:7,itemName:'Pulmonic Stenosis-Quantitative Measurements-Others Specify'},//text-box
  ]
  pulmonaryPressure=[
    {id:2,itemName:'Pulmonic Pressure-PA Systolic Pressure'},
    {id:3,itemName:'Pulmonic Pressure-PA Diastolic Pressure'},
    {id:4,itemName:'Pulmonic Pressure-Mean PA Pressure'},
  ]
  paSystolicPressure=[
    {id:2,itemName:'Pulmonic Pressure-PA Systolic Pressure-From Tricuspid Regurgitation Jet'},
    {id:3,itemName:'Pulmonic Pressure-Other Method(Specify)'},//text-box
  ]  
 
  updform = {

  }

  settings= {};
  obtype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.observationsGetAllByPatientIdType().subscribe(observation => {
    //console.log(observation);
    const x = observation.observation.value;
    //console.log(x);
    this.updform =x;
  }, error => console.log(error));

  }

  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    console.log(this.updform)
  }

  savePulmonicValueData = () => {
    //save function
    console.log(this.updform)    
    const objectManagementReq = {
      "value": this.updform
     }
     console.log(objectManagementReq);
     this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
        console.log(res);
        if(res['message'] ==  'submitted successfully' ) {
        alert('Observation Inserted Successfully');
        //this.router.navigateByUrl(`/observations/`);
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
      } 
       
   })

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
