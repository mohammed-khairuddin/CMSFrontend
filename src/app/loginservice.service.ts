import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { 

  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    
    })
  }


  ngrokUrl = 'http://localhost:8080/api'


  login= (loginBody) => {
     return this.http.post(`${this.ngrokUrl}/auth/signin`,loginBody,this.httpOptions)
  }

  registration= (formData) => {
    //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
    return this.http.post(`${this.ngrokUrl}/auth/registration`,formData)
 }


// getListOfAssignmentsDoctor= () => {
//   const id = localStorage.getItem('id')
//   return this.http.get(`${this.ngrokUrl}/test/assignment/${id}}`)
//   //return this.http.get(`${this.ngrokUrl}/test/assignment/${id}/${localStorage.getItem('role')}`)
// }

/////////////////////////////CLINIC APIS//////////////////// 

getAllClinicList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/clinic/`)
}
getAllClinicDoctorList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/doctors/${id}`)
}
deleteClinic= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteclinic/${id}`)
}
getClinicData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/clinic/${id}`)
}

updateClinicData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,updatedObj)
}

updateClinicFrontData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('id')
  return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,updatedObj)
}

/////////////////////////DOCTORS APIS//////////////////////
getAllDoctorsList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/doctor/`)
}

deleteDoctor= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletedoctor/${id}`)
}

getDoctorData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/doctor/${id}`)
}

updateDoctorData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
}

updateDoctorFrontData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('id')
  return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
}

//////////////////////// ASSIGNMENT /////////////////////////////
getAssignmentData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/update/assignment/${id}`)
}
updateAssignment= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updateassignment/${id}`,updatedObj)
}
deleteAssignment= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteassignment/${id}`)
}
getListOfAssignments= () => {
  const id = localStorage.getItem('id')
  const role = localStorage.getItem('role')
  if(role === 'CLINIC'){
  return this.http.get(`${this.ngrokUrl}/test/assignment/${id}}`)
  } else {
  return this.http.get(`${this.ngrokUrl}/dep/assignment/${id}}`)
  }
  //return this.http.get(`${this.ngrokUrl}/test/assignment/${id}/${localStorage.getItem('role')}`)
}

assignment= (assignmentBody) => {
  //console.log(assignmentBody);
    return this.http.post(`${this.ngrokUrl}/auth/assignment`,assignmentBody,this.httpOptions)
  }
  
//////////////////////// PATIENT APIS

addpatientForm= (patientFormReq) => {

  return this.http.post(`${this.ngrokUrl}/create/patient`,patientFormReq,this.httpOptions)
}

getAllClinicPatientsList= ()=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/findAll/patients/${id}`)
}


getAllClinicPatientsListClinicStatus= (status)=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/findall/patient/${id}/${status}`)
}

getAllClinicPatientsListClinicStatusReport= (status)=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/findall/patientstatusreport/${id}/${status}`)
}



getAllClinicPatientsListDateType= (date,status)=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/findbydate/${date}/${status}/${id}`)
}


updatePatientDoc= (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  return this.http.put(`${this.ngrokUrl}/update/patient/${id}`,updatePatientDocObject,this.httpOptions)
}

updPatientDoc= (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  return this.http.put(`${this.ngrokUrl}/save/patient/${id}`,updatePatientDocObject,this.httpOptions)
}

updPatientDocReportStatusClosed= ()=>{
  const id = localStorage.getItem('rpid')
  return this.http.put(`${this.ngrokUrl}/save/patientReportclosed/${id}`,this.httpOptions)
}

getAllDoctorPatientsList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/findall/patdoc/${id}`)
}

getAllDoctorPatientsListStatus= ()=>{
  const id = localStorage.getItem('id');
  const status = 'assigned';
  return this.http.get(`${this.ngrokUrl}/findall/patientdoc/${id}/${status}`)
}

getPatientData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/findOne/patient/${id}`)
}


////////////////////////////////////// JSON DATA MASTER TABLE


allJsonListMaster= ()=>{
 const type = localStorage.getItem('obtype')
  return this.http.get(`${this.ngrokUrl}/auth/master/${type}`)
}

allJsonListMasterObservations= ()=>{
   return this.http.get(`${this.ngrokUrl}/findall/masters`)
 }

//////////////////////////////////// REGISTERED PATIENT MASTER

registeredPatient= (patientManagementReq) => {

  return this.http.post(`${this.ngrokUrl}/auth/patientmaster`,patientManagementReq,this.httpOptions)
}

getAllRegisteredPatient= () => {
  return this.http.get(`${this.ngrokUrl}/auth/findpatientmaster/`,this.httpOptions)
}


getRegisteredPatientDetail= () => {  
  const id = localStorage.getItem('pmid')
  return this.http.get(`${this.ngrokUrl}/auth/findonepatientmaster/${id}`,this.httpOptions)
}

updateRegisteredPatientList= (updatePatientMasterObject) => {
  const id = localStorage.getItem('pmid')
  //console.log(updatePatientMasterObject)
  return this.http.put(`${this.ngrokUrl}/auth/updatepatientmaster/${id}`,updatePatientMasterObject,this.httpOptions)
}

