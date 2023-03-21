import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private HttpRegister:MainServiceService){this.countryTs() }
ngOninit(): void{this.RegisterTs()}
  registrationForm=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    dob:new FormControl(''),
    gender:new FormControl(''),
    stateId:new FormControl(''),
    cityId:new FormControl(''),
    countryId:new FormControl(''),
    phno:new FormControl('')
  })

RegisterTs(){
this.HttpRegister.Register(this.registrationForm.value).subscribe(res=>{console.log(res);
  alert("please check your email to unlock account")})
}
email:any
  emailTs(email:any){
this.HttpRegister.checkEmail(email).subscribe(res=>console.log(res))
  }
  country:any
  countryTs(){
    this.HttpRegister.Country().subscribe(res=>this.country=res)
  }
  state:any
  stateTs(countryId:number){
    this.HttpRegister.State(countryId).subscribe(res=>this.state=res)
  }
  city:any
  cityTs(stateId:number){
this.HttpRegister.City(stateId).subscribe(res=>this.city=res)
  }
  Reset(value:FormGroup){value.reset()

  }

}
