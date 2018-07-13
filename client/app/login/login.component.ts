import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginErr:Boolean = false;
  showVerification:Boolean = false;
  model: any = {};

  constructor(private cs:CommonService) { }

  login() {
    this.cs.login(this.model).subscribe((res: any) => {
      if(res.status){
        this.showVerification = true; 
      } else {
        this.loginErr = true;
      }
    });
  }

}
