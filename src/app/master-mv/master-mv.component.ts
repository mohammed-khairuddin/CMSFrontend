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

mitralValueObject = {
  
  //mitralValve: [],
  structureOrFunction: [],
  //prolapse: [],
  prolapseAnteriorLeaflet: [],
  prolapsePosteriorLeaflet: [],
  //flailLeaflet: [],
  flailLeafletAnterior: [],
  flailLeafletPosterior: [],
  //rupturedChordae: [],
  rupturedChordaeAnterior: [],
  rupturedChordaePosterior: [],
  otherChordalDisease: [],
  //leafletElongation: [],
  leafletElongationAnterior: [],
  leafletElongationPosterior: [],
  //leafletThickeningOrCalcification: [],
  leafletThickeningAnterior: [],
  leafletThickeningPosteriior: [],
  leafletMobility: [],
  leafletMobilityAbnormalAnterior: [],
  leafletMobilityAbnormalPosterior: [],
  annularCalicification: [],
  subvalvulardiseaseCalicification: [],
  subvalvulardiseaseThickCalicification: [],
  annularAnnularDilatation: [],
  //vegetation: [],
  vegetationAnterior: [],
  //vegetationAnteriorSize: [],
  vegetationPosterior: [],
  //vegetationPosteriorSize: [],
  //abscess: [],
  abscessLocation: [],
  abscessSize: [],
  //cleft: [],
  cleftAnterior: [],
  cleftPosterior: [],
  //systolicAnteriorMotion: [],
  systolicAnteriorLeaflet: [],
  systolicPosteriorLeaflet: [],
  systolicChordal: [],
  diastolicFluttering: [],
  prostheticValve: [],
  prostheticValveTypeMechanical: [],
  prostheticValveTypeBioprosthetic: [],
  prostheticValveAbnormality: [],
  //prostheticValveAbnormalityRegurgitation: [],
  //mitralStenosis: [],
  mitralStenosisSeverity: [],
  mitralStenosisQuantitative: [],
  mitralStenosisStatus: [],
  //mitralRegurgitation: [],
  mitralRegurgitationSeverity: [],
  mitralRegurgitationJetDirection: [],
  mitralRegurgitationDiastolicMitralRegurgitation: [],
  mitralRegurgitationQuantitativeMeasurements: [],
  // quantitativeMeasurementsPulmonaryVenousFlow: [],
  // quantitativeMeasurementsMitralRegurgitantVolume: [],
  // QuantitativeMeasurementsMitralRegurgitantFraction: [],
  // QuantitativeMeasurementsEffectiveMitralRegurgitantOrificeArea: [],
}

selectStructureOrFunction: [];
selectProlapseAnteriorLeaflet: [];
//prolapseAnteriorLeafletValue
selectProlapsePosteriorLeaflet: [];
//prolapsePosteriorLeafletValue
selectFlailLeafletAnterior: [];
selectFlailLeafletPosterior: [];
selectRupturedChordaeAnterior: [];
selectRupturedChordaePosterior: [];
selectOtherChordalDisease: [];
selectLeafletElongationAnterior: [];
selectLeafletElongationPosterior: [];
selectLeafletThickeningAnterior: [];
selectLeafletThickeningPosteriior: [];
selectLeafletMobility: [];
selectLeafletMobilityAbnormalAnterior: [];
selectLeafletMobilityAbnormalPosterior: [];
selectAnnularCalicification: [];
selectSubvalvulardiseaseCalicification: [];
selectSubvalvulardiseaseThickCalicification: [];
selectAnnularAnnularDilatation: [];
selectVegetationAnterior: [];
//vegetationAnteriorOthers
selectVegetationPosterior: [];
//vegetationPosteriorDimensions
//vegetationPosteriorOthers
selectAbscessLocation: [];
selectAbscessSize: [];
//abscessSizeDimensions
selectCleftAnterior: [];
selectCleftPosterior: [];
selectSystolicAnteriorLeaflet: [];
selectSystolicPosteriorLeaflet: [];
selectSystolicChordal: [];
//dilatedAnnulusDimensions
selectDiastolicFluttering: [];
selectProstheticValve: [];
selectProstheticValveTypeMechanical: [];
//prostheticValveTypeMechanicalothers
//prostheticValveTypeMechanicalManufacturers
//prostheticValveTypeMechanicalSize
selectProstheticValveTypeBioprosthetic: [];
//prostheticValveTypeBioprostheticothers
//prostheticValveTypeBioprostheticManufacturers
//prostheticValveTypeBioprostheticSize
selectProstheticValveAbnormality: [];
//prostheticValveAbnormalityFistulaDescribe
//prostheticValveAbnormalityFractureDescribe
selectMitralStenosisSeverity: [];
selectMitralStenosisQuantitative: [];
//mitralStenosisQuantitativeOther
selectMitralStenosisStatus: [];
selectMitralRegurgitationSeverity: [];
selectMitralRegurgitationJetDirection: [];
selectMitralRegurgitationDiastolicMitralRegurgitation: [];
selectMitralRegurgitationQuantitativeMeasurements: [];
//mitralRegurgitationQuantitativeMeasurementsVenaWidth

