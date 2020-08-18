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

  Structure =  [
    {id:1,value:'Select Observation'},
    {id:2,value:'Normal'},
    {id:3,value:'Abnormal-Thickened-With good excursion'},
    {id:4,value:'Abnormal-Thickened-With mildly decreased excursion'},
    {id:5,value:'Abnormal-Thickened-With moderately decreased excursion'},
    {id:6,value:'Abnormal-Thickened-With severely decreased excursion'},
    {id:7,value:'Doming'},
    {id:8,value:'Dilated annulus'},
    {id:9,value:'Other (Specify)'},
  ]

  pulmonaryPressure = [
    {id:1,value:'Select Observation'},
    {id:2,value:'PA systolic pressure-From tricuspid regurgitation jet'},
    {id:3,value:'PA systolic pressure-Other method (Specify)'},
    {id:4,value:'Mean PA pressure (from pulmonary acceleration time)'},
    {id:5,value:'PA diastolic pressure (from pulmonary insufficiency jet'},
  ]

  function = [
    {id:1,value:'Select Observation'},
    {id:2,value:'Location-Valvular'},
    {id:3,value:'Location-Infundibular'},
    {id:4,value:'Location-Valvular and infundibular'},
    {id:5,value:'Location-Supravalvular'},
    {id:6,value:'Location-Branch-Left main pulmonary artery'},
    {id:7,value:'Location-Branch-Right main pulmonary artery'},
    {id:8,value:'Other (Specify)'},
    {id:9,value:'Severity-None'},
    {id:10,value:'Severity-Mild'},
    {id:11,value:'Severity-Moderate'},
    {id:12,value:'Severity-Severe'},
    {id:13,value:'Quantitative Measurements-Peak instantaneous pulmonary velocity (Doppler)'},
    {id:14,value:'Quantitative Measurements-Peak instantaneous pulmonary velocity (Doppler)'},
    {id:15,value:'Quantitative Measurements-Peak instantaneous trans-pulmonic gradient (Doppler)'},
    {id:16,value:'Quantitative Measurements-Mean pulmonary velocity (Doppler)'}, 
    {id:17,value:'Quantitative Measurements-Mean trans-pulmonic gradient (Doppler)'}, 
    {id:18,value:'Quantitative Measurements-Estimated pulmonary artery diastolic pressure'},
    {id:20,value:'Quantitative Measurements-Other (Specify)'}
    
  ]

  bFunction = [
    {id:1,value:'Select Observation'},
    {id:2,value:'Pulmonic Regurgitation-Absent'},
    {id:3,value:'Pulmonic Regurgitation-Present-Mild'},
    {id:4,value:'Pulmonic Regurgitation-Present-Mild -to-moderate'},
    {id:5,value:'Pulmonic Regurgitation-Present-Moderate'},
    {id:6,value:'Pulmonic Regurgitation-Present-Moderate-to-severe'},
    {id:7,value:'Pulmonic Regurgitation-Present-Severe'},
  ]
  
  pulmonicValueObject = {}
selectpulmonaryPressure;
selectbFunction;
selectfunction;
selectStructure;

constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {

  }

  onOptionsSelected = (key,value)  => {
    this.pulmonicValueObject[key] = value
    console.log(this.pulmonicValueObject)
  }

  savePulmonicValueData = () => {
    //save function
  console.log(this.pulmonicValueObject)

  
  const objectManagementReq = {
    "value": this.pulmonicValueObject
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

}
