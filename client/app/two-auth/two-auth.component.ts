import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-two-auth',
  templateUrl: './two-auth.component.html'
})
export class TwoAuthComponent implements OnInit {

  imgData:string = '';
  key:string = '';
  otpCode:string = '';
  verificationStatus:Boolean = true;

  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.getQrCode();
  }

  getQrCode() {
    this.cs.getQrCode().subscribe((data:any)=>{
      this.imgData = data.img;
      this.key = data.key;
    });
  }

  verify() {
    console.log(this.otpCode);
    this.cs.verifySecretKey({usertoken:this.otpCode,passkey:this.key}).subscribe( (res:any) => {
      this.verificationStatus = res.status;
      console.log(this.verificationStatus);
    });
  }

}
