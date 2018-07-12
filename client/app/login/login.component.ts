import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imgData = '';
  key = '';
  otpCode = '';

  constructor(private cs:CommonService) { }
  
  ngOnInit() {
  }

  login(form:NgForm){
    console.log('login form');
    if (form.valid) {
  
    } else {
  
    }
    this.cs.getQrCode().subscribe((res: any) => {
      this.imgData = res.img;
      this.key = res.key;
    });
  }

  verify() {
    console.log(this.otpCode);
    this.cs.verifySecretKey({usertoken:this.otpCode,passkey:this.key}).subscribe( (data) => {
      console.log(data);
    });
  }
  
}
