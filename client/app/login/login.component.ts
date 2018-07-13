import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginErr:Boolean = false;
  showVerification:Boolean = false;
  model: any = {};

  constructor(private cs:CommonService) { }
  
  ngOnInit() {
  }

  login() {
    this.loginErr = false;
    console.log(this.model);
    this.cs.login(this.model).subscribe((res: any) => {
      console.log('login response');
      if(res.status){
        this.showVerification = true; 
      } else {
        this.loginErr = true;
      }
    });
  }

}
