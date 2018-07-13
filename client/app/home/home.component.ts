import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.model-outer{height:100vh} .model-inner{flex-direction:column}']
})
export class HomeComponent  {

  address = '';
  privateKey = '';

  constructor(private cs:CommonService) { }

  genrateRandom(){
    this.cs.genrateWallet().subscribe((data:any)=>{
      this.privateKey = data.privateKey;
      this.address = data.address;
    });
  }

}
