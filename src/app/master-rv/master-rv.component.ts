import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-master-rv',
  templateUrl: './master-rv.component.html',
  styleUrls: ['./master-rv.component.scss']
})
export class MasterRvComponent implements OnInit {

  data =  [
    {id:1,value:'Select Observation'},
    {id:2,value:'Normal'},
    {id:3,value:'Abnormal-Cavity Size-Normal'},
    {id:4,value:'Abnormal-Cavity Size-Mildly Enlarged'},
    {id:5,value:'Abnormal-Cavity Size-Moderately Enlarged'},
    {id:6,value:'Abnormal-Cavity Size-Severely Enlarged'},
    {id:7,value:'Abnormal-Wall Thickness-Normal'},
    {id:8,value:'Abnormal-Wall Thickness-Mildly Increased'},
    {id:9,value:'Abnormal-Wall Thickness-Moderately Increased'},
    {id:10,value:'Abnormal-Wall hickness-Severely Increased'},
    {id:11,value:'Abnormal-Wall Thickness-Decreased'},
    {id:12,value:'Abnormal-Global Systolic Function-Normal'},
    {id:13,value:'Abnormal-Global Systolic Function-Normal'},
    {id:14,value:'Abnormal-Global Systolic Function-Hyperdynamic'},
    {id:15,value:'Abnormal-Global Systolic Function-Low Normal'},
    {id:16,value:'Abnormal-Global Systolic Function-Mildly Reduced'},
    {id:17,value:'Abnormal-Global Systolic Function-Moderately Reduced'},
    {id:18,value:'Abnormal-Global Systolic Function-Severely Reduced"'},
    {id:19,value:'Abnormal-Global Systolic Function-Moderately Reduced'},
    {id:20,value:'Abnormal-Segment Wall Analysis-Normal'},
    {id:21,value:'Abnormal-Segment Wall Analysis-Free Wall-Hypokinetic'},
    {id:22,value:'Abnormal-Segment Wall Analysis-Free Wall-Akinetic'},
    {id:23,value:'Abnormal-Segment Wall Analysis-Free Wall-Akinetic'},
    {id:24,value:'Abnormal-Segment Wall Analysis-Septum-Abnormal (Paradoxical) Motion Consistent With Right Ventricular Volume Overload And/Or Elevated Rv End-Diastolic Pressure'},
    {id:25,value:'Abnormal-Segment Wall Analysis-Septum-Abnormal (Paradoxical) Motion Consistent With Post-Operative Status'},
    {id:26,value:'Abnormal-Segment Wall Analysis-Septum-Abnormal (Paradoxical) Motion Consistent With Left Bundle Branch Block'},
    {id:27,value:'Abnormal-Segment Wall Analysis-Septum-Abnormal (Paradoxical) Motion Consistent With Rv Pacemaker'},
    {id:28,value:'Abnormal-Segment Wall Analysis-Septum-Abnormal (Paradoxical) Motion Due To Pre-Excitation'},
    {id:29,value:'Abnormal-Segment Wall Analysis-Septum-Flattened In Diastole (D Shaped Left Ventricle) Consistent With Right Ventricular Volume Overload'},
    {id:30,value:'Abnormal-Segment Wall Analysis-Septum-Flattened In Systole Consistent With Right Ventricular Pressure Overload'},
    {id:31,value:'Abnormal-Segment Wall Analysis-Septum-Septal Bounce Consistent With Constrictive Physiology'},
    {id:32,value:'Abnormal-Segment Wall Analysis-Septum-Excessive Respiratory Change Consider Tamponade, Ventilation–Related Etc'},
    {id:33,value:'Abnormal-Segment Wall Analysis-Septum-Other (Specify'},
    {id:34,value:'Abnormal-Segment Wall Analysis-Apex-Hypokinetic'},
    {id:35,value:'Abnormal-Segment Wall Analysis-Apex-Akinetic'},
    {id:36,value:'Abnormal-Segment Wall Analysis-Apex-Dyskinetic'},
    {id:37,value:'Abnormal-Miscellaneous-Consistent With CorPulmonale'},
    {id:38,value:'Abnormal-Miscellaneous-Consistent With Right Ventricular Dysplasia'},
    {id:39,value:'Abnormal-Miscellaneous-Consistent With Right Ventricular Infraction.'},
  
]

rightVentricleData ={};
selectedrv;

constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {

  }

  onOptionsSelected = (key,value)  => {
    this.rightVentricleData[key] = value
  }

  saveRightVentricleData = () => {
      //save function
    //console.log(this.rightVentricleData)
    
  const objectManagementReq = {
    "value": this.rightVentricleData
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
