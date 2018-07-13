import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showVerification:Boolean = false;
  model: any = {};
  
  constructor() { }

  ngOnInit() {
  }

  register() {
    this.showVerification = true;
    console.log(this.showVerification);
    console.log(this.model);
  }

}
