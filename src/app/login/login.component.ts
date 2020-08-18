import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginForm: FormGroup;
  message;
  //invalidLogin: boolean = false;

  // isLogin = localStorage.getItem('token')  ? true : false;
  // id  = localStorage.getItem('id')
  // role  = localStorage.getItem('role')

  ///////////////////////////////

  loginform = {
    username: '',
    password:''
  };
  ////////////////////////////
  constructor(private loginService: LoginserviceService,private router:Router,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.compose([
         Validators.required,
         //Validators.minLength(6)
      ])),
      password: new FormControl("", this.passwordvalidation)
   });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"password" : true};
    }
 }


  login = (data):any => {
    
    if(data.username === '' || data.username === null){
      alert('Please Enter Valid User Name');
     }
     if(data.password === '' || data.password === null){
      alert('Please Enter Valid Password');
     }
     
     if( data.username == '' && data.password == ''){
      alert("Invalid Login. Please Check the Details");
         return false;
     }

    const  loginBody = {
      "username": data.username,
      "password": data.password
    }
    
     this.loginService.login(loginBody).subscribe(res =>{
      
        if(res['accessToken'] !=  '' ) {
         //console.log(res);;
        localStorage.setItem('token',res['accessToken'])
        localStorage.setItem('role',res['role'])
        localStorage.setItem('id',res['id'])
        localStorage.setItem('name',res['name'])
        alert("Login Successful");

        if( localStorage.getItem('role') === "CLINIC" ){
        this.router.navigate(['/clinicdashboard']);
        }  
        else if( localStorage.getItem('role') === "DOCTOR" ){
          this.router.navigate(['/doctordashboard']);
          }
          else{
        this.router.navigate(['/dashboard']);
        }
       } else  if(res['message'] ===  'Please check the details' || res['status'] === '401' ) {
        alert("Invalid Login. Please Check the Details");
        return false;

        }else{
        alert("Invalid Login. Please Check the Details");
        return false;
       }
      
     },
     err => {
        //console.log(err);
        alert("Invalid Login. Please Check the Details");
        return false;
     }
     ) 

    } 
    

  

}
