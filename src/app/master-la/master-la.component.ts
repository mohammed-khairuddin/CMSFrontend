import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-la',
  templateUrl: './master-la.component.html',
  styleUrls: ['./master-la.component.scss']
})
export class MasterLaComponent implements OnInit {

  selectSize = [
    {id:1,value:'Normal'},
    {id:2,value:'Abnormal - Size - Normal'},
    {id:3,value:'Abnormal - Size - Dilated'},
    {id:4,value:'Abnormal - Size - Mildly Dilate'},
    {id:5,value:'Abnormal - Size - Moderately Dilated '},
    {id:6,value:'Abnormal - Size - Severely Dilated'},
    {id:7,value:'Abnormal - Size - Elongated'},
    {id:8,value:'Abnormal - Size - Volume (Or Dimensions)'},

    
    

  ]
  selectThrombus= [

    {id:1,value:'Abnormal - Thrombus - Absent'},
    {id:2,value:'Abnormal - Thrombus - Absent-Present-Size-Small'},
    {id:3,value:'Abnormal - Thrombus - Absent-Present-Size-Moderate'},
    {id:4,value:'Abnormal - Thrombus - Absent-Present-Size-Large'},


    {id:5,value:'Abnormal - Thrombus - Absent-Present-Location-LA Cavity-Superior'},
    {id:6,value:'Abnormal - Thrombus - Absent-Present-Location-LA Cavity-Inferior'},
    {id:7,value:'Abnormal - Thrombus - Absent-Present-Location-LA Cavity-Lateral'},
    {id:8,value:'Abnormal - Thrombus - Absent-Present-Location-LA Cavity-Atrial Septum'},

    {id:9,value:'Abnormal - Thrombus - Absent-Present-Location-LA Appendage'},

    {id:10,value:'Abnormal - Thrombus - Absent-Present-Shape-Flat (Mural)'},
    {id:11,value:'Abnormal - Thrombus - Absent-Present-Shape-Protruding'},
    {id:12,value:'Abnormal - Thrombus - Absent-Present-Shape-Pedunculated'},
    {id:13,value:'Abnormal - Thrombus - Absent-Present-Shape-Papillary'},
    {id:14,value:'Abnormal - Thrombus - Absent-Present-Shape-Spherical'},
    {id:15,value:'Abnormal - Thrombus - Absent-Present-Shape-Regular'},
    {id:16,value:'Abnormal - Thrombus - Absent-Present-Shape-Irregular'},
    {id:17,value:'Abnormal - Thrombus - Absent-Present-Shape-Multilobula'},
    {id:18,value:'Abnormal - Thrombus - Absent-Present-Shape-Other (Specify)'},



    {id:19,value:'Abnormal - Thrombus - Absent-Present-Texture-Solid'},
    {id:20,value:'Abnormal - Thrombus - Absent-Present-Texture-Layered'},
    {id:21,value:'Abnormal - Thrombus - Absent-Present-Texture-Hypoechoic Interior (Cystic)'},
    {id:22,value:'Abnormal - Thrombus - Absent-Present-Texture-Echogenic'},
    {id:23,value:'Abnormal - Thrombus - Absent-Present-Texture-Calcified'},
    
    
    {id:24,value:'Abnormal - Thrombus - Absent-Present-Mobility-Mobile'},
    {id:25,value:'Abnormal - Thrombus - Absent-Present-Mobility-Fixed (Sessile)'},
    
    {id:26,value:'Abnormal - Thrombus - Absent-Present-Dimensions'},
  ]

