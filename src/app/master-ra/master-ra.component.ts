import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-ra',
  templateUrl: './master-ra.component.html',
  styleUrls: ['./master-ra.component.scss']
})
export class MasterRaComponent implements OnInit {

  data =  [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
    dataabnormal=[
    {id:2,itemName:'Size'},
    {id:3,itemName:'Thrombus'},
    {id:4,itemName:'Mass'},
    {id:5,itemName:'Catheter/Pacemaker'},
    {id:6,itemName:'Spontaneous Echo Contrast'},
    {id:7,itemName:'Pressure'},
    {id:8,itemName:'Others'},
    ]
    dataabnormalsize=[
    {id:2,itemName:'Size-Mildly Enlarged'},
    {id:3,itemName:'Size-Moderately Enlarged'},
    {id:4,itemName:'Size-Markedly Enlarged'},
    {id:5,itemName:'Size-Small'},
    ]
    dataabnormalthrombus=[
    {id:2,itemName:'Thrombus-Absent'},
    {id:3,itemName:'Thrombus-Present'},
    ]
    dataabnormalthrombuspresent=[
      {id:2,itemName:'Abnormal-Thrombus-Present -Size'},
      {id:3,itemName:'Abnormal-Thrombus-Present -Location'},
      {id:4,itemName:'Abnormal-Thrombus-Present -Shape'},
      {id:5,itemName:'Abnormal-Thrombus-Present -Texture'},
      {id:6,itemName:'Abnormal-Thrombus-Present -mobility'}
    ]
    dataabnormalthrombuspresentsize=[
      {id:2,itemName:'Abnormal-Thrombus-Present -Size-Small'},
    {id:3,itemName:'Abnormal-Thrombus-Present-Size-Moderate'},
    {id:4,itemName:'Abnormal-Thrombus-Present-Size-Large'},
    ]
    dataabnormalthrombuspresentlocation=[
    {id:2,itemName:'Abnormal-Thrombus-Present-Location-Ra Cavity'},
    {id:3,itemName:'Abnormal-Thrombus-Present-Location-Ra Appendage'},
    {id:4,itemName:'Abnormal-Thrombus-Present-Location-Extending From Inferior Vena Cava'},
    ]
    dataabnormalthrombuspresentshape=[
    {id:2,itemName:'Abnormal-Thrombus-Present-Shape-Flat (Mural)'},
    {id:3,itemName:'Abnormal-Thrombus-Present-Shape-Protruding'},
    {id:4,itemName:'Abnormal-Thrombus-Present-Shape-Pedunculatedge'},
    {id:5,itemName:'Abnormal-Thrombus-Present-Shape-Papillary'},
    {id:6,itemName:'Abnormal-Thrombus-Present-Shape-Spherical'},
    {id:7,itemName:'Abnormal-Thrombus-Present-Shape-Regular'},
    {id:8,itemName:'Abnormal-Thrombus-Present-Shape-Irregular'},
    {id:9,itemName:'Abnormal-Thrombus-Present-Shape-Multilobular'},
    {id:10,itemName:'Abnormal-Thrombus-Present-Shape-Other (Specify)'},
    ]
    dataabnormalthrombuspresenttexture=[
    {id:2,itemName:'Abnormal-Thrombus-Present-Texture-Solid'},
    {id:3,itemName:'Abnormal-Thrombus-Present-Texture-Layered'},
    {id:4,itemName:'Abnormal-Thrombus-Present-Texture-Hypoechonc Interior (Cystic)'},
    {id:5,itemName:'Abnormal-Thrombus-Present-Texture-Echogenic'},
    {id:6,itemName:'Abnormal-Thrombus-Present-Texture-Calcified'},
    {id:7,itemName:'Abnormal-Thrombus-Present-Texture-Other (Specify)'},
    ]
    dataabnormalthrombuspresentmobility=[
    {id:2,itemName:'Abnormal-Thrombus-Present-Mobility-Mobile'},
    {id:3,itemName:'Abnormal-Thrombus-Present-Mobility-Fixed (Sessile)'},
    {id:4,itemName:'Abnormal-Thrombus-Present-Mobility-Dimensions'},
    ] 
    dataabnormalmass=[
    {id:2,itemName:'Mass-Absent'},
    {id:3,itemName:'Mass-Present'},
    ]
    dataabnormalmasspresent=[
    {id:2,itemName:'Abnormal-Mass-Present-Size'},
    {id:3,itemName:'Abnormal-Mass-Present-Location'},
    {id:4,itemName:'Abnormal-Mass-Present-Shape'},
    {id:5,itemName:'Abnormal-Mass-Present-Texture'},
    {id:6,itemName:'Abnormal-Mass-Present-Mobility'},
    {id:7,itemName:'Abnormal-Mass-Present-Type'},
    {id:8,itemName:'Abnormal-Mass-Present-Dimensions'},
    ]
    dataabnormalmasspresentsize=[
      {id:2,itemName:'Abnormal-Mass-Present-Size-Small'},
    {id:3,itemName:'Abnormal-Mass-Present-Size-Moderate'},
    {id:4,itemName:'Abnormal-Mass-Present-Size-Large'},
    ]
    dataabnormalmasspresentlocation=[
    {id:2,itemName:'Abnormal-Mass-Present-Location-Ra Cavity'},
    {id:3,itemName:'Abnormal-Mass-Present-Location-Ra Appendage'},
    {id:4,itemName:'Abnormal-Mass-Present-Location-Extending From Inferior Vena Cava'},
    ]
    dataabnormalmasspresentshape=[
    {id:2,itemName:'Abnormal-Mass-Present-Shape-Flat (Mural)'},
    {id:3,itemName:'Abnormal-Mass-Present-Shape-Protruding'},
    {id:4,itemName:'Abnormal-Mass-Present-Shape-Pedunculatedge'},
    {id:5,itemName:'Abnormal-Mass-Present-Shape-Papillary'},
    {id:6,itemName:'Abnormal-Mass-Present-Shape-Spherical'},
    {id:7,itemName:'Abnormal-Mass-Present-Shape-Regular'},
    {id:8,itemName:'Abnormal-Mass-Present-Shape-Irregular'},
    {id:9,itemName:'Abnormal-Mass-Present-Shape-Multilobular'},
    {id:10,itemName:'Abnormal-Mass-Present-Shape-Frondlike'},
    {id:11,itemName:'Abnormal-Mass-Present-Shape-Others'},
    ]
    dataabnormalmasspresenttexture=[
    {id:2,itemName:'Abnormal-Mass-Present-Texture-Solid'},
    {id:3,itemName:'Abnormal-Mass-Present-Texture-Layered'},
    {id:4,itemName:'Abnormal-Mass-Present-Texture-Hypoechonc Interior (Cystic)'},
    {id:5,itemName:'Abnormal-Mass-Present-Texture-Echogenic'},
    {id:6,itemName:'Abnormal-Mass-Present-Texture-Calcified'},
    {id:7,itemName:'Abnormal-Mass-Present-Texture-Other (Specify)'},
    ]
    dataabnormalmasspresentmobility=[
    {id:2,itemName:'Abnormal-Mass-Present-Mobility-Mobile'},
    {id:3,itemName:'Abnormal-Mass-Present-Mobility-Fixed (Sessile)'},
    ]
    dataabnormalmasspresenttype=[
    {id:2,itemName:'Abnormal-Mass-Present-Type-Suggestive Of Myxoma'},
    {id:3,itemName:'Abnormal-Mass-Present-Type-Suggestive Of Papilloma'},
    {id:4,itemName:'Abnormal-Mass-Present-Type-Suggestive Of Fibroelastoma'},
    {id:5,itemName:'Abnormal-Mass-Present-Type-Suggestive Of Other Mass (Specify)'},
    ]
    dataabnormalmasspresentdimensions=[
    {id:2,itemName:'Abnormal-Mass-Present-Dimensions'},
    ]
    dataabnormalcatheter=[
    {id:2,itemName:'Abnormal-Catheter/Pacemaker Wire-Absent'},
    {id:3,itemName:'Abnormal-Catheter/Pacemaker Wire-Present-RA Cavity'},
    {id:4,itemName:'Abnormal-Catheter/Pacemaker Wire-Present-RA Appendage'},
    ]
    dataabnormalspontaneous=[
    {id:2,itemName:'Spontaneous Echo Contrast-Absent'},
    {id:3,itemName:'Spontaneous Echo Contrast-Present'},
    ]
    dataabnormalspontaneouspresentdegree=[
      {id:2,itemName:'Abnormal-Spontaneous Echo Contrast-Present -Degree-Mild'},
    {id:3,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Degree-Severe'},
    ]
    dataabnormalspontaneouspresentpersistence=[
    {id:2,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Persistence-Intermittent'},
    {id:3,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Persistence-Continuous'},
    ]
    dataabnormalspontaneouspresentlocation=[
    {id:2,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Location-Ra Cavity'},
    {id:3,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Location-Ra Appendage'},
    {id:4,itemName:'Abnormal-Spontaneous Echo Contrast-Present-Location-RA Cavity And Ra Appendage'},

    ]
    dataabnormalpressure=[
      {id:2,itemName:'Abnormal-Pressure-Absent'},
    {id:3,itemName:'Abnormal-Pressure-Present-Interatrial Septum Bowed Towards The Left, Consistent With Elevated Right Atrial Pressures'},
    {id:4,itemName:'Abnormal-Pressure-Present-Dilated Coronary Sinus Consistent With Elevated Right Atrial Pressures Or A Persistent Left Superior Vena Cava'},
    {id:5,itemName:'Abnormal-Pressure-present-Dilated Hepatic Veins'},
    ]
    dataabnormalothers=[
    {id:2,itemName:'Abnormal-Other-Appropriate Appearance For A Transplant Recipient'},
    {id:3,itemName:'Abnormal-Other-Prominent Eustachian Valve'},
    {id:4,itemName:'Abnormal-Other-Prominent Chiari Network'}, 
  ]

rightAtriumObservationObject={
  data:[],
  dataabnormal:[],
  dataabnormalsize:[],
  dataabnormalthrombus:[],
  dataabnormalmass:[],
  dataabnormalcatheter:[],
  dataabnormalspontaneous:[],
  dataabnormalpressure:[],
  dataabnormalothers:[],
  dataabnormalmasspresent:[],
  dataabnormalmasspresentdimensions:[],
  dataabnormalmasspresentlocation:[],
  dataabnormalmasspresentmobility:[],
  dataabnormalmasspresentshape:[],
  dataabnormalmasspresentsize:[],
  dataabnormalmasspresenttexture:[],
  dataabnormalmasspresenttype:[],
  dataabnormalthrombuspresent:[],
  dataabnormalthrombuspresentshape:[],
  dataabnormalthrombuspresentsize:[],
  dataabnormalthrombuspresentmobility:[],
  dataabnormalthrombuspresenttexture:[],
  dataabnormalthrombuspresentlocation:[],
  dataabnormalspontaneouspresent:[],
  dataabnormalspontaneouspresentdegree:[],
  dataabnormalspontaneouspresentpersistence:[],
  dataabnormalspontaneouspresentlocation:[]
}


  constructor() { }

  ngOnInit(): void {

  }

  onOptionsSelected = (key,itemName)  => {
    this.rightAtriumObservationObject[key] = itemName
  }

  saveRightAtriumData = () => {
      //save function
    console.log(this.rightAtriumObservationObject)
  console.log(this.dataabnormalspontaneous)
  }

}