import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-edit-patient-master',
  templateUrl: './edit-patient-master.component.html',
  styleUrls: ['./edit-patient-master.component.scss']
})
export class EditPatientMasterComponent implements OnInit {

  
  firstname:string;
  middlename:string;
  lastname:string;  
  salutation:string;
  complains:string;
  gender:string;
  martialstatus:string;
  occupation:string;
  religion:string;
  dob:'';
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
  

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  dropdownList = [];
  selectedItems = [];
  //dropdownSettings = {};
  
  
  dropdownSettings:IDropdownSettings;
  ///////////////////////////////////

  genders=['Male','Female','Others'];
  martialstatuss=['Married','Unmarried'];
  occupationss=['Private JOb','Employee','Govt.Job'];
  religionss=['Hindu','Christian','Muslim','Others'];
  roles = ['CLINIC', 'DOCTOR'];
  countrys = ['India', 'USA', 'Australia'];
  states = ['Telangana','AndhraPradesh'];
  citys = ['Hyderabad', 'Visakhapatnam', 'Vijayawada'];
  complainss=['Vomiting','Headache'];
  salutationss=['salutations1','salutations2'];
  updform = {
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
    reason:''

  };

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


    this.loginService.getRegisteredPatientDetail()
    .subscribe(data => {
      console.log(data)
      this.updform = data['user']
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
      city: ['', Validators.required],
      referred: ['', Validators.required],
      fdoctor: ['', Validators.required],
      email: ['', Validators.required],
      regmobileno: ['', Validators.required],
      kinmobileno: ['', Validators.required],
      wtsno:['', Validators.required],
      address:['', Validators.required],
      pincode: ['',Validators.required],
      qualification: ['', Validators.required],
      identificationmarks: ['', Validators.required],
      scars:['', Validators.required],
      datefirstvisit:['', Validators.required],
      reason: ['',Validators.required]
    });

    this.getCountries();

    ///
    this.dropdownList = [
      { item_id: 1, item_text: 'Nausea' },
      { item_id: 2, item_text: 'Vomiting' },
      { item_id: 3, item_text: 'Heartburn acidity' },
      { item_id: 4, item_text: 'Headache' },
      { item_id: 5, item_text: 'Irritable' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Heartburn acidity' },
      { item_id: 4, item_text: 'Headache' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }

  
getCountries(){
  this.loginService.allCountries().
  subscribe(
    data2 => {
      this.countryInfo=data2.Countries;
      //console.log('Data:', this.countryInfo);
    },
    //err => console.log(err),
    //() => console.log('complete')
  )
}


onChangeCountry(countryValue) {
  this.stateInfo=this.countryInfo[countryValue].States;
  this.cityInfo=this.stateInfo[0].Cities;
  //console.log(this.cityInfo);
}

onChangeState(stateValue) {
  this.cityInfo=this.stateInfo[stateValue].Cities;
  //console.log(this.cityInfo);
}
/*****************************/

updatePatientMaster = ():any => {
 // console.log(this.updform);
   this.loginService.updateRegisteredPatientList(this.updform).subscribe(updateDoctor =>{
     alert('Patient Master Updated Successfully');
    this.router.navigateByUrl('/previewregpatient');
   })
  
}



}
