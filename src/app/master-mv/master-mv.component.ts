import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-mv',
  templateUrl: './master-mv.component.html',
  styleUrls: ['./master-mv.component.scss']
})
export class MasterMvComponent implements OnInit {

 
  mitralValve=[
    {id:2,itemName:'Mitral Valve-Structure/Function'},
    {id:3,itemName:'Mitral Valve-Mitral Stenosis'},
    {id:4,itemName:'Mitral Valve-Mitral Regurgitation'},
  ]
  
  x= [1,2,3,5]
  
  structureOrFunction = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Rheumatic'},
    {id:4,itemName:'Myxomatous (Redundant)'},
    {id:5,itemName:'Prolapse'},
    {id:6,itemName:'Prolapse-Holosystolic'},
    {id:7,itemName:'Prolapse-Latesystolic'},
    {id:8,itemName:'Prolapse-Maximum Degree Of Prolapse'}, 
    {id:9,itemName:'Increased E point Septal Separation'},
    {id:10,itemName:'Mitral PreSystolic Closure'},
    {id:11,itemName:'Interrupted AC Closure(B-notch)'},
    {id:12,itemName:'Status-Post Mitral annual Ring Insertion'},
  
  ]
  prolapse=[
    {id:2,itemName:'Prolapse-Anterior Leaflet'},
    {id:3,itemName:'Prolapse-Posterior Leaflet'},
    {id:4,itemName:'Prolapse-Holosystolic'},
    {id:5,itemName:'Prolapse-Latesystolic'},
    {id:6,itemName:'Prolapse-Maximum Degree Of Prolapse'},  
  ]
  prolapseAnteriorLeaflet=[
    {id:2,itemName:'Prolapse-Anterior Leaflet-Mild'},
    {id:3,itemName:'Prolapse-Anterior Leaflet-Moderate'},
    {id:4,itemName:'Prolapse-Anterior Leaflet-Severe'},
    {id:5,itemName:'Prolapse-Anterior Leaflet-Medial Segment'},
    {id:6,itemName:'Prolapse-Anterior Leaflet-Middle Segment'},
    {id:7,itemName:'Prolapse-Anterior Leaflet-Lateral Segment'},
    {id:8,itemName:'Prolapse-Anterior Leaflet-Multiple Segments'},
    //{id:9,itemName:'Prolapse-Anterior Leaflet-Describe'},//text-box
  ]
  prolapsePosteriorLeaflet=[
    {id:2,itemName:'Prolapse-Posterior Leaflet-Mild'},
    {id:3,itemName:'Prolapse-Posterior Leaflet-Moderate'},
    {id:4,itemName:'Prolapse-Posterior Leaflet-Severe'},
    {id:5,itemName:'Prolapse-Posterior Leaflet-Medical Scallop'},
    {id:6,itemName:'Prolapse-Posterior Leaflet-Middle Scallop"'},
    {id:7,itemName:'Prolapse-Posterior Leaflet-Lateral Scallop'},
    {id:8,itemName:'Prolapse-Posterior Leaflet-Multiple Scallops'},
    //{id:9,itemName:'Prolapse-Posterior Leaflet-Describe'},//text-box
  ]
  flailLeaflet=[
    {id:2,itemName:'Flail Leaflet(S)-Anterior Leaflet'},
    {id:3,itemName:'Flail Leaflet(S)-Posterior Leaflet'},
  ]
  flailLeafletAnterior=[
    {id:2,itemName:'Flail Leaflet(S)-Anterior Leaflet-Mild'},
    {id:3,itemName:'Flail Leaflet(S)-Anterior Leaflet-Moderate'},
    {id:4,itemName:'Flail Leaflet(S)-Anterior Leaflet-Severe'},
    {id:5,itemName:'Flail Leaflet(S)-Anterior Leaflet-Medical Segment'},
    {id:6,itemName:'Flail Leaflet(S)-Anterior Leaflet-Middle Segment'},
    {id:7,itemName:'Flail Leaflet(S)-Anterior Leaflet-Lateral Segment'},
    {id:8,itemName:'Flail Leaflet(S)-Anterior Leaflet-Multiple Segments'},
  ]
  flailLeafletPosterior=[
    {id:2,itemName:'Flail Leaflet(S)-Posterior Leaflet-Mild'},
    {id:3,itemName:'Flail Leaflet(S)-Posterior Leaflet-Moderate'},
    {id:4,itemName:'Flail Leaflet(S)-Posterior Leaflet-Severe'},
    {id:5,itemName:'Flail Leaflet(S)-Posterior Leaflet-Medical Scallop'},
    {id:6,itemName:'Flail Leaflet(S)-Posterior Leaflet-Middle Scallop'},
    {id:7,itemName:'Flail Leaflet(S)-Posterior Leaflet-Lateral Scallop'},
    {id:8,itemName:'Flail Leaflet(S)-Posterior Leaflet-Multiple Scallop'},
  ]
  rupturedChordae=[
    {id:2,itemName:'Ruptured Chordae-Anterior Leaflet'},
    {id:3,itemName:'Ruptured Chordae-Posterior Leaflet'},
  ]
  rupturedChordaeAnterior=[
    {id:2,itemName:'Ruptured Chordae-Anterior Leaflet-Mild'},
    {id:3,itemName:'Ruptured Chordae-Anterior Leaflet-Moderate'},
    {id:4,itemName:'Ruptured Chordae-Anterior Leaflet-Severe'},
  ]
  rupturedChordaePosterior=[
    {id:2,itemName:'Ruptured Chordae-Posterior leaflet-Mild'},
    {id:3,itemName:'Ruptured Chordae-Posterior leaflet-Modeate'},
    {id:4,itemName:'Ruptured Chordae-Posterior leaflet-Severe'},
    {id:5,itemName:'Ruptured Chordae-Posterior leaflet-Others'},
  ]
  otherChordalDisease=[
    {id:2,itemName:'Other chordal disease-Shortening'},
    {id:3,itemName:'Other chordal disease-Fusion'},
    {id:4,itemName:'Other chordal disease-Others'},
    {id:5,itemName:'Other chordal disease-Involving anterior leaflet'},  
    {id:6,itemName:'Other chordal disease-Involving posterior leaflet'},
    {id:7,itemName:'Other chordal disease-Involving both leaflets'},
  ]
  leafletElongation=[
    {id:2,itemName:'Leaflet elongation-Anterior leaflet'},
    {id:3,itemName:'Leaflet elongation-Posterior leaflet'},
  ]
  leafletElongationAnterior=[
    {id:2,itemName:'Leaflet elongation-Anterior leaflet-Mild'},
    {id:3,itemName:'Leaflet elongation-Anterior leaflet-Moderate'},
    {id:4,itemName:'Leaflet elongation-Anterior leaflet-Severe'},
  ]
  leafletElongationPosterior=[
    {id:2,itemName:'Leaflet elongation-Posterior leaflet-Mild'},
    {id:3,itemName:'Leaflet elongation-Posterior leaflet-Moderate'},
    {id:4,itemName:'Leaflet elongation-Posterior leaflet-Severe'},
  ]
  leafletThickeningOrCalcification=[
    {id:2,itemName:'Leaflet thickening/calcification-Anterior leaflet'},
    {id:3,itemName:'Leaflet thickening/calcification-Posterior leaflet'},
  ]
  
  leafletThickeningAnterior=[
    {id:2,itemName:'Leaflet thickening/calcification-Anterior leaflet-Mild'},
    {id:3,itemName:'Leaflet thickening/calcification-Anterior leaflet-Moderate'},
    {id:4,itemName:'Leaflet thickening/calcification-Anterior leaflet-Severe'},
  ]
  leafletThickeningPosteriior=[
    {id:2,itemName:'Leaflet thickening/calcification-Posterior leaflet-Mild'},
    {id:3,itemName:'Leaflet thickening/calcification-Posterior leaflet-Moderate'},
    {id:4,itemName:'Leaflet thickening/calcification-Posterior leaflet-Severe'},
  ]
  // leafletMobility=[
  //   {id:2,itemName:'Leaflet mobility-Normal'},
  //   {id:3,itemName:'Leaflet mobility-Abnormal-Anterior mitral leaflet'},
  //   {id:4,itemName:'Leaflet mobility-Abnormal-Posterior mitral leaflet'},
  // ]
  leafletMobility=[
    {id:2,itemName:'Leaflet mobility-Normal'},
    {id:3,itemName:'Leaflet mobility-Abnormal'}
  ]
  leafletMobilityAbnormalAnterior=[
    {id:2,itemName:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Mildly decreased mobility'},
    {id:3,itemName:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Moderately decreased mobility'},
    {id:4,itemName:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Immobile'},
  ]
  leafletMobilityAbnormalPosterior=[
    {id:2,itemName:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Mildly decreased mobility'},
    {id:3,itemName:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Moderately decreased mobility'},
    {id:4,itemName:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Immobile'},
  ]
  annularCalicification=[
    {id:2,itemName:'Annular calcification-Mild'},
    {id:3,itemName:'Annular calcification-Moderate'},
    {id:4,itemName:'Annular calcification-Severe'},
  ]

  subvalvulardiseaseCalicification=[
    {id:2,itemName:'Subvalvular disease-Calicification-Mild'},
    {id:3,itemName:'Subvalvular disease-Calicification-Moderate'},
    {id:4,itemName:'Subvalvular disease-Calicification-Severe'},
  ]
  subvalvulardiseaseThickCalicification=[
    {id:2,itemName:'Subvalvular disease-Thicknening/fibrosis-Mild'},
    {id:3,itemName:'Subvalvular disease-Thicknening/fibrosis-Moderate'},
    {id:4,itemName:'Subvalvular disease-Thicknening/fibrosis-Severe'},
  ]
  
  annularAnnularDilatation=[
    {id:2,itemName:'Subvalvular disease-AnnularDilatation-Mild'},
    {id:3,itemName:'Subvalvular disease-AnnularDilatation-Moderate'},
    {id:4,itemName:'Subvalvular disease-AnnularDilatation-Severe'},
  ]

  vegetation=[
    {id:2,itemName:'Vegetation-Anterior Leaflet'},
    {id:3,itemName:'Vegetation-Posterior Leaflet'},
  ]
  vegetationAnterior=[
    {id:2,itemName:'Vegetation-Anterior Leaflet-Non Mobile'},
    {id:3,itemName:'Vegetation-Anterior Leaflet-Mobile'},
    {id:4,itemName:'Vegetation-Anterior Leaflet-Pendunculated and Mobile'},
    //{id:5,itemName:'Vegetation-Anterior Leaflet-Size'},
    {id:5,itemName:'Vegetation-Anterior Leaflet-Size-Small'},
    {id:6,itemName:'Vegetation-Anterior Leaflet-Size-Moderate'},
    {id:7,itemName:'Vegetation-Anterior Leaflet-Size-Large'},
    {id:8,itemName:'Vegetation-Anterior Leaflet-Size-Dimensions'},//text-box
    {id:9,itemName:'Vegetation-Anterior Leaflet-Size-Others(Specify)'},
  ]
  vegetationAnteriorSize=[
    {id:2,itemName:'Vegetation-Anterior Leaflet-Size-Small'},
    {id:3,itemName:'Vegetation-Anterior Leaflet-Size-Moderate'},
    {id:4,itemName:'Vegetation-Anterior Leaflet-Size-Large'},
    {id:5,itemName:'Vegetation-Anterior Leaflet-Size-Dimensions'},//text-box
    {id:6,itemName:'Vegetation-Anterior Leaflet-Size-Others(Specify)'},
  ]
  vegetationPosterior=[
    {id:2,itemName:'Vegetation-Posterior Leaflet-Non Mobile'},
    {id:3,itemName:'Vegetation-Posterior Leaflet-Mobile'},
    {id:4,itemName:'Vegetation-Posterior Leaflet-Pendunculated and Mobile'},
    //{id:5,itemName:'Vegetation-Posterior Leaflet-Size'},
    {id:5,itemName:'Vegetation-Posterior Leaflet-Size-Small'},
    {id:6,itemName:'Vegetation-Posterior Leaflet-Size-Moderate'},
    {id:7,itemName:'Vegetation-Posterior Leaflet-Size-Large'},
    {id:8,itemName:'Vegetation-Posterior Leaflet-Dimensions'},
    {id:9,itemName:'Vegetation-Posterior Leaflet-Others(Specify)'},
  ]
  vegetationPosteriorSize=[
    {id:2,itemName:'Vegetation-Posterior Leaflet-Size-Small'},
    {id:3,itemName:'Vegetation-Posterior Leaflet-Size-Moderate'},
    {id:4,itemName:'Vegetation-Posterior Leaflet-Size-Large'},
  ]
  abscess=[
    {id:2,itemName:'Abscess-Location'},
    {id:3,itemName:'Abscess-Size'},
  ]
  abscessLocation=[
    {id:2,itemName:'Abscess-Location-Anterior Leaflet/Annulus'},
    {id:3,itemName:'Abscess-Location-Posterior Leaflet/Annulus'},
    {id:4,itemName:'Abscess-Location-Litravalvular (pars) Fibrosa'},
  ]
  abscessSize=[
    {id:2,itemName:'Abscess-Size-Small'},
    {id:3,itemName:'Abscess-Size-Moderate'},
    {id:4,itemName:'Abscess-Size-Large'},
    {id:5,itemName:'Abscess-Size-Dimensions'},//text-box
  ]
  cleft=[
    {id:2,itemName:'Clefts-Anterior leaflet'},
    {id:3,itemName:'Clefts-Posterior leaflet'},
  ]
  cleftAnterior=[
    {id:2,itemName:'Cleft-Anterior leaflet-Small'},
    {id:3,itemName:'Cleft-Anterior leaflet-Moderate'},
    {id:4,itemName:'Cleft-Anterior leaflet-Large'},
  ]
  cleftPosterior=[
    {id:2,itemName:'Clefts-Posterior leaflet-Small'},
    {id:3,itemName:'Clefts-Posterior leaflet-Moderate'},
    {id:4,itemName:'Clefts-Posterior leaflet-Large'},
  ]
  systolicAnteriorMotion=[
    {id:2,itemName:'Systolic anterior motion-Anterior leaflet'},
    {id:3,itemName:'Systolic anterior motion-Posterior leaflet'},  
    {id:4,itemName:'Systolic anterior motion-Chordal'},
  ]
  systolicAnteriorLeaflet=[
    {id:2,itemName:'Systolic anterior motion-Anterior leaflet-Mild'},
    {id:3,itemName:'Systolic anterior motion-Anterior leaflet-Moderate'},
    {id:4,itemName:'Systolic anterior motion-Anterior leaflet-Large'},
  ]
  systolicPosteriorLeaflet=[
    {id:2,itemName:'Systolic anterior motion-Posterior leaflet-Mild'},
    {id:3,itemName:'Systolic anterior motion-Posterior leaflet-Moderate'},
    {id:4,itemName:'Systolic anterior motion-Posterior leaflet-Large'},
  ]
  systolicChordal=[
    {id:2,itemName:'Systolic anterior motion-Chordal-Mild'},
    {id:3,itemName:'Systolic anterior motion-Chordal-Moderate'},
    {id:4,itemName:'Systolic anterior motion-Chordal-Large'},
  ]
  dialatedAnnulus=[
    //Dimensions
  ]
  diastolicFluttering=[
    {id:2,itemName:'Diastolic Fluttering-Anterior Leaflet'},
    {id:3,itemName:'Diastolic Fluttering-Posterior Leaflet'},
  ]

  prostheticValve=[
    {id:2,itemName:'Prosthetic Valve-Type'},
    {id:3,itemName:'Prosthetic Valve-Abnormality'},
  ]

  // prostheticValve1=[
  //   {id:2,itemName:'Prosthetic Valve-Type-Mechanical'},
  //   {id:3,itemName:'Prosthetic Valve-Type-Bioprosthetic'},
  //   {id:4,itemName:'Prosthetic Valve-Abnormality'},
  // ]
  prostheticValveTypeMechanical=[
    {id:2,itemName:'Prosthetic Valve-Type-Mechanical-Tilting Disk'},
    {id:3,itemName:'Prosthetic Valve-Type-Mechanical-Bileaflet'},
    {id:4,itemName:'Prosthetic Valve-Type-Mechanical-Ball and cage'},
    {id:5,itemName:'Prosthetic Valve-Type-Mechanical-Other (Specify)'},//text-box
    {id:6,itemName:'Prosthetic Valve-Type-Mechanical-Manufacturer'},//text-box
    {id:7,itemName:'Prosthetic Valve-Type-Mechanical-Size'},//text-box
  
  ]
  prostheticValveTypeBioprosthetic=[
    {id:2,itemName:'Prosthetic Valve-Type-Bioprosthetic-Porcine'},
    {id:3,itemName:'Prosthetic Valve-Type-Bioprosthetic-Homograft'},
    {id:4,itemName:'Prosthetic Valve-Type-Bioprosthetic-Pericardial'},
    {id:5,itemName:'Prosthetic Valve-Type-Bioprosthetic-Other (Specify)'},//text-box
    {id:6,itemName:'Prosthetic Valve-Type-Bioprosthetic-Manufacturer'},
    {id:7,itemName:'Prosthetic Valve-Type-Bioprosthetic-Size'},//text-box
  
  ]
  prostheticValveAbnormality=[
    {id:2,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Rocking'},
    {id:3,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Dehiscence'},
    {id:4,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Vegetation (see below)'},
    {id:5,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Thrombus/mass'},
    {id:6,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Stenosis (see below)'},
    {id:7,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Regurgitation(see below)'},
    {id:8,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Pannus'},
    {id:9,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Fistula'},//text-box
    {id:10,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-fracture/perforation'},//text-box
  ]
  prostheticValveAbnormalityRegurgitation=[
  
    {id:2,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Regurgitation-Physiologic'},
    {id:3,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Regurgitation-Prosthetic'},
    {id:4,itemName:'Prosthetic Valve-Abnormality (Findings suggestive of)-Regurgitation-Peri-prosthetic'},
  ]
     
  mitralStenosis=[
    {id:2,itemName:'Mitral Stenosis-Severity'},
    {id:3,itemName:'Mitral Stenosis-Quantitative Measurements(If Mitral Stenosis Present)'},
    {id:4,itemName:'Mitral Stenosis-Status-Post Commissurotomy-Yes'},
    {id:5,itemName:'Mitral Stenosis-Status-Post Commissurotomy-No'},
  ]    
  mitralStenosisSeverity=[
    {id:2,itemName:'Mitral Stenosis-Severity-None'},
    {id:3,itemName:'Mitral Stenosis-Severity-Mild'},
    {id:4,itemName:'Mitral Stenosis-Severity-Mild to Moderate'},
    {id:5,itemName:'Mitral Stenosis-Severity-Moderate'},
    {id:6,itemName:'Mitral Stenosis-Severity-Moderate to Severe'},
    {id:7,itemName:'Mitral Stenosis-Severity-Severe'},
  ]
  mitralStenosisQuantitative=[
    {id:2,itemName:'Mitral Stenosis-Quantitative Measurements-Mitral Valve Area-By Planimetry'},
    {id:3,itemName:'Mitral Stenosis-Quantitative Measurements-Mitral Valve Area-By Doppler Pressure Halftime'},
    {id:4,itemName:'Mitral Stenosis-Quantitative Measurements-Mitral Valve Area-By Other Method(Specify)'},//textbox
    {id:5,itemName:'Mitral Stenosis-Quantitative Measurements-Mean Transmit Velocity(Doppler)'},
    {id:6,itemName:'Mitral Stenosis-Quantitative Measurements-Mean Transmitral Gradient'},
  ]

  mitralStenosisStatus = [
    {id:2,itemName:'Mitral Stenosis-Status-Yes'},
    {id:3,itemName:'Mitral Stenosis-Status-No'},
  ]

  mitralRegurgitation = [
    {id:2,itemName:'Severity'},
    {id:3,itemName:'Jet Direction'},
    {id:4,itemName:'Diastolic Mitral Regurgitation'},
    {id:5,itemName:'Quantitative Measurements (If mitral regurgitation present)'},
  ]
  
  mitralRegurgitationSeverity=[
    {id:2,itemName:'Severity-None'},  
    {id:3,itemName:'Severity-Mild'},
    {id:4,itemName:'Severity-Mild-to-moderate'},
    {id:5,itemName:'Severity-Moderate'},
    {id:6,itemName:'Severity-Moderate-to-severe'},
    {id:7,itemName:'Severity-Severe'},
  ]
  mitralRegurgitationJetDirection=[
    {id:2,itemName:'Jet direction-Anteriorly-directed'},
    {id:3,itemName:'Jet direction-Posteriorly-directed'},
    {id:4,itemName:'Jet direction-Centrally-directed'},
    {id:5,itemName:'Jet direction-Wall-impinging jet'},
    {id:6,itemName:'Jet direction-Impingement on pulmonary veins'},
  ]
  mitralRegurgitationDiastolicMitralRegurgitation=[
    {id:2,itemName:'Diastolic mitral regurgitation-Present'},
    {id:3,itemName:'Diastolic mitral regurgitation-Absent'},
  ]
   mitralRegurgitationQuantitativeMeasurements=[     
    {id:2,itemName:'Quantitative Measurements-Mitral regurgitation jet/left atrial area ratio'},  
    {id:3,itemName:'Quantitative Measurements-Pulmonary venous flow-Normal pulmonary venous flow'},
    {id:4,itemName:'Quantitative Measurements-Pulmonary venous flow-Blunted (decreased) systolic flow'},
    {id:5,itemName:'Quantitative Measurements-Pulmonary venous flow-Systolic flow reversal'},
    {id:6,itemName:'Quantitative Measurements-Mitral regurgitant volume-By pulsed Doppler echo method'},
    {id:7,itemName:'Quantitative Measurements-Mitral regurgitant volume-By PISA color Doppler method'},
    {id:8,itemName:'Quantitative Measurements-Mitral regurgitant fraction-By pulsed Doppler echo method'},
    {id:9,itemName:'Quantitative Measurements-Mitral regurgitant fraction-By PISA color Doppler method'},
    {id:10,itemName:'Quantitative Measurements-Effective mitral regurgitant orifice area-By pulsed Doppler echo method'},
    {id:11,itemName:'Quantitative Measurements-Effective mitral regurgitant orifice area-By PISA color Doppler method'},
    {id:12,itemName:'Quantitative Measurements-Vena contracta width'}//text-box
   ]


  quantitativeMeasurementsPulmonaryVenousFlow=[
    {id:2,itemName:'Quantitative Measurements-Pulmonary venous flow-Normal pulmonary venous flow'},
    {id:3,itemName:'Quantitative Measurements-Pulmonary venous flow-Blunted (decreased) systolic flow'},
    {id:4,itemName:'Quantitative Measurements-Pulmonary venous flow-Systolic flow reversal'},
  ]
  quantitativeMeasurementsMitralRegurgitantVolume=[    
    {id:2,itemName:'Quantitative Measurements-Mitral regurgitant volume-By pulsed Doppler echo method'},
    {id:3,itemName:'Quantitative Measurements-Mitral regurgitant volume-By PISA color Doppler method'},
  ]
  QuantitativeMeasurementsMitralRegurgitantFraction=[
    {id:2,itemName:'Quantitative Measurements-Mitral regurgitant fraction-By pulsed Doppler echo method'},
    {id:3,itemName:'Quantitative Measurements-Mitral regurgitant fraction-By PISA color Doppler method'},
  ]
  
  QuantitativeMeasurementsEffectiveMitralRegurgitantOrificeArea=[
      {id:2,itemName:'Quantitative Measurements-Effective mitral regurgitant orifice area-By pulsed Doppler echo method'},
      {id:3,itemName:'Quantitative Measurements-Effective mitral regurgitant orifice area-By PISA color Doppler method'},
  ]


settings= {};

obtype: string;

updform : any  = {
 
}


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

  onOptionsSelected = (key,value)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = value
    console.log(this.updform);
  }


saveMitralValueData = () => {
  //save function
  document.getElementById("overlay").style.display = "block";
  const objectManagementReq = {
    "value": this.updform
   }
   console.log(objectManagementReq);
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
