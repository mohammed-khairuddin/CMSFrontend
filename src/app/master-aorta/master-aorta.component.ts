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

  selectAbnormality= [
    {id:1,value:'Normal'},
    {id:2,value:'Abnormal-Dilatation-Aortic root'},
    {id:3,value:'Abnormal-Dilatation-Aortic root and the ascending aorta'},
    {id:4,value:'Abnormal-Dilatation-Aortic root limited to the sinuses of Valsalva'},
    {id:5,value:'Abnormal-Dilatation-Aortic root, ascending and descending aorta'},
    {id:6,value:'Abnormal-Dilatation-Aortic root, sinuses of Valsalva and ascending aorta'},
    {id:7,value:'Abnormal-Dilatation-Aortic root, ascending and transverse aorta'},
    {id:8,value:'Abnormal-Dilatation-Aortic root, transverse, descending and ascending aorta'},
    {id:9,value:'Abnormal-Dilatation-Sinuses of Valsalva, aortic root, ascending and transverse aorta'},
    {id:10,value:'Abnormal-Dilatation-Ascending aorta'},
    {id:11,value:'Abnormal-Dilatation-Ascending and descending aorta'},
    {id:12,value:'Abnormal-Dilatation-Ascending and transverse aorta'},
    {id:13,value:'Abnormal-Dilatation-Ascending aorta and the sinuses of Valsalva'},
    {id:14,value:'Abnormal-Dilatation-Ascending, transverse and descending aorta'},
    {id:15,value:'Abnormal-Dilatation-Descending aorta'},
  ]
  selectAneurysm=[
    {id:16,value:'Abnormal-Aneurysm-Location-Ascending aorta'},
    {id:17,value:'Abnormal-Aneurysm-Location-Transverse aorta'},
    {id:18,value:'Abnormal-Aneurysm-Location-Descending aorta'},
    {id:19,value:'Abnormal-Aneurysm-Location-Ascending and transverse aorta'},
    {id:20,value:'Abnormal-Aneurysm-Location-Ascending, transverse and descending aorta'},
    {id:21,value:'Abnormal-Aneurysm-Location-Ascending and descending aorta-Transverse and descending aorta'},
    {id:22,value:'Abnormal-Aneurysm-Location-Ascending aorta'},
  ]
  selectPlaque= [
    {id:23,value:'Abnormal-Plaque-Location-Ascending aorta'},
    {id:24,value:'Abnormal-Plaque-Location-Transverse aorta'},
    {id:25,value:'Abnormal-Plaque-Location-Descending aorta'},
    {id:26,value:'Abnormal-Plaque-Location-Ascending and transverse aorta'},
    {id:27,value:'Abnormal-Plaque-Location-Ascending and descending aorta'},
    {id:28,value:'Abnormal-Plaque-Location-Ascending, transverse and descending aorta'},
    {id:29,value:'Abnormal-Plaque-Location-Transverse and descending aorta'},

    {id:30,value:'Abnormal-Plaque-Characteristics-Layered'},
    {id:31,value:'Abnormal-Plaque-Characteristics-Protruding'},
    {id:32,value:'Abnormal-Plaque-Characteristics-Layered and protruding'},
    {id:33,value:'Abnormal-Plaque-Characteristics-Multilobular'},
    {id:34,value:'Abnormal-Plaque-Characteristics-Echolucent center'},
    
    {id:35,value:'Abnormal-Plaque-Size-Small'},
    {id:36,value:'Abnormal-Plaque-Size-Moderate'},
    {id:37,value:'Abnormal-Plaque-Size-Moderate-Large-Dimensions'},

    {id:38,value:'Abnormal-Plaque-Mobility-Mobile'},
    {id:39,value:'Abnormal-Plaque-Mobility-Immobile'},
  ]

  selectGraft= [
    {id:40,value:'Abnormal-Graft-Type-Prosthetic'},
    {id:41,value:'Abnormal-Graft-Type-Homograft'},
    {id:42,value:'Abnormal-Graft-Location-Ascending aorta'},
    {id:43,value:'Abnormal-Graft-Location-Ascending and transverse aorta'},
    {id:44,value:'Abnormal-Graft-Location-Descending aorta'},
    {id:45,value:'Abnormal-Graft-Location-Transverse aorta and descending aorta'},
    {id:46,value:'Abnormal-Graft-Location-Ascending, transverse, and descending aorta'},
 ]

  selectDissection= [
    {id:47,value:'Abnormal-Dissection-Location-Extending from the aortic root to the aortic arch'},
    {id:48,value:'Abnormal-Dissection-Location-Extending from the aortic root to the aortic arch'},
    {id:49,value:'Abnormal-Dissection-Location-Extending from the aortic root to the descending aorta'},
    {id:50,value:'Abnormal-Dissection-Location-Extending from the ascending aorta to the aortic arch'},
    {id:51,value:'Abnormal-Dissection-Location-Extending from the ascending aorta to the descending aorta'},
    {id:52,value:'Abnormal-Dissection-Location-Extending from the aortic arch to the descending aorta'},
    {id:53,value:'Abnormal-Dissection-Location-Limited to the descending aorta'},

    {id:54,value:'Abnormal-Dissection-Entry site-Aortic root'},
    {id:55,value:'Abnormal-Dissection-Entry site-AAortic arch'},
    {id:56,value:'Abnormal-Dissection-Entry site-Ascending aorta '},
    {id:57,value:'Abnormal-Dissection-Entry site-Descending aorta'},
    
    {id:58,value:'Abnormal-Dissection-Exit point-Ascending aorta'},
    {id:59,value:'Abnormal-Dissection-Exit point-Aortic arch'},
    {id:60,value:'Abnormal-Dissection-Exit point-Descending aorta-Multiple-Describe'},
    
    {id:61,value:'Abnormal-Dissection-False lumen-Contains thrombus'} ,
    {id:62,value:'Abnormal-Dissection-False lumen-Compressing the superior vena cava'},
    {id:63,value:'Abnormal-Dissection-False lumen-Compressing the true lumen'},
    {id:64,value:'Abnormal-Dissection-False lumen-Contains thrombus and compressing the true lumen'},

    {id:65,value:'Abnormal-Dissection-Intramural hematoma-Ascending root'},
    {id:66,value:'Abnormal-Dissection-Intramural hematoma-Extending from the aortic root to the ascending aortat'},
    {id:67,value:'Abnormal-Dissection-Intramural hematoma-Extending from the aortic root to the descending aorta'},
    {id:68,value:'Abnormal-Dissection-Intramural hematoma-Extending from the ascending aorta to the aortic arch'},
    {id:69,value:'Abnormal-Dissection-Intramural hematoma-Extending from the ascending aorta to the descending aorta'},
    {id:70,value:'Abnormal-Dissection-Intramural hematoma-Extending from tire aortic arch to the descendmg aorta'},
    {id:71,value:'Abnormal-Dissection-Intramural hematoma-"Limited to the descending aorta'},

    {id:72,value:'Abnormal-Dissection-Classification-Stanford Type A (Proximal)'},
    {id:73,value:'Abnormal-Dissection-Classification-Stanford Type B (Distal)'},
    {id:74,value:'Abnormal-Dissection-Classification-DeBakey Type I)'},
    {id:75,value:'Abnormal-Dissection-Classification-DeBakey Type E)'},
    {id:76,value:'Abnormal-Dissection-Classification-DeBakey Type III'},
    {id:77,value:'Abnormal-Dissection-Classification-Other (Specify)'},
 ]

  selectCoarctation= [
    {id:1,value:'Abnormal-Coarctation-Location-Proximal to left subclavian artery'},
    {id:2,value:'Abnormal-Coarctation-Location-Distal to left subclavian artery'},

    {id:3,value:'Abnormal-Coarctation-Minimal diameter'},
    {id:4,value:'Abnormal-Coarctation-Peak gradient'},
  
    {id:5,value:'Abnormal-Transposition of the great arteries'},
    {id:6,value:'Abnormal-Corrected transposition of the great arteries'},
  ]

  aortaObservation= {};
  selectedAbnormality;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }


  
  onOptionsSelected = (key,value)  => {
    this.aortaObservation[key] = value
  }

  saveAortaValueData = () => {
      //save function
    console.log(this.aortaObservation)
    const objectManagementReq = {
      "value": this.aortaObservation
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
