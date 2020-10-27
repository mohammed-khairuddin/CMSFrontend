import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-general-addmaster',
  templateUrl: './general-addmaster.component.html',
  styleUrls: ['./general-addmaster.component.scss']
})
export class GeneralAddmasterComponent implements OnInit {
  AllMastersList;
  p: number = 1; 
  filter;

  constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute) { }

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  type  = localStorage.getItem('type')

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });

    this.loginService.getMaster(this.type).subscribe(master =>{
      //console.log(master);
      this.AllMastersList = master['master']
     //console.log(this.AllClinicList)
    })

  }

  goToAdd  = (type) => {
    
    this.router.navigateByUrl(`/addmastertable/`+type);
  }

  goToEditMaster  = (list,type) => {
    //console.log(type);
    window.localStorage.setItem("mid", list.id.toString());
    
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });

    this.router.navigateByUrl(`/editmastertable/${list.id}`);
    
    //this.router.navigateByUrl(`/editmastertable/`+type+`/${list.id}`);
    //this.router.navigateByUrl(`/editmastertable/`+mid);
  }

}
