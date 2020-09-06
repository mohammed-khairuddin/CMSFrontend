import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
// import { format } from 'path';
// import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')

  patientDataObject;
  observationsObject;
  AllMastersList;
  clinicDataObject;

  itemList = [];
  itemList1 = [];
  selectedItemsObservations = [];
  selectedItems1 = [];
  selectedItems2 = [];
  selectedItems3  = [];
  settings = {};



  public comments: any[] = [{
    id: 1,
    comment: ''
  }];

  public impressioncomments: any[] = [{
    id: 1,
    impressioncomment: ''
  }];

  public conclusioncomments: any[] = [{
    id: 1,
    conclusioncomment: ''
  }];

  public docadvicecomments: any[] = [{
    id: 1,
    docadvicecomment: ''
  }];

  updform = {
    anteriorwall :'',
    posteriorwall:'',
    inferiorwall:'',
    lateralwall:'',
  }

  doctorAdvice= []
  conclusion = []
  selectedItems4=[]
  regionalWallMotion = [];

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 
  }

  dynamicComment: Array<ReportComponent> = [];  
  newComment: any = {}; 

  ngOnInit(): void {

    this.loginService.getPatientData(localStorage.getItem("pmid")).subscribe(data => {   
      console.log(data);  
      this.patientDataObject = data['doctor'];

      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => { 
        this.clinicDataObject = data['doctor']
        //console.log(this.clinicDataObject);
      })

    }, error => console.log(error));

  
    this.loginService.observationsGetAllByPatient().subscribe((data:any) => {
        const {observations,masterData} = data;
        this.doctorAdvice = masterData['doctorAdvice']
        this.conclusion = masterData['conclusion']
        this.observationsObject = observations.map(observation => {
          const type =observation.type
          const formatedTypename = type.replace("Observation","").replace(/ /g, "")
          const masterdata = masterData[formatedTypename].map(master =>{
            return {...master,type:`${formatedTypename}Observation`}
          })
				  return ({...observation,masterValues:masterdata,comments:[]})
        })
    })


    this.regionalWallMotion = [
      { "id": 1, "itemName": "Normal" },
      { "id": 2, "itemName": "Akinetic" },
      { "id": 3, "itemName": "Hypokinetic" },
      { "id": 4, "itemName": "Dyskinetic" },
      { "id": 5, "itemName": "Aneurysm" },
      { "id": 6, "itemName": "Not seen" }
  ];


  this.settings = {
      text: "Select Master",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
  };

  }


onItemSelect(item: any,type) {
  console.log(item["itemName"]);
  console.log(this.selectedItemsObservations);
 
}
OnItemDeSelect(item: any) {
  console.log(item);
  console.log(this.selectedItemsObservations);
}
onSelectAll(items: any) {
  console.log(items);
}
onDeSelectAll(items: any) {
  console.log(items);
}

/////////////////////////////

addComment(k,type) {
  console.log(k);
  this.observationsObject[k].comments.push({
   id: k+ 1,
   type:type,
  comment: ''
  })

}

removeComment(k) {
  this.observationsObject[k].comments.splice(k, 1);
}

logValue() {
  console.log(this.comments);
}

//////////////////////////////////

addImpressionComment() {
  this.impressioncomments.push({
    id: this.impressioncomments.length + 1,
    //id: k + 1,
    comment: ''
  });
}

removeImpressionComment(i: number) {
  this.impressioncomments.splice(i, 1);
}

/////////////////////////////////

addConclusionComment() {
  this.conclusioncomments.push({
    id: this.conclusioncomments.length + 1,
    //id: k + 1,
    comment: ''
  });
}

removeConclusionComment(i: number) {
  this.conclusioncomments.splice(i, 1);
}

/////////////////////////////////

addDocAdviceComment() {
  this.docadvicecomments.push({
    id: this.docadvicecomments.length + 1,
    //id: k + 1,
    comment: ''
  });
}

removeDocAdviceComment(i: number) {
  this.docadvicecomments.splice(i, 1);
}

/////////////////////////////////



reportFormData=() =>{
const getReport  = {
  selctedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
  patientData : this.patientDataObject,
  impressions: this.selectedItems2,   //to do 
  conclusions: this.selectedItems3,
  doctorAvice: this.selectedItems4,
  observations:this.observationsObject
}

console.log(getReport)


}



}
