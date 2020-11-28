import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-lifestyle',
  templateUrl: './edit-lifestyle.component.html',
  styleUrls: ['./edit-lifestyle.component.scss']
})
export class EditLifestyleComponent implements OnInit {

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
  
  
  patientId;
  typelifestyle;
  smoking;
  tobaccochewing;
  alcoholconsumption;
  glassbeer;
  brandypegs;
  whiskypegs;
  localalcoholpegs;
  wineglasses;
  excercise;
  aerobicexercise;
  walking;
  yoga;
  cycling;
  cardiacexercises;
  otherexercises;
  smoker;
  physicalactivity;
  sleep;
  panchewing;
  regyoga;
  typecancer;
  chemotherapy;
  radiationtherapy;
  therapy;
  heartattack;
  bypasssurgery;
  angiography;
  angioplasty;
  valvesurgery;
  irregularpulse;
  heartmurmur;
  admissionheartproblem;
  eardischarge;
  earpain;
  vision;
  spectacles;
  chronickidneydisease;
  abnormalurinefindings;
  dialysis;
  difficultyinpassingurine;
  painwhilepassingurine;
  prostrate;
  hernia;
  scarsofoperation;
  enlargedliver;
  cirrhosisofliver;
  chronicliverdisease;
  cancerofliver;
  chronicalcoholicliverdisease;
  hepatitis;
  hepatitisc;
  sexuallytransmitteddisease;
  asthma;
  bronchitis;
  tuberculosis;
  pneumonia;
  emphysema;
  chronicobstructivepulmonarydisease;
  cough;
  shortnessofbreath;
  bloodinsputam;
  epilepsy;
  blackouts;
  paralysis;
  anxiety;
  depression;
  bloodinstool;
  goitre;
  hypothrodism;
  hyperthyrodism;
  thyroditis;
  allergies;
  malaria;
  filaria;
  kalaazar;
  swineflu;
  covid19;
  myopathy;
  rheumatism;
  arthrities;
  gout;
  osteoporosis;
  bonefractures;
  slippeddisc;
  physicaldeformity;
  congentialdeformity;
  handicap;
  spousehavingHIV;
  spousehavinghepatitisB;
  spousehavinghepatatisC;
  pregancy;
  postmenopause;
  hysterectomy;
  mamography;
  papsmear;
  uterusremoved;
  anyothergynaeproblem;
  nervous;
  jointandmusclepain;
  bodydeformity;
  
  
  