  selectMass=[

    {id:1,value:'Abnormal - Mass - Absent-Present-Size-Small'},
    {id:2,value:'Abnormal - Mass - Absent-Present-Size-Moderate'},
    {id:3,value:'Abnormal - Mass - Absent-Present-Size-Large'},


    {id:4,value:'Abnormal - Mass - Absent-Present-Location-LA Cavity'},
    {id:5,value:'Abnormal - Mass - Absent-Present-Location-LA Appendage'},
    {id:6,value:'Abnormal - Mass - Absent-Present-Location-Fossa Ovalis/Atrial Septum'},


    {id:7,value:'Abnormal - Mass - Absent-Present-Attachment Site-Fossa Ovalis/Atrial Septum'},
    {id:8,value:'Abnormal - Mass - Absent-Present-Attachment Site-Left Atrial Body'},
    {id:9,value:'Abnormal - Mass - Absent-Present-Attachment Site-Mitral Valve'},
    {id:10,value:'Abnormal - Mass - Absent-Present-Attachment Site-Other (Specify)'},

    {id:11,value:'Abnormal - Mass - Absent-Present-Shape-Flat (Mural)'},
    {id:12,value:'Abnormal - Mass - Absent-Present-Shape-Protruding'},
    {id:13,value:'Abnormal - Mass - Absent-Present-Shape-Pedunculated'},
    {id:14,value:'Abnormal - Mass - Absent-Present-Shape-Papillary'},
    {id:15,value:'Abnormal - Mass - Absent-Present-Shape-Spherical'},
    {id:16,value:'Abnormal - Mass - Absent-Present-Shape-Regular'},
    {id:17,value:'Abnormal - Mass - Absent-Present-Shape-Irregular'},
    {id:18,value:'Abnormal - Mass - Absent-Present-Shape-Multilobular'},
    {id:19,value:'Abnormal - Mass - Absent-Present-Shape-Frondlike'},
    {id:20,value:'Abnormal - Mass - Absent-Present-Shape-Other (Specify)'},


    {id:21,value:'Abnormal - Mass - Absent-Present-Texture-Solid'},
    {id:22,value:'Abnormal - Mass - Absent-Present-Texture-Layered'},
    {id:23,value:'Abnormal - Mass - Absent-Present-Texture-Hypoechonc Interior (Cystic)'},
    {id:24,value:'Abnormal - Mass - Absent-Present-Texture-Echogenic'},
    {id:25,value:'Abnormal - Mass - Absent-Present-Texture-Calcified'},
   
    {id:26,value:'Abnormal - Mass - Absent-Present-Mobility-Mobile'},
    {id:27,value:'Abnormal - Mass - Absent-Present-Mobility-Fixed (Sessile)'},


    {id:28,value:'Abnormal - Mass - Absent-Present-Dimensions-Type-Suggestive Of Myxoma'},
    {id:29,value:'Abnormal - Mass - Absent-Present-Dimensions-Type-Suggestive Of Papilloma'},
    {id:30,value:'Abnormal - Mass - Absent-Present-Dimensions-Type-Suggestive Of Fibroelastoma'},
    {id:31,value:'Abnormal - Mass - Absent-Present-Dimensions-Type-Suggestive Of Other Mass (Specify)'},

  ]
  selectCatheter=[
    
    
    {id:1,value:'Abnormal - Catheter - Absent-Present-LA Cavity'},
    {id:2,value:'Abnormal - Catheter - Absent-Present-LA Appendage'},

  ]

    SelectSpontaneousEchoContrast=[
    {id:1,value:'Abnormal - Spontaneous Echo Contrast - Absent-Present-Degree-Mild'},
    {id:2,value:'Abnormal - Spontaneous Echo Contrast - Absent-Present-Degree-Severe'},
    

    {id:3,value:'Abnormal - Spontaneous Echo Contrast - Absent-Present-Location-LA Cavity'},
    {id:4,value:'Abnormal - Spontaneous Echo Contrast - Absent-Present-Location-LA Appendage'},
    {id:5,value:'Abnormal - Spontaneous Echo Contrast - Absent-Present-Location-LA Cavity and LA Appendage'},
    
   ]

   selectAtrialSeptalDefect=[

    {id:1,value:'Abnormal - Atrial Septal Defect-Location-Primum'},
    {id:2,value:'Abnormal - Atrial Septal Defect-Location-Secundum'},
    {id:3,value:'Abnormal - Atrial Septal Defect-Location-Sinus Venosus'},    
    
    {id:4,value:'Abnormal - Atrial Septal Defect-Size-Small'},
    {id:5,value:'Abnormal - Atrial Septal Defect-Size-Moderate'},
    {id:6,value:'Abnormal - Atrial Septal Defect-Size-Large'},

    {id:7,value:'Abnormal - Atrial Septal Defect-Shunt-Left-To-Right'},
    {id:8,value:'Abnormal - Atrial Septal Defect-Shunt-Right-To-Left'},
    {id:9,value:'Abnormal - Atrial Septal Defect-Shunt-Bidirectional'},
    {id:10,value:'Abnormal - Atrial Septal Defect-Shunt-Qp:Qs Ratio'},
   ]

   selectPatentForamenOvale=[

    {id:1,value:'Abnormal - Patent Foramen Ovale- Absent-Present-Left-To-Right'},
    {id:2,value:'Abnormal - Patent Foramen Ovale- Absent-Present-Right-To-Left'},
    {id:3,value:'Abnormal - Patent Foramen Ovale- Absent-Present-Bidirectional Shunt'},
   ]

   selectOther=[

    {id:1,value:'Abnormal - Other-CorTriatriatum'},
    {id:2,value:'Abnormal - Other-Hypoplastic Left Atrium'},
    {id:3,value:'Abnormal - Other-Appearance Consistent With Cardiac Transplantation'},
   ]

  

   selectedSize;
   selectedThrombus;
   selectedSpontaneousEchoContrast;
   selectedPatentForamenOvale;
   selectedMass;
   selectedCatheter;
   selectedAtrialSeptalDefect;
   selectedOther;

  leftAtriumObservationObject={};
  

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

   


  }

  
  onOptionsSelected = (key,value)  => {
    this.leftAtriumObservationObject[key] = value
  }

  
  saveLeftAtriumValueData = () => {
    //save function
  console.log(this.leftAtriumObservationObject)

  const objectManagementReq = {
    "value": this.leftAtriumObservationObject
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
