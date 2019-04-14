import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customized-search',
  templateUrl: './customized-search.page.html',
  styleUrls: ['./customized-search.page.scss'],
})
export class CustomizedSearchPage implements OnInit {
  constructor(private http:HttpClient, private router: Router) { }

  maxDist = 1000;
  ageGroup = "";
  disease_cure ="";
  area="";
  customLat=0;
  customLng=0;
  viewAllProductArray=[];
  onCancelageGroup()
  {
    this.ageGroup ="";
    }
    onCanceldisease_cure()
    {
      this.disease_cure ="";
    }

  
  ngOnInit() {
  }

  searchCordsForCustomAddress()
  {
    if(this.area.length <= 0)
    {
      alert("area cannot be empty");
      return;
    }
    //console.log(this.area);

    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.area}&key= AIzaSyC-kdT_jTgRlBUWauqSuFHl69ddNXVhO8k`)
    .subscribe((result:any)=>
    {
      // console.log(result);
      this.customLat = result.results[0].geometry.location.lat;
      this.customLng = result.results[0].geometry.location.lng;
      console.log(result.results[0].geometry.location.lat);
      console.log(result.results[0].geometry.location.lng);
       this.searchHospitals();

    }, (err)=>
    {
      console.log(err);
    })

  }
  searchHospitals()
  {
    this.http.post('http://192.168.43.12:8080/searchHospitals',
    //   this.http.post('http://10.0.0.2:8080/searchHospitals',
    // this.http.post('http://localhost:8080/searchHospitals', 
       {
         "geoLat":this.customLat,
          "geoLong":this.customLng,
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
         
  }

}
