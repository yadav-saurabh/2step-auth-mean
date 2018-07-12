import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: Object;
  notificationsConfig = {
    timeOut: 2500,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'fromRight'
  };
  constructor(private router: Router) { }


  auth() {
    
  }

  guestLogin() {

  }

  login(form: NgForm) {
    if (form.valid) {

    } else {

    }
  }

  register(form: NgForm) {
    if (form.valid) {

    } else {

    }
  }

}
