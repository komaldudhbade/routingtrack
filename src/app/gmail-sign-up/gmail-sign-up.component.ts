import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmail-sign-up',
  templateUrl: './gmail-sign-up.component.html',
  styleUrls: ['./gmail-sign-up.component.css']
})
export class GmailSignUpComponent implements OnInit {
  public isShownRegisterForm:boolean=true;
  public userData: any={
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirm : ''
  };



  constructor() { }

  ngOnInit(): void {
  } 
  public nextAction():void{
    this.isShownRegisterForm=false;
  };
  public backAction():void{
    this.isShownRegisterForm=true;
  }


}
