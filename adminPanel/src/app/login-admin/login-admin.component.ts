import { Component, OnInit } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
username:"";
password:"";
  constructor(private hospitalService:HospitalserviceService, private router:Router) { }

  ngOnInit() {
  }

  onLogin()
  {
    console.log(this.username);
    console.log(this.password);
    this.hospitalService.onLoginRequest(this.username,this.password).subscribe((result:any)=>
    {
     console.log(result);
        if(result.userMatched)
        {
            //navigate
            this.router.navigate(['/addHospital']);


        }
        else
        {
          alert("Admin Credentials Wrong")
        }
    }, (err)=>
    {
      alert("Error")
      console.log(err);
    })
  }
}
