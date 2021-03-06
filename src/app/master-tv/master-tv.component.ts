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
  structure= [
    {id:2,itemName:'Normal'},
    //{id:3,itemName:'Abnormal'},
    {id:2,itemName:'Abnormal-Rheumatic'},  
  ]
  
  rheumatic =[
    {id:2,itemName:'Abnormal-Rheumatic'},

  ]
  
  vegetationAnteriorleaflet = [

    {id:2,itemName:'Anterior leaflet-Non-mobile'},
    {id:3,itemName:'Anterior leaflet-Mobile'},
    {id:4,itemName:'Anterior leaflet-Pedunculated and mobile'},
    {id:5,itemName:'Anterior leaflet-Other (Specify)'},
    {id:6,itemName:'Anterior leaflet-Size-Small'},
    {id:7,itemName:'Anterior leaflet-Size-Moderate'},
    {id:8,itemName:'Anterior leaflet-Size-Large'},
    {id:9,itemName:'Anterior leaflet-Size-Dimensions'},


  ]

  vegetationPosteriorleaflet = [

    {id:2,itemName:'Posterior leaflet-Non-mobile'},
    {id:3,itemName:'Posterior leaflet-Mobile'},
    {id:4,itemName:'Posterior leaflet-Pedunculated and mobile'},
    {id:5,itemName:'Posterior leaflet-Other (Specify)'},
    {id:6,itemName:'Posterior leaflet-Size-Small'},
    {id:7,itemName:'Posterior leaflet-Size-Moderate'},
    {id:8,itemName:'Posterior leaflet-Size-Large'},
    {id:9,itemName:'Posterior leaflet-Size-Dimensions'},
  ]
  
  vegetationSeptalleaflet = [

    {id:2,itemName:'Septal leaflet-Non-mobile'},
    {id:3,itemName:'Septal leaflet-Mobile'},
    {id:4,itemName:'Septal leaflet-Pedunculated and mobile'},
    {id:5,itemName:'Septal leaflet-Other (Specify)'},
    {id:6,itemName:'Anterior leaflet-Size-Small'},
    {id:7,itemName:'Septal leaflet-Size-Moderate'},
    {id:8,itemName:'Septal leaflet-Size-Large'},
    {id:9,itemName:'Septal leaflet-Size-Dimensions'},
  ]
  
  myxomatousredundant =[
    {id:2,itemName:'Abnormal-Myxomatous (redundant)'},

  ]
  
  prolapseAnteriorleaflet =[
    {id:2,itemName:'Anterior leaflet-Mild'},
    {id:3,itemName:'Anterior leaflet-Moderate'},
    {id:4,itemName:'Anterior leaflet-Severe'},

  ]
  prolapsePosteriorleaflet =[
    {id:2,itemName:'Posterior leaflet-Mild'},
    {id:3,itemName:'Posterior leaflet-Moderate'},
    {id:4,itemName:'Posterior leaflet-Severe'},

  ]
  prolapseSepatlleaflet =[
    {id:2,itemName:'Septal leaflet-Mild'},
    {id:3,itemName:'Septal leaflet-Moderate'},
    {id:4,itemName:'Septal leaflet-Severe'},

  ]
  holosystolic =[
    {id:2,itemName:'prolapse-Holosystolic'},

  ]
  lateSystolic =[
    {id:2,itemName:'Prolaspe-Late Systolic'},

  ]
 
  rupturedchordaeAnteriorleaflet =[
    {id:2,itemName:'Anterior leaflet-Mild'},
    {id:3,itemName:'Anterior leaflet-Moderate'},
    {id:4,itemName:'Anterior leaflet-Severe'},

  ]
  rupturedchordaePosteriorleaflet =[
    {id:2,itemName:'Posterior leaflet-Mild'},
    {id:3,itemName:'Posterior leaflet-Moderate'},
    {id:4,itemName:'Posterior leaflet-Severe'},

  ]
  rupturedchordaeSepatlleaflet =[
    {id:2,itemName:'Septal leaflet-Mild'},
    {id:3,itemName:'Septal leaflet-Moderate'},
    {id:4,itemName:'Septal leaflet-Severe'},

  ]
  dilatedannulusDimensions=[
    {id:2,itemName:'Ruptured-Dilated Annulus Dimensions'},

  ]
  ebsteinsAnomaly=[
    {id:2,itemName:'Ruptured-Ebstein’s anomaly'},

  ]
  tricuspidAtresia=[
    {id:2,itemName:'Ruptured-Tricuspid Atresia'},

  ]
  regurgitation= [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},  
  ]
  
  severity = [
    {id:2,itemName:'Severity-Trace'},
    {id:3,itemName:'Severity-Mild'},
    {id:4,itemName:'Severity-Mild-to-moderate'},
    {id:5,itemName:'Severity-Moderate-to-severe'},
    {id:6,itemName:'Severity-Severe'},


  ]
  jetdirection = [
    {id:2,itemName:'Jetdirection-Toward septum'},
    {id:3,itemName:'Jetdirection-Toward RA free wall'},
    {id:4,itemName:'Jetdirection-Central'},
    {id:5,itemName:'Jetdirection-Eccentric'},
    {id:6,itemName:'Jetdirection-Impinging on wall'},
    {id:7,itemName:'Jetdirection-Extending to dome (back wall of RA)'},

  ]
  hepaticveinsystolicflow = [
    {id:2,itemName:'Hepatic vein systolic flow-Trace'},
    {id:3,itemName:'Hepatic vein systolic flow-Mild'},
    {id:4,itemName:'Hepatic vein systolic flow-Mild-to-moderate'},
    {id:5,itemName:'Hepatic vein systolic flow-Moderate-to-severe'},
    {id:6,itemName:'Hepatic vein systolic flow-Severe'},


  ]
  stenosis =[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  stenosisSeverity=[
    {id:2,itemName:'Severity-None'},
    {id:3,itemName:'Severity-Mild'},
    {id:4,itemName:'Severity-Moderate'},
    {id:5,itemName:'Severity-Severe'},
  ]
  quantitativeMeasurements =[
    {id:2,itemName:'Quantitative Measurements-Peak tricuspid velocity (Doppler)'},
    {id:3,itemName:'Quantitative Measurements-Peak trans-fricuspid gradient (Doppler)'},
    {id:4,itemName:'Quantitative Measurements-Mean tricuspid velocity (Doppler)'},
    {id:5,itemName:'Quantitative Measurements-Mean trans-tricuspid gradient (Doppler)'},
    {id:6,itemName:'Quantitative Measurements-Other (Specify)'},

  ]
  
  updform : any = {

  }

  settings= {};
obtype: string;

constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {
    
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.observationsGetAllByPatientIdType().subscribe((observation : any) => {    
    
    if(observation.observation != null){
      this.updform =observation.observation.value;
     }

  }, error => console.log(error));

  }

  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
   
  }

  saveTricuspidValveData = () => {
      //save function
      document.getElementById("overlay").style.display = "block";  
  const objectManagementReq = {
    "value": this.updform
   }
 
   this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
    document.getElementById("overlay").style.display = "none";

      if(res['message'] ==  'submitted successfully' ) {
      alert('Observation Inserted Successfully');
      //this.router.navigateByUrl(`/observations/`);
      this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
    }  else if(res['message'] ==  ' updated successfully' ) {
      alert('Observation Updated Successfully');
      this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
    } 
     
 })

  }

  getAddPage  = (obtype) => {
   
    window.localStorage.setItem("obtype", obtype.toString());
     
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
  
   });
  
  }

}
