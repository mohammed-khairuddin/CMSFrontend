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
  
  
  cavitySize = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Increased-Mild'},
    {id:4,itemName:'Increased-Moderate'},
    {id:5,itemName:'Increased-Severe'},
    {id:6,itemName:'Decreased'},
  ]

  x= [1,2,3,5]

  wallThickness = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Increased-Mild'},
    {id:4,itemName:'Increased-Moderate'},
    {id:5,itemName:'Increased-Severe'},
    {id:6,itemName:'Decreased'},
    {id:7,itemName:'Relative Wall Thickness'},
     ]

     
  ventricularMass = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'BorderLine'},
    {id:4,itemName:'Increase'},
    {id:5,itemName:'LVMass'},    
  ]

  
  ventricularShape= [
    {id:2,itemName:'Normal'},  
  ]

  concentricHypertrophy= [
    {id:2,itemName:'Concentric Hypertrophy-Mild'},
    {id:3,itemName:'Concentric Hypertrophy-Moderate'},
    {id:4,itemName:'Concentric Hypertrophy-Severe'},  
  ]

  asymmetricHypertrophy = [
    {id:2,itemName:'Asymmetric Hypertrophy-Absent'},
    {id:3,itemName:'Asymmetric Hypertrophy-Present-Anterior'},
    {id:4,itemName:'Asymmetric Hypertrophy-Present-Posterior '},
    {id:5,itemName:'Asymmetric Hypertrophy-Present-Septal'},
    {id:6,itemName:'Asymmetric Hypertrophy-Present-Lateral'},
    {id:7,itemName:'Asymmetric Hypertrophy-Present-Apical'},
  ]
  asymmetricHypertrophyPresent = [
    {id:2,itemName:'Asymmetric Hypertrophy-Present-Anterior'},
    {id:3,itemName:'Asymmetric Hypertrophy-Present-Posterior '},
    {id:4,itemName:'Asymmetric Hypertrophy-Present-Septal'},
    {id:5,itemName:'Asymmetric Hypertrophy-Present-Lateral'},
    {id:6,itemName:'Asymmetric Hypertrophy-Present-Apical'},
  ]

  eccentricHypertrophy= [
    {id:2,itemName:'Eccentric Hypertrophy-Absent'},
    {id:3,itemName:'Eccentric Hypertrophy-Present'},  
  ]

  aneurysm= [
    {id:2,itemName:'Aneurysm-Absent'},
    {id:3,itemName:'Aneurysm-Present-Anterior'},
    {id:4,itemName:'Aneurysm-Present-Posterior'},
    {id:5,itemName:'Aneurysm-Present-Inferior'},
    {id:6,itemName:'Aneurysm-Present-Septal'},
    {id:7,itemName:'Aneurysm-Present-Lateral'},
    {id:8,itemName:'Aneurysm-Present-Apical'},
    {id:9,itemName:'Aneurysm-Present-Other (Specify)'}, 
  ]

  aneurysmPresent= [
    {id:2,itemName:'Aneurysm-Present-Anterior'},
    {id:3,itemName:'Aneurysm-Present-Posterior'},
    {id:4,itemName:'Aneurysm-Present-Inferior'},
    {id:5,itemName:'Aneurysm-Present-Septal'},
    {id:6,itemName:'Aneurysm-Present-Lateral'},
    {id:7,itemName:'Aneurysm-Present-Apical'},
    {id:8,itemName:'Aneurysm-Present-Other (Specify)'}, 
  ]

  pseudoaneurysm= [
    {id:2,itemName:'Pseudoaneurysm-Absent'},
    {id:3,itemName:'Pseudoaneurysm-Present-Anterior'},
    {id:4,itemName:'Pseudoaneurysm-Present-Posterior'},
    {id:5,itemName:'Pseudoaneurysm-Present-Inferior'},
    {id:6,itemName:'Pseudoaneurysm-Present-Septal'},
    {id:7,itemName:'Pseudoaneurysm-Present-Lateral'},
    {id:8,itemName:'Pseudoaneurysm-Present-Apical'},
    {id:9,itemName:'Pseudoaneurysm-Present-Basal'},  
  ]

  pseudoaneurysmPresent= [
    {id:2,itemName:'Pseudoaneurysm-Present-Anterior'},
    {id:3,itemName:'Pseudoaneurysm-Present-Posterior'},
    {id:4,itemName:'Pseudoaneurysm-Present-Inferior'},
    {id:5,itemName:'Pseudoaneurysm-Present-Septal'},
    {id:6,itemName:'Pseudoaneurysm-Present-Lateral'},
    {id:7,itemName:'Pseudoaneurysm-Present-Apical'},
    {id:8,itemName:'Pseudoaneurysm-Present-Basal'}, 
  ]

  systolicfunction = [
    {id:2,itemName:'Global'},  
  ]
  systolicFunctionEjectionFraction =[
    {id:2,itemName:'Global-Ejection Fraction-Normal'},
    {id:3,itemName:'Global-Ejection Fraction-Borderline'},
    {id:4,itemName:'Global-Ejection Fraction-Low Normal'},
    //{id:5,itemName:'Global-Ejection Fraction-Decreased'},
    {id:6,itemName:'Global-Ejection Fraction-Decreased-Mild'},
    {id:7,itemName:'Global-Ejection Fraction-Decreased-Mild-To-Moderate'},
    {id:8,itemName:'Global-Ejection Fraction-Decreased-Moderate'},
    {id:9,itemName:'Global-Ejection Fraction-Decreased-Mild-To-Severe'},
    {id:10,itemName:'Global-Ejection Fraction-Decreased-Severe'},
    {id:11,itemName:'Global-Ejection Fraction-Increased (Hyperdynamic)'},
  ]
  systolicFunctionEjectionFractionDecreased =[
    {id:2,itemName:'Global-Ejection Fraction-Decreased-Mild'},
    {id:3,itemName:'Global-Ejection Fraction-Decreased-Mild-To-Moderate'},
    {id:4,itemName:'Global-Ejection Fraction-Decreased-Moderate'},
    {id:5,itemName:'Global-Ejection Fraction-Decreased-Mild-To-Severe'},
    {id:6,itemName:'Global-Ejection Fraction-Decreased-Severe'},
  ]
  systolicFunctionFractionalShortening =[
    {id:2,itemName:'Global-Fractional Shortening (Basal)-Normal'},
    {id:3,itemName:'Global-Fractional Shortening (Basal)-Decreased'},
    {id:4,itemName:'Global-Fractional Shortening (Basal)-Increased'},
  ]

  systolicFunctionFractionalAreaChanges =[
    {id:2,itemName:'Global-Fractional Area Change-Normal'},
    {id:3,itemName:'Global-Fractional Area Change-Decreased'},
    {id:4,itemName:'Global-Fractional Area Change-Increased'},
  ]

  systolicFunctionDilated =[
    {id:2,itemName:'Global-Dilated (Congestive)-Mild'},
    {id:3,itemName:'Global-Dilated (Congestive)-Mild-To-Moderate'},
    {id:4,itemName:'Global-Dilated (Congestive)-Moderate'},
    {id:5,itemName:'Global-Dilated (Congestive)-Mild-To-Severe'},
    {id:6,itemName:'Global-Dilated (Congestive)-Severe'},
  ]

  regional =[
    {id:2,itemName:'Regional-Normal'},
    {id:3,itemName:'Regional-Hypokinetic'},
    {id:4,itemName:'Regional-Akineticase Model'},
    {id:5,itemName:'Regional-Dyskinetic'},
    {id:6,itemName:'Regional-Scar/Thinning'},
    {id:7,itemName:'Regional-Not Seen'}, 
  ]

  abnormalSeptalMotion = [
    {id:2,itemName:'Abnormal (Paradoxical) Motion Consistent With Right Ventricular Volume Overload and / Or Elevated RV End-Diastolic Pressure. '},
    {id:3,itemName:'Abnormal (Paradoxical) Motion Consistent With Post-Operative Status'},
    {id:4,itemName:'Abnormal (Paradoxical) Motion Consistent With Left Bundle Branch Block'},
    {id:5,itemName:'Abnormal (Paradoxical) Motion Consistent With Rv Pacemaker'},
    {id:6,itemName:'Abnormal (Paradoxical) Motion Due To Pre-Excitation'},
    {id:7,itemName:'Flattened In Diastole (D Shaped Left Ventricle) Consistent With Right Ventricular Volume Overload'},
    {id:8,itemName:'Flattened In Systole Consistent With Right Ventricular Pressure Overload'},
    {id:9,itemName:'Flattened In Systole And Diastole Consistent With Right Ventricular Pressure And Volume Overload'},
    {id:10,itemName:'Septal Bounce Consistent With Constructive Physiology'},
    {id:11,itemName:'Excessive Respiratory Change – Consider Tamponade, Ventilation Related Etc.'},
    {id:12,itemName:'Other (Specify)'},    
  ]


  diastolicFilling = [
    {id:2,itemName:'Normal-For Age'},
    {id:3,itemName:'Abnormal-Pattern'},
    {id:4,itemName:'Abnormal-Elevated LV Filling Pressure'},    
  ]

  diastolicFillingAbnormalPattern = [
    {id:2,itemName:'Abnormal-Pattern-Impaired Relation'},
    {id:3,itemName:'Abnormal-Pattern-Pseudo normal'},
    {id:4,itemName:'Abnormal-Pattern-Restrictive'},  
  ]

  diastolicFillingAbnormalLvFilling = [
    {id:2,itemName:'Abnormal-Elevated LV Filling Pressure-Absent'},
    {id:3,itemName:'Abnormal-Elevated LV Filling Pressure-Present-Elevated Mean Left Atrial Pressure (LAP)'},
    {id:4,itemName:'Abnormal-Elevated LV Filling Pressure-Present-Elevated LV En-Diastolic Pressure (LVEDP)'},
    {id:5,itemName:'Abnormal-Elevated LV Filling Pressure-Present-Both Elevated Lap And LVEDP'},    
  ]
   

  myocardialInfractionAnterior = [
    {id:2,itemName:'Anterior-Small'},
    {id:3,itemName:'Anterior-Small-To-Moderate'},
    {id:4,itemName:'Anterior-Moderate'},
    {id:5,itemName:'Anterior-Moderate-To-Large'},
    {id:6,itemName:'Anterior-Large'},  
  ]

  myocardialInfractionPosterior = [
    {id:2,itemName:'Posterior-Small'},
    {id:3,itemName:'Posterior-Small-To-Moderate'},
    {id:4,itemName:'Posterior-Moderate'},
    {id:5,itemName:'Posterior-Moderate-To-Large'},
    {id:6,itemName:'Posterior-Large'},
  ]

  myocardialInfractionInferior = [
    {id:2,itemName:'Inferior-Small'},
    {id:3,itemName:'Inferior-Small-To-Moderate'},
    {id:4,itemName:'Inferior-Moderate'},
    {id:5,itemName:'Inferior-Moderate-To-Large'},
    {id:6,itemName:'Inferior-Large'},
  ]

  myocardialInfractionLateral = [
    {id:2,itemName:'Lateral-Small'},
    {id:3,itemName:'Lateral-Small-To-Moderate'},
    {id:4,itemName:'Lateral-Moderate'},
    {id:5,itemName:'Lateral-Moderate-To-Large'},
    {id:6,itemName:'Lateral-Large'},  
  ]

  myocardialInfractionAnteroseptal = [
    {id:2,itemName:'Anteroseptal-Small'},
    {id:3,itemName:'Anteroseptal-Small-To-Moderate'},
    {id:4,itemName:'Anteroseptal-Moderate'},
    {id:5,itemName:'Anteroseptal-Moderate-To-Large'},
    {id:6,itemName:'Anteroseptal-Large'},
  ]

  myocardialInfractionApical = [
    {id:2,itemName:'Apical-Small'},
    {id:3,itemName:'Apical-Small-To-Moderate'},
    {id:4,itemName:'Apical-Moderate'},
    {id:5,itemName:'Apical-Moderate-To-Large'},
    {id:6,itemName:'Apical-Large'}, 
  ]

  myocardialInfractionAnteroApical = [
    {id:2,itemName:'Antero-Apical-Small'},
    {id:3,itemName:'Antero-Apical-Small-To-Moderate'},
    {id:4,itemName:'Antero-Apical-Moderate'},
    {id:5,itemName:'Antero-Apical-Moderate-To-Large'},
    {id:6,itemName:'Antero-Apical-Large'},
  ]
  myocardialInfractionPosteroLateral = [
    {id:2,itemName:'Postero-Lateral-Small'},
    {id:3,itemName:'Postero-Lateral-Small-To-Moderate'},
    {id:4,itemName:'Postero-Lateral-Moderate'},
    {id:5,itemName:'Postero-Lateral-Moderate-To-Large'},
    {id:6,itemName:'Postero-Lateral-Large'}, 
  ]
  myocardialInfractionOther = [     
    {id:2,itemName:'Other (Specify)-Small'},
    {id:3,itemName:'Other (Specify)-Small-To-Moderate'},
    {id:4,itemName:'Other (Specify)-Moderate'},
    {id:5,itemName:'Other (Specify)-Moderate-To-Large'},
    {id:6,itemName:'Other (Specify)-Large'}, 
  ]

  thrombus = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'}
  ]
  thrombusPresentSize = [
    {id:2,itemName:'Present-Size-Small'},
    {id:3,itemName:'Present-Size-Moderate'},
    {id:4,itemName:'Present-Size-Large'},
  ]
  thrombusLocation = [
    {id:5,itemName:'Present-Location-Apical'},
    {id:6,itemName:'Present-Location-Basal'},
    {id:7,itemName:'Present-Location-Lateral'},
    {id:8,itemName:'Present-Location-Septal'},   
  ]
  thrombusShape = [   
    {id:2,itemName:'Present-Shape-Flat (Mural)'},
    {id:3,itemName:'Present-Shape-Protruding'},
    {id:4,itemName:'Present-Shape-Pedunculated'},
    {id:5,itemName:'Present-Shape-Spherical'},
    {id:6,itemName:'Present-Shape-Regular'},
    {id:7,itemName:'Present-Shape-Irregular'},
    {id:8,itemName:'Present-Shape-Multilobular'},
    {id:9,itemName:'Present-Shape-Other (Specify)'},
  ]
  thrombusTexture = [   
    {id:2,itemName:'Present-Texture-Solid'},
    {id:3,itemName:'Present-Texture-Layered'},
    {id:4,itemName:'Present-Texture-Hypoechoic Interior (Cystic)'},
    {id:5,itemName:'Present-Texture-Hyperechoic'},
    {id:6,itemName:'Present-Texture-Calcified'}
  ]
  thrombusMobility = [
    {id:2,itemName:'Present-Mobility-Mobile'},
    {id:3,itemName:'Present-Mobility-Fixed (Sessile)'}
  ]
  thrombusDimensions = [
    {id:2,itemName:'Present-Dimensions'},
  ]
  mass = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},       
  ]

  massPresentSize = [
    {id:2,itemName:'Present-Size-Small'},
    {id:3,itemName:'Present-Size-Moderate'},
    {id:4,itemName:'Present-Size-Large'}   
  ]

  massPresentLocation = [   
    {id:2,itemName:'Present-Location-Apical'},
    {id:3,itemName:'Present-Location-Basal'},
    {id:4,itemName:'Present-Location-Septal'},
    {id:5,itemName:'Present-Location-Lateral'},
    {id:6,itemName:'Present-Location-Intramyocardial'},
    {id:7,itemName:'Present-Location-Intracavitary'},     
  ]
  massPresentShape = [   
    {id:2,itemName:'Present-Shape-Flat (Mural'},
    {id:3,itemName:'Present-Shape-Protruding'},
    {id:4,itemName:'Present-Shape-Pedunculated'},
    {id:5,itemName:'Present-Shape-Papillary'},
    {id:6,itemName:'Present-Shape-Spherical'},
    {id:7,itemName:'Present-Shape-Regular'},
    {id:8,itemName:'Present-Shape-Irregular'},
    {id:9,itemName:'Present-Shape-Multilobular'},
    {id:10,itemName:'Present-Shape-Frondlike'},
    {id:11,itemName:'Present-Shape-Infiltrating'}    
  ]

  massPresentTexture = [ 
    {id:2,itemName:'Present-Texture-Solid'},
    {id:3,itemName:'Present-Texture-Layered'},
    {id:4,itemName:'Present-Texture-Hypoechoic Interior (Cystic)'},
    {id:5,itemName:'Present-Texture-Hyperechoic'},
    {id:6,itemName:'Present-Texture-Calcified'}   
  ]
  massPresentMobility = [   
    {id:2,itemName:'Present-Mobility-Mobile'},
    {id:3,itemName:'Present-Mobility-Fixed (Sessile)'},    
  ]

  massPresentDimensions = [   
    {id:2,itemName:'Present-Dimensions'},    
  ]
  ventricularSeptalDefect = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},   
  ]
  ventricularSeptalDefectPresentLocation = [
    {id:2,itemName:'Present-Location-Membranous (Infracristal)'},
    {id:3,itemName:'Present-Location-Infundibular (Supracristal)'},
    {id:4,itemName:'Present-Location-Inlet'},
    {id:5,itemName:'Present-Location-Muscular'},
    {id:6,itemName:'Present-Location-Multiple -Designate'},   
  ]
  ventricularSeptalDefectPresentSize = [
    {id:2,itemName:'Present-Size-Small'},
    {id:3,itemName:'Present-Size-Moderate'},
    {id:4,itemName:'Present-Size-Large'},
    {id:5,itemName:'Present-Size-Dimensions'}, 
  ]

  ventricularSeptalDefectPresentShunt = [
    {id:2,itemName:'Present-Shunt-Left-To-Right'},
    {id:3,itemName:'Present-Shunt-Right-To-Left'},
    {id:4,itemName:'Present-Shunt-Bidirectional'},
    {id:5,itemName:'Present-Shunt-Qp:Qs Ratio'},    
  ]


  leftVentricleObservationObject = {
    cavitySize: [],
    wallThickness: [],
    ventricularMass: [],
    ventricularShape: [],
    concentricHypertrophy: [],
    asymmetricHypertrophy: [],
    //asymmetricHypertrophyPresent: [],
    eccentricHypertrophy: [],
    aneurysm: [],
    //aneurysmPresent: [],
    pseudoaneurysm: [],
    //pseudoaneurysmPresent: [],
    //systolicfunction: [],
    systolicFunctionEjectionFraction: [],
    systolicFunctionEjectionFractionDecreased: [],
    systolicFunctionFractionalShortening: [],
    systolicFunctionFractionalAreaChanges: [],
    systolicFunctionDilated: [],
    regional: [],
    abnormalSeptalMotion: [],
    diastolicFilling: [],
    diastolicFillingAbnormalPattern: [],
    diastolicFillingAbnormalLvFilling: [],
    myocardialInfractionAnterior: [],
    myocardialInfractionPosterior: [],
    myocardialInfractionInferior: [],
    myocardialInfractionLateral: [],
    myocardialInfractionAnteroseptal: [],
    myocardialInfractionApical: [],
    myocardialInfractionAnteroApical: [],
    myocardialInfractionPosteroLateral: [],
    myocardialInfractionOther: [],
    thrombus: [],
    thrombusPresentSize: [],
    thrombusLocation: [],
    thrombusShape: [],
    thrombusTexture: [],
    thrombusMobility: [],
    thrombusDimensions: [],
    mass: [],
    massPresentSize: [],
    massPresentLocation: [],
    massPresentShape: [],
    massPresentTexture: [],
    massPresentMobility: [],
    massPresentDimensions: [],
    ventricularSeptalDefect: [],
    ventricularSeptalDefectPresentLocation: [],
    ventricularSeptalDefectPresentSize: [],
    ventricularSeptalDefectPresentShunt: [],    
  }
  
  /////////////////////////////////////////////

  selectCavitySize: [];