deletePatientMaster= ()=>{
  const id = localStorage.getItem('pmid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletepatientmaster/${id}`)
}

url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

allCountries(): Observable<any>{
  return this.http.get(this.url);
}


//////////////////////////////////// REGISTERED KIN MASTER

registeredPatientKin= (kinManagementReq) => {

  return this.http.post(`${this.ngrokUrl}/auth/kinmaster`,kinManagementReq,this.httpOptions)
}

getAllRegisteredPatientKin= () => {
  return this.http.get(`${this.ngrokUrl}/auth/findkinmaster/`,this.httpOptions)
}

getRegisteredPatientKinDetail= () => {  
  const id = localStorage.getItem('kid')
  return this.http.get(`${this.ngrokUrl}/auth/findonekinmaster/${id}`,this.httpOptions)
}

updateRegisteredPatientKinList= (updatePatientKinObject) => {
  const id = localStorage.getItem('kid')
  //console.log(updatePatientKinObject)
  return this.http.put(`${this.ngrokUrl}/auth/updatekinmaster/${id}`,updatePatientKinObject,this.httpOptions)
}
deleteKinMaster= ()=>{
  const id = localStorage.getItem('kid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletekinmaster/${id}`)
}

///////////////////////////////// Masters

masterInsertion= (masterManagementReq,data) => {
  return this.http.post(`${this.ngrokUrl}/auth/createmaster/${data}`,masterManagementReq,this.httpOptions)
}

getMaster= (data) => {
  return this.http.get(`${this.ngrokUrl}/auth/getmaster/${data}`,this.httpOptions)
}

updateMaster= (updateMasterObject,data) => {
  const id = localStorage.getItem('mid')
  //console.log(updateMasterObject)
  return this.http.put(`${this.ngrokUrl}/auth/updatemaster/${id}/${data}`,updateMasterObject,this.httpOptions)
}

getMasterDetail= (data) => {  
  const id = localStorage.getItem('mid')
  return this.http.get(`${this.ngrokUrl}/auth/findonemaster/${id}/${data}`,this.httpOptions)
}



observations= (masterObservationReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/obs`,masterObservationReq,this.httpOptions)
}

////////////////////////////////////////////////////////

observationsInsertion= (objectManagementReq) => {
  const pmid = localStorage.getItem('pmid');
  const obtype = localStorage.getItem('obtype')
  return this.http.post(`${this.ngrokUrl}/auth/observation/${pmid}/${obtype}`,objectManagementReq,this.httpOptions)
}

observationsGetIndividual= () => {
  const pmid = localStorage.getItem('pmid');  
  return this.http.get(`${this.ngrokUrl}/findOne/observation/${pmid}`,this.httpOptions)
}

observationsGetAllByPatient= () => {
  const pmid = localStorage.getItem('pmid');  
  return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
}

observationsGetAllByPatientReport= () => {
  const pmid = localStorage.getItem('prid');  
  return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
}

// observationsGetAllByPatientmultiple= () => {
//   const pmid = localStorage.getItem('pmid');  
//   return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
// }

observationsGetAllByPatientIdType= () => {
  const pmid = localStorage.getItem('pmid');  
  const obtype = localStorage.getItem('obtype')
  return this.http.get(`${this.ngrokUrl}/findOne/observation/${pmid}/${obtype}`,this.httpOptions)
}


masterReportInsertion= (objectManagementReq) => {
  const pmid = localStorage.getItem('pmid');
  //const obtype = localStorage.getItem('obtype')
  return this.http.post(`${this.ngrokUrl}/update/observation/${pmid}`,objectManagementReq,this.httpOptions)
}

observationsReportUpdate= (objectManagementReq) => {
  const pmid = localStorage.getItem('pmid');  
  return this.http.post(`${this.ngrokUrl}/update/report/${pmid}`,objectManagementReq,this.httpOptions)
}


/////////////////////////////////////////

getAllPatientMasterFetch= () => {
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/getallpatientmasterfetch/${id}`)
}

referralCommentInsert= (referralComment) => {
  const pmid = localStorage.getItem('pmid'); 
  return this.http.post(`${this.ngrokUrl}/auth/referralcomment/${pmid}`,referralComment,this.httpOptions)
}

getReferralCommentPatientId= () => {
  const id = localStorage.getItem('pmid')
  return this.http.get(`${this.ngrokUrl}/auth/getreferralcomment/${id}`)
}

getAllHospitalClinicFetch= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallhospitalclinicfetch`)
}

/////////////////////////// GENERAL CLINIC AND DOCTOR APIS //////////////////

generalAddClinicDoctor= (formData) => {
  //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
  return this.http.post(`${this.ngrokUrl}/auth/generalAddClinicDoctor`,formData)
}

getGeneralAllClinicList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/generalclinic/`)
}

getGeneralClinicData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/generalclinic/${id}`)
}
updateGeneralClinicData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('gaid')
  return this.http.put(`${this.ngrokUrl}/auth/updategeneralclinic/${id}`,updatedObj)
}
deleteGeneralClinic= ()=>{
  const id = localStorage.getItem('gaid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletegeneralclinic/${id}`)
}

