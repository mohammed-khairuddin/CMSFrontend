import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
//import { stringify } from 'querystring';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')

  master :Object;
  obtype: string;
  patientDataObject;

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    //this.getallJsonList();

    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
      //console.log(this.obtype);
      //console.log('++++++');
   });

   this.loginService.getPatientData(localStorage.getItem("pmid")).subscribe(data => {
    console.log(data)
    this.patientDataObject = data['doctor']
  }, error => console.log(error));

  

 
  this.itemList = [
    { "id": 1, "itemName": "India", "category": "asia" },
    { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
    { "id": 3, "itemName": "Germany", "category": "Europe" },
    { "id": 4, "itemName": "France", "category": "Europe" },
    { "id": 5, "itemName": "South Korea", "category": "asia" },
    { "id": 6, "itemName": "Sweden", "category": "Europe" }
  ];

  // this.selectedItems = [
  //   { "id": 1, "itemName": "India" },
  //   { "id": 2, "itemName": "Singapore" },
  //   { "id": 4, "itemName": "Canada" }];


  this.settings = {
    singleSelection: false,
    text: "Select Fields",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    searchPlaceholderText: 'Search Fields',
    enableSearchFilter: true,
    badgeShowLimit: 5,
    groupBy: "category"
  };


  }


  getAddPage  = (obtype) => {
    console.log(obtype);
    //console.log('=====//////////');
    window.localStorage.setItem("obtype", obtype.toString());
    // this.router.navigateByUrl(`/mastertable/`+type);   
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');

   });


  }
  
  // getallJsonList(){
   
  //   this.loginService.allJsonListMaster().subscribe(master => {
  //       //console.log(master);
  //       this.master=master.master[0];

  //     },
  //   )
  // }

 
  
//   print(): void {
//     let printContents, popupWin;
//     printContents = document.getElementById('print-section').innerHTML;
//     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
//     popupWin.document.open();
//     popupWin.document.write(`
//       <html>
//         <head>
//           <title>Print tab</title>
//           <style>
//           //........Customized style.......
//           </style>
//         </head>
//     <body onload="window.print();window.close()">${printContents}</body>
//       </html>`
//     );
//     popupWin.document.close();
// }


  
}
