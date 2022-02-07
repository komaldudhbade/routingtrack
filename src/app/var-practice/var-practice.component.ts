import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-practice',
  templateUrl: './var-practice.component.html',
  styleUrls: ['./var-practice.component.css']
})
export class VarPracticeComponent implements OnInit {
  public name: string = 'Komal';
  public age: number = 20;
  public account: any = {
    accountHolder : 'Nilesh Nartam',
    accountType : 'Saving',
    accountSegment: 'wealth'
  };
  public table2: number[] = [2,4,6,8,10,12,14,16,18,20];
  public objArray: any = [
    {name: "nilesh"},
    {name:"komal"}
  ];
  private cardNumber: number = 123467;

  public getCardNumber(): number {
    return this.cardNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
