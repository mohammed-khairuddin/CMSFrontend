import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-vieweditpatientdetails',
  templateUrl: './vieweditpatientdetails.component.html',
  styleUrls: ['./vieweditpatientdetails.component.scss']
})
export class VieweditpatientdetailsComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

age;
bsa :number;
bmi : number;
height:number;
weight:number;

///////////////////////////////////
statuss=['Open','Closed'];   
requirements = ['Very Urgent', 'With in a Day','Routine'];
protocols = ['Transthoracic', 'Ultra Sound'];
ews=['Good','Bad'];
  patientDataObject = {
    requirement: '',
    reportbase:'',
    patientname:'',
    gender:'',
    age:'',
    // height:'',
    // weight:'',
    dob:'',
    caseId:'',
    window:'',
    testtype:'',
    testdate:'',
    updatedate:'',
    examinedate:'',
    reportnew:'',
    reportdate:'',
    supplimentaryreport:'',
    supplimentarytdate:'',
    status:'',
    //status:this.statuss[0],
    propreport:'',
    submitdate:'',
    clinicId:'',

    // bsa:'',
    // bmi:'',
    bp:'',
    bpsystolic:'',
    bpdiastolic:'',
    reason:'',
    sendreport:'',
    diagnostic:'',
    ef:'',
    protocol:'',
    bmitype:'',
    ew:'',
    echoid:''
  };

  ClinicDoctors;
  DoctorData;
  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder) { }

  patienttForm: FormGroup;

  ngOnInit(): void {

    this.patienttForm = this.formBuilder.group({
      //id: [],
       requirement: ['', Validators.required],
       reportbase: ['', Validators.required],
       patientname: ['', Validators.required],
       gender: ['', Validators.required],
       age: ['', Validators.required],
      // //clinicId: ['', Validators.required]
       height: ['', Validators.required]
    });

    this.loginService.getPatientData(localStorage.getItem("pid")).subscribe(data => {
          //console.log(data)
          this.patientDataObject = data['doctor']
        }, error => console.log(error));
  

        this.loginService.getAllClinicDoctorList().subscribe(clinicdata => {
          //console.log('=======');
          //console.log(clinicdata)
          this.ClinicDoctors = clinicdata['user']
        }, error => console.log(error));
    
       
        
  }


  
 
calculateAge(birthday) {
  //console.log(this.patientDataObject.dob);
  //convert date again to type Date
  const bdate = new Date(this.patientDataObject.dob);
  console.log(bdate);
  const timeDiff = Math.abs(Date.now() - bdate.getTime() );
  this.patientDataObject['age'] = this.getAge(this.patientDataObject.dob);
  //console.log(this.age);

}

 getAge(dateString) {
  var today = new Date();
  var DOB = new Date(dateString);
  var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
  totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
  var years = today.getFullYear() - DOB.getFullYear();
  if (DOB.getMonth() > today.getMonth())
      years = years - 1;
  else if (DOB.getMonth() === today.getMonth())
      if (DOB.getDate() > today.getDate())
          years = years - 1;

  var days;
  var months;

  if (DOB.getDate() > today.getDate()) {
      months = (totalMonths % 12);
      if (months == 0)
          months = 11;
      var x = today.getMonth();
      switch (x) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12: {
              var a = DOB.getDate() - today.getDate();
              days = 31 - a;
              break;
          }
          default: {
              var a = DOB.getDate() - today.getDate();
              days = 30 - a;
              break;
          }
      }

  }
  else {
      days = today.getDate() - DOB.getDate();
      if (DOB.getMonth() === today.getMonth())
          months = (totalMonths % 12);
      else
          months = (totalMonths % 12) + 1;
  }
  var age = years + ' years ' + months + ' months ' + days + ' days';
  return age;
}
calculateBsa(bsa){

  const ht = this.patientDataObject.height;
  const wt = this.patientDataObject.weight;
  console.log(ht);
  console.log(wt);
  this.patientDataObject['bsa'] =  Math.pow(ht , wt/ 3600).toFixed(3);
  this.patientDataObject['bmi'] = (wt / Math.pow(ht,2)).toFixed(3); 
  //console.log(this.patientDataObject['bsa']);
  //console.log(this.patientDataObject['bmi']);

}

  updatePatient = ():any => {
    console.log(this.patientDataObject);
    this.loginService.updatePatientDoc(this.patientDataObject).subscribe(updateAssignment =>{
     //this.router.navigateByUrl('/dashboard');
     //this.router.navigateByUrl('/viewdoctorpatients');
     window.location.reload();
     alert('Patient Details Updated Successfully');
     
    })
   
 }

 goToSendDetails = (patientDataObject):any=>{

  //alert(patientDataObject.sendreport);
  if(patientDataObject.sendreport === '' || patientDataObject.sendreport === undefined ){
    alert('Please Select One of them to sent the Report');
    return false;
   }
  
  if(patientDataObject.sendreport === 'sms'){
  alert('Sms Sent Successfully');
  }if(patientDataObject.sendreport === 'email'){
    alert('Email Sent Successfully');
    }

    this.router.navigateByUrl('/clinicdashboard');
    //window.location.reload();

 }





}
