import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Routes, RouterModule, Router } from '@angular/router';
import {AppServiceService} from '../app-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  maxDist = 1000;
  ageGroup = "";
  disease_cure ="";

  constructor(private http: HttpClient,private geolocation: Geolocation, private router:Router
   ,private appService:AppServiceService ) {}

  geoLat = 0;
  geoLong = 0;

  viewAllProductArray=[];
  onCancelageGroup()
  {
    this.ageGroup ="";
    }
    onCanceldisease_cure()
    {
      this.disease_cure ="";
    }
  searchHospital()
  { 
    //this.appService.presentLoading();
    console.log(this.maxDist + " " + this.ageGroup + " " + this.disease_cure);

    this.geolocation.getCurrentPosition().then((resp) => {
                  // resp.coords.latitude
      // resp.coords.longitude
      //alert(resp.coords.latitude + " " + resp.coords.longitude);


      //emulator testing
      // this.geoLat = 28.6387532;
      // this.geoLong = 77.0738028;


      this.geoLat = resp.coords.latitude;
      this.geoLong = resp.coords.longitude;
console.log("hello");
    this.http.post('http://192.168.43.12:8080/searchHospitals',
     // this.http.post('http://10.0.0.2:8080/searchHospitals',
   // this.http.post('http://localhost:8080/searchHospitals', 
      {
        "geoLat":this.geoLat,
         "geoLong":this.geoLong,
         "disease_cure": this.disease_cure,
         "ageGroup":this.ageGroup,
         "maxDist":this.maxDist        
      } , 
      {})
      .subscribe(data=>
        {
          
          this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray);
        this.router.navigate(['/hospital-output', { hospitals: JSON.stringify(this.viewAllProductArray) }]);
        } , err =>
        {
          alert("error navigation"  + " " + JSON.stringify(err));

        })
        

     }).catch((error) => {
       console.log('Error getting location', error);
       alert(error);
     });
     

    // hit api
    // calculate distance
    // fetch geoUser
   

  }
}


