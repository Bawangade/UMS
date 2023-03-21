import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {
  constructor(private Httpunlock:MainServiceService,private Activate:ActivatedRoute,private route:Router){}

  unlockList=new FormGroup({
    confirmPwd:new FormControl(''),
    emailId:new FormControl('')  ,
   newPwd:new FormControl('')  ,
    tempPwd:new FormControl('')  
})
UnlockTs(){
  this.Httpunlock.unlock(this.unlockList.value).subscribe(res=>{console.log(res);
    this.route.navigate(['/login'])})
  }

}

