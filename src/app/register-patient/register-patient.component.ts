import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as $ from 'jquery';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  
  firstname:string;
  middlename:string;
  lastname:string;  
  salutation:string;
  complains:string;
  gender:string;
  martialstatus:string;
  occupation:string;
  religion:string;
  dob:Date;
  age:number;
  role: string;
  country: string;
  state: string;
  city: string;
  referred:string;
  fdoctor:string; 
  email: string;
  regmobileno:string;
  kinmobileno:string;
  wtsno:string;
  address:string;
  pincode:string;
  qualification:string;
  identificationmarks:string;
  scars:string;
  datefirstvisit :string;
  reason:string;
  village:string;
  district:string;
  

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  dropdownList = [];
  selectedItems = [];
  //dropdownSettings = {};
  settings = {};
  
  dropdownSettings:IDropdownSettings;
  //length : any[] = [];
  ///////////////////////////////////

 


  ////////////////////////////////////////
  genders=['Male','Female','Others'];
  martialstatuss=['Married','Unmarried'];
  //occupationss=['Private JOb','Employee','Govt.Job'];
  //religionss=['Hindu','Christian','Muslim','Others'];
  roles = ['CLINIC', 'DOCTOR'];
  countrys = ['India', 'USA', 'Australia'];
  states = ['Telangana','AndhraPradesh'];
  citys = ['Hyderabad', 'Visakhapatnam', 'Vijayawada'];
  //complainss=['Vomiting','Headache'];
  //salutationss=['salutations1','salutations2'];
  addform = {
    firstname:'',
    middlename:'',
    lastname:'',
    salutation:'',
    complains:'',
    gender:'',
    martialstatus:'',
    occupation:'',
    religion:'',
    dob:'',
    age:'',    
    country:'',
    state:'',
    city:'',
    referred:'',
    fdoctor:'',
    email:'',
    regmobileno:'',
    kinmobileno:'',
    wtsno:'',
    address:'',
    pincode:'',
    qualification:'',
    identificationmarks:'',
    scars:'',
    datefirstvisit:'',
    reason:'',
    village:'',
    district:'',

  };

  clinicDoctorsList;
  salutationList;
  complainsList;
  maritalstatusList;
  occupationList;
  religionList;
  educationalqualificationsList;
  countryList;
  stateList;

  countries:Array<any> = [];
  cities:Array<any> = [];
  filteredCities: Array<any> = [];

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  regPatientForm: FormGroup;
  
  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  //imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  uploadedFiles: Array<File>;

  // uploadedFiles:any;
  previewAvailbleList:any = [];

  seletedFile: String = "Choose file...";
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  }


  ngOnInit(): void {

    

    this.loginService.getAllPatientMasterFetch().subscribe( (data : any) => { 
      const {salutation,complains,maritalstatus,country,state,
        occupation,religion,educationalqualifications,doctor} = data; 
      
    
    this.salutationList = data['salutation'];
    this.complainsList = data['complains'];        
    this.maritalstatusList = data['maritalstatus'];
    this.occupationList = data['occupation'];
    this.religionList = data['religion'];
    this.educationalqualificationsList = data['educationalqualifications'];
    this.clinicDoctorsList = data['doctor'];
    this.countryList = data['country'];
    this.stateList = data['state'];
    }, error => console.log(error));

    this.regPatientForm = this.formBuilder.group({
      firstname:['',Validators.required],
      middlename:['',Validators.required],
      lastname:['',Validators.required],
      salutation:['',Validators.required],
      complains:['',Validators.required],
      gender:['',Validators.required],
      martialstatus: ['', Validators.required],      
      occupation: ['', Validators.required],
      religion: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      //city: ['', Validators.required],
      //referred: ['', Validators.required],
      //fdoctor: ['', Validators.required],
      email: ['', Validators.required],
      regmobileno: ['', Validators.required],
      kinmobileno: ['', Validators.required],
      wtsno:['', Validators.required],
      //address:['', Validators.required],
      //pincode: ['',Validators.required],
      //qualification: ['', Validators.required],
      //identificationmarks: ['', Validators.required],
      //scars:['', Validators.required],
      datefirstvisit:['', Validators.required],
      //reason: ['',Validators.required]
    });

  
   
    this.dropdownList = [
      { "id": 1, "name": "Nausea" },
      { "id": 2, "name": "Vomiting" },
      { "id": 3, "name": "Heartburn acidity" },
      { "id": 4, "name": "Headache" },      
      { "id": 5, "name": "Irritable" }
    ];

   

    this.settings = {
      text: "Select Complains",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
  };

////////////////////////////////


  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  onCountrySelect(data){
   
    if (JSON.stringify(data) !== JSON.stringify({})) {
      if(data){
        this.filteredCities = this.stateList.filter(state=>state.countryId==data);

     }
   }

  }

  onItemSelect(item: any) {
     console.log(item);
     console.log(this.selectedItems);
    
  }
  OnItemDeSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    //console.log(items);
  }
  onDeSelectAll(items: any) {
    //console.log(items);
  }

calculateAge(birthday) {
  
  const bdate = new Date(this.addform.dob);
  
  const timeDiff = Math.abs(Date.now() - bdate.getTime() );
  this.addform['age'] = this.getAge(this.addform.dob);
  
  
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


/*****************************/
registerPatient = (data):any => {

  let comp = console.log($('.Checkbox:checked').map(function() {
    return this.value;
    }).get().join(', '));
  
  if(data.firstname != '' && data.middlename != '' && data.lastname != ''  )
    {

      const patientManagementReq = {
        "firstname": data.firstname,
        "middlename": data.middlename,
        "lastname":data.lastname,
        "salutation": data.salutation,
        //"complains": comp,
        "complains": data.complains,
        "gender": data.gender,
        "martialstatus": data.martialstatus,
        "occupation": data.occupation,
        "religion": data.religion,
        "dob": data.dob,
        "age": data.age,
        "country":data.country,
        "state":data.state,
        "city":data.city,
        "referred":data.referred,
        "fdoctor":data.fdoctor,
        "email":data.email,
        "regmobileno":data.regmobileno,
        "kinmobileno":data.kinmobileno,
        "wtsno":data.wtsno,
        "address":data.address,
        "pincode":data.pincode,
        "qualification":data.qualification,
        "identificationmarks":data.identificationmarks,
        "scars":data.scars,
        "datefirstvisit":data.datefirstvisit,
        "reason":data.reason,
        "village":data.village,
        "district":data.district,
      }
      console.log(patientManagementReq);
      console.log('==============');
     
        this.loginService.registeredPatient(patientManagementReq).subscribe(res =>{
         
          if(res['descsription'] ==  'Patient Created' ) {
            //if(res['status'] ==  '200' ) {
            alert('Patient Created Successfully');
            this.router.navigate(['/previewregpatient']);
          } 
          else{
            alert("Patient Creation Failed. Please Check the Details");
            return false;
            }
          
       })
     

     } else{

      alert("Please Fill the Details");
      return false;
      

     }

  }


}
