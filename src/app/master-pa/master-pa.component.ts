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

  observation =  [
    {id:2,itemName:'Normal'},
  {id:3,itemName:'Pulmonary artery hypoplasia'},
    {id:4,itemName:'Estimated pulmonary artery systolic pressure'},
  ]
 dilated=[
   {id:2,itemName:'Dilated-Mildly dilated'},
    {id:3,itemName:'Dilated-Moderately dilated'},
    {id:4,itemName:'Dilated-Severely dilated'},
  ]
pulmonaryhypertension=[
    {id:2,itemName:'Pulmonary hypertension-Absent'},
    {id:3,itemName:'Pulmonary hypertension-Present'},
]
Patentductusarteriosus=[
    {id:2,itemName:'Patent ductusarteriosus-Absent'},
    {id:3,itemName:'Patent ductusarteriosus-Present'},
]
Suspectthromboembolism=[
    {id:2,itemName:'Suspect thromboembolism-Main pulmonary artery'},
    {id:3,itemName:'Suspect thromboembolism-Right pulmonary artery'},
    {id:4,itemName:'Suspect thromboembolism-Left pulmonary artery'},
]
Pulmonarybranchstenosis=[
    {id:2,itemName:'Pulmonary branch stenosis-Right pulmonary artery'},
    {id:3,itemName:'Pulmonary branch stenosis-Left pulmonary artery'} 
  ]
  // pulmonaryArteryObservation = {
  //   observation:[],
  //   dilated:[],
  //   pulmonaryhypertension:[],
  //   Patentductusarteriosus:[],
  //   Suspectthromboembolism:[],
  //   Pulmonarybranchstenosis:[]
  // }
  selectPulmonaryArteryData:any;
  updform : any  ={

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
    const x = observation.observation.value;    
    //if(x != ''){
      this.updform =x;
     //}
  }, error => console.log(error));


  }

  onOptionsSelected = (key,itemName)  => {
     const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    console.log(this.updform)
  }

  savePulmonaryArteryData = () => {
      //save function
      document.getElementById("overlay").style.display = "block";	
    const objectManagementReq = {
      "value": this.updform
     }
     
     this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
      document.getElementById("overlay").style.display = "none";

        if(res['message'] ==  'submitted successfully' ) {
        alert('Observation Inserted Successfully');
     
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
      }   else if(res['message'] ==  ' updated successfully' ) {
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
