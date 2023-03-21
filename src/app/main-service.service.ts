import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {


  baseurl: string = "http://15.206.171.20:9090"
  constructor(private HttpSer: HttpClient) { }

  // Login Post Method
  Login(body: any) {
    return this.HttpSer.post(`${this.baseurl}/login`, body, { responseType: 'text' })
  }
  // Forgot get Method
  Forgot(emailId: any) {
    return this.HttpSer.get(`${this.baseurl}/forgotPwd/${emailId}`)
  }
  // Registration post Method
  Register(body: any) {
    return this.HttpSer.post(`${this.baseurl}/saveUser`, body, { responseType: 'text' })
  }
  // Unlock post Method
  unlock(body: any) {
    console.log(body)
    return this.HttpSer.post(`${this.baseurl}/unlock`, body, { responseType: 'text' })
  }
  // forGettingOtp/Unique email (use in login registration )
  checkEmail(email: any) {
    return this.HttpSer.get(`${this.baseurl}/emailcheck/${email}`, { responseType: 'text' })
  }
  //country get method
  Country() {
    return this.HttpSer.get(`${this.baseurl}/countries`)
  }
  //state Get method
  State(countryId: number) {
    return this.HttpSer.get(`${this.baseurl}/states/${countryId}`)
  }
  //city get mehtod
  City(stateId: Number) {
    return this.HttpSer.get(`${this.baseurl}/cities/${stateId}`)
  }
}

