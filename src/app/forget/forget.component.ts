import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  constructor(private HttpForget:MainServiceService){this.ForgotTs()}


  ForgotList=new FormGroup({
    emailId : new FormControl('')
  })
  emailId:any
  ForgotTs(){
    this.HttpForget.Forgot(this.ForgotList.value.emailId).subscribe(res=>console.log(res))
  }
  
}
