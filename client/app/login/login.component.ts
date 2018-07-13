import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  showVerification:Boolean = false;
  model: any = {};
  
  constructor(private cs:CommonService) { }
  
  ngOnInit() {
  }

  login() {
    this.showVerification = true;
    console.log(this.showVerification);
    console.log(this.model);
  }

}
