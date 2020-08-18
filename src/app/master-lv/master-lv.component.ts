import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-lv',
  templateUrl: './master-lv.component.html',
  styleUrls: ['./master-lv.component.scss']
})
export class MasterLvComponent implements OnInit {
  
  
  selectCavitySize = [
    {id:1,value:'Normal'},
    {id:2,value:'Increased-Mild'},
    {id:3,value:'Increased-Moderate'},
    {id:4,value:'Increased-Severe'},
    {id:5,value:'Decreased'},
    {id:6,value:'N/A'},
  ]

  selectWallThickness = [
    {id:1,value:'Normal'},
    {id:2,value:'Increased-Mild'},
    {id:3,value:'Increased-Moderate'},
    {id:4,value:'Increased-Severe'},
    {id:5,value:'Decreased'},
    {id:6,value:'Relative Wall Thickness'},
    {id:7,value:'N/A'},
  ]

  selectDiastolicFilling = [
    {id:1,value:'Normal-For Age'},
    {id:2,value:'Abnormal-Pattern-Impaired Relation'},
    {id:3,value:'Abnormal-Pattern-Pseudo normal'},
    {id:4,value:'Abnormal-Pattern-Restrictive'},
    {id:5,value:'Abnormal-Elevated LV Filling Pressure-Absent'},
    {id:6,value:'Abnormal-Elevated LV Filling Pressure-Present-Elevated Mean Left Atrial Pressure (LAP)'},
    {id:7,value:'Abnormal-Elevated LV Filling Pressure-Present-Elevated LV En-Diastolic Pressure (LVEDP)'},
    {id:8,value:'Abnormal-Elevated LV Filling Pressure-Present-Both Elevated Lap And LVEDP'},
    {id:9,value:'N/A'},
  ]
  
  selectVentricularSeptalDefect = [
    {id:1,value:'Absent'},
    {id:2,value:'Present-Location-Membranous (Infracristal)'},
    {id:3,value:'Present-Location-Infundibular (Supracristal)'},
    {id:4,value:'Present-Location-Inlet'},
    {id:5,value:'Present-Location-Muscular'},
    {id:6,value:'Present-Location-Multiple -Designate'},
    {id:7,value:'Present-Size-Small'},
    {id:8,value:'Present-Size-Moderate'},
    {id:9,value:'Present-Size-Large'},
    {id:10,value:'Present-Size-Dimensions'},
    {id:11,value:'Present-Shunt-Left-To-Right'},
    {id:12,value:'Present-Shunt-Right-To-Left'},
    {id:13,value:'Present-Shunt-Bidirectional'},
    {id:14,value:'Present-Shunt-Qp:Qs Ratio'},
    {id:15,value:'N/A'},
  ]

  selectVentricularShape= [
    {id:1,value:'Normal'},
    {id:2,value:'Concentric Hypertrophy-Mild'},
    {id:3,value:'Concentric Hypertrophy-Moderate'},
    {id:4,value:'Concentric Hypertrophy-Severe'},
    {id:5,value:'Asymmetric Hypertrophy-Absent'},
    {id:6,value:'Asymmetric Hypertrophy-Present-Anterior'},
    {id:7,value:'Asymmetric Hypertrophy-Present-Posterior '},
    {id:8,value:'Asymmetric Hypertrophy-Present-Septal'},
    {id:9,value:'Asymmetric Hypertrophy-Present-Lateral'},
    {id:10,value:'Asymmetric Hypertrophy-Present-Apical'},
    {id:11,value:'Asymmetric Hypertrophy-Present-Basal'},
    {id:12,value:'Eccentric Hypertrophy-Absent'},
    {id:13,value:'Eccentric Hypertrophy-Present'},
    {id:14,value:'Aneurysm-Absent'},
    {id:15,value:'Aneurysm-Present-Anterior'},
    {id:16,value:'Aneurysm-Present-Posterior'},
    {id:17,value:'Aneurysm-Present-Inferior'},
    {id:18,value:'Aneurysm-Present-Septal'},
    {id:19,value:'Aneurysm-Present-Lateral'},
    {id:20,value:'Aneurysm-Present-Apical'},
    {id:21,value:'Aneurysm-Present-Other (Specify)'},
    {id:22,value:'Pseudoaneurysm-Absent'},
    {id:23,value:'Pseudoaneurysm-Present-Anterior'},
    {id:24,value:'Pseudoaneurysm-Present-Posterior'},
    {id:25,value:'Pseudoaneurysm-Present-Inferior'},
    {id:26,value:'Pseudoaneurysm-Present-Septal'},
    {id:27,value:'Pseudoaneurysm-Present-Lateral'},
    {id:28,value:'Pseudoaneurysm-Present-Apical'},
    {id:29,value:'Pseudoaneurysm-Present-Basal'},
    {id:30,value:'N/A'},
  ]


