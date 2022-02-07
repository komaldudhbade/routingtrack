import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-hisory',
  templateUrl: './transaction-hisory.component.html',
  styleUrls: ['./transaction-hisory.component.css']
})
export class TransactionHisoryComponent implements OnInit {
  public tranactionList: any[] = [
    {
      accountName: "Jio Prepaid",
      transTime: "Jaunaury 4, 2022 at 4:34 PM",
      amount: 239,
      accontImage: "/assets/images/jio.jpg"
    },
    {
      accountName: "NARAYAN KIRANA STORE",
      transTime: "Jaunaury 3, 2022 at 4:34 PM",
      amount: 2250,
      accontImage: null
    },
    {
      accountName: "SANTKRUPA CUT PICE STORE",
      transTime: "December 30, 2021 at 4:34 PM",
      amount: 1200,
      accontImage: null
    },
    {
      accountName: "toy shop",
      transTime: "December 30, 2021 at 4:34 PM",
      amount: 2400,
      accontImage: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
