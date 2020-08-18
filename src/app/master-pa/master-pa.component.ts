import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-pa',
  templateUrl: './master-pa.component.html',
  styleUrls: ['./master-pa.component.scss']
})
export class MasterPaComponent implements OnInit {

  data =  [
    {id:1,value:'Normal'},
    {id:2,value:'Dilated-Mildly dilated'},
    {id:3,value:'Dilated-Moderately dilated'},
    {id:4,value:'Dilated-Severely dilated'},
    {id:5,value:'Pulmonary hypertension-Absent'},
    {id:6,value:'Pulmonary hypertension-Present'},
    {id:7,value:'Patent ductusarteriosus-Absent'},
    {id:8,value:'Patent ductusarteriosus-Present'},
    {id:9,value:'Suspect thromboembolism-Main pulmonary artery'},
    {id:10,value:'Suspect thromboembolism-Right pulmonary artery'},
    {id:11,value:'Suspect thromboembolism-Left pulmonary artery'},
    {id:12,value:'Pulmonary branch stenosis-Right pulmonary artery'},
    {id:13,value:'Pulmonary branch stenosis-Left pulmonary artery'},
    {id:14,value:'Pulmonary artery hypoplasia'},
    {id:15,value:'Estimated pulmonary artery systolic pressure'},
  ]


  selectedObsevation;
  pulmonaryArteryObservation = {};

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  onOptionsSelected = (key,value)  => {
    this.pulmonaryArteryObservation[key] = value
  }

  savePulmonaryArteryData = () => {
      //save function
    console.log(this.pulmonaryArteryObservation)

    const objectManagementReq = {
      "value": this.pulmonaryArteryObservation
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
