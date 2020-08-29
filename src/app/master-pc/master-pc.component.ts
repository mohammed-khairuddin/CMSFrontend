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

  
  
  pericardium= [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnromal-Effusion-Absent'},
    {id:4,itemName:'Abnromal-Effusion-Present'},    
  ]
  
  x= [1,2,3,5]
  ascites=[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Ascites-Mild'},
    {id:4,itemName:'Ascites-Moderate'},
    {id:5,itemName:'Ascites-Severe'},
  ]

  
  size=[

    {id:2,itemName:'Size-Trivial'},
    {id:3,itemName:'Size-Small'},
    {id:4,itemName:'Size-Moderate'},
    {id:5,itemName:'Size-Large'},

  ]
  location=[
    {id:2,itemName:'Location-Generalized'},
    {id:3,itemName:'Location-Localized-Near Left Ventricle'},
    {id:4,itemName:'Location-Localized-Near Right Ventricle'},
    {id:5,itemName:'Location-Localized-Near Left Atrium'},
    {id:6,itemName:'Location-Localized-Near Right Atrium'},
  
  ]
  
  content=[
    {id:2,itemName:'Content-Fluid'},
    {id:3,itemName:'Content-Fibrinous'},
    {id:4,itemName:'Content-Focal Strands'},
    {id:5,itemName:'Content-Effusive Constructive'},
  ]
  thickening_calcification=[
    {id:2,itemName:'Thickening/Calcification-Absent'},
    {id:3,itemName:'Thickening/Calcification-Present'},
  ]
  mass=[
    {id:2,itemName:'Mass-Absent'},
    {id:3,itemName:'Mass-Present'},
  ]

  pleuralEffusion=[
    {id:2,itemName:'Pleural Effusion-Absent'},
    {id:3,itemName:'Pleural Effusion-Present-Right'},
    {id:4,itemName:'Pleural Effusion-Present-Left'},
    {id:5,itemName:'Pleural Effusion-Present-Right and Left'},
  ]
  // pleuralEffusionPresent=[
  //   {id:2,itemName:'Pleural Effusion-Present-Right'},
  //   {id:3,itemName:'Pleural Effusion-Present-Left'},
  //   {id:4,itemName:'Pleural Effusion-Present-Right and Left'},
  // ]
  // heamodynamicCompromise=[
  //   {id:2,itemName:'Heamodynamic Compromise'},
  //   // {id:2,itemName:'Heamodynamic Compromise-Tamponade'},
  //   // {id:3,itemName:'Heamodynamic Compromise-Constriction'},
  //   // {id:4,itemName:'Heamodynamic Compromise-Effuso Constructive'},
  //   // {id:5,itemName:'Heamodynamic Compromise-Septal Bounce'},
  //   // {id:6,itemName:'Heamodynamic Compromise-Inversion'},
  //   // {id:7,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation'},
  //   // {id:8,itemName:'Heamodynamic Compromise-Doppler Flow Velocities'},
  //   // {id:9,itemName:'Heamodynamic Compromise-Left ventricular diastol'},
  //   // {id:10,itemName:'Heamodynamic Compromise-Fat Pad'},
  // ]
  tamponade=[
    {id:2,itemName:'Heamodynamic Compromise-Tamponade-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Tamponade-Present'},
  ]
  constriction=[
    {id:2,itemName:'Heamodynamic Compromise-Constriction-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Constriction-Present'},
  ]
  effusoConstructive=[
    {id:2,itemName:'Heamodynamic Compromise-Effuso Constructive-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Effuso Constructive-Present'},
  ]
  septalBounce=[
    {id:2,itemName:'Heamodynamic Compromise-Septal Bounce-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Septal Bounce-Present'},
  ]
  inversion=[
    {id:2,itemName:'Heamodynamic Compromise-Inversion-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Inversion-Present-Left Ventricle'},
    {id:4,itemName:'Heamodynamic Compromise-Inversion-Present-Right Ventricle'},
    {id:5,itemName:'Heamodynamic Compromise-Inversion-Present-Left Atrium'},
    {id:6,itemName:'Heamodynamic Compromise-Inversion-Present-Right Atrium'},
  ]

  
  excessiveRespiratoryVariation=[
    {id:2,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Ventricular Dimensions'},
    {id:3,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Mitral Valve Slope'},
    {id:4,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Doppler Flow Velocities-Mitral'},
    {id:5,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Doppler Flow Velocities-Tricuspid'},
    {id:6,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Doppler Flow Velocities-Aortic'},
    {id:7,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Doppler Flow Velocities-Pulmonic'},
    {id:8,itemName:'Heamodynamic Compromise-Excessive Respiratory Variation-Present-Doppler Flow Velocities-Hepatic'},
  ]
  // dopplerFlowVelocities=[
  //   {id:2,itemName:'Heamodynamic Compromise-Doppler Flow Velocities-Mitral'},
  //   {id:3,itemName:'Heamodynamic Compromise-Doppler Flow Velocities-Tricuspid'},
  //   {id:4,itemName:'Heamodynamic Compromise-Doppler Flow Velocities-Aortic'},
  //   {id:5,itemName:'Heamodynamic Compromise-Doppler Flow Velocities-Pulmonic'},
  //   {id:6,itemName:'Heamodynamic Compromise-Doppler Flow Velocities-Hepatic'},
  // ]

  leftVentricularDiastole=[
    {id:2,itemName:'Heamodynamic Compromise-Left ventricular diastole-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Left ventricular diastole-Present'},
  ]
  
  fatPad=[
    {id:2,itemName:'Heamodynamic Compromise-Fat Pad-Absent'},
    {id:3,itemName:'Heamodynamic Compromise-Fat Pad-Present'},
  ]

  

  PericardiumObservationDataObject = {
    pericardium: [],
    ascites:[],
    size:[],
    location:[],
    content:[],
    thickeningCalcification:[],
    mass:[],
    pleuralEffusion:[],
    tamponade:[],
    constriction:[],
    effusoConstructive:[],
    septalBounce:[],
    inversion:[],
    excessiveRespiratoryVariation:[],
    leftVentricularDiastole:[],
    fatPad:[],



    
  }
  selectPericardium:[]
  selectAscites:[]
  selectSize:[]
  selectLocation:[]
  selectContent:[]
  selectThickeningCalcification:[]
  selectMass:[]
  selectPleuralEffusion:[]
  selectTamponade:[]
  selectConstriction:[]
  selectEffusoConstructive:[]
  selectSeptalBounce:[]
  selectInversion:[]
  selectExcessiveRespiratoryVariation:[]
  selectLeftVentricularDiastole:[]
  selectFatPad:[]
  
  
  settings= {};
  
  obtype: string;
  data : any[] = [];

  Size:string;
  updform = {
    

  }
  

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.observationsGetAllByPatient().subscribe(data => {
    console.log(data)
    //this.updform = data.user[0];
    //console.log(data.user.length);
    //let tmp = [];
    // for(let i=0; i < data.user.length; i++) {
    //   let gettype = data.user[i].type;
    //   console.log(gettype);
    //   let tt = data.user[i].value;
    //   console.log(tt);
    //   // for(let j=0; j < tt[i]; j++) {
    //   //   tmp.push({ id: j, itemName: tt });
    //   // }
      
    //   tmp.push({ id: i, itemName: tt });
    // }
    //this.selectWallThickness = tmp;
    //console.log('--------');
    //console.log(this.selectWallThickness);
    
  }, error => console.log(error));

    this.settings = {
      singleSelection: false,
      text: "Not Applicable(N/A)",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Select ',
      enableSearchFilter: true,
      badgeShowLimit: 5,
    };

  }
  getData(): void {
    let tmp = [];
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      for(let i=0; i < data.length; i++) {
        tmp.push({ item_id: i, item_text: data[i].name });
      }
      this.size = tmp;
    });
  }

  
  onOptionsSelected = (key,value)  => {
    this.PericardiumObservationDataObject[key] = value
  }

  savePericardiumValueData = () => {
      //save function
    //console.log(this.PericardiumValueDataObject)
    this.PericardiumObservationDataObject = {
      pericardium:this.selectPericardium,
      ascites: this.selectAscites,
      size:this.selectSize,
      location:this.selectLocation,
      content:this.selectContent,
      thickeningCalcification:this.selectThickeningCalcification,
      mass:this.selectMass,
      pleuralEffusion:this.selectPleuralEffusion,
      
      
      tamponade:this.selectTamponade,
      constriction:this.selectConstriction,
      effusoConstructive:this.selectEffusoConstructive,
      septalBounce:this.selectSeptalBounce,
      inversion:this.selectInversion,
      
      excessiveRespiratoryVariation:this.selectExcessiveRespiratoryVariation,
      leftVentricularDiastole:this.selectLeftVentricularDiastole,
      fatPad:this.selectFatPad,


      
      

    }

    

  
    
  const objectManagementReq = {
    "value": this.PericardiumObservationDataObject
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
  console.log(obtype);    //console.log('=====//////////');
  window.localStorage.setItem("obtype", obtype.toString());
    // this.router.navigateByUrl(`/mastertable/`+type);   
  this.actRoute.paramMap.subscribe(params => {
    this.obtype = params.get('obtype');
  
  });
  
}

}