settings= {};

obtype: string;

updform = {
  selectStructureOrFunction:'',
  selectProlapseAnteriorLeaflet:'',
  //prolapseAnteriorLeafletValue:'',
  selectProlapsePosteriorLeaflet:'',
  //prolapsePosteriorLeafletValue:'',
  selectFlailLeafletAnterior:'',
  selectFlailLeafletPosterior:'',
  selectRupturedChordaeAnterior:'',
  selectRupturedChordaePosterior:'',
  selectOtherChordalDisease:'',
  selectLeafletElongationAnterior:'',
  selectLeafletElongationPosterior:'',
  selectLeafletThickeningAnterior:'',
  selectLeafletThickeningPosteriior:'',
  selectLeafletMobility:'',
  selectLeafletMobilityAbnormalAnterior:'',
  selectLeafletMobilityAbnormalPosterior:'',
  selectAnnularCalicification:'',
  selectSubvalvulardiseaseCalicification:'',
  selectSubvalvulardiseaseThickCalicification:'',
  selectAnnularAnnularDilatation:'',
  selectVegetationAnterior:'',
  //vegetationAnteriorOthers:'',
  selectVegetationPosterior:'',
  //vegetationPosteriorDimensions:'',
  //vegetationPosteriorOthers:'',
  selectAbscessLocation:'',
  selectAbscessSize:'',
  //abscessSizeDimensions:'',
  selectCleftAnterior:'',
  selectCleftPosterior:'',
  selectSystolicAnteriorLeaflet:'',
  selectSystolicPosteriorLeaflet:'',
  selectSystolicChordal:'',
  //dilatedAnnulusDimensions:'',
  selectDiastolicFluttering:'',
  selectProstheticValve:'',
  selectProstheticValveTypeMechanical:'',
  //prostheticValveTypeMechanicalothers:'',
  //prostheticValveTypeMechanicalManufacturers:'',
  //prostheticValveTypeMechanicalSize:'',
  selectProstheticValveTypeBioprosthetic:'',
  //prostheticValveTypeBioprostheticothers:'',
  //prostheticValveTypeBioprostheticManufacturers:'',
  //prostheticValveTypeBioprostheticSize:'',
  selectProstheticValveAbnormality:'',
  //prostheticValveAbnormalityFistulaDescribe:'',
  //prostheticValveAbnormalityFractureDescribe:'',
  selectMitralStenosisSeverity:'',
  selectMitralStenosisQuantitative:'',
  //mitralStenosisQuantitativeOther:'',
  selectMitralStenosisStatus:'',
  selectMitralRegurgitationSeverity:'',
  selectMitralRegurgitationJetDirection:'',
  selectMitralRegurgitationDiastolicMitralRegurgitation:'',
  selectMitralRegurgitationQuantitativeMeasurements:'',
  //mitralRegurgitationQuantitativeMeasurementsVenaWidth:'',
}


constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

}

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });


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

  onOptionsSelected = (key,value)  => {
    this.mitralValueObject[key] = value
    console.log(this.mitralValueObject)
  }



