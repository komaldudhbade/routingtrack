import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-googlepay',
  templateUrl: './googlepay.component.html',
  styleUrls: ['./googlepay.component.css'],
})
export class GooglepayComponent implements OnInit {
  isShowForm: boolean = false;
  receiverName: string = '';
  amount: number = 0;
  isAmountTransfer: boolean = false;

  

  constructor() {}

  ngOnInit(): void {}

  showForm(): void {
    this.isShowForm = true;
  }
  sentAmount(): void {
    this.isAmountTransfer = true;
  }
}
