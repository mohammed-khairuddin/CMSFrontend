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

  registration= (registrationBody) => {

    return this.http.post(`${this.ngrokUrl}/auth/registration`,registrationBody,this.httpOptions)
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
  console.log(updatedObj)
  const id = localStorage.getItem('aid')
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
  console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
}

//////////////////////// ASSIGNMENT /////////////////////////////
getAssignmentData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/update/assignment/${id}`)
}
updateAssignment= (updatedObj)=>{
  console.log(updatedObj)
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
  console.log(assignmentBody);
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


getAllClinicPatientsListDateType= (date,status)=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/findbydate/${date}/${status}/${id}`)
}


updatePatientDoc= (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  console.log(updatePatientDocObject)
  return this.http.put(`${this.ngrokUrl}/update/patient/${id}`,updatePatientDocObject,this.httpOptions)
}

getAllDoctorPatientsList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/findall/patdoc/${id}`)
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
  console.log(updatePatientMasterObject)
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
  console.log(updatePatientKinObject)
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
  console.log(updateMasterObject)
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


//app.get('/api/findall/observations/:patientId',controller.findAllObservations);


}
