import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-ra',
  templateUrl: './master-ra.component.html',
  styleUrls: ['./master-ra.component.scss']
})
export class MasterRaComponent implements OnInit {

  data =  [
    {id:1,value:'Select Observation'},
    {id:2,value:'Normal'},
    {id:3,value:'Abnormal-Size-Normal'},
    {id:4,value:'Abnormal-Size-Mildly Enlarged'},
    {id:5,value:'Abnormal-Size-Moderately Enlarged'},
    {id:6,value:'Abnormal-Size-Markedly Enlarged'},
    {id:7,value:'Abnormal-Size-Small'},
    {id:8,value:'Abnormal-Thrombus-Absent'},
    {id:9,value:'Abnormal-Thrombus-Present-Size-Small'},
    {id:10,value:'Abnormal-Thrombus-Present-Size-Moderate'},
    {id:11,value:'Abnormal-Thrombus-Present-Size-Large'},
    {id:12,value:'Abnormal-Thrombus-Present-Location-Ra Cavity'},
    {id:13,value:'Abnormal-Thrombus-Present-Location-Ra Appendage'},
    {id:14,value:'Abnormal-Thrombus-Present-Location-Extending From Inferior Vena Cava'},
    {id:15,value:'Abnormal-Thrombus-Present-Shape-Flat (Mural)'},
    {id:16,value:'Abnormal-Thrombus-Present-Shape-Protruding'},
    {id:17,value:'Abnormal-Thrombus-Present-Shape-Pedunculatedge'},
    {id:18,value:'Abnormal-Thrombus-Present-Shape-Papillary'},
    {id:19,value:'Abnormal-Thrombus-Present-Shape-Spherical'},
    {id:20,value:'Abnormal-Thrombus-Present-Shape-Regular'},
    {id:21,value:'Abnormal-Thrombus-Present-Shape-Irregular'},
    {id:22,value:'Abnormal-Thrombus-Present-Shape-Multilobular'},
    {id:23,value:'Abnormal-Thrombus-Present-Shape-Other (Specify)'},
    {id:24,value:'Abnormal-Thrombus-Present-Texture-Solid'},
    {id:25,value:'Abnormal-Thrombus-Present-Texture-Layered'},
    {id:26,value:'Abnormal-Thrombus-Present-Texture-Hypoechonc Interior (Cystic)'},
    {id:27,value:'Abnormal-Thrombus-Present-Texture-Echogenic'},
    {id:28,value:'Abnormal-Thrombus-Present-Texture-Calcified'},
    {id:29,value:'Abnormal-Thrombus-Present-Texture-Other (Specify)'},
    {id:30,value:'Abnormal-Thrombus-Present-Mobility-Mobile'},
    {id:31,value:'Abnormal-Thrombus-Present-Mobility-Fixed (Sessile)'},
    {id:32,value:'Abnormal-Thrombus-Present-Mobility-Dimensions'},
    {id:33,value:'Abnormal-Mass-Absent'},
    {id:34,value:'Abnormal-Mass-Present-Size-Small'},
    {id:35,value:'Abnormal-Mass-Present-Size-Moderate'},
    {id:36,value:'Abnormal-Mass-Present-Size-Large'},
    {id:37,value:'Abnormal-Mass-Present-Location-Ra Cavity'},
    {id:38,value:'Abnormal-Mass-Present-Location-Ra Appendage'},
    {id:39,value:'Abnormal-Mass-Present-Location-Extending From Inferior Vena Cava'},
    {id:40,value:'Abnormal-Mass-Present-Shape-Flat (Mural)'},
    {id:41,value:'Abnormal-Mass-Present-Shape-Protruding'},
    {id:42,value:'Abnormal-Mass-Present-Shape-Pedunculatedge'},
    {id:43,value:'Abnormal-Mass-Present-Shape-Papillary'},
    {id:44,value:'Abnormal-Mass-Present-Shape-Spherical'},
    {id:45,value:'Abnormal-Mass-Present-Shape-Regular'},
    {id:46,value:'Abnormal-Mass-Present-Shape-Irregular'},
    {id:47,value:'Abnormal-Mass-Present-Shape-Multilobular'},
    {id:48,value:'Abnormal-Mass-Present-Shape-Frondlike'},
    {id:49,value:'Abnormal-Mass-Present-Texture-Solid'},
    {id:50,value:'Abnormal-Mass-Present-Texture-Layered'},
    {id:51,value:'Abnormal-Mass-Present-Texture-Hypoechonc Interior (Cystic)'},
    {id:52,value:'Abnormal-Mass-Present-Texture-Echogenic'},
    {id:53,value:'Abnormal-Mass-Present-Texture-Calcified'},
    {id:54,value:'Abnormal-Mass-Present-Texture-Other (Specify)'},
    {id:55,value:'Abnormal-Mass-Present-Mobility-Mobile'},
    {id:56,value:'Abnormal-Mass-Present-Mobility-Fixed (Sessile)'},
    {id:57,value:'Abnormal-Mass-Present-Type-Suggestive Of Myxoma'},
    {id:58,value:'Abnormal-Mass-Present-Type-Suggestive Of Papilloma'},
    {id:59,value:'Abnormal-Mass-Present-Type-Suggestive Of Fibroelastoma'},
    {id:60,value:'Abnormal-Mass-Present-Type-Suggestive Of Other Mass (Specify)'},
    {id:61,value:'Abnormal-Mass-Present-Dimensions'},
    {id:62,value:'Abnormal-Catheter/Pacemaker Wire-Absent'},
    {id:63,value:'Abnormal-Catheter/Pacemaker Wire-Present-RA Cavity'},
    {id:64,value:'Abnormal-Catheter/Pacemaker Wire-Present-RA Appendage'},
    {id:65,value:'Abnormal-Spontaneous Echo Contrast-Absent'},
    {id:66,value:'Abnormal-Spontaneous Echo Contrast-Present-Degree-Mild'},
    {id:67,value:'Abnormal-Spontaneous Echo Contrast-Present-Degree-Severe'},
    {id:68,value:'Abnormal-Spontaneous Echo Contrast-Present-Persistence-Intermittent'},
    {id:69,value:'Abnormal-Spontaneous Echo Contrast-Present-Persistence-Continuous'},
    {id:70,value:'Abnormal-Spontaneous Echo Contrast-Present-Location-Ra Cavity'},
    {id:71,value:'Abnormal-Spontaneous Echo Contrast-Present-Location-Ra Appendage'},
    {id:72,value:'Abnormal-Spontaneous Echo Contrast-Present-Location-RA Cavity And Ra Appendage'},
    {id:73,value:'Abnormal-Pressure-Present-Interatrial Septum Bowed Towards The Left, Consistent With Elevated Right Atrial Pressures'},
    {id:74,value:'Abnormal-Pressure-Present-Dilated Coronary Sinus Consistent With Elevated Right Atrial Pressures Or A Persistent Left Superior Vena Cava'},
    {id:75,value:'Abnormal-Pressure-present-Dilated Hepatic Veins'},
    {id:76,value:'Abnormal-Spontaneous Echo Contrast-Present-Dilated Inferior Vena Cava With Poor Inspiratory Collapse Consistent With Elevated Right Atrial Pressures'},
    {id:77,value:'Abnormal-Other-Appropriate Appearance For A Transplant Recipient'},
    {id:78,value:'Abnormal-Other-Prominent Eustachian Valve'},
    {id:79,value:'Abnormal-Other-Prominent Chiari Network'}, ]


    rightAtriumData ={} ;
selectedra;


constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {

  }

  onOptionsSelected = (key,value)  => {
    this.rightAtriumData[key] = value
  }

  saveRightAtriumData = () => {
      //save function
    console.log(this.rightAtriumData)

    const objectManagementReq = {
      "value": this.rightAtriumData
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
