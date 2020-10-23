import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import { SharedService } from '../event-emitter.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';



@Component({
  selector: 'app-case-completed',
  templateUrl: './case-completed.component.html',
  styleUrls: ['./case-completed.component.scss']
})
export class CaseCompletedComponent implements OnInit {

   
  p: number = 1;
  itemsPerPage :number;
  currentPage :number;
  totalItems :number;
  filter;
 

  AllClinicPatientsList: any = [];  
  AllClinicDoctorList: any;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

 
  docId;
  searchString;
  tempList;
  TotalList;
  ClinicData;
  status = 'assigned';
  // currentDate = new Date();
  // cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  //date = formatDate(new Date(), 'yyyy-MM-dd');
 date_ob = new Date();
 date = ("0" + this.date_ob.getDate()).slice(-2);
 month = ("0" + (this.date_ob.getMonth() + 1)).slice(-2);
 year = this.date_ob.getFullYear();

 reqdate = this.year + "-" + this.month + "-" + this.date;


 observationsObject;

 //////////////////////////////////////////

  patientDataObject = { 
    'ef' : '',
    'patientname' : '',
    'id' : '',
    'dob' : '',
    'age' : '',
    'bpsystolic' : '',
    'bpdiastolic' : '',
    'testdate' : '',
    'gender' : '',
    'height' : '',
    'weight' : '',
    'bsa' : '',
    'bmi' : '',
    'testtype' : '',
    'ew' : '',
    'clinicId' : '',
    'docId':''
   };
  
  itemList = [];
  itemList1 = [];
  selectedItemsObservations:any = [];
  selectedItems1 = [];
  selectedItems2 = [];
  selectedItems3  = [];
  settings = {};

  
 anteriorwall;
 posteriorwall;
 inferiorwall;
 lateralwall;
 valueofef:any;
 pulmonaryarterypressure;
 avgsystolicstrain;


 observationsObjecttype;
 AllMastersList;
 clinicDataObject;

  
  updform = {
    anteriorwall :'',
    posteriorwall:'',
    inferiorwall:'',
    lateralwall:'',
    valueofef:'',
    pulmonaryarterypressure:'',
    avgsystolicstrain:''
  }
  
  doctorAdvice= []
  conclusion = []
  impression = []
  speckleTracking = []
  selectedItems4=[]
  regionalWallMotion = [];
  DoctorData;
  selectedregionalWallMotion = [];

  Observationscomments:[]
  selectedObseravtionsInEditList: []

