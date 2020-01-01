import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  constructor(private http:HttpClient) { }

  onLoginRequest(username, password)
  
  {
  return this.http.post('http://localhost:8080/authCheck', {
    "username" :username,
    "password": password
  })
  }
}