getGeneralAllClinicDoctorList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/doctors/${id}`)
}




// updateGeneralClinicFrontData= (updatedObj)=>{
//   console.log(updatedObj)
//   const id = localStorage.getItem('id')
//   return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,updatedObj)
// }

/////////////////////////DOCTORS APIS//////////////////////
getGeneralAllDoctorsList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/generaldoctor/`)
}

deleteGeneralDoctor= ()=>{
  const id = localStorage.getItem('gaid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletegeneraldoctor/${id}`)
}
getGeneralDoctorData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/generaldoctor/${id}`)
}

updateGeneralDoctorData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('gaid')
  return this.http.put(`${this.ngrokUrl}/auth/updategeneraldoctor/${id}`,updatedObj)
}




// updateGeneralDoctorFrontData= (updatedObj)=>{
//   console.log(updatedObj)
//   const id = localStorage.getItem('id')
//   return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
// }


////////////////////////////////////////////////////

////////////////////// GENERAL ALL MASTERS /////////////////

masterGeneralInsertion= (masterManagementReq,data) => {
  return this.http.post(`${this.ngrokUrl}/auth/creategeneralmaster/${data}`,masterManagementReq,this.httpOptions)
}

getGeneralMaster= (data) => {
  return this.http.get(`${this.ngrokUrl}/auth/getgeneralmaster/${data}`,this.httpOptions)
}

updateGeneralMaster= (updateMasterObject,data) => {
  const id = localStorage.getItem('ggmid')
  //console.log(updateMasterObject)
  return this.http.put(`${this.ngrokUrl}/auth/updategeneralmaster/${id}/${data}`,updateMasterObject,this.httpOptions)
}

getGeneralMasterDetail= (data) => {  
  const id = localStorage.getItem('ggmid')
  return this.http.get(`${this.ngrokUrl}/auth/findonegeneralmaster/${id}/${data}`,this.httpOptions)
}


///////////////////////// FAMILY AND OTHERS
otherDetailsInsertion= (otherDetailsReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/createotherdetails`,otherDetailsReq,this.httpOptions)
}
getAllOtherFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallotherdetails`)
}
getAllClinicDoctorMasterFetch= () => {
  //const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/getallclinicdoctorfetch/`)
}
getAllDoctorMasterFetch= () => {
  //const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/getalldoctorfetch/`)
}

////////////////////////
getEditOtherDetailData= ()=>{
  const id = localStorage.getItem('odid')
  return this.http.get(`${this.ngrokUrl}/auth/getotherdetails/${id}`)
}
updateOtherDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('odid')
  return this.http.put(`${this.ngrokUrl}/auth/updateotherdetails/${id}`,updatedObj)
}
deleteOtherDetail= ()=>{
  const id = localStorage.getItem('odid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteotherdetails/${id}`)
}

/////////////////////////////

familyDetailsInsertion= (familyManagementReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/createfamily`,familyManagementReq,this.httpOptions)
}
getAllFamilyFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallfamily`)
}

getEditFamilyDetailData= ()=>{
  const id = localStorage.getItem('fdid')
  return this.http.get(`${this.ngrokUrl}/auth/getfamily/${id}`)
}
updateFamilyDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('fdid')
  return this.http.put(`${this.ngrokUrl}/auth/updatefamily/${id}`,updatedObj)
}
deleteFamilyDetail= ()=>{
  const id = localStorage.getItem('fdid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletefamily/${id}`)
}


///////////////////////////////// Life Style Form 

lifeStyleInsertion= (lifestyle) => {
  return this.http.post(`${this.ngrokUrl}/auth/lifestyle`,lifestyle,this.httpOptions)
}

getAllLifeStyleFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getalllifestyle`)
}
getEditLifeStyleDetailData= ()=>{
  const id = localStorage.getItem('lsid')
  return this.http.get(`${this.ngrokUrl}/auth/getlifestyle/${id}`)
}
updateLifeStyleDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('lsid')
  return this.http.put(`${this.ngrokUrl}/auth/updatelifestyle/${id}`,updatedObj)
}
deleteLifeStyleDetail= ()=>{
  const id = localStorage.getItem('lsid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletelifestyle/${id}`)
}



///////////////////////////////// Investigation Form 

investigationFormInsertion= (investigationData) => {
  return this.http.post(`${this.ngrokUrl}/auth/investigationreport`,investigationData,this.httpOptions)
}

getAllinvestigationFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallinvestigationreport`)
}
getEditinvestigationDetailData= ()=>{
  const id = localStorage.getItem('inid')
  return this.http.get(`${this.ngrokUrl}/auth/getinvestigationreport/${id}`)
}
updateinvestigationDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('inid')
  return this.http.put(`${this.ngrokUrl}/auth/updateinvestigationreport/${id}`,updatedObj)
}
deleteinvestigationDetail= ()=>{
  const id = localStorage.getItem('inid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteinvestigationreport/${id}`)
}


}
