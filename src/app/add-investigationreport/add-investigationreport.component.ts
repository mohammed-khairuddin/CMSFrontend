import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-investigationreport',
  templateUrl: './add-investigationreport.component.html',
  styleUrls: ['./add-investigationreport.component.scss']
})
export class AddInvestigationreportComponent implements OnInit {

 

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
  ///////////////////////////////////

  investigationReport = new FormGroup({
    hbcounts: new FormControl(''),
    tccounts: new FormControl(''),
    dccounts: new FormControl(''),
    esrcounts: new FormControl(''),
    bloodgroup: new FormControl(''),
    completeHaemogram: new FormControl(''),
    rbc: new FormControl(''),
    pcv: new FormControl(''),
    indices: new FormControl(''),
    peripheralSmearReport: new FormControl(''),
    srIron: new FormControl(''),
    tibc: new FormControl(''),
    plateletCount: new FormControl(''),
    hev: new FormControl(''),
    dengue: new FormControl(''),
    chickenGuinea: new FormControl(''),
    leptospira: new FormControl(''),
    tbig: new FormControl(''),
    qigm: new FormControl(''),
    pFal: new FormControl(''),
    pVivax: new FormControl(''),
    smp: new FormControl(''),
    cReactiveProtein: new FormControl(''),
    rheumatoidFactor: new FormControl(''),
    antiStreptolysinOTitre: new FormControl(''),
    vdrl: new FormControl(''),
    widalTest: new FormControl(''),
    pregancyCardTest: new FormControl(''),
    hiv1: new FormControl(''),
    hiv2: new FormControl(''),
    hbs: new FormControl(''),
    hcv: new FormControl(''),
    ppd: new FormControl(''),
    fbsl: new FormControl(''),
    rbsl: new FormControl(''),
    ppbsl: new FormControl(''),
    glycosylated: new FormControl(''),
    lipidProfile: new FormControl(''),
    srCholesterol: new FormControl(''),
    srTriglycerides: new FormControl(''),
    hdlCholestrol: new FormControl(''),
    srBillirubin: new FormControl(''),
    directBillirubin: new FormControl(''),
    indirectBillirubin: new FormControl(''),
    sgot: new FormControl(''),
    sgpt: new FormControl(''),
    totalProtein: new FormControl(''),
    albumin: new FormControl(''),
    globulin: new FormControl(''),
    alkalinePhosphate: new FormControl(''),
    amylase: new FormControl(''),
    ggtp: new FormControl(''),
    srProtein: new FormControl(''),
    ammonia: new FormControl(''),
    bleeding: new FormControl(''),
    clottingTime: new FormControl(''),
    prothrombinTime: new FormControl(''),
    inr: new FormControl(''),
    aptt: new FormControl(''),
    plateletCount1: new FormControl(''),
    fdp: new FormControl(''),
    cdDimer: new FormControl(''),
    ada: new FormControl(''),
    cpkTotal: new FormControl(''),
    ckMb: new FormControl(''),
    sgot1: new FormControl(''),
    ldh: new FormControl(''),
    troponinITest: new FormControl(''),
    bloodUrea: new FormControl(''),
    srCreatinine: new FormControl(''),
    srUricAcid: new FormControl(''),
    bun: new FormControl(''),   
    srSodium: new FormControl(''),
    srPotassium: new FormControl(''),
    srChloride: new FormControl(''),
    srCalcium: new FormControl(''),
    srPhosphorous: new FormControl(''),
    vitaminD3: new FormControl(''),
    vitaminB12: new FormControl(''),
    psa: new FormControl(''),
    abg: new FormControl(''),
    vbg: new FormControl(''),
    papSmear: new FormControl(''),
    fnac: new FormControl(''),
    freeT3: new FormControl(''),
    freeT4: new FormControl(''),
    freeTSH: new FormControl(''),
    ipth: new FormControl(''),
    compliment4: new FormControl(''),
    ana: new FormControl(''),
    anca: new FormControl(''),
    antiDsDna: new FormControl(''),
    dDimerTest: new FormControl(''),
    bloodCulture: new FormControl(''),
    urineRoutine: new FormControl(''),
    urineSugar: new FormControl(''),
    urineCulture: new FormControl(''),
    hoursUrineProteins: new FormControl(''),
    hoursUrineCreatine: new FormControl(''),
    spotUrineForPcRatio: new FormControl(''),
    StoolRoutine: new FormControl(''),
    stoolCulture: new FormControl(''),
    stoolForOccultBlood: new FormControl(''),
    stoolForReducingSubs: new FormControl(''),
    sputumForAFB: new FormControl(''),
    abdominalUltrasound: new FormControl(''),
    sonomammography: new FormControl(''),
    carotidDoppler: new FormControl(''),
    dopplerPeripheralArterial: new FormControl(''),
    dopplerPeripheralVenous: new FormControl(''),
    echocardigraphy: new FormControl(''),
    stressTest: new FormControl(''),

  });

  
  addform = {
    hbcounts:'',
    // typelifestyle:'',
    // smoking:'',
    
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }



  ngOnInit(): void {

  
    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }

  

/***********/
registerInvestigationReport = (data):any => {

      const investigation1 = {
        "hbcounts": data.hbcounts,
        "tccounts":data.tccounts,
        "dccounts": data.dccounts,
        "esrcounts": data.esrcounts,
        "bloodgroup":data.bloodgroup,
        "completeHaemogram": data.completeHaemogram,
        "rbc": data.rbc,
        "pcv": data.pcv,
        "indices": data.indices,
        "peripheralSmearReport": data.peripheralSmearReport,
        "srIron": data.srIron,
        "tibc": data.tibc,
        "plateletCount": data.plateletCount,
        "hev": data.hev,
        "dengue":data.dengue,
        "chickenGuinea": data.chickenGuinea,
        "leptospira": data.leptospira,
        "tbig": data.tbig,
        "qigm": data.qigm,
        "pFal": data.pFal,
        "pVivax": data.pVivax,
        "smp": data.smp,
        "cReactiveProtein": data.cReactiveProtein,
        "rheumatoidFactor": data.rheumatoidFactor,
        "antiStreptolysinOTitre":data.antiStreptolysinOTitre,
        "vdrl": data.vdrl,
        "widalTest": data.widalTest,
        "pregancyCardTest": data.pregancyCardTest,
        "hiv1": data.hiv1,
        "hiv2": data.hiv2,
        "hbs": data.hbs,
        "hcv": data.hcv,
        "ppd": data.ppd,
        "fbsl": data.fbsl,
        "rbsl":data.rbsl,
        "ppbsl": data.ppbsl,
        "glycosylated": data.glycosylated,
        "lipidProfile": data.lipidProfile,
        "srCholesterol": data.srCholesterol,
        "srTriglycerides": data.srTriglycerides,
        "hdlCholestrol": data.hdlCholestrol,
        "srBillirubin": data.srBillirubin,
        "directBillirubin":data.directBillirubin,
        "indirectBillirubin": data.indirectBillirubin,
        "sgot": data.sgot,
        "sgpt": data.sgpt,
        "totalProtein": data.totalProtein,
        "albumin": data.albumin,
        "globulin": data.globulin,
        "alkalinePhosphate": data.alkalinePhosphate,
        "amylase": data.amylase,
        "ggtp":data.ggtp,
        "srProtein": data.srProtein,
        "ammonia": data.ammonia,
        "bleeding": data.bleeding,
        "clottingTime": data.clottingTime,
        "prothrombinTime": data.prothrombinTime,
        "inr": data.inr,
        "aptt": data.aptt,
        "plateletCount1":data.plateletCount1,
        "fdp": data.fdp,
        "cdDimer": data.cdDimer,
        "ada": data.ada,
        "cpkTotal": data.cpkTotal,
        "ckMb": data.ckMb,
        "sgot1": data.sgot1,
        "ldh": data.ldh,
        "troponinITest": data.troponinITest,
        "bloodUrea":data.bloodUrea,
        "srCreatinine": data.srCreatinine,
        "srUricAcid": data.srUricAcid,
        "bun": data.bun,
        "srSodium": data.srSodium,
        "srPotassium": data.srPotassium,
        "srChloride": data.srChloride,
        "srCalcium": data.srCalcium,
        "srPhosphorous":data.srPhosphorous,
        "vitaminD3": data.vitaminD3,
        "vitaminB12": data.vitaminB12,
        "psa":data.psa,
        "abg": data.abg,
        "vbg": data.vbg,
        "papSmear": data.papSmear,
        "fnac": data.fnac,
        "freeT3": data.freeT3,
        "freeT4": data.freeT4,
        "freeTSH": data.freeTSH,
        "ipth":data.ipth,
        "compliment4": data.compliment4,
        "ana": data.ana,
        "anca":data.anca,
        "antiDsDna": data.antiDsDna,
        "dDimerTest": data.dDimerTest,
        "bloodCulture": data.bloodCulture,
        "urineRoutine": data.urineRoutine,
        "urineSugar": data.urineSugar,
        "urineCulture": data.urineCulture,
        "hoursUrineProteins": data.hoursUrineProteins,
        "hoursUrineCreatine":data.hoursUrineCreatine,
        "spotUrineForPcRatio": data.spotUrineForPcRatio,
        "StoolRoutine": data.StoolRoutine,
        "stoolCulture":data.stoolCulture,
        "stoolForOccultBlood": data.stoolForOccultBlood,
        "stoolForReducingSubs": data.stoolForReducingSubs,
        "sputumForAFB": data.sputumForAFB,
        "abdominalUltrasound": data.abdominalUltrasound,
        "sonomammography": data.sonomammography,
        "carotidDoppler": data.carotidDoppler,
        "dopplerPeripheralArterial": data.dopplerPeripheralArterial,
        "dopplerPeripheralVenous":data.dopplerPeripheralVenous,
        "echocardigraphy":data.echocardigraphy,
        "stressTest":data.stressTest,
      }
      
      console.log(this.investigationReport.value);

      console.log('*******');
      console.log(investigation1);

    
        this.loginService.investigationFormInsertion(investigation1).subscribe(res =>{
         
          if(res['status'] ==  '200') {            
            alert('Investigation Report Added Successfully');
            this.router.navigate(['/previewallotherdetails']);
          } 
       })
     

    

  }




}