selectWallThickness: [];
//wallthicknessvalue: [];
selectVentricularMass: [];
//ventricularLvMassvalue: [];
selectVentricularShape: [];
selectConcentricHypertrophy: [];
selectAsymmetricHypertrophy: [];
selectEccentricHypertrophy: [];
selectAneurysm: [];
//VentricularShapeAneurysmvalue: [];
selectPseudoaneurysm: [];
selectSystolicFunctionEjectionFraction: [];
selectsystolicFunctionFractionalShortening: [];
selectSystolicFunctionFractionalAreaChanges: [];
selectSystolicFunctionDilated: [];
selectRegional: [];
selectAbnormalSeptalMotion: [];
//abnormalSeptalMotionOtherValue: [];
selectMyocardialInfractionAnterior: [];
selectMyocardialInfractionPosterior: [];
selectMyocardialInfractionInferior: [];
selectMyocardialInfractionLateral: [];
selectMyocardialInfractionAnteroseptal: [];
selectMyocardialInfractionApical: [];
selectMyocardialInfractionAnteroApical: [];
selectMyocardialInfractionPosteroLateral: [];
selectMyocardialInfractionOther: [];
//myocardialInfractionOtherValue: [];
selectDiastolicFilling: [];
selectDiastolicFillingAbnormalPattern: [];
selectDiastolicFillingAbnormalLvFilling: [];
selectThrombus: [];
selectThrombusPresentSize: [];
selectThrombusLocation: [];
selectThrombusShape: [];
thrombusShapeOthervalue: [];
selectThrombusTexture: [];
selectThrombusMobility: [];
selectThrombusDimensions: [];
//thrombusDimensionsvalue: [];
selectMass: [];
selectMassPresentSize: [];
selectMassPresentLocation: [];
selectMassPresentShape: [];
selectMassPresentTexture: [];
selectMassPresentMobility: [];
selectMassPresentDimensions: [];
//massPresentDimensionsvalue: [];
selectVentricularSeptalDefect: [];
selectVentricularSeptalDefectPresentLocation: [];
selectVentricularSeptalDefectPresentSize: [];
selectVentricularSeptalDefectPresentShunt: [];
//ventricularSeptalDefectPresentShuntValue: [];
  ////////////////////////////////////////////


  settings= {};
  
  obtype: string;
  data : any[] = [];
  
  wallthickness:string;
  updform = {
   selectCavitySize:'',
    selectWallThickness:'',
    wallthicknessvalue:'',
    selectVentricularMass:'',
    ventricularLvMassvalue:'',
    selectVentricularShape:'',
    selectConcentricHypertrophy:'',
    selectAsymmetricHypertrophy:'',
    selectEccentricHypertrophy:'',
    selectAneurysm:'',
    VentricularShapeAneurysmvalue:'',
    selectPseudoaneurysm:'',
    selectSystolicFunctionEjectionFraction:'',
    selectsystolicFunctionFractionalShortening:'',
    selectSystolicFunctionFractionalAreaChanges:'',
    selectSystolicFunctionDilated:'',
    selectRegional:'',
    selectAbnormalSeptalMotion:'',
    abnormalSeptalMotionOtherValue:'',
    selectMyocardialInfractionAnterior:'',
    selectMyocardialInfractionPosterior:'',
    selectMyocardialInfractionInferior:'',
    selectMyocardialInfractionLateral:'',
    selectMyocardialInfractionAnteroseptal:'',
    selectMyocardialInfractionApical:'',
    selectMyocardialInfractionAnteroApical:'',
    selectMyocardialInfractionPosteroLateral:'',
    selectMyocardialInfractionOther:'',
    myocardialInfractionOtherValue:'',
    selectDiastolicFilling:'',
    selectDiastolicFillingAbnormalPattern:'',
    selectDiastolicFillingAbnormalLvFilling:'',
    selectThrombus:'',
    selectThrombusPresentSize:'',
    selectThrombusLocation:'',
    selectThrombusShape:'',
    thrombusShapeOthervalue:'',
    selectThrombusTexture:'',
    selectThrombusMobility:'',
    selectThrombusDimensions:'',
    thrombusDimensionsvalue:'',
    selectMass:'',
    selectMassPresentSize:'',
    selectMassPresentLocation:'',
    selectMassPresentShape:'',
    selectMassPresentTexture:'',
    selectMassPresentMobility:'',
    selectMassPresentDimensions:'',
    massPresentDimensionsvalue:'',
    selectVentricularSeptalDefect:'',
    selectVentricularSeptalDefectPresentLocation:'',
    selectVentricularSeptalDefectPresentSize:'',
    selectVentricularSeptalDefectPresentShunt:'',
    ventricularSeptalDefectPresentShuntValue:'',
  }


  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

    this.loginService.observationsGetAllByPatient().subscribe(data => {
      console.log(data)
    }, error => console.log(error));
  


  }


  
  onOptionsSelected = (key,itemName)  => {
    this.leftVentricleObservationObject[key] = itemName
  }

  saveLeftVentricleValueData = () => {

     //save function
  //console.log(this.leftVentricleObservationObject)
 
    this.leftVentricleObservationObject = {
      cavitySize: this.selectCavitySize,
      wallThickness: this.selectWallThickness,
      ventricularMass: this.selectVentricularMass,
      ventricularShape: this.selectVentricularShape,
      concentricHypertrophy: this.selectConcentricHypertrophy,
      asymmetricHypertrophy: this.selectAsymmetricHypertrophy,
      //asymmetricHypertrophyPresent: this.selectAsymmetricHypertrophy,
      eccentricHypertrophy: this.selectEccentricHypertrophy,
      aneurysm: this.selectAneurysm,
      //aneurysmPresent: this.selectAneurysm,
      pseudoaneurysm: this.selectPseudoaneurysm,
      //pseudoaneurysmPresent: this.selectPseudoaneurysm,
      //systolicfunction: ,
      systolicFunctionEjectionFraction: this.systolicFunctionEjectionFraction,
      systolicFunctionEjectionFractionDecreased: this.systolicFunctionEjectionFractionDecreased,
      systolicFunctionFractionalShortening: this.selectsystolicFunctionFractionalShortening,
      systolicFunctionFractionalAreaChanges: this.selectSystolicFunctionFractionalAreaChanges,
      systolicFunctionDilated: this.selectSystolicFunctionDilated,
      regional: this.selectRegional,
      abnormalSeptalMotion: this.selectAbnormalSeptalMotion,
      diastolicFilling: this.selectDiastolicFilling,
      diastolicFillingAbnormalPattern: this.selectDiastolicFillingAbnormalPattern,
      diastolicFillingAbnormalLvFilling: this.selectDiastolicFillingAbnormalLvFilling,
      myocardialInfractionAnterior: this.selectMyocardialInfractionAnterior,
      myocardialInfractionPosterior: this.selectMyocardialInfractionPosterior,
      myocardialInfractionInferior: this.selectMyocardialInfractionInferior,
      myocardialInfractionLateral: this.selectMyocardialInfractionLateral,
      myocardialInfractionAnteroseptal: this.selectMyocardialInfractionAnteroseptal,
      myocardialInfractionApical: this.selectMyocardialInfractionApical,
      myocardialInfractionAnteroApical: this.selectMyocardialInfractionAnteroApical,
      myocardialInfractionPosteroLateral: this.selectMyocardialInfractionPosteroLateral,
      myocardialInfractionOther: this.selectMyocardialInfractionOther,
      thrombus: this.selectThrombus,
      thrombusPresentSize: this.selectThrombusPresentSize,
      thrombusLocation: this.selectThrombusLocation,
      thrombusShape: this.selectThrombusShape,
      thrombusTexture: this.selectThrombusTexture,
      thrombusMobility: this.selectThrombusMobility,
      thrombusDimensions: this.selectThrombusDimensions,
      mass: this.selectMass,
      massPresentSize: this.selectMassPresentSize,
      massPresentLocation: this.selectMassPresentLocation,
      massPresentShape: this.selectMassPresentShape,
      massPresentTexture: this.selectMassPresentTexture,
      massPresentMobility: this.selectMassPresentMobility,
      massPresentDimensions: this.selectMassPresentDimensions,
      ventricularSeptalDefect: this.selectVentricularSeptalDefect,
      ventricularSeptalDefectPresentLocation: this.selectVentricularSeptalDefectPresentLocation,
      ventricularSeptalDefectPresentSize: this.selectVentricularSeptalDefectPresentSize,
      ventricularSeptalDefectPresentShunt: this.selectVentricularSeptalDefectPresentShunt,
    }

  const objectManagementReq = {
    "value": this.leftVentricleObservationObject
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
