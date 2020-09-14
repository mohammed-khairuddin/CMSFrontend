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
  impression = []
  speckleTracking = []
  selectedItems4=[]
  regionalWallMotion = [];
  DoctorData;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 
  }

  dynamicComment: Array<ReportComponent> = [];  
  newComment: any = {}; 

  ngOnInit(): void {

    this.loginService.getDoctorData(localStorage.getItem("id")).subscribe(data => {
      //console.log(data)
      this.DoctorData = data['doctor']
    }, error => console.log(error));

    this.loginService.getPatientData(localStorage.getItem("pmid")).subscribe(data => {   
      //console.log(data);  
      this.patientDataObject = data['doctor'];

      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => { 
        this.clinicDataObject = data['doctor']
        //console.log(this.clinicDataObject);
      })

    }, error => console.log(error));

  
    this.loginService.observationsGetAllByPatient().subscribe((data:any) => {
        const {observations,masterData} = data;
        //console.log(masterData);
        this.doctorAdvice = masterData['doctorAdvice']
        this.conclusion = masterData['conclusion']
        this.impression = masterData['impressions']
        this.speckleTracking = masterData['speckleTracking']
        this.observationsObject = observations.map(observation => {
          const type =observation.type
          const formatedTypename = type.replace("Observation","").replace(/ /g, "") 
          //console.log(this.doctorAdvice);
          const masterdata = masterData[formatedTypename].map(master =>{
            return {...master,type:`${formatedTypename}Observation`}
          })
          //console.log(masterdata['itemName']);
				  return ({...observation,ttype:formatedTypename,masterValues:masterdata,comments:[]})
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
      text: "Select Data",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
  };

  }


  //////////////////////////////////



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

  const impressionslen = this.selectedItems2.length;
  const impressionsCommentslen = this.impressioncomments.length;

  const conclusionslen = this.selectedItems3.length;
  const conclusionsCommentslen = this.conclusioncomments.length;

  const doctorslen = this.selectedItems4.length;
  const doctorsCommentslen = this.docadvicecomments.length;

  const getReport  = {
  selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
  patientData : this.patientDataObject,
  impressions: this.selectedItems2.filter(impressionslen => impressionslen != '0'),    
  impressionComments:this.impressioncomments.filter(impressionsCommentslen => impressionsCommentslen != '0'),
  conclusions: this.selectedItems3,
  conclusionsComments:this.conclusioncomments,
  doctorAdvice: this.selectedItems4,
  doctorAdviceComments:this.docadvicecomments,
  observations:this.observationsObject 
}

console.log(getReport)

const getObservationsReport  = {
  selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
  //observations:this.observationsObject 
}

console.log(getObservationsReport)

// this.loginService.masterReportInsertion(getReport).subscribe(res =>{
//   console.log(res);
//   if(res['message'] ==  'submitted successfully' ) {
//   alert('Report Observations Inserted Successfully');
//   this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
// } 
 
// })



// this.loginService.observationsReportUpdate(getObservationsReport).subscribe(res =>{
//   console.log(res);
//   if(res['message'] ==  'submitted successfully' ) {
//   alert('Report Observations Updated Successfully');
//   this.router.navigateByUrl(`/observations/`+localStorage.getItem('pmid'));
// } 
 
// })



}

/////////////////////////////// PDFF

// generatePdf(action='open'){
//   console.log("im looking for")
//   console.log(this.reportFormData)
//   console.log(this.getformatteddata)
//   const documentDefinition = this.getDocumentDefinition();
//   switch (action) {
//     case 'open': pdfMake.createPdf(documentDefinition).open(); break;
//     case 'download': pdfMake.createPdf(documentDefinition).download(); break;        
//   }
// }


// getDocumentDefinition() {
//   sessionStorage.setItem('report', JSON.stringify(this.reportFormData));
//   sessionStorage.setItem('report',JSON.stringify(this.getformatteddata))
//   //let pdfFormData = this.reportFormData()
//   console.log("Stringify Observations from reportformdata")
//   console.log(this.reportFormData())

//   //console.log(this.getObservationsToPdf(this.observationsObject))

//   const observations = [{
//     value:{selectCavitysize:"Increased-Moderate",
//     selectVentricularmass: "BorderLine",
//     selectWallthickness: "Decreased"}},
//     {
//     value:{left:"sairate",
//     right: "BorderLine",
//     sai: "Decreased"}}]
    
//     let observationsObject = {}
//     const y = observations.map(data => {
//     Object.assign(observationsObject, data.value);
//     })
//     console.log("checking for observation object")
//      console.log(observationsObject)
//      console.log("get obs to pdf")
//      console.log(this.getObservationsToPdf(this.observationsObject))


//   //console.log(JSON.stringify(pdfFormData.observations))

//   return {
//     content: observationsObject}
//   }
  

//   getObservationsToPdf(data:any[]){
//     let observation_data = {};
//     data.forEach( obsData =>{
//       // Value is json object with observation data, now you have to check each key if it is masterdata or comments or doctor advice or your head
//     // then perform for each on the value after doing required value grab like master = value['masterdata] will again give you array of json objs
//     //on which you have to do a foreach again and split them into rows and columns
//     Object.entries(obsData).forEach(([key, value])=>{
//       if (value && Array.isArray(value)){
//         console.log(value)
//         // observation_data[key] = this.getformatteddata(value)
//       }
//       //for each loop on json
//     //  let resultset_array = this.getformatteddata(obsData[obsKey])//json_values are arrays)
//     //  obsData.ObsKey, resultset_array// See how to add key value pair to json object.
//     //   // this will create a json with the keys that you need or see in the report 
//       //and the values are arrays that you can show as table in documentdefinition
//     // on each function you get back an array, now you have to add them to json and return
//     });
    
      
//       //console.log(obsData)
//   });
//    // console.log("..............")
//    // return observation_data
//   }

//   getformatteddata(data:any[]){
//     data.forEach(scopedData=>{
//       let column=[]
//       let rows=[]
//       let master_array=[]
//       column = Object.keys(scopedData)
//       console.log("Print column")
//       console.log(column)
//       Object.entries(scopedData).forEach(([key, value])=>{
//         console.log("printing value of each key i.e, row values")
//         console.log(value)
//       });
  
      
//       //console.log(master_array)
    
//     })
//     console.log("...,,,,,,")
    
//     return this.getformatteddata;
    
//   }

}
