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

  mitralStenosis =  [
    {id:1,value:'Select Observation'},
    {id:2,value:'Mitral Stenosis-Severity-None'},
    {id:3,value:'Mitral Stenosis-Severity-Mild'},
    {id:4,value:'Mitral Stenosis-Severity-Mild-to-moderate'},
    {id:5,value:'Mitral Stenosis-Severity-Moderate'},
    {id:6,value:'Mitral Stenosis-Severity-Moderate-to-severe'},
    {id:7,value:'Mitral Stenosis-Quantitative Measurements (If mitral stenosis present)-Mitral valve area-By planimetry'},
    {id:8,value:'Mitral Stenosis-Quantitative Measurements (If mitral stenosis present)-Mitral valve area-By Doppler pressure half-time'},
    {id:9,value:'Mitral Stenosis-Quantitative Measurements (If mitral stenosis present)-Mitral valve area-By other method (Specify)'},
    {id:10,value:'Mitral Stenosis-Quantitative Measurements (If mitral stenosis present)-Mean transmitral velocity (Doppler)'},
    {id:11,value:'Mitral Stenosis-Quantitative Measurements (If mitral stenosis present)-Mean transmitral gradient (Doppler)'},
    {id:12,value:'Mitral Stenosis-Status-postcommissurotomy-Yes'},
    {id:13,value:'Mitral Stenosis-Status-postcommissurotomy-No'}, 
]

