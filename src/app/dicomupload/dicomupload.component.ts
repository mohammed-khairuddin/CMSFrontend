import { Component, OnInit,ViewChild  } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import { DICOMViewerComponent } from 'ng-dicomviewer';
import { map } from 'rxjs/operators';


declare const cornerstone;
declare const cornerstoneWADOImageLoader;
declare const dicomParser;


@Component({
  selector: 'app-dicomupload',
  templateUrl: './dicomupload.component.html',
  styleUrls: ['./dicomupload.component.scss']
})
export class DicomuploadComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  uploadedFiles:any;
  seletedFile: String = "Choose file...";
  previewAvailbleList:any = [];
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  filesToUpload: Array<File> = [];
  upLoadFlag;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }

  @ViewChild(DICOMViewerComponent, { static: true }) viewPort: DICOMViewerComponent;

  ngOnInit(): void {

    cornerstoneWADOImageLoader.external.cornerstone = cornerstone; // inicializa WADO Image loader
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser

    cornerstoneWADOImageLoader.webWorkerManager.initialize({
        webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
        taskConfiguration: {
            'decodeTask': {
                codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
            }
        }
    });
    // cornerstoneTools.init();


  }



  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
    
    this.loadDICOMImages(this.filesToUpload)
}

  upload() {
    this.upLoadFlag = true;
   
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
   
    this.http.post(`http://localhost:8080/api/addpatient/${this.id}`,formData).subscribe(files =>{
      this.upLoadFlag = false;
      alert('Successfully Uploaded');
      window.location.reload();
      this.router.navigateByUrl('/clinicdashboard');
     })

  }
  

  loadDICOMImages(files:any) {
    if (files && files.length > 0) {
      let imageList = [];
      const fileList:Array<File> = Array.from(files);
      fileList.sort((a,b) => {
        if ( a.name > b.name ) return 1;
        if ( b.name > a.name ) return -1;
        return 0;
      })
    cornerstoneWADOImageLoader.wadouri.fileManager.purge();
      //cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();

      for (let i = 0; i < fileList.length; i++) {
        const dicomFile: File = fileList[i];
        const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
        imageList.push(imageId);
      }
      this.viewPort.resetAllTools();
      this.viewPort.loadStudyImages(imageList);
      //console.log(this.viewPort);

    } else alert('Sorry! No Dicom Images');
}
       




}
