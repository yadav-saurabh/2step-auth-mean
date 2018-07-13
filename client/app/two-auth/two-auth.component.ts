import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-auth',
  templateUrl: './two-auth.component.html'
})
export class TwoAuthComponent implements OnInit {

  imgData: string = '';
  key: string = '';
  otpCode: string = '';
  verificationStatus: Boolean = true;
  @Input() authType: string = '';
  @Input() formData: string = '';
  captchaVerify = false;

  constructor(private cs: CommonService, public router: Router) { }

  ngOnInit() {
    this.getQrCode();
  }

  getQrCode() {
    this.cs.getQrCode().subscribe((data: any) => {
      this.imgData = data.img;
      this.key = data.key;
    });
  }

  verify() {
    this.cs.verifySecretKey({usertoken:this.otpCode,passkey:this.key}).subscribe((res:any) => {
      this.verificationStatus = res.status;
      if(res.status) {
        if (this.authType === 'register') {
          this.cs.register(this.formData).subscribe();
        }
        this.cs.isUserLoggedIn = true;
        this.router.navigate(['/home']);
      }
    });
  }

  reCaptchaSuccess(event){
    this.captchaVerify = true;
  }

  reCaptchaExpire(){
    alert('captcha expired');
  }

}
