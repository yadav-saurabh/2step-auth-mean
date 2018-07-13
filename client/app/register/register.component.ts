import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerErr = false;
  showVerification:Boolean = false;
  model: any = {};
  
  constructor(private cs: CommonService) { }

  ngOnInit() {
  }

  register() {
    this.registerErr = false;
    console.log(this.model);
    this.cs.verifyUser(this.model).subscribe((res: any) => {
      console.log('register response');
      console.log(res)
      if(res.status){
        this.showVerification = true; 
      } else {
        this.registerErr = true;
      }
    });
    // this.showVerification = true;
    // console.log(this.showVerification);
    // console.log(this.model);
    // this.cs.login(this.formData).subscribe((res: any) => {
    //   console.log('login response');
    //   console.log(res);
    // });
  }

}
