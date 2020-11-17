import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-aorta',
  templateUrl: './master-aorta.component.html',
  styleUrls: ['./master-aorta.component.scss']
})
export class MasterAortaComponent implements OnInit {

  aorta= [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
  dialation=[
    {id:2,itemName:'Dilatation-Aortic root'},
    {id:3,itemName:'Dilatation-Aortic root and the ascending aorta'},
    {id:4,itemName:'Dilatation-Aortic root limited to the sinuses of Valsalva'},
    {id:5,itemName:'Dilatation-Aortic root, ascending and descending aorta'},
    {id:6,itemName:'Dilatation-Aortic root, sinuses of Valsalva and ascending aorta'},
    {id:7,itemName:'Dilatation-Aortic root, ascending and transverse aorta'},
    {id:8,itemName:'Dilatation-Aortic root, transverse, descending and ascending aorta'},
    {id:9,itemName:'Dilatation-Sinuses of Valsalva, aortic root, ascending and transverse aorta'},
    {id:10,itemName:'Dilatation-Ascending aorta'},
    {id:11,itemName:'Dilatation-Ascending and descending aorta'},
    {id:12,itemName:'Dilatation-Ascending and transverse aorta'},
    {id:13,itemName:'Dilatation-Ascending aorta and the sinuses of Valsalva'},
    {id:14,itemName:'Dilatation-Ascending, transverse and descending aorta'},
    {id:15,itemName:'Dilatation-Descending aorta'},
  ]
  
  x= [1,2,3,5]

  aneurysm=[
    {id:2,itemName:'Aneurysm-Location-Ascending aorta'},
    {id:3,itemName:'Aneurysm-Location-Transverse aorta'},
    {id:4,itemName:'Aneurysm-Location-Descending aorta'},
    {id:5,itemName:'Aneurysm-Location-Ascending and transverse aorta'},
    {id:6,itemName:'Aneurysm-Location-Ascending, transverse and descending aorta'},
    {id:7,itemName:'Aneurysm-Location-Ascending and descending aorta'},
    {id:8,itemName:'Aneurysm-Location-Transverse and descending aorta'},
  ]
  plaque=[
    {id:2,itemName:'Plaque'},
    // {id:3,itemName:'Plaque-Characteristics'},
    // {id:4,itemName:'Plaque-Size'},
    // {id:5,itemName:'Plaque-Mobility'},
  ]
  plaqueLocation= [
    {id:2,itemName:'Plaque-Location-Ascending aorta'},
    {id:3,itemName:'Plaque-Location-Transverse aorta'},
    {id:4,itemName:'Plaque-Location-Descending aorta'},
    {id:5,itemName:'Plaque-Location-Ascending and transverse aorta'},
    {id:6,itemName:'Plaque-Location-Ascending and descending aorta'},
    {id:7,itemName:'Plaque-Location-Ascending, transverse and descending aorta'},
    {id:8,itemName:'Plaque-Location-Transverse and descending aorta'},
  ]
  plaqueCharacteristics=[

    {id:2,itemName:'Plaque-Characteristics-Layered'},
    {id:3,itemName:'Plaque-Characteristics-Protruding'},
    {id:4,itemName:'Plaque-Characteristics-Layered and protruding'},
    {id:5,itemName:'Plaque-Characteristics-Multilobular'},
    {id:6,itemName:'Plaque-Characteristics-Echolucent center'},
  ]
  plaqueSize=[
    
    {id:2,itemName:'Plaque-Size-Small'},
    {id:3,itemName:'Plaque-Size-Moderate'},
    {id:4,itemName:'Plaque-Size-Large'},
    //dimensions??
  ]
  plaqueMobility=[

    {id:2,itemName:'Plaque-Mobility-Mobile'},
    {id:3,itemName:'Plaque-Mobility-Immobile'},
  ]
  graft=[
    {id:2,itemName:'Graft'},
  ]

  graftType= [
    {id:2,itemName:'Graft-Type-Prosthetic'},
    {id:3,itemName:'Graft-Type-Homograft'},
  ]
  graftLocation=[

    {id:2,itemName:'Graft-Location-Ascending aorta'},
    {id:3,itemName:'Graft-Location-Ascending and transverse aorta'},
    {id:4,itemName:'Graft-Location-Descending aorta'},
    {id:5,itemName:'Graft-Location-Transverse aorta and descending aorta'},
    {id:6,itemName:'Graft-Location-Ascending, transverse, and descending aorta'},
 ]

 dissection=[
  {id:2,itemName:'Dissection'},

 ]


  dissectionLocation= [
    {id:2,itemName:'Dissection-Location-Extending from the aortic root to the aortic arch'},
    {id:3,itemName:'Dissection-Location-Extending from the aortic root to the aortic arch'},
    {id:4,itemName:'Dissection-Location-Extending from the aortic root to the descending aorta'},
    {id:5,itemName:'Dissection-Location-Extending from the ascending aorta to the aortic arch'},
    {id:6,itemName:'Dissection-Location-Extending from the ascending aorta to the descending aorta'},
    {id:7,itemName:'Dissection-Location-Extending from the aortic arch to the descending aorta'},
    {id:8,itemName:'Dissection-Location-Limited to the descending aorta'},
  ]
  dissectionEntrySite=[

    {id:2,itemName:'Dissection-Entry site-Aortic root'},
    {id:3,itemName:'Dissection-Entry site-Aortic arch'},
    {id:4,itemName:'Dissection-Entry site-Ascending aorta '},
    {id:5,itemName:'Dissection-Entry site-Descending aorta'},
  ]
  dissectionExitPoint=[
    
    {id:2,itemName:'Dissection-Exit Point-Ascending aorta'},
    {id:3,itemName:'Dissection-Exit Point-Aortic arch'},
    {id:4,itemName:'Dissection-Exit Point-Descending Aorta-Multiple'},
  ]
  dissectionFalseLumen=[
    
    {id:2,itemName:'Dissection-False lumen-Contains thrombus'} ,
    {id:3,itemName:'Dissection-False lumen-Compressing the superior vena cava'},
    {id:4,itemName:'Dissection-False lumen-Compressing the true lumen'},
    {id:5,itemName:'Dissection-False lumen-Contains thrombus and compressing the true lumen'},
  ]
  dissectionIntramuralHematoma=[

    {id:2,itemName:'Dissection-Intramural hematoma-Ascending root'},
    {id:3,itemName:'Dissection-Intramural hematoma-Extending from the aortic root to the ascending aortat'},
    {id:4,itemName:'Dissection-Intramural hematoma-Extending from the aortic root to the descending aorta'},
    {id:5,itemName:'Dissection-Intramural hematoma-Extending from the ascending aorta to the aortic arch'},
    {id:6,itemName:'Dissection-Intramural hematoma-Extending from the ascending aorta to the descending aorta'},
    {id:7,itemName:'Dissection-Intramural hematoma-Extending from tire aortic arch to the descendmg aorta'},
    {id:8,itemName:'Dissection-Intramural hematoma-"Limited to the descending aorta'},
  ]
  dissectionClassification=[

    {id:2,itemName:'Dissection-Classification-Stanford Type A (Proximal)'},
    {id:3,itemName:'Dissection-Classification-Stanford Type B (Distal)'},
    {id:4,itemName:'Dissection-Classification-DeBakey Type I)'},
    {id:5,itemName:'Dissection-Classification-DeBakey Type E)'},
    {id:6,itemName:'Dissection-Classification-DeBakey Type III'},
    {id:7,itemName:'Dissection-Classification-Other (Specify)'},
 ]
  coarctation=[
    {id:2,itemName:'Coarctation-Location'},
    {id:3,itemName:'Coarctation-Minimal diameter'},
    {id:4,itemName:'Coarctation-Peak gradient'},
  ]
  coarctationLocation=[
    {id:2,itemName:'Coarctation-Location-Proximal to left subclavian artery'},
    {id:3,itemName:'Coarctation-Location-Distal to left subclavian artery'},
  ]
  
  
  
  transposition=[
    {id:2,itemName:'Transposition of the great arteries'},//textbox required
  ]
  correctedTransposition=[
    {id:2,itemName:'Corrected transposition of the great arteries'},//textbox required
  ]


  settings= {};

  obtype: string;
  data : any[] = [];

  Size:string;
  updform : any  = {
    
  }
  aortaObservationObject: any;

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



  saveAortaitemNameData = () => {
    document.getElementById("overlay").style.display = "block";

    const objectManagementReq = {
      "value": this.updform
     }
     this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
      document.getElementById("overlay").style.display = "none";

        if(res['message'] ==  'submitted successfully' ) {
        alert('Observation Inserted Successfully');
       
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