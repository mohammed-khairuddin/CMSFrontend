import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-generate-previewallmaster',
  templateUrl: './generate-previewallmaster.component.html',
  styleUrls: ['./generate-previewallmaster.component.scss']
})
export class GeneratePreviewallmasterComponent implements OnInit {
  AllMastersList;
  p: number = 1; 
  filter;

  constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute) { }

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  gtype  = localStorage.getItem('gtype')

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.gtype = params.get('gtype');
      console.log('---------');
      console.log(this.gtype);
   });

    this.loginService.getMaster(this.gtype).subscribe(master =>{
      //console.log(master);
      this.AllMastersList = master['master']
     //console.log(this.AllClinicList)
    })

  }

  goToAdd  = (gtype) => {
    
    this.router.navigateByUrl(`/general-addmaster/`+gtype);
  }

  goToEditMaster  = (list,gtype) => {
    //console.log(gtype);
    window.localStorage.setItem("gmid", list.id.toString());
    
    this.actRoute.paramMap.subscribe(params => {
      this.gtype = params.get('gtype');

   });

    this.router.navigateByUrl(`/general-editmaster/${list.id}`);
    
    //this.router.navigateByUrl(`/editmastertable/`+gtype+`/${list.id}`);
    //this.router.navigateByUrl(`/editmastertable/`+mid);
  }

}
