import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent implements OnInit {
  userName:string='';
  userMessage:string='';
  isMsgSent:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }
sentMsg():void{
 this.isMsgSent=true;

}

}