saveMitralValueData = () => {
  this.mitralValueObject = {
    //mitralValve
    structureOrFunction: this.selectStructureOrFunction,
    //prolapse: 
    prolapseAnteriorLeaflet: this.selectProlapseAnteriorLeaflet,
    prolapsePosteriorLeaflet: this.selectProlapsePosteriorLeaflet,
    //flailLeaflet:
    flailLeafletAnterior: this.selectFlailLeafletAnterior,
    flailLeafletPosterior: this.selectFlailLeafletPosterior,
    //rupturedChordae: this.selectRupturedChordaeAnterior,
    rupturedChordaeAnterior: this.selectRupturedChordaeAnterior,
    rupturedChordaePosterior: this.selectRupturedChordaePosterior,
    otherChordalDisease: this.selectOtherChordalDisease,
    //leafletElongation: this.selectLeafletElongationAnterior
    leafletElongationAnterior: this.selectLeafletElongationAnterior,
    leafletElongationPosterior: this.selectLeafletElongationPosterior,
    //leafletThickeningOrCalcification:
    leafletThickeningAnterior: this.selectLeafletThickeningAnterior,
    leafletThickeningPosteriior: this.selectLeafletThickeningPosteriior,
    leafletMobility: this.selectLeafletMobility,
    leafletMobilityAbnormalAnterior: this.selectLeafletMobilityAbnormalAnterior,
    leafletMobilityAbnormalPosterior: this.selectLeafletMobilityAbnormalPosterior,
    annularCalicification: this.selectAnnularCalicification,
    subvalvulardiseaseCalicification: this.selectSubvalvulardiseaseCalicification,
    subvalvulardiseaseThickCalicification: this.selectSubvalvulardiseaseThickCalicification,
    annularAnnularDilatation: this.selectAnnularAnnularDilatation,
    //vegetation: 
    vegetationAnterior: this.selectVegetationAnterior,
    //vegetationAnteriorSize: 
    vegetationPosterior: this.selectVegetationPosterior,
    //vegetationPosteriorSize: 
    //abscess: 
    abscessLocation: this.selectAbscessLocation,
    abscessSize: this.selectAbscessSize,
    //cleft: 
    cleftAnterior: this.selectCleftAnterior,
    cleftPosterior: this.selectCleftPosterior,
    //systolicAnteriorMotion:
    systolicAnteriorLeaflet: this.selectSystolicAnteriorLeaflet,
    systolicPosteriorLeaflet: this.selectSystolicPosteriorLeaflet,
    systolicChordal: this.selectSystolicChordal,
    diastolicFluttering: this.selectDiastolicFluttering,
    prostheticValve: this.selectProstheticValve,
    prostheticValveTypeMechanical: this.selectProstheticValveTypeMechanical,
    prostheticValveTypeBioprosthetic: this.selectProstheticValveTypeBioprosthetic,
    prostheticValveAbnormality: this.selectProstheticValveAbnormality,
    //prostheticValveAbnormalityRegurgitation: 
    //mitralStenosis: 
    mitralStenosisSeverity: this.selectMitralStenosisSeverity,
    mitralStenosisQuantitative: this.selectMitralStenosisQuantitative,
    mitralStenosisStatus: this.selectMitralStenosisStatus,
    //mitralRegurgitation: 
    mitralRegurgitationSeverity: this.selectMitralRegurgitationSeverity,
    mitralRegurgitationJetDirection: this.selectMitralRegurgitationJetDirection,
    mitralRegurgitationDiastolicMitralRegurgitation: this.selectMitralRegurgitationDiastolicMitralRegurgitation,
    mitralRegurgitationQuantitativeMeasurements: this.selectMitralRegurgitationQuantitativeMeasurements,
    // quantitativeMeasurementsPulmonaryVenousFlow: 
    // quantitativeMeasurementsMitralRegurgitantVolume
    // QuantitativeMeasurementsMitralRegurgitantFraction
    // QuantitativeMeasurementsEffectiveMitralRegurgitantOrificeArea
  }
  //save function
console.log(this.mitralValueObject);
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
