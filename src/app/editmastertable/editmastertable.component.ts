import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editmastertable',
  templateUrl: './editmastertable.component.html',
  styleUrls: ['./editmastertable.component.scss']
})
export class EditmastertableComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  type  = localStorage.getItem('type')

 
  //type: string;
  key:number;
  value:number;
  AllMasterList

  updateform = {
    key: '',
    value:'',
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 
    
}

addMasterForm: FormGroup;
  ngOnInit(): void {    

   // console.log(this.type);
   
  //   this.actRoute.paramMap.subscribe(params => {
  //     this.type = params.get('type');
  //     console.log('++++');
  //     console.log(this.type);
  //  });

   
   this.addMasterForm = this.formBuilder.group({

    key: ['', Validators.required],
    value: ['', Validators.required]
  });


  this.loginService.getMasterDetail(this.type).subscribe(master =>{
    this.updateform = master['master']
   console.log(this.updateform)
  })

  }


  updateMaster = ():any => {
    this.loginService.updateMaster(this.updateform,this.type).subscribe(updateDoctor =>{
     
      if(updateDoctor['status'] ==  '200' ) {
        alert('Updated Successfully');
        this.router.navigateByUrl(`/mastertable/`+this.type);
      } 
      
    })
   
 }


}