  regionalWalls:[];
  comments;
  conclusioncomments;
  docadvicecomments;
  impressioncomments;

  
  //////////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private sharedService:SharedService)
  {
    
   }
  ngOnInit(): void {

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      //console.log(data)
      this.ClinicData = data['doctor']
    }, error => console.log(error));
      

    this.loginService.getAllClinicPatientsListClinicStatusReport(this.status).subscribe(user =>{
      //console.log(user);
      this.AllClinicPatientsList = user['user']
      this.TotalList = this.AllClinicPatientsList;

    })

    this.regionalWallMotion = [
      { "id": 1, "itemName": "Normal" },
      { "id": 2, "itemName": "Akinetic" },
      { "id": 3, "itemName": "Hypokinetic" },
      { "id": 4, "itemName": "Dyskinetic" },
      { "id": 5, "itemName": "Aneurysm" },
      { "id": 6, "itemName": "Not seen" }
  ];


   this.updform.anteriorwall = 'Normal';
   this.updform.posteriorwall = 'Normal'; 
   this.updform.inferiorwall = 'Normal';
   this.updform.lateralwall = 'Normal';



  }

  

  goToViewObservations = (alllist):any => {
    alert(alllist.id);
    window.localStorage.setItem("prid", alllist.id.toString());
    console.log(localStorage.getItem("prid"));
  
    //this.router.navigateByUrl(`/report-preview/${alllist.id}`)

     //////////////////////////////////////////////////
    console.log(alllist.id);
    
      this.loginService.getPatientData(alllist.id).subscribe(data => {   
      console.log(data);
      console.log('+++++--------');
       this.patientDataObject = data['doctor'];
       this.loginService.getDoctorData(this.patientDataObject.docId).subscribe(data => {      
         this.DoctorData = data['doctor']
       }, error => console.log(error));
 
       this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => { 
         this.clinicDataObject = data['doctor']
       })
 
     }, error => console.log(error));
 
     this.loginService.observationsGetAllByPatientReport().subscribe((data:any) => {
       const {observations,masterData,conclusioncomment,conclusionreport,doctorAdviceComments,
         doctorAdvicereport,impressioncomment,impressionreport,observationItem,
         observtaionComments,speckleTrackingreport,regionalWall} = data;          
 
        console.log(data);
        console.log('====================GET');
       this.doctorAdvice = masterData['doctorAdvice']
       this.conclusion = masterData['conclusion']
       this.impression = masterData['impressions']
       this.speckleTracking = masterData['speckleTracking']
       
       this.selectedItems2 = impressionreport;
       this.selectedObseravtionsInEditList = observationItem;
       this.comments = observtaionComments;
       this.conclusioncomments = conclusioncomment;
       this.selectedItems3 = conclusionreport;
       this.docadvicecomments = doctorAdviceComments;
       this.selectedItems4 = doctorAdvicereport;
       this.impressioncomments = impressioncomment;
        //console.log(this.comments)
       //this.updform = regionalwallmotion;         
       this.regionalWalls=regionalWall,
        this.selectedItems1 = speckleTrackingreport;
        // let regionalwalllen = this.regionalWalls.length;
        // for(let i=0; i<regionalwalllen; i++){
        //  this.updform =this.regionalWalls[i];            
        // }
 
       this.observationsObject = observations.map(observation => {
         const {type,comments} =observation
         const formatedTypename = type.replace("Observation","").replace(/ /g, "") ;
 
         const masterdata = masterData[formatedTypename].map(master =>{
           return {...master,type:`${formatedTypename}Observation`}
         })
         //const getRespectiveComments = this.groupBy(comments)
 
         return ({...observation,ttype:formatedTypename,masterValues:masterdata,comments:[],regionalWall,observationItem,impressionreport})
       })
 
       this.mapSelectedObservationsToMultiSelect();
       this.mapCommentsToTextbox();
   })
 
 
 
     //////////////////////////////////////////////////

     

  }


  click(){
    this.sharedService.sendClickEvent();
    }

    goToUpdatePatientDoc = (alllist) => {
      alert('Are you Sure to Close the case');
      window.localStorage.setItem("rpid", alllist.id.toString());
       this.loginService.updPatientDocReportStatusClosed().subscribe(updateAssignment =>{
       //alert('Doctor Assigned Successfully');
       if(updateAssignment['description']=='Patient Status updated'){
        alert('Case Closed');
        this.router.navigateByUrl(`/clinicdashboard`)
        window.location.reload();
       }
       
     
      })
   }

   /////////////////////////////////////////////

