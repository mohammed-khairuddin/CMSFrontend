import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-pc',
  templateUrl: './master-pc.component.html',
  styleUrls: ['./master-pc.component.scss']
})
export class MasterPcComponent implements OnInit {

  selectNormal= [
    {id:1,value:'Normal'},
  ]
  
  selectAscites=[
    {id:1,value:'Normal'},
    {id:2,value:'Ascites-Mild'},
    {id:3,value:'Ascites-Moderate'},
    {id:4,value:'Ascites-Severe'},
  ]

  selectAbnormal=[
    {id:1,value:'Abnormal-Effusion-Absent-Present-Size-Trivial'},
    {id:2,value:'Abnormal-Effusion-Absent-Present-Size-Small'},
    {id:3,value:'Abnormal-Effusion-Absent-Present-Size-Moderate'},
    {id:4,value:'Abnormal-Effusion-Absent-Present-Size-Large'},
    {id:5,value:'Abnormal-Effusion-Absent-Present-Location-Generalized-Localized-Near left ventricle'},
    {id:6,value:'Abnormal-Effusion-Absent-Present-Location-Generalized-Localized-Near right ventricle'},
    {id:7,value:'Abnormal-Effusion-Absent-Present-Location-Generalized-Localized-Near left atrium'},
    {id:8,value:'Abnormal-Effusion-Absent-Present-Location-Generalized-Localized-Near right atrium'},


    {id:9,value:'Abnormal-Effusion-Absent-Present-Content-Fluid'},
    {id:10,value:'Abnormal-Effusion-Absent-Present-Content-Fibrinous'},
    {id:11,value:'Abnormal-Effusion-Absent-Present-Content-Focal Strands'},
    {id:12,value:'Abnormal-Effusion-Absent-Present-Content-Effusive-constrictive'},


    {id:13,value:'Abnormal-Effusion-Thickening/Calcification-Absent'},
    {id:14,value:'Abnormal-Effusion-Thickening/Calcification-Present'},

    {id:15,value:'Abnormal-Mass-Absent'},
    {id:16,value:'Abnormal-Mass-Present-Dimensions'},


    {id:17,value:'Abnormal-Pleural effusion-Absent'},
    {id:18,value:'Abnormal-Pleural effusion-Present-Right'},
    {id:19,value:'Abnormal-Pleural effusion-Present-Left'},
    {id:20,value:'Abnormal-Pleural effusion-Present-Right and left'},


    {id:21,value:'Abnormal-Hemodynamic Compromise-Tamponade-Absent'},
    {id:22,value:'Abnormal-Hemodynamic Compromise-Tamponade-Present'},
    
    
    {id:23,value:'Abnormal-Hemodynamic Compromise-Constriction-Absent'},
    {id:24,value:'Abnormal-Hemodynamic Compromise-Constriction-Present'},


    {id:25,value:'Abnormal-Hemodynamic Compromise-Effuso constrictive-Absent'},
    {id:26,value:'Abnormal-Hemodynamic Compromise-Effuso constrictive-Present'},


    {id:27,value:'Abnormal-Hemodynamic Compromise-Septal bounce-Present'},
    {id:28,value:'Abnormal-Hemodynamic Compromise-Septal bounce-Present'},

    {id:29,value:'Abnormal-Hemodynamic Compromise-Inversion-Absent-Present-Left Ventricle'},
    {id:30,value:'Abnormal-Hemodynamic Compromise-Inversion-Absent-Present-Right Ventricle'},
    {id:31,value:'Abnormal-Hemodynamic Compromise-Inversion-Absent-Present-Left Atrium'},
    {id:32,value:'Abnormal-Hemodynamic Compromise-Inversion-Absent-Present-Right Atrium'},


    {id:33,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Ventricular dimensions'},
    {id:34,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Doppler flow velocities'},
    {id:35,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Mitral'},
    {id:36,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Tricuspid'},
    {id:37,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Aortic'},
    {id:38,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Pulmonic'},
    {id:39,value:'Abnormal-Hemodynamic Compromise-Excessive respiratory variation-Absent-Present-Mitral valve slope-Hepatic'},


    {id:40,value:'Abnormal-Hemodynamic Compromise-Left ventricular diastolic “checking” (square root sign)-Absent'},
    {id:41,value:'Abnormal-Hemodynamic Compromise-Left ventricular diastolic “checking” (square root sign)-Present'},
    


    {id:42,value:'Abnormal-Fat Pad-Absent'},
    {id:43,value:'Abnormal-Fat Pad-Present'},
  ]

  PericardiumValueDataObject={};
  selectedAbnormal;
  selectedAscites;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  onOptionsSelected = (key,value)  => {
    this.PericardiumValueDataObject[key] = value
  }

  savePericardiumValueData = () => {
      //save function
    console.log(this.PericardiumValueDataObject)

    
  const objectManagementReq = {
    "value": this.PericardiumValueDataObject
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
