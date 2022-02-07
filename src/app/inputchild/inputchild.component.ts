import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.css'],
})
export class InputchildComponent implements OnInit {
  isShowForm: boolean = false;
  receiverName: string = '';
  amount: number = 0;
  receiverCity: string = '';
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