structureOrFunction = [
    {id:1,value:'Select Observation'},
    {id:2,value:'Normal'},
    {id:3,value:'Rheumatic'},
    {id:4,value:'Myxomatous (Redundant)'},
    {id:5,value:'Prolapse-Anterior Leaflet-Mild'},
    {id:6,value:'Prolapse-Anterior Leaflet-Moderate'},
    {id:7,value:'Prolapse-Anterior Leaflet-Severe'},
    {id:8,value:'Prolapse-Anterior Leaflet-Medial Segment'},
    {id:9,value:'Prolapse-Anterior Leaflet-Middle Segment'},
    {id:10,value:'Prolapse-Anterior Leaflet-Lateral Segment'},
    {id:11,value:'Prolapse-Anterior Leaflet-Multiple Segments-Describe'},
    {id:12,value:'Prolapse-Posterior Leaflet-Mild'},
    {id:13,value:'Prolapse-Posterior Leaflet-Moderate'},
    {id:14,value:'Prolapse-Posterior Leaflet-Severe'},
    {id:15,value:'Prolapse-Posterior Leaflet-Medical Scallop'},
    {id:16,value:'Prolapse-Posterior Leaflet-Middle Scallop"'},
    {id:17,value:'Prolapse-Posterior Leaflet-Lateral Scallop'},
    {id:18,value:'Prolapse-Posterior Leaflet-Multiple Scallops-Describe'},
    {id:19,value:'Flail Leaflet(S)-Anterior Leaflet-Mild'},
    {id:20,value:'Flail Leaflet(S)-Anterior Leaflet-Moderate'},
    {id:21,value:'Flail Leaflet(S)-Anterior Leaflet-Severe'},
    {id:22,value:'Flail Leaflet(S)-Anterior Leaflet-Medical Segment'},
    {id:23,value:'Flail Leaflet(S)-Anterior Leaflet-Middle Segment'},
    {id:24,value:'Flail Leaflet(S)-Anterior Leaflet-Lateral Segment'},
    {id:25,value:'Flail Leaflet(S)-Posterior Leaflet-Mild'},
    {id:26,value:'Flail Leaflet(S)-Anterior Leaflet-Severe'},
    {id:27,value:'Flail Leaflet(S)-Anterior Leaflet-Medical Scallop'},
    {id:28,value:'Flail Leaflet(S)-Anterior Leaflet-Middle Scallop'},
    {id:29,value:'Flail Leaflet(S)-Anterior Leaflet-Multiple Scallop'},
    {id:30,value:'Ruptured Chordae-Anterior Leaflet-Mild'},
    {id:31,value:'Ruptured Chordae-Anterior Leaflet-Moderate'},
    {id:32,value:'Ruptured Chordae-Anterior Leaflet-Severe'},
    {id:33,value:'Ruptured Chordae-Posterior leaflet-Mild'},
    {id:34,value:'Ruptured Chordae-Posterior leaflet-Modeate'},
    {id:35,value:'Ruptured Chordae-Posterior leaflet-Severe'},
    {id:36,value:'Other chordal disease-Shortening'},
    {id:37,value:'Other chordal disease-Fusion'},
    {id:38,value:'Other chordal disease-Involving anterior leaflet'},
    {id:40,value:'Other chordal disease-Involving posterior leaflet'},
    {id:41,value:'Other chordal disease-Involving both leaflets'},
    {id:42,value:'Leaflet elongation-Anterior leaflet-Mild'},
    {id:43,value:'Leaflet elongation-Anterior leaflet-Moderate'},
    {id:44,value:'Leaflet elongation-Anterior leaflet-Severe'},
    {id:45,value:'Leaflet elongation-Posterior leaflet-Mild'},
    {id:46,value:'Leaflet elongation-Posterior leaflet-Moderate'},
    {id:47,value:'Leaflet elongation-Posterior leaflet-Severe'},
    {id:48,value:'Leaflet thickening/calcification-Anterior leaflet-Mild'},
    {id:49,value:'Leaflet thickening/calcification-Anterior leaflet-Moderate'},
    {id:50,value:'Leaflet thickening/calcification-Anterior leaflet-Severe'},
    {id:51,value:'Leaflet thickening/calcification-Posterior leaflet-Mild'},
    {id:52,value:'Leaflet thickening/calcification-Posterior leaflet-Moderate'},
    {id:53,value:'Leaflet thickening/calcification-Posterior leaflet-Severe'},
    {id:54,value:'Leaflet mobility-Normal'},
    {id:55,value:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Mildly decreased mobility'},
    {id:56,value:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Moderately decreased mobility'},
    {id:57,value:'Leaflet mobility-Abnormal-Anterior mitral leaflet-Immobile'},
    {id:58,value:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Mildly decreased mobility'},
    {id:59,value:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Moderately decreased mobility'},
    {id:60,value:'Leaflet mobility-Abnormal-Posterior mitral leaflet"-Immobile'},
    {id:61,value:'Annular calcification-Mild'},
    {id:62,value:'Annular calcification-Moderate'},
    {id:63,value:'Annular calcification-ModerateSevere'},
    {id:64,value:'Subvalvular disease-Calcification-Mild'},
    {id:65,value:'Subvalvular disease-Calcification-Moderate'},
    {id:66,value:'Subvalvular disease-Calcification-Severe'},
    {id:67,value:'Subvalvular disease-Thickening/fibrosis-Mild'},
    {id:68,value:'Subvalvular disease-Thickening/fibrosis-Moderate'},
    {id:69,value:'Subvalvular disease-Thickening/fibrosis-Severe'},
    {id:70,value:'Annular dilatation-Mild'},
    {id:71,value:'Annular dilatation-Mild-Moderate'},
    {id:72,value:'Annular dilatation-Mild-Severe'},
    {id:73,value:'Vegetation-Mild-Severe'},
    {id:74,value:'Annular dilatation-Anterior leaflet-Non-mobile'},
    {id:75,value:'Annular dilatation-Anterior leaflet-Mobile'},
    {id:76,value:'Annular dilatation-Anterior leaflet-Pedunculated and mobile'},
    {id:77,value:'Annular dilatation-Anterior leaflet-Size-Small'},
    {id:78,value:'Annular dilatation-Anterior leaflet-Size-Moderate'},
    {id:79,value:'Annular dilatation-Anterior leaflet-Size-Large'},
    {id:80,value:'Annular dilatation-Anterior leaflet-Size-Dimensions'},
    {id:81,value:'Annular dilatation-Anterior leaflet-Size-Other (Specify)'},
    {id:82,value:'Abscess-Location-Anterior leaflet/annulus'},
    {id:83,value:'Abscess-Location-Posterior leaflet/annulus'},
    {id:84,value:'Abscess-Size-Small'},
    {id:85,value:'Abscess-Size-Moderate'},
    {id:86,value:'Abscess-Size-Small'},
    {id:87,value:'Abscess-Size-Large'},
    {id:88,value:'Abscess-Size-Dimensions'},
    {id:89,value:'Clefts-Anterior leaflet-Small'},
    {id:90,value:'Clefts-Anterior leaflet-Moderate'},
    {id:91,value:'Clefts-Anterior leaflet-Large'},
    {id:92,value:'Clefts-Posterior leaflet-Small'},
    {id:93,value:'Clefts-Posterior leaflet-Moderate'},
    {id:94,value:'Clefts-Posterior leaflet-Large'},
    {id:95,value:'Systolic anterior motion-Anterior leaflet-Small'},
    {id:96,value:'Systolic anterior motion-Anterior leaflet-Moderate'},
    {id:97,value:'Systolic anterior motion-Anterior leaflet-Large'},
    {id:98,value:'Systolic anterior motion-Posterior leaflet-Small'},
    {id:99,value:'Systolic anterior motion-Posterior leaflet-Moderate'},
    {id:100,value:'Systolic anterior motion-Posterior leaflet-Large'},
    {id:101,value:'Dilated annulus-Dimensions'},
    {id:102,value:'Increased E-point septal separation'},
    {id:103,value:'Mitral pre-systolic closure'},
    {id:104,value:'Interrupted A-C closure (B-notch)'},
    {id:105,value:'Prosthetic Valve-Type-Mechanical-Tilting Disk'},
   {id:106,value:'Prosthetic Valve-Type-Mechanical-Bileaflet'},
   {id:107,value:'Prosthetic Valve-Type-Mechanical-Ball and cage'},
   {id:108,value:'Prosthetic Valve-Type-Mechanical-Other (Specify)'},
   {id:109,value:'Prosthetic Valve-Type-Mechanical-Manufacturer'},
   {id:110,value:'Prosthetic Valve-Type-Mechanical-Size'},
   {id:111,value:'Prosthetic Valve-Type-Bioprosthetic-Porcine'},
   {id:112,value:'Prosthetic Valve-Type-Bioprosthetic-Homograft'},
   {id:113,value:'Prosthetic Valve-Type-Bioprosthetic-Pericardial'},
   {id:114,value:'Prosthetic Valve-Type-Bioprosthetic-Other (Specify)'},
   {id:115,value:'Prosthetic Valve-Type-Bioprosthetic-Manufacturer'},
   {id:116,value:'Prosthetic Valve-Type-Bioprosthetic-Size'},
   {id:117,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Rocking'},
   {id:118,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Dehiscence'},
   {id:119,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Vegetation (see below)'},
   {id:120,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Thrombus/mass'},
   {id:121,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Stenosis (see below)'},
   {id:122,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Regurgitation (see below)-Physiologic'},
   {id:123,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Regurgitation (see below)-Prosthetic'},
   {id:124,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Regurgitation (see below)-Peri-prosthetic'},
   {id:125,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Pannus'},
   {id:126,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Fistula-describe'},
   {id:127,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-fracture/perforation-describe'},
   {id:128,value:'Prosthetic Valve-Type-Abnormality (Findings suggestive of)-Regurgitation (see below)-Physiologic'},
   {id:129,value:'status-post mitral annual ring insertion'},
]

mitralRegurgitation = [
    {id:1,value:'Select Observation'},
    {id:2,value:'Severity-None'},
    {id:3,value:'Severity-Mild'},
    {id:4,value:'Severity-Mild-to-moderate'},
    {id:5,value:'Severity-Moderate'},
    {id:6,value:'Severity-Moderate-to-severe'},
    {id:7,value:'Jet direction-Anteriorly-directed'},
    {id:8,value:'Jet direction-Posteriorly-directed'},
    {id:9,value:'Jet direction-Centrally-directed'},
    {id:10,value:'Jet direction-Anteriorly-Wall-impinging jet'},
    {id:11,value:'Jet direction-Impingement on pulmonary veins'},
    {id:12,value:'Diastolic mitral regurgitation-Present'},
    {id:13,value:'Diastolic mitral regurgitation-Absent'},
    {id:14,value:'Quantitative Measurements (If mitral regurgitation present-Mitral regurgitation jet/left atrial area ratio'},
    {id:15,value:'Quantitative Measurements (If mitral regurgitation present-Pulmonary venous flow-Normal pulmonary venous flow'},
    {id:16,value:'Quantitative Measurements (If mitral regurgitation present-Pulmonary venous flow-Blunted (decreased) systolic flow'},
    {id:17,value:'Quantitative Measurements (If mitral regurgitation present-Pulmonary venous flow-Systolic flow reversal'},
    {id:18,value:'Quantitative Measurements (If mitral regurgitation present-Mitral regurgitant volume-By pulsed Doppler echo method'},
    {id:19,value:'Quantitative Measurements (If mitral regurgitation present-Mitral regurgitant volume-By PISA color Doppler method'},
    {id:20,value:'Quantitative Measurements (If mitral regurgitation present-Mitral regurgitant fraction-By pulsed Doppler echo method'},
    {id:21,value:'FQuantitative Measurements (If mitral regurgitation present-Mitral regurgitant fraction-By PISA color Doppler method'},
    {id:22,value:'Quantitative Measurements (If mitral regurgitation present-Effective mitral regurgitant orifice area-By pulsed Doppler echo method'},
    {id:23,value:'FQuantitative Measurements (If mitral regurgitation present-Effective mitral regurgitant orifice area-By PISA color Doppler method'},
    {id:24,value:'Quantitative Measurements (If mitral regurgitation present-"Vena contracta width'}

]

mitralValueObject = {}
selectMitralRegurgitationValue;
selectstructureOrFunction;
selectmitralStenosis;


constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {

  }

  onOptionsSelected = (key,value)  => {
    this.mitralValueObject[key] = value
    console.log(this.mitralValueObject)
  }

  saveMitralValueData = () => {
    //save function
  console.log(this.mitralValueObject)
  const objectManagementReq = {
    "value": this.mitralValueObject
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
