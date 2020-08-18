import { Component, OnInit } from '@angular/core';
//import logo from '../../../images/logo.png';
//import {Router} from '@angular/router';
import {Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'ClinicManagement System';

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  type  = localStorage.getItem('type')

  constructor(private router:Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  logout = ()  => {
    localStorage.clear();
    this.router.navigateByUrl('/')
    this.isLogin = localStorage.getItem('token')  ? true : false;
    this.id  = localStorage.getItem('id')
    this.role  = localStorage.getItem('role')

  }

  getAddPage  = (type) => {
    console.log(type);
    window.localStorage.setItem("type", type.toString());
    this.router.navigateByUrl(`/mastertable/`+type);
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });


  }
 
  // changeRoute(url) {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true });
  //   if(this.role==='CLINIC'){
  //     this.router.navigate(["/clinicdashboard"]);
  //   } else if(this.role==='DOCTOR'){
  //     this.router.navigate(["/doctordashboard"]);
  //   } else{
  //     this.router.navigate(["/dashboard"]);
  //   }
    
  // }


}