  selectVentricularMass = [
    {id:1,value:'Normal'},
    {id:2,value:'BorderLine'},
    {id:3,value:'Increase'},
    {id:4,value:'LVMass'},
    {id:5,value:'N/A'},
  ]

   
  selectMyocardialInfraction = [
    {id:1,value:'Anterior-Small'},
    {id:2,value:'Anterior-Small-To-Moderate'},
    {id:3,value:'Anterior-Moderate'},
    {id:4,value:'Anterior-Moderate-To-Large'},
    {id:5,value:'Anterior-Large'},
    {id:6,value:'Posterior-Small'},
    {id:7,value:'Posterior-Small-To-Moderate'},
    {id:8,value:'Posterior-Moderate'},
    {id:9,value:'Posterior-Moderate-To-Large'},
    {id:10,value:'Posterior-Large'},
    {id:11,value:'Inferior-Small'},
    {id:12,value:'Inferior-Small-To-Moderate'},
    {id:13,value:'Inferior-Moderate'},
    {id:14,value:'Inferior-Moderate-To-Large'},
    {id:15,value:'Inferior-Large'},
    {id:16,value:'Lateral-Small'},
    {id:17,value:'Lateral-Small-To-Moderate'},
    {id:18,value:'Lateral-Moderate'},
    {id:19,value:'Lateral-Moderate-To-Large'},
    {id:20,value:'Lateral-Large'},
    {id:21,value:'Anteroseptal-Small'},
    {id:22,value:'Anteroseptal-Small-To-Moderate'},
    {id:23,value:'Anteroseptal-Moderate'},
    {id:24,value:'Anteroseptal-Moderate-To-Large'},
    {id:25,value:'Anteroseptal-Large'},
    {id:26,value:'Apical-Small'},
    {id:27,value:'Apical-Small-To-Moderate'},
    {id:28,value:'Apical-Moderate'},
    {id:29,value:'Apical-Moderate-To-Large'},
    {id:30,value:'Apical-Large'},
    {id:31,value:'Antero-Apical-Small'},
    {id:32,value:'Antero-Apical-Small-To-Moderate'},
    {id:33,value:'Antero-Apical-Moderate'},
    {id:34,value:'Antero-Apical-Moderate-To-Large'},
    {id:35,value:'Antero-Apical-Large'},
    {id:36,value:'Postero-Lateral-Small'},
    {id:37,value:'Postero-Lateral-Small-To-Moderate'},
    {id:38,value:'Postero-Lateral-Moderate'},
    {id:39,value:'Postero-Lateral-Moderate-To-Large'},
    {id:40,value:'Postero-Lateral-Large'},
    {id:41,value:'Other (Specify)-Small'},
    {id:42,value:'Other (Specify)-Small-To-Moderate'},
    {id:43,value:'Other (Specify)-Moderate'},
    {id:44,value:'Other (Specify)-Moderate-To-Large'},
    {id:45,value:'Other (Specify)-Large'},
    {id:46,value:'N/A'},
  ]


  selectMass = [
    {id:1,value:'Absent'},
    {id:2,value:'Present-Size-Small'},
    {id:3,value:'Present-Size-Moderate'},
    {id:4,value:'Present-Size-Large'},
    {id:5,value:'Present-Location-Apical'},
    {id:6,value:'Present-Location-Basal'},
    {id:7,value:'Present-Location-Septal'},
    {id:8,value:'Present-Location-Lateral'},
    {id:9,value:'Present-Location-Intramyocardial'},
    {id:10,value:'Present-Location-Intracavitary'},
    {id:11,value:'Present-Shape-Flat (Mural'},
    {id:12,value:'Present-Shape-Protruding'},
    {id:13,value:'Present-Shape-Pedunculated'},
    {id:14,value:'Present-Shape-Papillary'},
    {id:15,value:'Present-Shape-Spherical'},
    {id:16,value:'Present-Shape-Regular'},
    {id:17,value:'Present-Shape-Irregular'},
    {id:18,value:'Present-Shape-Multilobular'},
    {id:19,value:'Present-Shape-Frondlike'},
    {id:20,value:'Present-Shape-Infiltrating'},
    {id:21,value:'Present-Texture-Solid'},
    {id:22,value:'Present-Texture-Layered'},
    {id:23,value:'Present-Texture -	Hypoechoic Interior (Cystic)'},
    {id:24,value:'Present-Texture -	Hyperechoic'},
    {id:25,value:'Present-Texture-Calcified'},
    {id:26,value:'Present-Mobility-Mobile'},
    {id:27,value:'Present-Mobility-Fixed (Sessile)'},
    {id:28,value:'Present-Dimensions'},
    {id:29,value:'N/A'},
  ]


