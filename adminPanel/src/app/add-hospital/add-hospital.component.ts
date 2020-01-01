import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  hospitalName="";
  hospitalAddress="";
  hospitalSpeciality="";
  hospitalPhoneNumber="";
  hospitalFormatted_Address="";
  location = [];
  ageGroup = "";

  objectToSave =
  {
    name:"",
    formatted_address: "",
    location: {
        type:"Point",
        coordinates: []
    },
    phoneNumber:"",
    disease_cure:"",
    ageGroup:""
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  addHospital()
  {
//console.log(this.hospitalName + " " + this.hospitalAddress + " " + this.hospitalSpeciality + " " + this.hospitalPhoneNumber);
this.httpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.hospitalAddress}&key=AIzaSyCSDstn-0znijDm9OVbWiEAdit9DfBXePQ`)
.subscribe((result:any)=>
  {
    console.log(result);
    this.hospitalFormatted_Address = result.results[0].formatted_address;
    this.location.push(result.results[0].geometry.location.lat);
    this.location.push(result.results[0].geometry.location.lng);

    this.objectToSave.name = this.hospitalName;
    this.objectToSave.phoneNumber = this.hospitalPhoneNumber;
    this.objectToSave.formatted_address = this.hospitalFormatted_Address;
    this.objectToSave.disease_cure = this.hospitalSpeciality;
    this.objectToSave.location.coordinates = this.location;
    this.objectToSave.ageGroup = this.ageGroup;
    console.log(this.objectToSave);


    this.httpClient.post(`http://localhost:8080/addHospitals`, this.objectToSave)
    .subscribe((result)=>
    {
      console.log(result);

    }, (err)=>
    {

      console.log(err);
    })
    
    
  
  }, (err)=>{
    console.log(err);
  });

  }

}
