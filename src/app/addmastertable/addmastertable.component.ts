import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-addmastertable',
  templateUrl: './addmastertable.component.html',
  styleUrls: ['./addmastertable.component.scss']
})
export class AddmastertableComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')


  type: string;
  key:number;
  value:number;

  addform = {
    key: '',
    value:'',
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  addMasterForm: FormGroup;

  ngOnInit(): void {
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });

   this.addMasterForm = this.formBuilder.group({

    key: ['', Validators.required],
    value: ['', Validators.required]
  });

  }
  
  addMaster = (data):any => {
    
    if(data.key === '' || data.key === null  ){
      alert('Please Enter Valid Key');
     }

     if(data.value === '' || data.value === null  ){
      alert('Please Enter Valid Value');
     }

     const masterManagementReq = {
      "key": data.key,
      "value": data.value,
     }
     console.log(masterManagementReq);

     this.loginService.masterInsertion(masterManagementReq,this.type).subscribe(res =>{
      console.log(res);
        if(res['status'] ==  '200' ) {
        alert('Data Inserted Successfully');
        this.router.navigateByUrl(`/mastertable/`+this.type);
      } 
       
   })

  }

}
