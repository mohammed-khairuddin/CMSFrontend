import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editclinic',
  templateUrl: './editclinic.component.html',
  styleUrls: ['./editclinic.component.scss']
})
export class EditclinicComponent implements OnInit {

  
  role: string;
  name: string;
  type:string;
  specialities= [];
  clinictype:string;
  clinicId: string;
  qualification:string;
  specialitydoctor:string;
  email: string;
  phonenumber:string;
  mobNo: string;
  emergencynumber:string;
  emergencymobnumber:string;
  whatsappno:string;
  username: string;
  password: string;
  cpassword: string;
  country: string;
  state: string;
  district:string;
  city: string;
  citycode:string;
  pincode:string;
  address:string;
  otherdetails:string;
  url:string;
  ambulance:string;
  ambulancephno:string;
  degreedoctor:string;
  timingsdays:string;
  timingshours :string;
  googlemaplocation:string;
  services=[];

  AllClinicList: Object;  
  clinic: Object;
  
  ///////////////////////////////////

  typess = ['HOSPITAL', 'CLINIC'];
  roles = ['CLINIC', 'DOCTOR'];
  countrys = ['India', 'USA', 'Australia'];
  states = ['Telangana','AndhraPradesh'];
  citys = ['Hyderabad', 'Visakhapatnam', 'Vijayawada'];

  specialitys = ['Speciaity1','Speciaity2'];
  clinictypes = ['clinictype1','clinictype2'];
  updform = {
  role: '',
  name:'',
  type:'',
  specialities:'',
  clinictype:'',
  clinicId: '',
  qualification:'',
  specialitydoctor:'',
  email: '',
  phonenumber:'',
  mobNo: '',
  emergencynumber:'',
  emergencymobnumber:'',
  whatsappno:'',
  username: '',
  password: '',
  cpassword: '',
  country: '',
  state: '',
  district:'',
  city: '',
  citycode:'',
  pincode:'',
  address:'',
  otherdetails:'',
  url:'',
  ambulance:'',
  ambulancephno:'',
  degreedoctor:'',
  timingsdays:'',
  timingshours:'',
  googlemaplocation:'',
  services:'',
  };

  ///////////////////////////////////

  countryList;
  stateList;
  filteredCities;
  serviceList;
  specialityList;
  typeList;

  updform1 = [];

  dropdownList = [];
  selectedItems;
  selectedItems1;
  //dropdownSettings = {};
  settings = {};
  servicessettings= {};
  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  addClinicDoctorForm: FormGroup;

  
  onItemSelect(item: any) {
   //alert('****');
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



  ngOnInit(): void {

    this.loginService.getAllClinicDoctorMasterFetch().subscribe( (data : any) => { 
      const {country,state,hospitalService,hospitalSpeciality,hospitalType} = data;         
    // console.log(data);
    // console.log('///////////////');
      this.countryList = data['country'];
      this.stateList = data['state'];
      this.serviceList = data['hospitalService'];
      this.specialityList = data['hospitalSpeciality'];
      this.typeList = data['hospitalType'];

    }, error => console.log(error));



    this.loginService.getClinicData(localStorage.getItem("aid"))
    .subscribe(data  => {
      //console.log(data);
      this.updform = data['doctor'];
      this.selectedItems = data['speciality'];
      //this.selectedItems = this.updform.speciality;
      this.selectedItems1 = data['services'];
      
     
      if(this.updform.country){
           
        this.filteredCities = this.stateList.filter(state=>state.countryId==this.updform.country);
  console.log(this.filteredCities);
     }

    }, error => console.log(error));
    
    this.addClinicDoctorForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      specialities: ['', Validators.required],
      clinictype: ['', Validators.required],
      clinicId: ['', Validators.required],
      qualification: ['', Validators.required],
      specialitydoctor: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required],
      mobNo: ['', Validators.required],
      emergencynumber: ['', Validators.required],
      emergencymobnumber: ['', Validators.required],
      whatsappno: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      citycode: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      otherdetails: ['', Validators.required],
      url: ['', Validators.required],
      ambulance: ['', Validators.required],
      ambulancephno: ['', Validators.required],
      degreedoctor:['', Validators.required],
      timingsdays:['', Validators.required],
      timingshours:['', Validators.required],
      googlemaplocation:['',Validators.required]
    });

    // this.loginService.getAllClinicList().subscribe(clinic =>{
    //   this.AllClinicList = clinic['clinic']
    //  //localStorage.setItem("list",cliniclist)
    //  console.log(this.AllClinicList)
    // })

    

  }

  onCountrySelect(data){
   
    if (JSON.stringify(data) !== JSON.stringify({})) {
      if(data){
        this.filteredCities = this.stateList.filter(state=>state.countryId==data);
  
     }
   }
  
  }

  
  updateClinic = ():any => {
   
    this.updform.specialities = this.selectedItems;
    //JSON.stringify()
    this.updform.services = this.selectedItems1;
  
     this.loginService.updateClinicData(this.updform).subscribe(updateDoctor =>{
       alert('Updated Successfully');
      //this.router.navigateByUrl('/dashboard');
     })
    
  }




}