reportFormData1=() =>{

  return  {
    selctedObservations: this.selectedObseravtionsInEditList,
    patientData : this.patientDataObject,
    impressions: this.selectedItems2,   //to do 
    conclusions: this.selectedItems3,
    doctorAdvice: this.selectedItems4,
    observations:this.observationsObject,
    regionalWall:this.regionalWalls,
    impressionComments:this.impressioncomments,
    doctorAdviceComments:this.docadvicecomments,
    conclusion:this.selectedItems3,
    conclusionsComments:this.conclusioncomments
  }


}

 groupBy(list) {
    const map = new Map();
    list.forEach((item) => {
         const key = item['type'];
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

mapSelectedObservationsToMultiSelect = () => {
  const groupedSelectedObservations = this.groupBy(this.selectedObseravtionsInEditList)
  for(var i=0; i<this.observationsObject.length;i++) {
     this.selectedItemsObservations[i] =
              groupedSelectedObservations.get(this.observationsObject[i].type)
      }
   
}

mapCommentsToTextbox = () => {
  const groupedSelectedObservations = this.groupBy(this.comments)
 
  for(var i=0; i<this.observationsObject.length;i++) {    
     this.observationsObject[i].comments =
              groupedSelectedObservations.get(this.observationsObject[i].type) || []
      }
   
}
  getSelectedObservationsList = (filterType) => {
      return this.selectedObseravtionsInEditList.filter((data:any) => data.type == filterType)
  }




/////////////////////////////// PDFF

generatePdf(action='open'){
 
  this.sharedService.sendClickEvent();
  const documentDefinition = this.getDocumentDefinition();
  switch (action) {
    case 'open': pdfMake.createPdf(documentDefinition).open(); break;
    case 'download': pdfMake.createPdf(documentDefinition).download(); break;        
  }
}

getDocumentDefinition() {
  sessionStorage.setItem('report', JSON.stringify(this.reportFormData1));
  //sessionStorage.setItem('report',JSON.stringify(this.getformatteddata))
  //let pdfFormData = this.reportFormData1()
  console.log("Stringify Observations from reportformdata")
  console.log(this.reportFormData1())

  //console.log(this.observationsObject[0].value);

    //console.log("checking for observation object")
     //console.log(this.observationsObject)
     //console.log("get obs to pdf")
     
    




     var rows = [];
     var rows1=[];
     var dd = [];
     var dd1=[];
     var impressionpdf=[];
     var doctoradvicepdf=[];
     var conclusionpdf=[];
     for(var i in ((this.reportFormData1()).observations)) { 
       console.log(((this.reportFormData1()).observations[i].type).replace(/Observation/g,''))
      dd.push({columns:[{ text: 'Objective Type', bold:true,},{text: ((this.reportFormData1()).observations[i].type).replace(/Observation/g,'').toUpperCase(),margin:[-6,0,0,0]}]});
      dd.push({ text: 'Value', bold:true,margin:[0,15,0,0]}),
      console.log(((JSON.stringify((this.reportFormData1()).observations[i].value).replace( /[{}]/g, '' )).replace(/['"]+/g, '')).replace(/select/g,''))
      dd.push({lineHeight:2,text: ((JSON.stringify((this.reportFormData1()).observations[i].value).replace( /[{}]/g, '' )).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g,''),margin:[250,-15,0,0]});
      dd.push({ 
        text: 'Master Value', 
        style: 'header',
        bold:true,
       margin:[0,15,0,0]}
    ,);
    //console.log('=================');
      for(var j in (this.reportFormData1().observations[i].observationItem)){
      console.log(this.reportFormData1().observations[i].observationItem)
      if((this.reportFormData1().observations[i].observationItem[j]).type==(this.reportFormData1()).observations[i].type){
        console.log(this.reportFormData1().observations[i].observationItem[j])
       dd.push(
        {lineHeight:2,columns:[{ text: '', bold:true},{text: `${(this.reportFormData1()).observations[i].observationItem[j].itemName}`,margin:[0,-15,0,0] }]})
        dd.push('')
      }
    }
    dd.push({lineHeight:1.5,columns:[{
      text: 'Comment', 
      style: 'header',
      bold:true,
     margin:[0,0,0,0]}]}
  ,);
      for(var k in this.reportFormData1().observations[i].observtaionComments){
        if((this.reportFormData1()).observations[i].type==this.reportFormData1().observations[i].observtaionComments[k].type){
          console.log(this.selectedObseravtionsInEditList)
        console.log((this.reportFormData1()).observations[i].type)  
console.log(this.reportFormData1().observations[i].observtaionComments[k])
dd.push(
  {lineHeight:1.5,columns:[{ text: '', bold:true},{text: `${(this.reportFormData1()).observations[i].observtaionComments[k].comment}`,margin:[0,0,0,0] }]})

      }
      console.log((this.reportFormData1()).observations[i].regionalWall[i].anteriorwall) 
        console.log()
      }
     
  }

  rows.push('\n')
  rows1.push('')
  rows1.push({ lineHeight: 1,columns:[{text: '1. M Mode Echocardiography'}]});
  rows1.push({ lineHeight: 1,columns:[{text: '2. Two Dimensional Echocardiography'}]});
  rows1.push({ lineHeight: 1,columns:[{text: '3. Conventional and Color Doppler Echocardigraphy'}]});
  rows1.push({ lineHeight: 1,columns:[{text: '4. Tissue Doppler'}]});
  rows1.push({ lineHeight: 2,columns:[{text: '5. Speckle Tracking and Strain Imaging'}]});
  rows1.push({ lineHeight: 1,columns:[{text: ``}]});
  
  for(var i in this.reportFormData1().regionalWall)
  console.log(this.reportFormData1().regionalWall);
  {
    dd1.push({ lineHeight: 2,columns:[{text:'AnteriorWall:',bold:true},{text: (this.reportFormData1()).regionalWall[i].anteriorwall},
    {text:'PosteriorWall:',bold:true},{text: (this.reportFormData1()).regionalWall[i].posteriorwall}
  ]});
  dd1.push({ lineHeight: 2,columns:[{text:'InferiorWall:',bold:true},{text: (this.reportFormData1()).regionalWall[i].inferiorwall},
    {text:'LateralWall:',bold:true},{text: (this.reportFormData1()).regionalWall[i].lateralwall}
  ]});
  dd1.push({ lineHeight: 2,columns:[{text:'Pulmonary Artery Pressure:',bold:true},{text: (this.reportFormData1()).regionalWall[i].pulmonaryarterypressure},
    {text:'Value of Ef:',bold:true},{text: (this.reportFormData1()).regionalWall[i].valueofef}
  ]});
  dd1.push({ lineHeight: 2,columns:[{text:'The Average peak of Systolic Strain:',bold:true},{text: (this.reportFormData1()).regionalWall[i].avgsystolicstrain},
    //{text:'PosteriorWall:',bold:true},{text: (this.reportFormData1()).observations[i].regionalWall[i].posteriorwall}
  ]})
    console.log((this.reportFormData1()).regionalWall[i].anteriorwall) 
    console.log(this.reportFormData1())
   
  }
  
  impressionpdf.push({columns:[{
    text: 'Impression Master',  
    bold:true,
   }]}
,);
  for(var i in this.reportFormData1().impressions){
    impressionpdf.push({lineHeight:2, columns:[{text:'',bold:true},{text:`${this.reportFormData1().impressions[i].itemName}`,margin:[0,-15,0,0]}]})
  }
  impressionpdf.push({columns:[{
    text: 'Impression Comment',  
    bold:true,
   }]}
,);
  for(var i in this.reportFormData1().impressionComments){
    
    impressionpdf.push({lineHeight:2, columns:[{text:'',bold:true},{text:`${this.reportFormData1().impressionComments[i].impressioncomment}`,margin:[0,-16,0,0]}]})
  }
  console.log(this.reportFormData1().regionalWall)
  
  doctoradvicepdf.push({lineHeight:1.5,columns:[{
    text: 'DoctorAdvice Master',  
    bold:true,
   }]}
,);
console.log(this.reportFormData1().doctorAdvice)
  for(var i in this.reportFormData1().doctorAdvice){
    console.log(this.reportFormData1().doctorAdvice[i])
    doctoradvicepdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData1().doctorAdvice[i].itemName}`,margin:[0,-10,0,0]}]})
  }
  doctoradvicepdf.push({columns:[{
    text: 'DoctorAdvice Comment',  
    bold:true,
   }]}
,);
console.log(this.reportFormData1().doctorAdviceComments)
  for(var i in this.reportFormData1().doctorAdviceComments){
    console.log(this.reportFormData1().doctorAdviceComments[i])
    doctoradvicepdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData1().doctorAdviceComments[i].docadvicecomment}`,margin:[0,-5,0,0]}]})
  }
  conclusionpdf.push({lineHeight:1.5,columns:[{
    text: 'Conclusion Master',  
    bold:true,
   }]}
,);
//console.log(this.reportFormData1().conclusion)
  for(var i in this.reportFormData1().conclusion){
    console.log(this.reportFormData1().conclusion[i])
    conclusionpdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData1().conclusion[i].itemName}`,margin:[0,-10,0,0]}]})
  }
  conclusionpdf.push({columns:[{
    text: 'Conclusion Comment',  
    bold:true,
   }]}
,);
//console.log(this.reportFormData1().conclusionsComments)
  for(var i in this.reportFormData1().conclusionsComments){
    console.log(this.reportFormData1().conclusionsComments[i])
    conclusionpdf.push({ columns:[{text:'',bold:true},{text:`${this.reportFormData1().conclusionsComments[i].conclusioncomment}`,margin:[0,0,0,0]}]})
  }





  return {
    
    defaultStyle: { margin: [10,10,10,10] },
    content: [
    
    {
      columns: [
       
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARQSURBVFiFpdd5iNVVFAfwj+PkpKYT4zK2kBplRZpmtFCgCW1EtmlqEmWkVpJQOYlKRLtNaWakFP3RZHuoFQlFCamBlZSaDWWUqbm0TWWFQbbQH+c+5vfevN/ziV94vHe3c8+953u+577OqkMNLsBU/I5dqb8L7sUN6ItPqrR3QBiJrXgHTdiWGbsdr2M03sekAzVeU8WcJszC5fgFOzNj+/AXVuIb1GfGDsdafIlRB+pYFhOwB9uToc3onsYOwa+YjE/RLbPuMryF0/E1bj4YJ4iT98R8ceKX8CHWYHDa5CLUpfmn4V8MQG/8XOJgLhpxsThdFuswPG1wHc7F8TgUnXA93sS3aE7fY9Lv7YIj+w15X2xJp2pOfb2wAqsUxzgPA3AfhqABu5OjnatY62XchhHiyqegFbMreH8ens4Zm4FF1WxcwCosFuy9As/h2jTWU+T8B2n8VnH1DYJocDTmCMJ1FSGbkLE/CI/gkjwHjsEd4grXaj91H3yOuTgRJ4uw3JNZ20WE7368iBdSf60IZ6dkY7bQlSGVbqK/ULtC3FrEdWbRgB2Zdm8RtkZB0A2ZsbfxndAKIszNKmC+uMoCfhJsz6JesSgRYfleaMXITH8XHIUFaeMWPERcSzlsw1nJWMGB/vgzM2eCIOu0SifJYDl+RJu42bmirjgDTyZjBFE2lyx+InndHwPT5rU6akUltGBsaWcNXsEmvIqNWC0yIYsmkc/L8YYg4T/4OzPnMZG2efhC6EEH7EnfZ+OEMuOjFMczDz20y/BQkVFZTNVOvDpB1B7wm+DCV+nTgnP248CRWCqYPr1kbJZIt53awwpnisxqEZK9VmiKFSIEqwVTpwvdroTXRCodh/UlDq9KDt8lhCuLriJMy0RhaiOINEQ7oWoxvmRhH5HfBbQKQsLjih8i40Tl24GTMv2TMQ9P4RqhkmvyTjgYw9Lv0UJEduPK1NeEj0RebxVFLIs6xcXnFKGSU9JniyD/A3kOjBS1HpYkj8emRQWMSsYai5fqJVQyi2cV68VozBQhKYuZ4tEBl4rT71Imj0V4zs8YmyfqQRabVChABTTiY3E9rTgCV4uc75facCwWCg2pF6q5UpC4nM1bcKFQwT2CA2UxGc+IeC0QJ14qyJR9VHYXJyaItEFw4A/FcR8oFPX5ZGuGqAm70oE6YEDabLB4yRbK5XBRxR7UMWY14s3QJsJWwPhka1xqTxQP1BkiHLmvozFCMhcpLlT1goALU7tOu+oVHBmEw1J7G04tGb9bvJxKFbJq3ISH08afiZj+IE66Q/DmvbTZu6Ka7hd55bgUPUSx2Sji3Rc3pvXdsDfNWyaI3E886Zbgzir3yEVPwYGV4s/GXh2Fp4CrBH8aBZnbdNSEIlTzVB4qKtcIUayGiUxYV2buJMGhRlEHWkXxyUVtFQ6sF7HeJBRtH/7LmbsIj4r/hdNynCxCtRwg0nKi4MMc6Tl1sPgfsX7wvAYu7GMAAAAASUVORK5CYII=,', 
          //alignment: 'left'
         width: 30,
        },
        {
          width: 440,
          //height:90,
          text: 'ClinicManagement System',
          bold:'true',
          alignment: "center",
          fontSize: 20
        },
      ]},
  rows, 
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 ,lineHeight:2} ],},
    rows,
    {
      lineHeight:1.5,
      text:'Report',
   bold:true,
   alignment: "center",
   fontSize: 15
    },
      {
        lineHeight:1.5,
        columns: [
          

            {
            text:`Patient Name: ${(this.reportFormData1()).patientData.patientname}`,
           alignment:'left'
            
          },
          {
            text:` Patient Id: ${(this.reportFormData1()).patientData.id}`,
           alignment:'center'
            
            
           },

           {
            text:`Date Of Birth: ${(this.reportFormData1()).patientData.dob}`,
            alignment:'right'
            
          },
        
      ],
    },
    {
      lineHeight:1.5,
      columns: [
        
          {
            text:`Age: ${(this.reportFormData1()).patientData.age}`,
             alignment:'left'
          },
          {
            text:`BP: ${(this.reportFormData1()).patientData.bpsystolic}`,
         alignment:'center'
          },
          {
            text:`BP: ${(this.reportFormData1()).patientData.bpdiastolic}`,
           alignment:'right'
          },
        
      ],
    },
    {
      lineHeight:1.5,
    columns: [
      
          {
            text:`Reffered By: `,
            alignment:'left'
            
          },
          {
            text:`Date of Reporting: ${(this.reportFormData1()).patientData.testdate}`,
            alignment: 'center',
           
          },
          {
            text:`Gender: ${(this.reportFormData1()).patientData.gender}`,
            alignment: 'right',
          
          },
        
      ]},
      {
        lineHeight:1.5,
        columns: [
          
          {
            text:`Height: ${(this.reportFormData1()).patientData.height}`,
            alignment: 'left',
        
          },
          {
            text:`Weight: ${(this.reportFormData1()).patientData.weight}`,
            alignment: 'center',
            
          },
          {
            text:`BSA: ${(this.reportFormData1()).patientData.bsa}`,
            alignment: 'right',
           
          },
        
      ]
    },
    {
      lineHeight:1.5,
      columns: [
        
          {
            text:`BMI: ${(this.reportFormData1()).patientData.bmi}`,
            alignment: 'left',
       
          },
          {
            text:`Type of Test: ${(this.reportFormData1()).patientData.testtype}`,
            alignment: 'center',
        
          },
         
rows,
        
        ]
      },
      {
        columns:[[
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
        {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2
             
            },
           
          ],
          margin:[135,10,0,0,]
          },
        {
          text: 'ECHOCARDIOGRAPHIC STUDY',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0,-27, 0, 20]
        },
        
        rows1,
      ]
      ]
      },
      {
        columns:[[
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ],},
        rows,
        {
          text: 'Echo Window:Good',
          bold: true,
          margin: [10, 10, 10, 10]
        },
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},

      ]
      ]
      },
      {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 250,
            h: 30,
            r: 7,
            lineColor: 'black',
            lineWidth: 2
           
          },
         
        ],
        margin:[135,10,0,0,]
        },
     
      {
        text: 'OBSERVATIONS',
        bold: true,
        fontSize: 15,
        alignment: 'center',
        margin: [0,-27, 0, 20]
      },
      
    dd,
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
    {
      canvas: [
        {
          type: 'rect',
          x: 0,
          y: 0,
          w: 250,
          h: 30,
          r: 7,
          lineColor: 'black',
          lineWidth: 2
         
        },
       
      ],
      margin:[135,10,0,0,]
      },

    {
      text:"REGIONAL WALL MOTION",
      bold: true,
      fontSize: 15,
      alignment: 'center',
      margin: [0,-27, 0, 20]
    },
    dd1,
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
    {
      canvas: [
        {
          type: 'rect',
          x: 0,
          y: 0,
          w: 250,
          h: 30,
          r: 7,
          lineColor: 'black',
          lineWidth: 2
         
        },
       
      ],
      margin:[135,10,0,0,]
      },

    {
      text:"Impressions",
      bold: true,
      fontSize: 15,
      alignment: 'center',
      margin: [0,-27, 0, 20]
    },
    impressionpdf,
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
    {
      canvas: [
        {
          type: 'rect',
          x: 0,
          y: 0,
          w: 250,
          h: 30,
          r: 7,
          lineColor: 'black',
          lineWidth: 2
         
        },
       
      ],
      margin:[135,10,0,0,]
      },

    {
      text:"Doctor Advice",
      bold: true,
      fontSize: 15,
      alignment: 'center',
      margin: [0,-27, 0, 20]
    },
    doctoradvicepdf,
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
    {
      canvas: [
        {
          type: 'rect',
          x: 0,
          y: 0,
          w: 250,
          h: 30,
          r: 7,
          lineColor: 'black',
          lineWidth: 2
         
        },
       
      ],
      margin:[135,10,0,0,]
      },

    {
      text:"Conclusions",
      bold: true,
      fontSize: 15,
      alignment: 'center',
      margin: [0,-27, 0, 20]
    },
    conclusionpdf,
    {
      text:`${this.DoctorData.name}`,
      
   
      alignment:'right',
      margin: [0,5, 0, 0]
    },
    {
      text:`${this.DoctorData.qualification}`,
     
     
      alignment:'right',
      margin: [0,5, 0, 0]
    },
    {
      text:`Thank You`,
      bold: true,
      fontSize: 15,
      alignment:'right',
      margin: [0,20, 0, 0]
    },
    ]
  }
  }

  
////////////////


getObservationsToPdf(data:any[]){
  let observation_data = {};
  data.forEach( obsData =>{

  Object.entries(obsData).forEach(([key, value])=>{
    if (value && Array.isArray(value)){
      console.log(value)
      // observation_data[key] = this.getformatteddata(value)
    }
    //for each loop on json
  });
  
    
    //console.log(obsData)
});
 // console.log("..............")
 // return observation_data
}

getformatteddata(data:any[]){
  data.forEach(scopedData=>{
    let column=[]
    let rows=[]
    let master_array=[]
    column = Object.keys(scopedData)
    console.log("Print column")
    console.log(column)
    Object.entries(scopedData).forEach(([key, value])=>{
      console.log("printing value of each key i.e, row values")
      console.log(value)
    });

    
    //console.log(master_array)
  
  })
  console.log("...,,,,,,")
  
  return this.getformatteddata;
  
}



}
