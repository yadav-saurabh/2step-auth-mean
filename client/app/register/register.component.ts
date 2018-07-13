import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerErr = false;
  showVerification: Boolean = false;
  model: any = {};

  constructor(private cs: CommonService) { }

  register() {
    this.cs.verifyUser(this.model).subscribe((res: any) => {
      if (res.status) {
        this.showVerification = true;
      } else {
        this.registerErr = true;
      }
    });
  }

}
