import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

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

  constructor(private cs: CommonService) { }

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
    if (this.authType === 'register') {
      this.cs.register(this.formData).subscribe((res: any) => {
        console.log('register response');
        console.log(res);
      });
    } else if (this.authType === 'login') {
      this.cs.login(this.formData).subscribe((res: any) => {
        console.log('login response');
        console.log(res);
      });
    }
    // console.log('this.authType');
    // console.log(this.authType);
    // console.log(this.formData);
    // console.log(this.otpCode);
    // this.cs.verifySecretKey({usertoken:this.otpCode,passkey:this.key}).subscribe( (res:any) => {
    //   this.verificationStatus = res.status;
    //   console.log(this.verificationStatus);
    // });
  }

}
