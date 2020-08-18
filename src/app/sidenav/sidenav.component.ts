import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import {Router, ActivatedRoute } from '@angular/router';
//import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  type  = localStorage.getItem('type')
  
  
  constructor(private router:Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {


	  
    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;
    
        trigger.click(function () {
          hamburger_cross();      
        });
    
        function hamburger_cross() {
    
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });  
    });
  
      
  }

  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  getAddPage  = (type) => {
    console.log(type);
    window.localStorage.setItem("type", type.toString());
    this.router.navigateByUrl(`/mastertable/`+type);
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });


  }

}