  selectSystolicfunction = [
    {id:1,value:'Global'},
    {id:2,value:'Ejection Fraction-Normal'},
    {id:3,value:'Ejection Fraction-Borderline'},
    {id:4,value:'Ejection Fraction-Low Normal'},
    {id:5,value:'Ejection Fraction-Decreased-Mild'},
    {id:6,value:'Ejection Fraction-Decreased-Mild-To-Moderate'},
    {id:7,value:'Ejection Fraction-Decreased-Moderate'},
    {id:8,value:'Ejection Fraction-Decreased-Mild-To-Severe'},
    {id:9,value:'Ejection Fraction-Decreased-Severe'},
    {id:10,value:'Ejection Fraction-Increased (Hyperdynamic)'},
    {id:11,value:'Fractional Shortening (Basal)-Normal'},
    {id:12,value:'Fractional Shortening (Basal)-Decreased'},
    {id:13,value:'Fractional Shortening (Basal)-Increased'},
    {id:14,value:'Fractional Area Change-Normal'},
    {id:15,value:'Fractional Area Change-Decreased'},
    {id:16,value:'Fractional Area Change-Increased'},
    {id:17,value:'Dilated (Congestive)-Mild'},
    {id:18,value:'Dilated (Congestive)-Mild-To-Moderate'},
    {id:19,value:'Dilated (Congestive)-Moderate'},
    {id:20,value:'Dilated (Congestive)-Mild-To-Severe'},
    {id:21,value:'Dilated (Congestive)-Severe'},
    {id:22,value:'Regional-Normal'},
    {id:23,value:'Regional-Not Seen'},
    {id:24,value:'Regional-Dyskinetic'},
    {id:25,value:'Regional-Hypokinetic'},
    {id:26,value:'Regional-Scar/Thinning'},
    {id:27,value:'Regional-Akineticase Model'},
    {id:28,value:'N/A'},
  ]

  selectThrombus = [
    {id:1,value:'Absent'},
    {id:2,value:'Present-Size-Small'},
    {id:3,value:'Present-Size-Moderate'},
    {id:4,value:'Present-Size-Large'},
    {id:5,value:'Location-Apical'},
    {id:6,value:'Location-Basal'},
    {id:7,value:'Location-Lateral'},
    {id:8,value:'Location-Septal'},
    {id:9,value:'Shape-Flat (Mural)'},
    {id:10,value:'Shape-Protruding'},
    {id:11,value:'Shape-Pedunculated'},
    {id:12,value:'Shape-Spherical'},
    {id:13,value:'Shape-Regular'},
    {id:14,value:'Shape-Irregular'},
    {id:15,value:'Shape-Multilobular'},
    {id:16,value:'Shape-Other (Specify)'},
    {id:17,value:'Texture-Solid'},
    {id:18,value:'Texture-Layered'},
    {id:19,value:'Texture-Hypoechoic Interior (Cystic)'},
    {id:20,value:'Texture-Hyperechoic'},
    {id:21,value:'Texture-Calcified'},
    {id:22,value:'Mobility-Mobile'},
    {id:23,value:'Mobility-Fixed (Sessile)'},
    {id:24,value:'Dimensions'},
    {id:25,value:'N/A'},
  ]
 
  selectAbnormalSeptalMotion = [
    {id:1,value:'Abnormal (Paradoxical) Motion Consistent With Right Ventricular Volume Overload and / Or Elevated RV End-Diastolic Pressure. '},
    {id:2,value:'Abnormal (Paradoxical) Motion Consistent With Post-Operative Status'},
    {id:3,value:'Abnormal (Paradoxical) Motion Consistent With Left Bundle Branch Block'},
    {id:4,value:'Abnormal (Paradoxical) Motion Consistent With Rv Pacemaker'},
    {id:5,value:'Abnormal (Paradoxical) Motion Due To Pre-Excitation'},
    {id:6,value:'Flattened In Diastole (D Shaped Left Ventricle) Consistent With Right Ventricular Volume Overload'},
    {id:7,value:'Flattened In Systole Consistent With Right Ventricular Pressure Overload'},
    {id:8,value:'Flattened In Systole And Diastole Consistent With Right Ventricular Pressure And Volume Overload'},
    {id:9,value:'Septal Bounce Consistent With Constructive Physiology'},
    {id:10,value:'Excessive Respiratory Change – Consider Tamponade, Ventilation Related Etc.'},
    {id:11,value:'DiOther (Specify)mensions'},
    {id:12,value:'N/A'},
  ]



  leftVentricleObservationObject = {};
  selectedCavitySize;
  selectedVentricularShape;
  selectedDiastolicFilling;
  selectedVentricularSeptalDefect;
  selectedVentricularMass;
  selectedMyocardialInfraction;
  selectedMass;
  selectedWallThickness;
  selectedSystolicfunction;
  selectedThrombus;
  selectedAbnormalSeptalMotion;
  
  
  updform = {
    cs:'',
    vs:'',
    df:'',
    vsd:'',
    vm:'',
    mi:'',
    m:'',
    wt:'',
    sf:'',
    t:'',
    asm:'',
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.loginService.observationsGetIndividual()
    .subscribe(data => {
      //console.log(data)
      this.updform = data['observation']
    }, error => console.log(error));
    

  }


  
  onOptionsSelected = (key,value)  => {
    this.leftVentricleObservationObject[key] = value
  }



  saveLeftVentricleValueData = () => {
    //save function
  //console.log(this.leftVentricleObservationObject)

  const objectManagementReq = {
    "value": this.leftVentricleObservationObject
   }
   console.log(objectManagementReq);
//    this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
//       console.log(res);
//       if(res['message'] ==  'submitted successfully' ) {
//       alert('Observation Inserted Successfully');
//       //this.router.navigateByUrl(`/observations/`);
//       this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
//     } 
     
//  })


}


}
