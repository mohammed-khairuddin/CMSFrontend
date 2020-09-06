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

  leftAtrium = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'}
  ]
  size = [
      {id:2,itemName:'Size-Normal'},
      {id:3,itemName:'Size-Dilated'},
      {id:4,itemName:'Size-Mildly Dilate'},
      {id:5,itemName:'Size-Moderately Dilated '},
      {id:6,itemName:'Size-Severely Dilated'},
      {id:7,itemName:'Size-Elongated'},
      {id:8,itemName:'Size-Volume (Or Dimensions)'}
  ]
  
    thrombus= [
      {id:2,itemName:'Absent'},
      {id:3,itemName:'Present'},
    ]
    thrombuspresent=[
      {id:2,itemName:'Present-Size'},
      {id:3,itemName:'Present-Location'},
      {id:4,itemName:'Present-Shape'},
      {id:5,itemName:'Present-Texture'},
      {id:6,itemName:'Present-Mobility'},
      {id:7,itemName:'Present-Dimensions'},
    ]
    thrombuspresentsize=[
      {id:2,itemName:'Present-Size-Small'},
      {id:3,itemName:'Present-Size-Moderate'},
      {id:4,itemName:'Present-Size-Large'},
    ]
    thrombuspresentlocation=[
      {id:2,itemName:'Present-Location-LA Cavity-Superior'},
      {id:3,itemName:'Present-Location-LA Cavity-Inferior'},
      {id:4,itemName:'Present-Location-LA Cavity-Lateral'},
      {id:5,itemName:'Present-Location-LA Cavity-Atrial Septum'},
      {id:6,itemName:'Present-Location-LA Appendage'},
    ]
    thrombuspresentshape=[
      {id:2,itemName:'Present-Shape-Flat (Mural)'},
      {id:3,itemName:'Present-Shape-Protruding'},
      {id:4,itemName:'Present-Shape-Pedunculated'},
      {id:5,itemName:'Present-Shape-Papillary'},
      {id:6,itemName:'Present-Shape-Spherical'},
      {id:7,itemName:'Present-Shape-Regular'},
      {id:8,itemName:'Present-Shape-Irregular'},
      {id:9,itemName:'Present-Shape-Multilobula'},
      {id:10,itemName:'Present-Shape-Other (Specify)'},
    ] 
    thrombuspresenttexture=[
      {id:2,itemName:'Present-Texture-Solid'},
      {id:3,itemName:'Present-Texture-Layered'},
      {id:4,itemName:'Present-Texture-Hypoechoic Interior (Cystic)'},
      {id:5,itemName:'Present-Texture-Echogenic'},
      {id:6,itemName:'Present-Texture-Calcified'},
    ]
    thrombuspresentmobility=[
      {id:2,itemName:'Present-Mobility-Mobile'},
      {id:3,itemName:'Present-Mobility-Fixed (Sessile)'},
    ]

    thrombuspresentDimension=[
      {id:2,itemName:'Present-Dimensions'},
    ]
  
    mass=[
      {id:2,itemName:'Absent'},
      {id:3,itemName:'Present'},
    ]
    masspresent=[
      {id:2,itemName:'Present-Size'},
      {id:3,itemName:'Present-Location'},
      {id:4,itemName:'Present-Attachment'},
      {id:5,itemName:'Present-Shape'},
      {id:6,itemName:'Present-Texture'},
      {id:7,itemName:'Present-Mobility'},
      {id:8,itemName:'Present-Dimensions'},
      {id:9,itemName:'Present-Type'},
    ]
      massSize=[
        {id:2,itemName:'Present-Size-Small'},
       {id:3,itemName:'Present-Size-Moderate'},
       {id:4,itemName:'Present-Size-Large'},
      ]
  massLocation=[
      {id:2,itemName:'Present-Location-LA Cavity'},
      {id:3,itemName:'Present-Location-LA Appendage'},
      {id:4,itemName:'Present-Location-Fossa Ovalis/Atrial Septum'},
  ]
  massAttachment=[
      {id:2,itemName:'Present-Attachment Site-Fossa Ovalis/Atrial Septum'},
      {id:3,itemName:'Present-Attachment Site-Left Atrial Body'},
      {id:4,itemName:'Present-Attachment Site-Mitral Valve'},
      {id:5,itemName:'Present-Attachment Site-Other (Specify)'},
  ]
  massShape=[
      {id:2,itemName:'Present-Shape-Flat (Mural)'},
      {id:3,itemName:'Present-Shape-Protruding'},
      {id:4,itemName:'Present-Shape-Pedunculated'},
      {id:5,itemName:'Present-Shape-Papillary'},
      {id:6,itemName:'Present-Shape-Spherical'},
      {id:7,itemName:'Present-Shape-Regular'},
      {id:8,itemName:'Present-Shape-Irregular'},
      {id:9,itemName:'Present-Shape-Multilobular'},
      {id:10,itemName:'Present-Shape-Frondlike'},
      {id:11,itemName:'Present-Shape-Other (Specify)'},
  ]
  massTexture=[
      {id:2,itemName:'Present-Texture-Solid'},
      {id:3,itemName:'Present-Texture-Layered'},
      {id:4,itemName:'Present-Texture-Hypoechonc Interior (Cystic)'},
      {id:5,itemName:'Present-Texture-Echogenic'},
      {id:6,itemName:'Present-Texture-Calcified'},
  ]
  massMobility=[
      {id:2,itemName:'Present-Mobility-Mobile'},
      {id:3,itemName:'Present-Mobility-Fixed (Sessile)'},
  ]

  massDimension=[
    {id:2,itemName:'Present-Dimensions'},
  ]

  massType=[
      {id:2,itemName:'Present-Type-Suggestive Of Myxoma'},
      {id:3,itemName:'Present-Type-Suggestive Of Papilloma'},
      {id:4,itemName:'Present-Type-Suggestive Of Fibroelastoma'},
      {id:5,itemName:'Present-Type-Suggestive Of Other Mass (Specify)'},  
    ]
    catheter=[
      {id:2,itemName:'Absent'},
      //{id:3,itemName:'Present'},
      {id:3,itemName:'Present-LA Cavity'},
      {id:4,itemName:'Present-LA Appendage'},
  
    ]
    catheterpresent=[
     {id:2,itemName:'Present-LA Cavity'},
      {id:3,itemName:'Present-LA Appendage'},
    ]
  
      spontaneousEchoContrast=[
        {id:2,itemName:'Absent'},
        {id:3,itemName:'Present'},
      ]
      spontaneousechocontrastpresent=[
      {id:2,itemName:'Present-Degree'},
      {id:3,itemName:'Present-Location'},
      ]
      spontaneousechocontrastpresentdegree=[
      {id:2,itemName:'Preent-Degree-Mild'},
      {id:3,itemName:'Present-Degree-Severe'},
      ]
      spontaneousechocontrastpresentlocation=[
      {id:2,itemName:'Present-Location-LA Cavity'},
      {id:3,itemName:'Present-Location-LA Appendage'},
      {id:4,itemName:'Present-Location-LA Cavity and LA Appendage'},
      
     ]
  
     AtrialSeptalDefect=[
      {id:2,itemName:'Location'},
      {id:3,itemName:'Size'},
      {id:4,itemName:'Shunt'},
     ]
     atrialseptaldefectlocation=[
      {id:2,itemName:'Location-Primum'},
      {id:3,itemName:'Location-Secundum'},
      {id:4,itemName:'Location-Sinus Venosus'},    
     ]
     atrialseptaldefectsize=[
      {id:2,itemName:'Size-Small'},
      {id:3,itemName:'Size-Moderate'},
      {id:4,itemName:'Size-Large'},
     ]
     atrialseptaldefectshunt=[
      {id:2,itemName:'Shunt-Left-To-Right'},
      {id:3,itemName:'Shunt-Right-To-Left'},
      {id:4,itemName:'Shunt-Bidirectional'},
      {id:5,itemName:'Shunt-Qp:Qs Ratio'},
     ]
  
     patentForamenOvale=[
      {id:2,itemName:'Absent'},
      //{id:3,itemName:'Present'}
      {id:3,itemName:'Present-Left-To-Right'},
      {id:4,itemName:'Present-Right-To-Left'},
      {id:5,itemName:'Present-Bidirectional Shunt'},
     ]
     patientforamenovalepresent=[
      {id:2,itemName:'Present-Left-To-Right'},
      {id:3,itemName:'Present-Right-To-Left'},
      {id:4,itemName:'Present-Bidirectional Shunt'},
     ]

     other=[
      {id:2,itemName:'Other-CorTriatriatum'},
      {id:3,itemName:'Other-Hypoplastic Left Atrium'},
      {id:4,itemName:'Other-Appearance Consistent With Cardiac Transplantation'},
     ]

  

  settings= {};
  
  obtype: string;
  updform : any  ={}
  observation : Object;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.observationsGetAllByPatientIdType().subscribe((observation : any) => {
    //console.log(observation);
    const x = observation.observation.value;
    //console.log(x);
    this.updform =x;
  }, error => console.log(error));


  }

  
  onOptionsSelected = (key,value)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = value
    console.log(this.updform);
  }

  
  saveLeftAtriumValueData = () => {
    //save function
    console.log(this.updform);
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
