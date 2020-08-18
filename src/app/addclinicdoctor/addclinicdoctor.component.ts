import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addclinicdoctor',
  templateUrl: './addclinicdoctor.component.html',
  styleUrls: ['./addclinicdoctor.component.scss']
})
export class AddclinicdoctorComponent implements OnInit {

  role: string;
  name: string;
  type:string;
  speciality:string;
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
  addform = {
  role: '',
  name:'',
  type:'',
  speciality:'',
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
  googlemaplocation:''
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  addClinicDoctorForm: FormGroup;

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

    
    this.addClinicDoctorForm = this.formBuilder.group({

      role: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      speciality: ['', Validators.required],
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
      googlemaplocation:['',Validators.required],
    });

    this.loginService.getAllClinicList().subscribe(clinic =>{
      this.AllClinicList = clinic['clinic']
     //console.log(this.AllClinicList)
    })

  }

/******************************/

  
  
get f(){
  return this.addClinicDoctorForm.controls;
}
   
onFileChange(event) {

  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.addClinicDoctorForm.patchValue({
      fileSource: file
    });
    console.log(file);
  }
}

onLogoChange(event) {

  if (event.target.files.length > 0) {
    const logo = event.target.files[0];
    this.addClinicDoctorForm.patchValue({
      fileSource1: logo
    });
   
  }
}

onPhotoChange(event) {

  if (event.target.files.length > 0) {
    const photo = event.target.files[0];
    this.addClinicDoctorForm.patchValue({
      fileSource2: photo
    });
   
  }
}

 

/*****************************/
  addClinicDoctor = (data):any => {

    if(data.role === '' || data.role === null  ){
      alert('Please Select Valid User Role');
     }
     if(data.name === '' || data.name === null){
      alert('Please Enter Valid Name For Clinic/Doctor');
     }
     if(data.email === '' || data.email === null){
      alert('Please Enter Valid Email id');
     }
     if(data.mobNo === '' || data.mobNo === null ){
      alert('Please Enter Valid Mobile Number');
     }
    if(data.username === '' || data.username === null){
      alert('Please Enter Valid User Name');
     }
     if(data.password === '' || data.password === null){
      alert('Please Enter Valid Password');
     }
     if(data.cpassword === '' || data.cpassword === null){
      alert('Please Enter Valid Confirm Password');
     }
     if(data.country === '' || data.coutry === null){
      alert('Please Select Valid Country');
     }
     if(data.state === '' || data.state === null){
      alert('Please Select Valid State');
     }
     if(data.city === '' || data.city === null ){
      alert('Please Select Valid City');
     }
     if(data.address === '' || data.address === null ){
      alert('Please Enter Address');
     }
     if(data.password != data.cpassword ){
      alert('Password and Confirm Password Does not Match');
      return false;
     }
    
    if(data.role != '' && data.name != '' && data.email != '' && data.username != '' && 
    data.password != '' && data.mobNo != '' )
      {

        const clinicManagementReq = {
          "role": data.role,
          "name": data.name,
          "type":data.type,
          "speciality":data.speciality,
          "clinictype":data.clinictype,          
          "clinicId": data.clinicId,
          "qualification":data.qualification,
          "specialitydoctor":data.specialitydoctor,
          "email":data.email,
          "phonenumber":data.phonenumber,
          "mobNo": data.mobNo,
          "emergencynumber":data.emergencynumber,
          "emergencymobnumber":data.emergencymobnumber,
          "whatsappno":data.whatsappno,
          "username": data.username,
          "password": data.password,
          "country": data.country,
          "state": data.state,
          "district":data.district,
          "city": data.city,
          "citycode":data.citycode,
          "pincode":data.pincode,
          "address": data.address,
          "otherdetails":data.otherdetails,
          "url":data.url,
          "ambulance":data.ambulance,
          "ambulancephno":data.ambulancephno,
          "degreedoctor":data.degreedoctor,
          "timingsdays":data.timingsdays,
          "timingshours":data.timingshours,
          "googlemaplocation":data.googlemaplocation
        }
        
        console.log(clinicManagementReq);
  

          this.loginService.registration(clinicManagementReq).subscribe(res =>{
            console.log(res);
            //if(res['message'] ==  'Successfully created' || res['message'] == 'File uploaded successfully!' ) {
              if(res['status'] ==  '200' ) {
              alert('Added Successfully');
              this.router.navigate(['/dashboard']);
            } 
            if(res['message'] ==  'cannot enter' ) {
              alert('Maximum Doctors Assigned to this Clinic.');
              this.router.navigate(['/addclinicdoctor']);
            } 
            // else{
            //   alert("Invalid Details. Please Check the Details");
            //   return false;
            //   }
            
         })
       

       } else{

        alert("Please Fill the Details");
        return false;
        

       }
       
  }


}
