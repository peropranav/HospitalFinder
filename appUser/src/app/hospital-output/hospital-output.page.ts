import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {AppServiceService} from '../app-service.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-hospital-output',
  templateUrl: './hospital-output.page.html',
  styleUrls: ['./hospital-output.page.scss'],
})
export class HospitalOutputPage implements OnInit {
 hospitals = "";
 hospitalsArray = [];
 text="";
 geoLat = 0;
 geoLng=0;
  constructor(private geolocation:Geolocation,private launchNavigator: LaunchNavigator,private activatedRoute: ActivatedRoute,private callNumber: CallNumber,
    private socialSharing :SocialSharing , private appService:AppServiceService )
  
  { }

  ngOnInit() {
    this.appService.dismissLoader();
    this.hospitals = this.activatedRoute.snapshot.paramMap.get('hospitals');
    //this.hospitalsArray = Object.keys(this.hospitals).map(function (key) { return this.hospitals[key]; });
    console.log("#########");
    this.hospitalsArray = JSON.parse(this.hospitals);
    console.log(this.hospitalsArray);
  }

  onClickCall(callingNumber)
  {
    console.log("Call Button Clicked" + callingNumber );
    this.callNumber.callNumber(callingNumber, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  navigateToHospital(hospitalCoords)
  {
    console.log(hospitalCoords);
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //alert(resp.coords.latitude + " " + resp.coords.longitude);


      //emulator testing
      // this.geoLat = 28.6387532;
      // this.geoLong = 77.0738028;

      this.geoLat = resp.coords.latitude;
      this.geoLng = resp.coords.longitude;
      let options: LaunchNavigatorOptions = 
      {
        start: `${this.geoLat} , ${this.geoLng}`,
        app: this.launchNavigator.APP.GOOGLE_MAPS
      }
      this.launchNavigator.navigate( `${hospitalCoords[0]} , ${hospitalCoords[1]}`, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
    });
    
    
    
  }
   shareWhatsApp(name, address,phoneNumber) {
     this.text = `NAME:${name}\nADDRESS:${address}\nPhone Number:${phoneNumber} `;
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null).then(() => {

    }).catch((e) => {
      alert("error" + " " + e);
    });
  }

  


}