  lifeStyleForm = new FormGroup({
    patientId: new FormControl(''),
    typelifestyle: new FormControl(''),
    smoking: new FormControl(''),
    tobaccochewing: new FormControl(''),
    alcoholconsumption: new FormControl(''),
    glassbeer: new FormControl(''),
    brandypegs: new FormControl(''),
    whiskypegs: new FormControl(''),
    localalcoholpegs: new FormControl(''),
    wineglasses: new FormControl(''),
    excercise: new FormControl(''),
    aerobicexercise: new FormControl(''),
    walking: new FormControl(''),
    yoga: new FormControl(''),
    cycling: new FormControl(''),
    cardiacexercises: new FormControl(''),
    otherexercises: new FormControl(''),
    smoker: new FormControl(''),
    physicalactivity: new FormControl(''),
    sleep: new FormControl(''),
    panchewing: new FormControl(''),
    regyoga: new FormControl(''),
    typecancer: new FormControl(''),
    chemotherapy: new FormControl(''),
    radiationtherapy: new FormControl(''),
    therapy: new FormControl(''),
    heartattack: new FormControl(''),
    bypasssurgery: new FormControl(''),
    angiography: new FormControl(''),
    angioplasty: new FormControl(''),
    valvesurgery: new FormControl(''),
    irregularpulse: new FormControl(''),
    heartmurmur: new FormControl(''),
    admissionheartproblem: new FormControl(''),
    eardischarge: new FormControl(''),
    earpain: new FormControl(''),
    vision: new FormControl(''),
    spectacles: new FormControl(''),
    chronickidneydisease: new FormControl(''),
    abnormalurinefindings: new FormControl(''),
    dialysis: new FormControl(''),
    difficultyinpassingurine: new FormControl(''),
    painwhilepassingurine: new FormControl(''),
    prostrate: new FormControl(''),
    hernia: new FormControl(''),
    scarsofoperation: new FormControl(''),
    enlargedliver: new FormControl(''),
    cirrhosisofliver: new FormControl(''),
    chronicliverdisease: new FormControl(''),
    cancerofliver: new FormControl(''),
    chronicalcoholicliverdisease: new FormControl(''),
    hepatitis: new FormControl(''),
    hepatitisc: new FormControl(''),
    sexuallytransmitteddisease: new FormControl(''),
    asthma: new FormControl(''),
    bronchitis: new FormControl(''),
    tuberculosis: new FormControl(''),
    pneumonia: new FormControl(''),
    emphysema: new FormControl(''),
    chronicobstructivepulmonarydisease: new FormControl(''),
    cough: new FormControl(''),
    shortnessofbreath: new FormControl(''),
    bloodinsputam: new FormControl(''),
    epilepsy: new FormControl(''),
    blackouts: new FormControl(''),
    paralysis: new FormControl(''),
    anxiety: new FormControl(''),
    depression: new FormControl(''),
    bloodinstool: new FormControl(''),
    goitre: new FormControl(''),
    hypothrodism: new FormControl(''),
    hyperthyrodism: new FormControl(''),
    thyroditis: new FormControl(''),
    allergies: new FormControl(''),
    malaria: new FormControl(''),
    filaria: new FormControl(''),
    kalaazar: new FormControl(''),
    swineflu: new FormControl(''),
    covid19: new FormControl(''),
    myopathy: new FormControl(''),
    rheumatism: new FormControl(''),
    arthrities: new FormControl(''),
    gout: new FormControl(''),
    osteoporosis: new FormControl(''),
    bonefractures: new FormControl(''),
    slippeddisc: new FormControl(''),
    physicaldeformity: new FormControl(''),
    congentialdeformity: new FormControl(''),
    handicap: new FormControl(''),
    spousehavingHIV: new FormControl(''),
    spousehavinghepatitisB: new FormControl(''),
    spousehavinghepatatisC: new FormControl(''),
    pregancy: new FormControl(''),
    postmenopause: new FormControl(''),
    hysterectomy: new FormControl(''),
    mamography: new FormControl(''),
    papsmear: new FormControl(''),
    uterusremoved: new FormControl(''),
    anyothergynaeproblem: new FormControl(''),
    nervous: new FormControl(''),
    jointandmusclepain: new FormControl(''),
    bodydeformity: new FormControl(''),
  });

  
  updform = {
    patientId:'',
    typelifestyle:'',
    smoking:'',
    tobaccochewing:'',
    alcoholconsumption:'',
    glassbeer:'',
    brandypegs:'',
    whiskypegs:'',
    localalcoholpegs:'',
    wineglasses:'',
    excercise:'',
    aerobicexercise:'',
    walking:'',
    yoga:'',
    cycling:'',
    cardiacexercises:'',
    otherexercises:'',
    smoker:'',
    physicalactivity:'',
    sleep:'',
    panchewing:'',
    regyoga:'',
    typecancer:'',
    chemotherapy:'',
    radiationtherapy:'',
    therapy:'',
    heartattack:'',
    bypasssurgery:'',
    angiography:'',
    angioplasty:'',
    valvesurgery:'',
    irregularpulse:'',
    heartmurmur:'',
    admissionheartproblem:'',
    eardischarge:'',
    earpain:'',
    vision:'',
    spectacles:'',
    chronickidneydisease:'',
    abnormalurinefindings:'',
    dialysis:'',
    difficultyinpassingurine:'',
    painwhilepassingurine:'',
    prostrate:'',
    hernia:'',
    scarsofoperation:'',
    enlargedliver:'',
    cirrhosisofliver:'',
    chronicliverdisease:'',
    cancerofliver:'',
    chronicalcoholicliverdisease:'',
    hepatitis:'',
    hepatitisc:'',
    sexuallytransmitteddisease:'',
    asthma:'',
    bronchitis:'',
    tuberculosis:'',
    pneumonia:'',
    emphysema:'',
    chronicobstructivepulmonarydisease:'',
    cough:'',
    shortnessofbreath:'',
    bloodinsputam:'',
    epilepsy:'',
    blackouts:'',
    paralysis:'',
    anxiety:'',
    depression:'',
    bloodinstool:'',
    goitre:'',
    hypothrodism:'',
    hyperthyrodism:'',
    thyroditis:'',
    allergies:'',
    malaria:'',
    filaria:'',
    kalaazar:'',
    swineflu:'',
    covid19:'',
    myopathy:'',
    rheumatism:'',
    arthrities:'',
    gout:'',
    osteoporosis:'',
    bonefractures:'',
    slippeddisc:'',
    physicaldeformity:'',
    congentialdeformity:'',
    handicap:'',
    spousehavingHIV:'',
    spousehavinghepatitisB:'',
    spousehavinghepatatisC:'',
    pregancy:'',
    postmenopause:'',
    hysterectomy:'',
    mamography:'',
    papsmear:'',
    uterusremoved:'',
    anyothergynaeproblem:'',
    nervous:'',
    jointandmusclepain:'',
    bodydeformity:'',
  };


  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }


  ngOnInit(): void {

    this.loginService.getEditLifeStyleDetailData()
    .subscribe(data => {
      console.log(data)
      this.updform = data['lifestyle']
    }, error => console.log(error));
    

    // this.lifeStyleForm = this.formBuilder.group({
    //   patientId:['',Validators.required],
    //   refferedby:['',Validators.required],
    //   nameofclinic:['',Validators.required],
    //   followup: ['', Validators.required],
    //   heightincms:['',Validators.required],
    //   weightinkgs: ['', Validators.required],      
    //   bsa: ['', Validators.required],
    //   bmi: ['', Validators.required],
    //   bp: ['', Validators.required],
    // });

    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })


  }


updateFamilydetails = ():any => {
  console.log(this.updform);
     this.loginService.updateLifeStyleDetailData(this.updform).subscribe(updateDoctor =>{
       alert('Other Details Updated Successfully');
      this.router.navigateByUrl('/previewallfamilyhistory');
     })
    
  }

}
