import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  akshay:any
  LoginList=new FormGroup({
    email:new FormControl(),
    pwd:new FormControl()
  })
  constructor(private HttpLogin: MainServiceService) {
    this.LoginTs() }



LoginTs(){
this.HttpLogin.Login(this.LoginList.value).subscribe(res=>console.log(res))
}


}
