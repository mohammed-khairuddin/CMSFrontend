import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-tv',
  templateUrl: './master-tv.component.html',
  styleUrls: ['./master-tv.component.scss']
})
export class MasterTvComponent implements OnInit {

  structure = [
    {id:1,value:'Select Observation'},
{id:2,value:'Normal'},    
{id:3,value:'Abnormal-Rheumatic'},
{id:4,value:'Abnormal-Vegetation-Anterior leaflet-Non-mobile'},
 {id:5,value:'Abnormal-Vegetation-Anterior leaflet-Mobile'},
{id:6,value:'Abnormal-Vegetation--Anterior leaflet-Pedunculated and mobile'},
  {id:7,value:'Abnormal-Vegetation-Anterior leaflet-Other(Specify)'},
 {id:8,value:'Abnormal-Vegetation-Anterior leaflet-Size-Small'},
 {id:9,value:'Abnormal-Vegetation-Anterior leaflet-Size-Moderate'},
 {id:10,value:'Abnormal-Vegetation-Anterior leaflet-Size-Large'},
 {id:11,value:'Abnormal-Vegetation-Anterior leaflet-Size-Dimensions'},
{id:12,value:'Abnormal-Vegetation-Posterior leaflet-Non-mobile'},
 {id:13,value:'Abnormal-Vegetation-Posterior leaflet-Mobile'},
{id:14,value:'Abnormal-Vegetation--Posterior leaflet-Pedunculated and mobile'},
  {id:15,value:'Abnormal-Vegetation-Posterior leaflet-Other(Specify)'},
 {id:16,value:'Abnormal-Vegetation-Posterior leaflet-Size-Small'},
 {id:17,value:'Abnormal-Vegetation-Posterior leaflet-Size-Moderate'},
 {id:18,value:'Abnormal-Vegetation-Posterior leaflet-Size-Large'},
 {id:19,value:'Abnormal-Vegetation-Posterior leaflet-Size-Dimensions'},
{id:20,value:'Abnormal-Vegetation-Septal leaflet-Non-mobile'},
 {id:21,value:'Abnormal-Vegetation-Septal leaflet-Mobile'},
{id:22,value:'Abnormal-Vegetation--Septal leaflet-Pedunculated and mobile'},
  {id:23,value:'Abnormal-Vegetation-Septal leaflet-Other(Specify)'},
 {id:24,value:'Abnormal-Vegetation-Spetal leaflet-Size-Small'},
 {id:25,value:'Abnormal-Vegetation-Spetal leaflet-Size-Moderate'},
 {id:26,value:'Abnormal-Vegetation-Septal leaflet-Size-Large'},
 {id:27,value:'Abnormal-Vegetation-Septal leaflet-Size-Dimensions'},
{id:28,value:'Abnormal-Myxomatous (redundant)'},
{id:29,value:'Abnormal-Prolapse-Anterior leaflet-Mild'},
{id:30,value:'Abnormal-Prolapse-Anterior leaflet-Moderate'},
{id:31,value:'Abnormal-Prolapse-Anterior leaflet-Severe'},
{id:32,value:'Abnormal-Prolapse-Posterior leaflet-Mild'},
{id:33,value:'Abnormal-Prolapse-Posterior leaflet-Moderate'},
{id:34,value:'Abnormal-Prolapse-Posterior leaflet-Severe'},
{id:35,value:'Abnormal-Prolapse-Septal leaflet-Mild'},
{id:36,value:'Abnormal-Prolapse-Septal leaflet-Moderate'},
{id:37,value:'Abnormal-Prolapse-Septal leaflet-Severe'},
{id:38,value:'Abnormal-Prolapse-Holosystolic'},
{id:39,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Anterior leaflet-Mild'},
{id:40,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Anterior leaflet-Moderate'},
{id:41,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Anterior leaflet-Severe'},
{id:41,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Posterior leaflet-Mild'},
{id:42,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Posterior leaflet-Moderate'},
{id:43,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Posterior leaflet-Severe'},
{id:44,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Septal leaflet-Mild'},
{id:45,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Septal leaflet-Moderate'},
{id:46,value:'Abnormal-Ruptured chordae/flail leaflet(s)-Septal leaflet-Severe'},
{id:47,value:'Dimensions'},
{id:48,value:'Ebstein’s anomaly'},
{id:49,value:'Tricuspid atresia'},
  ]
  Regurgitation=[
{id:1,value:'Regurgitation-Absent'},
{id:2,value:'Regurgitation-Present-Severity-Trace'},
{id:3,value:'Regurgitation-Present-Severity-Mild'},
{id:4,value:'Regurgitation-Present-Severity-Mild-to-moderate'},
{id:5,value:'Regurgitation-Present-Severity-Moderate-to-severe'},
{id:6,value:'Regurgitation-Present-Severity-Severe'},
{id:7,value:'Regurgitation-Present-Jet direction-Toward septum'},
{id:8,value:'Regurgitation-Present-Jet direction-Toward RA free wall'},
{id:9,value:'Regurgitation-Present-Jet direction-Central'},
{id:10,value:'Regurgitation-Present-Jet direction-Eccentric'},
{id:11,value:'Regurgitation-Present-Jet direction-Impinging on wallc'},
{id:12,value:'Regurgitation-Present-Jet direction-Extending to dome (backwall of RA)'},
{id:13,value:'Regurgitation-Hepatic vein systolic flow-Normal'},
{id:14,value:'Regurgitation-Hepatic vein systolic low-Blunted(decreased)'},
{id:15,value:'Regurgitation-Hepatic vein systolic flow-Reversed'},
  ]
Stenosis=[
{id:1,value:'Stenosis-Severity-None'},
{id:2,value:'Stenosis-Severity-Mild'},
{id:3,value:'Stenosis-Severity-Moderate'},
{id:4,value:'Stenosis-Severity-Severe'},
{id:5,value:'Stenosis-Quantitative Measurements-Peak tricuspid velocity (Doppler)'},
{id:6,value:'Stenosis-Quantitative Measurements-Peak trans-fricuspid gradient (Doppler)'},
{id:7,value:'Stenosis-Quantitative Measurements-Mean tricuspid velocity (Doppler)'},
{id:8,value:'Stenosis-Quantitative Measurements-Mean trans-tricuspid gradient (Doppler)'},
{id:9,value:'Stenosis-Quantitative Measurements-Tricuspid valve area'},
{id:10,value:'Stenosis-Quantitative Measurements-Other (Specify)'}
  ]

  selectstructure;
  selectRegurgitation;
  selectStenosis;
  tricuspidValveObject = {};

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }


  onOptionsSelected = (key,value)  => {
    this.tricuspidValveObject[key] = value
    console.log(this.tricuspidValveObject)
  }

  saveTricuspidValueData = () => {
    //save function
  console.log(this.tricuspidValveObject)

    
  const objectManagementReq = {
    "value": this.tricuspidValveObject
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
